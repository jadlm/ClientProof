import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { ArrowLeft, Mail } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F7F4] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-2xl font-bold text-[#111111]">ClientProof</Link>
        </div>

        <div className="bg-white rounded-2xl border border-[#E5E2DC] p-8">
          {!sent ? (
            <>
              <h2 className="text-xl font-bold text-[#111111] mb-2">Reset your password</h2>
              <p className="text-sm text-[#737373] mb-6">Enter your email and we'll send you a reset link.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <Input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button onClick={() => setSent(true)} className="w-full py-3 bg-[#111111] text-white rounded-xl font-medium hover:bg-black/90 transition-colors">
                  Send reset link
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-[#111111] mb-2">Check your email</h2>
              <p className="text-sm text-[#737373]">We've sent a password reset link to <strong>{email}</strong></p>
            </div>
          )}
        </div>

        <p className="text-center mt-6">
          <Link to="/login" className="text-sm text-[#111111] font-medium hover:underline flex items-center justify-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}
