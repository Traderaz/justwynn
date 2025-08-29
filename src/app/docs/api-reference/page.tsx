"use client";

import React from 'react';
import DocPageLayout from '@/components/docs/DocPageLayout';

export default function ApiReferencePage() {
  return (
    <DocPageLayout
      title="API Reference"
      description="Complete API documentation for developers building on JUSTWYNN."
      prevPage={{ title: "Quickstart", href: "/docs/quickstart" }}
      nextPage={{ title: "Smart Contracts", href: "/docs/smart-contracts" }}
    >
      <div className="space-y-6 sm:space-y-8">
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-casino-gold mb-3 sm:mb-4">REST API Endpoints</h2>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-[#1a1d23] rounded-lg sm:rounded-xl p-4 sm:p-6 border border-casino-green/20">
              <h3 className="text-lg sm:text-xl font-semibold text-casino-green mb-3 sm:mb-4">Token Management</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 bg-[#0B0D10] rounded-lg border border-casino-gold/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">POST</span>
                    <code className="text-casino-gold text-xs sm:text-sm">/api/tokens/launch</code>
                  </div>
                  <p className="text-[#A6B0BF] text-xs sm:text-sm mb-2">Launch a new token</p>
                  <pre className="text-casino-green text-xs overflow-x-auto">
{`{
  "name": "string",
  "symbol": "string", 
  "description": "string",
  "totalSupply": number,
  "metadata": {
    "image": "string",
    "twitter": "string",
    "telegram": "string"
  }
}`}
                  </pre>
                </div>
                
                <div className="p-3 sm:p-4 bg-[#0B0D10] rounded-lg border border-casino-gold/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">GET</span>
                    <code className="text-casino-gold text-xs sm:text-sm">/api/tokens/{'{address}'}</code>
                  </div>
                  <p className="text-[#A6B0BF] text-xs sm:text-sm">Get token information</p>
                </div>
                
                <div className="p-3 sm:p-4 bg-[#0B0D10] rounded-lg border border-casino-gold/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">GET</span>
                    <code className="text-casino-gold text-xs sm:text-sm">/api/tokens/{'{address}'}/milestones</code>
                  </div>
                  <p className="text-[#A6B0BF] text-xs sm:text-sm">Get token milestone progress</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1d23] rounded-lg sm:rounded-xl p-4 sm:p-6 border border-casino-gold/20">
              <h3 className="text-lg sm:text-xl font-semibold text-casino-gold mb-3 sm:mb-4">The House</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 bg-[#0B0D10] rounded-lg border border-casino-gold/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">GET</span>
                    <code className="text-casino-gold text-xs sm:text-sm">/api/house/balance</code>
                  </div>
                  <p className="text-[#A6B0BF] text-xs sm:text-sm">Get current House balance</p>
                </div>
                
                <div className="p-3 sm:p-4 bg-[#0B0D10] rounded-lg border border-casino-gold/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">GET</span>
                    <code className="text-casino-gold text-xs sm:text-sm">/api/house/history</code>
                  </div>
                  <p className="text-[#A6B0BF] text-xs sm:text-sm">Get House transaction history</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1d23] rounded-lg sm:rounded-xl p-4 sm:p-6 border border-red-400/20">
              <h3 className="text-lg sm:text-xl font-semibold text-red-400 mb-3 sm:mb-4">Games & Competitions</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 bg-[#0B0D10] rounded-lg border border-casino-gold/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">POST</span>
                    <code className="text-casino-gold text-xs sm:text-sm">/api/games/slots/spin</code>
                  </div>
                  <p className="text-[#A6B0BF] text-xs sm:text-sm">Play slot machine</p>
                </div>
                
                <div className="p-3 sm:p-4 bg-[#0B0D10] rounded-lg border border-casino-gold/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">GET</span>
                    <code className="text-casino-gold text-xs sm:text-sm">/api/competitions/house-cup</code>
                  </div>
                  <p className="text-[#A6B0BF] text-xs sm:text-sm">Get House Cup leaderboard</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocPageLayout>
  );
}
