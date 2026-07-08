#!/bin/bash
set -e

echo "🚀 Setting up development environment..."

npm install -g pnpm
echo "📦 Installing workspace dependencies..."
pnpm install --frozen-lockfile

if [ ! -f .env ]; then
  cp .env.example .env
fi

echo "✅ Development environment setup complete!"