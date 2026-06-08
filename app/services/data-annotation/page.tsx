import GlobalNav from '@/components/GlobalNav';
import HeroBanner from '@/components/HeroBanner';

export default function DataAnnotationPage() {
  return (
    <main>
      <GlobalNav />
      <HeroBanner title="Data Annotation" subtitle="High-accuracy labeling for vision and language" image="/images/img_services.jpg" height={140} />
      <section className="container py-12">
        <div className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Data Annotation</p>
          <h1 className="text-5xl font-semibold text-white">High-quality image, video, text, and audio annotation.</h1>
          <p className="text-lg leading-8 text-slate-300">
            Our annotation service is built around clear guidelines, expert training, and multiple review layers so your model gets reliable labels from day one.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-white">Modalities</h2>
            <p className="mt-3 text-slate-300">Image, video, text, audio, sensor fusion, and 3D annotation as required by your use case.</p>
          </div>
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-white">Guidelines</h2>
            <p className="mt-3 text-slate-300">Project-specific taxonomies, edge case examples, and live feedback for annotation consistency.</p>
          </div>
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-white">Quality</h2>
            <p className="mt-3 text-slate-300">Senior review, QA lead verification, and accuracy metrics embedded in every delivery cycle.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
