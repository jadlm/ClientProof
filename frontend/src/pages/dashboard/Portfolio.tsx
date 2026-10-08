import { Link } from 'react-router-dom';
import { ExternalLink, Star, MapPin, Globe, Phone, Mail } from 'lucide-react';

const projects = [
  { slug: 'modern-kitchen-casablanca', title: 'Modern Kitchen', location: 'Casablanca', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
  { slug: 'moroccan-living-room-marrakech', title: 'Moroccan Living Room', location: 'Marrakech', category: 'Interior', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop' },
  { slug: 'custom-dressing-rabat', title: 'Custom Dressing', location: 'Rabat', category: 'Woodwork', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop' },
  { slug: 'luxury-bedroom-fes', title: 'Luxury Bedroom', location: 'Fes', category: 'Interior', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&h=300&fit=crop' },
  { slug: 'tv-wall-tanger', title: 'TV Wall', location: 'Tangier', category: 'Interior', image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=300&fit=crop' },
  { slug: 'custom-woodwork-agadir', title: 'Custom Woodwork', location: 'Agadir', category: 'Woodwork', image: 'https://images.unsplash.com/photo-1610505466182-9ff25ec1591b?w=400&h=300&fit=crop' },
];

export default function DashboardPortfolio() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#111111]">Portfolio</h1>
          <p className="text-sm text-[#737373] mt-1">Preview and manage your public portfolio</p>
        </div>
        <Link
          to="/b/couronne-urban"
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E5E2DC] text-[#111111] rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          <ExternalLink className="w-4 h-4" /> View Public Portfolio
        </Link>
      </div>

      {/* Portfolio preview */}
      <div className="bg-white rounded-2xl border border-[#E5E2DC] overflow-hidden">
        {/* Header */}
        <div className="bg-[#F8F7F4] p-8 text-center border-b border-[#E5E2DC]">
          <div className="w-16 h-16 rounded-full bg-[#111111] flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">CU</div>
          <h2 className="text-2xl font-bold text-[#111111]">Couronne Urban</h2>
          <p className="text-[#737373] mt-1">Interior Design</p>
          <p className="text-sm text-[#737373] mt-2 max-w-md mx-auto">Premium interior design studio specializing in luxury residential projects.</p>
          <div className="flex items-center justify-center gap-4 mt-4 text-xs text-[#737373]">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Casablanca, Morocco</span>
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +212 5 22 12 34 56</span>
            <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> couronne.ma</span>
          </div>
        </div>

        {/* Projects grid */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p) => (
              <Link key={p.slug} to={`/p/couronne-urban/${p.slug}`} className="group block">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-semibold text-[#111111] group-hover:underline">{p.title}</h3>
                <p className="text-xs text-[#737373]">{p.location} · {p.category}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Powered by */}
        <div className="p-4 text-center border-t border-[#E5E2DC]">
          <Link to="/" className="text-xs text-[#737373] hover:text-[#111111]">Powered by <span className="font-medium">ClientProof</span></Link>
        </div>
      </div>
    </div>
  );
}
