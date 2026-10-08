import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import {
  Camera, Share2, BarChart3, MessageSquare, Star, Link2, Palette, Users,
  ArrowRight, CheckCircle2, ChevronDown, Sparkles, Smartphone, Globe
} from 'lucide-react';
import { useState } from 'react';

// ─── HERO ────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#F8F7F4] border border-[#E5E2DC] rounded-full px-4 py-1.5 mb-8">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span className="text-sm text-[#737373]">Built for professionals who sell their work visually</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#111111] mb-6 leading-[1.1]">
          Turn your work into<br />proof that sells.
        </h1>
        <p className="text-xl text-[#737373] max-w-2xl mx-auto mb-10 leading-relaxed">
          Create beautiful project pages from your work, share them anywhere
          and turn visitors into potential clients.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/register"
            className="w-full sm:w-auto px-8 py-4 bg-[#111111] text-white rounded-xl font-medium hover:bg-black/90 transition-all text-lg shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/15 hover:-translate-y-0.5"
          >
            Create your portfolio
          </Link>
          <Link
            to="/demo"
            className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-[#E5E2DC] text-[#111111] rounded-xl font-medium hover:bg-gray-50 transition-all text-lg hover:border-[#111111]"
          >
            See an example
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── BEFORE / AFTER DEMO ─────────────────────────────────────────────
function BeforeAfterDemo() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <BeforeAfterSlider
          beforeImage="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
          afterImage="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&h=600&fit=crop"
        />
        <p className="text-center text-sm text-[#737373] mt-4">Drag the slider to see the transformation</p>
      </div>
    </section>
  );
}

// ─── PROBLEM ─────────────────────────────────────────────────────────
function Problem() {
  const problems = [
    'Your best work is buried in WhatsApp.',
    "Your Instagram doesn't explain the project.",
    "Your clients don't see the details.",
  ];
  return (
    <section className="py-20 px-6 bg-[#F8F7F4]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[#737373] mb-8">The problem</h2>
        <div className="space-y-4">
          {problems.map((p, i) => (
            <p key={i} className="text-2xl md:text-3xl font-semibold text-[#111111]">{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SOLUTION ────────────────────────────────────────────────────────
function Solution() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[#737373] mb-8">The solution</h2>
        <div className="space-y-2">
          <p className="text-3xl md:text-4xl font-bold text-[#111111]">One project.</p>
          <p className="text-3xl md:text-4xl font-bold text-[#111111]">One beautiful page.</p>
          <p className="text-3xl md:text-4xl font-bold text-[#111111]">One link you can share anywhere.</p>
        </div>
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { num: '01', title: 'Add your project', desc: 'Upload your project details, description, and key information.' },
    { num: '02', title: 'Upload your photos', desc: 'Add before/after photos and project gallery images.' },
    { num: '03', title: 'Share your project', desc: 'Get a unique link and share it on WhatsApp, Instagram, or TikTok.' },
  ];
  return (
    <section className="py-20 px-6 bg-[#F8F7F4]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#737373] mb-4">How it works</h2>
          <p className="text-3xl md:text-4xl font-bold text-[#111111]">Three steps to more clients</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="bg-white rounded-2xl p-8 border border-[#E5E2DC]">
              <span className="text-5xl font-bold text-[#E5E2DC]">{s.num}</span>
              <h3 className="text-xl font-semibold mt-4 mb-2 text-[#111111]">{s.title}</h3>
              <p className="text-[#737373] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FEATURES ────────────────────────────────────────────────────────
function Features() {
  const features = [
    { icon: Camera, title: 'Before / After', desc: 'Interactive slider to showcase transformations.' },
    { icon: Globe, title: 'Project galleries', desc: 'Beautiful image galleries for every project.' },
    { icon: Star, title: 'Client reviews', desc: 'Collect and display verified client testimonials.' },
    { icon: Users, title: 'Lead capture', desc: 'Built-in quote request forms to capture leads.' },
    { icon: MessageSquare, title: 'WhatsApp CTA', desc: 'One-click WhatsApp button with pre-filled message.' },
    { icon: BarChart3, title: 'Analytics', desc: 'Track views, clicks, and conversions.' },
    { icon: Palette, title: 'Custom branding', desc: 'Your logo, colors, and brand identity.' },
    { icon: Link2, title: 'Shareable links', desc: 'Unique URLs optimized for social sharing.' },
  ];
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#737373] mb-4">Features</h2>
          <p className="text-3xl md:text-4xl font-bold text-[#111111]">Everything you need to win clients</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl border border-[#E5E2DC] bg-white hover:border-[#111111] transition-colors group">
              <f.icon className="w-6 h-6 text-[#737373] mb-4 group-hover:text-[#111111] transition-colors" />
              <h3 className="font-semibold mb-1 text-[#111111]">{f.title}</h3>
              <p className="text-sm text-[#737373] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── USE CASES ───────────────────────────────────────────────────────
function UseCases() {
  const cases = [
    { title: 'Interior Designers', emoji: '🎨' },
    { title: 'Contractors', emoji: '🔨' },
    { title: 'Woodworkers', emoji: '🪵' },
    { title: 'Architects', emoji: '🏗️' },
    { title: 'Renovation Companies', emoji: '🏠' },
    { title: 'Photographers', emoji: '📸' },
  ];
  return (
    <section className="py-20 px-6 bg-[#F8F7F4]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#737373] mb-4">Use cases</h2>
          <p className="text-3xl md:text-4xl font-bold text-[#111111]">Built for professionals like you</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {cases.map((c) => (
            <div key={c.title} className="bg-white rounded-2xl p-6 border border-[#E5E2DC] text-center hover:border-[#111111] transition-colors hover:-translate-y-1 hover:shadow-lg">
              <span className="text-4xl mb-3 block">{c.emoji}</span>
              <h3 className="font-semibold text-[#111111]">{c.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRICING ─────────────────────────────────────────────────────────
function PricingSection() {
  const plans = [
    {
      name: 'Free',
      price: '0',
      desc: 'Get started with the basics',
      features: ['3 projects', 'Basic portfolio', 'ClientProof branding', 'Basic analytics'],
      cta: 'Get started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '9',
      desc: 'For growing professionals',
      features: ['Unlimited projects', 'Remove branding', 'Custom branding', 'Reviews', 'Lead capture', 'WhatsApp CTA', 'Advanced analytics'],
      cta: 'Start free trial',
      popular: true,
    },
    {
      name: 'Business',
      price: '19',
      desc: 'For teams and agencies',
      features: ['Everything in Pro', 'Multiple team members', 'Advanced analytics', 'Priority support', 'Custom domain'],
      cta: 'Contact sales',
      popular: false,
    },
  ];
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#737373] mb-4">Pricing</h2>
          <p className="text-3xl md:text-4xl font-bold text-[#111111]">Simple, transparent pricing</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border-2 ${
                plan.popular ? 'border-[#111111] bg-white shadow-xl' : 'border-[#E5E2DC] bg-white'
              } relative`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#111111] text-white text-xs font-medium px-3 py-1 rounded-full">Most popular</span>
                </div>
              )}
              <h3 className="text-lg font-semibold text-[#111111]">{plan.name}</h3>
              <p className="text-sm text-[#737373] mt-1">{plan.desc}</p>
              <div className="mt-6 mb-6">
                <span className="text-5xl font-bold text-[#111111]">€{plan.price}</span>
                <span className="text-[#737373]">/month</span>
              </div>
              <Link
                to="/register"
                className={`block w-full text-center py-3 rounded-xl font-medium transition-colors ${
                  plan.popular
                    ? 'bg-[#111111] text-white hover:bg-black/90'
                    : 'bg-[#F8F7F4] text-[#111111] hover:bg-gray-100 border border-[#E5E2DC]'
                }`}
              >
                {plan.cta}
              </Link>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#737373]">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: 'What is ClientProof?', a: 'ClientProof is a platform that helps professionals turn their project photos and details into beautiful, shareable web pages that attract new clients.' },
    { q: 'Do I need any technical skills?', a: 'Not at all. Just upload your photos, fill in your project details, and we handle the rest. Your page is ready to share in minutes.' },
    { q: 'Can I use my own branding?', a: 'Yes! Pro and Business plans let you customize your logo, colors, and remove the ClientProof branding entirely.' },
    { q: 'How do clients find my projects?', a: 'Each project gets a unique URL that you can share on WhatsApp, Instagram, TikTok, Google, or anywhere else. We also optimize your pages for search engines.' },
    { q: 'Can I cancel anytime?', a: 'Absolutely. No contracts, no commitments. Cancel your subscription anytime from your dashboard.' },
  ];
  return (
    <section className="py-20 px-6 bg-[#F8F7F4]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#737373] mb-4">FAQ</h2>
          <p className="text-3xl md:text-4xl font-bold text-[#111111]">Common questions</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-[#E5E2DC] overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-[#111111]">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#737373] transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-[#737373] leading-relaxed text-sm">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FINAL CTA ───────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
          Ready to turn your work into proof?
        </h2>
        <p className="text-xl text-[#737373] mb-10">
          Join hundreds of professionals already using ClientProof to win more clients.
        </p>
        <Link
          to="/register"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#111111] text-white rounded-xl font-medium hover:bg-black/90 transition-all text-lg shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-0.5"
        >
          Create your portfolio <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}

// ─── LANDING PAGE ────────────────────────────────────────────────────
export default function Landing() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <BeforeAfterDemo />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <UseCases />
      <PricingSection />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
