
import GlobalNav from '@/components/GlobalNav';
import HeroBanner from '@/components/HeroBanner';

const items = [
  {
    title: 'Data Annotation',
    description:
      'High-quality training datasets through structured annotation workflows, reviewer validation, and quality assurance.',
    capabilities: 'Image • Video • Text • Audio'
  },
  {
    title: 'AI Data Collection',
    description:
      'Custom data acquisition and dataset creation tailored to model requirements and industry-specific use cases.',
    capabilities: 'Collection • Curation • Validation'
  },
  {
    title: 'AI Evaluation',
    description:
      'Comprehensive model assessment through human review, benchmark testing, response ranking, and quality measurement.',
    capabilities: 'RLHF • Ranking • Benchmarking'
  },
  {
    title: 'AI Development',
    description:
      'End-to-end AI solutions from prototype to production with scalable deployment workflows and automation.',
    capabilities: 'LLMs • Automation • Deployment'
  },
  {
    title: 'LLM Training & Fine-Tuning',
    description:
      'Supervised fine-tuning, RLHF, prompt engineering, synthetic data generation, and model optimization.',
    capabilities: 'SFT • RLHF • Prompt Engineering'
  }
];


export default function ServicesPage() {
  return (
    <main>
      <GlobalNav />
      <HeroBanner title="Services" subtitle="What we do for your AI products" image="/images/img_services.jpg" height={150} />
      <section className="container py-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Services</p>
          <h1 className="text-5xl font-semibold text-white">Specialized services that accelerate AI programs.</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Separate service pages help your customers and Google find the exact support they need. Each page describes our focused capability and how we deliver measurable results.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold-50 hover:bg-slate-950/95"
            >
              <h2 className="text-2xl font-semibold text-white">
                {item.title}
              </h2>

              <p className="mt-3 text-slate-400 leading-7">
                {item.description}
              </p>

              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-sm font-medium tracking-wide text-gold">
                  {item.capabilities}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="container py-16">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-gold">
            Capabilities
          </p>

          <h2 className="text-4xl font-semibold text-white">
            Supported AI Data & Evaluation Workflows
          </h2>

          <p className="text-slate-300">
            Enterprise-ready capabilities across data annotation, model evaluation,
            RLHF, and AI quality assurance.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
          <table className="w-full">
            <thead className="bg-slate-900">
              <tr>
                <th className="p-5 text-left text-white">Capability</th>
                <th className="p-5 text-center text-white">Support</th>
              </tr>
            </thead>

            <tbody>
              {[
                "Text Classification",
                "Sentiment Analysis",
                "Entity Annotation",
                "RLHF",
                "Response Ranking",
                "Translation Evaluation",
                "Prompt Writing",
                "Audio Annotation"
              ].map((item) => (
                <tr
                  key={item}
                  className="border-t border-white/10 hover:bg-slate-900/50 transition"
                >
                  <td className="p-5 text-slate-300">{item}</td>
                  <td className="p-5 text-center text-green-400 text-xl">✓</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
