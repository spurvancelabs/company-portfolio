/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */


'use client';

import { useRef, useEffect,  useMemo, Suspense } from 'react';
import Link from 'next/link';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Play,
  Code2,
  Zap,
  Shield,
  Star,
  Cpu,
  Layers,
  CheckCircle2} from 'lucide-react';
import * as THREE from 'three';

// ─── Register GSAP plugins ───────────────────────────────────────────────────
gsap.registerPlugin(ScrollTrigger);

// ═══════════════════════════════════════════════════════════════════════════════
// THREE.JS PARTICLE FIELD COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const [positions, velocities, originalPositions] = useMemo(() => {
    const count = 2500;
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const orig = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 4;

      pos[i3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = r * Math.cos(phi);

      orig[i3] = pos[i3];
      orig[i3 + 1] = pos[i3 + 1];
      orig[i3 + 2] = pos[i3 + 2];

      vel[i3] = (Math.random() - 0.5) * 0.002;
      vel[i3 + 1] = (Math.random() - 0.5) * 0.002;
      vel[i3 + 2] = (Math.random() - 0.5) * 0.002;
    }

    return [pos, vel, orig];
  }, []);

  const colors = useMemo(() => {
    const count = 2500;
    const col = new Float32Array(count * 3);
    const color1 = new THREE.Color('#4f46e5'); // Indigo
    const color2 = new THREE.Color('#06b6d4'); // Cyan
    const color3 = new THREE.Color('#8b5cf6'); // Violet

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const mixFactor = Math.random();
      const tempColor = new THREE.Color();

      if (mixFactor < 0.33) {
        tempColor.copy(color1).lerp(color2, mixFactor * 3);
      } else if (mixFactor < 0.66) {
        tempColor.copy(color2).lerp(color3, (mixFactor - 0.33) * 3);
      } else {
        tempColor.copy(color3).lerp(color1, (mixFactor - 0.66) * 3);
      }

      col[i3] = tempColor.r;
      col[i3 + 1] = tempColor.g;
      col[i3 + 2] = tempColor.b;
    }

    return col;
  }, []);

  const sizes = useMemo(() => {
    const count = 2500;
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      s[i] = Math.random() * 2 + 0.5;
    }
    return s;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const posArray = meshRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < 2500; i++) {
      const i3 = i * 3;

      // Gentle floating motion
      posArray[i3] += velocities[i3] + Math.sin(time * 0.3 + i * 0.1) * 0.0003;
      posArray[i3 + 1] += velocities[i3 + 1] + Math.cos(time * 0.2 + i * 0.1) * 0.0003;
      posArray[i3 + 2] += velocities[i3 + 2];

      // Mouse repulsion
      const dx = posArray[i3] - mouseRef.current.x * viewport.width * 0.5;
      const dy = posArray[i3 + 1] - mouseRef.current.y * viewport.height * 0.5;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 2) {
        const force = (2 - dist) * 0.01;
        posArray[i3] += (dx / dist) * force;
        posArray[i3 + 1] += (dy / dist) * force;
      }

      // Return to original position slowly
      posArray[i3] += (originalPositions[i3] - posArray[i3]) * 0.001;
      posArray[i3 + 1] += (originalPositions[i3 + 1] - posArray[i3 + 1]) * 0.001;
      posArray[i3 + 2] += (originalPositions[i3 + 2] - posArray[i3 + 2]) * 0.001;
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.rotation.y = time * 0.02;
    meshRef.current.rotation.x = Math.sin(time * 0.1) * 0.05;
  });

  return (
    <points ref={meshRef}>
<bufferGeometry>
  <bufferAttribute
    attach="attributes-position"
    args={[positions, 3]}
  />
  <bufferAttribute
    attach="attributes-color"
    args={[colors, 3]}
  />
  <bufferAttribute
    attach="attributes-size"
    args={[sizes, 1]}
  />
</bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function ConnectingLines() {
  const lineRef = useRef<THREE.LineSegments>(null);

  const positions = useMemo(() => {
    const count = 200;
    const pos = new Float32Array(count * 6); // 2 points per line, 3 coords each

    for (let i = 0; i < count; i++) {
      const i6 = i * 6;
      const theta1 = Math.random() * Math.PI * 2;
      const phi1 = Math.acos(2 * Math.random() - 1);
      const r1 = 2 + Math.random() * 5;

      const theta2 = theta1 + (Math.random() - 0.5) * 0.5;
      const phi2 = phi1 + (Math.random() - 0.5) * 0.5;
      const r2 = r1 + (Math.random() - 0.5) * 2;

      pos[i6] = r1 * Math.sin(phi1) * Math.cos(theta1);
      pos[i6 + 1] = r1 * Math.sin(phi1) * Math.sin(theta1);
      pos[i6 + 2] = r1 * Math.cos(phi1);

      pos[i6 + 3] = r2 * Math.sin(phi2) * Math.cos(theta2);
      pos[i6 + 4] = r2 * Math.sin(phi2) * Math.sin(theta2);
      pos[i6 + 5] = r2 * Math.cos(phi2);
    }

    return pos;
  }, []);

  useFrame((state) => {
    if (!lineRef.current) return;
    lineRef.current.rotation.y = state.clock.getElapsedTime() * 0.01;
    lineRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.02;
  });

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
  attach="attributes-position"
  args={[positions, 3]}
/>
      </bufferGeometry>
      <lineBasicMaterial color="#4f46e5" transparent opacity={0.08} />
    </lineSegments>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <ParticleField />
      <ConnectingLines />
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// HERO SECTION
// ═══════════════════════════════════════════════════════════════════════════════

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, 50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-gray-950"
    >
      {/* Three.js Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-gray-950 z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-transparent to-gray-950/80 z-[1] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] z-[2] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 h-[100dvh] flex flex-col justify-center items-center text-center px-4"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <motion.div style={{ y: textY }} className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-indigo-400 mb-8">
              <span className="w-8 h-px bg-indigo-400/50" />
              Building Digital Pakistan
              <span className="w-8 h-px bg-indigo-400/50" />
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95] mb-8"
          >
            <span className="block">Engineering</span>
            <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              The Future
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Open-source infrastructure, enterprise solutions, and world-class engineering
            talent — all built in Pakistan, for the world.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap justify-center items-center gap-4"
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-white/20"
            >
              Explore Our Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-white text-sm font-medium rounded-xl border border-white/15 hover:bg-white/5 hover:border-white/25 transition-all duration-300"
            >
              <Play size={14} fill="currentColor" />
              Watch Demo
            </Link>
          </motion.div>
        </motion.div>


        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-white/20" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MARQUEE SECTION
// ═══════════════════════════════════════════════════════════════════════════════

function MarqueeSection() {
  const items = [
    'Open Source',
    'Cloud Native',
    'AI/ML',
    'DevOps',
    'Cybersecurity',
    'Web3',
    'Enterprise',
    'Startups',
  ];

  return (
    <section className="py-8 bg-gray-950 border-y border-white/5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
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

// ═══════════════════════════════════════════════════════════════════════════════
// FEATURES SECTION (GSAP ScrollTrigger)
// ═══════════════════════════════════════════════════════════════════════════════

const features = [
  {
    icon: <Code2 size={24} strokeWidth={1.5} />,
    title: 'Open Source First',
    description:
      'We believe in building in the open. Every major project starts as open source, ensuring transparency, community contribution, and long-term sustainability.',
    stat: '50+',
    statLabel: 'Active Repositories',
  },
  {
    icon: <Zap size={24} strokeWidth={1.5} />,
    title: 'Cloud Native Architecture',
    description:
      'Kubernetes-native, microservices-based solutions designed for scale. From containerization to service mesh, we architect for resilience and performance.',
    stat: '99.99%',
    statLabel: 'Uptime SLA',
  },
  {
    icon: <Shield size={24} strokeWidth={1.5} />,
    title: 'Security by Design',
    description:
      'Zero-trust architecture, end-to-end encryption, and continuous security auditing. We treat security as a foundational layer, not an afterthought.',
    stat: 'SOC 2',
    statLabel: 'Type II Certified',
  },
  {
    icon: <Cpu size={24} strokeWidth={1.5} />,
    title: 'AI & Machine Learning',
    description:
      'Production-grade ML pipelines, LLM fine-tuning, and intelligent automation. We help enterprises leverage AI without the infrastructure complexity.',
    stat: '10x',
    statLabel: 'Faster Inference',
  },
];

function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, rotateX: 10 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.1,
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-32 px-4 bg-gray-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Engineering Excellence,
            <span className="block text-white/30">At Every Layer</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-base leading-relaxed">
            From infrastructure to interfaces, we build systems that scale, secure, and inspire.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500"
              style={{ perspective: '1000px' }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors duration-300">
                  {feature.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{feature.stat}</div>
                  <div className="text-[10px] text-white/30 uppercase tracking-wider">{feature.statLabel}</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PRODUCTS SHOWCASE (GSAP Horizontal Scroll)
// ═══════════════════════════════════════════════════════════════════════════════

const products = [
  {
    name: 'SpurDB',
    tagline: 'Distributed Database Engine',
    description: 'A high-performance, distributed SQL database built for modern cloud architectures. Handles millions of transactions per second with automatic sharding and replication.',
    tags: ['Go', 'Raft', 'gRPC'],
    stars: '2.4k',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    name: 'MeshGuard',
    tagline: 'Service Mesh & Security',
    description: 'Zero-trust service mesh with built-in mTLS, traffic encryption, and observability. Deploy in minutes, secure by default.',
    tags: ['Rust', 'eBPF', 'Wasm'],
    stars: '1.8k',
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    name: 'PakML',
    tagline: 'ML Inference Platform',
    description: 'Deploy and scale machine learning models with sub-millisecond latency. Optimized for Urdu, Sindhi, and regional languages.',
    tags: ['Python', 'CUDA', 'ONNX'],
    stars: '3.1k',
    color: 'from-violet-500/20 to-purple-500/20',
  },
  {
    name: 'CloudForge',
    tagline: 'Infrastructure as Code',
    description: 'Declarative infrastructure management with native support for Pakistani cloud providers and compliance frameworks.',
    tags: ['TypeScript', 'Terraform', 'Pulumi'],
    stars: '1.2k',
    color: 'from-amber-500/20 to-orange-500/20',
  },
];

function ProductsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !scrollContainerRef.current) return;

    const scrollWidth = scrollContainerRef.current.scrollWidth - window.innerWidth;

    gsap.to(scrollContainerRef.current, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-gray-950 overflow-hidden">
      <div className="h-screen flex flex-col justify-center">
        <div className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto flex items-end justify-between">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-4 block">
                Open Source
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Products We Build
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors group"
            >
              View All
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        <div ref={scrollContainerRef} className="flex gap-6 px-4 sm:px-6 lg:px-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="flex-shrink-0 w-[85vw] sm:w-[60vw] lg:w-[40vw] group"
            >
              <div className="h-full p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 relative overflow-hidden">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                        <Layers size={18} className="text-white/60" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                        <p className="text-xs text-white/30">{product.tagline}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-white/30">
                      <Star size={12} fill="currentColor" />
                      {product.stars}
                    </div>
                  </div>

                  <p className="text-sm text-white/40 leading-relaxed mb-8">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] rounded-md bg-white/5 text-white/40 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Spacer for scroll */}
          <div className="flex-shrink-0 w-[20vw]" />
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SERVICES SECTION
// ═══════════════════════════════════════════════════════════════════════════════

const services = [
  {
    number: '01',
    title: 'Enterprise Consulting',
    description: 'Strategic technology roadmaps, architecture reviews, and digital transformation planning for organizations at any scale.',
    features: ['Architecture Review', 'Tech Strategy', 'Digital Transformation'],
  },
  {
    number: '02',
    title: 'Custom Development',
    description: 'Full-stack engineering teams that ship production code. From MVPs to enterprise platforms, we build what you need.',
    features: ['Full-Stack Teams', 'DevOps & SRE', 'QA & Testing'],
  },
  {
    number: '03',
    title: 'Cloud Migration',
    description: 'Seamless migration from on-premise to cloud with zero downtime. Multi-cloud strategies and cost optimization included.',
    features: ['Lift & Shift', 'Re-platforming', 'Cost Optimization'],
  },
  {
    number: '04',
    title: 'AI Integration',
    description: 'Integrate LLMs, computer vision, and predictive analytics into your existing products without rebuilding from scratch.',
    features: ['LLM Integration', 'Computer Vision', 'MLOps'],
  },
];

function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    itemsRef.current.forEach((item, i) => {
      if (!item) return;
      gsap.fromTo(
        item,
        { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-32 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-4 block">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            How We Help
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-base leading-relaxed">
            End-to-end technology services that turn ambitious ideas into production reality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {services.map((service, index) => (
            <div
              key={service.number}
              ref={(el) => { itemsRef.current[index] = el; }}
              className="group p-8 lg:p-10 bg-gray-950 hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[11px] font-mono text-white/20">{service.number}</span>
                <ArrowUpRight
                  size={18}
                  className="text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TESTIMONIALS SECTION
// ═══════════════════════════════════════════════════════════════════════════════

const testimonials = [
  {
    quote: "Spurvance Labs transformed our entire infrastructure in 8 weeks. What would have taken our internal team a year, they delivered with zero downtime and better architecture than we imagined.",
    author: 'Ahmad Raza',
    role: 'CTO',
    company: 'Jazz Digital',
    avatar: 'AR',
  },
  {
    quote: "The open-source tools they built for Urdu NLP are now the foundation of our entire content pipeline. Their commitment to the community is as impressive as their engineering.",
    author: 'Fatima Khan',
    role: 'Head of AI',
    company: 'Careem Pakistan',
    avatar: 'FK',
  },
  {
    quote: "We evaluated 12 vendors for our cloud migration. Spurvance was the only one who truly understood both the technical complexity and the business constraints of operating in Pakistan.",
    author: 'Imran Sheikh',
    role: 'VP Engineering',
    company: 'Telenor Microfinance',
    avatar: 'IS',
  },
];

function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = sectionRef.current?.querySelectorAll('.testimonial-card');
    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-32 px-4 bg-gray-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Trusted by Leaders
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="testimonial-card p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-amber-500/60" fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-white/50 leading-relaxed mb-8">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-xs font-semibold text-white/60">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{t.author}</div>
                  <div className="text-xs text-white/30">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CTA SECTION
// ═══════════════════════════════════════════════════════════════════════════════

function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelector('.cta-content'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-32 px-4 bg-gray-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="cta-content max-w-3xl mx-auto text-center relative z-10">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-6 block">
          Start Building
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.05]">
          Ready to Build
          <span className="block text-white/30">Something Great?</span>
        </h2>
        <p className="text-white/40 max-w-lg mx-auto mb-10 leading-relaxed">
          Whether you need a full engineering team, a specific technical solution, or just want to explore 
          what's possible — we're here to help.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg shadow-white/10"
          >
            Schedule a Call
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </Link>
          <Link
            href="mailto:info@spurvance.com"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-white text-sm font-medium rounded-xl border border-white/15 hover:bg-white/5 transition-all"
          >
            info@spurvance.com
          </Link>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function HomePage() {
  return (
    <main className="bg-gray-950 text-white overflow-x-hidden">
      <HeroSection />
      <MarqueeSection />
      <FeaturesSection />
      <ProductsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
