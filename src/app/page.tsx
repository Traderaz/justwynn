"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CasinoBackground } from "@/components/ui/casino-background";
import { PremiumSlotMachine } from "@/components/ui/premium-slot-machine";
import { PremiumPlayingCard } from "@/components/ui/premium-playing-card";

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

  return (
    <div className="min-h-screen bg-[#0B0D10]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Casino Background */}
        <CasinoBackground variant="hero" opacity={0.20} />

        {/* Main content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* JUSTWYNN Logo/Sign */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8"
              style={{ 
                fontFamily: 'var(--font-space-grotesk)'
              }}
            >
              <span 
                className="text-casino-gold"
                style={{ textShadow: '0 0 30px rgba(245, 158, 11, 0.4), 0 0 60px rgba(245, 158, 11, 0.2)' }}
              >
                JUST
              </span>
              <span 
                className="text-casino-green"
                style={{ textShadow: '0 0 30px rgba(0, 179, 102, 0.4), 0 0 60px rgba(0, 179, 102, 0.2)' }}
              >
                WYNN
              </span>
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
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#A6B0BF] mb-16 sm:mb-20 max-w-4xl mx-auto leading-relaxed px-4"
            style={{ fontFamily: 'var(--font-inter)' }}
            initial={{ opacity: 0, y: 8, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          >
            The gamified launchpad where every launch fuels The House—and every milestone becomes a community win.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 8, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          >
            <Button
              onClick={handleJoinClick}
              className="casino-green hover:opacity-90 text-white border border-casino-green h-14 px-10 rounded-2xl font-bold text-lg min-w-[200px] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              style={{ fontFamily: 'var(--font-inter)', boxShadow: '0 0 20px rgba(0, 179, 102, 0.3)' }}
            >
              Launch a Token
            </Button>
            <Button
              variant="outline"
              className="bg-transparent hover:bg-casino-gold/10 text-[#E9EEF5] border-2 border-casino-gold/30 hover:border-casino-gold h-14 px-10 rounded-2xl font-bold text-lg min-w-[200px] transition-all duration-200 hover:scale-105"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Read the Docs
            </Button>
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
                title: "Graduation System", 
                description: "Tokens that hit key milestones \"graduate\" into our Hall of Fame and unlock rewards.",
                icon: "🎓",
                color: "#F59E0B",
                gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.05) 100%)"
              },
              {
                title: "The House",
                description: "Every launch, trade, and graduation fuels The House—a pool that grows daily and powers rewards, games, and competitions.",
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
                description: "Back multiple graduates in a row to unlock reduced fees, extra jackpot entries, and exclusive NFT badges.",
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
              The House is our constantly growing, community-powered bankroll. It's funded by launch fees, trading volume (1% trading fee split internally), and a flat migration/graduation fee when projects move to main liquidity. We only fund games and rewards from inflows/yield—not principal—so The House compounds over time.
            </motion.p>
          </motion.div>

          {/* Ultra Premium Stat Blocks */}
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                title: "Low Launch Fee",
                subtitle: "Accessible entry for creators",
                icon: "🚀",
                color: "#00E28A",
                accentColor: "#00B366",
                stat: "~$5",
                description: "Minimal barrier to entry"
              },
              {
                title: "1% Trading Fee", 
                subtitle: "Split to ops + The House",
                icon: "💱",
                color: "#F59E0B",
                accentColor: "#D97706",
                stat: "0.5% + 0.5%",
                description: "Sustainable growth model"
              },
              {
                title: "Flat Migration Fee",
                subtitle: "Predictable growth on graduation",
                icon: "🎓",
                color: "#DC2626",
                accentColor: "#B91C1C",
                stat: "Fixed Rate",
                description: "Transparent progression"
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
              When a token hits major milestones—like $1M market cap or 1,000 holders—The House unlocks games for that community&apos;s holders.
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
              Hall of Fame
            </h2>
            
            {/* Neon Bullet Points */}
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {[
                  { 
                    icon: "🎖️", 
                    title: "Graduation Requirements", 
                    description: "Tokens must sustain strong performance metrics over time to earn Hall of Fame status"
                  },
                  { 
                    icon: "👑", 
                    title: "Ongoing Visibility", 
                    description: "Featured placement and recognition across the JUSTWYNN platform for graduated tokens"
                  },
                  { 
                    icon: "🎁", 
                    title: "Holder Perks", 
                    description: "Exclusive benefits and rewards for communities of Hall of Fame tokens"
                  },
                  { 
                    icon: "🏗️", 
                    title: "Beyond Launch Hype", 
                    description: "Recognition for projects that build real value and sustainable communities"
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
                    description: "Back multiple graduates in a row to climb through increasing reward tiers"
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
                answer: "From launch fees, trading fee splits, and a flat migration/graduation fee. We fund games from inflows/yield—not principal—so The House compounds."
              },
              {
                question: "What can I win in Milestone Games?",
                answer: "Token supply from the milestone project, SOL prizes, and Justwynn tokens—distributed with verifiable randomness."
              },
              {
                question: "Is there any allocation gating?",
                answer: "No. Anyone can buy however much supply they want; our rewards focus on milestone success and loyal holders."
              },
              {
                question: "Do you guarantee safety or refunds?",
                answer: "We don't guarantee outcomes. Our systems reward traction and loyalty, and The House is designed to grow regardless of market conditions."
              }
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="get-started" className="relative py-24 mt-20">
        <CasinoBackground variant="section" opacity={0.15} />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-lg text-casino-gold mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Ready to Launch?
            </h2>
            <p className="text-lg text-[#A6B0BF] mb-8">
              Create your token in minutes. Let the community decide who graduates. Let The House turn milestones into wins.
            </p>
            
            <div className="flex flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleJoinClick}
                className="casino-green hover:opacity-90 text-white border border-casino-green h-12 px-8 rounded-2xl font-semibold text-base min-w-[160px] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                style={{ fontFamily: 'var(--font-inter)', boxShadow: '0 0 20px rgba(0, 179, 102, 0.3)' }}
              >
                Launch a Token
              </Button>
              <Button
                variant="outline"
                className="bg-transparent hover:bg-casino-gold/10 text-[#E9EEF5] border border-casino-gold/30 hover:border-casino-gold h-12 px-8 rounded-2xl font-semibold text-base min-w-[160px] transition-all duration-200 hover:scale-105"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Read the Docs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
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