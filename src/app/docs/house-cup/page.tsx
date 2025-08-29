"use client";

import React from 'react';
import DocPageLayout from '@/components/docs/DocPageLayout';

export default function HouseCupPage() {
  return (
    <DocPageLayout
      title="The House Cup"
      description="Weekly community competitions and rewards where the strongest communities compete for prizes from The House."
      prevPage={{ title: "Tokenomics", href: "/docs/tokenomics" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Competition Overview</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            The House Cup is JUSTWYNN&apos;s flagship weekly competition where newly launched tokens compete based on community strength, volume, liquidity health, holder growth, and social traction. Winners receive reward pools funded directly by The House.
          </p>
          
          <div className="bg-gradient-to-r from-casino-gold/10 to-red-400/10 rounded-xl p-6 border border-casino-gold/20">
            <h3 className="text-xl font-semibold text-white mb-4">🏆 Weekly Competition</h3>
            <p className="text-[#E9EEF5] leading-relaxed">
              Every week, tokens launched within the past 30 days compete across multiple metrics. The strongest performing communities share in reward pools that scale with The House&apos;s growth.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Competition Metrics</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            The House Cup uses a comprehensive scoring system that rewards genuine community building over artificial metrics:
          </p>
          
          <div className="grid gap-6">
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-green/20">
              <h3 className="text-xl font-semibold text-casino-green mb-3">📊 Volume & Liquidity (30%)</h3>
              <ul className="text-[#E9EEF5] space-y-2">
                <li>• Trading volume consistency and growth</li>
                <li>• Liquidity depth and stability</li>
                <li>• Organic trading patterns (anti-wash trading)</li>
                <li>• Price stability and healthy volatility</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-gold/20">
              <h3 className="text-xl font-semibold text-casino-gold mb-3">👥 Community Growth (25%)</h3>
              <ul className="text-[#E9EEF5] space-y-2">
                <li>• Holder count increase and retention</li>
                <li>• Distribution health (no whale dominance)</li>
                <li>• New holder acquisition rate</li>
                <li>• Long-term holding patterns</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-red-400/20">
              <h3 className="text-xl font-semibold text-red-400 mb-3">📱 Social Traction (25%)</h3>
              <ul className="text-[#E9EEF5] space-y-2">
                <li>• Twitter/X engagement and growth</li>
                <li>• Telegram/Discord activity levels</li>
                <li>• Organic mentions and community buzz</li>
                <li>• Content quality and consistency</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-purple-400/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">🏗️ Development Activity (20%)</h3>
              <ul className="text-[#E9EEF5] space-y-2">
                <li>• Roadmap progress and updates</li>
                <li>• Team transparency and communication</li>
                <li>• Product development milestones</li>
                <li>• Partnership announcements and progress</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Reward Structure</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            Weekly prizes are distributed to the top performing communities, with rewards scaling based on The House&apos;s current size and weekly inflows:
          </p>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-casino-gold/10 border border-casino-gold/20">
              <h4 className="font-semibold text-casino-gold mb-2">🥇 1st Place (40% of pool)</h4>
              <p className="text-[#E9EEF5] text-sm">
                Largest share of the weekly reward pool, distributed proportionally to all holders of the winning token.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-gray-400/10 border border-gray-400/20">
              <h4 className="font-semibold text-gray-400 mb-2">🥈 2nd Place (30% of pool)</h4>
              <p className="text-[#E9EEF5] text-sm">
                Second largest share, rewarding strong performance and encouraging continued growth.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-yellow-600/10 border border-yellow-600/20">
              <h4 className="font-semibold text-yellow-600 mb-2">🥉 3rd Place (20% of pool)</h4>
              <p className="text-[#E9EEF5] text-sm">
                Third place rewards, maintaining incentives for all competitive communities.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-casino-green/10 border border-casino-green/20">
              <h4 className="font-semibold text-casino-green mb-2">🎯 Top 10 (10% of pool)</h4>
              <p className="text-[#E9EEF5] text-sm">
                Remaining pool split among places 4-10, ensuring broad participation rewards.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Monthly Seasons</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            Beyond weekly competitions, The House Cup operates in monthly seasons with cumulative scoring and special season-end rewards:
          </p>
          
          <div className="grid gap-6">
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-green/20">
              <h3 className="text-xl font-semibold text-casino-green mb-3">📈 Cumulative Scoring</h3>
              <p className="text-[#E9EEF5] mb-4">
                Monthly rankings based on consistent weekly performance, not just single-week wins.
              </p>
              <div className="text-sm text-[#A6B0BF]">
                Rewards sustained community building and long-term growth over short-term spikes.
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-gold/20">
              <h3 className="text-xl font-semibold text-casino-gold mb-3">🏆 Season Champions</h3>
              <p className="text-[#E9EEF5] mb-4">
                Monthly winners receive special recognition, larger reward pools, and Hall of Fame consideration.
              </p>
              <div className="text-sm text-[#A6B0BF]">
                Season champions get fast-tracked evaluation for graduation and special ecosystem benefits.
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Participation</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-4">
            All tokens launched on JUSTWYNN are automatically eligible for The House Cup during their first 30 days. No registration required—just build your community and compete!
          </p>
          
          <div className="bg-casino-green/10 border border-casino-green/20 rounded-lg p-4">
            <p className="text-casino-green text-sm">
              🚀 <strong>Ready to compete?</strong> Launch your token and start building your community. The next House Cup competition begins every Monday at 00:00 UTC.
            </p>
          </div>
        </section>
      </div>
    </DocPageLayout>
  );
}
