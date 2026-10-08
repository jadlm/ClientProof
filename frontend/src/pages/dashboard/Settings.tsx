import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Upload, Save } from 'lucide-react';

export default function DashboardSettings() {
  const [saved, setSaved] = useState(false);
  const [profile, setProfile] = useState({
    businessName: 'Couronne Urban',
    slug: 'couronne-urban',
    category: 'Interior Design',
    description: 'Premium interior design studio specializing in luxury residential projects.',
    phone: '+212 5 22 12 34 56',
    email: 'hello@couronne.ma',
    website: 'https://couronne.ma',
    whatsapp: '+212622123456',
    address: '45 Boulevard Mohammed V',
    city: 'Casablanca',
    country: 'Morocco',
    instagram: 'couronne.urban',
    facebook: 'couronneturban',
    tiktok: '@couronneurban',
    primaryColor: '#111111',
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#111111]">Settings</h1>
          <p className="text-sm text-[#737373] mt-1">Manage your business profile and branding</p>
        </div>
        <button onClick={handleSave}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#111111] text-white rounded-lg text-sm font-medium hover:bg-black/90 transition-colors">
          <Save className="w-4 h-4" /> {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Business Info */}
          <Card>
            <CardHeader><CardTitle>Business Information</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-1.5">Business Name</label><Input value={profile.businessName} onChange={(e) => setProfile({...profile, businessName: e.target.value})} /></div>
                <div><label className="block text-sm font-medium mb-1.5">URL Slug</label><Input value={profile.slug} onChange={(e) => setProfile({...profile, slug: e.target.value})} /></div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Category</label>
                <select value={profile.category} onChange={(e) => setProfile({...profile, category: e.target.value})}
                  className="w-full h-10 rounded-lg border border-[#E5E2DC] px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#111111]">
                  <option>Interior Design</option><option>Renovation</option><option>Woodwork</option><option>Architecture</option><option>Photography</option>
                </select>
              </div>
              <div><label className="block text-sm font-medium mb-1.5">Description</label><Textarea value={profile.description} onChange={(e) => setProfile({...profile, description: e.target.value})} rows={3} /></div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader><CardTitle>Contact Information</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-1.5">Phone</label><Input value={profile.phone} onChange={(e) => setProfile({...profile, phone: e.target.value})} /></div>
                <div><label className="block text-sm font-medium mb-1.5">Email</label><Input value={profile.email} onChange={(e) => setProfile({...profile, email: e.target.value})} /></div>
                <div><label className="block text-sm font-medium mb-1.5">WhatsApp</label><Input value={profile.whatsapp} onChange={(e) => setProfile({...profile, whatsapp: e.target.value})} /></div>
                <div><label className="block text-sm font-medium mb-1.5">Website</label><Input value={profile.website} onChange={(e) => setProfile({...profile, website: e.target.value})} /></div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div><label className="block text-sm font-medium mb-1.5">Address</label><Input value={profile.address} onChange={(e) => setProfile({...profile, address: e.target.value})} /></div>
                <div><label className="block text-sm font-medium mb-1.5">City</label><Input value={profile.city} onChange={(e) => setProfile({...profile, city: e.target.value})} /></div>
                <div><label className="block text-sm font-medium mb-1.5">Country</label><Input value={profile.country} onChange={(e) => setProfile({...profile, country: e.target.value})} /></div>
              </div>
            </CardContent>
          </Card>

          {/* Social */}
          <Card>
            <CardHeader><CardTitle>Social Networks</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div><label className="block text-sm font-medium mb-1.5">Instagram</label><Input value={profile.instagram} onChange={(e) => setProfile({...profile, instagram: e.target.value})} /></div>
                <div><label className="block text-sm font-medium mb-1.5">Facebook</label><Input value={profile.facebook} onChange={(e) => setProfile({...profile, facebook: e.target.value})} /></div>
                <div><label className="block text-sm font-medium mb-1.5">TikTok</label><Input value={profile.tiktok} onChange={(e) => setProfile({...profile, tiktok: e.target.value})} /></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Branding sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader><CardTitle>Branding</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Logo</label>
                <div className="w-24 h-24 rounded-xl bg-[#F8F7F4] border-2 border-dashed border-[#E5E2DC] flex items-center justify-center cursor-pointer hover:border-[#111111] transition-colors">
                  <Upload className="w-6 h-6 text-[#737373]" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Cover Image</label>
                <div className="aspect-[3/1] rounded-xl bg-[#F8F7F4] border-2 border-dashed border-[#E5E2DC] flex items-center justify-center cursor-pointer hover:border-[#111111] transition-colors">
                  <Upload className="w-6 h-6 text-[#737373]" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Primary Color</label>
                <div className="flex items-center gap-3">
                  <input type="color" value={profile.primaryColor} onChange={(e) => setProfile({...profile, primaryColor: e.target.value})} className="w-10 h-10 rounded-lg border border-[#E5E2DC] cursor-pointer" />
                  <Input value={profile.primaryColor} onChange={(e) => setProfile({...profile, primaryColor: e.target.value})} className="flex-1" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preview card */}
          <Card>
            <CardHeader><CardTitle>Preview</CardTitle></CardHeader>
            <CardContent>
              <div className="bg-[#F8F7F4] rounded-xl p-4 text-center">
                <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold" style={{ backgroundColor: profile.primaryColor }}>
                  {profile.businessName.split(' ').map(n => n[0]).join('')}
                </div>
                <p className="font-semibold text-sm">{profile.businessName}</p>
                <p className="text-xs text-[#737373] mt-1">{profile.category}</p>
                <p className="text-xs text-[#737373] mt-2 line-clamp-2">{profile.description}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
