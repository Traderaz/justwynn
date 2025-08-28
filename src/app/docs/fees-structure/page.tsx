"use client";

import React from 'react';
import DocPageLayout from '@/components/docs/DocPageLayout';

export default function FeesStructurePage() {
  return (
    <DocPageLayout
      title="Fees Structure"
      description="Understanding launch fees, trading fees, and how they fund The House and ecosystem rewards."
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
              <h3 className="text-xl font-semibold text-casino-green mb-3">🚀 Launch Fee: 0.1 SOL</h3>
              <p className="text-[#E9EEF5] mb-4">
                One-time fee paid when launching a token. Goes directly to The House to fund rewards and games.
              </p>
              <div className="bg-casino-green/5 rounded-lg p-4 border border-casino-green/10">
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">Fee Amount:</span>
                    <span className="text-casino-green">0.1 SOL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">Destination:</span>
                    <span className="text-casino-green">100% to The House</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-gold/20">
              <h3 className="text-xl font-semibold text-casino-gold mb-3">📊 Trading Fee: 1%</h3>
              <p className="text-[#E9EEF5] mb-4">
                Fee on all token trades, split between platform operations and The House for sustainable growth.
              </p>
              <div className="bg-casino-gold/5 rounded-lg p-4 border border-casino-gold/10">
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">Total Fee:</span>
                    <span className="text-casino-gold">1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">To Operations:</span>
                    <span className="text-casino-gold">0.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">To The House:</span>
                    <span className="text-casino-gold">0.5%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-red-400/20">
              <h3 className="text-xl font-semibold text-red-400 mb-3">🎓 Graduation Fee: Variable</h3>
              <p className="text-[#E9EEF5] mb-4">
                One-time fee when tokens graduate to main liquidity, based on market cap at graduation.
              </p>
              <div className="bg-red-400/5 rounded-lg p-4 border border-red-400/10">
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">$5M - $10M:</span>
                    <span className="text-red-400">5 SOL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">$10M - $50M:</span>
                    <span className="text-red-400">15 SOL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A6B0BF]">$50M+:</span>
                    <span className="text-red-400">50 SOL</span>
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
