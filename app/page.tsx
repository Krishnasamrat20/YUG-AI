import Image from 'next/image';
import Link from 'next/link';
import GlobalNav from '@/components/GlobalNav';
import p1 from '../P1.png';
import p2 from '../p2.png';
import p3 from '../p3.png';
import p4 from '../p4.png';

const services = [
  { href: '/services/data-annotation', title: 'Data Annotation', description: 'High-accuracy labeling for image, video, text, and audio.' },
  { href: '/services/ai-data-collection', title: 'AI Data Collection', description: 'Custom data capture and dataset creation.' },
  { href: '/services/llm-evaluation', title: 'LLM Evaluation', description: 'Model benchmarking, edge-case scoring, and review.' },
  { href: '/services/ai-development', title: 'AI Development', description: 'End-to-end ML products and inference pipelines.' },
  
];

const serviceImages = ['/images/img_services.jpg', '/images/img_industries.jpg', '/images/img_portfolio.jpg'];

const industries = [
  { href: '/industries/generalist', title: 'Generalist', description: 'General-purpose datasets and cross-domain labeling for broad model coverage.' },
  { href: '/industries/autonomous-vehicles', title: 'Prompt-Writing', description: 'Crafting and curating high-quality prompts and instructions for LLMs and multimodal models.' },
  { href: '/industries/surveillance-ai', title: 'Boundary box labeling', description: 'Bounding box annotation, object tracking, and event labeling for surveillance datasets.' },
  { href: '/industries/ecommerce-ai', title: 'Reinforcement Learning using Human Feedback', description: 'Collecting human feedback and reward signals used in RLHF and ranking model pipelines.' },
  { href: '/industries/healthcare-ai', title: 'IG entity reference', description: 'Entity linking, medical NER, and structured annotation for clinical and biomedical text.' },
  { href: '/industries/retail-ai', title: 'Video annotation', description: 'Frame-by-frame labeling, activity detection, and shopper behavior annotation for retail analytics.' },
  { href: '/industries/agriculture-ai', title: 'Audio annotation', description: 'Audio labeling for environmental monitoring, crop/animal sounds, and sensor audio datasets.' },
  { href: '/industries/finance-ai', title: 'Text annotation', description: 'Financial document labeling, entity extraction, sentiment, and document classification.' },
  { href: '/industries/robotics-ai', title: '3D point cloud annotation', description: '3D segmentation, point-cloud labeling, and pose estimation for robotics and autonomy.' },
  { href: '/industries/other', title: 'Other', description: 'Custom annotation, research datasets, and niche modality workflows.' }
];

const founders = [
  {
    name: 'Priyesh Singh',
    role: 'Chief Operating Officer',
    image: p1,
    experience: <ul><li>Operations</li>
    <li>Quality systems</li>
    <li>Delivery Management</li></ul>
  },
  {
    name: 'Krishna Samrat Bajpai',
    role: 'Chief Executive Officer',
    image: p2,
    experience: <ul><li>Client Partnerships</li>
    <li>Strategic Planning</li>
    <li>AI Program Leadership</li></ul>}
];

const managers = [
  {
    name: 'Shreshth Bajpai',
    role: 'Head of Growth',
    image: p3,
    experience: <ul><li>Growth Strategy</li>
    <li>Partnerships</li>
    <li>Revenue Enablement</li></ul>
  },
  {
    name: 'Abhishek Singh',
    role: 'Chief Technology Officer',
    image: p4,
    experience: <ul><li>Engineering</li>
    <li>Platform Architecture</li>
    <li>AI Systems Development</li></ul>
  }
];

export default function Home() {
  return (
    <main className="isolate">
      <GlobalNav />

      

      <section
        className="relative overflow-hidden py-16 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,16,36,0.55), rgba(7,16,36,0.55)), url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="pointer-events-none absolute inset-x-[-10%] -top-20 -z-10 h-96 rounded-full bg-gold-10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-24 hidden h-[420px] w-[420px] rounded-full bg-gold-10 blur-3xl md:block" />

        <div className="container grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center animate-fade-in-up">
          <div className="space-y-6 max-w-2xl">
            <h1 className="section-title max-w-3xl text-white">
              Human Intelligence for Better AI
            </h1>
            <p className="text-xl leading-8 text-slate-300 sm:text-2xl">
              We help AI teams evaluate models, improve datasets, and build reliable AI systems through annotation, human feedback, and quality assurance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Discovery Call
              </Link>
              <Link href="/services" className="btn-outline">
                View Capabilities
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-8 shadow-soft backdrop-blur-xl animate-fade-in-up">
            <div className="space-y-6">
              <div className="rounded-3xl bg-slate-900/95 p-6 shadow-[0_24px_120px_rgba(15,23,42,0.35)]">
                <p className="text-sm uppercase tracking-[0.24em] text-gold">Accuracy-first delivery</p>
                <p className="mt-4 text-4xl font-semibold text-white">High quality target</p>
                <p className="mt-3 text-slate-400">Multi-layer review, role-based QA, and continuous audit coverage on every dataset.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Modalities</p>
                  <p className="mt-3 text-xl font-semibold text-white">Image, video, text & audio</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Delivery</p>
                  <p className="mt-3 text-xl font-semibold text-white">Pilot to production</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-10 grid gap-4 rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 text-slate-300 shadow-soft md:grid-cols-[1fr,1.5fr]">
          <div className="col-span-full">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">✓ LLM Evaluation</span>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">✓ Data Annotation</span>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">✓ Human Feedback</span>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">✓ RLHF</span>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">✓ Quality Assurance</span>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-3xl bg-slate-900/90 p-5">
            <div className="rounded-2xl bg-gold-10 p-3 text-gold">01</div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Trusted workflows</p>
              <p className="mt-2 text-lg font-semibold text-white">Annotation and QA designed for enterprise readiness.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-900/90 p-5 text-center">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Modalities</p>
              <p className="mt-3 text-lg font-semibold text-white">Image, video, text, audio</p>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-5 text-center">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">QA Layers</p>
              <p className="mt-3 text-lg font-semibold text-white">Annotator → Reviewer → QA Lead</p>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-5 text-center">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Delivery</p>
              <p className="mt-3 text-lg font-semibold text-white">Pilot to production</p>
            </div>
          </div>
        </div>
      </section>
      


      <section className="container space-y-10 py-16 animate-fade-in-up">
        <div className="grid gap-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">What we offer</p>
          <h2 className="text-4xl font-semibold text-white">Specialized services for AI data, evaluation, and product delivery.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, i) => (
            <Link
              key={service.href}
              href={service.href}
              className="card p-8 transition hover:-translate-y-1"
              style={{
                backgroundImage: `linear-gradient(rgba(7,16,36,0.64), rgba(7,16,36,0.28)), url('${serviceImages[i % serviceImages.length]}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-slate-200">{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container space-y-10 py-16 animate-fade-in-up">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Industry focus</p>
            <h2 className="text-4xl font-semibold text-white">Built for healthcare, retail, autonomous systems, and more.</h2>
          </div>
          <Link href="/industries" className="text-sm font-semibold text-gold transition hover:text-white">
            Explore all industries →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-up">
          {industries.map((industry) => (
            <Link
              key={industry.href}
              href={industry.href}
              className="card p-7 transition hover:-translate-y-1 hover:border-gold-50 hover:bg-slate-950/95"
            >
              <p className="text-lg font-semibold text-white">{industry.title}</p>
              {industry.description ? (
                <p className="mt-2 text-sm text-slate-300">{industry.description}</p>
              ) : null}
            </Link>
          ))}
        </div>
      </section>

      <section className="container rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft py-16 animate-fade-in-up">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.28em] text-gold">Founders panel</p>
            <h2 className="text-4xl font-semibold text-white">Meet the founders leading your AI delivery.</h2>
            <p className="text-slate-300">Founders with hands-on experience in annotation operations, QA leadership, and AI engineering.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="group relative rounded-3xl bg-slate-950/90 p-6 text-center shadow-[0_20px_80px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1"
              >
                <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full bg-transparent ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110 relative">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={128}
                    height={128}
                    className="image-transition h-full w-full object-cover bg-transparent"
                  />
                </div>
                <p className="text-lg font-semibold text-white">{founder.name}</p>
                <p className="mt-2 text-sm text-slate-400">{founder.role}</p>
                <div className="mt-3 text-sm text-slate-300 max-w-lg mx-auto">{founder.experience}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft py-16 animate-fade-in-up">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.28em] text-gold">Manager panel</p>
          <h2 className="text-4xl font-semibold text-white">Leadership managers</h2>
          <p className="text-slate-300">Senior leadership responsible for business development and technical delivery.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {managers.map((manager) => (
            <div key={manager.name} className="group rounded-3xl bg-slate-950/90 p-6 text-center shadow-[0_20px_80px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1">
              <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full bg-transparent ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={manager.image}
                  alt={manager.name}
                  width={128}
                  height={128}
                  className="image-transition h-full w-full object-cover bg-transparent"
                />
              </div>
              <p className="text-lg font-semibold text-white">{manager.name}</p>
              <p className="mt-2 text-sm text-slate-400">{manager.role}</p>
              <div className="mt-3 text-sm text-slate-300 max-w-lg mx-auto">{manager.experience}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
