import GlobalNav from '@/components/GlobalNav';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

export default function OtherPage() {
  return (
    <main>
      <GlobalNav />
      <HeroBanner title="Other" subtitle="Custom datasets and niche modality support" image="/images/img_industries.jpg" />

      <section className="container py-12">
        <h1 className="text-3xl font-semibold text-white">Other</h1>
        <p className="mt-4 text-slate-300 max-w-3xl">
          If your use case doesn't fit a standard category, we design custom annotation workflows, specialized tooling, and small-scale pilots to validate feasibility and cost before scaling.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">What we offer</h2>
        <ul className="mt-4 list-inside list-disc text-slate-300">
          <li>Custom tooling and schema design.</li>
          <li>Pilot datasets and cost estimates.</li>
          <li>Research collaborations and data partnerships.</li>
        </ul>

        <div className="mt-8">
          <Link href="/contact" className="btn-primary">Discuss a custom dataset</Link>
        </div>
      </section>
    </main>
  );
}
