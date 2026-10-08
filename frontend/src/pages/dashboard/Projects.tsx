import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Plus, MoreHorizontal, Eye, Users, ExternalLink, Search, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const categories = ['All', 'Kitchen', 'Interior', 'Woodwork', 'Renovation', 'Bathroom'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [projectsData, setProjectsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/projects`)
      .then(res => res.json())
      .then(data => {
        setProjectsData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filtered = projectsData.filter(p => {
    const matchCategory = filter === 'All' || p.category === filter;
    const matchSearch = p.title?.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#111111]">Projects</h1>
          <p className="text-sm text-[#737373] mt-1">{loading ? 'Loading...' : `${projectsData.length} projects total`}</p>
        </div>
        <Link
          to="/dashboard/projects/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#111111] text-white rounded-lg text-sm font-medium hover:bg-black/90 transition-colors"
        >
          <Plus className="w-4 h-4" /> New Project
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737373]" />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-[#E5E2DC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]"
          />
        </div>
        <div className="flex gap-1 bg-white rounded-lg border border-[#E5E2DC] p-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 text-xs rounded-md font-medium transition-colors ${
                filter === cat ? 'bg-[#111111] text-white' : 'text-[#737373] hover:text-[#111111]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-[#111111]" /></div>
        ) : filtered.length === 0 ? (
          <div className="col-span-full text-center py-12 text-[#737373]">No projects found.</div>
        ) : (
          filtered.map((project) => (
            <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={project.images?.[0]?.url || 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop'}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <Badge variant={project.isPublished ? 'success' : 'secondary'}>
                    {project.isPublished ? 'Published' : 'Draft'}
                  </Badge>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-[#111111]">{project.title}</h3>
                    <p className="text-sm text-[#737373]">{project.location} · {project.category}</p>
                  </div>
                  <button className="p-1 rounded-md hover:bg-gray-100">
                    <MoreHorizontal className="w-4 h-4 text-[#737373]" />
                  </button>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <span className="flex items-center gap-1 text-xs text-[#737373]">
                    <Eye className="w-3.5 h-3.5" /> {project.views || 0}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#737373]">
                    <Users className="w-3.5 h-3.5" /> {project.leads || 0} leads
                  </span>
                  {project.isPublished && (
                    <Link
                      to={`/p/${project.businessProfile?.slug || 'preview'}/${project.slug}`}
                      className="ml-auto flex items-center gap-1 text-xs text-[#111111] font-medium hover:underline"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> View
                    </Link>
                  )}
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
