import { ReactNode } from 'react';

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export interface Product {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  stars: string;
  color: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}