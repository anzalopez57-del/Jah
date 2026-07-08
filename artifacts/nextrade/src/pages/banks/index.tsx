import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Banks() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Bank Accounts</h1>
      <Card>
        <CardHeader>
          <CardTitle>Your Banks</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">No bank accounts yet.</p>
        </CardContent>
      </Card>
    </div>
  );
}