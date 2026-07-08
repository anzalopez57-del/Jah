import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Managers() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Fund Managers</h1>
      <Card>
        <CardHeader>
          <CardTitle>Available Managers</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">No managers available.</p>
        </CardContent>
      </Card>
    </div>
  );
}