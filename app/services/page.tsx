import Link from 'next/link';
import GlobalNav from '@/components/GlobalNav';
import HeroBanner from '@/components/HeroBanner';

const items = [
  { href: '/services/data-annotation', title: 'Data Annotation', description: 'Precise labels for every AI modality.' },
  { href: '/services/ai-data-collection', title: 'AI Data Collection', description: 'Custom capture and dataset creation.' },
  { href: '/services/ai-evaluation', title: 'AI Evaluation', description: 'Model scoring, edge-case review, and bias checks.' },
  { href: '/services/ai-development', title: 'AI Development', description: 'From prototype models to scalable AI products.' },
  { href: '/services/full-stack-development', title: 'Full Stack Development', description: 'Web and backend systems for ML operations.' }
];

export default function ServicesPage() {
  return (
    <main>
      <GlobalNav />
      <HeroBanner title="Services" subtitle="What we do for your AI products" image="/images/img_services.jpg" height={150} />
      <section className="container py-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Services</p>
          <h1 className="text-5xl font-semibold text-white">Specialized services that accelerate AI programs.</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Separate service pages help your customers and Google find the exact support they need. Each page describes our focused capability and how we deliver measurable results.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="card p-8 transition hover:border-gold-50 hover:bg-slate-950/95">
              <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-slate-400">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
