import Image from 'next/image';
import Link from 'next/link';
import logo from '../logo.jpg';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Solutions' },
  { href: '/about', label: 'About' },
  { href: '/quality-assurance', label: 'Quality' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' }
];

export default function GlobalNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/8 bg-transparent backdrop-blur-xl">
      <div className="container flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3 text-base font-semibold uppercase tracking-[0.3em] text-white">
          <Image
            src={logo}
            alt="YUG AI logo"
            width={40}
            height={40}
            className="image-transition h-10 w-10 rounded-md bg-transparent object-contain"
          />
          <span>YUG AI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white/90 hover:underline decoration-[rgba(212,175,55,0.14)]">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-primary">
          Book a Call
        </Link>
      </div>
    </header>
  );
}
