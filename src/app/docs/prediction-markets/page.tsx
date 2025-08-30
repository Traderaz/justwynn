"use client";

import React from 'react';
import DocPageLayout from '@/components/docs/DocPageLayout';

export default function PredictionMarketsPage() {
  return (
    <DocPageLayout
      title="Prediction Markets"
      description="Comprehensive guide to JUSTWYNN's prediction markets - bet on token metrics, ecosystem events, and global markets."
      prevPage={{ title: "Milestone Games", href: "/docs/milestone-games" }}
      nextPage={{ title: "The House Cup", href: "/docs/house-cup" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">What are Prediction Markets?</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            JUSTWYNN's prediction markets allow users to bet on future outcomes across various categories. From token performance metrics to global events, our prediction markets combine the excitement of betting with the wisdom of crowds to create accurate forecasts.
          </p>
          
          <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-blue/20 mb-6">
            <h3 className="text-lg font-semibold text-casino-blue mb-3">Key Features</h3>
            <ul className="space-y-2 text-[#E9EEF5]">
              <li className="flex items-start gap-3">
                <span className="text-casino-blue">•</span>
                <span>Real-time odds based on market sentiment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-casino-blue">•</span>
                <span>Advanced binary prediction markets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-casino-blue">•</span>
                <span>Automated settlement using verifiable data sources</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-casino-blue">•</span>
                <span>Integration with The House for enhanced rewards</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-casino-gold">💰</span>
                <span><strong>All prediction market revenue flows directly to $WYNN token holders</strong></span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Market Categories</h2>
          
          <div className="space-y-6">
            <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-green/20">
              <h3 className="text-xl font-semibold text-casino-green mb-3">🚀 Token Metrics</h3>
              <p className="text-[#A6B0BF] mb-4">
                Predict various performance metrics for tokens across the Solana ecosystem.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#0B0D10] rounded-lg p-4">
                  <h4 className="font-semibold text-[#E9EEF5] mb-2">Market Cap Predictions</h4>
                  <p className="text-sm text-[#A6B0BF]">Will token X reach $1M, $10M, or $100M market cap by specific dates?</p>
                </div>
                <div className="bg-[#0B0D10] rounded-lg p-4">
                  <h4 className="font-semibold text-[#E9EEF5] mb-2">Holder Growth</h4>
                  <p className="text-sm text-[#A6B0BF]">Predict when tokens will reach 1K, 10K, or 100K holders.</p>
                </div>
                <div className="bg-[#0B0D10] rounded-lg p-4">
                  <h4 className="font-semibold text-[#E9EEF5] mb-2">Volume Milestones</h4>
                  <p className="text-sm text-[#A6B0BF]">Bet on daily, weekly, or monthly trading volume targets.</p>
                </div>
                <div className="bg-[#0B0D10] rounded-lg p-4">
                  <h4 className="font-semibold text-[#E9EEF5] mb-2">Price Movements</h4>
                  <p className="text-sm text-[#A6B0BF]">Predict price ranges and percentage changes over time.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-red/20">
              <h3 className="text-xl font-semibold text-casino-red mb-3">🏛️ The House Performance</h3>
              <p className="text-[#A6B0BF] mb-4">
                Bet on The House growth, jackpot sizes, and platform performance metrics.
              </p>
              <ul className="space-y-2 text-[#E9EEF5]">
                <li className="flex items-start gap-3">
                  <span className="text-casino-red">•</span>
                  <span>Weekly jackpot size predictions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-casino-red">•</span>
                  <span>Monthly House growth percentage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-casino-red">•</span>
                  <span>House Cup competition winners</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-casino-red">•</span>
                  <span>Platform milestone achievements</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-gold/20">
              <h3 className="text-xl font-semibold text-casino-gold mb-3">🌐 Ecosystem Events</h3>
              <p className="text-[#A6B0BF] mb-4">
                Predict major developments in the Solana ecosystem and broader crypto space.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">📈</div>
                  <h4 className="font-semibold text-[#E9EEF5] mb-1">SOL Price</h4>
                  <p className="text-xs text-[#A6B0BF]">Price targets and milestones</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🤝</div>
                  <h4 className="font-semibold text-[#E9EEF5] mb-1">Partnerships</h4>
                  <p className="text-xs text-[#A6B0BF]">Major ecosystem partnerships</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <h4 className="font-semibold text-[#E9EEF5] mb-1">Network Activity</h4>
                  <p className="text-xs text-[#A6B0BF]">Transaction volume and TPS</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1d23] rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">🌍 Global Markets</h3>
              <p className="text-[#A6B0BF] mb-4">
                Predict major world events including politics, sports, economics, and more.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Politics", "Sports", "Economics", "Technology", "Climate", "Entertainment"].map((category) => (
                  <span key={category} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">How to Participate</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-[#1a1d23] rounded-lg border border-casino-blue/20">
              <div className="w-8 h-8 rounded-full bg-casino-blue flex items-center justify-center text-white font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold text-[#E9EEF5] mb-2">Browse Markets</h3>
                <p className="text-[#A6B0BF]">Explore available prediction markets across different categories. Each market shows current odds, volume, and time remaining.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-[#1a1d23] rounded-lg border border-casino-blue/20">
              <div className="w-8 h-8 rounded-full bg-casino-blue flex items-center justify-center text-white font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold text-[#E9EEF5] mb-2">Place Your Bet</h3>
                <p className="text-[#A6B0BF]">Choose "YES" or "NO" and enter your bet amount. Your potential payout is calculated based on current market odds.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-[#1a1d23] rounded-lg border border-casino-blue/20">
              <div className="w-8 h-8 rounded-full bg-casino-blue flex items-center justify-center text-white font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold text-[#E9EEF5] mb-2">Market Resolution</h3>
                <p className="text-[#A6B0BF]">Markets resolve automatically using verifiable data sources. Winners receive their payouts immediately.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-[#1a1d23] rounded-lg border border-casino-blue/20">
              <div className="w-8 h-8 rounded-full bg-casino-blue flex items-center justify-center text-white font-bold text-sm">4</div>
              <div>
                <h3 className="font-semibold text-[#E9EEF5] mb-2">Earn Rewards</h3>
                <p className="text-[#A6B0BF]">Successful predictions earn you SOL, tokens, and JUSTWYNN platform rewards. Active traders get bonus entries into The House competitions.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Market Mechanics</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-green/20">
              <h3 className="text-lg font-semibold text-casino-green mb-3">Odds & Pricing</h3>
              <p className="text-[#A6B0BF] mb-4">
                Market prices reflect the probability of an outcome occurring. A 70¢ "YES" price means the market believes there's a 70% chance of the event happening.
              </p>
              <div className="bg-[#0B0D10] rounded-lg p-4">
                <div className="text-sm text-[#A6B0BF] mb-2">Example:</div>
                <div className="text-[#E9EEF5]">
                  <div>YES: 67¢ (67% probability)</div>
                  <div>NO: 33¢ (33% probability)</div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-red/20">
              <h3 className="text-lg font-semibold text-casino-red mb-3">Settlement</h3>
              <p className="text-[#A6B0BF] mb-4">
                Markets resolve using verifiable data sources including on-chain data, price feeds, and trusted oracles. Resolution is automatic and transparent.
              </p>
              <ul className="space-y-1 text-sm text-[#E9EEF5]">
                <li>• On-chain token metrics</li>
                <li>• Price feed oracles</li>
                <li>• Verified news sources</li>
                <li>• Community consensus</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">$WYNN Token Revenue Model</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            All revenue generated from prediction market activities flows directly to $WYNN token holders, creating a sustainable value accrual mechanism for our native token.
          </p>
          
          <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-gold/20 mb-8">
            <h3 className="text-lg font-semibold text-casino-gold mb-4">Revenue Streams to $WYNN</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#E9EEF5] mb-2">Market Fees</h4>
                <p className="text-[#A6B0BF] text-sm mb-4">Platform fees from all prediction market transactions are distributed to $WYNN token holders.</p>
                
                <h4 className="font-semibold text-[#E9EEF5] mb-2">Settlement Fees</h4>
                <p className="text-[#A6B0BF] text-sm">Small fees collected during market resolution go directly to the $WYNN treasury.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#E9EEF5] mb-2">Volume-Based Rewards</h4>
                <p className="text-[#A6B0BF] text-sm mb-4">Higher trading volumes generate more revenue for $WYNN holders through our fee structure.</p>
                
                <h4 className="font-semibold text-[#E9EEF5] mb-2">Market Creation Fees</h4>
                <p className="text-[#A6B0BF] text-sm">Fees from creating new prediction markets contribute to $WYNN token value.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Integration with The House</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            Prediction markets are deeply integrated with The House ecosystem, creating additional value for both prediction market participants and the broader JUSTWYNN community.
          </p>
          
          <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-gold/20">
            <h3 className="text-lg font-semibold text-casino-gold mb-4">House Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#E9EEF5] mb-2">Revenue Sharing</h4>
                <p className="text-[#A6B0BF] text-sm mb-4">A portion of prediction market fees flows into The House, growing the community bankroll and funding larger rewards.</p>
                
                <h4 className="font-semibold text-[#E9EEF5] mb-2">Bonus Entries</h4>
                <p className="text-[#A6B0BF] text-sm">Active prediction market traders earn bonus entries into House Cup competitions and milestone games.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#E9EEF5] mb-2">Cross-Platform Rewards</h4>
                <p className="text-[#A6B0BF] text-sm mb-4">Prediction market winnings can be used to participate in token launches and milestone games.</p>
                
                <h4 className="font-semibold text-[#E9EEF5] mb-2">Data Insights</h4>
                <p className="text-[#A6B0BF] text-sm">Market predictions provide valuable insights for token launches and platform development.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Getting Started</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            Ready to start predicting? Here's what you need to know to get started with JUSTWYNN prediction markets.
          </p>
          
          <div className="bg-[#1a1d23] rounded-xl p-6 border border-casino-blue/20">
            <h3 className="text-lg font-semibold text-casino-blue mb-4">Requirements</h3>
            <ul className="space-y-2 text-[#E9EEF5]">
              <li className="flex items-start gap-3">
                <span className="text-casino-blue">•</span>
                <span>Connected Solana wallet (Phantom, Solflare, etc.)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-casino-blue">•</span>
                <span>SOL for transaction fees and betting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-casino-blue">•</span>
                <span>Understanding of prediction market mechanics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-casino-blue">•</span>
                <span>Awareness of risks - never bet more than you can afford to lose</span>
              </li>
            </ul>
          </div>
        </section>

        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6 mt-8">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">⚠️ Important Disclaimer</h3>
          <p className="text-[#E9EEF5] text-sm leading-relaxed">
            Prediction markets involve financial risk. Past performance does not guarantee future results. Market outcomes can be unpredictable, and you should never bet more than you can afford to lose. JUSTWYNN provides the platform but does not guarantee market outcomes or provide financial advice. Please bet responsibly and understand the risks involved.
          </p>
        </div>
      </div>
    </DocPageLayout>
  );
}
