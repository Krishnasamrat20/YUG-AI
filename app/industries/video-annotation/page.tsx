import GlobalNav from '@/components/GlobalNav';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

export default function VideoAnnotationPage() {
  return (
    <main>
      <GlobalNav />
      <HeroBanner title="Video annotation" subtitle="Frame-level labels and activity annotation" image="/images/img_portfolio.jpg" />

      <section className="container py-12">
        <h1 className="text-3xl font-semibold text-white">Video annotation</h1>
        <p className="mt-4 text-slate-300 max-w-3xl">
          Frame-by-frame annotation, activity segmentation, and temporal labeling for video understanding, surveillance analytics, and behavior modeling.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">Common tasks</h2>
        <ul className="mt-4 list-inside list-disc text-slate-300">
          <li>Temporal action detection and segmentation.</li>
          <li>Object tracking and re-identification.</li>
          <li>Multi-camera synchronization and annotation.</li>
        </ul>

        <div className="mt-8">
          <Link href="/contact" className="btn-primary">Request video annotation</Link>
        </div>
      </section>
    </main>
  );
}
