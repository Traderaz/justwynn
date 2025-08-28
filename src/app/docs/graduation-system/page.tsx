"use client";

import React from 'react';
import DocPageLayout from '@/components/docs/DocPageLayout';

export default function GraduationSystemPage() {
  return (
    <DocPageLayout
      title="Graduation System"
      description="How tokens graduate to Hall of Fame status and unlock ongoing visibility and perks for their communities."
      prevPage={{ title: "Milestone Games", href: "/docs/milestone-games" }}
      nextPage={{ title: "Quickstart", href: "/docs/quickstart" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">What is Graduation?</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            Graduation is JUSTWYNN's recognition system for tokens that demonstrate sustained success and community strength. Graduated tokens earn Hall of Fame status, ongoing visibility, and special perks for their holder communities.
          </p>
          
          <div className="bg-gradient-to-r from-casino-gold/10 to-red-400/10 rounded-xl p-6 border border-casino-gold/20">
            <h3 className="text-xl font-semibold text-white mb-4">🎓 Beyond Launch Hype</h3>
            <p className="text-[#E9EEF5] leading-relaxed">
              Unlike other platforms that focus only on initial launches, JUSTWYNN rewards projects that build real value and maintain community engagement over time. Graduation represents sustained success, not just early momentum.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Graduation Requirements</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            Tokens must meet multiple criteria over sustained periods to qualify for graduation. This ensures only genuinely successful projects achieve Hall of Fame status.
          </p>
          
          <div className="grid gap-6">
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-green/20">
              <h3 className="text-xl font-semibold text-casino-green mb-3">📈 Performance Metrics</h3>
              <ul className="text-[#E9EEF5] space-y-2">
                <li>• Minimum $5M market cap maintained for 30+ days</li>
                <li>• 2,000+ unique holders with healthy distribution</li>
                <li>• Consistent trading volume and liquidity</li>
                <li>• No major dumps or manipulation patterns</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-casino-gold/20">
              <h3 className="text-xl font-semibold text-casino-gold mb-3">👥 Community Strength</h3>
              <ul className="text-[#E9EEF5] space-y-2">
                <li>• Active social media presence and engagement</li>
                <li>• Regular development updates and roadmap progress</li>
                <li>• Strong holder retention rates</li>
                <li>• Positive community sentiment and growth</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1a1d23] border border-red-400/20">
              <h3 className="text-xl font-semibold text-red-400 mb-3">🏗️ Project Development</h3>
              <ul className="text-[#E9EEF5] space-y-2">
                <li>• Clear utility and value proposition</li>
                <li>• Active development and feature releases</li>
                <li>• Transparent team and communication</li>
                <li>• Real-world adoption or partnerships</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Hall of Fame Benefits</h2>
          <p className="text-[#E9EEF5] leading-relaxed mb-6">
            Graduated tokens and their communities receive ongoing benefits and recognition within the JUSTWYNN ecosystem:
          </p>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-casino-gold/10 border border-casino-gold/20">
              <h4 className="font-semibold text-casino-gold mb-2">👑 Featured Placement</h4>
              <p className="text-[#E9EEF5] text-sm">
                Prominent display on JUSTWYNN's main interface, docs, and marketing materials. Graduated tokens get premium visibility.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-casino-green/10 border border-casino-green/20">
              <h4 className="font-semibold text-casino-green mb-2">🎁 Exclusive Rewards</h4>
              <p className="text-[#E9EEF5] text-sm">
                Holders of graduated tokens receive special perks, bonus game entries, and exclusive access to new features and competitions.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-red-400/10 border border-red-400/20">
              <h4 className="font-semibold text-red-400 mb-2">🤝 Partnership Opportunities</h4>
              <p className="text-[#E9EEF5] text-sm">
                Graduated projects get priority for partnerships, cross-promotion, and collaboration opportunities within the ecosystem.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-casino-gold mb-4">Graduation Process</h2>
          
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-casino-green/20 flex items-center justify-center">
                  <span className="text-casino-green font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Automatic Monitoring</h3>
                <p className="text-[#A6B0BF]">
                  JUSTWYNN continuously monitors all tokens for graduation criteria. No application process required—qualified tokens are automatically identified.
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
                <h3 className="text-xl font-semibold text-white mb-3">Community Review</h3>
                <p className="text-[#A6B0BF]">
                  Qualified tokens undergo a brief community review period where JUSTWYNN users can provide feedback and verify project legitimacy.
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
                <h3 className="text-xl font-semibold text-white mb-3">Graduation Ceremony</h3>
                <p className="text-[#A6B0BF]">
                  Successful tokens are officially graduated in a public ceremony, pay their graduation fee to The House, and receive Hall of Fame status.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocPageLayout>
  );
}
