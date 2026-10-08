import { Link, useParams } from 'react-router-dom';
import { MapPin, Phone, Globe, Mail, Star, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const businessData = {
  name: 'Couronne Urban',
  slug: 'couronne-urban',
  category: 'Interior Design',
  description: 'Premium interior design studio specializing in luxury residential projects. We transform spaces into beautiful, functional environments that reflect your style and personality.',
  phone: '+212 5 22 12 34 56',
  email: 'hello@couronne.ma',
  website: 'https://couronne.ma',
  city: 'Casablanca',
  country: 'Morocco',
  instagram: 'couronne.urban',
  rating: 4.9,
  reviewCount: 37,
};

const projects = [
  { slug: 'modern-kitchen-casablanca', title: 'Modern Kitchen', location: 'Casablanca', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
  { slug: 'moroccan-living-room-marrakech', title: 'Moroccan Living Room', location: 'Marrakech', category: 'Interior', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop' },
  { slug: 'custom-dressing-rabat', title: 'Custom Dressing', location: 'Rabat', category: 'Woodwork', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop' },
  { slug: 'luxury-bedroom-fes', title: 'Luxury Bedroom', location: 'Fes', category: 'Interior', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&h=300&fit=crop' },
  { slug: 'tv-wall-tanger', title: 'TV Wall', location: 'Tangier', category: 'Interior', image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=300&fit=crop' },
  { slug: 'custom-woodwork-agadir', title: 'Custom Woodwork', location: 'Agadir', category: 'Woodwork', image: 'https://images.unsplash.com/photo-1610505466182-9ff25ec1591b?w=400&h=300&fit=crop' },
];

const categories = ['All', 'Kitchen', 'Interior', 'Woodwork', 'Renovation', 'Bathroom'];

const reviews = [
  { name: 'Sarah B.', rating: 5, comment: 'Absolutely stunning work! The kitchen is exactly what we dreamed of.' },
  { name: 'Karim E.', rating: 5, comment: 'Perfect dressing room. Every detail was carefully thought out.' },
  { name: 'Leila A.', rating: 4, comment: 'Beautiful living room design. Some minor delays but the result was worth the wait.' },
];

export default function PublicPortfolio() {
  const { businessSlug } = useParams();
  const [filter, setFilter] = useState('All');

  const filtered = projects.filter(p => filter === 'All' || p.category === filter);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#F8F7F4] border-b border-[#E5E2DC]">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-[#111111] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
            CU
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#111111] mb-2">{businessData.name}</h1>
          <p className="text-lg text-[#737373]">{businessData.category}</p>
          <p className="text-[#737373] mt-3 max-w-lg mx-auto leading-relaxed">{businessData.description}</p>
          
          <div className="flex items-center justify-center gap-1 mt-4">
            {[1, 2, 3, 4, 5].map(s => (
              <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-sm font-medium ml-1">{businessData.rating}</span>
            <span className="text-sm text-[#737373]">({businessData.reviewCount} reviews)</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-[#737373]">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {businessData.city}, {businessData.country}</span>
            <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> {businessData.phone}</span>
            <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> {businessData.website?.replace('https://', '')}</span>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            <a href={`https://wa.me/${businessData.phone.replace(/\s/g, '')}`} target="_blank"
              className="px-5 py-2.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
              Chat on WhatsApp
            </a>
            <a href={`mailto:${businessData.email}`}
              className="px-5 py-2.5 bg-[#111111] text-white rounded-lg text-sm font-medium hover:bg-black/90 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === cat ? 'bg-[#111111] text-white' : 'bg-[#F8F7F4] text-[#737373] hover:text-[#111111]'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filtered.map((p) => (
            <Link key={p.slug} to={`/p/${businessSlug}/${p.slug}`} className="group block">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-semibold text-[#111111] group-hover:underline">{p.title}</h3>
              <p className="text-sm text-[#737373]">{p.location} · {p.category}</p>
            </Link>
          ))}
        </div>

        {/* Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#111111] mb-6">Client Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-[#F8F7F4] rounded-xl p-6">
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map(s => (
                    <Star key={s} className={`w-4 h-4 ${s <= r.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                  ))}
                </div>
                <p className="text-sm text-[#737373] italic mb-3">"{r.comment}"</p>
                <p className="text-sm font-medium text-[#111111]">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#E5E2DC] py-8 text-center">
        <Link to="/" className="text-sm text-[#737373] hover:text-[#111111]">
          Powered by <span className="font-medium">ClientProof</span>
        </Link>
      </footer>
    </div>
  );
}
