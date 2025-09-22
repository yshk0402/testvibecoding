import { Button } from '@/components/Button';
import { Counter } from '@/components/Counter';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 py-12 text-slate-100">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 text-center">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Welcome</p>
          <h1 className="text-balance text-4xl font-semibold sm:text-5xl">
            Build faster with Next.js & Tailwind CSS
          </h1>
          <p className="text-base text-slate-300">
            Kick-start your project with a preconfigured Next.js setup that includes Tailwind CSS
            for styling, plus linting and formatting powered by ESLint and Prettier.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button>Get Started</Button>
            <Button variant="secondary" className="sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
        <Counter />
      </div>
    </main>
  );
}
