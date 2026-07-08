import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Billing() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Billing</h1>
      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">No billing records.</p>
        </CardContent>
      </Card>
    </div>
  );
}