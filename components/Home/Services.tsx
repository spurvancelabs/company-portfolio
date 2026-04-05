/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 */
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code, Cloud, Users, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      icon: Code,
      name: 'Custom Software Development',
      description: 'Web and mobile applications built with modern tech stacks',
      features: ['React/Next.js', 'Node.js/Python', 'Mobile Apps', 'API Development']
    },
    {
      icon: Cloud,
      name: 'DevOps & Cloud Consulting',
      description: 'Infrastructure optimization and CI/CD implementation',
      features: ['AWS/Azure/GCP', 'Kubernetes', 'CI/CD Pipelines', 'Monitoring']
    },
    {
      icon: Users,
      name: 'Tech Training & Workshops',
      description: 'Upskilling teams for digital transformation',
      features: ['Custom Curriculum', 'Hands-on Labs', 'Team Workshops', 'Mentorship']
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-purple-600 dark:text-purple-400">ENTERPRISE SERVICES</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            Accelerate Your Business
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional services to help you build, deploy, and scale modern applications.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-600 transition-colors">
                <service.icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;