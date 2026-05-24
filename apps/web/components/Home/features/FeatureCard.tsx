import { Feature } from '@/types/home';

interface Props {
  feature: Feature;
}

export default function FeatureCard({ feature }: Props) {
  return (
    <div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500">
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
          {feature.icon}
        </div>

        <div className="text-right">
          <div className="text-2xl font-bold text-white">{feature.stat}</div>
          <div className="text-[10px] text-white/30 uppercase tracking-wider">
            {feature.statLabel}
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">
        {feature.title}
      </h3>

      <p className="text-sm text-white/40 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}