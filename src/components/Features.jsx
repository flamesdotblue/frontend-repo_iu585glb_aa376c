import { Shield, Zap, Star } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Production-grade',
    desc: 'Ship with confidence using accessible patterns, dark mode, and responsive design built-in.'
  },
  {
    icon: Zap,
    title: 'Fast by default',
    desc: 'Optimized for performance with lightweight components and sensible defaults.'
  },
  {
    icon: Star,
    title: 'Aesthetic by design',
    desc: 'Tasteful gradients, modern typography, and subtle micro-interactions out of the box.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything you need</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            A carefully curated set of building blocks that help you move from idea to launch.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 p-6 shadow-sm backdrop-blur hover:shadow-md transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
