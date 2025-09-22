import { useState } from 'react';

import { Button } from './Button';

type CounterProps = {
  initialCount?: number;
};

function Counter({ initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  return (
    <section className="flex w-full max-w-sm flex-col items-center gap-4 rounded-2xl bg-slate-900/60 p-6 text-center shadow-lg ring-1 ring-inset ring-white/10">
      <div className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">Counter</div>
      <p className="text-5xl font-semibold text-slate-100" aria-live="polite">
        {count}
      </p>
      <p className="text-sm text-slate-300">
        Click the button to increment the counter. The state is managed locally with{' '}
        <span className="font-medium text-slate-100">useState</span>.
      </p>
      <Button aria-label="increment" onClick={() => setCount((previous) => previous + 1)}>
        Increment
      </Button>
    </section>
  );
}

export { Counter };
