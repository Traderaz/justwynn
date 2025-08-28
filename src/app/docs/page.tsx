"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import DocsSidebar from '@/components/docs/DocsSidebar';

interface DocSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  category: string;
}

const docSections: DocSection[] = [
  {
    id: 'what-is-justwynn',
    title: 'What is JUSTWYNN?',
    description: 'What JUSTWYNN is, and why we built it.',
    icon: '📖',
    href: '/docs/what-is-justwynn',
    category: 'Getting started'
  },
  {
    id: 'how-it-works',
    title: 'How does it work?',
    description: 'Understanding the JUSTWYNN ecosystem and The House.',
    icon: '⚡',
    href: '/docs/how-it-works',
    category: 'Getting started'
  },
  {
    id: 'launch-token',
    title: 'Launch a Token',
    description: 'Step-by-step guide to launching your first token.',
    icon: '🚀',
    href: '/docs/launch-token',
    category: 'Getting started'
  },
  {
    id: 'the-house',
    title: 'What is The House?',
    description: 'Understanding the community-powered bankroll system.',
    icon: '🏛️',
    href: '/docs/the-house',
    category: 'About JUSTWYNN'
  },
  {
    id: 'milestone-games',
    title: 'Milestone Games',
    description: 'How games unlock when tokens hit major milestones.',
    icon: '🎰',
    href: '/docs/milestone-games',
    category: 'About JUSTWYNN'
  },
  {
    id: 'graduation-system',
    title: 'Graduation System',
    description: 'How tokens graduate to Hall of Fame status.',
    icon: '🎓',
    href: '/docs/graduation-system',
    category: 'About JUSTWYNN'
  },
  {
    id: 'quickstart',
    title: 'Quickstart',
    description: 'Begin interacting with JUSTWYNN\'s platform.',
    icon: '⚡',
    href: '/docs/quickstart',
    category: 'Developers'
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    description: 'Complete API documentation for developers.',
    icon: '🔧',
    href: '/docs/api-reference',
    category: 'Developers'
  },
  {
    id: 'smart-contracts',
    title: 'Smart Contracts',
    description: 'Technical details about JUSTWYNN smart contracts.',
    icon: '📄',
    href: '/docs/smart-contracts',
    category: 'Developers'
  },
  {
    id: 'fees-structure',
    title: 'Fees Structure',
    description: 'Understanding launch fees, trading fees, and rewards.',
    icon: '💰',
    href: '/docs/fees-structure',
    category: 'Economics'
  },
  {
    id: 'tokenomics',
    title: 'Tokenomics',
    description: 'JUSTWYNN token distribution and utility.',
    icon: '📊',
    href: '/docs/tokenomics',
    category: 'Economics'
  },
  {
    id: 'house-cup',
    title: 'The House Cup',
    description: 'Weekly community competitions and rewards.',
    icon: '🏆',
    href: '/docs/house-cup',
    category: 'Competitions'
  }
];

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredSections = docSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedSections = filteredSections.reduce((acc, section) => {
    if (!acc[section.category]) {
      acc[section.category] = [];
    }
    acc[section.category].push(section);
    return acc;
  }, {} as Record<string, DocSection[]>);

  return (
    <div className="min-h-screen bg-[#0B0D10] flex">
      {/* Sidebar */}
      <DocsSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-casino-gold/10">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-md text-[#A6B0BF] hover:text-white hover:bg-casino-gold/10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link 
            href="/" 
            className="text-lg font-bold text-casino-green"
            style={{ 
              fontFamily: 'var(--font-space-grotesk)',
              textShadow: '0 0 10px rgba(0, 179, 102, 0.5)'
            }}
          >
            JUSTWYNN Docs
          </Link>
        </div>

        {/* Content */}
        <main className="max-w-4xl mx-auto px-6 py-8">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-casino-green/20 to-casino-gold/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-casino-green to-casino-gold flex items-center justify-center">
                <span className="text-2xl">🎰</span>
              </div>
            </div>
            <h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Meet <span className="text-casino-green" style={{ textShadow: '0 0 10px rgba(0, 179, 102, 0.5)' }}>JUSTWYNN</span>
            </h1>
            <p className="text-xl text-[#A6B0BF] max-w-2xl mx-auto">
              The gamified launchpad where every launch fuels The House—and every milestone becomes a community win.
            </p>
          </motion.div>

          {/* Documentation Cards */}
          <div className="space-y-8">
            {Object.entries(groupedSections).map(([category, sections], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-lg font-semibold text-[#A6B0BF] mb-4 uppercase tracking-wider">
                  {category}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {sections.map((section, index) => (
                    <motion.div
                      key={section.id}
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link href={section.href}>
                        <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-gold/20 hover:border-casino-green/50 transition-all duration-200 group cursor-pointer h-full">
                          <div className="flex items-start justify-between mb-3">
                            <div className="w-10 h-10 rounded-lg bg-casino-green/10 flex items-center justify-center text-lg">
                              {section.icon}
                            </div>
                            <ChevronRightIcon className="w-5 h-5 text-[#A6B0BF] group-hover:text-casino-green transition-colors" />
                          </div>
                          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-casino-green transition-colors">
                            {section.title}
                          </h3>
                          <p className="text-sm text-[#A6B0BF] leading-relaxed">
                            {section.description}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-casino-gold/10 text-center">
            <p className="text-sm text-[#A6B0BF]">
              Need help? Join our{' '}
              <a href="#" className="text-casino-green hover:text-casino-green/80 transition-colors">
                Discord community
              </a>{' '}
              or{' '}
              <a href="#" className="text-casino-green hover:text-casino-green/80 transition-colors">
                contact support
              </a>
              .
            </p>
          </div>
        </main>
      </div>

    </div>
  );
}
