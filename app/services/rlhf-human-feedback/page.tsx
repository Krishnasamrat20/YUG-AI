import GlobalNav from '@/components/GlobalNav';
import HeroBanner from '@/components/HeroBanner';

export default function RLHFPage() {
  return (
    <main>
      <GlobalNav />
      <HeroBanner
        title="RLHF"
        subtitle="Reinforcement Learning from Human Feedback"
        image="/images/img_quality.jpg"
        height={140}
      />

      <section className="container py-12">
        <div className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
            RLHF Services
          </p>

          <h1 className="text-5xl font-semibold text-white">
            Improve AI models through expert human feedback.
          </h1>

          <p className="text-lg leading-8 text-slate-300">
            Our RLHF workflows help train and refine large language models by
            collecting high-quality human feedback, ranking responses, and
            generating preference datasets that align AI behavior with human
            expectations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-white">
              Response Ranking
            </h2>
            <p className="mt-3 text-slate-300">
              Human annotators compare multiple model outputs and rank them
              based on quality, accuracy, relevance, and helpfulness.
            </p>
          </div>

          <div className="card p-8">
            <h2 className="text-xl font-semibold text-white">
              Preference Data Collection
            </h2>
            <p className="mt-3 text-slate-300">
              Create high-quality preference datasets that enable models to
              learn from human judgments and improve response alignment.
            </p>
          </div>

          <div className="card p-8">
            <h2 className="text-xl font-semibold text-white">
              Model Alignment
            </h2>
            <p className="mt-3 text-slate-300">
              Fine-tune AI systems using human feedback to reduce harmful
              outputs and deliver more reliable, user-focused responses.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}