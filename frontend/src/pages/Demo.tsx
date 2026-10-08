import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Demo() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">See ClientProof in action</h1>
            <p className="text-xl text-[#737373] max-w-2xl mx-auto">
              Explore a fully-loaded demo portfolio with real projects, reviews, analytics, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Link to="/dashboard" className="bg-[#F8F7F4] rounded-2xl p-8 border border-[#E5E2DC] hover:border-[#111111] transition-colors group">
              <span className="text-3xl mb-4 block">📊</span>
              <h3 className="text-xl font-semibold text-[#111111] mb-2 group-hover:underline">Dashboard</h3>
              <p className="text-[#737373]">See the overview, projects, leads, and analytics — all in one place.</p>
            </Link>

            <Link to="/b/couronne-urban" className="bg-[#F8F7F4] rounded-2xl p-8 border border-[#E5E2DC] hover:border-[#111111] transition-colors group">
              <span className="text-3xl mb-4 block">🌐</span>
              <h3 className="text-xl font-semibold text-[#111111] mb-2 group-hover:underline">Public Portfolio</h3>
              <p className="text-[#737373]">View a professional portfolio page with projects, reviews, and contact info.</p>
            </Link>

            <Link to="/p/couronne-urban/modern-kitchen-casablanca" className="bg-[#F8F7F4] rounded-2xl p-8 border border-[#E5E2DC] hover:border-[#111111] transition-colors group">
              <span className="text-3xl mb-4 block">🏗️</span>
              <h3 className="text-xl font-semibold text-[#111111] mb-2 group-hover:underline">Project Page</h3>
              <p className="text-[#737373]">See a beautiful project page with before/after, gallery, reviews, and quote form.</p>
            </Link>

            <Link to="/dashboard/projects/new" className="bg-[#F8F7F4] rounded-2xl p-8 border border-[#E5E2DC] hover:border-[#111111] transition-colors group">
              <span className="text-3xl mb-4 block">✨</span>
              <h3 className="text-xl font-semibold text-[#111111] mb-2 group-hover:underline">Create a Project</h3>
              <p className="text-[#737373]">Try the step-by-step project creation wizard with upload and preview.</p>
            </Link>
          </div>

          <div className="text-center">
            <Link to="/register" className="inline-flex items-center gap-2 px-8 py-4 bg-[#111111] text-white rounded-xl font-medium hover:bg-black/90 transition-all text-lg shadow-xl shadow-black/10">
              Create your own ClientProof <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
