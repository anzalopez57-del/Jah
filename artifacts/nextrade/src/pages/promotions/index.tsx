import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Promotions() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Promotions</h1>
      <Card>
        <CardHeader>
          <CardTitle>Active Promotions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">No active promotions.</p>
        </CardContent>
      </Card>
    </div>
  );
}