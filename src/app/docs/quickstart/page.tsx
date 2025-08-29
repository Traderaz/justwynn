"use client";

import React from 'react';
import DocPageLayout from '@/components/docs/DocPageLayout';

export default function QuickstartPage() {
  return (
    <DocPageLayout
      title="Quickstart"
      description="Begin interacting with JUSTWYNN's platform and start building in the ecosystem."
      prevPage={{ title: "Token Tier System", href: "/docs/graduation-system" }}
      nextPage={{ title: "API Reference", href: "/docs/api-reference" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Developer Setup</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            Get started building on JUSTWYNN with our developer tools and SDKs.
          </p>
          
          <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-green/20">
            <h3 className="text-xl font-semibold text-casino-green mb-4">🛠️ Prerequisites</h3>
            <ul className="text-[#E9EEF5] space-y-2">
              <li>• Node.js 18+ and npm/yarn</li>
              <li>• Solana CLI tools</li>
              <li>• Anchor framework (for smart contracts)</li>
              <li>• Solana wallet (Phantom, Solflare, etc.)</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Installation</h2>
          
          <div className="space-y-4">
            <div className="bg-[#0B0D10] rounded-lg p-4 border border-casino-gold/20">
              <h4 className="text-casino-gold mb-2">Install JUSTWYNN SDK</h4>
              <code className="text-casino-green text-sm">npm install @justwynn/sdk</code>
            </div>
            
            <div className="bg-[#0B0D10] rounded-lg p-4 border border-casino-gold/20">
              <h4 className="text-casino-gold mb-2">Install Solana Dependencies</h4>
              <code className="text-casino-green text-sm">npm install @solana/web3.js @solana/wallet-adapter-react</code>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Basic Usage</h2>
          
          <div className="bg-[#0B0D10] rounded-lg p-6 border border-casino-green/20">
            <pre className="text-casino-green text-sm overflow-x-auto">
{`import { JustwynnClient } from '@justwynn/sdk';
import { Connection, clusterApiUrl } from '@solana/web3.js';

// Initialize connection
const connection = new Connection(clusterApiUrl('mainnet-beta'));

// Initialize JUSTWYNN client
const justwynn = new JustwynnClient(connection);

// Launch a token
const launchResult = await justwynn.launchToken({
  name: "My Token",
  symbol: "MTK",
  description: "An amazing token",
  totalSupply: 1000000000,
  metadata: {
    image: "https://example.com/logo.png",
    twitter: "https://twitter.com/mytoken",
    telegram: "https://t.me/mytoken"
  }
});

console.log("Token launched:", launchResult.tokenAddress);`}
            </pre>
          </div>
        </section>
      </div>
    </DocPageLayout>
  );
}
