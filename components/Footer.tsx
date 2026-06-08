import Link from 'next/link';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'About' },
  { href: '/quality-assurance', label: 'Quality' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-transparent py-10 text-slate-400">
      <div className="container grid gap-10 md:grid-cols-[1.5fr,1fr] md:items-center site-texture" style={{position:'relative'}}>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gold">YUG AI</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
            AI annotation, evaluation, and development for teams who need accurate data and trustworthy delivery.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Links</p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Contact</p>
            <div className="mt-4 space-y-3 text-sm">
              <a href="mailto:hello@yugai.live" className="block transition hover:text-white">hello@yugai.live</a>
              <a href="https://calendly.com/yug-ai" target="_blank" rel="noreferrer" className="block transition hover:text-white">
                calendly.com/yug-ai
              </a>
              <a href="https://wa.me/918810204262" target="_blank" rel="noreferrer" className="block transition hover:text-white">
                +91 8810204262
              </a>
            </div>
          </div>
        </div>
        <div className="absolute right-6 bottom-4 flex items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-slate-300">Powered by</span>
          <a href="https://brahmcloud.com" target="_blank" rel="noreferrer" className="text-sm font-semibold text-gold hover:underline">
            BRAHMCLOUD
          </a>
        </div>
      </div>
    </footer>
  );
}
