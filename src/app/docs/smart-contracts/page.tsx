"use client";

import React from 'react';
import DocPageLayout from '@/components/docs/DocPageLayout';

export default function SmartContractsPage() {
  return (
    <DocPageLayout
      title="Smart Contracts"
      description="Technical details about JUSTWYNN smart contracts and on-chain architecture."
      prevPage={{ title: "API Reference", href: "/docs/api-reference" }}
      nextPage={{ title: "Fees Structure", href: "/docs/fees-structure" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Contract Architecture</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            JUSTWYNN is built on Solana using the Anchor framework for secure, efficient smart contracts.
          </p>
          
          <div className="grid gap-6">
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-green/20">
              <h3 className="text-xl font-semibold text-casino-green mb-3">🏗️ Core Contracts</h3>
              <ul className="text-[#E9EEF5] space-y-2">
                <li>• <strong>TokenFactory:</strong> Handles token creation and launches</li>
                <li>• <strong>TheHouse:</strong> Manages the community bankroll</li>
                <li>• <strong>MilestoneTracker:</strong> Monitors token milestones</li>
                <li>• <strong>GameEngine:</strong> Powers slots, lotteries, and roulette</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-gold/20">
              <h3 className="text-xl font-semibold text-casino-gold mb-3">🔐 Security Features</h3>
              <ul className="text-[#E9EEF5] space-y-2">
                <li>• Multi-signature governance for critical functions</li>
                <li>• Time-locked upgrades with community review</li>
                <li>• Comprehensive audit by leading security firms</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Contract Addresses</h2>
          
          <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-green/20">
            <h3 className="text-xl font-semibold text-casino-green mb-4">Mainnet Contracts</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-[#0B0D10] rounded-lg">
                <span className="text-[#E9EEF5]">TokenFactory</span>
                <code className="text-casino-green text-sm">Coming Soon</code>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#0B0D10] rounded-lg">
                <span className="text-[#E9EEF5]">TheHouse</span>
                <code className="text-casino-green text-sm">Coming Soon</code>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#0B0D10] rounded-lg">
                <span className="text-[#E9EEF5]">MilestoneTracker</span>
                <code className="text-casino-green text-sm">Coming Soon</code>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocPageLayout>
  );
}
