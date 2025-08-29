"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface SimpleWaitlistFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SimpleWaitlistForm({ isOpen, onClose }: SimpleWaitlistFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    walletAddress: "",
    socialHandles: {
      twitter: "",
      telegram: "",
      discord: ""
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ 
        name: "", 
        walletAddress: "", 
        socialHandles: { twitter: "", telegram: "", discord: "" }
      });
      onClose();
    }, 3000);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSocialChange = (platform: "twitter" | "telegram" | "discord", value: string) => {
    setFormData(prev => ({
      ...prev,
      socialHandles: {
        ...prev.socialHandles,
        [platform]: value
      }
    }));
  };

  const socialPlatforms = [
    { 
      value: "twitter" as const,
      label: "Twitter", 
      icon: "𝕏", 
      placeholder: "@username",
      prefix: "@"
    },
    { 
      value: "telegram" as const,
      label: "Telegram", 
      icon: "✈️", 
      placeholder: "@username",
      prefix: "@"
    },
    { 
      value: "discord" as const,
      label: "Discord", 
      icon: "🎮", 
      placeholder: "username#1234",
      prefix: ""
    }
  ];

  // Check if at least one social handle is filled
  const hasAnySocialHandle = Object.values(formData.socialHandles).some(handle => handle.trim() !== "");

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="relative w-full max-w-md p-8 rounded-3xl backdrop-blur-xl border-2 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 179, 102, 0.15) 0%, rgba(0, 179, 102, 0.05) 50%, rgba(245, 158, 11, 0.10) 100%)',
            borderColor: 'rgba(0, 179, 102, 0.6)',
            boxShadow: '0 25px 80px rgba(0, 179, 102, 0.25), 0 0 60px rgba(0, 179, 102, 0.20)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Static neon border */}
          <div 
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: 'linear-gradient(45deg, transparent, rgba(0, 179, 102, 0.3), transparent)',
              filter: 'blur(1px)'
            }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#A6B0BF] hover:text-casino-green transition-colors z-10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="relative z-10">
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <h2 
                    className="text-3xl font-bold mb-4"
                    style={{ 
                      fontFamily: 'var(--font-space-grotesk)',
                      background: 'linear-gradient(135deg, #00E28A 0%, #00B366 50%, #F59E0B 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '0 0 30px rgba(0, 226, 138, 0.5)'
                    }}
                  >
                    Join The List
                  </h2>
                  <p className="text-[#A6B0BF] text-lg">
                    Be the first to know when JUSTWYNN launches
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-casino-green font-semibold mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="w-full p-4 rounded-xl bg-black/20 border-2 border-casino-green/30 text-white placeholder-[#A6B0BF] focus:border-casino-green focus:outline-none transition-all duration-200"
                      placeholder="Enter your name"
                      style={{
                        boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3)',
                        fontFamily: 'var(--font-inter)'
                      }}
                    />
                  </div>

                  {/* Social Media Handles */}
                  <div>
                    <label className="block text-casino-green font-semibold mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      Social Media Handles
                    </label>
                    <p className="text-[#A6B0BF] text-sm mb-4">Add at least one social media handle</p>
                    
                    <div className="space-y-3">
                      {socialPlatforms.map((platform) => (
                        <div key={platform.value} className="relative">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-lg">{platform.icon}</span>
                            <span 
                              className="text-casino-green font-medium"
                              style={{ fontFamily: 'var(--font-space-grotesk)' }}
                            >
                              {platform.label}
                            </span>
                          </div>
                          <div className="relative">
                            {platform.prefix && (
                              <span 
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-casino-green font-semibold"
                                style={{ fontFamily: 'var(--font-inter)' }}
                              >
                                {platform.prefix}
                              </span>
                            )}
                            <input
                              type="text"
                              value={formData.socialHandles[platform.value]}
                              onChange={(e) => handleSocialChange(platform.value, e.target.value)}
                              className={`w-full p-3 rounded-xl bg-black/20 border-2 border-casino-green/30 text-white placeholder-[#A6B0BF] focus:border-casino-green focus:outline-none transition-all duration-200 ${
                                platform.prefix ? 'pl-8' : ''
                              }`}
                              placeholder={platform.placeholder}
                              style={{
                                boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3)',
                                fontFamily: 'var(--font-inter)'
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Wallet Address Field */}
                  <div>
                    <label className="block text-casino-green font-semibold mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      Wallet Address
                    </label>
                    <input
                      type="text"
                      value={formData.walletAddress}
                      onChange={(e) => handleInputChange('walletAddress', e.target.value)}
                      required
                      className="w-full p-4 rounded-xl bg-black/20 border-2 border-casino-green/30 text-white placeholder-[#A6B0BF] focus:border-casino-green focus:outline-none transition-all duration-200"
                      placeholder="Enter your Solana wallet address"
                      style={{
                        boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3)',
                        fontFamily: 'var(--font-inter)'
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.walletAddress || !hasAnySocialHandle}
                    className="w-full casino-green hover:opacity-90 text-white border border-casino-green h-14 px-8 rounded-2xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ 
                      fontFamily: 'var(--font-inter)', 
                      boxShadow: '0 0 20px rgba(0, 179, 102, 0.3)' 
                    }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Joining...
                      </div>
                    ) : (
                      "Join The List"
                    )}
                  </Button>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-8">
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-casino-green flex items-center justify-center"
                  style={{ boxShadow: '0 0 40px rgba(0, 179, 102, 0.6)' }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <h3 
                  className="text-2xl font-bold text-casino-green mb-4"
                  style={{ 
                    fontFamily: 'var(--font-space-grotesk)',
                    textShadow: '0 0 20px rgba(0, 179, 102, 0.5)'
                  }}
                >
                  Welcome to The House!
                </h3>
                <p className="text-[#A6B0BF] text-lg">
                  You&apos;re on the list. We&apos;ll notify you when JUSTWYNN launches.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
