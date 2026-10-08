import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Users, Eye, FolderKanban, TrendingUp, ArrowUpRight, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Simple sparkline SVG
function Sparkline({ data, color = '#111111' }: { data: number[]; color?: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 120;
  const h = 40;
  const points = data.map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`).join(' ');
  return (
    <svg width={w} height={h} className="mt-2">
      <polyline fill="none" stroke={color} strokeWidth="2" points={points} />
    </svg>
  );
}

export default function DashboardOverview() {
  const [period, setPeriod] = useState<'7d' | '30d' | '90d'>('30d');
  
  const [projects, setProjects] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`${import.meta.env.VITE_API_URL}/projects`).then(res => res.json()),
      fetch(`${import.meta.env.VITE_API_URL}/leads`).then(res => res.json())
    ]).then(([projectsData, leadsData]) => {
      setProjects(projectsData);
      setLeads(leadsData);
      setLoading(false);
    }).catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  const viewsData = {
    '7d':  [120, 150, 180, 140, 200, 190, 220],
    '30d': [80, 120, 95, 150, 180, 200, 170, 220, 250, 230, 280, 300, 270, 310, 340, 320, 350, 380, 360, 400, 420, 390, 440, 460, 430, 480, 500, 470, 520, 540],
    '90d': [50, 80, 120, 150, 200, 180, 250, 300, 280, 350, 400, 380, 450, 500, 480, 550, 600, 580, 650, 700, 680, 750, 800, 780, 850, 900, 880, 950, 1000, 980],
  };

  const statsData = [
    { label: 'Total Projects', value: loading ? '-' : projects.length.toString(), change: '+3 this month', icon: FolderKanban },
    { label: 'Portfolio Views', value: '3,482', change: '+12.5%', icon: Eye },
    { label: 'New Leads', value: loading ? '-' : leads.filter(l => l.status === 'NEW').length.toString(), change: '+8 this week', icon: Users },
    { label: 'Conversion Rate', value: '4.8%', change: '+0.3%', icon: Activity },
  ];

  const recentProjects = projects.slice(0, 4);
  const recentLeads = leads.slice(0, 5);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#111111]">Overview</h1>
          <p className="text-sm text-[#737373] mt-1">Welcome back to your workspace</p>
        </div>
        <Link
          to="/dashboard/projects/new"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 bg-[#111111] text-white rounded-lg text-sm font-medium hover:bg-black/90 transition-colors"
        >
          New Project
        </Link>
      </div>

      {/* Stats cards */}
      <div className="grid gap-4 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {statsData.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#737373]">{stat.label}</CardTitle>
              <stat.icon className="h-4 w-4 text-[#737373]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#111111]">{stat.value}</div>
              <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" /> {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Views chart */}
      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-base font-semibold">Portfolio Views</CardTitle>
          <div className="flex gap-1 bg-[#F8F7F4] rounded-lg p-1">
            {(['7d', '30d', '90d'] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                  period === p ? 'bg-white text-[#111111] shadow-sm' : 'text-[#737373] hover:text-[#111111]'
                }`}
              >
                {p === '7d' ? '7 days' : p === '30d' ? '30 days' : '90 days'}
              </button>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-48 flex items-end gap-[2px]">
            {viewsData[period].map((v, i) => {
              const max = Math.max(...viewsData[period]);
              return (
                <div
                  key={i}
                  className="flex-1 bg-[#111111] rounded-t-sm hover:bg-black/70 transition-colors"
                  style={{ height: `${(v / max) * 100}%` }}
                  title={`${v} views`}
                />
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent projects */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base font-semibold">Recent Projects</CardTitle>
            <Link to="/dashboard/projects" className="text-sm text-[#737373] hover:text-[#111111] flex items-center gap-1">
              View all <ArrowUpRight className="w-3 h-3" />
            </Link>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center py-8"><Loader2 className="w-6 h-6 animate-spin text-[#111111]" /></div>
            ) : recentProjects.length === 0 ? (
              <div className="text-center py-8 text-[#737373]">No projects found.</div>
            ) : (
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between py-2 border-b border-[#E5E2DC] last:border-0">
                    <div>
                      <p className="font-medium text-sm text-[#111111]">{project.title}</p>
                      <p className="text-xs text-[#737373]">{project.location}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#737373]">{project.views || 0} views</span>
                      <Badge variant={project.isPublished ? 'success' : 'secondary'}>
                        {project.isPublished ? 'Published' : 'Draft'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent leads */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base font-semibold">Recent Leads</CardTitle>
            <Link to="/dashboard/leads" className="text-sm text-[#737373] hover:text-[#111111] flex items-center gap-1">
              View all <ArrowUpRight className="w-3 h-3" />
            </Link>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center py-8"><Loader2 className="w-6 h-6 animate-spin text-[#111111]" /></div>
            ) : recentLeads.length === 0 ? (
              <div className="text-center py-8 text-[#737373]">No leads found.</div>
            ) : (
              <div className="space-y-4">
                {recentLeads.map((lead) => (
                  <div key={lead.id} className="flex items-center justify-between py-2 border-b border-[#E5E2DC] last:border-0">
                    <div>
                      <p className="font-medium text-sm text-[#111111]">{lead.name}</p>
                      <p className="text-xs text-[#737373]">{lead.project?.title || 'Unknown Project'} · {lead.budget}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#737373]">{new Date(lead.createdAt).toLocaleDateString()}</span>
                      <Badge variant={lead.status === 'NEW' ? 'success' : 'warning'}>
                        {lead.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
