import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { Eye, Users, MousePointer, MessageSquare, TrendingUp, BarChart3 } from 'lucide-react';

const statsData = [
  { label: 'Total Views', value: '3,482', change: '+12.5%', icon: Eye },
  { label: 'Total Leads', value: '37', change: '+8', icon: Users },
  { label: 'CTA Clicks', value: '156', change: '+23%', icon: MousePointer },
  { label: 'Conversion Rate', value: '4.8%', change: '+0.3%', icon: TrendingUp },
];

const topProjects = [
  { name: 'Modern Kitchen', views: 482, leads: 5, conversion: '1.04%' },
  { name: 'Moroccan Living Room', views: 321, leads: 3, conversion: '0.93%' },
  { name: 'Custom Dressing', views: 256, leads: 4, conversion: '1.56%' },
  { name: 'Luxury Bedroom', views: 189, leads: 2, conversion: '1.06%' },
  { name: 'Custom Woodwork', views: 145, leads: 1, conversion: '0.69%' },
];

const topSources = [
  { source: 'Direct', views: 1200, pct: 34 },
  { source: 'WhatsApp', views: 890, pct: 26 },
  { source: 'Instagram', views: 650, pct: 19 },
  { source: 'Google', views: 420, pct: 12 },
  { source: 'TikTok', views: 322, pct: 9 },
];

export default function Analytics() {
  const [period, setPeriod] = useState<'7d' | '30d' | '90d'>('30d');

  const chartData = {
    '7d':  [120, 150, 180, 140, 200, 190, 220],
    '30d': [80, 120, 95, 150, 180, 200, 170, 220, 250, 230, 280, 300, 270, 310, 340, 320, 350, 380, 360, 400, 420, 390, 440, 460, 430, 480, 500, 470, 520, 540],
    '90d': Array.from({ length: 90 }, (_, i) => Math.floor(50 + Math.random() * 200 + i * 5)),
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#111111]">Analytics</h1>
          <p className="text-sm text-[#737373] mt-1">Track your portfolio performance</p>
        </div>
        <div className="flex gap-1 bg-white rounded-lg border border-[#E5E2DC] p-1">
          {(['7d', '30d', '90d'] as const).map((p) => (
            <button key={p} onClick={() => setPeriod(p)}
              className={`px-3 py-1.5 text-xs rounded-md font-medium transition-colors ${period === p ? 'bg-[#111111] text-white' : 'text-[#737373]'}`}>
              {p === '7d' ? '7 days' : p === '30d' ? '30 days' : '90 days'}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {statsData.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#737373]">{stat.label}</CardTitle>
              <stat.icon className="h-4 w-4 text-[#737373]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#111111]">{stat.value}</div>
              <p className="text-xs text-green-600 flex items-center gap-1 mt-1"><TrendingUp className="w-3 h-3" /> {stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Views chart */}
      <Card className="mb-8">
        <CardHeader><CardTitle className="text-base">Views Over Time</CardTitle></CardHeader>
        <CardContent>
          <div className="h-48 flex items-end gap-[2px]">
            {chartData[period].map((v, i) => {
              const max = Math.max(...chartData[period]);
              return (
                <div key={i} className="flex-1 bg-[#111111] rounded-t-sm hover:bg-black/70 transition-colors cursor-pointer"
                  style={{ height: `${(v / max) * 100}%` }} title={`${v} views`} />
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Top projects */}
        <Card>
          <CardHeader><CardTitle className="text-base">Top Projects</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProjects.map((p, i) => (
                <div key={p.name} className="flex items-center gap-4">
                  <span className="text-sm font-medium text-[#737373] w-6">{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-[#111111] truncate">{p.name}</p>
                    <div className="w-full bg-[#F8F7F4] rounded-full h-1.5 mt-1">
                      <div className="bg-[#111111] h-1.5 rounded-full" style={{ width: `${(p.views / topProjects[0].views) * 100}%` }} />
                    </div>
                  </div>
                  <span className="text-xs text-[#737373]">{p.views} views</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top sources */}
        <Card>
          <CardHeader><CardTitle className="text-base">Traffic Sources</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topSources.map((s) => (
                <div key={s.source} className="flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-sm text-[#111111]">{s.source}</p>
                      <span className="text-xs text-[#737373]">{s.pct}%</span>
                    </div>
                    <div className="w-full bg-[#F8F7F4] rounded-full h-1.5">
                      <div className="bg-[#111111] h-1.5 rounded-full" style={{ width: `${s.pct}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
