"use client";

import React, { memo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface SlotSymbol {
  type: 'icon' | 'text';
  value?: string;
  icon?: string;
  text?: string;
  description?: string;
  isJackpot?: boolean;
}

export interface PremiumSlotMachineProps {
  reels?: SlotSymbol[][];
  isSpinning?: boolean;
  results?: SlotSymbol[];
  onSpin?: () => void;
  showJackpot?: boolean;
  showingContent?: boolean;
  className?: string;
}

// JUSTWYNN themed reels
const defaultReels: SlotSymbol[][] = [
  [
    { type: 'icon', icon: '🎫' },
    { type: 'icon', icon: '🎰' },
    { type: 'icon', icon: '🎡' }
  ],
  [
    { type: 'icon', icon: '💰' },
    { type: 'icon', icon: '🏆' },
    { type: 'icon', icon: '⭐' }
  ],
  [
    { type: 'icon', icon: '🎯' },
    { type: 'icon', icon: '💎' },
    { type: 'icon', icon: '🎁' }
  ]
];

const defaultResults: SlotSymbol[] = [
  { type: 'icon', icon: '🎫' },
  { type: 'icon', icon: '💰' },
  { type: 'icon', icon: '🎯' }
];

export const PremiumSlotMachine = memo(function PremiumSlotMachine({
  reels = defaultReels,
  isSpinning = false,
  results = defaultResults,
  onSpin = () => {},
  showJackpot = false,
  showingContent = false,
  className = ''
}: PremiumSlotMachineProps) {
  const [coinShower, setCoinShower] = useState(false);

  useEffect(() => {
    if (showJackpot) {
      setCoinShower(true);
      const timer = setTimeout(() => setCoinShower(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showJackpot]);

  const renderSymbol = (symbol: SlotSymbol, size: 'small' | 'large' = 'large') => {
    const symbolSize = size === 'large' ? 'text-4xl' : 'text-2xl';

    switch (symbol.type) {
      case 'icon':
        return (
          <div className={`${symbolSize} ${symbol.isJackpot ? 'text-casino-gold' : 'text-[#E9EEF5]'}`}>
            {symbol.icon}
          </div>
        );
      
      case 'text':
        return (
          <div className={`${size === 'large' ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-lg sm:text-xl md:text-2xl'} font-black ${symbol.isJackpot ? 'text-casino-gold' : 'text-[#E9EEF5]'} text-center leading-tight px-2 tracking-wider`}
            style={{
              textShadow: symbol.isJackpot 
                ? '0 0 20px rgba(245, 158, 11, 0.8), 0 0 40px rgba(245, 158, 11, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.9), 0 0 60px rgba(245, 158, 11, 0.2)'
                : '0 0 15px rgba(233, 238, 245, 0.6), 0 0 30px rgba(233, 238, 245, 0.3), 2px 2px 4px rgba(0, 0, 0, 0.8)',
              WebkitTextStroke: symbol.isJackpot ? '1px rgba(184, 134, 11, 0.8)' : '1px rgba(0, 0, 0, 0.3)',
              filter: symbol.isJackpot ? 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.6))' : 'none'
            }}
          >
            {symbol.text}
          </div>
        );
      
      default:
        return <div className={symbolSize}>?</div>;
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Coin shower effect */}
      {coinShower && (
        <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6 rounded-full border-2"
              style={{
                background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                borderColor: '#F59E0B',
                boxShadow: '0 4px 12px rgba(245, 158, 11, 0.4)'
              }}
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 400), 
                y: -20,
                rotate: 0,
                scale: 0.5
              }}
              animate={{ 
                y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 20,
                rotate: 360,
                scale: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2 + Math.random() * 2,
                delay: i * 0.1,
                ease: "easeIn"
              }}
            >
              <div 
                className="absolute inset-1 rounded-full opacity-60"
                style={{ background: '#FCD34D' }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-black">
                $
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Jackpot banner */}
      <AnimatePresence>
        {showJackpot && (
          <motion.div
            className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-40"
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div 
              className="px-8 py-4 rounded-2xl border-4 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                borderColor: '#F59E0B',
                boxShadow: '0 20px 60px rgba(245, 158, 11, 0.4), 0 0 40px rgba(245, 158, 11, 0.3)'
              }}
            >
              <motion.div
                className="text-3xl font-bold text-center text-black"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                style={{
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                }}
              >
                🎰 JACKPOT! 🎰
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slot machine frame */}
      <div className="relative bg-gradient-to-b from-[#2A2D35] via-[#1F2127] to-[#12151B] rounded-3xl border-4 border-casino-gold shadow-2xl overflow-hidden">
        
        {/* Chrome frame details */}
        <div className="absolute inset-0 rounded-3xl border-2 border-white/20 pointer-events-none" />
        <div className="absolute inset-2 rounded-2xl border border-white/10 pointer-events-none" />
        
        {/* Top display */}
        <div className="bg-gradient-to-r from-[#0B0D10] to-[#12151B] p-6 border-b-2 border-casino-gold/50">
          <div className="text-center">
            <motion.div 
              className="text-2xl font-bold text-casino-gold mb-2"
              animate={{ opacity: showJackpot ? [1, 0.5, 1] : 1 }}
              transition={{ duration: 0.8, repeat: showJackpot ? Infinity : 0 }}
            >
              JUSTWYNN SLOTS
            </motion.div>
            <div className="text-sm text-[#A6B0BF]">Milestone Games</div>
          </div>
        </div>

        {/* Reels container */}
        <div className="p-2 sm:p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {reels.map((reel, reelIndex) => (
              <div key={reelIndex} className="relative">
                {/* Reel frame */}
                <motion.div 
                  className={`bg-black/60 rounded-xl border-2 overflow-hidden relative backdrop-blur-sm ${
                    showingContent 
                      ? 'sm:min-h-[350px] md:min-h-[400px]' 
                      : 'h-[200px] sm:h-[280px] md:h-[320px]'
                  }`}
                  style={{
                    borderColor: showingContent ? '#00B366' : '#F59E0B',
                    borderWidth: showingContent ? '3px' : '2px'
                  }}
                  animate={{
                    height: showingContent && !isSpinning ? 'auto' : isSpinning ? '200px' : '200px',
                    minHeight: showingContent && !isSpinning ? '300px' : '200px'
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  
                  {/* Reel content */}
                  <div className={`${showingContent ? 'relative' : 'absolute inset-0'}`}>
                    <AnimatePresence mode="wait">
                      {isSpinning ? (
                        <motion.div
                          key={`spinning-${reelIndex}`}
                          className="absolute inset-0 overflow-hidden"
                        >
                          <motion.div
                            className="flex flex-col"
                            initial={{ y: 0 }}
                            animate={{ y: [-320, 0] }}
                            transition={{ 
                              duration: 0.15, 
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          >
                            {/* Spinning symbols */}
                            {Array.from({ length: 20 }).map((_, i) => {
                              const randomSymbol = reel[i % reel.length];
                              return (
                                <div key={i} className="h-16 flex items-center justify-center border-b border-white/5">
                                  {renderSymbol(randomSymbol, 'small')}
                                </div>
                              );
                            })}
                          </motion.div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={`result-${reelIndex}-${JSON.stringify(results[reelIndex])}`}
                          className="h-full flex flex-col justify-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.8, 
                            delay: reelIndex * 0.3,
                            ease: "easeOut"
                          }}
                        >
                          {/* Traditional 3x3 slot machine layout */}
                          {!showingContent ? (
                            <div className="flex flex-col h-full">
                              {/* Row 1 - Top */}
                              <div className="flex-1 flex items-center justify-center opacity-70 border-b border-white/10">
                                {renderSymbol(reel[(reelIndex + 0) % reel.length], 'small')}
                              </div>
                              
                              {/* Row 2 - MIDDLE PAYLINE (highlighted) */}
                              <div className="flex-1 flex items-center justify-center relative border-y-2 border-casino-green/50 bg-casino-green/10">
                                {/* Payline indicator */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-casino-green/20 to-transparent"></div>
                                <motion.div
                                  className="relative z-10"
                                  animate={{ 
                                    scale: results[reelIndex]?.isJackpot ? [1, 1.2, 1] : 1
                                  }}
                                  transition={{ 
                                    duration: results[reelIndex]?.isJackpot ? 1 : 2,
                                    repeat: results[reelIndex]?.isJackpot ? Infinity : 0
                                  }}
                                >
                                  {renderSymbol(results[reelIndex] || reel[1], 'large')}
                                </motion.div>
                              </div>
                              
                              {/* Row 3 - Bottom */}
                              <div className="flex-1 flex items-center justify-center opacity-70 border-t border-white/10">
                                {renderSymbol(reel[(reelIndex + 2) % reel.length], 'small')}
                              </div>
                            </div>
                          ) : (
                            /* Content display mode */
                            <motion.div
                              className="p-1 sm:p-2 md:p-4 lg:p-6 text-center h-full flex flex-col justify-center"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.8 }}
                            >
                              {/* Icon */}
                              <motion.div 
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 sm:mb-2 md:mb-3 lg:mb-4"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                {results[reelIndex]?.icon || '💎'}
                              </motion.div>
                              
                              {/* Title */}
                              <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-tight mb-1 sm:mb-2 md:mb-3 lg:mb-4">
                                {results[reelIndex]?.text || 'Game'}
                              </div>
                              
                              {/* Full description */}
                              <div className="text-[#A6B0BF] text-xs leading-relaxed">
                                {results[reelIndex]?.description || 'Play to win amazing prizes'}
                              </div>
                              
                              {/* Decorative divider */}
                              <motion.div 
                                className="w-8 sm:w-12 md:w-16 h-0.5 bg-casino-green mx-auto mt-2 sm:mt-3 md:mt-4 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                              />
                            </motion.div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Reel highlight - only show when not displaying content */}
                  {!showingContent && (
                    <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-20">
                      <div className="h-full border-t-2 border-b-2 border-casino-gold/50 bg-gradient-to-r from-transparent via-casino-gold/10 to-transparent" />
                    </div>
                  )}
                  
                  {/* Reel number */}
                  <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-4 h-4 sm:w-6 sm:h-6 bg-casino-gold rounded-full flex items-center justify-center">
                    <span className="text-black text-xs font-bold">{reelIndex + 1}</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Control panel */}
        <div className="bg-gradient-to-r from-[#12151B] to-[#1F2127] p-4 sm:p-6 md:p-8 border-t-2 border-casino-gold/50">
          <div className="flex justify-center">
            <motion.button
              onClick={onSpin}
              disabled={isSpinning}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div 
                className="px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6 rounded-xl sm:rounded-2xl border-2 shadow-2xl relative overflow-hidden"
                style={{
                  background: 'linear-gradient(to bottom, #00E28A, #00B366)',
                  borderColor: '#00E28A',
                  boxShadow: '0 0 30px rgba(0, 226, 138, 0.5), 0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: isSpinning ? [-100, 300] : -100 }}
                  transition={{ duration: 1.5, repeat: isSpinning ? Infinity : 0 }}
                />
                
                <div className="relative flex items-center gap-4">
                  <motion.div
                    animate={{ rotate: isSpinning ? 360 : 0 }}
                    transition={{ duration: 0.5, repeat: isSpinning ? Infinity : 0, ease: "linear" }}
                  >
                    <div className="w-8 h-8 text-black">🎰</div>
                  </motion.div>
                  
                  <span className="text-black font-bold text-sm sm:text-lg md:text-xl">
                    {isSpinning ? "SPINNING..." : "SPIN TO WIN"}
                  </span>
                </div>
              </div>
            </motion.button>
          </div>
          
          {/* Status lights */}
          <div className="flex justify-center gap-4 mt-6">
            {[0, 1, 2, 3].map(i => (
              <motion.div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  isSpinning ? 'bg-casino-gold' : 'bg-casino-green'
                }`}
                animate={{ opacity: isSpinning ? [1, 0.3, 1] : 1 }}
                transition={{ 
                  duration: 0.8, 
                  repeat: isSpinning ? Infinity : 0,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
