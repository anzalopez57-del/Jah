import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Withdrawals() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Withdrawals</h1>
      <Card>
        <CardHeader>
          <CardTitle>Withdraw Funds</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">Withdrawal options coming soon.</p>
        </CardContent>
      </Card>
    </div>
  );
}