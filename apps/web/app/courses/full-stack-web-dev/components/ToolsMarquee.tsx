"use client";
import { tools } from '../data';

export default function ToolsMarquee({ marqueeRef }: any) {
  return (
    <div ref={marqueeRef} className="py-5 border-y border-white/[0.06] overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="marquee-inner flex gap-8 w-max">
        {[...tools, ...tools].map((t, i) => (
          <div key={i} className="flex items-center gap-2 text-xs font-mono text-gray-500 whitespace-nowrap px-4">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: t.color }} />
            {t.name}
          </div>
        ))}
      </div>
    </div>
  );
}