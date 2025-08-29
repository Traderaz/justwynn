"use client";

import React from 'react';
import DocPageLayout from '@/components/docs/DocPageLayout';

export default function TokenomicsPage() {
  return (
    <DocPageLayout
      title="WYNN Tokenomics"
      description="WYNN token distribution, utility, and governance within the JUSTWYNN ecosystem."
      prevPage={{ title: "Fees Structure", href: "/docs/fees-structure" }}
      nextPage={{ title: "The House Cup", href: "/docs/house-cup" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Token Overview</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            The WYNN token serves as the governance and utility token for the entire JUSTWYNN ecosystem, providing holders with voting rights, exclusive access, and rewards.
          </p>
          
          <div className="bg-gradient-to-r from-casino-green/10 to-casino-gold/10 rounded-xl p-6 border border-casino-green/20">
            <h3 className="text-xl font-semibold text-white mb-4">🪙 Token Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-[#A6B0BF]">Ticker:</span>
                <span className="text-casino-green">WYNN</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A6B0BF]">Supply Cap:</span>
                <span className="text-casino-green">1,000,000,000 WYNN</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A6B0BF]">Deployed on:</span>
                <span className="text-casino-green">JustWynn</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A6B0BF]">Address:</span>
                <span className="text-casino-gold">N/A</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Token Distribution</h2>
          
          <div className="grid gap-6">
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-green/20">
              <h3 className="text-xl font-semibold text-casino-green mb-3">🎲 High Roller ICO (50%)</h3>
              <p className="text-[#E9EEF5] mb-4">500M tokens allocated for the High Roller ICO - the primary token distribution event.</p>
              <div className="text-sm text-[#A6B0BF]">
                <strong>Vesting:</strong> 100% on TGE (Token Generation Event) - immediate unlock for ICO participants.
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-gold/20">
              <h3 className="text-xl font-semibold text-casino-gold mb-3">👥 Team (15%)</h3>
              <p className="text-[#E9EEF5] mb-4">150M tokens reserved for the core team and development contributors.</p>
              <div className="text-sm text-[#A6B0BF]">
                <strong>Vesting:</strong> 18-month linear vest with one-year cliff. Team tokens re-vest on the first of each month to adhere to this structure.
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-purple-400/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">🌟 Community (10%)</h3>
              <p className="text-[#E9EEF5] mb-4">100M tokens dedicated to community rewards, airdrops, and ecosystem incentives.</p>
              <div className="text-sm text-[#A6B0BF]">
                <strong>Vesting:</strong> 18-month linear vest to ensure sustainable community growth.
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-red-400/20">
              <h3 className="text-xl font-semibold text-red-400 mb-3">💼 Investors (10%)</h3>
              <p className="text-[#E9EEF5] mb-4">100M tokens allocated to strategic investors and funding rounds.</p>
              <div className="text-sm text-[#A6B0BF]">
                <strong>Vesting:</strong> 18-month linear vest distributed as: 2.5% colosseum vest, 1.7% strategic pool 1, 0.3% manual distribution, 0.1% strategic pool 2.
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-blue-400/20">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">💧 Liquidity (5%)</h3>
              <p className="text-[#E9EEF5] mb-4">50M tokens reserved for exchange liquidity and market making.</p>
              <div className="text-sm text-[#A6B0BF]">
                <strong>Vesting:</strong> 5% locked until required for CEX listings to ensure adequate trading liquidity.
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-green-400/20">
              <h3 className="text-xl font-semibold text-green-400 mb-3">🏛️ JustWynn Foundation (10%)</h3>
              <p className="text-[#E9EEF5] mb-4">100M tokens for the JustWynn Foundation to support long-term ecosystem development.</p>
              <div className="text-sm text-[#A6B0BF]">
                <strong>Vesting:</strong> 18-month linear vest to ensure sustainable platform growth and development.
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Vesting Schedule Summary</h2>
          
          <div className="bg-gradient-to-r from-casino-gold/10 to-casino-green/10 rounded-xl p-6 border border-casino-gold/20">
            <h3 className="text-xl font-semibold text-white mb-4">📅 Vesting Overview</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#A6B0BF]">High Roller ICO (50%):</span>
                  <span className="text-casino-green">100% on TGE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A6B0BF]">Team (15%):</span>
                  <span className="text-casino-gold">18M linear, 1Y cliff</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A6B0BF]">Community (10%):</span>
                  <span className="text-purple-400">18M linear vest</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#A6B0BF]">Investors (10%):</span>
                  <span className="text-red-400">18M linear vest</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A6B0BF]">Liquidity (5%):</span>
                  <span className="text-blue-400">Locked until CEX</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A6B0BF]">Foundation (10%):</span>
                  <span className="text-green-400">18M linear vest</span>
                </div>
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
                Reduced tier progression fees and trading fees based on WYNN token holdings and staking.
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
