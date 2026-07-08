import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Wallets() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Wallets</h1>
      <Card>
        <CardHeader>
          <CardTitle>Your Wallets</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">No wallets yet. Create one to get started.</p>
        </CardContent>
      </Card>
    </div>
  );
}