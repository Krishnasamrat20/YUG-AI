'use client';

import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [state, setState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      setStatus('Thanks! We received your message.');
      setState({ name: '', email: '', message: '' });
    } else {
      setStatus(result.error ?? 'Something went wrong.');
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm text-slate-300">
        <span>Name</span>
        <input
          required
          value={state.name}
          onChange={(event) => setState({ ...state, name: event.target.value })}
          className="rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-gold"
          placeholder="Your name"
        />
      </label>
      <label className="grid gap-2 text-sm text-slate-300">
        <span>Email</span>
        <input
          type="email"
          required
          value={state.email}
          onChange={(event) => setState({ ...state, email: event.target.value })}
          className="rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-gold"
          placeholder="you@company.com"
        />
      </label>
      <label className="grid gap-2 text-sm text-slate-300">
        <span>Message</span>
        <textarea
          required
          value={state.message}
          onChange={(event) => setState({ ...state, message: event.target.value })}
          className="min-h-[160px] rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-gold"
          placeholder="Tell us about your project"
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? 'Sending…' : 'Send Request'}
      </button>
      {status ? <p className="text-sm text-slate-300">{status}</p> : null}
    </form>
  );
}
