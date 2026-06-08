import GlobalNav from '@/components/GlobalNav';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

export default function PromptWritingPage() {
  return (
    <main>
      <GlobalNav />
      <HeroBanner title="Prompt-Writing" subtitle="High-quality prompts for LLMs and multimodal models" image="/images/img_services.jpg" />

      <section className="container py-12">
        <h1 className="text-3xl font-semibold text-white">Prompt-Writing</h1>
        <p className="mt-4 text-slate-300 max-w-3xl">
          We craft, test, and curate prompts and instruction templates for language and multimodal models to maximize reliability, reduce hallucination, and improve controllability. Our process includes automated evaluation and human-in-the-loop refinements.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">Typical deliverables</h2>
        <ul className="mt-4 list-inside list-disc text-slate-300">
          <li>Annotated prompt libraries and instruction families.</li>
          <li>Evaluation suites and example inputs/outputs.</li>
          <li>Versioned templates and best-practices documentation.</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-white">Process</h2>
        <p className="mt-4 text-slate-300">Iterative human evaluation, A/B testing across model sizes, and safety filtering are applied to ensure robust prompt behavior.</p>

        <div className="mt-8">
          <Link href="/contact" className="btn-primary">Request Prompt Design</Link>
        </div>
      </section>
    </main>
  );
}
