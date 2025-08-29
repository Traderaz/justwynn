"use client";

import React from 'react';
import DocPageLayout from '@/components/docs/DocPageLayout';

export default function LaunchTokenPage() {
  return (
    <DocPageLayout
      title="Launch a Token"
      description="Step-by-step guide to launching your first token on JUSTWYNN and building a successful community."
      prevPage={{ title: "How does it work?", href: "/docs/how-it-works" }}
      nextPage={{ title: "What is The House?", href: "/docs/the-house" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Getting Started</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            Launching a token on JUSTWYNN is designed to be simple and accessible. There are no gatekeepers, no complex requirements—just a small entry fee and your vision for building a community.
          </p>
          
          <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-green/20">
            <h3 className="text-xl font-semibold text-casino-green mb-4">📋 Requirements</h3>
            <ul className="space-y-2 text-[#E9EEF5]">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-casino-green rounded-full"></span>
                Solana wallet with SOL for gas fees only
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-casino-green rounded-full"></span>
                Token name, symbol, and description
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-casino-green rounded-full"></span>
                Token logo/image (optional but recommended)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-casino-green rounded-full"></span>
                Social links (Twitter, Telegram, Discord, Website)
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Step-by-Step Launch Process</h2>
          
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-casino-green/20 flex items-center justify-center">
                  <span className="text-casino-green font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Connect Your Wallet</h3>
                <p className="text-[#A6B0BF] mb-4">
                  Connect your Solana wallet (Phantom, Solflare, etc.) to the JUSTWYNN platform. Make sure you have enough SOL for transaction costs only.
                </p>
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <p className="text-yellow-400 text-sm">
                    💡 <strong>Tip:</strong> Keep at least 0.01 SOL for transaction fees during the launch process.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-casino-gold/20 flex items-center justify-center">
                  <span className="text-casino-gold font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Configure Token Details</h3>
                <p className="text-[#A6B0BF] mb-4">
                  Fill in your token information using our intuitive launch interface:
                </p>
                <div className="grid gap-4">
                  <div className="p-4 bg-[#1a1d23] rounded-lg border border-casino-gold/20">
                    <h4 className="font-semibold text-casino-gold mb-2">Basic Information</h4>
                    <ul className="text-sm text-[#A6B0BF] space-y-1">
                      <li>• Token Name (e.g., &quot;My Awesome Token&quot;)</li>
                      <li>• Token Symbol (e.g., &quot;MAT&quot;)</li>
                      <li>• Total Supply (default: 1 billion)</li>
                      <li>• Description (what your token is about)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-[#1a1d23] rounded-lg border border-casino-gold/20">
                    <h4 className="font-semibold text-casino-gold mb-2">Branding & Social</h4>
                    <ul className="text-sm text-[#A6B0BF] space-y-1">
                      <li>• Upload token logo (PNG/JPG, max 2MB)</li>
                      <li>• Twitter/X handle</li>
                      <li>• Telegram group link</li>
                      <li>• Discord server link</li>
                      <li>• Website URL</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-red-400/20 flex items-center justify-center">
                  <span className="text-red-400 font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Review & Launch for FREE</h3>
                <p className="text-[#A6B0BF] mb-4">
                  Review all your token details and launch your token completely FREE. JUSTWYNN believes in zero barriers to entry for creators.
                </p>
                <div className="bg-[#1a1d23] rounded-lg p-4 border border-casino-green/20">
                  <div className="flex justify-between items-center">
                    <span className="text-[#E9EEF5]">Launch Fee:</span>
                    <span className="text-casino-green font-bold">FREE</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-[#E9EEF5]">Estimated Gas:</span>
                    <span className="text-[#A6B0BF]">~0.01 SOL</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-purple-400/20 flex items-center justify-center">
                  <span className="text-purple-400 font-bold">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Launch & Share</h3>
                <p className="text-[#A6B0BF] mb-4">
                  Once your transaction confirms, your token is live! Share your launch with your community and start building momentum toward your first milestones.
                </p>
                <div className="bg-casino-green/10 border border-casino-green/20 rounded-lg p-4">
                  <p className="text-casino-green text-sm">
                    🚀 <strong>Success!</strong> Your token is now tradeable and eligible for milestone rewards as it grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">After Launch: Building Success</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            Launching is just the beginning. Here&apos;s how to build momentum and work toward milestone rewards:
          </p>
          
          <div className="grid gap-6">
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-green/20">
              <h3 className="text-xl font-semibold text-casino-green mb-3">📱 Community Building</h3>
              <ul className="text-[#E9EEF5] space-y-2">
                <li>• Share your launch across social media</li>
                <li>• Engage with your Telegram/Discord community</li>
                <li>• Post regular updates about your project&apos;s progress</li>
                <li>• Collaborate with other JUSTWYNN projects</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-gold/20">
              <h3 className="text-xl font-semibold text-casino-gold mb-3">📈 Growth Strategies</h3>
              <ul className="text-[#E9EEF5] space-y-2">
                <li>• Focus on real utility and value creation</li>
                <li>• Encourage organic holder growth</li>
                <li>• Build partnerships within the ecosystem</li>
                <li>• Maintain transparent communication</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-red-400/20">
              <h3 className="text-xl font-semibold text-red-400 mb-3">🎯 Milestone Tracking</h3>
              <ul className="text-[#E9EEF5] space-y-2">
                <li>• Monitor your market cap progress</li>
                <li>• Track holder count growth</li>
                <li>• Celebrate milestone achievements</li>
                <li>• Prepare for game unlocks and rewards</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Best Practices</h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <h4 className="font-semibold text-green-400 mb-2">✅ Do</h4>
              <ul className="text-[#E9EEF5] text-sm space-y-1">
                <li>• Be transparent about your project&apos;s goals and roadmap</li>
                <li>• Engage actively with your community</li>
                <li>• Focus on building real value and utility</li>
                <li>• Celebrate milestones and share progress updates</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <h4 className="font-semibold text-red-400 mb-2">❌ Don&apos;t</h4>
              <ul className="text-[#E9EEF5] text-sm space-y-1">
                <li>• Make unrealistic promises about returns or guarantees</li>
                <li>• Engage in market manipulation or wash trading</li>
                <li>• Abandon your project after launch</li>
                <li>• Spam other communities or engage in aggressive marketing</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Need Help?</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-4">
            Our community is here to support you throughout your launch journey:
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="px-4 py-2 bg-casino-green/10 text-casino-green rounded-lg hover:bg-casino-green/20 transition-colors">
              Join Discord
            </a>
            <a href="#" className="px-4 py-2 bg-casino-gold/10 text-casino-gold rounded-lg hover:bg-casino-gold/20 transition-colors">
              Read FAQ
            </a>
            <a href="#" className="px-4 py-2 bg-red-400/10 text-red-400 rounded-lg hover:bg-red-400/20 transition-colors">
              Contact Support
            </a>
          </div>
        </section>
      </div>
    </DocPageLayout>
  );
}
