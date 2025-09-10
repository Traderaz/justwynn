"use client";

import React from 'react';
import DocPageLayout from '@/components/docs/DocPageLayout';

export default function FeesStructurePage() {
  return (
    <DocPageLayout
      title="Fees Structure"
      description="Understanding our free launch model, trading fees, tier progression fees, and how they fund The House and ecosystem rewards."
      prevPage={{ title: "Smart Contracts", href: "/docs/smart-contracts" }}
      nextPage={{ title: "Tokenomics", href: "/docs/tokenomics" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Fee Overview</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            JUSTWYNN uses a simple, transparent fee structure designed to keep launches accessible while funding sustainable ecosystem growth.
          </p>
          
          <div className="grid gap-6">
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-green/20">
              <h3 className="text-xl font-semibold text-casino-green mb-3">🚀 Launch Fee: FREE</h3>
              <p className="text-[#E9EEF5] mb-4">
                No upfront launch fee - making token creation accessible to everyone. Platform sustainability comes from trading volume.
              </p>
              <div className="bg-casino-green/5 rounded-lg p-4 border border-casino-green/10">
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">Fee Amount:</span>
                    <span className="text-casino-green">FREE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">Barrier to Entry:</span>
                    <span className="text-casino-green">Zero</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-gold/20">
              <h3 className="text-xl font-semibold text-casino-gold mb-3">📊 Trading Fee: 1%</h3>
              <p className="text-[#E9EEF5] mb-4">
                Competitive trading fee focused on liquidity protection and vault growth.
              </p>
              <div className="bg-casino-gold/5 rounded-lg p-4 border border-casino-gold/10">
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">Total Fee:</span>
                    <span className="text-casino-gold">1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">To Liquidity Pool:</span>
                    <span className="text-casino-gold">0.25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">To The House:</span>
                    <span className="text-casino-gold">0.75%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-red-400/20">
              <h3 className="text-xl font-semibold text-red-400 mb-3">🎰 Tier Progression Fees: 0.01 SOL</h3>
              <p className="text-[#E9EEF5] mb-4">
                Fees paid when tokens advance through our three-tier system: Opening Hand → Rising Pot → Royal Flush.
              </p>
              <div className="bg-red-400/5 rounded-lg p-4 border border-red-400/10">
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">Opening Hand → Rising Pot:</span>
                    <span className="text-red-400">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">Rising Pot → Royal Flush ($100K):</span>
                    <span className="text-red-400">0.01 SOL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Three-Tier System</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            JUSTWYNN uses a poker-themed tier system to categorize tokens based on market performance. Each tier has different visibility and benefits.
          </p>
          
          <div className="grid gap-4">
            <div className="p-4 rounded-lg bg-casino-green/10 border border-casino-green/20">
              <h4 className="font-semibold text-casino-green mb-2">🃏 Opening Hand</h4>
              <p className="text-[#E9EEF5] text-sm mb-2">
                All newly launched tokens start here with basic platform features.
              </p>
              <div className="text-xs text-[#A6B0BF]">
                Requirements: Newly created • Fees: None
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-casino-gold/10 border border-casino-gold/20">
              <h4 className="font-semibold text-casino-gold mb-2">💰 Rising Pot</h4>
              <p className="text-[#E9EEF5] text-sm mb-2">
                Tokens below $100K market cap with enhanced visibility and community features.
              </p>
              <div className="text-xs text-[#A6B0BF]">
                Requirements: Any market cap • Fees: No progression fee
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-red-400/10 border border-red-400/20">
              <h4 className="font-semibold text-red-400 mb-2">👑 Royal Flush</h4>
              <p className="text-[#E9EEF5] text-sm mb-2">
                Elite tokens above $100K market cap with premium features. Games unlock at $100K+.
              </p>
              <div className="text-xs text-[#A6B0BF]">
                Requirements: $100K+ market cap • Fees: 0.01 SOL progression fee
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Platform Benefits</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            JUSTWYNN provides a transparent fee structure with unique features designed for sustainable ecosystem growth.
          </p>
          
          <div className="grid gap-6">
            <div className="bg-gradient-to-r from-casino-green/10 to-casino-gold/10 rounded-xl p-6 border border-casino-gold/20">
              <h3 className="text-xl font-semibold text-white mb-4">🏆 JUSTWYNN Fee Structure</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-casino-green/5 rounded-lg p-4 border border-casino-green/10">
                    <h4 className="text-casino-green font-semibold mb-2">🚀 Launch Benefits</h4>
                    <ul className="text-sm text-[#E9EEF5] space-y-1">
                      <li>• Completely FREE token launches</li>
                      <li>• No upfront costs or barriers</li>
                      <li>• Immediate platform access</li>
                    </ul>
                  </div>
                  <div className="bg-casino-gold/5 rounded-lg p-4 border border-casino-gold/10">
                    <h4 className="text-casino-gold font-semibold mb-2">📊 Trading Structure</h4>
                    <ul className="text-sm text-[#E9EEF5] space-y-1">
                      <li>• 1% competitive trading fee</li>
                      <li>• 0.25% supports liquidity</li>
                      <li>• 0.75% grows The House vault</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-red-400/5 rounded-lg p-4 border border-red-400/10">
                    <h4 className="text-red-400 font-semibold mb-2">🎰 Progression Fees</h4>
                    <ul className="text-sm text-[#E9EEF5] space-y-1">
                      <li>• Only 0.01 SOL to reach Royal Flush</li>
                      <li>• Transparent tier advancement</li>
                      <li>• Unlocks premium features</li>
                    </ul>
                  </div>
                  <div className="bg-casino-blue/5 rounded-lg p-4 border border-casino-blue/10">
                    <h4 className="text-casino-blue font-semibold mb-2">🏛️ Community Benefits</h4>
                    <ul className="text-sm text-[#E9EEF5] space-y-1">
                      <li>• 0.75% of fees fund community rewards</li>
                      <li>• Games and competitions</li>
                      <li>• Sustainable ecosystem growth</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-casino-green/10 to-red-400/10 rounded-xl p-6 border border-casino-green/20">
              <h3 className="text-xl font-semibold text-white mb-4">🎯 JUSTWYNN Unique Advantages</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">Trading Fee:</span>
                    <span className="text-casino-gold font-semibold">1% total</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">Community Vault:</span>
                    <span className="text-casino-green font-semibold">0.25% to LP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">The House Growth:</span>
                    <span className="text-casino-gold font-semibold">0.75% dedicated</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">Games & Rewards:</span>
                    <span className="text-red-400 font-semibold">Exclusive feature</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">Tier System:</span>
                    <span className="text-casino-gold font-semibold">Unique progression</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">The House Vault:</span>
                    <span className="text-casino-green font-semibold">Community rewards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocPageLayout>
  );
}
