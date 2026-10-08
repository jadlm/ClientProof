import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Mail, MapPin, Phone, Check } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-white">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">Get in touch</h1>
            <p className="text-xl text-[#737373]">We'd love to hear from you. Send us a message.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F8F7F4] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#111111]" />
                  </div>
                  <div><p className="font-medium text-[#111111]">Email</p><p className="text-sm text-[#737373]">hello@clientproof.app</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F8F7F4] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#111111]" />
                  </div>
                  <div><p className="font-medium text-[#111111]">Phone</p><p className="text-sm text-[#737373]">+33 1 23 45 67 89</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F8F7F4] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#111111]" />
                  </div>
                  <div><p className="font-medium text-[#111111]">Location</p><p className="text-sm text-[#737373]">Paris, France</p></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E5E2DC] p-8">
              {!sent ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium mb-1.5">First Name</label><Input placeholder="John" /></div>
                    <div><label className="block text-sm font-medium mb-1.5">Last Name</label><Input placeholder="Doe" /></div>
                  </div>
                  <div><label className="block text-sm font-medium mb-1.5">Email</label><Input type="email" placeholder="you@example.com" /></div>
                  <div><label className="block text-sm font-medium mb-1.5">Message</label><Textarea placeholder="How can we help?" rows={4} /></div>
                  <button onClick={() => setSent(true)} className="w-full py-3 bg-[#111111] text-white rounded-xl font-medium hover:bg-black/90 transition-colors">
                    Send Message
                  </button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] mb-2">Message sent!</h3>
                  <p className="text-[#737373]">We'll get back to you within 24 hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
