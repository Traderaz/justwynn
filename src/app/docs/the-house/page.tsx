"use client";

import React from 'react';
import DocPageLayout from '@/components/docs/DocPageLayout';

export default function TheHousePage() {
  return (
    <DocPageLayout
      title="What is The House?"
      description="Understanding JUSTWYNN&apos;s community-powered bankroll system that funds all rewards, games, and competitions."
      prevPage={{ title: "Launch a Token", href: "/docs/launch-token" }}
      nextPage={{ title: "Milestone Games", href: "/docs/milestone-games" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">The Heart of JUSTWYNN</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            The House is JUSTWYNN&apos;s constantly growing, community-powered bankroll. It&apos;s the financial engine that powers all rewards, games, competitions, and ecosystem benefits. Unlike traditional platforms that extract value, The House creates a sustainable model where everyone benefits from platform growth.
          </p>
          
          <div className="bg-gradient-to-r from-casino-green/10 to-casino-gold/10 rounded-xl p-6 border border-casino-green/20">
            <h3 className="text-xl font-semibold text-white mb-4">🏛️ Core Concept</h3>
            <p className="text-[#E9EEF5] leading-relaxed">
              <strong>The House is owned by the community.</strong> Every participant in the JUSTWYNN ecosystem contributes to and benefits from The House&apos;s growth. It&apos;s not a company treasury—it&apos;s a shared resource that compounds over time to benefit all users.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">How The House Grows</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            The House receives funding from three primary sources, ensuring steady and predictable growth:
          </p>
          
          <div className="grid gap-6">
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-green/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-casino-green/20 flex items-center justify-center text-2xl">🚀</div>
                <div>
                  <h3 className="text-xl font-semibold text-casino-green">Launch Fees</h3>
                  <p className="text-[#A6B0BF] text-sm">Low barrier entry for creators</p>
                </div>
              </div>
              <p className="text-[#E9EEF5] mb-4">
                Every token launch requires a small entry fee (currently 0.1 SOL) that goes directly to The House. This keeps launches accessible while ensuring sustainable ecosystem funding.
              </p>
              <div className="bg-casino-green/5 rounded-lg p-4 border border-casino-green/10">
                <div className="flex justify-between items-center">
                  <span className="text-[#A6B0BF]">Current Launch Fee:</span>
                  <span className="text-casino-green font-semibold">0.1 SOL</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-gold/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-casino-gold/20 flex items-center justify-center text-2xl">📊</div>
                <div>
                  <h3 className="text-xl font-semibold text-casino-gold">Trading Fees</h3>
                  <p className="text-[#A6B0BF] text-sm">Split between operations and The House</p>
                </div>
              </div>
              <p className="text-[#E9EEF5] mb-4">
                A 1% trading fee is collected on all token trades. This fee is split between platform operations and The House, ensuring every trade contributes to ecosystem growth.
              </p>
              <div className="bg-casino-gold/5 rounded-lg p-4 border border-casino-gold/10">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">Total Fee:</span>
                    <span className="text-casino-gold">1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">To The House:</span>
                    <span className="text-casino-gold">0.5%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-red-400/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-400/20 flex items-center justify-center text-2xl">🎓</div>
                <div>
                  <h3 className="text-xl font-semibold text-red-400">Graduation Fees</h3>
                  <p className="text-[#A6B0BF] text-sm">Predictable growth on milestone achievement</p>
                </div>
              </div>
              <p className="text-[#E9EEF5] mb-4">
                When successful tokens graduate to main liquidity (moving beyond JUSTWYNN&apos;s initial bonding curve), they pay a flat migration fee to The House.
              </p>
              <div className="bg-red-400/5 rounded-lg p-4 border border-red-400/10">
                <div className="flex justify-between items-center">
                  <span className="text-[#A6B0BF]">Graduation Fee:</span>
                  <span className="text-red-400 font-semibold">Variable (based on market cap)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">How The House Pays Out</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            The House funds rewards and games using a sustainable model that ensures long-term growth. We only use inflows and yield—never touching the principal balance.
          </p>
          
          <div className="grid gap-6">
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-green/20">
              <h3 className="text-xl font-semibold text-casino-green mb-3">🎰 Milestone Games</h3>
              <p className="text-[#E9EEF5] mb-4">
                When tokens hit major milestones, The House funds slots, lotteries, and roulette games for their holder communities.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#A6B0BF]">Prize Pool Source:</span>
                  <span className="text-casino-green">House inflows</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A6B0BF]">House Edge:</span>
                  <span className="text-casino-green">5-10%</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-gold/20">
              <h3 className="text-xl font-semibold text-casino-gold mb-3">🏆 Weekly Competitions</h3>
              <p className="text-[#E9EEF5] mb-4">
                The House Cup and other weekly competitions distribute rewards to the strongest communities based on various metrics.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#A6B0BF]">Weekly Pool:</span>
                  <span className="text-casino-gold">~2% of weekly inflows</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A6B0BF]">Distribution:</span>
                  <span className="text-casino-gold">Merit-based</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-red-400/20">
              <h3 className="text-xl font-semibold text-red-400 mb-3">💰 Jackpots & Special Events</h3>
              <p className="text-[#E9EEF5] mb-4">
                Large jackpots and special event prizes are funded from The House&apos;s accumulated reserves and yield generation.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#A6B0BF]">Funding Source:</span>
                  <span className="text-red-400">Yield + reserves</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A6B0BF]">Frequency:</span>
                  <span className="text-red-400">Event-based</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Sustainable Economics</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            The House operates on a simple but powerful principle: <strong>it only pays out from growth, never from principal.</strong> This ensures The House continues to compound over time, creating increasingly better rewards for all participants.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <h4 className="font-semibold text-green-400 mb-2">✅ Sustainable Practices</h4>
              <ul className="text-[#E9EEF5] text-sm space-y-1">
                <li>• Only use inflows and yield for payouts</li>
                <li>• Maintain growing principal balance</li>
                <li>• Reinvest portions of inflows for yield generation</li>
                <li>• Scale rewards with platform growth</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <h4 className="font-semibold text-red-400 mb-2">❌ What We Don&apos;t Do</h4>
              <ul className="text-[#E9EEF5] text-sm space-y-1">
                <li>• Never touch The House principal for payouts</li>
                <li>• No unsustainable reward promises</li>
                <li>• No Ponzi-like mechanics that require constant growth</li>
                <li>• No extractive practices that drain The House</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Transparency & Governance</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            The House operates with full transparency. All inflows, outflows, and balance information is publicly viewable on-chain.
          </p>
          
          <div className="grid gap-6">
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-green/20">
              <h3 className="text-xl font-semibold text-casino-green mb-3">📊 Public Metrics</h3>
              <ul className="text-[#E9EEF5] space-y-2">
                <li>• Real-time House balance</li>
                <li>• Daily inflow/outflow tracking</li>
                <li>• Historical payout records</li>
                <li>• Yield generation performance</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-gold/20">
              <h3 className="text-xl font-semibold text-casino-gold mb-3">🗳️ Future Governance</h3>
              <ul className="text-[#E9EEF5] space-y-2">
                <li>• JUSTWYNN token holders will govern The House</li>
                <li>• Vote on fee adjustments and payout structures</li>
                <li>• Propose new reward mechanisms</li>
                <li>• Community-driven evolution</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">The Compound Effect</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-4">
            As JUSTWYNN grows, The House grows. As The House grows, rewards get better. As rewards get better, more users join JUSTWYNN. This creates a virtuous cycle that benefits everyone in the ecosystem.
          </p>
          
          <div className="bg-gradient-to-r from-casino-green/10 to-casino-gold/10 rounded-xl p-6 border border-casino-green/20">
            <h3 className="text-xl font-semibold text-white mb-4">🚀 Growth Flywheel</h3>
            <p className="text-[#E9EEF5] leading-relaxed">
              More launches → Bigger House → Better rewards → More users → More launches. This self-reinforcing cycle ensures that early participants benefit from all future growth while new participants always have access to the best version of the platform.
            </p>
          </div>
        </section>
      </div>
    </DocPageLayout>
  );
}
