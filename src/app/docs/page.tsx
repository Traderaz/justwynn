"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import DocsSidebar from '@/components/docs/DocsSidebar';
import { CasinoBackground } from '@/components/ui/casino-background';

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
    description: 'How games unlock when Royal Flush tokens reach $1M+ market cap.',
    icon: '🎯',
    href: '/docs/milestone-games',
    category: 'About JUSTWYNN'
  },
  {
    id: 'prediction-markets',
    title: 'Prediction Markets',
    description: 'Bet on token metrics, ecosystem events, and global markets with JUSTWYNN\'s advanced prediction markets.',
    icon: '🔮',
    href: '/docs/prediction-markets',
    category: 'About JUSTWYNN'
  },
  {
    id: 'flywheel',
    title: 'The JUSTWYNN Flywheel',
    description: 'How every component works together in a self-reinforcing cycle of growth and value creation.',
    icon: '🔄',
    href: '/docs/flywheel',
    category: 'About JUSTWYNN'
  },
  {
    id: 'graduation-system',
    title: 'Token Tier System',
    description: 'How tokens progress through Opening Hand, Rising Pot, and Royal Flush tiers.',
    icon: '🎰',
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
    description: 'Understanding our free launch model, trading fees, and rewards.',
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const groupedSections = docSections.reduce((acc, section) => {
    if (!acc[section.category]) {
      acc[section.category] = [];
    }
    acc[section.category].push(section);
    return acc;
  }, {} as Record<string, DocSection[]>);

  return (
    <div className="min-h-screen bg-[#0B0D10] relative">
      <CasinoBackground />
      
      <div className="flex relative z-10">
        {/* Sidebar */}
        <DocsSidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-start p-2 sm:p-4 border-b border-casino-gold/10">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-md text-[#A6B0BF] hover:text-white hover:bg-casino-gold/10 mr-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link 
            href="/" 
            className="text-sm sm:text-lg font-bold text-casino-green"
            style={{ 
              fontFamily: 'var(--font-space-grotesk)',
              textShadow: '0 0 10px rgba(0, 179, 102, 0.5)'
            }}
          >
            JUSTWYNN Docs
          </Link>
        </div>

        {/* Content */}
        <main className="max-w-4xl mx-auto px-1 sm:px-6 py-3 sm:py-8">
          {/* Header */}
          <motion.div
            className="text-center mb-6 sm:mb-16 relative w-4/5 sm:w-full mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Casino-style header background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-casino-gold/5 to-transparent rounded-3xl blur-xl"></div>
            
            <div className="relative bg-gradient-to-br from-[#0B0D10]/90 to-[#1a1d23]/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-12 border border-casino-gold/20 shadow-2xl" style={{
              boxShadow: '0 0 80px rgba(245, 158, 11, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
            }}>
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-casino-gold/40 rounded-tl-lg"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-casino-gold/40 rounded-tr-lg"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-casino-gold/40 rounded-bl-lg"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-casino-gold/40 rounded-br-lg"></div>
              
              <div className="w-14 h-14 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-8 rounded-full bg-gradient-to-br from-casino-green/30 to-casino-gold/30 flex items-center justify-center border border-casino-gold/30" style={{
                boxShadow: '0 0 30px rgba(245, 158, 11, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1)'
              }}>
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-casino-green to-casino-gold flex items-center justify-center">
                  <span className="text-xl sm:text-3xl">📚</span>
                </div>
              </div>
              
              <h1 
                className="text-2xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-6"
                style={{ 
                  fontFamily: 'var(--font-space-grotesk)',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
                }}
              >
                <span className="text-casino-green" style={{ textShadow: '0 0 20px rgba(0, 179, 102, 0.5)' }}>JUSTWYNN</span>
                <span className="text-casino-gold ml-2 sm:ml-4" style={{ textShadow: '0 0 20px rgba(245, 158, 11, 0.5)' }}>DOCS</span>
              </h1>
              
              <div className="w-12 sm:w-24 h-1 bg-gradient-to-r from-casino-green via-casino-gold to-casino-green mx-auto mb-3 sm:mb-6 rounded-full"></div>
              
              <p className="text-sm sm:text-xl text-[#E9EEF5] max-w-3xl mx-auto leading-relaxed">
                The complete guide to building on the gamified launchpad where every launch fuels The House—and every milestone becomes a community win.
              </p>
            </div>
          </motion.div>

          {/* Documentation Cards */}
          <div className="space-y-6 sm:space-y-8">
            {Object.entries(groupedSections).map(([category, sections], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-sm sm:text-lg font-semibold text-[#A6B0BF] mb-3 sm:mb-4 uppercase tracking-wider">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {sections.map((section) => (
                    <motion.div
                      key={section.id}
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="w-4/5 sm:w-full mx-0 sm:mx-auto"
                    >
                      <Link href={section.href}>
                        <div className="relative p-2 sm:p-6 rounded-lg sm:rounded-2xl bg-gradient-to-br from-[#0B0D10]/80 to-[#1a1d23]/60 border border-casino-gold/20 hover:border-casino-green/50 transition-all duration-300 group cursor-pointer h-full backdrop-blur-sm overflow-hidden min-h-[120px] sm:min-h-auto"
                             style={{
                               boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                             }}>
                          {/* Hover glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-casino-green/5 to-casino-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          <div className="relative z-10">
                            <div className="flex items-start justify-between mb-3 sm:mb-4">
                              <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-md sm:rounded-xl bg-gradient-to-br from-casino-green/20 to-casino-gold/20 flex items-center justify-center text-sm sm:text-xl border border-casino-gold/30 flex-shrink-0"
                                   style={{
                                     boxShadow: '0 4px 12px rgba(245, 158, 11, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                   }}>
                                {section.icon}
                              </div>
                              <div className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-casino-green/10 flex items-center justify-center group-hover:bg-casino-green/20 transition-colors flex-shrink-0">
                                <ChevronRightIcon className="w-2 h-2 sm:w-4 sm:h-4 text-casino-gold group-hover:text-casino-green transition-colors group-hover:translate-x-0.5" />
                              </div>
                            </div>
                            <h3 className="text-sm sm:text-lg font-bold text-white mb-2 sm:mb-3 group-hover:text-casino-green transition-colors pr-0.5" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                              {section.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-[#A6B0BF] leading-relaxed sm:leading-relaxed group-hover:text-[#E9EEF5] transition-colors pr-0.5">
                              {section.description}
                            </p>
                          </div>
                          
                          {/* Decorative corner accent */}
                          <div className="absolute bottom-2 right-2 w-2 h-2 bg-gradient-to-br from-casino-green to-casino-gold rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>


        </main>
        </div>
      </div>
    </div>
  );
}
