import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function P2PMarket() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">P2P Market</h1>
      <Card>
        <CardHeader>
          <CardTitle>Available Offers</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">No offers available.</p>
        </CardContent>
      </Card>
    </div>
  );
}