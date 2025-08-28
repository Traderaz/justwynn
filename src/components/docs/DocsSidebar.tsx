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
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#1a1d23] border-r border-casino-gold/10 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${className}`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center px-6 py-4 border-b border-casino-gold/10">
            <Link 
              href="/" 
              className="text-xl font-bold text-casino-green hover:opacity-80 transition-opacity"
              style={{ 
                fontFamily: 'var(--font-space-grotesk)',
                textShadow: '0 0 10px rgba(0, 179, 102, 0.5)'
              }}
            >
              JUSTWYNN
            </Link>
            <span className="ml-2 text-sm text-[#A6B0BF]">Docs</span>
          </div>

          {/* Search */}
          <div className="p-4">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#A6B0BF]" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#0B0D10] border border-casino-gold/20 rounded-lg text-sm text-white placeholder-[#A6B0BF] focus:outline-none focus:ring-2 focus:ring-casino-green/50 focus:border-casino-green/50"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 pb-4 overflow-y-auto">
            {sidebarSections.map((section) => (
              <div key={section.title} className="mb-6">
                <h3 className="px-2 mb-2 text-xs font-semibold text-[#A6B0BF] uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`flex items-center px-2 py-1.5 text-sm rounded-md transition-colors ${
                            isActive
                              ? 'bg-casino-green/10 text-casino-green border-l-2 border-casino-green' 
                              : 'text-[#E9EEF5] hover:bg-casino-gold/10 hover:text-casino-gold'
                          }`}
                          onClick={onClose}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
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
