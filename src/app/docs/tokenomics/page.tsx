"use client";

import React from 'react';
import DocPageLayout from '@/components/docs/DocPageLayout';

export default function TokenomicsPage() {
  return (
    <DocPageLayout
      title="JUSTWYNN Tokenomics"
      description="JUSTWYNN token distribution, utility, and governance within the ecosystem."
      prevPage={{ title: "Fees Structure", href: "/docs/fees-structure" }}
      nextPage={{ title: "The House Cup", href: "/docs/house-cup" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Token Overview</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            The JUSTWYNN token serves as the governance and utility token for the entire ecosystem, providing holders with voting rights, exclusive access, and rewards.
          </p>
          
          <div className="bg-gradient-to-r from-casino-green/10 to-casino-gold/10 rounded-xl p-6 border border-casino-green/20">
            <h3 className="text-xl font-semibold text-white mb-4">🪙 Token Details</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-[#A6B0BF]">Total Supply:</span>
                <span className="text-casino-green">1,000,000,000 JUSTWYNN</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A6B0BF]">Blockchain:</span>
                <span className="text-casino-green">Solana (SPL Token)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A6B0BF]">Decimals:</span>
                <span className="text-casino-green">9</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A6B0BF]">Launch:</span>
                <span className="text-casino-green">Coming Soon</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Token Distribution</h2>
          
          <div className="grid gap-6">
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-green/20">
              <h3 className="text-xl font-semibold text-casino-green mb-3">🎮 Community & Rewards (40%)</h3>
              <p className="text-[#E9EEF5] mb-4">400M tokens reserved for community rewards, games, airdrops, and ecosystem incentives.</p>
              <div className="text-sm text-[#A6B0BF]">
                Distributed through milestone games, competitions, and community participation rewards.
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-gold/20">
              <h3 className="text-xl font-semibold text-casino-gold mb-3">🏗️ Development & Operations (30%)</h3>
              <p className="text-[#E9EEF5] mb-4">300M tokens for ongoing development, partnerships, and platform operations.</p>
              <div className="text-sm text-[#A6B0BF]">
                4-year vesting schedule with 1-year cliff to ensure long-term commitment.
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-red-400/20">
              <h3 className="text-xl font-semibold text-red-400 mb-3">💰 Initial Liquidity (20%)</h3>
              <p className="text-[#E9EEF5] mb-4">200M tokens for initial DEX liquidity and market making.</p>
              <div className="text-sm text-[#A6B0BF]">
                Provides initial trading liquidity and price discovery for the token.
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-purple-400/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">🌟 Early Supporters (10%)</h3>
              <p className="text-[#E9EEF5] mb-4">100M tokens for early investors and advisors.</p>
              <div className="text-sm text-[#A6B0BF]">
                2-year vesting schedule with 6-month cliff for early supporters.
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Token Utility</h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-casino-green/10 border border-casino-green/20">
              <h4 className="font-semibold text-casino-green mb-2">🗳️ Governance</h4>
              <p className="text-[#E9EEF5] text-sm">
                Vote on platform upgrades, fee adjustments, House allocation changes, and new feature proposals.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-casino-gold/10 border border-casino-gold/20">
              <h4 className="font-semibold text-casino-gold mb-2">🎁 Exclusive Access</h4>
              <p className="text-[#E9EEF5] text-sm">
                Access to premium features, early game access, exclusive competitions, and VIP support.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-red-400/10 border border-red-400/20">
              <h4 className="font-semibold text-red-400 mb-2">💸 Fee Discounts</h4>
              <p className="text-[#E9EEF5] text-sm">
                Reduced launch fees and trading fees based on JUSTWYNN token holdings and staking.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-purple-400/10 border border-purple-400/20">
              <h4 className="font-semibold text-purple-400 mb-2">🏆 Enhanced Rewards</h4>
              <p className="text-[#E9EEF5] text-sm">
                Bonus multipliers in games, priority access to competitions, and exclusive reward pools.
              </p>
            </div>
          </div>
        </section>
      </div>
    </DocPageLayout>
  );
}
