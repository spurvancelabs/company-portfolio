import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface Props {
  service: any;
}

export default function ServiceCard({ service }: Props) {
  return (
    <div className="group p-8 lg:p-10 bg-gray-950 hover:bg-white/[0.02] transition-colors duration-500">
      <div className="flex items-start justify-between mb-6">
        <span className="text-[11px] font-mono text-white/20">
          {service.number}
        </span>

        <ArrowUpRight
          size={18}
          className="text-white/20"
        />
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">
        {service.title}
      </h3>

      <p className="text-sm text-white/40 leading-relaxed mb-6">
        {service.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {service.features.map((feature: string) => (
          <span
            key={feature}
            className="inline-flex items-center gap-1.5 text-[11px] text-white/30"
          >
            <CheckCircle2 size={10} className="text-emerald-500/60" />
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
}