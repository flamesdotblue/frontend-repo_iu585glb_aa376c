import { Shield, Truck, Star } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Personalized & curated',
    desc: 'Handpicked bundles and custom notes to match their taste and your message.'
  },
  {
    icon: Truck,
    title: 'Fast, careful delivery',
    desc: 'Nationwide shipping with eco-friendly packaging and tracked delivery.'
  },
  {
    icon: Shield,
    title: 'Quality guaranteed',
    desc: 'Premium products from trusted makers. Love it or we’ll make it right.'
  }
];

export default function Features() {
  return (
    <section id="collections" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Gifts that feel good</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            From cozy self-care sets to gourmet delights, discover gifts for every style and budget.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 p-6 shadow-sm backdrop-blur hover:shadow-md transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-rose-500 to-fuchsia-500 text-white shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>

        <div id="how" className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-black/5 dark:border-white/10 p-5 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
            <p className="text-xs uppercase tracking-wide text-neutral-500">Step 1</p>
            <p className="mt-1 font-semibold">Pick a collection</p>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Choose by occasion, interest, or price range.</p>
          </div>
          <div className="rounded-xl border border-black/5 dark:border-white/10 p-5 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
            <p className="text-xs uppercase tracking-wide text-neutral-500">Step 2</p>
            <p className="mt-1 font-semibold">Personalize it</p>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Add a note, gift wrap, and delivery date.</p>
          </div>
          <div className="rounded-xl border border-black/5 dark:border-white/10 p-5 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
            <p className="text-xs uppercase tracking-wide text-neutral-500">Step 3</p>
            <p className="mt-1 font-semibold">We send the smiles</p>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Tracked shipping and photo confirmation at dispatch.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
