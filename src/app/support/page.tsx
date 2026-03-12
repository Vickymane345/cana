import { Suspense } from 'react';
import SupportClient from '@/components/SupportClient';

export default function SupportPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SupportClient />
    </Suspense>
  );
}
