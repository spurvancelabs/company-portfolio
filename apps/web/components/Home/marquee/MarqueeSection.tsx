import { Star } from 'lucide-react';

const items = [
  'Open Source',
  'Cloud Native',
  'AI/ML',
  'DevOps',
  'Cybersecurity',
];

export default function MarqueeSection() {
  return (
    <section className="py-8 bg-gray-950 border-y border-white/5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 text-sm font-medium text-white/15 uppercase tracking-[0.2em] flex items-center gap-3"
          >
            <Star size={10} className="text-indigo-500/30" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}