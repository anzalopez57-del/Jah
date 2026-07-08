import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Referrals() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Referral Program</h1>
      <Card>
        <CardHeader>
          <CardTitle>Earn Commissions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">Referral details coming soon.</p>
        </CardContent>
      </Card>
    </div>
  );
}