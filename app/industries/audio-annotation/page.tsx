import GlobalNav from '@/components/GlobalNav';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

export default function AudioAnnotationPage() {
  return (
    <main>
      <GlobalNav />
      <HeroBanner title="Audio annotation" subtitle="Labeling speech, environmental, and sensor audio" image="/images/img_contact2.jpg" />

      <section className="container py-12">
        <h1 className="text-3xl font-semibold text-white">Audio annotation</h1>
        <p className="mt-4 text-slate-300 max-w-3xl">
          Transcription, speaker diarization, event detection, and environmental audio labeling for speech recognition, monitoring, and ambient intelligence.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">Tasks we support</h2>
        <ul className="mt-4 list-inside list-disc text-slate-300">
          <li>Transcription (verbatim and normalized).</li>
          <li>Speaker diarization and role labeling.</li>
          <li>Acoustic event detection and annotation.</li>
        </ul>

        <div className="mt-8">
          <Link href="/contact" className="btn-primary">Request audio datasets</Link>
        </div>
      </section>
    </main>
  );
}
