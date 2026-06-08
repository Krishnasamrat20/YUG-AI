import GlobalNav from '@/components/GlobalNav';
import HeroBanner from '@/components/HeroBanner';

export default function AIEvaluationPage() {
  return (
    <main>
      <GlobalNav />
      <HeroBanner title="AI Evaluation" subtitle="Model benchmarking and review" image="/images/img_quality.jpg" height={140} />
      <section className="container py-12">
        <div className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">AI Evaluation</p>
          <h1 className="text-5xl font-semibold text-white">Measure model quality with real evaluation workflows.</h1>
          <p className="text-lg leading-8 text-slate-300">
            Our evaluation service compares model outputs against ground truth, tests for edge cases, and identifies failure modes before deployment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-white">Benchmarking</h2>
            <p className="mt-3 text-slate-300">Evaluate model accuracy, precision, recall, and category-level performance.</p>
          </div>
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-white">Edge-case review</h2>
            <p className="mt-3 text-slate-300">Validate the hardest examples and examine model behavior in real conditions.</p>
          </div>
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-white">Reporting</h2>
            <p className="mt-3 text-slate-300">Actionable insights with clear metrics and recommendations for model improvement.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
