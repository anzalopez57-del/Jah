# Jah - Full Stack Trading Platform - Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js >= 20
- pnpm >= 9
- PostgreSQL >= 16 (or use Docker)

### Local Development

```bash
pnpm install
cp .env.example .env
docker-compose -f docker-compose.dev.yml up -d
pnpm dev:all
```

### Services

- **API Server**: http://localhost:8080
- **Frontend**: http://localhost:5173
- **Admin Portal**: http://localhost:3000
- **PostgreSQL**: localhost:5432

## 📦 Project Structure

```
artifacts/
├── api-server/       # Express.js backend
├── nextrade/         # Vite + React frontend
└── admin-portal/     # Vite + React admin

lib/
├── api-client-react/ # Shared API client
├── api-zod/          # Shared schemas
└── db/               # Database utilities
```

## ✨ Features

✅ User Authentication (Login/Signup)
✅ Email OTP Verification
✅ Dashboard with Portfolio Overview
✅ Wallet Management
✅ Trading Interface
✅ P2P Marketplace
✅ Admin Dashboard
✅ KYC Verification
✅ Payment Integration Ready

## 🛠️ Commands

```bash
pnpm dev:all         # Start all services
pnpm dev             # API server only
pnpm build:all       # Build all
pnpm typecheck       # Type checking
pnpm clean           # Clean
pnpm reset           # Full reset
```

## 🔐 Authentication

1. Sign up with email/password
2. Verify OTP sent to email
3. JWT token issued
4. Access dashboard

## 📝 Configuration

Update `.env` with:

```bash
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/jah_dev
JWT_SECRET=your-secret-key
NODE_ENV=development
```

## 🚀 Deployment

Supports Railway, Render, Vercel, Docker, and more.
See DEPLOY.md for details.

## ✅ Production Checklist

Review PRODUCTION_CHECKLIST.md before going live.
