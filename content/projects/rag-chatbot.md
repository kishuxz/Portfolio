---
title: "LLM-Powered RAG Chatbot"
slug: "rag-chatbot"
featured: true
stack:
  - "LangChain"
  - "Next.js"
  - "Supabase"
  - "Hugging Face"
tech_categories:
  - "ML/LLM"
  - "Full-Stack"
impact: "Production-ready RAG system with source citations"
github: "https://github.com/yourusername/project1"
demo: "https://demo-url.com"
---

# LLM-Powered RAG Chatbot

## Problem Statement

Building trustworthy AI assistants requires grounding LLM responses in verifiable sources. Generic chatbots often hallucinate or provide outdated information without attribution.

## Solution

I built a production-ready Retrieval-Augmented Generation (RAG) system that:

- Embeds domain-specific content into a vector database (Supabase pgvector)
- Retrieves relevant context for user queries using semantic search
- Generates answers strictly based on retrieved documents
- Provides source citations for every response
- Handles edge cases with graceful fallbacks

## Technical Implementation

### Architecture

```
User Query → Embedding → Vector Search → Context Retrieval → LLM → Cited Response
```

### Key Components

**Ingestion Pipeline**
- Markdown content parsing with metadata extraction
- Text chunking (800 tokens, 100 overlap) for optimal retrieval
- Batch embedding generation using SentenceTransformers
- Vector storage in Supabase with PostgreSQL triggers

**Retrieval System**
- Cosine similarity search with configurable top-k
- Metadata filtering by source type, recency, relevance
- Re-ranking for improved precision

**LLM Integration**
- LangChain orchestration with custom prompt templates
- Mistral-7B-Instruct for response generation
- Streaming API for real-time user feedback
- Strict guardrails: "Answer only from context or say 'I don't have that information'"

## Production Features

- **Rate Limiting**: 10 requests/min per IP using token bucket algorithm
- **Caching**: LRU cache for frequent queries (60% hit rate)
- **Monitoring**: Response latency, retrieval accuracy metrics
- **Error Handling**: Timeout protection, fallback responses

## Impact & Results

- Response accuracy: 92% based on human eval
- Average latency: <2s for end-to-end query
- Zero hallucination incidents in production (strict grounding)
- Source attribution: 100% of responses include citations

## Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Next.js API Routes, LangChain
- **Database**: Supabase (PostgreSQL + pgvector)
- **LLM**: Mistral-7B-Instruct (Hugging Face Inference API)
- **Embeddings**: sentence-transformers/all-MiniLM-L6-v2

## Challenges Overcome

1. **Chunking Strategy**: Tested multiple chunk sizes; optimized for semantic coherence vs retrieval granularity
2. **Context Window Management**: Implemented dynamic context sizing based on query complexity
3. **Citation Extraction**: Built custom parser to extract and format source metadata

## What I Learned

- Vector database optimization techniques (indexing, query performance)
- Prompt engineering for constrained generation
- Production deployment of LLM applications with cost/latency tradeoffs
- Evaluation methodologies for RAG systems

## Links

- [GitHub Repository](https://github.com/yourusername/project1)
- [Live Demo](https://demo-url.com)
- [Technical Deep Dive (Blog Post)](https://blog-url.com)
