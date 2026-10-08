import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-[#E5E2DC] mb-4">404</h1>
        <h2 className="text-2xl font-bold text-[#111111] mb-2">Page not found</h2>
        <p className="text-[#737373] mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="px-6 py-3 bg-[#111111] text-white rounded-xl font-medium hover:bg-black/90 transition-colors">
          Go home
        </Link>
      </div>
    </div>
  );
}
