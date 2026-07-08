import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Support() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Support</h1>
      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">Support form coming soon.</p>
        </CardContent>
      </Card>
    </div>
  );
}