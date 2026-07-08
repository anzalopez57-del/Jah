import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Kyc() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">KYC Verification</h1>
      <Card>
        <CardHeader>
          <CardTitle>Verify Your Identity</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">KYC verification form coming soon.</p>
        </CardContent>
      </Card>
    </div>
  );
}