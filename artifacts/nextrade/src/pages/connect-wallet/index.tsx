import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ConnectWallet() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Connect Wallet</h1>
      <Card>
        <CardHeader>
          <CardTitle>Available Wallets</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">No wallets available.</p>
        </CardContent>
      </Card>
    </div>
  );
}