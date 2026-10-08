# ClientProof

**Turn your work into proof that sells.**

ClientProof is a SaaS platform for interior designers, architects, contractors, and other professionals to showcase their work through beautiful, shareable project pages that help win more clients.

## Features
- **Project Galleries**: Upload before & after photos with an interactive slider.
- **Lead Capture**: Built-in quote request forms.
- **Client Reviews**: Collect and showcase testimonials.
- **Analytics**: Track views, leads, and conversions.
- **Custom Branding**: Add logos and custom colors to your portfolio.
- **Shareable Links**: Easily share your work on WhatsApp, Instagram, or TikTok.

## Tech Stack
- **Frontend**: React, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication & Storage**: Supabase
- **Billing**: Stripe

## Installation

```bash
# Install dependencies for both frontend and backend
npm install

# Setup your environment variables
cp .env.example .env

# Generate Prisma client and seed database
npm run db:migrate --workspace=backend
npm run db:seed --workspace=backend

# Start the development servers
npm run dev
```

The frontend will be available at `http://localhost:3000` and the API at `http://localhost:3001`.

## Architecture
This is a monorepo setup utilizing npm workspaces:
- `frontend/`: The React application
- `backend/`: The Express API and Prisma schema

## Production Deployment
- **Frontend**: Deploy to Vercel
- **Backend**: Deploy to Railway or Render
- **Database**: Host on Supabase or Neon
