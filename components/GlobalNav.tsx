'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

import logo from '../logo.jpg';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Solutions' },
  { href: '/about', label: 'About' },
  { href: '/quality-assurance', label: 'Quality' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#003A8C]/90 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-base font-semibold uppercase tracking-[0.3em] text-white"
        >
          <Image
            src={logo}
            alt="YUG AI logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-md object-contain"
          />
          <span>YUG AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white hover:underline decoration-[rgba(212,175,55,0.14)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex rounded-lg bg-white px-5 py-2 text-sm font-medium text-[#003A8C] transition hover:bg-slate-100"
        >
          Book a Call
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-[#002F73] border-t border-white/10 z-50 w-full">
          <div className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="p-4">
              <Link
                href="/contact"
                className="block w-full rounded-lg bg-white px-4 py-3 text-center font-medium text-[#003A8C]"
                onClick={() => setIsOpen(false)}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}