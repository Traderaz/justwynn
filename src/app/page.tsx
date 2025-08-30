"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CasinoBackground } from "@/components/ui/casino-background";
import { PremiumSlotMachine } from "@/components/ui/premium-slot-machine";
import { PremiumPlayingCard } from "@/components/ui/premium-playing-card";
import { SimpleWaitlistForm } from "@/components/ui/simple-waitlist-form";

const trustIcons = {
  shield: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
      <path d="M12 2L3 7V12C3 16.55 6.84 20.74 9.91 21.84C10.61 22.05 11.3 22.05 12 22.05C12.7 22.05 13.39 22.05 14.09 21.84C17.16 20.74 21 16.55 21 12V7L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  vault: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  solana: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
      <path d="M4 8L8 4L20 4C21.1 4 22 4.9 22 6L22 10L18 14L6 14C4.9 14 4 13.1 4 12L4 8Z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M4 14L8 10L20 10C21.1 10 22 10.9 22 12L22 16L18 20L6 20C4.9 20 4 19.1 4 18L4 14Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  )
};

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0D10]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Casino Background */}
        <CasinoBackground variant="hero" opacity={0.20} />

        {/* Main content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 pb-12 sm:pb-20">
          {/* Logo */}
          <motion.div
            className="mb-1 sm:mb-2"
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex justify-center">
              <Image
                src="/logo.png"
                alt="JUSTWYNN Logo"
                width={240}
                height={240}
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* JUSTWYNN Logo/Sign */}
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 text-casino-green"
              style={{ 
                fontFamily: 'var(--font-space-grotesk)',
                textShadow: '0 0 30px rgba(0, 179, 102, 0.4), 0 0 60px rgba(0, 179, 102, 0.2)'
              }}
            >
              JUSTWYNN
            </h1>
          </motion.div>
          
          {/* Main headline */}
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-8"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
            initial={{ opacity: 0, y: 8, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            Launch → Play →{" "}
            <span className="text-casino-green" style={{ textShadow: '0 0 20px rgba(0, 179, 102, 0.3)' }}>
              Holders Win
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            className="text-base sm:text-xl md:text-2xl lg:text-3xl text-[#A6B0BF] mb-12 sm:mb-20 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4"
            style={{ fontFamily: 'var(--font-inter)' }}
            initial={{ opacity: 0, y: 8, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          >
            The gamified launchpad where every launch fuels The House—and every milestone becomes a community win.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-row gap-4 sm:gap-12 justify-center items-center mb-8 sm:mb-20"
            initial={{ opacity: 0, y: 8, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          >
            <Button
              onClick={() => setIsWaitlistOpen(true)}
              className="casino-green hover:opacity-90 text-white border border-casino-green h-12 sm:h-14 px-4 sm:px-10 rounded-2xl font-bold text-sm sm:text-lg min-w-[140px] sm:min-w-[200px] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              style={{ fontFamily: 'var(--font-inter)', boxShadow: '0 0 20px rgba(0, 179, 102, 0.3)' }}
            >
              Join The List
            </Button>
            <Link href="/docs">
              <Button
                variant="outline"
                className="bg-transparent hover:bg-casino-gold/10 text-[#E9EEF5] border-2 border-casino-gold/30 hover:border-casino-gold h-12 sm:h-14 px-4 sm:px-10 rounded-2xl font-bold text-sm sm:text-lg min-w-[140px] sm:min-w-[200px] transition-all duration-200 hover:scale-105"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Read the Docs
              </Button>
            </Link>
          </motion.div>

          {/* Enhanced Trust strip */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4"
            initial={{ opacity: 0, y: 8, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          >
            {[
              { label: "Unlimited Launches", icon: "shield", variant: "audited" },
              { label: "Mobile-friendly", icon: "solana", variant: "solana" },
              { label: "Transparent Fees", icon: "shield", variant: "audited" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className={`chip-pill trust-badge-${item.variant}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className={index === 0 || index === 2 ? "text-casino-green" : "text-casino-red"}>
                  {trustIcons[item.icon as keyof typeof trustIcons]()}
                </div>
                <span className="text-[#E9EEF5] font-semibold" style={{ fontFamily: 'var(--font-inter)' }}>
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section - Why Justwynn */}
      <section className="relative py-12 mt-12">
        <CasinoBackground variant="section" opacity={0.10} />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-display-lg mb-6" 
              style={{ 
                fontFamily: 'var(--font-space-grotesk)',
                background: 'linear-gradient(135deg, #00E28A 0%, #00B366 50%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(0, 226, 138, 0.5)'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Why Justwynn
            </motion.h2>
            <p className="text-xl text-[#A6B0BF] max-w-4xl mx-auto leading-relaxed">
              Justwynn is a next-generation launchpad that blends unlimited token creation with a constantly growing community bankroll—The House—and a suite of games and competitions that reward real traction and loyal holders.
            </p>
          </motion.div>

          {/* Premium Neon Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Unlimited Launches",
                description: "Anyone can create and launch a token instantly with a small entry fee. No barriers. No gatekeepers.",
                icon: "🚀",
                color: "#00E28A",
                gradient: "linear-gradient(135deg, rgba(0, 226, 138, 0.15) 0%, rgba(0, 226, 138, 0.05) 100%)"
              },
              {
                title: "Three-Tier System", 
                description: "Tokens progress through Opening Hand (newly created), Rising Pot (below $100K), and Royal Flush (above $100K). Games unlock at $1M+.",
                icon: "🎰",
                color: "#F59E0B",
                gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.05) 100%)"
              },
              {
                title: "The House",
                description: "Every launch, trade, and tier progression fuels The House—a pool that grows daily and powers rewards, games, and competitions.",
                icon: "🏛️",
                color: "#DC2626",
                gradient: "linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.05) 100%)"
              },
              {
                title: "Milestone Games",
                description: "When tokens hit major milestones, holders get access to lotteries, slots, and roulette for token supply, SOL prizes, and Justwynn rewards.",
                icon: "🎰",
                color: "#A855F7",
                gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.05) 100%)"
              },
              {
                title: "Streak Rewards", 
                description: "Back multiple Royal Flush tokens in a row to unlock reduced fees, extra jackpot entries, and exclusive NFT badges.",
                icon: "🔥",
                color: "#EF4444",
                gradient: "linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.05) 100%)"
              },
              {
                title: "The House Jackpot",
                description: "A share of platform fees feeds a weekly jackpot for active users—scales automatically with platform activity.",
                icon: "💎",
                color: "#06B6D4",
                gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0.05) 100%)"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div 
                  className="p-6 rounded-2xl relative overflow-hidden backdrop-blur-md border-2 transition-all duration-500 h-full min-h-[280px] flex flex-col"
                  style={{
                    background: feature.gradient,
                    borderColor: `${feature.color}40`,
                    boxShadow: `0 20px 60px ${feature.color}20, 0 0 40px ${feature.color}15`
                  }}
                >
                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `linear-gradient(45deg, transparent, ${feature.color}30, transparent)`,
                      filter: 'blur(1px)'
                    }}
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Mega neon icon */}
                    <div className="flex items-center justify-center mb-4">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center text-3xl relative"
                        style={{
                          background: `radial-gradient(circle at 30% 30%, ${feature.color}, ${feature.color}CC)`,
                          boxShadow: `0 0 40px ${feature.color}80, inset 0 4px 8px rgba(255, 255, 255, 0.2)`
                        }}
                      >
                        {feature.icon}
                      </div>
                    </div>
                    
                    <h3 
                      className="text-xl font-bold mb-3 text-center"
                      style={{ 
                        fontFamily: 'var(--font-space-grotesk)',
                        color: feature.color,
                        textShadow: `0 0 20px ${feature.color}60, 0 0 40px ${feature.color}30`
                      }}
                    >
                      {feature.title}
                    </h3>
                    <div className="flex-1 flex items-center">
                      <p className="text-[#A6B0BF] leading-relaxed text-center text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The House Section */}
      <section id="the-house" className="relative py-20 mt-16 overflow-hidden">
        <CasinoBackground variant="section" opacity={0.08} />
        
        {/* Epic background effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(220, 38, 38, 0.1) 0%, transparent 70%)'
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-display-lg mb-8" 
              style={{ 
                fontFamily: 'var(--font-space-grotesk)',
                background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 25%, #F59E0B 50%, #EF4444 75%, #DC2626 100%)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 30px rgba(220, 38, 38, 0.5))'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              What is The House?
            </motion.h2>
            <motion.p 
              className="text-xl text-[#A6B0BF] max-w-5xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              The House is our constantly growing, community-powered bankroll. It&apos;s funded by trading volume (0.9% trading fee with 0.3% to The House), and tier progression fees as tokens advance through Opening Hand, Rising Pot, and Royal Flush. We only fund games and rewards from inflows/yield—not principal—so The House compounds over time.
            </motion.p>
          </motion.div>

          {/* Ultra Premium Stat Blocks */}
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                title: "Free Launch",
                subtitle: "Zero barrier to entry",
                icon: "🚀",
                color: "#00E28A",
                accentColor: "#00B366",
                stat: "FREE",
                description: "No upfront costs"
              },
              {
                title: "0.9% Trading Fee", 
                subtitle: "Split 3-ways for sustainability",
                icon: "💱",
                color: "#F59E0B",
                accentColor: "#D97706",
                stat: "0.3% × 3",
                description: "Liquidity + Ops + House"
              },
              {
                title: "Tier Progression Fee",
                subtitle: "Predictable growth through tiers",
                icon: "🎰",
                color: "#DC2626",
                accentColor: "#B91C1C",
                stat: "Fixed Rate",
                description: "Transparent advancement"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative group perspective-1000"
                initial={{ 
                  opacity: 0, 
                  y: 50,
                  rotateX: -30,
                  scale: 0.8
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0,
                  scale: 1
                }}
                transition={{ 
                  duration: 1,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -20,
                  rotateY: 10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Holographic base */}
                <div 
                  className="absolute inset-0 rounded-3xl transform translate-y-8 opacity-30"
                  style={{
                    background: `radial-gradient(ellipse 80% 40% at 50% 100%, ${stat.color}40, transparent)`,
                    filter: 'blur(20px)'
                  }}
                />
                
                <div 
                  className="relative p-10 rounded-3xl backdrop-blur-xl border-2 overflow-hidden transform-gpu"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}15 0%, ${stat.color}05 50%, ${stat.accentColor}10 100%)`,
                    borderColor: `${stat.color}60`,
                    boxShadow: `
                      0 25px 80px ${stat.color}25,
                      0 0 60px ${stat.color}20,
                      inset 0 1px 2px rgba(255, 255, 255, 0.1)
                    `
                  }}
                >
                  {/* Animated energy field */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-30"
                    style={{
                      background: `conic-gradient(from 0deg, transparent, ${stat.color}40, transparent, ${stat.accentColor}40, transparent)`
                    }}
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Mega 3D Icon */}
                    <div className="flex justify-center mb-8">
                      <div className="relative">
                        <div 
                          className="w-24 h-24 rounded-2xl flex items-center justify-center text-5xl relative transform-gpu"
                          style={{
                            background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.accentColor} 100%)`,
                            boxShadow: `
                              0 0 60px ${stat.color}80,
                              0 20px 40px ${stat.color}40,
                              inset 0 2px 8px rgba(255, 255, 255, 0.3),
                              inset 0 -2px 8px rgba(0, 0, 0, 0.3)
                            `
                          }}
                        >
                          {stat.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats and Info */}
                    <motion.div
                      className="text-4xl font-black mb-2"
                      style={{ 
                        color: stat.color,
                        textShadow: `0 0 30px ${stat.color}80, 0 0 60px ${stat.color}40`,
                        fontFamily: 'var(--font-space-grotesk)'
                      }}
                      animate={{
                        textShadow: [
                          `0 0 30px ${stat.color}80`,
                          `0 0 45px ${stat.color}90`,
                          `0 0 30px ${stat.color}80`
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {stat.stat}
                    </motion.div>
                    
                    <h3 
                      className="text-2xl font-bold mb-3"
                      style={{ 
                        fontFamily: 'var(--font-space-grotesk)',
                        color: stat.color,
                        textShadow: `0 0 20px ${stat.color}60`
                      }}
                    >
                      {stat.title}
                    </h3>
                    
                    <div className="h-16 flex items-center justify-center">
                      <p className="text-[#A6B0BF] text-lg leading-relaxed text-center">
                        {stat.subtitle}
                      </p>
                    </div>
                    
                    <div 
                      className="text-sm px-4 py-2 rounded-full inline-block mt-4"
                      style={{
                        background: `${stat.color}20`,
                        border: `1px solid ${stat.color}40`,
                        color: stat.color
                      }}
                    >
                      {stat.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Games Section */}
      <section id="milestone-games" className="relative py-20 mt-16">
        <CasinoBackground variant="section" opacity={0.15} />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-lg text-casino-gold mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Milestone Games — Play to Win
            </h2>
            <p className="text-lg text-[#A6B0BF] max-w-4xl mx-auto">
              When a token reaches $1M+ market cap, it unlocks exclusive games for holders. Only Royal Flush tokens that sustain this milestone activate The House games.
            </p>
          </motion.div>

          {/* Interactive Premium Slot Machine - Full Width */}
          <motion.div
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-6xl">
              <InteractiveSlotMachine />
            </div>
          </motion.div>



          {/* Prizes You Can Win - Auto-Revealing Cards */}
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-display-md text-casino-gold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Prizes You Can Win
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {[
                { 
                  suit: '♠' as const, 
                  rank: 'A' as const, 
                  title: 'Milestone Token Supply', 
                  description: 'Win exclusive portions of the token that just hit its milestone',
                  status: 'active' as const 
                },
                { 
                  suit: '♥' as const, 
                  rank: 'K' as const, 
                  title: 'SOL Prizes', 
                  description: 'Direct SOL rewards funded by The House community bankroll',
                  status: 'upcoming' as const 
                },
                { 
                  suit: '♦' as const, 
                  rank: 'Q' as const, 
                  title: 'JUSTWYNN Tokens', 
                  description: 'Platform tokens that unlock ongoing ecosystem perks and benefits',
                  status: 'future' as const 
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.8,
                      delay: index * 0.2
                    }
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <AutoRevealCard {...card} delay={index * 0.5} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prediction Markets Section */}
      <section id="prediction-markets" className="relative py-20 mt-16">
        <CasinoBackground variant="section" opacity={0.12} />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-display-lg mb-6" 
              style={{ 
                fontFamily: 'var(--font-space-grotesk)',
                background: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 25%, #00E28A 50%, #06B6D4 75%, #0891B2 100%)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.5))'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Prediction Markets — Bet on the Future
            </motion.h2>
            <p className="text-lg text-[#A6B0BF] max-w-4xl mx-auto leading-relaxed">
              Predict and bet on various metrics across the Solana ecosystem and beyond. From token market caps to holder counts, volume milestones to major market events—powered by JUSTWYNN's advanced prediction market technology.
            </p>
            <div className="mt-6 p-4 rounded-xl border border-casino-gold/30 bg-casino-gold/10 max-w-3xl mx-auto">
              <p className="text-casino-gold font-semibold text-center">
                💰 All prediction market revenue flows directly to $WYNN token holders
              </p>
            </div>
          </motion.div>

          {/* Prediction Market Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {[
              {
                title: "Token Metrics",
                description: "Predict market cap, holder count, volume, and price movements for tokens across Solana",
                icon: "📊",
                color: "#06B6D4",
                gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0.05) 100%)",
                markets: ["Market Cap > $1M", "Holders > 10K", "24h Volume > $100K"]
              },
              {
                title: "Launch Predictions", 
                description: "Bet on which tokens will reach Royal Flush status and unlock milestone games",
                icon: "🚀",
                color: "#00E28A",
                gradient: "linear-gradient(135deg, rgba(0, 226, 138, 0.15) 0%, rgba(0, 226, 138, 0.05) 100%)",
                markets: ["Next Royal Flush", "Games Unlock This Week", "Top Performer"]
              },
              {
                title: "Ecosystem Events",
                description: "Predict major Solana ecosystem developments, partnerships, and market movements",
                icon: "🌐",
                color: "#A855F7",
                gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.05) 100%)",
                markets: ["SOL Price Target", "Network Activity", "Major Partnerships"]
              },
              {
                title: "The House Performance",
                description: "Predict The House growth, jackpot sizes, and weekly competition outcomes",
                icon: "🏛️",
                color: "#DC2626",
                gradient: "linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.05) 100%)",
                markets: ["House Jackpot Size", "Weekly Cup Winner", "Monthly Growth"]
              },
              {
                title: "DeFi Metrics",
                description: "Bet on TVL milestones, yield farming returns, and protocol performance across Solana",
                icon: "💰",
                color: "#F59E0B",
                gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.05) 100%)",
                markets: ["TVL Milestones", "Yield Returns", "Protocol Rankings"]
              },
              {
                title: "Global Markets",
                description: "Predict major world events including politics, sports, and economic developments",
                icon: "🌍",
                color: "#EF4444",
                gradient: "linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.05) 100%)",
                markets: ["Political Events", "Sports Outcomes", "Economic Indicators"]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div 
                  className="p-6 rounded-2xl relative overflow-hidden backdrop-blur-md border-2 transition-all duration-500 h-full min-h-[320px] flex flex-col"
                  style={{
                    background: category.gradient,
                    borderColor: `${category.color}40`,
                    boxShadow: `0 20px 60px ${category.color}20, 0 0 40px ${category.color}15`
                  }}
                >
                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `linear-gradient(45deg, transparent, ${category.color}30, transparent)`,
                      filter: 'blur(1px)'
                    }}
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="flex items-center justify-center mb-4">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center text-3xl relative"
                        style={{
                          background: `radial-gradient(circle at 30% 30%, ${category.color}, ${category.color}CC)`,
                          boxShadow: `0 0 40px ${category.color}80, inset 0 4px 8px rgba(255, 255, 255, 0.2)`
                        }}
                      >
                        {category.icon}
                      </div>
                    </div>
                    
                    <h3 
                      className="text-xl font-bold mb-3 text-center"
                      style={{ 
                        fontFamily: 'var(--font-space-grotesk)',
                        color: category.color,
                        textShadow: `0 0 20px ${category.color}60, 0 0 40px ${category.color}30`
                      }}
                    >
                      {category.title}
                    </h3>
                    
                    <p className="text-[#A6B0BF] leading-relaxed text-center text-sm mb-4 flex-1">
                      {category.description}
                    </p>
                    
                    {/* Sample Markets */}
                    <div className="space-y-2">
                      <div className="text-xs text-center mb-2" style={{ color: category.color }}>
                        Popular Markets:
                      </div>
                      {category.markets.map((market, idx) => (
                        <div 
                          key={idx}
                          className="text-xs px-3 py-1 rounded-full text-center"
                          style={{
                            background: `${category.color}20`,
                            border: `1px solid ${category.color}40`,
                            color: '#A6B0BF'
                          }}
                        >
                          {market}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Live Markets Preview */}
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-display-md text-casino-gold mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Live Prediction Markets
              </h3>
              <p className="text-[#A6B0BF] max-w-3xl mx-auto">
                Real-time betting markets with live odds, powered by community predictions and market data
              </p>
            </div>

            {/* Sample Live Markets */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "Will SOL reach $300 by end of 2026?",
                  yesPrice: "67¢",
                  noPrice: "33¢",
                  volume: "$45.2K",
                  participants: "1,247",
                  timeLeft: "45 days",
                  category: "Price Prediction",
                  trend: "up"
                },
                {
                  question: "Will any JUSTWYNN token reach $10M market cap this month?",
                  yesPrice: "78¢",
                  noPrice: "22¢",
                  volume: "$23.8K",
                  participants: "892",
                  timeLeft: "12 days",
                  category: "Platform Milestone",
                  trend: "up"
                },
                {
                  question: "Will The House jackpot exceed 1,000 SOL this week?",
                  yesPrice: "78¢",
                  noPrice: "22¢",
                  volume: "$31.5K",
                  participants: "654",
                  timeLeft: "3 days",
                  category: "House Performance",
                  trend: "up"
                },
                {
                  question: "Will Solana process 100M+ transactions this month?",
                  yesPrice: "91¢",
                  noPrice: "9¢",
                  volume: "$67.1K",
                  participants: "2,103",
                  timeLeft: "18 days",
                  category: "Network Activity",
                  trend: "stable"
                }
              ].map((market, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl relative group cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    boxShadow: '0 8px 32px rgba(6, 182, 212, 0.1)'
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 12px 40px rgba(6, 182, 212, 0.2)',
                    borderColor: 'rgba(6, 182, 212, 0.5)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="text-xs text-casino-gold mb-1">{market.category}</div>
                      <h4 className="text-white font-semibold text-sm leading-tight pr-4">
                        {market.question}
                      </h4>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      market.trend === 'up' ? 'bg-casino-green' : 
                      market.trend === 'down' ? 'bg-casino-red' : 'bg-casino-gold'
                    }`} />
                  </div>

                  {/* Betting Options */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-casino-green/20 border border-casino-green/30 text-center">
                      <div className="text-xs text-[#A6B0BF] mb-1">YES</div>
                      <div className="text-casino-green font-bold text-lg">{market.yesPrice}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-casino-red/20 border border-casino-red/30 text-center">
                      <div className="text-xs text-[#A6B0BF] mb-1">NO</div>
                      <div className="text-casino-red font-bold text-lg">{market.noPrice}</div>
                    </div>
                  </div>

                  {/* Market Stats */}
                  <div className="flex justify-between text-xs text-[#A6B0BF]">
                    <div>Volume: <span className="text-white">{market.volume}</span></div>
                    <div>Traders: <span className="text-white">{market.participants}</span></div>
                    <div>Ends: <span className="text-white">{market.timeLeft}</span></div>
                  </div>
                </motion.div>
              ))}
            </div>


          </motion.div>
        </div>
      </section>

      {/* JUSTWYNN Flywheel Section */}
      <section id="flywheel" className="relative py-20 mt-16">
        <CasinoBackground variant="section" opacity={0.08} />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-display-lg mb-6" 
              style={{ 
                fontFamily: 'var(--font-space-grotesk)',
                background: 'linear-gradient(135deg, #00E28A 0%, #06B6D4 25%, #F59E0B 50%, #DC2626 75%, #A855F7 100%)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 30px rgba(0, 226, 138, 0.5))'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              The JUSTWYNN Flywheel
            </motion.h2>
            <p className="text-lg text-[#A6B0BF] max-w-4xl mx-auto leading-relaxed">
              Every component of our ecosystem feeds into the next, creating a self-reinforcing cycle that grows stronger with each interaction.
            </p>
          </motion.div>

          {/* Flywheel Diagram */}
          <motion.div
            className="max-w-6xl mx-auto mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Flywheel Steps */}
              {/* Flywheel Grid - All Devices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 relative">
                {[
                  {
                    step: "1",
                    title: "Token Launches",
                    description: "Users launch tokens with small fees that fund The House",
                    icon: "🚀",
                    color: "#00E28A",
                    position: "top-left"
                  },
                  {
                    step: "2", 
                    title: "Trading Activity",
                    description: "0.9% trading fees split between liquidity, operations, and The House",
                    icon: "💱",
                    color: "#06B6D4",
                    position: "top-right"
                  },
                  {
                    step: "3",
                    title: "Tier Progression",
                    description: "Tokens advance through tiers, paying progression fees to The House",
                    icon: "⬆️",
                    color: "#F59E0B",
                    position: "middle-right"
                  },
                  {
                    step: "4",
                    title: "Milestone Games",
                    description: "Royal Flush tokens unlock games, generating more activity and fees",
                    icon: "🎯",
                    color: "#DC2626",
                    position: "bottom-right"
                  },
                  {
                    step: "5",
                    title: "Prediction Markets",
                    description: "All prediction market revenue flows to $WYNN token holders",
                    icon: "🔮",
                    color: "#A855F7",
                    position: "bottom-left"
                  },
                  {
                    step: "6",
                    title: "The House Grows",
                    description: "Larger House enables bigger rewards, attracting more users and launches",
                    icon: "🏛️",
                    color: "#EF4444",
                    position: "middle-left"
                  }
                ].map((item, index) => (
                  <div key={index}>
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1 + 0.4
                      }}
                      viewport={{ once: true }}
                    >
                    <div 
                      className="p-6 rounded-2xl relative overflow-hidden backdrop-blur-md border-2 transition-all duration-500 h-full min-h-[200px] flex flex-col"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}15 0%, ${item.color}05 100%)`,
                        borderColor: `${item.color}40`,
                        boxShadow: `0 20px 60px ${item.color}20, 0 0 40px ${item.color}15`
                      }}
                    >
                      {/* Step Number */}
                      <div 
                        className="absolute top-2 left-2 sm:-top-3 sm:-left-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm z-10"
                        style={{
                          background: `linear-gradient(135deg, ${item.color}, ${item.color}CC)`,
                          boxShadow: `0 0 20px ${item.color}60`
                        }}
                      >
                        {item.step}
                      </div>



                      {/* Animated border glow */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          background: `linear-gradient(45deg, transparent, ${item.color}30, transparent)`,
                          filter: 'blur(1px)'
                        }}
                        animate={{
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 12 + index * 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      
                      {/* Content */}
                      <div className="relative z-10 flex flex-col h-full">
                        {/* Icon */}
                        <div className="flex items-center justify-center mb-4">
                          <div 
                            className="w-16 h-16 rounded-full flex items-center justify-center text-3xl relative"
                            style={{
                              background: `radial-gradient(circle at 30% 30%, ${item.color}, ${item.color}CC)`,
                              boxShadow: `0 0 40px ${item.color}80, inset 0 4px 8px rgba(255, 255, 255, 0.2)`
                            }}
                          >
                            {item.icon}
                          </div>
                        </div>
                        
                        <h3 
                          className="text-xl font-bold mb-3 text-center"
                          style={{ 
                            fontFamily: 'var(--font-space-grotesk)',
                            color: item.color,
                            textShadow: `0 0 20px ${item.color}60, 0 0 40px ${item.color}30`
                          }}
                        >
                          {item.title}
                        </h3>
                        
                        <p className="text-[#A6B0BF] leading-relaxed text-center text-sm flex-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    </motion.div>

                    {/* Mobile-only arrow underneath each card (except the last) */}
                    {index < 5 && (
                      <div className="sm:hidden flex justify-center my-6">
                        <motion.div
                          animate={{ y: [0, 4, 0] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut", 
                            delay: index * 0.3 
                          }}
                        >
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path 
                              d="M12 5v14M5 12l7 7 7-7" 
                              stroke="rgba(0, 226, 138, 0.9)" 
                              strokeWidth="3" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile-only final cycle arrow */}
                <div className="sm:hidden flex justify-center my-6">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path 
                        d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" 
                        stroke="rgba(0, 226, 138, 0.9)" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      <path 
                        d="M21 3v5h-5" 
                        stroke="rgba(0, 226, 138, 0.9)" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Arrows between cards */}
                {/* Arrows - Tablets and Desktop Only */}
                <div className="hidden sm:block lg:block">
                  {/* Arrow 1 -> 2 (between first and second card in top row) */}
                  <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" style={{ marginLeft: '-16.66%' }}>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                        <path 
                          d="M5 12h14M12 5l7 7-7 7" 
                          stroke="rgba(0, 226, 138, 0.9)" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Arrow 2 -> 3 (between second and third card in top row) */}
                  <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" style={{ marginLeft: '16.66%' }}>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    >
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                        <path 
                          d="M5 12h14M12 5l7 7-7 7" 
                          stroke="rgba(0, 226, 138, 0.9)" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Arrow 3 -> 4 (down from third card to bottom right) */}
                  <div className="absolute top-[45%] transform -translate-x-1/2 -translate-y-1/2 z-30" style={{ right: '16.66%' }}>
                    <motion.div
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    >
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                        <path 
                          d="M12 5v14M5 12l7 7 7-7" 
                          stroke="rgba(0, 226, 138, 0.9)" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Arrow 4 -> 5 (left between bottom right and bottom middle) */}
                  <div className="absolute top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" style={{ marginLeft: '16.66%' }}>
                    <motion.div
                      animate={{ x: [0, -4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                    >
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                        <path 
                          d="M19 12H5M12 19l-7-7 7-7" 
                          stroke="rgba(0, 226, 138, 0.9)" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Arrow 5 -> 6 (left between bottom middle and bottom left) */}
                  <div className="absolute top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" style={{ marginLeft: '-16.66%' }}>
                    <motion.div
                      animate={{ x: [0, -4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                    >
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                        <path 
                          d="M19 12H5M12 19l-7-7 7-7" 
                          stroke="rgba(0, 226, 138, 0.9)" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Arrow 6 -> 1 (up from bottom left back to top left) */}
                  <div className="absolute top-[45%] transform -translate-x-1/2 -translate-y-1/2 z-30" style={{ left: '16.66%' }}>
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    >
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                        <path 
                          d="M12 19V5M19 12l-7-7-7 7" 
                          stroke="rgba(0, 226, 138, 0.9)" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>


            </div>
          </div>
          </motion.div>

          {/* Flywheel Benefits */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-display-md text-casino-gold mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Flywheel Benefits
              </h3>
              <p className="text-[#A6B0BF] max-w-3xl mx-auto">
                Each cycle strengthens the entire ecosystem, creating exponential growth and value for all participants
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Compounding Growth",
                  description: "More launches → More fees → Bigger House → Better rewards → More launches",
                  icon: "📈",
                  color: "#00E28A"
                },
                {
                  title: "Network Effects", 
                  description: "Each new user increases the value and attractiveness for all other users",
                  icon: "🌐",
                  color: "#06B6D4"
                },
                {
                  title: "Sustainable Revenue",
                  description: "Multiple revenue streams ensure The House grows regardless of market conditions",
                  icon: "♻️",
                  color: "#F59E0B"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl text-center"
                  style={{
                    background: `linear-gradient(135deg, ${benefit.color}15 0%, ${benefit.color}05 100%)`,
                    border: `1px solid ${benefit.color}30`,
                    boxShadow: `0 8px 32px ${benefit.color}10`
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 12px 40px ${benefit.color}20`,
                    borderColor: `${benefit.color}50`
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h4 
                    className="text-lg font-bold mb-3"
                    style={{ 
                      color: benefit.color,
                      fontFamily: 'var(--font-space-grotesk)'
                    }}
                  >
                    {benefit.title}
                  </h4>
                  <p className="text-[#A6B0BF] text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The House Cup Section */}
      <section id="the-house-cup" className="relative py-20 mt-16">
        <CasinoBackground variant="section" opacity={0.08} />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-lg text-casino-gold mb-12" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              The House Cup — Weekly Community Rewards
            </h2>
            
            {/* Neon Bullet Points */}
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { 
                    icon: "📊", 
                    title: "Community Competition", 
                    description: "Weekly contests based on volume, liquidity health, holder growth, and social traction"
                  },
                  { 
                    icon: "🏆", 
                    title: "Weekly Rewards", 
                    description: "The strongest community&apos;s holders receive reward pools directly from The House"
                  },
                  { 
                    icon: "📅", 
                    title: "Monthly Seasons", 
                    description: "Extended competition periods that build long-term excitement and engagement"
                  },
                  { 
                    icon: "💪", 
                    title: "Community Strength", 
                    description: "Rewards based on genuine traction, not just hype or market cap alone"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-xl relative group"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 179, 102, 0.1) 0%, rgba(0, 179, 102, 0.05) 100%)',
                      border: '1px solid rgba(0, 179, 102, 0.3)',
                      boxShadow: '0 8px 32px rgba(0, 179, 102, 0.1)'
                    }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 12px 40px rgba(0, 179, 102, 0.2)',
                      borderColor: 'rgba(0, 179, 102, 0.5)'
                    }}
                  >
                    {/* Neon Dot */}
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0 relative"
                      style={{
                        background: 'radial-gradient(circle at 30% 30%, #00B366, #00A05C)',
                        boxShadow: '0 0 20px rgba(0, 179, 102, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      {item.icon}
                      {/* Pulsing ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-casino-green"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.8, 0.3, 0.8]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                    
                    <div className="flex-1 text-left">
                      <h3 
                        className="text-xl font-bold mb-2 text-casino-green"
                        style={{ 
                          fontFamily: 'var(--font-space-grotesk)',
                          textShadow: '0 0 10px rgba(0, 179, 102, 0.5)'
                        }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[#A6B0BF] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hall of Fame Section */}
      <section id="hall-of-fame" className="relative py-20 mt-16">
        <CasinoBackground variant="section" opacity={0.10} />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-lg text-casino-gold mb-12" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Token Tier System
            </h2>
            
            {/* Neon Bullet Points */}
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {[
                  { 
                    icon: "🃏", 
                    title: "Opening Hand", 
                    description: "Newly created tokens start here. The beginning of every token's journey on JUSTWYNN."
                  },
                  { 
                    icon: "💰", 
                    title: "Rising Pot", 
                    description: "Tokens with market caps below $100K. Building momentum and community support."
                  },
                  { 
                    icon: "👑", 
                    title: "Royal Flush", 
                    description: "Elite tokens above $100K market cap. Featured placement and recognition across JUSTWYNN."
                  },
                  { 
                    icon: "🎰", 
                    title: "Games Unlock at $1M+", 
                    description: "Only Royal Flush tokens that reach and sustain $1M+ market cap unlock milestone games and rewards."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-xl relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    style={{
                      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      boxShadow: '0 8px 32px rgba(245, 158, 11, 0.1)'
                    }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 12px 40px rgba(245, 158, 11, 0.2)',
                      borderColor: 'rgba(245, 158, 11, 0.5)'
                    }}
                  >
                    {/* Neon Dot */}
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0 relative"
                      style={{
                        background: 'radial-gradient(circle at 30% 30%, #F59E0B, #D97706)',
                        boxShadow: '0 0 20px rgba(245, 158, 11, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      {item.icon}
                      {/* Pulsing ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2"
                        style={{ borderColor: '#F59E0B' }}
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.8, 0.2, 0.8]
                        }}
                        transition={{ 
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                      />
                    </div>
                    
                    <div className="flex-1 text-left">
                      <h3 
                        className="text-xl font-bold mb-2"
                        style={{ 
                          fontFamily: 'var(--font-space-grotesk)',
                          color: '#F59E0B',
                          textShadow: '0 0 10px rgba(245, 158, 11, 0.5)'
                        }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[#A6B0BF] leading-relaxed">
                        {item.description?.includes('JUSTWYNN') ? (
                          <span dangerouslySetInnerHTML={{
                            __html: item.description.replace('JUSTWYNN', '<span style="color: #00B366; text-shadow: 0 0 10px rgba(0, 179, 102, 0.5);">JUSTWYNN</span>')
                          }} />
                        ) : (
                          item.description
                        )}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Streak Rewards Section */}
      <section className="relative py-20 mt-16">
        <CasinoBackground variant="section" opacity={0.08} />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-lg text-casino-gold mb-12" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Streaks that Matter
            </h2>
            
            {/* Neon Bullet Points */}
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { 
                    icon: "🎯", 
                    title: "Loyalty Ladder", 
                    description: "Back multiple Royal Flush tokens in a row to climb through increasing reward tiers"
                  },
                  { 
                    icon: "💸", 
                    title: "Reduced Fees", 
                    description: "Lower platform fees as your streak grows, making future launches more profitable"
                  },
                  { 
                    icon: "🎰", 
                    title: "Extra Jackpot Entries", 
                    description: "Bonus entries into milestone games and weekly House Cup competitions"
                  },
                  { 
                    icon: "🏅", 
                    title: "Exclusive NFT Badges", 
                    description: "Permanent recognition badges that showcase your streak achievements across launches"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-xl relative group"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      boxShadow: '0 8px 32px rgba(168, 85, 247, 0.1)'
                    }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 12px 40px rgba(168, 85, 247, 0.2)',
                      borderColor: 'rgba(168, 85, 247, 0.5)'
                    }}
                  >
                    {/* Neon Dot */}
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0 relative"
                      style={{
                        background: 'radial-gradient(circle at 30% 30%, #A855F7, #9333EA)',
                        boxShadow: '0 0 20px rgba(168, 85, 247, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      {item.icon}
                      {/* Pulsing ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2"
                        style={{ borderColor: '#A855F7' }}
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.8, 0.3, 0.8]
                        }}
                        transition={{ 
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3
                        }}
                      />
                    </div>
                    
                    <div className="flex-1 text-left">
                      <h3 
                        className="text-xl font-bold mb-2"
                        style={{ 
                          fontFamily: 'var(--font-space-grotesk)',
                          color: '#A855F7',
                          textShadow: '0 0 10px rgba(168, 85, 247, 0.5)'
                        }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[#A6B0BF] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-20 mt-16">
        <CasinoBackground variant="section" opacity={0.10} />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-lg text-casino-gold mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "How does The House grow?",
                answer: "From trading fee splits (0.3% of 0.9% total) and tier progression fees. We fund games from inflows/yield—not principal—so The House compounds over time."
              },
              {
                question: "What can I win in Milestone Games?",
                answer: "Token supply from Royal Flush projects that reach $1M+, SOL prizes from The House, and JUSTWYNN tokens—all distributed with verifiable randomness."
              },
              {
                question: "How do tokens progress through tiers?",
                answer: "Tokens start as Opening Hand (newly created), move to Rising Pot (below $100K), then Royal Flush (above $100K). Games only unlock at $1M+ market cap."
              },
              {
                question: "Do you guarantee safety or refunds?",
                answer: "We don't guarantee outcomes. Our tier system rewards sustained traction and loyal holders, while The House grows regardless of market conditions."
              }
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>



      {/* Waitlist Form Modal */}
      <SimpleWaitlistForm 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </div>
  );
}

const InteractiveSlotMachine = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);
  const [showJackpot, setShowJackpot] = useState(false);

  const gameResults = [
    { type: 'icon' as const, icon: '🎫', text: 'Lotteries', description: 'Random draws with verifiable fairness (VRF). Prizes include token supply from the milestone project, SOL prizes from The House, and Justwynn token rewards.' },
    { type: 'icon' as const, icon: '🎰', text: 'Slots', description: 'Spin to win token supply, SOL, or bonus perks. Designed with a house-edge so The House always grows while rewarding players.' },
    { type: 'icon' as const, icon: '🎡', text: 'Roulette', description: 'A casino-style experience for loyal holders. Eligibility and odds scale with holding duration to discourage dumping.' }
  ];

  const handleSpin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setShowJackpot(false);
    
    // If already spun, reset to show reels again
    if (hasSpun) {
      setHasSpun(false);
    }
    
    // Spin for 3 seconds
    setTimeout(() => {
      setIsSpinning(false);
      setHasSpun(true);
      setShowJackpot(true);
    }, 3000);
  };

  return (
    <PremiumSlotMachine
      results={gameResults}
      isSpinning={isSpinning}
      onSpin={handleSpin}
      showJackpot={showJackpot}
      showingContent={hasSpun}
      className="w-full"
    />
  );
};

const AutoRevealCard = ({ suit, rank, title, description, status, delay }: {
  suit: '♠' | '♥' | '♦' | '♣';
  rank: 'A' | 'K' | 'Q' | 'J' | '10';
  title: string;
  description: string;
  status: 'active' | 'upcoming' | 'future';
  delay: number;
}) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ 
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: delay
        }
      }}
      onViewportEnter={() => {
        // Auto-reveal after a delay when in viewport
        setTimeout(() => setIsRevealed(true), delay * 1000 + 500);
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <PremiumPlayingCard
        suit={suit}
        rank={rank}
        title={title}
        description={description}
        status={status}
        size="large"
        isRevealed={isRevealed}
      />
    </motion.div>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="panel-glass rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-panel/40 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-casino-gold font-semibold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-casino-gold"
        >
          ▼
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-4">
          <p className="text-[#A6B0BF]">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};