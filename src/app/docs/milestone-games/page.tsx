"use client";

import React from 'react';
import DocPageLayout from '@/components/docs/DocPageLayout';

export default function MilestoneGamesPage() {
  return (
    <DocPageLayout
      title="Milestone Games"
      description="When Royal Flush tokens reach $1M+ market cap, The House unlocks exclusive games and rewards for their holder communities."
      prevPage={{ title: "What is The House?", href: "/docs/the-house" }}
      nextPage={{ title: "Token Tier System", href: "/docs/graduation-system" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Game Unlocks</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            Only Royal Flush tokens that reach and sustain $1M+ market cap unlock milestone games. The House automatically activates games and competitions for these elite tokens&apos; communities. All games are funded by The House with fair odds and verifiable randomness.
          </p>
          
          <div className="grid gap-6">
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-green/20">
              <h3 className="text-xl font-semibold text-casino-green mb-3">🎰 Slots</h3>
              <p className="text-[#E9EEF5] mb-4">
                Spin to win token supply, SOL prizes from The House, or bonus perks. All slots use provably fair randomness and sustainable house edges.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#A6B0BF]">Unlock Requirement:</span>
                  <span className="text-casino-green">$1M+ Royal Flush</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-gold/20">
              <h3 className="text-xl font-semibold text-casino-gold mb-3">🎲 Lotteries</h3>
              <p className="text-[#E9EEF5] mb-4">
                Random draws with verifiable fairness using Solana. Win exclusive token supply, SOL prizes, and JUSTWYNN ecosystem rewards.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#A6B0BF]">Unlock Requirement:</span>
                  <span className="text-casino-gold">$1M+ Royal Flush</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-red-400/20">
              <h3 className="text-xl font-semibold text-red-400 mb-3">🎯 Roulette</h3>
              <p className="text-[#E9EEF5] mb-4">
                Casino-style roulette with holding duration bonuses. Longer-term holders get better odds to discourage dumping and reward loyalty.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#A6B0BF]">Unlock Requirement:</span>
                  <span className="text-red-400">$1M+ Royal Flush</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Prize Types</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            Milestone games offer various prize types, all funded by The House&apos;s sustainable reward system:
          </p>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-casino-green/10 border border-casino-green/20">
              <h4 className="font-semibold text-casino-green mb-2">🪙 Token Supply</h4>
              <p className="text-[#E9EEF5] text-sm">
                Exclusive supply of the Royal Flush token that unlocked games, allocated specifically for game rewards. Never impacts circulating supply.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-casino-gold/10 border border-casino-gold/20">
              <h4 className="font-semibold text-casino-gold mb-2">💎 SOL Prizes</h4>
              <p className="text-[#E9EEF5] text-sm">
                Direct SOL rewards funded by The House. Prize pools scale with The House&apos;s growth and the token&apos;s milestone level.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-red-400/10 border border-red-400/20">
              <h4 className="font-semibold text-red-400 mb-2">🎁 JUSTWYNN Rewards</h4>
              <p className="text-[#E9EEF5] text-sm">
                Platform tokens for ongoing ecosystem perks, governance rights, and access to exclusive features and competitions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </DocPageLayout>
  );
}
