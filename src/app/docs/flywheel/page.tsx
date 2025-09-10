"use client";

import React from 'react';
import DocPageLayout from '@/components/docs/DocPageLayout';

export default function FlywheelPage() {
  return (
    <DocPageLayout
      title="The JUSTWYNN Flywheel"
      description="Understanding how every component of JUSTWYNN works together in a self-reinforcing cycle of growth and value creation."
      prevPage={{ title: "Prediction Markets", href: "/docs/prediction-markets" }}
      nextPage={{ title: "Graduation System", href: "/docs/graduation-system" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">What is the JUSTWYNN Flywheel?</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            The JUSTWYNN Flywheel represents how every component of our ecosystem feeds into the next, creating a self-reinforcing cycle that grows stronger with each interaction. Unlike traditional platforms where features operate in isolation, JUSTWYNN&apos;s flywheel ensures that every action—whether launching a token, trading, or participating in games—strengthens the entire ecosystem.
          </p>
          
          <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-green/20 mb-6">
            <h3 className="text-lg font-semibold text-casino-green mb-3">Core Principle</h3>
            <p className="text-[#E9EEF5] mb-4">
              <strong>More Activity → More Revenue → Larger House → Better Rewards → More Users → More Activity</strong>
            </p>
            <p className="text-[#A6B0BF] text-sm">
              This virtuous cycle ensures that JUSTWYNN becomes more valuable and attractive to users as it grows, creating sustainable competitive advantages and exponential value creation.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">The Six Steps of the Flywheel</h2>
          
          <div className="space-y-6">
            <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-green/20">
              <div className="flex items-start gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #00E28A, #00B366)',
                    boxShadow: '0 0 20px rgba(0, 226, 138, 0.4)'
                  }}
                >
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-casino-green mb-3">🚀 Token Launches</h3>
                  <p className="text-[#E9EEF5] mb-4">
                    Users launch tokens completely free with no barriers or gatekeepers. Anyone can create a token instantly.
                  </p>
                  <div className="bg-[#0B0D10] rounded-lg p-4">
                    <h4 className="font-semibold text-[#E9EEF5] mb-2">How it feeds the flywheel:</h4>
                    <ul className="text-[#A6B0BF] text-sm space-y-1">
                      <li>• Free launches remove barriers to token creation</li>
                      <li>• More tokens = more trading opportunities</li>
                      <li>• Increased platform activity attracts more users</li>
                      <li>• Creates content for prediction markets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-blue/20">
              <div className="flex items-start gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #06B6D4, #0891B2)',
                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)'
                  }}
                >
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-casino-blue mb-3">💱 Trading Activity</h3>
                  <p className="text-[#E9EEF5] mb-4">
                    1% trading fees are split two ways: liquidity providers and The House. This sustainable fee structure ensures all stakeholders benefit from increased trading volume.
                  </p>
                  <div className="bg-[#0B0D10] rounded-lg p-4">
                    <h4 className="font-semibold text-[#E9EEF5] mb-2">Revenue Distribution:</h4>
                    <ul className="text-[#A6B0BF] text-sm space-y-1">
                      <li>• 0.25% to Liquidity Providers</li>
                      <li>• 0.75% to The House</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-gold/20">
              <div className="flex items-start gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #F59E0B, #D97706)',
                    boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)'
                  }}
                >
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-casino-gold mb-3">⬆️ Tier Progression</h3>
                  <p className="text-[#E9EEF5] mb-4">
                    Tokens advance through Opening Hand, Rising Pot, and Royal Flush tiers, paying progression fees to The House. This creates predictable revenue streams tied to token success.
                  </p>
                  <div className="bg-[#0B0D10] rounded-lg p-4">
                    <h4 className="font-semibold text-[#E9EEF5] mb-2">Progression Benefits:</h4>
                    <ul className="text-[#A6B0BF] text-sm space-y-1">
                      <li>• Higher tier = better platform visibility</li>
                      <li>• Unlocks advanced features and benefits</li>
                      <li>• Progression fees fund larger House rewards</li>
                      <li>• Creates aspirational goals for token creators</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-red/20">
              <div className="flex items-start gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #DC2626, #B91C1C)',
                    boxShadow: '0 0 20px rgba(220, 38, 38, 0.4)'
                  }}
                >
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-casino-red mb-3">🎯 Milestone Games</h3>
                  <p className="text-[#E9EEF5] mb-4">
                    Royal Flush tokens that reach $100K+ market cap unlock exclusive games for holders. These games generate additional activity, engagement, and revenue streams.
                  </p>
                  <div className="bg-[#0B0D10] rounded-lg p-4">
                    <h4 className="font-semibold text-[#E9EEF5] mb-2">Game Benefits:</h4>
                    <ul className="text-[#A6B0BF] text-sm space-y-1">
                      <li>• Increases holder engagement and retention</li>
                      <li>• Creates additional revenue through game fees</li>
                      <li>• Attracts new users seeking game access</li>
                      <li>• Incentivizes tokens to reach milestones</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1d23] rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-start gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #A855F7, #9333EA)',
                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)'
                  }}
                >
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">🔮 Prediction Markets</h3>
                  <p className="text-[#E9EEF5] mb-4">
                    All Prediction Market revenue flows back into $WYNN, creating direct value accrual for the platform&apos;s native token.
                  </p>
                  <div className="bg-[#0B0D10] rounded-lg p-4">
                    <h4 className="font-semibold text-[#E9EEF5] mb-2">$WYNN Value Creation:</h4>
                    <ul className="text-[#A6B0BF] text-sm space-y-1">
                      <li>• Market fees → $WYNN token holders</li>
                      <li>• Settlement fees → $WYNN treasury</li>
                      <li>• Increased $WYNN demand from revenue sharing</li>
                      <li>• Attracts long-term token holders</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1d23] rounded-xl p-6 border border-red-500/20">
              <div className="flex items-start gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #EF4444, #DC2626)',
                    boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)'
                  }}
                >
                  6
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-400 mb-3">🏛️ The House Grows</h3>
                  <p className="text-[#E9EEF5] mb-4">
                    A larger House enables bigger rewards, competitions, and jackpots, attracting more users and token launches. This completes the cycle and begins it anew with increased momentum.
                  </p>
                  <div className="bg-[#0B0D10] rounded-lg p-4">
                    <h4 className="font-semibold text-[#E9EEF5] mb-2">Growth Multipliers:</h4>
                    <ul className="text-[#A6B0BF] text-sm space-y-1">
                      <li>• Bigger rewards attract more users</li>
                      <li>• More users = more token launches</li>
                      <li>• Increased activity = higher fees</li>
                      <li>• Cycle repeats with greater scale</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Flywheel Benefits</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-green/20">
              <h3 className="text-lg font-semibold text-casino-green mb-3">📈 Compounding Growth</h3>
              <p className="text-[#A6B0BF] mb-4">
                Each cycle through the flywheel increases the platform&apos;s momentum. More launches lead to more fees, which fund bigger rewards, attracting even more launches.
              </p>
              <div className="text-sm text-[#E9EEF5]">
                <strong>Result:</strong> Exponential rather than linear growth
              </div>
            </div>
            
            <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-blue/20">
              <h3 className="text-lg font-semibold text-casino-blue mb-3">🌐 Network Effects</h3>
              <p className="text-[#A6B0BF] mb-4">
                Each new user makes the platform more valuable for existing users. More tokens create more trading pairs, prediction markets, and game opportunities.
              </p>
              <div className="text-sm text-[#E9EEF5]">
                <strong>Result:</strong> Self-reinforcing user acquisition
              </div>
            </div>
            
            <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-gold/20">
              <h3 className="text-lg font-semibold text-casino-gold mb-3">♻️ Sustainable Revenue</h3>
              <p className="text-[#A6B0BF] mb-4">
                Multiple revenue streams ensure The House grows regardless of market conditions. Trading, launches, games, and predictions all contribute to ecosystem health.
              </p>
              <div className="text-sm text-[#E9EEF5]">
                <strong>Result:</strong> Market-resilient growth model
              </div>
            </div>
            
            <div className="bg-[#1a1d23] rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">🎯 Aligned Incentives</h3>
              <p className="text-[#A6B0BF] mb-4">
                All participants benefit when the ecosystem grows. Token creators, traders, gamers, and $WYNN holders all have reasons to contribute to platform success.
              </p>
              <div className="text-sm text-[#E9EEF5]">
                <strong>Result:</strong> Cooperative rather than competitive dynamics
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Flywheel Acceleration</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            The flywheel accelerates as certain thresholds are reached, creating step-function improvements in platform value and user experience.
          </p>
          
          <div className="space-y-4">
            <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-green/20">
              <h3 className="text-lg font-semibold text-casino-green mb-3">Critical Mass Events</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#E9EEF5] mb-2">User Milestones</h4>
                  <ul className="text-[#A6B0BF] text-sm space-y-1">
                    <li>• 1,000 active users</li>
                    <li>• 10,000 tokens launched</li>
                    <li>• 100 Royal Flush tokens</li>
                    <li>• $1M+ daily volume</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#E9EEF5] mb-2">House Milestones</h4>
                  <ul className="text-[#A6B0BF] text-sm space-y-1">
                    <li>• 1,000 SOL in The House</li>
                    <li>• 10,000 SOL weekly rewards</li>
                    <li>• 100,000 SOL total accumulated</li>
                    <li>• $1M+ prediction market volume</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Long-term Vision</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            The JUSTWYNN flywheel is designed to create a self-sustaining ecosystem that becomes the premier destination for token launches, trading, and crypto gaming on Solana.
          </p>
          
          <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-gold/20">
            <h3 className="text-lg font-semibold text-casino-gold mb-4">Ultimate Goals</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#E9EEF5] mb-2">Platform Dominance</h4>
                <p className="text-[#A6B0BF] text-sm mb-4">Become the default choice for Solana token launches through superior rewards and user experience.</p>
                
                <h4 className="font-semibold text-[#E9EEF5] mb-2">Ecosystem Integration</h4>
                <p className="text-[#A6B0BF] text-sm">Deep integration with Solana DeFi protocols, creating cross-platform synergies and value flows.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#E9EEF5] mb-2">$WYNN Value Accrual</h4>
                <p className="text-[#A6B0BF] text-sm mb-4">All platform growth directly benefits $WYNN token holders through multiple revenue streams.</p>
                
                <h4 className="font-semibold text-[#E9EEF5] mb-2">Community Ownership</h4>
                <p className="text-[#A6B0BF] text-sm">Transition to community governance while maintaining the flywheel&apos;s momentum and effectiveness.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-casino-green/10 border border-casino-green/20 rounded-xl p-6 mt-8">
          <h3 className="text-lg font-semibold text-casino-green mb-3">💡 Key Insight</h3>
          <p className="text-[#E9EEF5] leading-relaxed">
            The JUSTWYNN flywheel transforms traditional platform challenges into growth opportunities. Where other platforms struggle with user acquisition costs and retention, JUSTWYNN&apos;s flywheel makes each user more valuable to attract and retain, creating sustainable competitive advantages that compound over time.
          </p>
        </div>
      </div>
    </DocPageLayout>
  );
}
