"use client";

import React from 'react';
import DocPageLayout from '@/components/docs/DocPageLayout';

export default function FeesStructurePage() {
  return (
    <DocPageLayout
      title="Fees Structure"
      description="Understanding launch fees, trading fees, tier progression fees, and how they fund The House and ecosystem rewards."
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
              <h3 className="text-xl font-semibold text-casino-gold mb-3">📊 Trading Fee: 0.9%</h3>
              <p className="text-[#E9EEF5] mb-4">
                Competitive trading fee focused on liquidity protection, sustainable operations, and vault growth.
              </p>
              <div className="bg-casino-gold/5 rounded-lg p-4 border border-casino-gold/10">
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">Total Fee:</span>
                    <span className="text-casino-gold">0.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">To Liquidity Pool:</span>
                    <span className="text-casino-gold">0.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">To Operations:</span>
                    <span className="text-casino-gold">0.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">To The House:</span>
                    <span className="text-casino-gold">0.3%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-red-400/20">
              <h3 className="text-xl font-semibold text-red-400 mb-3">🎰 Tier Progression Fees: Variable</h3>
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
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">Games Unlock ($1M+):</span>
                    <span className="text-red-400">0.02 SOL</span>
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
                Elite tokens above $100K market cap with premium features. Games unlock at $1M+.
              </p>
              <div className="text-xs text-[#A6B0BF]">
                Requirements: $100K+ market cap • Fees: 0.01 SOL progression fee
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Competitive Advantage</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            JUSTWYNN offers the most competitive fee structure in the market while providing unique features and sustainable growth.
          </p>
          
          <div className="grid gap-6">
            <div className="bg-gradient-to-r from-casino-green/10 to-casino-gold/10 rounded-xl p-6 border border-casino-gold/20">
              <h3 className="text-xl font-semibold text-white mb-4">🏆 Fee Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-casino-gold/20">
                      <th className="text-left py-2 text-[#A6B0BF]">Feature</th>
                      <th className="text-center py-2 text-casino-green">JUSTWYNN</th>
                      <th className="text-center py-2 text-[#A6B0BF]">Pump.fun</th>
                      <th className="text-center py-2 text-[#A6B0BF]">Heaven</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr>
                      <td className="py-2 text-[#A6B0BF]">Launch Fee</td>
                      <td className="text-center py-2 text-casino-green font-semibold">FREE</td>
                      <td className="text-center py-2 text-[#A6B0BF]">FREE</td>
                      <td className="text-center py-2 text-[#A6B0BF]">FREE</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-[#A6B0BF]">Trading Fee</td>
                      <td className="text-center py-2 text-casino-green font-semibold">0.9%</td>
                      <td className="text-center py-2 text-[#A6B0BF]">1.0%</td>
                      <td className="text-center py-2 text-[#A6B0BF]">1.25-1.5%</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-[#A6B0BF]">Creator Rewards</td>
                      <td className="text-center py-2 text-[#A6B0BF]">None</td>
                      <td className="text-center py-2 text-[#A6B0BF]">0.05%</td>
                      <td className="text-center py-2 text-[#A6B0BF]">0.25-0.5%</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-[#A6B0BF]">Graduation Fee</td>
                      <td className="text-center py-2 text-casino-green font-semibold">0.01 SOL</td>
                      <td className="text-center py-2 text-[#A6B0BF]">0.015 SOL</td>
                      <td className="text-center py-2 text-[#A6B0BF]">Variable</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-[#A6B0BF]">Community Vault</td>
                      <td className="text-center py-2 text-casino-green font-semibold">0.3%</td>
                      <td className="text-center py-2 text-[#A6B0BF]">None</td>
                      <td className="text-center py-2 text-[#A6B0BF]">None</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-r from-casino-green/10 to-red-400/10 rounded-xl p-6 border border-casino-green/20">
              <h3 className="text-xl font-semibold text-white mb-4">🎯 JUSTWYNN Unique Advantages</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">Lowest Trading Fees:</span>
                    <span className="text-casino-gold font-semibold">0.9% vs 1%+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">Community Vault:</span>
                    <span className="text-casino-green font-semibold">0.3% to holders</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">Sustainable Operations:</span>
                    <span className="text-casino-gold font-semibold">0.3% dedicated</span>
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
