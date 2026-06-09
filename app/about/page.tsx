import Image from 'next/image';
import GlobalNav from '@/components/GlobalNav';
import HeroBanner from '@/components/HeroBanner';
import p1 from '../../P1.png';
import p2 from '../../p2.png';
import p3 from '../../p3.png';
import p4 from '../../p4.png';

const founders = [
  {
    name: 'Priyesh Singh',
    role: 'Chief Operating Officer',
    detail:
      'Leads operations, client delivery, workflow optimization, and AI data production at scale.',
    image: p1
  },
  {
    name: 'Krishna Samrat Bajpai',
    role: 'Chief Executive Officer',
    detail:
      'Drives company vision, business strategy, partnerships, and overall growth initiatives.',
    image: p2
  },
  {
    name: 'Shreshth Bajpai',
    role: 'Head of Growth',
    detail:
      'Focused on market expansion, client acquisition, strategic partnerships, and branding.',
    image: p3
  },
  {
    name: 'Abhishek Singh',
    role: 'Chief Technology Officer',
    detail:
      'Leads engineering, AI development, automation systems, and technical architecture.',
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

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className="floating-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center shadow-soft transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 0.8}s`,
              }}
            >
              <div className="mx-auto mb-6 h-36 w-36 overflow-hidden rounded-full ring-2 ring-sky-500/30">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={144}
                  height={144}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-semibold text-white">
                {founder.name}
              </h3>

              <p className="mt-2 text-sky-400 font-medium">
                {founder.role}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {founder.detail}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
