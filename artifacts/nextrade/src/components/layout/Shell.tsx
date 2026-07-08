import React from 'react';

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r border-gray-200">
        <nav className="p-4 space-y-2">
          <a href="/dashboard" className="block px-4 py-2 rounded hover:bg-gray-100">Dashboard</a>
          <a href="/wallets" className="block px-4 py-2 rounded hover:bg-gray-100">Wallets</a>
          <a href="/trades" className="block px-4 py-2 rounded hover:bg-gray-100">Trades</a>
          <a href="/p2p" className="block px-4 py-2 rounded hover:bg-gray-100">P2P</a>
        </nav>
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}