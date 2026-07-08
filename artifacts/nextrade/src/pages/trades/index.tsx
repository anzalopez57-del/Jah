import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Trades() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Trades</h1>
      <Card>
        <CardHeader>
          <CardTitle>Active Trades</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">No active trades.</p>
        </CardContent>
      </Card>
    </div>
  );
}