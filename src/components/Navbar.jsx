import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-neutral-900/80 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-lg">Vibe</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition">Features</a>
            <a href="#pricing" className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition">Pricing</a>
            <a href="#faq" className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
              Sign in
            </button>
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 shadow hover:shadow-md transition">
              Get started
            </button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              <a href="#features" className="rounded-md px-3 py-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800">Features</a>
              <a href="#pricing" className="rounded-md px-3 py-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800">Pricing</a>
              <a href="#faq" className="rounded-md px-3 py-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800">FAQ</a>
              <div className="mt-2 flex gap-2">
                <button className="flex-1 px-4 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
                  Sign in
                </button>
                <button className="flex-1 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 shadow hover:shadow-md transition">
                  Get started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
