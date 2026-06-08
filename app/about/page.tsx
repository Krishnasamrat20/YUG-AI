import Image from 'next/image';
import GlobalNav from '@/components/GlobalNav';
import HeroBanner from '@/components/HeroBanner';
import p1 from '../../p1.png';
import p2 from '../../p2.png';
import p3 from '../../p3.png';
import p4 from '../../p4.png';

const founders = [
  {
    name: 'Priyesh Singh',
    role: 'Chief Operating Officer',
    detail: 'Co-founder driving AI strategy, data pipelines, and delivery.',
    image: p1
  },
  {
    name: 'Krishna Samrat Bajpai',
    role: 'Chief Executive Officer',
    detail: 'Co-founder overseeing product vision and technical execution.',
    image: p2
  },
  {
    name: 'Shreshth Bajpai',
    role: 'Head of Growth',
    detail: 'Building partnerships, client growth, and go-to-market strategy.',
    image: p3
  },
  {
    name: 'Abhishek Singh',
    role: 'Chief Technology Officer',
    detail: 'Leading engineering, QA systems, and delivery operations.',
    image: p4
  }
];

export default function AboutPage() {
  return (
    <main>
      <GlobalNav />
      <HeroBanner title="About" subtitle="Transparent AI delivery with a focus on quality and experience." image="/images/img_about2.jpg" height={160} />

      <section className="container py-14">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">About Us</p>
          <h1 className="text-5xl font-semibold text-white">Transparent AI delivery with a focus on quality and experience.</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            We avoid buzzwords and fake claims. Instead we show how our founders, teams, and processes deliver reliable data pipelines and AI products.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <div className="card p-8">
              <h2 className="text-2xl font-semibold text-white">Founders & Team</h2>
              <p className="mt-4 text-slate-300">
                A multidisciplinary leadership team with experience in annotation operations, AI engineering, product design, and enterprise data workflows.
              </p>
            </div>
            <div className="card p-8">
              <h2 className="text-2xl font-semibold text-white">Experience</h2>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>• Specialized in high-quality data annotation for AI and machine learning projects.</li>
                <li>• Providing customized datasets tailored to client requirements.</li>
                <li>• Focused on secure data handling and transparent project delivery.</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="card p-8">
              <h2 className="text-2xl font-semibold text-white">Quality Process</h2>
              <p className="mt-4 text-slate-300">
                Our workflow is designed around traceability, layered review, and an accuracy-first mindset for AI data and production features.
              </p>
            </div>
            <div className="card p-8">
              <h2 className="text-2xl font-semibold text-white">Why choose us</h2>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>• No misleading metrics or hollow guarantees.</li>
                <li>• Clear deliverables, milestone-based pilots, and domain-specific expertise.</li>
                <li>• Hands-on support through deployment and iteration.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {founders.map((founder) => (
            <div key={founder.name} className="group rounded-[2rem] border border-white/10 bg-slate-950/95 p-8 text-center shadow-soft transition duration-300 hover:-translate-y-1">
              <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full bg-transparent ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={128}
                  height={128}
                  className="image-transition h-full w-full object-cover bg-transparent"
                />
              </div>
              <p className="text-xl font-semibold text-white">{founder.name}</p>
              <p className="mt-2 text-sm text-slate-400">{founder.role}</p>
              {founder.detail ? (
                <p className="mt-3 text-sm text-slate-300 max-w-xs mx-auto">{founder.detail}</p>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
