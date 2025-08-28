"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import DocsSidebar from './DocsSidebar';

interface DocPageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  nextPage?: {
    title: string;
    href: string;
  };
  prevPage?: {
    title: string;
    href: string;
  };
}

export default function DocPageLayout({ 
  children, 
  title, 
  description,
  nextPage,
  prevPage 
}: DocPageLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

        <main className="max-w-4xl mx-auto px-6 py-8">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link 
              href="/docs"
              className="inline-flex items-center text-sm text-[#A6B0BF] hover:text-casino-green transition-colors"
            >
              <ChevronLeftIcon className="w-4 h-4 mr-1" />
              Back to docs
            </Link>
          </motion.div>

          {/* Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert prose-casino max-w-none"
          >
            <h1 
              className="text-4xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              {title.includes('JUSTWYNN') ? (
                <span dangerouslySetInnerHTML={{
                  __html: title.replace('JUSTWYNN', '<span class="text-casino-green" style="text-shadow: 0 0 10px rgba(0, 179, 102, 0.5);">JUSTWYNN</span>')
                }} />
              ) : (
                title
              )}
            </h1>

            {description && (
              <div className="text-lg text-[#A6B0BF] mb-8">
                {description}
              </div>
            )}

            {children}

            {/* Next/Previous Navigation */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-casino-gold/10">
              <div>
                {prevPage && (
                  <Link 
                    href={prevPage.href}
                    className="inline-flex items-center px-4 py-2 bg-casino-gold/10 text-casino-gold rounded-lg hover:bg-casino-gold/20 transition-colors"
                  >
                    <ChevronLeftIcon className="w-4 h-4 mr-2" />
                    Previous: {prevPage.title}
                  </Link>
                )}
              </div>
              <div>
                {nextPage && (
                  <Link 
                    href={nextPage.href}
                    className="inline-flex items-center px-4 py-2 bg-casino-green/10 text-casino-green rounded-lg hover:bg-casino-green/20 transition-colors"
                  >
                    Next: {nextPage.title}
                    <ChevronLeftIcon className="w-4 h-4 ml-2 rotate-180" />
                  </Link>
                )}
              </div>
            </div>
          </motion.article>
        </main>
      </div>
    </div>
  );
}
