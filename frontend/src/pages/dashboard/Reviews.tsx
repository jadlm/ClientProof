import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Check, X, Trash2 } from 'lucide-react';
import { useState } from 'react';

const reviewsData = [
  { id: '1', clientName: 'Sarah Benali', project: 'Modern Kitchen', rating: 5, comment: 'Absolutely stunning work! The kitchen is exactly what we dreamed of. Professional and on time.', approved: true, date: '2024-09-15' },
  { id: '2', clientName: 'Karim El Fassi', project: 'Custom Dressing', rating: 5, comment: 'Perfect dressing room. Every detail was carefully thought out. Highly recommend!', approved: true, date: '2024-09-12' },
  { id: '3', clientName: 'Leila Amrani', project: 'Moroccan Living Room', rating: 4, comment: 'Beautiful living room design. Some minor delays but the result was worth the wait.', approved: true, date: '2024-09-10' },
  { id: '4', clientName: 'Omar Idrissi', project: 'Luxury Bedroom', rating: 5, comment: 'Incredible transformation. The bedroom feels like a five-star hotel suite.', approved: false, date: '2024-09-08' },
  { id: '5', clientName: 'Nadia Berrada', project: 'TV Wall', rating: 5, comment: 'Modern and sleek TV wall design. Love the lighting integration!', approved: false, date: '2024-09-05' },
];

export default function Reviews() {
  const [reviews, setReviews] = useState(reviewsData);
  const approvedCount = reviews.filter(r => r.approved).length;
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  const approve = (id: string) => setReviews(reviews.map(r => r.id === id ? { ...r, approved: true } : r));
  const reject = (id: string) => setReviews(reviews.map(r => r.id === id ? { ...r, approved: false } : r));
  const remove = (id: string) => setReviews(reviews.filter(r => r.id !== id));

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#111111]">Reviews</h1>
        <p className="text-sm text-[#737373] mt-1">Manage client testimonials</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <span className="text-3xl font-bold">{avgRating}</span>
            </div>
            <p className="text-sm text-[#737373]">Average rating</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <span className="text-3xl font-bold">{reviews.length}</span>
            <p className="text-sm text-[#737373]">Total reviews</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <span className="text-3xl font-bold text-green-600">{approvedCount}</span>
            <p className="text-sm text-[#737373]">Approved</p>
          </CardContent>
        </Card>
      </div>

      {/* Reviews list */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#F8F7F4] flex items-center justify-center text-sm font-semibold text-[#111111]">
                      {review.clientName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium text-[#111111]">{review.clientName}</p>
                      <p className="text-xs text-[#737373]">{review.project} · {review.date}</p>
                    </div>
                    <Badge variant={review.approved ? 'success' : 'warning'}>
                      {review.approved ? 'Approved' : 'Pending'}
                    </Badge>
                  </div>
                  <div className="flex gap-0.5 mb-2 ml-[52px]">
                    {[1, 2, 3, 4, 5].map(s => (
                      <Star key={s} className={`w-4 h-4 ${s <= review.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />
                    ))}
                  </div>
                  <p className="text-sm text-[#737373] ml-[52px] leading-relaxed">"{review.comment}"</p>
                </div>
                <div className="flex gap-1 ml-4">
                  {!review.approved && (
                    <button onClick={() => approve(review.id)} className="p-2 hover:bg-green-50 rounded-lg text-green-600" title="Approve">
                      <Check className="w-4 h-4" />
                    </button>
                  )}
                  {review.approved && (
                    <button onClick={() => reject(review.id)} className="p-2 hover:bg-amber-50 rounded-lg text-amber-600" title="Reject">
                      <X className="w-4 h-4" />
                    </button>
                  )}
                  <button onClick={() => remove(review.id)} className="p-2 hover:bg-red-50 rounded-lg text-red-500" title="Delete">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
