import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export function PublicHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">XpressPro FX</h1>
          <p className="text-xl text-blue-100 mb-8">Professional Forex Trading Platform</p>
          <div className="flex gap-4 justify-center">
            <Link href="/login">
              <Button variant="secondary" size="lg">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button size="lg">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}