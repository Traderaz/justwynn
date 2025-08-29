"use client";

import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  onJoinWaitlist?: () => void;
}

const Navbar = ({ onJoinWaitlist }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "The House", href: "#the-house" },
    { name: "Milestone Games", href: "#milestone-games" },
    { name: "The House Cup", href: "#the-house-cup" },
    { name: "Royal Flush", href: "#hall-of-fame" },
    { name: "FAQ", href: "#faq" },
    { name: "Docs", href: "/docs" },
  ];

  return (
    <nav className="bg-[#0B0D10]/98 backdrop-blur-md border-b border-casino-gold/10 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-xl text-casino-green font-bold tracking-wide hover:text-casino-green/80 transition-all duration-300"
              style={{ 
                fontFamily: 'var(--font-space-grotesk)',
                textShadow: '0 0 10px rgba(0, 179, 102, 0.5)'
              }}
            >
              JUSTWYNN
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#E9EEF5]/90 hover:text-casino-gold hover:bg-casino-gold/5 transition-all duration-300 px-4 py-2 rounded-lg text-sm font-medium relative group"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {link.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-casino-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button 
              onClick={onJoinWaitlist}
              className="bg-gradient-to-r from-casino-green to-emerald-500 hover:from-casino-green/90 hover:to-emerald-500/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-casino-green/20"
              style={{ 
                fontFamily: 'var(--font-inter)',
                boxShadow: '0 4px 20px rgba(0, 179, 102, 0.25)'
              }}
            >
              Join The List
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#E9EEF5] hover:text-casino-gold transition-all duration-300 p-2 rounded-lg hover:bg-casino-gold/5"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-casino-gold/10">
          <div className="px-6 py-4 space-y-1 bg-[#0B0D10]/98 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#E9EEF5]/90 hover:text-casino-gold hover:bg-casino-gold/5 block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg"
                style={{ fontFamily: 'var(--font-inter)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <button 
                onClick={onJoinWaitlist}
                className="bg-gradient-to-r from-casino-green to-emerald-500 hover:from-casino-green/90 hover:to-emerald-500/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 w-full shadow-lg border border-casino-green/20"
                style={{ 
                  fontFamily: 'var(--font-inter)',
                  boxShadow: '0 4px 20px rgba(0, 179, 102, 0.25)'
                }}
              >
                Join The List
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
