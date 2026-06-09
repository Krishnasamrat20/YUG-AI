import Link from 'next/link';
import GlobalNav from '@/components/GlobalNav';
import HeroBanner from '@/components/HeroBanner';

const industries = [
  { href: '/industries/audio-annotation', title: 'Audio Annotation' },
  { href: '/industries/boundary-box-labeling', title: 'Boundary box labeling' },
  { href: '/industries/autonomous-vehicles', title: 'Autonomous Vehicles' },
  { href: '/industries/generalist', title: 'Generalist' },
  { href: '/industries/ig-entity-reference', title: 'IG-Entity reference' },
  { href: '/industries/prompt-writing', title: 'Prompt-writing' },
  { href: '/industries/3d-point-cloud-annotation', title: '3D point cloud annotation' },
  { href: '/industries/video-annotation', title: 'Video Annotation' },
  { href: '/industries/text-annotation', title: 'Text Annotation' },
];

export default function IndustriesPage() {
  return (
    <main>
      <GlobalNav />
      <HeroBanner title="AI Data Capabilities" subtitle="Annotation, Evaluation & AI Workflow Support" image="/images/img_industries.jpg" height={150}/>
      <section className="container py-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Solutions</p>
          <h1 className="text-5xl font-semibold text-white">AI solutions tailored to your sector.</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Create specialized pages for each industry so decision makers see the right AI use cases, quality controls, and production-ready workflows.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link key={industry.href} href={industry.href} className="card p-8 transition hover:border-gold-50 hover:bg-slate-950/95">
              <h2 className="text-2xl font-semibold text-white">{industry.title}</h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
