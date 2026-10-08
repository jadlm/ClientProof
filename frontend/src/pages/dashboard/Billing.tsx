import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Free', price: '0', desc: 'Get started with the basics', current: true,
    features: ['3 projects', 'Basic portfolio', 'ClientProof branding', 'Basic analytics'],
  },
  {
    name: 'Pro', price: '9', desc: 'For growing professionals', current: false, popular: true,
    features: ['Unlimited projects', 'Remove branding', 'Custom branding', 'Reviews', 'Lead capture', 'WhatsApp CTA', 'Advanced analytics'],
  },
  {
    name: 'Business', price: '19', desc: 'For teams and agencies', current: false,
    features: ['Everything in Pro', 'Multiple team members', 'Advanced analytics', 'Priority support', 'Custom domain'],
  },
];

export default function Billing() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#111111]">Billing</h1>
        <p className="text-sm text-[#737373] mt-1">Manage your subscription and billing</p>
      </div>

      {/* Current plan */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#737373]">Current Plan</p>
              <p className="text-2xl font-bold text-[#111111]">Free</p>
              <p className="text-sm text-[#737373] mt-1">3 of 3 projects used</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-[#111111]">€0<span className="text-base font-normal text-[#737373]">/month</span></p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Plans */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.name} className={`relative ${plan.popular ? 'border-2 border-[#111111] shadow-xl' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 bg-[#111111] text-white text-xs font-medium px-3 py-1 rounded-full">
                  <Sparkles className="w-3 h-3" /> Recommended
                </span>
              </div>
            )}
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-[#111111]">{plan.name}</h3>
              <p className="text-sm text-[#737373] mt-1">{plan.desc}</p>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold text-[#111111]">€{plan.price}</span>
                <span className="text-[#737373]">/month</span>
              </div>
              <button className={`w-full py-2.5 rounded-xl font-medium text-sm transition-colors ${
                plan.current
                  ? 'bg-[#F8F7F4] text-[#737373] cursor-default'
                  : plan.popular
                    ? 'bg-[#111111] text-white hover:bg-black/90'
                    : 'bg-white border border-[#E5E2DC] text-[#111111] hover:bg-gray-50'
              }`}>
                {plan.current ? 'Current Plan' : plan.popular ? 'Upgrade to Pro' : 'Upgrade'}
              </button>
              <ul className="mt-6 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#737373]">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
