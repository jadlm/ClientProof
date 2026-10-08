import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-[#111111]">
          ClientProof
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/pricing" className="text-sm text-[#737373] hover:text-[#111111] transition-colors">
            Pricing
          </Link>
          <Link to="/demo" className="text-sm text-[#737373] hover:text-[#111111] transition-colors">
            Demo
          </Link>
          <Link to="/about" className="text-sm text-[#737373] hover:text-[#111111] transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm text-[#737373] hover:text-[#111111] transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm font-medium text-[#171717] hover:text-[#111111] px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="text-sm font-medium bg-[#111111] text-white px-4 py-2 rounded-lg hover:bg-black/90 transition-colors"
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
}
