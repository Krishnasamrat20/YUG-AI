import GlobalNav from '@/components/GlobalNav';
import HeroBanner from '@/components/HeroBanner';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main>
      <GlobalNav />
      <HeroBanner title="Contact" subtitle="Get in touch with our team" image="/images/img_contact2.jpg" height={160} />
      <section className="container py-12">
        
        <div className="grid gap-10 lg:grid-cols-[0.95fr,0.9fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Contact</p>
            <h1 className="text-5xl font-semibold text-white">Book a call, send a message, or connect with our team.</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              Start with a pilot project, ask about data annotation, or discuss your AI development roadmap.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Email</p>
                <p className="mt-2 text-lg text-white">hello@yugai.live</p>
              </div>
              <div className="card p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">WhatsApp</p>
                <a href="https://wa.me/918810204262" className="mt-2 text-lg text-white" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </div>
              <div className="card p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">LinkedIn</p>
                <a href="https://www.linkedin.com/company/yugai-live" className="mt-2 text-lg text-white" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                </a>
              </div>
              
              <div className="card p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  Address
                </p>

                <a
                  href="https://maps.google.com/?q=Noida,Uttar+Pradesh,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-lg text-white hover:text-sky-300 transition-colors"
                >
                  Noida, Uttar Pradesh
                </a>
              </div>
            </div>
            <div className="card border-cyan-500/10 bg-cyan-500/5 p-6 text-slate-200">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">When your message is received</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">We usually respond within 24-48 hours, and we look forward to connecting with you.</p>
            </div>
          </div>
          <div className="card p-8">
            <h2 className="text-2xl font-semibold text-white">Send a brief</h2>
            <p className="mt-3 text-slate-300">Tell us which service you want, your timeline, and the outcomes you expect.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
