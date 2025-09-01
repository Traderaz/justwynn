"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import DocsSidebar from '@/components/docs/DocsSidebar';

export default function WhatIsJustwynnPage() {
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
              What is <span className="text-casino-green" style={{ textShadow: '0 0 10px rgba(0, 179, 102, 0.5)' }}>JUSTWYNN</span>?
            </h1>

            <div className="text-lg text-[#A6B0BF] mb-8">
              JUSTWYNN is a next-generation launchpad that blends unlimited token creation with a constantly growing community bankroll—The House—and a suite of games and competitions that reward real traction and loyal holders.
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-casino-gold mb-4">The Vision</h2>
                <p className="text-[#E9EEF5] leading-relaxed">
                  Traditional launchpads often gate access behind complex requirements or favor only established projects. JUSTWYNN breaks down these barriers by creating a truly open ecosystem where anyone can launch a token, but only projects with genuine community support and real traction graduate to receive ongoing rewards and recognition.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-casino-gold mb-4">Key Principles</h2>
                <div className="grid gap-6">
                  <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-green/20">
                    <h3 className="text-xl font-semibold text-casino-green mb-3">🚀 Unlimited Access</h3>
                    <p className="text-[#E9EEF5]">
                      No gatekeepers, no complex requirements, no fees. Anyone can create and launch a token instantly for free.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-gold/20">
                    <h3 className="text-xl font-semibold text-casino-gold mb-3">🏛️ Community-Powered Growth</h3>
                    <p className="text-[#E9EEF5]">
                      Every trade and tier progression feeds The House—a community bankroll that powers rewards, games, and competitions for all participants.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-[#1a1d23] border border-red-400/20">
                    <h3 className="text-xl font-semibold text-red-400 mb-3">🎯 Merit-Based Rewards</h3>
                    <p className="text-[#E9EEF5]">
                      Only tokens that hit real milestones—market cap, holder count, sustained performance—unlock games, rewards, and Royal Flush tier status.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-casino-gold mb-4">How It Works</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-casino-green/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-casino-green font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Launch</h4>
                      <p className="text-[#A6B0BF]">Create your token with our simple interface completely FREE. Zero barriers to entry for creators.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-casino-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-casino-gold font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Build Community</h4>
                      <p className="text-[#A6B0BF]">Focus on growing your token&apos;s community, market cap, and holder base. Every trade contributes to The House.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-400 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Hit Milestones</h4>
                      <p className="text-[#A6B0BF]">When your token reaches major milestones, unlock games, competitions, and potential progression to Royal Flush tier status.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-casino-gold mb-4">Why JUSTWYNN?</h2>
                <p className="text-[#E9EEF5] leading-relaxed mb-4">
                  JUSTWYNN isn&apos;t just another launchpad—it&apos;s a complete ecosystem that aligns incentives between token creators, holders, and the platform itself. By feeding all activity into The House, we create a sustainable model where success breeds more success, and every participant benefits from the platform&apos;s growth.
                </p>
                <p className="text-[#E9EEF5] leading-relaxed">
                  Whether you&apos;re launching your first token or you&apos;re a seasoned holder looking for the next big opportunity, JUSTWYNN provides the tools, community, and rewards structure to turn launches into lasting success stories.
                </p>
              </section>
            </div>

            {/* Next/Previous Navigation */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-casino-gold/10">
              <div></div>
              <Link 
                href="/docs/how-it-works"
                className="inline-flex items-center px-4 py-2 bg-casino-green/10 text-casino-green rounded-lg hover:bg-casino-green/20 transition-colors"
              >
                Next: How does it work?
                <ChevronLeftIcon className="w-4 h-4 ml-2 rotate-180" />
              </Link>
            </div>
          </motion.article>
        </main>
      </div>
    </div>
  );
}
