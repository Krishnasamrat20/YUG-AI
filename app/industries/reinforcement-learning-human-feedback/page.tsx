import GlobalNav from '@/components/GlobalNav';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

export default function RLHFPage() {
  return (
    <main>
      <GlobalNav />
      <HeroBanner title="Reinforcement Learning using Human Feedback" subtitle="Collecting human rewards and rankings for model alignment" image="/images/img_quality.jpg" />

      <section className="container py-12">
        <h1 className="text-3xl font-semibold text-white">Reinforcement Learning using Human Feedback (RLHF)</h1>
        <p className="mt-4 text-slate-300 max-w-3xl">
          We design annotation tasks for preference collection, ranking, and reward-model datasets that support RLHF training loops. Our workflows focus on consistent instructions, worker calibration, and robust inter-rater agreement metrics.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">Capabilities</h2>
        <ul className="mt-4 list-inside list-disc text-slate-300">
          <li>Pairwise preference collection and ranking tasks.</li>
          <li>Reward model datasets with calibration and bias analysis.</li>
          <li>Human evaluation dashboards and audit trails.</li>
        </ul>

        <div className="mt-8">
          <Link href="/contact" className="btn-primary">Discuss RLHF Data</Link>
        </div>
      </section>
    </main>
  );
}
