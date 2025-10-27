import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300 shadow-sm backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-fuchsia-600" />
          <span>Meet your new aesthetic landing page</span>
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl font-[800] tracking-tight leading-tight bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
          Build beautiful UIs at the speed of thought
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
          A clean starter with modern components, delightful interactions, and sensible defaults. Perfect for product sites, SaaS apps, and portfolios.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#get-started" className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 shadow-lg shadow-fuchsia-600/20 hover:shadow-xl transition">
            Get started free
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-neutral-800 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition">
            Explore features
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 p-5 shadow-sm backdrop-blur">
            <p className="text-sm text-neutral-600 dark:text-neutral-300">Prebuilt components</p>
            <p className="mt-1 text-xl font-semibold">Compose quickly</p>
          </div>
          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 p-5 shadow-sm backdrop-blur">
            <p className="text-sm text-neutral-600 dark:text-neutral-300">Elegant defaults</p>
            <p className="mt-1 text-xl font-semibold">Look polished</p>
          </div>
          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 p-5 shadow-sm backdrop-blur">
            <p className="text-sm text-neutral-600 dark:text-neutral-300">Accessible UI</p>
            <p className="mt-1 text-xl font-semibold">Reach everyone</p>
          </div>
        </div>
      </div>
    </section>
  );
}
