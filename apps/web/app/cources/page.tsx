/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 */

import React, { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import type { Metadata } from 'next';

import {
  Search,
  Clock,
  Users,
  Star,
  ArrowRight,
  Code2,
  Zap,
  Shield,
  Brain,
  BookOpen,
  Sparkles,
  Code,
  Laptop,
  GraduationCap,
  Play,
  CheckCircle2,
  ArrowUpRight,
  TrendingUp,
  Award,
  Clock3,
  X,
  SlidersHorizontal,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   TYPES
────────────────────────────────────────────────────────────────────────── */

interface Course {
  id: string;
  icon: React.ReactNode;
  title: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  duration: string;
  students?: number;
  rating: number;
  description: string;
  topics: string[];
  featured?: boolean;
  instructor?: string;
  lessons?: number;
  available?: boolean;
}

/* ──────────────────────────────────────────────────────────────────────────
   HELPERS
────────────────────────────────────────────────────────────────────────── */

const WHATSAPP_NUMBER = '923294171505';

const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    maximumFractionDigits: 0,
  }).format(price);

const handleWhatsAppEnrollment = (course: Course) => {
  const message = `
Hi Spurvance Labs Team,

I want to enroll in the following course:

Course: ${course.title}
Level: ${course.level}
Duration: ${course.duration}
Price: ${formatPrice(course.price)}

Please share complete enrollment details.

Regards.
  `.trim();

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
};

/* ──────────────────────────────────────────────────────────────────────────
   METADATA
────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Courses | Spurvance Labs | Tech Training & Bootcamps",
  description: "Industry-focused tech courses: Full Stack Development, DevOps, Machine Learning, Growth Marketing, Product Design, and Cybersecurity. Mentorship included.",
  keywords: [
    "tech courses",
    "bootcamp",
    "DevOps training",
    "web development",
    "machine learning",
    "cybersecurity",
    "product design",
    "Pakistan"
  ],
  openGraph: {
    title: "Courses | Spurvance Labs | Tech Training & Bootcamps",
    description: "Industry-focused tech courses with mentorship. DevOps, development, ML, design, and security training.",
    type: "website",
    url: "https://spurvancelabs.com/cources",
    images: [
      {
        url: "https://spurvancelabs.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spurvance Labs Courses",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Courses | Spurvance Labs | Tech Training & Bootcamps",
    description: "Industry-focused tech courses with mentorship. DevOps, development, ML, design, and security.",
  },
};

/* ──────────────────────────────────────────────────────────────────────────
   DATA
────────────────────────────────────────────────────────────────────────── */

const courses: Course[] = [
  {
    id: 'fullstack-web',
    icon: <Code2 size={22} strokeWidth={1.5} />,
    title: 'Full Stack Web Development',
    category: 'Development',
    level: 'Beginner',
    price: 10000,
    duration: '12 weeks',
    students: 120,
    rating: 4.8,
    description:
      'Master modern web development with React, Next.js, Node.js, and MongoDB.',
    topics: [
      'HTML/CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Node.js',
    ],
    featured: true,
    instructor: 'Ahmad Raza',
    lessons: 48,
    available: true,
  },
  {
    id: 'cyber-security',
    icon: <Shield size={22} strokeWidth={1.5} />,
    title: 'Cyber Security Essentials',
    category: 'Security',
    level: 'Intermediate',
    price: 60000,
    duration: '12 weeks',
    students: 35,
    rating: 4.7,
    description:
      'Learn ethical hacking, penetration testing, and security operations.',
    topics: [
      'Network Security',
      'Ethical Hacking',
      'Penetration Testing',
    ],
    instructor: 'Fatima Khan',
    lessons: 36,
    available: false,
  },
  {
    id: 'react-native',
    icon: <Laptop size={22} strokeWidth={1.5} />,
    title: 'React Native Mobile Development',
    category: 'Development',
    level: 'Intermediate',
    price: 25000,
    duration: '10 weeks',
    students: 52,
    rating: 4.7,
    description:
      'Build cross-platform mobile apps using React Native and Expo.',
    topics: ['React Native', 'Expo', 'Navigation'],
    instructor: 'Usman Ali',
    lessons: 40,
    available: true,
  },
  {
    id: 'python-mastery',
    icon: <Code2 size={22} strokeWidth={1.5} />,
    title: 'Python Mastery',
    category: 'Development',
    level: 'Beginner',
    price: 25000,
    duration: '8 weeks',
    students: 180,
    rating: 4.9,
    description:
      'Learn Python from scratch including APIs, automation, and Django.',
    topics: ['Python', 'OOP', 'Django', 'APIs'],
    instructor: 'Sarah Chen',
    lessons: 32,
    available: true,
  },
  {
    id: 'ai-ml-bootcamp',
    icon: <Brain size={22} strokeWidth={1.5} />,
    title: 'AI & Machine Learning Bootcamp',
    category: 'AI/ML',
    level: 'Advanced',
    price: 50000,
    duration: '16 weeks',
    rating: 4.9,
    description:
      'Deep dive into neural networks, NLP, and production ML systems.',
    topics: ['TensorFlow', 'NLP', 'Computer Vision'],
    instructor: 'Dr. Imran Sheikh',
    lessons: 64,
    available: false,
  },
  {
    id: 'devops-fundamentals',
    icon: <Zap size={22} strokeWidth={1.5} />,
    title: 'DevOps & Cloud Engineering',
    category: 'DevOps',
    level: 'Intermediate',
    price: 25000,
    duration: '10 weeks',
    students: 41,
    rating: 4.7,
    description:
      'Master Docker, Kubernetes, CI/CD, and scalable infrastructure.',
    topics: ['Docker', 'Kubernetes', 'CI/CD'],
    instructor: 'Marcus Johnson',
    lessons: 38,
    available: true,
  },
];

const stats = [
  {
    icon: <BookOpen size={18} strokeWidth={1.5} />,
    value: '6',
    label: 'Courses',
  },
  {
    icon: <Award size={18} strokeWidth={1.5} />,
    value: '4.8',
    label: 'Average Rating',
  },
  {
    icon: <TrendingUp size={18} strokeWidth={1.5} />,
    value: 'Growing',
    label: 'Community',
  },
];

/* ──────────────────────────────────────────────────────────────────────────
   COMPONENTS
────────────────────────────────────────────────────────────────────────── */

function LevelBadge({ level }: { level: string }) {
  const styles = {
    Beginner:
      'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    Intermediate:
      'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    Advanced:
      'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
  };

  return (
    <span
      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wider border ${
        styles[level as keyof typeof styles]
      }`}
    >
      {level}
    </span>
  );
}

function CourseCard({
  course,
  index,
  onEnroll,
}: {
  course: Course;
  index: number;
  onEnroll: (course: Course) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="h-full p-6 rounded-2xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all">
        {/* TOP */}
        <div className="flex items-start justify-between mb-5">
          <div className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-700 dark:text-gray-300">
            {course.icon}
          </div>

          <div className="flex items-center gap-1.5">
            <Star
              size={13}
              className="text-amber-500 fill-amber-500"
            />

            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {course.rating}
            </span>
          </div>
        </div>

        {/* META */}
        <div className="flex items-center gap-2 mb-3">
          <LevelBadge level={course.level} />

          <span className="text-[11px] uppercase tracking-wider text-gray-400">
            {course.category}
          </span>
        </div>

        {/* TITLE */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {course.title}
        </h3>

        {/* DESC */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
          {course.description}
        </p>

        {/* TOPICS */}
        <div className="flex flex-wrap gap-2 mb-5">
          {course.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="px-2 py-1 rounded-md text-[11px] bg-gray-100 dark:bg-gray-900 text-gray-500"
            >
              {topic}
            </span>
          ))}
        </div>

        {/* INSTRUCTOR */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-5">
          <span>{course.instructor}</span>

          {course.lessons && (
            <span>{course.lessons} lessons</span>
          )}
        </div>

        {/* FOOTER */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                {formatPrice(course.price)}
              </div>

              <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                <Clock3 size={11} />
                {course.duration}
              </div>
            </div>

            {course.available ? (
              <button
                onClick={() => onEnroll(course)}
                className="inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:opacity-80 transition-opacity group/link"
              >
                Enroll Now

                <ArrowUpRight
                  size={14}
                  className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                />
              </button>
            ) : (
              <span className="text-xs font-medium text-amber-500">
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FeaturedCourse({
  course,
  onEnroll,
}: {
  course: Course;
  onEnroll: (course: Course) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl bg-gray-950 border border-white/5"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[11px] font-semibold uppercase tracking-wider">
                <Sparkles size={12} />
                Featured
              </span>

              <LevelBadge level={course.level} />
            </div>

            <h2 className="text-4xl font-bold text-white mb-4">
              {course.title}
            </h2>

            <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-2xl">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {course.topics.map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-white/60 text-sm"
                >
                  {topic}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Clock
                  size={16}
                  className="text-white/30"
                />
                <span className="text-sm text-white/60">
                  {course.duration}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Star
                  size={16}
                  className="text-amber-500 fill-amber-500"
                />
                <span className="text-sm text-white/60">
                  {course.rating}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              {course.available ? (
                <button
                  onClick={() => onEnroll(course)}
                  className="inline-flex cursor-pointer items-center gap-2.5 px-7 py-3.5 bg-white text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-100 transition-all"
                >
                  Enroll via WhatsApp

                  <ArrowRight
                    size={16}
                    strokeWidth={2.5}
                  />
                </button>
              ) : (
                <div className="px-5 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm">
                  Enrollment Opening Soon
                </div>
              )}

              <span className="text-2xl font-bold text-white">
                {formatPrice(course.price)}
              </span>
            </div>
          </div>

          {/* VISUAL */}
          <div className="flex-shrink-0">
            <div className="relative w-56 h-56">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-white/10" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                  <Play
                    size={32}
                    className="text-white ml-1"
                    fill="white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   PAGE
────────────────────────────────────────────────────────────────────────── */

'use client';

export default function Courses() {
  const [selectedCategory, setSelectedCategory] =
    useState('All Courses');

  const [searchQuery, setSearchQuery] = useState('');

  const [showFilters, setShowFilters] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0]
  );

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0, -60]
  );

  const categories = useMemo(() => {
    const categoryMap = new Map<string, number>();

    courses.forEach((course) => {
      categoryMap.set(
        course.category,
        (categoryMap.get(course.category) || 0) + 1
      );
    });

    return [
      {
        name: 'All Courses',
        count: courses.length,
      },
      ...Array.from(categoryMap.entries()).map(
        ([name, count]) => ({
          name,
          count,
        })
      ),
    ];
  }, []);

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === 'All Courses' ||
      course.category === selectedCategory;

    const matchesSearch =
      course.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      course.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const featuredCourse = courses.find(
    (course) => course.featured
  );

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-4 overflow-hidden bg-gray-950"
      >
        <motion.div
          className="relative max-w-5xl mx-auto text-center"
          style={{
            opacity: heroOpacity,
            y: heroY,
          }}
        >
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-8">
            <BookOpen
              size={13}
              strokeWidth={2}
            />
            Learn & Grow
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[0.95] mb-6">
            Master New
            <span className="block mt-2 text-white/30">
              Skills
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-white/40 leading-relaxed mb-10">
            Industry-focused learning experiences built
            for modern developers, engineers, and tech
            professionals.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-2xl bg-white/[0.02] border border-white/5"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mx-auto mb-2 text-white/40">
                  {stat.icon}
                </div>

                <div className="text-xl font-bold text-white">
                  {stat.value}
                </div>

                <div className="text-[10px] text-white/30 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FILTERS */}
      <section className="sticky top-16 z-30 py-4 px-4 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />

              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-sm"
              />

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <div className="hidden lg:flex items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() =>
                    setSelectedCategory(category.name)
                  }
                  className={`px-3.5 py-2 rounded-lg text-sm transition-all ${
                    selectedCategory === category.name
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {category.name}

                  <span className="ml-1 opacity-60">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                setShowFilters(!showFilters)
              }
              className="lg:hidden flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: 'auto',
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 pt-3">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => {
                        setSelectedCategory(category.name);
                        setShowFilters(false);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs ${
                        selectedCategory === category.name
                          ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                          : 'bg-gray-100 dark:bg-gray-800'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* FEATURED */}
      {featuredCourse &&
        selectedCategory === 'All Courses' &&
        !searchQuery && (
          <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <FeaturedCourse
                course={featuredCourse}
                onEnroll={
                  handleWhatsAppEnrollment
                }
              />
            </div>
          </section>
        )}

      {/* COURSES */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-500 mb-2 block">
              {selectedCategory}
            </span>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {filteredCourses.length} Courses Available
            </h2>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-24">
              <Search
                className="mx-auto mb-4 text-gray-300"
                size={40}
              />

              <h3 className="text-lg font-semibold mb-2">
                No courses found
              </h3>

              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(
                    'All Courses'
                  );
                }}
                className="mt-4 px-4 py-2 rounded-lg bg-gray-900 text-white"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredCourses.map(
                (course, index) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    index={index}
                    onEnroll={
                      handleWhatsAppEnrollment
                    }
                  />
                )
              )}
            </div>
          )}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-500 mb-4 block">
              Why Us
            </span>

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Built by Engineers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <Code2
                    size={22}
                    strokeWidth={1.5}
                  />
                ),
                title:
                  'Production-Grade Curriculum',
                description:
                  'Real-world engineering workflows and practical projects.',
              },
              {
                icon: (
                  <Users
                    size={22}
                    strokeWidth={1.5}
                  />
                ),
                title: 'Mentor Support',
                description:
                  'Learn directly from experienced developers and engineers.',
              },
              {
                icon: (
                  <CheckCircle2
                    size={22}
                    strokeWidth={1.5}
                  />
                ),
                title:
                  'Completion Certificates',
                description:
                  'Professional certificates to showcase your skills.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center mb-5 text-indigo-600 dark:text-indigo-400">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gray-950">
        <div className="max-w-3xl mx-auto text-center">
          <GraduationCap
            className="w-12 h-12 text-indigo-400/60 mx-auto mb-6"
            strokeWidth={1.5}
          />

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5">
            Ready to Start Learning?
          </h2>

          <p className="text-white/40 mb-10">
            Start your journey with Spurvance Labs
            today.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-100 transition-all"
            >
              Contact on WhatsApp

              <ArrowRight
                size={16}
                strokeWidth={2.5}
              />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-white text-sm font-medium rounded-xl border border-white/15 hover:bg-white/5 transition-all"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}