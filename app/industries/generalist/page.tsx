import GlobalNav from '@/components/GlobalNav';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

export default function GeneralistPage() {
  return (
    <main>
      <GlobalNav />
      <HeroBanner title="Generalist" subtitle="Cross-domain datasets and broad model coverage" image="/images/img_industries.jpg" />

      <section className="container py-12">
        <h1 className="text-3xl font-semibold text-white">Generalist</h1>
        <p className="mt-4 text-slate-300 max-w-3xl">
          Generalist datasets are designed to cover a wide range of scenarios, modalities and labels so models can learn robust, transferable features. We create balanced, well-documented datasets with diverse examples and rigorous QA to support foundation models and multi-domain applications.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">Typical use cases</h2>
        <ul className="mt-4 list-inside list-disc text-slate-300">
          <li>Foundation model pretraining and evaluation.</li>
          <li>Cross-domain classification and retrieval.</li>
          <li>Benchmarking and domain transfer studies.</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-white">Data & annotation</h2>
        <p className="mt-4 text-slate-300">
          We combine curated public sources with proprietary collection, enrich labels with multi-rater human review, and provide metadata for provenance, bias analysis, and downstream splits.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">Quality & delivery</h2>
        <p className="mt-4 text-slate-300">Multi-layer QA, consensus labeling, and detailed annotation guidelines are provided with every dataset. Deliverables include dataset packages, label schemas, and audit reports.</p>

        <div className="mt-8">
          <Link href="/contact" className="btn-primary">Request a Generalist Dataset</Link>
        </div>
      </section>
    </main>
  );
}
