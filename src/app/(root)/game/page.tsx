import { GamePageContent } from '@/app/components/GamePageContent';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GamePageContent />
    </Suspense>
  );
}
