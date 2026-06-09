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
        <div className="mt-16 card p-10 overflow-hidden">
          <p className="text-sm uppercase tracking-[0.28em] text-gold">
            How We Work
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-white">
            Our Delivery Process
          </h2>

          <p className="mt-4 max-w-3xl text-slate-300">
            Every project follows a structured workflow to ensure consistency,
            transparency, and enterprise-grade quality.
          </p>

          <div className="mt-12 relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-gold via-sky-500 to-gold" />

            {[
              {
                title: 'Project Design',
                desc: 'Understand objectives, define scope, and create project specifications.'
              },
              {
                title: 'Guidelines',
                desc: 'Develop detailed instructions, taxonomy, and quality requirements.'
              },
              {
                title: 'Annotation',
                desc: 'Expert annotators create labels following project standards.'
              },
              {
                title: 'Peer Review',
                desc: 'Independent reviewers verify consistency and resolve edge cases.'
              },
              {
                title: 'Quality Audit',
                desc: 'QA leads perform audits, measure accuracy, and approve outputs.'
              },
              {
                title: 'Delivery',
                desc: 'Final datasets and reports are delivered with complete transparency.'
              }
            ].map((step, index) => (
              <div
                key={step.title}
                className="timeline-item relative flex gap-6 pb-12"
                style={{
                  animationDelay: `${index * 0.25}s`
                }}
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold-20 bg-slate-950 text-gold font-semibold shadow-lg">
                  {index + 1}
                </div>

                <div className="flex-1 rounded-2xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-sm transition-all duration-500 hover:border-gold-20 hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-slate-300">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-gold-15 bg-slate-950/80 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-gold">Accuracy target</p>
          <p className="mt-3 text-5xl font-semibold text-white">Multi-Layer Quality Assurance</p>
          <p className="mt-4 max-w-2xl mx-auto text-slate-300">Our approach prioritizes labels and model evaluation over volume. That means better training data and fewer costly rework cycles.</p>
        </div>
      </section>
    </main>
  );
}
