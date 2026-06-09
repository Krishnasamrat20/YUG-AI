import Link from 'next/link';

const services = [
  { href: '/services/ai-evaluation', label: 'AI Evaluation' },
  { href: '/services/rlhf', label: 'RLHF' },
  { href: '/services/data-annotation', label: 'Data Annotation' },
  { href: '/services/quality-assurance', label: 'Quality Assurance' }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-transparent py-10 text-slate-400">
      <div className="container grid gap-10 md:grid-cols-3 site-texture relative">

        {/* Company */}
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gold">
            YUG AI
          </p>

          <h3 className="mt-4 text-xl font-semibold text-white">
            Human Intelligence for Better AI
          </h3>

          <p className="mt-4 text-sm leading-7">
            Delivering high-quality AI training data, RLHF workflows,
            model evaluation, and quality assurance services for
            next-generation AI systems.
          </p>
        </div>

        {/* Services */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
            Services
          </p>

          <div className="mt-4 flex flex-col gap-3 text-sm">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="transition hover:text-white"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
            Contact
          </p>

          <div className="mt-4 space-y-3 text-sm">
            <a
              href="mailto:hello@yugai.live"
              className="block transition hover:text-white"
            >
              hello@yugai.live
            </a>

            <a
              href="https://wa.me/918810204262"
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-white"
            >
              +91 8810204262
            </a>
          </div>
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-end">
            <img
              src="images/logo1.png"
              alt="YUG AI Logo"
              className="h-32 w-auto object-contain opacity-90"
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="md:col-span-3 border-t border-white/6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} YUG AI. All rights reserved.
          </p>

          <div className="flex items-center gap-2 mt-3 md:mt-0">
            <span className="text-xs uppercase tracking-wider text-slate-400">
              Powered by
            </span>
            <a
              href="https://brahmcloud.com"
              target="_blank"
              rel="noreferrer"
              className="text-gold font-semibold hover:underline"
            >
              BRAHMCLOUD
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}