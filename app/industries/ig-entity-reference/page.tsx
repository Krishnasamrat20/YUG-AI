import GlobalNav from '@/components/GlobalNav';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

export default function IGEntityReferencePage() {
  return (
    <main>
      <GlobalNav />
      <HeroBanner title="IG entity reference" subtitle="Entity linking and reference datasets for specialized domains" image="/images/img_healthcare.jpg" />

      <section className="container py-12">
        <h1 className="text-3xl font-semibold text-white">IG entity reference</h1>
        <p className="mt-4 text-slate-300 max-w-3xl">
          Structured entity linking and reference datasets for biomedical, clinical, and domain-specific knowledge graphs. We provide mention normalization, canonical mapping, and confidence annotations to support downstream retrieval and NER models.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">Deliverables</h2>
        <ul className="mt-4 list-inside list-disc text-slate-300">
          <li>Normalized entity tables and canonical URIs.</li>
          <li>Contextual mention spans with disambiguation labels.</li>
          <li>Audit reports and annotation guidelines.</li>
        </ul>

        <div className="mt-8">
          <Link href="/contact" className="btn-primary">Request entity-linking data</Link>
        </div>
      </section>
    </main>
  );
}
