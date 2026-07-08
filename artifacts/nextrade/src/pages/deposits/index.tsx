import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Deposits() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Deposits</h1>
      <Card>
        <CardHeader>
          <CardTitle>Make a Deposit</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">Deposit options coming soon.</p>
        </CardContent>
      </Card>
    </div>
  );
}