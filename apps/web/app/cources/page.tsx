/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */

'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
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
  Laptop,
  GraduationCap,
  Play,
  CheckCircle2,
  ArrowUpRight,
  TrendingUp,
  Award,
  Clock3,
  X,
  SlidersHorizontal
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ─── Types ────────────────────────────────────────────────────────────────────

interface Course {
  id: string;
  icon: React.ReactNode;
  title: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: string;
  duration: string;
  students: number;
  rating: number;
  description: string;
  topics: string[];
  featured?: boolean;
  instructor?: string;
  lessons?: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories = [
  { name: 'All Courses', count: 12 },
  { name: 'Development', count: 5 },
  { name: 'Design', count: 2 },
  { name: 'DevOps', count: 1 },
  { name: 'Security', count: 1 },
  { name: 'AI/ML', count: 2 },
  { name: 'Marketing', count: 1 },
];

const courses: Course[] = [
  {
    id: 'fullstack-web',
    icon: <Code2 size={22} strokeWidth={1.5} />,
    title: 'Full Stack Web Development',
    category: 'Development',
    level: 'Beginner',
    price: 'PKR 10,000',
    duration: '12 weeks',
    students: 1250,
    rating: 4.8,
    description: 'Master modern web development with React, Next.js, Node.js, and MongoDB. Build production-ready applications from day one.',
    topics: ['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Git'],
    featured: true,
    instructor: 'Ahmad Raza',
    lessons: 48,
  },
  {
    id: 'cyber-security',
    icon: <Shield size={22} strokeWidth={1.5} />,
    title: 'Cyber Security Essentials',
    category: 'Security',
    level: 'Intermediate',
    price: 'PKR 30,000',
    duration: '12 weeks',
    students: 350,
    rating: 4.8,
    description: 'Master network security, ethical hacking, penetration testing, and security operations with hands-on labs.',
    topics: ['Network Security', 'Ethical Hacking', 'Penetration Testing', 'SIEM', 'Cryptography'],
    instructor: 'Fatima Khan',
    lessons: 36,
  },
  {
    id: 'react-native',
    icon: <Laptop size={22} strokeWidth={1.5} />,
    title: 'React Native Mobile Development',
    category: 'Development',
    level: 'Intermediate',
    price: 'PKR 20,000',
    duration: '10 weeks',
    students: 520,
    rating: 4.7,
    description: 'Build cross-platform mobile apps with React Native. Deploy to both iOS and Android from a single codebase.',
    topics: ['React Native', 'Expo', 'Navigation', 'State Management', 'Push Notifications'],
    instructor: 'Usman Ali',
    lessons: 40,
  },
  {
    id: 'python-mastery',
    icon: <Code2 size={22} strokeWidth={1.5} />,
    title: 'Python Mastery: Zero to Hero',
    category: 'Development',
    level: 'Beginner',
    price: 'PKR 10,000',
    duration: '8 weeks',
    students: 2100,
    rating: 4.9,
    description: 'Learn Python from scratch. Cover data structures, algorithms, automation, and web development with Django.',
    topics: ['Python Basics', 'OOP', 'Data Structures', 'Django', 'Automation', 'APIs'],
    featured: true,
    instructor: 'Sarah Chen',
    lessons: 32,
  },
  {
    id: 'ai-ml-bootcamp',
    icon: <Brain size={22} strokeWidth={1.5} />,
    title: 'AI & Machine Learning Bootcamp',
    category: 'AI/ML',
    level: 'Advanced',
    price: 'PKR 45,000',
    duration: '16 weeks',
    students: 280,
    rating: 4.9,
    description: 'Deep dive into neural networks, NLP, computer vision, and production ML systems with real-world projects.',
    topics: ['Neural Networks', 'NLP', 'Computer Vision', 'TensorFlow', 'MLOps'],
    instructor: 'Dr. Imran Sheikh',
    lessons: 64,
  },
  {
    id: 'devops-fundamentals',
    icon: <Zap size={22} strokeWidth={1.5} />,
    title: 'DevOps & Cloud Engineering',
    category: 'DevOps',
    level: 'Intermediate',
    price: 'PKR 25,000',
    duration: '10 weeks',
    students: 420,
    rating: 4.7,
    description: 'Master CI/CD, Docker, Kubernetes, and cloud infrastructure. Build scalable deployment pipelines.',
    topics: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Terraform', 'Monitoring'],
    instructor: 'Marcus Johnson',
    lessons: 38,
  },
];

const stats = [
  { icon: <Users size={18} strokeWidth={1.5} />, value: '4,900+', label: 'Students Enrolled' },
  { icon: <BookOpen size={18} strokeWidth={1.5} />, value: '12', label: 'Active Courses' },
  { icon: <Award size={18} strokeWidth={1.5} />, value: '4.8', label: 'Average Rating' },
  { icon: <TrendingUp size={18} strokeWidth={1.5} />, value: '92%', label: 'Completion Rate' },
];

// ─── Components ───────────────────────────────────────────────────────────────

function LevelBadge({ level }: { level: string }) {
  const styles = {
    Beginner: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    Intermediate: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    Advanced: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
  };

  return (
    <span className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wider border ${styles[level as keyof typeof styles] || styles.Beginner}`}>
      {level}
    </span>
  );
}

function CourseCard({ course, index }: { course: Course; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-50px' }}
      className="group relative"
    >
      <div className="h-full p-6 rounded-2xl bg-white dark:bg-gray-950 border border-gray-200/80 dark:border-gray-800/80 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-500 hover:shadow-xl hover:shadow-gray-900/5 dark:hover:shadow-black/20">
        {/* Top row */}
        <div className="flex items-start justify-between mb-5">
          <div className="w-11 h-11 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:bg-gray-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-gray-900 transition-all duration-300">
            {course.icon}
          </div>
          <div className="flex items-center gap-1.5">
            <Star size={13} className="text-amber-500 fill-amber-500" />
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{course.rating}</span>
            <span className="text-xs text-gray-400">({course.students.toLocaleString()})</span>
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-2 mb-3">
          <LevelBadge level={course.level} />
          <span className="text-[11px] text-gray-400 uppercase tracking-wider">{course.category}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors leading-snug">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {course.topics.slice(0, 3).map(topic => (
            <span key={topic} className="px-2 py-0.5 text-[11px] rounded-md bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-500 border border-gray-100 dark:border-gray-800">
              {topic}
            </span>
          ))}
          {course.topics.length > 3 && (
            <span className="px-2 py-0.5 text-[11px] rounded-md bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-600 border border-gray-100 dark:border-gray-800">
              +{course.topics.length - 3}
            </span>
          )}
        </div>

        {/* Instructor & Lessons */}
        <div className="flex items-center gap-3 mb-5 text-xs text-gray-400">
          {course.instructor && (
            <span className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-[8px] font-bold text-gray-500">
                {course.instructor.split(' ').map(n => n[0]).join('')}
              </div>
              {course.instructor}
            </span>
          )}
          {course.lessons && (
            <span className="flex items-center gap-1">
              <BookOpen size={11} />
              {course.lessons} lessons
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-gray-900 dark:text-white">{course.price}</span>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Clock3 size={11} />
                {course.duration}
              </span>
            </div>
            <Link
              href={`/courses/${course.id}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group/link"
            >
              Details
              <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FeaturedCourse({ course }: { course: Course }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl bg-gray-950 border border-white/5"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[11px] font-semibold uppercase tracking-wider border border-indigo-500/20">
                <Sparkles size={12} />
                Featured
              </span>
              <LevelBadge level={course.level} />
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              {course.title}
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-6 max-w-xl">
              {course.description}
            </p>

            {/* Topics */}
            <div className="flex flex-wrap gap-2 mb-8">
              {course.topics.map(topic => (
                <span key={topic} className="px-3 py-1.5 rounded-lg bg-white/5 text-white/60 text-sm border border-white/5">
                  {topic}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-white/30" />
                <span className="text-sm text-white/60">{course.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-white/30" />
                <span className="text-sm text-white/60">{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-amber-500/60 fill-amber-500/60" />
                <span className="text-sm text-white/60">{course.rating} rating</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`/courses/${course.id}`}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg shadow-white/10"
              >
                Enroll Now
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <span className="text-2xl font-bold text-white">{course.price}</span>
            </div>
          </div>

          {/* Visual */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 lg:w-56 lg:h-56">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-white/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-2xl shadow-indigo-500/30">
                  <Play size={32} className="text-white ml-1" fill="white" />
                </div>
              </div>
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-3xl border border-white/5 animate-pulse" style={{ animationDuration: '3s' }} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page Component ────────────────────────────────────────────────────────────

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('All Courses');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'All Courses' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredCourse = courses.find(c => c.featured);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">

      {/* ── Hero Section ── */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-4 overflow-hidden bg-gray-950">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/[0.03] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-violet-500/[0.03] rounded-full blur-3xl" />
        </div>

        <motion.div className="relative max-w-5xl mx-auto text-center" style={{ opacity: heroOpacity, y: heroY }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-8">
              <BookOpen size={13} strokeWidth={2} />
              Learn & Grow
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[0.95] mb-6"
          >
            Master New
            <span className="block mt-2 text-white/30">Skills</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-white/40 leading-relaxed mb-10"
          >
            Industry-curated courses taught by engineers who ship production code. 
            From fundamentals to advanced specializations.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="text-center p-4 rounded-2xl bg-white/[0.02] border border-white/5"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mx-auto mb-2 text-white/40">
                  {stat.icon}
                </div>
                <div className="text-xl font-bold text-white tabular-nums">{stat.value}</div>
                <div className="text-[10px] text-white/30 mt-1 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Search & Filter Bar ── */}
      <section className="sticky top-16 z-30 py-4 px-4 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search courses, topics, instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/30 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Category pills (desktop) */}
            <div className="hidden lg:flex items-center gap-1.5">
              {categories.map(category => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {category.name}
                  <span className={`ml-1.5 text-[10px] ${selectedCategory === category.name ? 'text-white/60 dark:text-gray-500' : 'text-gray-400'}`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
          </div>

          {/* Mobile filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 pt-3">
                  {categories.map(category => (
                    <button
                      key={category.name}
                      onClick={() => { setSelectedCategory(category.name); setShowFilters(false); }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        selectedCategory === category.name
                          ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {category.name}
                      <span className="ml-1 text-[10px] opacity-60">{category.count}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Featured Course ── */}
      {featuredCourse && selectedCategory === 'All Courses' && !searchQuery && (
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <FeaturedCourse course={featuredCourse} />
          </div>
        </section>
      )}

      {/* ── Courses Grid ── */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400 mb-2 block">
                {selectedCategory === 'All Courses' ? 'All Courses' : selectedCategory}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'} Available
              </h2>
            </div>
          </div>

          {filteredCourses.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center mx-auto mb-4">
                <Search className="w-7 h-7 text-gray-300 dark:text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No courses found</h3>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All Courses'); }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Why Learn With Us ── */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400 mb-4 block">
              Why Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
              Built by Engineers,
              <span className="block text-gray-400 dark:text-gray-600">For Engineers</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Code2 size={22} strokeWidth={1.5} />, title: 'Production-Grade Curriculum', description: 'Every course is built around real-world scenarios. You write code that could ship to production tomorrow.' },
              { icon: <Users size={22} strokeWidth={1.5} />, title: '1:1 Mentor Support', description: 'Get weekly sessions with senior engineers from Google, Meta, and leading Pakistani startups.' },
              { icon: <CheckCircle2 size={22} strokeWidth={1.5} />, title: 'Verified Certificates', description: 'Earn blockchain-verified credentials that employers trust. Shareable on LinkedIn and GitHub.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/30 flex items-center justify-center mb-5 text-indigo-600 dark:text-indigo-400">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-24 px-4 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <GraduationCap className="w-12 h-12 text-indigo-400/60 mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 leading-[1.05]">
            Ready to Level Up?
          </h2>
          <p className="text-white/40 max-w-lg mx-auto mb-10 leading-relaxed">
            Join thousands of students already learning on Spurvance Labs. 
            Your next career move starts with a single course.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg shadow-white/10"
            >
              Get Started
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </Link>
            <Link
              href="/internship"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-white text-sm font-medium rounded-xl border border-white/15 hover:bg-white/5 transition-all"
            >
              View Internships
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}