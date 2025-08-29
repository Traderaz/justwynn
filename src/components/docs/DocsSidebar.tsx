"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface SidebarSection {
  title: string;
  items: {
    title: string;
    href: string;
  }[];
}

const sidebarSections: SidebarSection[] = [
  {
    title: 'Getting started',
    items: [
      { title: 'Intro', href: '/docs' },
      { title: 'What is JUSTWYNN?', href: '/docs/what-is-justwynn' },
      { title: 'How does it work?', href: '/docs/how-it-works' },
      { title: 'Launch a Token', href: '/docs/launch-token' }
    ]
  },
  {
    title: 'About JUSTWYNN',
    items: [
      { title: 'What is The House?', href: '/docs/the-house' },
      { title: 'Milestone Games', href: '/docs/milestone-games' },
      { title: 'Graduation System', href: '/docs/graduation-system' }
    ]
  },
  {
    title: 'Developers',
    items: [
      { title: 'Quickstart', href: '/docs/quickstart' },
      { title: 'API Reference', href: '/docs/api-reference' },
      { title: 'Smart Contracts', href: '/docs/smart-contracts' }
    ]
  },
  {
    title: 'Economics',
    items: [
      { title: 'Fees Structure', href: '/docs/fees-structure' },
      { title: 'Tokenomics', href: '/docs/tokenomics' }
    ]
  },
  {
    title: 'Competitions',
    items: [
      { title: 'The House Cup', href: '/docs/house-cup' }
    ]
  }
];

interface DocsSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

export default function DocsSidebar({ isOpen = true, onClose, className = '' }: DocsSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  return (
    <>
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-[#0B0D10] via-[#1a1d23] to-[#0B0D10] border-r border-casino-gold/20 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${className}`} style={{
        boxShadow: '0 0 50px rgba(245, 158, 11, 0.1), inset 0 1px 0 rgba(245, 158, 11, 0.1)'
      }}>
        <div className="flex flex-col h-full relative">
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-casino-gold to-transparent opacity-60"></div>
          
          {/* Logo */}
          <div className="flex items-center px-6 py-6 border-b border-casino-gold/20 bg-gradient-to-r from-casino-green/5 to-casino-gold/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-casino-green to-casino-gold flex items-center justify-center">
                <span className="text-white font-bold text-sm">📚</span>
              </div>
              <div>
                <Link 
                  href="/" 
                  className="text-xl font-bold text-casino-green hover:opacity-80 transition-opacity block"
                  style={{ 
                    fontFamily: 'var(--font-space-grotesk)',
                    textShadow: '0 0 10px rgba(0, 179, 102, 0.5)'
                  }}
                >
                  JUSTWYNN
                </Link>
                <span className="text-xs text-casino-gold/80 font-medium tracking-wider">DOCUMENTATION</span>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="p-6">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-casino-gold/60" />
              <input
                type="text"
                placeholder="Search docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gradient-to-r from-[#0B0D10] to-[#1a1d23] border border-casino-gold/30 rounded-xl text-sm text-white placeholder-casino-gold/50 focus:outline-none focus:ring-2 focus:ring-casino-green/50 focus:border-casino-green/50 transition-all duration-200"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(245, 158, 11, 0.1)'
                }}
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 pb-6 overflow-y-auto">
            {sidebarSections.map((section) => {
              // Filter items based on search query
              const filteredItems = section.items.filter(item =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
              );

              // Only show section if it has matching items or no search query
              if (searchQuery && filteredItems.length === 0) {
                return null;
              }

              return (
                <div key={section.title} className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-casino-green to-casino-gold"></div>
                    <h3 className="text-xs font-bold text-casino-gold uppercase tracking-widest">
                      {section.title}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-casino-gold/20 to-transparent"></div>
                  </div>
                  <ul className="space-y-2 ml-4">
                    {(searchQuery ? filteredItems : section.items).map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`group flex items-center px-4 py-2.5 text-sm rounded-lg transition-all duration-200 relative overflow-hidden ${
                              isActive
                                ? 'bg-gradient-to-r from-casino-green/20 to-casino-gold/10 text-casino-green border-l-4 border-casino-green shadow-lg' 
                                : 'text-[#E9EEF5] hover:bg-gradient-to-r hover:from-casino-gold/10 hover:to-casino-green/5 hover:text-casino-gold hover:border-l-4 hover:border-casino-gold/50'
                            }`}
                            onClick={onClose}
                            style={isActive ? {
                              boxShadow: '0 0 20px rgba(0, 179, 102, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            } : {}}
                          >
                            <span className="relative z-10">
                              {searchQuery ? (
                                <span dangerouslySetInnerHTML={{
                                  __html: item.title.replace(
                                    new RegExp(`(${searchQuery})`, 'gi'),
                                    '<span style="background-color: rgba(0, 179, 102, 0.3); color: #00B366;">$1</span>'
                                  )
                                }} />
                              ) : (
                                item.title
                              )}
                            </span>
                            {isActive && (
                              <div className="absolute right-2 w-2 h-2 rounded-full bg-casino-green animate-pulse"></div>
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  
                  {/* Show "No results" message if search has no matches in this section */}
                  {searchQuery && filteredItems.length === 0 && (
                    <div className="ml-4 px-4 py-2 text-sm text-[#A6B0BF] italic">
                      No matches found
                    </div>
                  )}
                </div>
              );
            })}
            
            {/* Show overall "No results" message if no sections have matches */}
            {searchQuery && sidebarSections.every(section => 
              section.items.filter(item =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
              ).length === 0
            ) && (
              <div className="text-center py-8">
                <div className="text-[#A6B0BF] text-sm">
                  No documentation found for &quot;{searchQuery}&quot;
                </div>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-2 text-casino-green text-sm hover:text-casino-gold transition-colors"
                >
                  Clear search
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {isOpen && onClose && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
}
