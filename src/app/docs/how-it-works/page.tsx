"use client";

import React from 'react';
import DocPageLayout from '@/components/docs/DocPageLayout';

export default function HowItWorksPage() {
  return (
    <DocPageLayout
      title="How does JUSTWYNN work?"
      description="Understanding the JUSTWYNN ecosystem, The House, and how everything connects together."
      prevPage={{ title: "What is JUSTWYNN?", href: "/docs/what-is-justwynn" }}
      nextPage={{ title: "Launch a Token", href: "/docs/launch-token" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">The JUSTWYNN Ecosystem</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            JUSTWYNN operates as a comprehensive ecosystem where token launches, community building, and rewards are interconnected through The House—our community-powered bankroll system.
          </p>
          
          <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-green/20 mb-6">
            <h3 className="text-xl font-semibold text-casino-green mb-4">🎯 Core Flow</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-casino-green/20 flex items-center justify-center text-casino-green font-bold">1</div>
                <span className="text-[#E9EEF5]">Launch → Pay entry fee to The House</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-casino-gold/20 flex items-center justify-center text-casino-gold font-bold">2</div>
                <span className="text-[#E9EEF5]">Trade → 1% trading fee split feeds The House</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-red-400/20 flex items-center justify-center text-red-400 font-bold">3</div>
                <span className="text-[#E9EEF5]">Graduate → Migration fee grows The House</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-400/20 flex items-center justify-center text-purple-400 font-bold">4</div>
                <span className="text-[#E9EEF5]">Reward → Games and competitions funded by The House</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">The House: Community Bankroll</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            The House is the beating heart of JUSTWYNN—a constantly growing pool that powers all rewards, games, and competitions. It&apos;s funded by three main sources:
          </p>
          
          <div className="grid gap-6 mb-6">
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-green/20">
              <h3 className="text-xl font-semibold text-casino-green mb-3">💰 Launch Fees</h3>
              <p className="text-[#E9EEF5]">
                Every token launch requires a small entry fee that goes directly to The House. This keeps launches accessible while ensuring sustainable growth.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-gold/20">
              <h3 className="text-xl font-semibold text-casino-gold mb-3">📊 Trading Fees</h3>
              <p className="text-[#E9EEF5]">
                A 1% trading fee is split between platform operations and The House, ensuring every trade contributes to the ecosystem&apos;s growth.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-red-400/20">
              <h3 className="text-xl font-semibold text-red-400 mb-3">🎓 Graduation Fees</h3>
              <p className="text-[#E9EEF5]">
                When successful tokens migrate to main liquidity, they pay a flat graduation fee—a predictable contribution to The House.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Milestone System</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            Tokens unlock rewards and games by hitting real-world milestones that demonstrate genuine community support and market traction.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-[#1a1d23] border-l-4 border-casino-green">
              <h4 className="font-semibold text-casino-green mb-2">Market Cap Milestones</h4>
              <p className="text-[#A6B0BF] text-sm">$100K, $500K, $1M, $5M+ unlock different game tiers and reward pools</p>
            </div>
            <div className="p-4 rounded-lg bg-[#1a1d23] border-l-4 border-casino-gold">
              <h4 className="font-semibold text-casino-gold mb-2">Holder Count Milestones</h4>
              <p className="text-[#A6B0BF] text-sm">100, 500, 1000, 5000+ holders unlock community competitions and rewards</p>
            </div>
            <div className="p-4 rounded-lg bg-[#1a1d23] border-l-4 border-red-400">
              <h4 className="font-semibold text-red-400 mb-2">Sustained Performance</h4>
              <p className="text-[#A6B0BF] text-sm">Maintaining milestones over time unlocks Hall of Fame graduation</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Games & Competitions</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            When tokens hit milestones, their holder communities gain access to games and competitions funded by The House. All games use verifiable randomness and are designed with sustainable house edges.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-green/20 text-center">
              <div className="text-4xl mb-4">🎰</div>
              <h3 className="text-lg font-semibold text-casino-green mb-2">Slots</h3>
              <p className="text-[#A6B0BF] text-sm">Spin to win token supply, SOL, or bonus perks with fair odds</p>
            </div>
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-gold/20 text-center">
              <div className="text-4xl mb-4">🎲</div>
              <h3 className="text-lg font-semibold text-casino-gold mb-2">Lotteries</h3>
              <p className="text-[#A6B0BF] text-sm">Random draws with verifiable fairness using Chainlink VRF</p>
            </div>
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-red-400/20 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-red-400 mb-2">Roulette</h3>
              <p className="text-[#A6B0BF] text-sm">Casino-style experience with holding duration bonuses</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Sustainable Economics</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            JUSTWYNN is designed for long-term sustainability. We only fund games and rewards from The House&apos;s inflows and yield—never touching the principal. This means The House compounds over time, creating a virtuous cycle of growth.
          </p>
          
          <div className="bg-gradient-to-r from-casino-green/10 to-casino-gold/10 rounded-xl p-6 border border-casino-green/20">
            <h3 className="text-xl font-semibold text-white mb-4">💡 Key Principle</h3>
            <p className="text-[#E9EEF5] leading-relaxed">
              <strong>The House always grows.</strong> Even when paying out rewards and funding games, our economic model ensures The House continues to compound, benefiting all future participants in the ecosystem.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Community Alignment</h2>
          <p className="text-[#E9EEF5] leading-relaxed">
            Every participant in the JUSTWYNN ecosystem benefits from platform growth. Token creators get access to funding and community building tools. Holders get games, rewards, and potential appreciation. The platform gets sustainable revenue. The House gets bigger, powering even better rewards for everyone.
          </p>
        </section>
      </div>
    </DocPageLayout>
  );
}
