export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-300">
        <p>© {new Date().getFullYear()} Vibe. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-black dark:hover:text-white">Privacy</a>
          <a href="#" className="hover:text-black dark:hover:text-white">Terms</a>
          <a href="#" className="hover:text-black dark:hover:text-white">Support</a>
        </div>
      </div>
    </footer>
  );
}
