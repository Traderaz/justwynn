"use client";

import React from 'react';
import DocPageLayout from '@/components/docs/DocPageLayout';

export default function GraduationSystemPage() {
  return (
    <DocPageLayout
      title="Token Tier System"
      description="How tokens progress through Opening Hand, Rising Pot, and Royal Flush tiers, with games unlocking at $100K+ market cap."
      prevPage={{ title: "Milestone Games", href: "/docs/milestone-games" }}
      nextPage={{ title: "Quickstart", href: "/docs/quickstart" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">The Three-Tier System</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            JUSTWYNN uses a poker-themed three-tier system to categorize tokens based on their market performance. Each tier offers different visibility and benefits, with milestone games unlocking only for Royal Flush tokens that reach $100K+ market cap.
          </p>
          
          <div className="bg-gradient-to-r from-casino-gold/10 to-casino-green/10 rounded-xl p-6 border border-casino-gold/20">
            <h3 className="text-xl font-semibold text-white mb-4">🎰 Progressive Recognition</h3>
            <p className="text-[#E9EEF5] leading-relaxed">
              Unlike platforms that only focus on launches, JUSTWYNN recognizes sustained growth through clear tier progression. This system rewards genuine traction while maintaining excitement for milestone achievements.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">The Three Tiers</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            Every token on JUSTWYNN progresses through these tiers based on market cap milestones. Each tier offers different visibility and benefits.
          </p>
          
          <div className="grid gap-6">
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-green/20">
              <h3 className="text-xl font-semibold text-casino-green mb-3">🃏 Opening Hand</h3>
              <p className="text-[#E9EEF5] mb-4">Newly created tokens start here</p>
              <ul className="text-[#E9EEF5] space-y-2">
                <li>• All newly launched tokens begin in Opening Hand</li>
                <li>• Basic visibility on the platform</li>
                <li>• Standard trading and community features</li>
                <li>• No special perks or games yet</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-gold/20">
              <h3 className="text-xl font-semibold text-casino-gold mb-3">💰 Rising Pot</h3>
              <p className="text-[#E9EEF5] mb-4">Tokens with market caps below $100K</p>
              <ul className="text-[#E9EEF5] space-y-2">
                <li>• Building momentum and community support</li>
                <li>• Enhanced visibility on platform</li>
                <li>• Eligible for community competitions</li>
                <li>• Progress tracking toward Royal Flush</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-red-400/20">
              <h3 className="text-xl font-semibold text-red-400 mb-3">👑 Royal Flush</h3>
              <p className="text-[#E9EEF5] mb-4">Elite tokens above $100K market cap</p>
              <ul className="text-[#E9EEF5] space-y-2">
                <li>• Premium placement and recognition</li>
                <li>• Featured across JUSTWYNN platform</li>
                <li>• Eligible for special partnerships</li>
                <li>• <strong>Games unlock at $100K+ sustained market cap</strong></li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Milestone Games Unlock</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            While tier progression provides visibility and recognition, milestone games only unlock for Royal Flush tokens that reach and sustain $100K+ market cap:
          </p>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-casino-gold/10 border border-casino-gold/20">
              <h4 className="font-semibold text-casino-gold mb-2">🎰 Game Activation</h4>
              <p className="text-[#E9EEF5] text-sm">
                Only Royal Flush tokens that reach $100K+ market cap unlock slots, lotteries, and roulette games for their holder communities.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-casino-green/10 border border-casino-green/20">
              <h4 className="font-semibold text-casino-green mb-2">🏆 Sustained Success</h4>
              <p className="text-[#E9EEF5] text-sm">
                Games require sustained market cap performance, not just brief spikes. This ensures only genuinely successful tokens access premium features.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-red-400/10 border border-red-400/20">
              <h4 className="font-semibold text-red-400 mb-2">💎 Exclusive Rewards</h4>
              <p className="text-[#E9EEF5] text-sm">
                Game winners receive token supply from the milestone project, SOL prizes from The House, and JUSTWYNN ecosystem rewards.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Tier Progression Process</h2>
          
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-casino-green/20 flex items-center justify-center">
                  <span className="text-casino-green font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Automatic Tracking</h3>
                <p className="text-[#A6B0BF]">
                  JUSTWYNN continuously monitors all token market caps. Tier progression happens automatically when thresholds are reached—no application needed.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-casino-gold/20 flex items-center justify-center">
                  <span className="text-casino-gold font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Tier Advancement</h3>
                <p className="text-[#A6B0BF]">
                  Tokens move from Opening Hand to Rising Pot, then to Royal Flush based purely on market cap milestones. Progression fees are paid to The House.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-red-400/20 flex items-center justify-center">
                  <span className="text-red-400 font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Game Qualification</h3>
                <p className="text-[#A6B0BF]">
                  Royal Flush tokens that reach and sustain $100K+ market cap unlock milestone games. This requires proven, sustained success beyond just tier status.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocPageLayout>
  );
}
