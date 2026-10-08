import { Link, useParams } from 'react-router-dom';
import { MapPin, Calendar, Clock, DollarSign, Star, MessageSquare, Phone, ArrowLeft, Share2 } from 'lucide-react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const projectData: Record<string, any> = {
  'modern-kitchen-casablanca': {
    title: 'Modern Kitchen', category: 'Kitchen', location: 'Casablanca, Morocco',
    date: 'June 2024', duration: '8 weeks', budget: '45,000 - 65,000 MAD',
    description: 'A complete kitchen transformation blending modern minimalism with warm oak finishes. Custom cabinetry, quartz countertops, and integrated lighting create a space that is both functional and breathtakingly beautiful. Every detail, from the hardware to the backsplash, was carefully selected to create a cohesive, premium feel.',
    heroImage: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&h=600&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1556185781-a4478ebc2cd4?w=400&h=300&fit=crop',
    ],
    testimonial: { name: 'Sarah Benali', rating: 5, comment: 'Absolutely stunning work! The kitchen is exactly what we dreamed of. Professional, on time, and the result exceeded our expectations.' },
    services: ['Custom Cabinetry', 'Countertop Installation', 'Lighting Design', 'Backsplash', 'Appliance Integration'],
  },
};

const defaultProject = {
  title: 'Project', category: 'Interior', location: 'Morocco',
  date: '2024', duration: '8 weeks', budget: '50,000 MAD',
  description: 'A beautiful project showcasing expert craftsmanship and attention to detail.',
  heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=600&fit=crop',
  beforeImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
  afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
  gallery: ['https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop'],
  testimonial: { name: 'Happy Client', rating: 5, comment: 'Excellent work and great attention to detail!' },
  services: ['Design', 'Installation', 'Finishing'],
};

export default function PublicProjectPage() {
  const { businessSlug, projectSlug } = useParams();
  const project = projectData[projectSlug || ''] || defaultProject;
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const whatsappMsg = encodeURIComponent(`Hello, I saw your project "${project.title}" on ClientProof and I'd like to discuss a similar project.`);

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E5E2DC]">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to={`/b/${businessSlug}`} className="flex items-center gap-2 text-sm text-[#737373] hover:text-[#111111]">
            <ArrowLeft className="w-4 h-4" /> Couronne Urban
          </Link>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-gray-50 text-[#737373]"><Share2 className="w-4 h-4" /></button>
            <button onClick={() => setShowQuoteForm(true)} className="px-4 py-2 bg-[#111111] text-white rounded-lg text-sm font-medium hover:bg-black/90 transition-colors">
              Request a quote
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-[#737373] bg-[#F8F7F4] px-3 py-1 rounded-full">{project.category}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#111111] mb-3">{project.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#737373]">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {project.location}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {project.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {project.duration}</span>
            <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> {project.budget}</span>
          </div>
        </div>

        {/* Hero */}
        <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-12">
          <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Description */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-[#111111] mb-4">About This Project</h2>
          <p className="text-[#737373] leading-relaxed text-lg">{project.description}</p>
        </div>

        {/* Before / After */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-[#111111] mb-4">Before & After</h2>
          <BeforeAfterSlider beforeImage={project.beforeImage} afterImage={project.afterImage} />
        </div>

        {/* Services */}
        {project.services && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-[#111111] mb-4">Services</h2>
            <div className="flex flex-wrap gap-2">
              {project.services.map((s: string) => (
                <span key={s} className="px-4 py-2 bg-[#F8F7F4] rounded-lg text-sm text-[#111111] font-medium">{s}</span>
              ))}
            </div>
          </div>
        )}

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-[#111111] mb-4">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {project.gallery.map((img: string, i: number) => (
              <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden">
                <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        {project.testimonial && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-[#111111] mb-4">Client Review</h2>
            <div className="bg-[#F8F7F4] rounded-2xl p-8">
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} className={`w-5 h-5 ${s <= project.testimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-lg text-[#737373] italic mb-4">"{project.testimonial.comment}"</p>
              <p className="font-medium text-[#111111]">{project.testimonial.name}</p>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-[#111111] rounded-2xl p-8 md:p-12 text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-3">Interested in a similar project?</h2>
          <p className="text-gray-400 mb-6">Get in touch to discuss your project ideas.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button onClick={() => setShowQuoteForm(true)} className="px-6 py-3 bg-white text-[#111111] rounded-xl font-medium hover:bg-gray-100 transition-colors">
              Request a quote
            </button>
            <a href={`https://wa.me/+212622123456?text=${whatsappMsg}`} target="_blank"
              className="px-6 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Quote form modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => { setShowQuoteForm(false); setSubmitted(false); }}>
          <div className="bg-white rounded-2xl p-8 w-full max-w-md" onClick={e => e.stopPropagation()}>
            {!submitted ? (
              <>
                <h3 className="text-xl font-bold text-[#111111] mb-1">Request a Quote</h3>
                <p className="text-sm text-[#737373] mb-6">Fill in your details and we'll get back to you.</p>
                <div className="space-y-4">
                  <div><label className="block text-sm font-medium mb-1">Name</label><Input placeholder="Your name" /></div>
                  <div><label className="block text-sm font-medium mb-1">Phone</label><Input placeholder="+212 6 XX XX XX XX" /></div>
                  <div><label className="block text-sm font-medium mb-1">Email</label><Input type="email" placeholder="your@email.com" /></div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Project Type</label>
                    <select className="w-full h-10 rounded-lg border border-[#E5E2DC] px-3 text-sm">
                      <option>Kitchen</option><option>Interior Design</option><option>Renovation</option><option>Woodwork</option><option>Other</option>
                    </select>
                  </div>
                  <div><label className="block text-sm font-medium mb-1">Budget</label><Input placeholder="e.g. 50,000 MAD" /></div>
                  <div><label className="block text-sm font-medium mb-1">Message</label><Textarea placeholder="Tell us about your project..." rows={3} /></div>
                  <button onClick={() => setSubmitted(true)} className="w-full py-3 bg-[#111111] text-white rounded-xl font-medium hover:bg-black/90 transition-colors">
                    Send request
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-2">Thank you!</h3>
                <p className="text-[#737373]">The business will contact you soon.</p>
                <button onClick={() => { setShowQuoteForm(false); setSubmitted(false); }} className="mt-6 px-6 py-2 bg-[#F8F7F4] rounded-lg text-sm font-medium hover:bg-gray-100">
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-[#E5E2DC] py-8 text-center">
        <Link to="/" className="text-sm text-[#737373] hover:text-[#111111]">
          Powered by <span className="font-medium">ClientProof</span>
        </Link>
      </footer>
    </div>
  );
}
