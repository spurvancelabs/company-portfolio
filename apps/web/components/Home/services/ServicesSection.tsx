'use client';

import ServiceCard from './ServiceCard';
import { services } from './services.data';

export default function ServicesSection() {
  return (
    <section className="py-32 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-4 block">
            Services
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            How We Help
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}