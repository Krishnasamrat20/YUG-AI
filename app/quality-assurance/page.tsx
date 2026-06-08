import GlobalNav from '@/components/GlobalNav';
import HeroBanner from '@/components/HeroBanner';

const stages = [
  { title: 'Annotator', description: 'Trained annotators create precise labels and follow project-specific guidelines.' },
  { title: 'Senior Reviewer', description: 'Experienced reviewers verify edge cases and ensure consistency across data.' },
  { title: 'QA Lead', description: 'QA leads audit overall quality, review metrics, and approve release readiness.' }
];

export default function QualityPage() {
  return (
    <main>
      <GlobalNav />
      <HeroBanner title="Quality Assurance" subtitle="Layered QA for dataset and model reliability" image="/images/img_quality.jpg" height={140} />
      <section className="container py-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Quality Assurance</p>
          <h1 className="text-5xl font-semibold text-white">Data quality and review processes built for HIGH accuracy.</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            We combine structured annotation workflows, multiple review layers, and quality metrics so your AI project is backed by measurable confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stages.map((stage) => (
            <div key={stage.title} className="card p-8">
              <h2 className="text-2xl font-semibold text-white">{stage.title}</h2>
              <p className="mt-4 text-slate-300">{stage.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="card p-8">
            <h2 className="text-2xl font-semibold text-white">Annotation Process</h2>
            <p className="mt-4 text-slate-300">Define taxonomy, label guidelines, training checks, and feedback loops before annotation begins.</p>
          </div>
          <div className="card p-8">
            <h2 className="text-2xl font-semibold text-white">Review Layers</h2>
            <p className="mt-4 text-slate-300">Review outputs with senior staff, maintain audit logs, and correct drift across batches.</p>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-gold-15 bg-slate-950/80 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-gold">Accuracy target</p>
          <p className="mt-3 text-5xl font-semibold text-white">98%+</p>
          <p className="mt-4 max-w-2xl mx-auto text-slate-300">Our approach prioritizes labels and model evaluation over volume. That means better training data and fewer costly rework cycles.</p>
        </div>
      </section>
    </main>
  );
}
