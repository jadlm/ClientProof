import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Free', price: '0', desc: 'Get started with the basics',
    features: ['3 projects', 'Basic portfolio', 'ClientProof branding', 'Basic analytics'],
    cta: 'Get started', popular: false,
  },
  {
    name: 'Pro', price: '9', desc: 'For growing professionals',
    features: ['Unlimited projects', 'Remove branding', 'Custom branding', 'Reviews', 'Lead capture', 'WhatsApp CTA', 'Advanced analytics'],
    cta: 'Start free trial', popular: true,
  },
  {
    name: 'Business', price: '19', desc: 'For teams and agencies',
    features: ['Everything in Pro', 'Multiple team members', 'Advanced analytics', 'Priority support', 'Custom domain'],
    cta: 'Contact sales', popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">Simple, transparent pricing</h1>
            <p className="text-xl text-[#737373]">Start free. Upgrade when you're ready.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-8 border-2 ${plan.popular ? 'border-[#111111] bg-white shadow-xl' : 'border-[#E5E2DC] bg-white'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-[#111111] text-white text-xs font-medium px-3 py-1 rounded-full">
                      <Sparkles className="w-3 h-3" /> Most popular
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-semibold text-[#111111]">{plan.name}</h3>
                <p className="text-sm text-[#737373] mt-1">{plan.desc}</p>
                <div className="mt-6 mb-6">
                  <span className="text-5xl font-bold text-[#111111]">€{plan.price}</span>
                  <span className="text-[#737373]">/month</span>
                </div>
                <Link to="/register"
                  className={`block w-full text-center py-3 rounded-xl font-medium transition-colors ${
                    plan.popular ? 'bg-[#111111] text-white hover:bg-black/90' : 'bg-[#F8F7F4] text-[#111111] hover:bg-gray-100 border border-[#E5E2DC]'
                  }`}>
                  {plan.cta}
                </Link>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#737373]">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
