import GlobalNav from '@/components/GlobalNav';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

export default function TextAnnotationPage() {
  return (
    <main>
      <GlobalNav />
      <HeroBanner title="Text annotation" subtitle="NER, relation extraction, classification and more" image="/images/img_services.jpg" />

      <section className="container py-12">
        <h1 className="text-3xl font-semibold text-white">Text annotation</h1>
        <p className="mt-4 text-slate-300 max-w-3xl">
          Named entity recognition, relation extraction, sentiment, summarization labels, and structured schema creation for NLP and information extraction use cases.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">Common tasks</h2>
        <ul className="mt-4 list-inside list-disc text-slate-300">
          <li>NER and canonicalization.</li>
          <li>Relation extraction and event annotation.</li>
          <li>Intent classification and slot filling.</li>
        </ul>

        <div className="mt-8">
          <Link href="/contact" className="btn-primary">Request text annotation</Link>
        </div>
      </section>
    </main>
  );
}
