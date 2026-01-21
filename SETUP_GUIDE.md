# Supabase Setup Guide

## Quick Start

### 1. Create Supabase Project

1. Go to https://supabase.com
2. Click "Start your project"
3. Sign up with GitHub (recommended)
4. Click "New Project"
5. Fill in:
   - **Name**: `portfolio-rag`
   - **Database Password**: (save this!)
   - **Region**: Choose closest to you
6. Click "Create new project" (takes ~2 mins)

### 2. Enable pgvector Extension

1. In Supabase Dashboard, go to "Database" → "Extensions"
2. Search for "vector"
3. Enable `vector` extension

### 3. Run SQL Schema

1. Go to "SQL Editor" in left sidebar
2. Click "New query"
3. Copy contents of `supabase-schema.sql`
4. Paste and click "Run"
5. Should see: "Success. No rows returned"

### 4. Get API Keys

1. Go to "Settings" → "API"
2. Copy:
   - **Project URL** (looks like: `https://xxx.supabase.co`)
   - **Anon/Public Key** (long string starting with `eyJ...`)

### 5. Update .env.local

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...your_key_here
```

---

## HuggingFace Setup

### 1. Create Account

1. Go to https://huggingface.co
2. Click "Sign Up"
3. Verify email

### 2. Get API Key

1. Click your profile (top right)
2. Go to "Settings"
3. Click "Access Tokens" in left sidebar
4. Click "New token"
5. Name: `portfolio-rag`
6. Role: `Read`
7. Click "Generate token"
8. Copy token (starts with `hf_...`)

### 3. Update .env.local

```bash
HUGGINGFACE_API_KEY=hf_your_token_here
```

---

## Verify Setup

Test database connection:

```bash
# In Supabase Dashboard → SQL Editor
SELECT COUNT(*) FROM portfolio_embeddings;
-- Should return 0 (empty table)

SELECT * FROM match_documents(
  ARRAY[0.1, 0.2, ...]::vector,  -- dummy vector
  0.5,  -- threshold
  5     -- limit
);
-- Should return empty result (no data yet)
```

---

## Next Steps

Once you've completed this setup:
1. Share the API keys with me
2. I'll create the ingestion script
3. We'll populate the database with portfolio embeddings
4. Build the RAG API endpoints

---

## Troubleshooting

**"Extension vector not found"**
- Make sure you're on Supabase (not local Postgres)
- Enable the extension in Dashboard → Database → Extensions

**"Function match_documents already exists"**
- Safe to ignore, schema is idempotent
- Or use `DROP FUNCTION IF EXISTS match_documents;` first

**API keys not working**
- Make sure keys don't have extra spaces
- Restart Next.js dev server after updating .env.local
- Check keys are for the correct project
