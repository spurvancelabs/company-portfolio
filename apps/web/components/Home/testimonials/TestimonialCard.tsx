import { Star } from 'lucide-react';

interface Props {
  testimonial: any;
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="testimonial-card p-8 rounded-2xl bg-white/[0.02] border border-white/5">
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className="text-amber-500/60"
            fill="currentColor"
          />
        ))}
      </div>

      <p className="text-sm text-white/50 leading-relaxed mb-8">
        "{testimonial.quote}"
      </p>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-500/20">
          {testimonial.avatar}
        </div>

        <div>
          <div className="text-sm font-medium text-white">
            {testimonial.author}
          </div>

          <div className="text-xs text-white/30">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}