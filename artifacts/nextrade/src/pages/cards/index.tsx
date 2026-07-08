import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Cards() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Payment Cards</h1>
      <Card>
        <CardHeader>
          <CardTitle>Your Cards</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">No cards yet.</p>
        </CardContent>
      </Card>
    </div>
  );
}