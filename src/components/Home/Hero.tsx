import { Rocket, Shield, Cpu } from 'lucide-react';
import {Link} from "react-router-dom"
const Hero = () => {
  return (
    <section className="pt-20 pb-32 px-4 bg-[rgb(var(--color-bg))]">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-r from-[rgb(var(--color-secondary))] to-[rgb(var(--color-accent))] mb-6">
          <Rocket className="w-6 h-6 text-[rgb(var(--color-primary))]" />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(var(--color-text))] mb-6">
          Building{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-accent))]">
            Pakistan's
          </span>
          <br />
          <span className="text-[rgb(var(--color-text))]">Digital Future</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl text-[rgb(var(--color-muted))] max-w-3xl mx-auto mb-10 leading-relaxed">
          Spurvance Labs is a Pakistan-based technology company creating secure,
          open-source digital infrastructure that prioritizes privacy, security,
          and digital sovereignty.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to={"/contribute"}
            className="px-8 py-3.5 bg-[rgb(var(--color-primary))] text-white font-medium rounded-xl hover:shadow-lg hover:shadow-[rgb(var(--color-primary))/30] hover:scale-[1.02] transition-all duration-300 inline-flex items-center space-x-2"
          >
            <Cpu className="w-5 h-5" />
            <span>Start Contributing</span>
          </Link>
          <Link
            to={"/about"}
            className="px-8 py-3.5 border-2 border-[rgb(var(--color-muted))] text-[rgb(var(--color-text))] font-medium rounded-xl hover:border-[rgb(var(--color-primary))] hover:text-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-secondary))] transition-all duration-300 inline-flex items-center space-x-2"
          >
            <Shield className="w-5 h-5" />
            <span>Learn More</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
