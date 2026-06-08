import GlobalNav from '@/components/GlobalNav';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

export default function BoundaryBoxLabelingPage() {
  return (
    <main>
      <GlobalNav />
      <HeroBanner title="Boundary box labeling" subtitle="Precise bounding boxes for object detection and tracking" image="/images/img_agriculture.jpg" />

      <section className="container py-12">
        <h1 className="text-3xl font-semibold text-white">Boundary box labeling</h1>
        <p className="mt-4 text-slate-300 max-w-3xl">
          Exact bounding boxes and object-level labels for detection, tracking, and analytics. We provide temporal consistency checks, IoU-based QA, and annotation tooling that supports both single-frame and video workflows.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">Use cases</h2>
        <ul className="mt-4 list-inside list-disc text-slate-300">
          <li>Object detection and multi-object tracking.</li>
          <li>Retail shelf analytics and inventory monitoring.</li>
          <li>Autonomous perception and safety validation.</li>
        </ul>

        <div className="mt-8">
          <Link href="/contact" className="btn-primary">Request bounding-box labeling</Link>
        </div>
      </section>
    </main>
  );
}
