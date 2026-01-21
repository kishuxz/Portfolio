// scripts/ingest-portfolio.js
// RAG Ingestion Pipeline - Embeds portfolio content into Supabase vector DB

const fs = require('fs').promises;
const path = require('path');
const matter = require('gray-matter');
const { createClient } = require('@supabase/supabase-js');
const { HfInference } = require('@huggingface/inference');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

// Configuration
const CONTENT_DIR = path.join(__dirname, '../content');
const CHUNK_SIZE = 500; // characters per chunk
const CHUNK_OVERLAP = 100; // overlap for context preservation

// Chunking function
function chunkText(text, metadata, chunkSize = CHUNK_SIZE, overlap = CHUNK_OVERLAP) {
    const chunks = [];
    const sections = text.split(/\n##\s+/); // Split by markdown headings

    sections.forEach((section, index) => {
        const sectionTitle = index === 0 ? metadata.title : section.split('\n')[0];
        const sectionContent = index === 0 ? section : section.substring(section.indexOf('\n') + 1);

        // Further chunk if section is too large
        if (sectionContent.length <= chunkSize) {
            chunks.push({
                content: sectionContent.trim(),
                metadata: {
                    ...metadata,
                    section: sectionTitle,
                    chunk_index: chunks.length
                }
            });
        } else {
            // Split large sections into smaller chunks with overlap
            for (let i = 0; i < sectionContent.length; i += chunkSize - overlap) {
                const chunk = sectionContent.slice(i, i + chunkSize);
                chunks.push({
                    content: chunk.trim(),
                    metadata: {
                        ...metadata,
                        section: sectionTitle,
                        chunk_index: chunks.length
                    }
                });
            }
        }
    });

    return chunks;
}

// Generate embeddings using HuggingFace
async function generateEmbedding(text) {
    try {
        const response = await hf.featureExtraction({
            model: 'sentence-transformers/all-MiniLM-L6-v2',
            inputs: text
        });

        // Response is already a 384-dim array
        if (Array.isArray(response) && typeof response[0] === 'number') {
            return response;
        }

        // Fallback: if it's wrapped in another array
        if (Array.isArray(response[0]) && typeof response[0][0] === 'number') {
            return response[0];
        }

        throw new Error(`Unexpected embedding format: ${typeof response}`);
    } catch (error) {
        console.error('Error generating embedding:', error.message);
        throw error;
    }
}

// Process a single markdown file
async function processMarkdownFile(filePath) {
    const content = await fs.readFile(filePath, 'utf-8');
    const { data: frontmatter, content: markdownContent } = matter(content);

    const baseMetadata = {
        source: path.relative(CONTENT_DIR, filePath),
        title: frontmatter.title || path.basename(filePath, '.md'),
        url: frontmatter.url || '',
        type: frontmatter.type || frontmatter.category || 'content',
        skills: frontmatter.skills || [],
        date: frontmatter.date || ''
    };

    // Chunk the content
    const chunks = chunkText(markdownContent, baseMetadata);

    console.log(`Processing ${path.basename(filePath)}: ${chunks.length} chunks`);

    return chunks;
}

// Get all markdown files recursively
async function getMarkdownFiles(dir) {
    const files = [];
    const items = await fs.readdir(dir, { withFileTypes: true });

    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
            files.push(...await getMarkdownFiles(fullPath));
        } else if (item.isFile() && item.name.endsWith('.md')) {
            files.push(fullPath);
        }
    }

    return files;
}

// Main ingestion function
async function ingestPortfolio() {
    console.log('🚀 Starting portfolio ingestion...\n');

    // Check environment variables
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
        throw new Error('NEXT_PUBLIC_SUPABASE_URL is not set in .env.local');
    }
    if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY is not set in .env.local');
    }
    if (!process.env.HUGGINGFACE_API_KEY) {
        throw new Error('HUGGINGFACE_API_KEY is not set in .env.local');
    }

    // Get all markdown files
    const markdownFiles = await getMarkdownFiles(CONTENT_DIR);
    console.log(`📁 Found ${markdownFiles.length} markdown files\n`);

    // Process all files
    const allChunks = [];
    for (const file of markdownFiles) {
        const chunks = await processMarkdownFile(file);
        allChunks.push(...chunks);
    }

    console.log(`\n📝 Generated ${allChunks.length} total chunks`);
    console.log('🔢 Generating embeddings...\n');

    // Generate embeddings and store
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < allChunks.length; i++) {
        const chunk = allChunks[i];

        try {
            // Generate embedding
            const embedding = await generateEmbedding(chunk.content);

            // Store in Supabase with JSONB embedding
            const { error } = await supabase
                .from('portfolio_embeddings')
                .insert({
                    content: chunk.content,
                    embedding: embedding,  // JSONB accepts arrays directly
                    metadata: chunk.metadata
                });

            if (error) throw error;

            successCount++;
            process.stdout.write(`\r✓ Processed ${successCount}/${allChunks.length} chunks`);

            // Rate limiting: wait 500ms between requests
            await new Promise(resolve => setTimeout(resolve, 500));

        } catch (error) {
            errorCount++;
            console.error(`\n❌ Error processing chunk ${i}:`, error.message);
        }
    }

    console.log(`\n\n✅ Ingestion complete!`);
    console.log(`   Success: ${successCount} chunks`);
    console.log(`   Errors: ${errorCount} chunks`);
    console.log(`\n🎉 Portfolio RAG system is ready!\n`);
}

// Run ingestion
if (require.main === module) {
    ingestPortfolio()
        .then(() => process.exit(0))
        .catch((error) => {
            console.error('\n❌ Ingestion failed:', error.message);
            process.exit(1);
        });
}

module.exports = { ingestPortfolio, generateEmbedding };
