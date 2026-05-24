'use client';

import TestimonialCard from './TestimonialCard';
import { testimonials } from './testimonials.data';

export default function TestimonialsSection() {
  return (
    <section className="py-32 px-4 bg-gray-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-4 block">
            Testimonials
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Trusted by Leaders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}