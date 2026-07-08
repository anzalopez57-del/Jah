import React from 'react';

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">XpressPro FX</h1>
          <div className="space-x-4">
            <a href="/login" className="text-gray-600 hover:text-gray-900">Sign In</a>
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 XpressPro FX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}