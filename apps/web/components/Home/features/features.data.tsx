import { Code2, Cpu, Shield, Zap } from 'lucide-react';

export const features = [
  {
    icon: <Code2 size={24} strokeWidth={1.5} />,
    title: 'Open Source First',
    description:
      'We believe in building in the open.',
    stat: '50+',
    statLabel: 'Active Repositories',
  },
  {
    icon: <Zap size={24} strokeWidth={1.5} />,
    title: 'Cloud Native Architecture',
    description:
      'Kubernetes-native, microservices-based solutions.',
    stat: '99.99%',
    statLabel: 'Uptime SLA',
  },
  {
    icon: <Shield size={24} strokeWidth={1.5} />,
    title: 'Security by Design',
    description:
      'Zero-trust architecture and auditing.',
    stat: 'SOC 2',
    statLabel: 'Type II Certified',
  },
  {
    icon: <Cpu size={24} strokeWidth={1.5} />,
    title: 'AI & Machine Learning',
    description:
      'Production-grade ML pipelines and AI systems.',
    stat: '10x',
    statLabel: 'Faster Inference',
  },
];