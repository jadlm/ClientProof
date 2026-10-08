import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';
import { Search, Phone, Mail, MessageSquare, Loader2 } from 'lucide-react';

type LeadStatus = 'ALL' | 'NEW' | 'CONTACTED' | 'WON' | 'LOST';

const statusColors: Record<string, 'success' | 'warning' | 'default' | 'destructive'> = {
  NEW: 'success',
  CONTACTED: 'warning',
  WON: 'default',
  LOST: 'destructive',
};

export default function Leads() {
  const [filter, setFilter] = useState<LeadStatus>('ALL');
  const [search, setSearch] = useState('');
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/leads`)
      .then(res => res.json())
      .then(data => {
        setLeads(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filtered = leads.filter(l => {
    const matchFilter = filter === 'ALL' || l.status === filter;
    const matchSearch = l.name?.toLowerCase().includes(search.toLowerCase()) || l.project?.title?.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const updateStatus = async (id: string, status: 'NEW' | 'CONTACTED' | 'WON' | 'LOST') => {
    // Optimistic update
    setLeads(leads.map(l => l.id === id ? { ...l, status } : l));
    
    // API call
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/leads/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
    } catch (err) {
      console.error('Failed to update lead status', err);
    }
  };

  const counts = {
    ALL: leads.length,
    NEW: leads.filter(l => l.status === 'NEW').length,
    CONTACTED: leads.filter(l => l.status === 'CONTACTED').length,
    WON: leads.filter(l => l.status === 'WON').length,
    LOST: leads.filter(l => l.status === 'LOST').length,
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#111111]">Leads</h1>
        <p className="text-sm text-[#737373] mt-1">Manage your incoming quote requests</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card><CardContent className="p-4"><p className="text-xs text-[#737373]">New</p><p className="text-2xl font-bold text-green-600">{counts.NEW}</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-xs text-[#737373]">Contacted</p><p className="text-2xl font-bold text-amber-600">{counts.CONTACTED}</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-xs text-[#737373]">Won</p><p className="text-2xl font-bold text-[#111111]">{counts.WON}</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-xs text-[#737373]">Lost</p><p className="text-2xl font-bold text-red-500">{counts.LOST}</p></CardContent></Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737373]" />
          <input
            type="text" placeholder="Search leads..." value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-[#E5E2DC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]"
          />
        </div>
        <div className="flex gap-1 bg-white rounded-lg border border-[#E5E2DC] p-1">
          {(['ALL', 'NEW', 'CONTACTED', 'WON', 'LOST'] as LeadStatus[]).map((s) => (
            <button key={s} onClick={() => setFilter(s)}
              className={`px-3 py-1.5 text-xs rounded-md font-medium transition-colors ${filter === s ? 'bg-[#111111] text-white' : 'text-[#737373] hover:text-[#111111]'}`}>
              {s} ({counts[s]})
            </button>
          ))}
        </div>
      </div>

      {/* Leads table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-[#E5E2DC]">
                <th className="text-left p-4 text-xs font-medium text-[#737373]">Name</th>
                <th className="text-left p-4 text-xs font-medium text-[#737373]">Project</th>
                <th className="text-left p-4 text-xs font-medium text-[#737373] hidden md:table-cell">Phone</th>
                <th className="text-left p-4 text-xs font-medium text-[#737373] hidden md:table-cell">Budget</th>
                <th className="text-left p-4 text-xs font-medium text-[#737373]">Status</th>
                <th className="text-left p-4 text-xs font-medium text-[#737373] hidden md:table-cell">Date</th>
                <th className="text-left p-4 text-xs font-medium text-[#737373]">Actions</th>
              </tr></thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={7} className="p-8 text-center"><Loader2 className="w-6 h-6 animate-spin mx-auto text-[#111111]" /></td></tr>
                ) : filtered.length === 0 ? (
                  <tr><td colSpan={7} className="p-8 text-center text-[#737373]">No leads found.</td></tr>
                ) : filtered.map((lead) => (
                  <tr key={lead.id} className="border-b border-[#E5E2DC] last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <p className="font-medium text-[#111111]">{lead.name}</p>
                      <p className="text-xs text-[#737373]">{lead.email}</p>
                    </td>
                    <td className="p-4 text-[#737373]">{lead.project?.title || 'Unknown Project'}</td>
                    <td className="p-4 text-[#737373] hidden md:table-cell">{lead.phone}</td>
                    <td className="p-4 text-[#737373] hidden md:table-cell">{lead.budget || 'N/A'}</td>
                    <td className="p-4">
                      <select
                        value={lead.status}
                        onChange={(e) => updateStatus(lead.id, e.target.value as any)}
                        className="text-xs font-medium px-2 py-1 rounded-md border border-[#E5E2DC] bg-white focus:outline-none"
                      >
                        <option value="NEW">New</option>
                        <option value="CONTACTED">Contacted</option>
                        <option value="WON">Won</option>
                        <option value="LOST">Lost</option>
                      </select>
                    </td>
                    <td className="p-4 text-[#737373] hidden md:table-cell">{new Date(lead.createdAt).toLocaleDateString()}</td>
                    <td className="p-4">
                      <div className="flex gap-1">
                        <a href={`tel:${lead.phone}`} className="p-1.5 hover:bg-gray-100 rounded-md" title="Call"><Phone className="w-3.5 h-3.5" /></a>
                        <a href={`mailto:${lead.email}`} className="p-1.5 hover:bg-gray-100 rounded-md" title="Email"><Mail className="w-3.5 h-3.5" /></a>
                        <a href={`https://wa.me/${lead.phone?.replace(/\s/g, '')}`} target="_blank" className="p-1.5 hover:bg-gray-100 rounded-md text-green-600" title="WhatsApp"><MessageSquare className="w-3.5 h-3.5" /></a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
