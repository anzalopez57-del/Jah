import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Assets() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Assets</h1>
      <Card>
        <CardHeader>
          <CardTitle>Your Assets</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">No assets yet.</p>
        </CardContent>
      </Card>
    </div>
  );
}