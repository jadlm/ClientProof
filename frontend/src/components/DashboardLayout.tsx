import { Link, Outlet, useLocation, Navigate } from 'react-router-dom';
import {
  LayoutDashboard, FolderKanban, Users, Star, BarChart3, Globe,
  Settings, CreditCard, Plus, Search, Bell, LogOut, Menu, X
} from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

const navItems = [
  { label: 'Overview', icon: LayoutDashboard, path: '/dashboard' },
  { label: 'Projects', icon: FolderKanban, path: '/dashboard/projects' },
  { label: 'Leads', icon: Users, path: '/dashboard/leads' },
  { label: 'Reviews', icon: Star, path: '/dashboard/reviews' },
  { label: 'Analytics', icon: BarChart3, path: '/dashboard/analytics' },
  { label: 'Portfolio', icon: Globe, path: '/dashboard/portfolio' },
  { label: 'Settings', icon: Settings, path: '/dashboard/settings' },
  { label: 'Billing', icon: CreditCard, path: '/dashboard/billing' },
];

export default function DashboardLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, loading, signOut } = useAuth();

  if (loading) {
    return <div className="min-h-screen bg-[#F8F7F4] flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const initial = user.email ? user.email[0].toUpperCase() : 'U';

  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      <div className="flex h-screen overflow-hidden">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-[#E5E2DC] flex-shrink-0
          transform transition-transform lg:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="h-full flex flex-col">
            {/* Logo */}
            <div className="h-16 flex items-center justify-between px-6 border-b border-[#E5E2DC]">
              <Link to="/" className="text-xl font-bold tracking-tight text-[#111111]">
                ClientProof
              </Link>
              <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-[#111111] text-white'
                        : 'text-[#737373] hover:text-[#111111] hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* New Project CTA */}
            <div className="p-4 border-t border-[#E5E2DC]">
              <Link
                to="/dashboard/projects/new"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#111111] text-white rounded-lg text-sm font-medium hover:bg-black/90 transition-colors"
              >
                <Plus className="w-4 h-4" />
                New Project
              </Link>
            </div>

            {/* User section */}
            <div className="p-4 border-t border-[#E5E2DC]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#111111] flex items-center justify-center text-white text-xs font-semibold">
                  {initial}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#111111] truncate">{user.user_metadata?.full_name || user.email}</p>
                  <p className="text-xs text-[#737373] truncate">Free plan</p>
                </div>
                <button onClick={signOut} className="text-[#737373] hover:text-[#111111]" title="Sign out">
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto flex flex-col">
          {/* Header */}
          <header className="h-16 bg-white border-b border-[#E5E2DC] flex items-center justify-between px-4 md:px-8 flex-shrink-0">
            <div className="flex items-center gap-4">
              <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="w-5 h-5" />
              </button>
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737373]" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-9 pr-4 py-2 text-sm bg-[#F8F7F4] border border-[#E5E2DC] rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-[#111111] focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 text-[#737373] hover:text-[#111111] rounded-lg hover:bg-gray-50">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-8 h-8 rounded-full bg-[#111111] flex items-center justify-center text-white text-xs font-semibold">
                {initial}
              </div>
            </div>
          </header>

          {/* Page content */}
          <div className="flex-1 p-4 md:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
