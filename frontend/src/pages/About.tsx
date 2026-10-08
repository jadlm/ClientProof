import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">About ClientProof</h1>
          <div className="space-y-6 text-lg text-[#737373] leading-relaxed">
            <p>
              ClientProof was born from a simple observation: talented professionals have incredible work
              buried in their phones. Photos shared on WhatsApp, scattered across Instagram stories,
              or sitting unused in camera rolls.
            </p>
            <p>
              We built ClientProof to bridge this gap. Our platform transforms your best projects into
              beautiful, shareable pages that help you win new clients. No design skills needed, no
              complex setup — just upload your photos, add your details, and share.
            </p>
            <p>
              Whether you're an interior designer in Casablanca, a contractor in Paris, or a photographer
              in New York, ClientProof gives you the tools to showcase your work professionally and
              convert visitors into leads.
            </p>
            <div className="bg-[#F8F7F4] rounded-2xl p-8 border border-[#E5E2DC]">
              <h3 className="text-xl font-semibold text-[#111111] mb-4">Our Mission</h3>
              <p className="text-[#737373]">
                Empower every professional who works with their hands to market their craft as effectively
                as the biggest brands — with beautiful project pages, client reviews, and lead generation
                tools that actually work.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
