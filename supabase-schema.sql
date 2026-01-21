-- Create vector extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS vector;

-- Create portfolio_embeddings table
CREATE TABLE IF NOT EXISTS portfolio_embeddings (
  id BIGSERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  embedding VECTOR(384),  -- dimension for all-MiniLM-L6-v2
  metadata JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for vector similarity search
CREATE INDEX IF NOT EXISTS portfolio_embeddings_embedding_idx 
ON portfolio_embeddings 
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);

-- Create function for similarity search
CREATE OR REPLACE FUNCTION match_documents(
  query_embedding VECTOR(384),
  match_threshold FLOAT,
  match_count INT
)
RETURNS TABLE (
  id BIGINT,
  content TEXT,
  metadata JSONB,
  similarity FLOAT
)
LANGUAGE SQL STABLE
AS $$
  SELECT
    id,
    content,
    metadata,
    1 - (embedding <=> query_embedding) AS similarity
  FROM portfolio_embeddings
  WHERE 1 - (embedding <=> query_embedding) > match_threshold
  ORDER BY embedding <=> query_embedding
  LIMIT match_count;
$$;

-- Create analytics table
CREATE TABLE IF NOT EXISTS chat_analytics (
  id BIGSERIAL PRIMARY KEY,
  type TEXT NOT NULL,           -- 'chatbot' or 'agent'
  question TEXT,
  response_time_ms INT,
  chunks_retrieved INT,
  error TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for analytics queries
CREATE INDEX IF NOT EXISTS chat_analytics_created_at_idx 
ON chat_analytics (created_at DESC);

CREATE INDEX IF NOT EXISTS chat_analytics_type_idx 
ON chat_analytics (type);

COMMENT ON TABLE portfolio_embeddings IS 'Stores portfolio content chunks and their vector embeddings for RAG';
COMMENT ON TABLE chat_analytics IS 'Lightweight analytics for tracking chatbot usage';
