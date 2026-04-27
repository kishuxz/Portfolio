# Portfolio AI System

Production-ready portfolio website with Next.js, Tailwind CSS, and a context-engineered portfolio assistant.

## Features

- 🎨 Premium UI with glassmorphism and animations
- 🤖 AI assistant with intent routing, structured retrieval, and dynamic context shaping
- 🔍 Agent-based job matching system
- 📱 Fully responsive design
- ♿ Accessibility-first approach
- ⚡ Optimized performance

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, Tailwind CSS
- **AI/ML**: LangChain, Hugging Face Inference API
- **Database**: Supabase (PostgreSQL + pgvector)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account (free tier)
- Hugging Face account (free tier)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Then edit `.env.local` with your credentials:
- Supabase URL and keys
- Hugging Face API key

3. Customize content:
   - Edit `content/resume.md` with your information
   - Update project files in `content/projects/`
   - Replace placeholder links in components

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Setting Up the AI System

1. **Set up Supabase vector database**:
```bash
npm run setup-db
```

2. **Ingest content** (after customizing markdown files):
```bash
npm run ingest
```

This generates embeddings and stores them in Supabase for grounded assistant queries.

## Project Structure

```
/
├── app/                      # Next.js App Router pages
│   ├── layout.js            # Root layout
│   ├── page.js              # Homepage
│   ├── globals.css          # Global styles
│   └── ai/                  # AI features page
├── components/              # React components
├── content/                 # Markdown content for portfolio context
│   ├── resume.md
│   └── projects/
├── lib/                     # Utilities and helpers
│   ├── supabase.js         # Supabase client
│   ├── embeddings.js       # Embedding generation
│   ├── retrieval.js        # Vector search
│   └── rag-chain.js        # Legacy LangChain retrieval pipeline
├── scripts/                 # Admin scripts
│   ├── setup-vector-db.js  # Database initialization
│   └── ingest-content.js   # Content ingestion
└── public/                  # Static assets
```

## Customization

1. **Personal Information**: Update `content/resume.md` frontmatter
2. **Projects**: Add/edit files in `content/projects/`
3. **Colors**: Modify Tailwind theme in `tailwind.config.js`
4. **Social Links**: Update in Hero, Footer components
5. **Profile Photo**: Add image to `/public/profile.jpg` and uncomment in Hero.jsx

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables

Set these in your deployment platform:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_KEY`
- `HUGGINGFACE_API_KEY`

## License

MIT

## Built With

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [LangChain](https://js.langchain.com/)
- [Supabase](https://supabase.com/)
- [Hugging Face](https://huggingface.co/)
