import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, ArrowRight, Upload, X, Star, Check, Copy, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

const steps = ['Project Info', 'Upload Images', 'Before / After', 'Testimonial', 'Preview', 'Publish'];

export default function ProjectCreate() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    title: '', category: 'Kitchen', location: '', description: '',
    completionDate: '', duration: '', budget: '',
  });
  const [images, setImages] = useState<string[]>([
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=300&fit=crop',
  ]);
  const [beforeImg, setBeforeImg] = useState<string>('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop');
  const [afterImg, setAfterImg] = useState<string>('https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&h=600&fit=crop');
  const [testimonial, setTestimonial] = useState({ clientName: '', rating: 5, comment: '' });
  const [published, setPublished] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const handleNext = () => setCurrentStep(Math.min(steps.length - 1, currentStep + 1));
  const handlePrev = () => setCurrentStep(Math.max(0, currentStep - 1));

  const handlePublish = () => {
    setPublished(true);
  };

  const projectUrl = `https://clientproof.app/p/couronne-urban/${formData.title.toLowerCase().replace(/\s+/g, '-') || 'my-project'}`;

  const copyLink = () => {
    navigator.clipboard.writeText(projectUrl);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Link to="/dashboard/projects" className="p-2 hover:bg-gray-100 rounded-lg">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-[#111111]">New Project</h1>
          <p className="text-sm text-[#737373] mt-1">Step {currentStep + 1} of {steps.length}</p>
        </div>
      </div>

      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
        {steps.map((step, i) => (
          <button
            key={step}
            onClick={() => setCurrentStep(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              i === currentStep
                ? 'bg-[#111111] text-white'
                : i < currentStep
                ? 'bg-green-50 text-green-700'
                : 'bg-white text-[#737373] border border-[#E5E2DC]'
            }`}
          >
            {i < currentStep ? <Check className="w-4 h-4" /> : <span>{i + 1}</span>}
            <span className="hidden md:inline">{step}</span>
          </button>
        ))}
      </div>

      {/* Step 1 — Project Info */}
      {currentStep === 0 && (
        <Card>
          <CardHeader><CardTitle>Project Information</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Project Name</label>
              <Input placeholder="e.g. Modern Kitchen Renovation" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full h-10 rounded-lg border border-[#E5E2DC] px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#111111]"
                >
                  <option>Kitchen</option><option>Interior Design</option><option>Renovation</option>
                  <option>Woodwork</option><option>Bathroom</option><option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Location</label>
                <Input placeholder="e.g. Casablanca, Morocco" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Description</label>
              <Textarea placeholder="Describe the project..." rows={4} value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div><label className="block text-sm font-medium mb-1.5">Completion Date</label><Input type="date" value={formData.completionDate} onChange={(e) => setFormData({ ...formData, completionDate: e.target.value })} /></div>
              <div><label className="block text-sm font-medium mb-1.5">Duration</label><Input placeholder="e.g. 8 weeks" value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} /></div>
              <div><label className="block text-sm font-medium mb-1.5">Budget</label><Input placeholder="e.g. 45,000 - 65,000 MAD" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} /></div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2 — Upload Images */}
      {currentStep === 1 && (
        <Card>
          <CardHeader><CardTitle>Upload Images</CardTitle></CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-[#E5E2DC] rounded-xl p-12 text-center hover:border-[#111111] transition-colors cursor-pointer mb-6">
              <Upload className="w-10 h-10 mx-auto mb-4 text-[#737373]" />
              <p className="font-medium text-[#111111] mb-1">Drop images here or click to upload</p>
              <p className="text-sm text-[#737373]">JPG, PNG, WEBP — up to 10MB each</p>
            </div>
            {images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                    <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Step 3 — Before / After */}
      {currentStep === 2 && (
        <Card>
          <CardHeader><CardTitle>Before / After</CardTitle></CardHeader>
          <CardContent>
            <p className="text-sm text-[#737373] mb-6">Select a before and after image to create an interactive comparison.</p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium mb-2">Before Image</label>
                <div className="aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#E5E2DC]">
                  <img src={beforeImg} alt="Before" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">After Image</label>
                <div className="aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#E5E2DC]">
                  <img src={afterImg} alt="After" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Preview</label>
              <BeforeAfterSlider beforeImage={beforeImg} afterImage={afterImg} />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 4 — Testimonial */}
      {currentStep === 3 && (
        <Card>
          <CardHeader><CardTitle>Client Testimonial</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Client Name</label>
              <Input placeholder="e.g. Sarah Benali" value={testimonial.clientName} onChange={(e) => setTestimonial({ ...testimonial, clientName: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Rating</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} onClick={() => setTestimonial({ ...testimonial, rating: star })}>
                    <Star className={`w-6 h-6 ${star <= testimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Comment</label>
              <Textarea placeholder="What did the client say about the project?" rows={4} value={testimonial.comment} onChange={(e) => setTestimonial({ ...testimonial, comment: e.target.value })} />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 5 — Preview */}
      {currentStep === 4 && (
        <Card>
          <CardHeader><CardTitle>Preview</CardTitle></CardHeader>
          <CardContent>
            <div className="bg-[#F8F7F4] rounded-xl p-6">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-2">{formData.title || 'Your Project Title'}</h2>
                <p className="text-sm text-[#737373] mb-6">{formData.location || 'Location'} · {formData.category}</p>
                <BeforeAfterSlider beforeImage={beforeImg} afterImage={afterImg} className="mb-6" />
                <p className="text-[#737373] mb-6">{formData.description || 'Project description will appear here...'}</p>
                {testimonial.clientName && (
                  <div className="bg-white rounded-xl p-6 border border-[#E5E2DC]">
                    <div className="flex gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className={`w-4 h-4 ${s <= testimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <p className="text-sm text-[#737373] italic mb-2">"{testimonial.comment}"</p>
                    <p className="text-sm font-medium">{testimonial.clientName}</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 6 — Publish */}
      {currentStep === 5 && (
        <Card>
          <CardHeader><CardTitle>{published ? '🎉 Project Published!' : 'Publish Your Project'}</CardTitle></CardHeader>
          <CardContent>
            {!published ? (
              <div className="text-center py-8">
                <p className="text-lg text-[#737373] mb-8">Your project is ready to go live. Click publish to create your shareable link.</p>
                <button onClick={handlePublish} className="px-8 py-3 bg-[#111111] text-white rounded-xl font-medium hover:bg-black/90 transition-colors text-lg">
                  Publish Project
                </button>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-lg font-medium text-[#111111] mb-2">Your project is live!</p>
                <p className="text-sm text-[#737373] mb-6">Share this link with your clients and on social media.</p>
                <div className="flex items-center gap-2 max-w-lg mx-auto bg-[#F8F7F4] rounded-lg border border-[#E5E2DC] p-3 mb-8">
                  <span className="flex-1 text-sm text-[#111111] truncate">{projectUrl}</span>
                  <button onClick={copyLink} className="flex items-center gap-1 px-3 py-1.5 bg-[#111111] text-white rounded-md text-sm hover:bg-black/90">
                    {linkCopied ? <><Check className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
                  </button>
                </div>
                <div className="flex justify-center gap-3">
                  <a href={`https://wa.me/?text=Check out my latest project: ${projectUrl}`} target="_blank" className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">Share on WhatsApp</a>
                  <Link to="/dashboard/projects" className="px-4 py-2 bg-white border border-[#E5E2DC] text-[#111111] rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">Back to Projects</Link>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Navigation */}
      {!published && (
        <div className="flex justify-between mt-6">
          <button onClick={handlePrev} disabled={currentStep === 0}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#737373] hover:text-[#111111] disabled:opacity-50 disabled:cursor-not-allowed">
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>
          {currentStep < steps.length - 1 && (
            <button onClick={handleNext} className="flex items-center gap-2 px-6 py-2.5 bg-[#111111] text-white rounded-lg text-sm font-medium hover:bg-black/90 transition-colors">
              Next <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
