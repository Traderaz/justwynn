"use client";

import { motion } from "framer-motion";
import { memo, useMemo } from "react";

interface CasinoBackgroundProps {
  variant?: 'hero' | 'section';
  opacity?: number;
  className?: string;
}

// Deterministic random function for consistent SSR/client rendering
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  const result = x - Math.floor(x);
  return Math.round(result * 10000) / 10000;
};

// Memoized background suits generation for better performance
const useBackgroundSuits = (count: number) => {
  return useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.round((seededRandom(i * 4.3) * 95 + 2.5) * 100) / 100,
      y: Math.round((seededRandom(i * 2.7) * 90 + 5) * 100) / 100,
      delay: Math.round(seededRandom(i * 6.1) * 3 * 100) / 100,
      duration: Math.round((6 + seededRandom(i * 2.3) * 6) * 100) / 100,
      suit: ['♦', '♠', '♥', '♣'][i % 4]
    })), [count]
  );
};

export const CasinoBackground = memo(function CasinoBackground({ 
  variant = 'section', 
  opacity = 0.15, 
  className = "" 
}: CasinoBackgroundProps) {
  const isHero = variant === 'hero';
  const backgroundSuits = useBackgroundSuits(isHero ? 8 : 6);

  return (
    <div className={`absolute inset-0 ${className}`} style={{ opacity }}>
      {/* Background with vignette */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0B0D10]" />
        {!isHero && <div className="vignette" />}
      </div>

      {/* Casino-themed floating elements */}
      <div className="absolute inset-0">
        {/* Enhanced floating card suits with casino colors */}
        {['♠', '♥', '♦', '♣'].map((suit, i) => (
          <motion.div
            key={`suit-${i}`}
            className="absolute text-2xl font-bold will-change-transform"
            style={{
              left: `${(i * 20 + 10) % 80 + 10}%`,
              top: `${(i * 25 + 20) % 70 + 15}%`,
              color: suit === '♥' || suit === '♦' ? '#DC2626' : '#00B366',
              opacity: 0.4,
              textShadow: `0 0 10px ${suit === '♥' || suit === '♦' ? '#DC262620' : '#00B36620'}`
            }}
            animate={{
              y: [-15, 15, -15],
              rotate: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          >
            {suit}
          </motion.div>
        ))}

        {/* Floating playing card suits background */}
        {backgroundSuits.map((suitData) => {
          const isRed = suitData.suit === '♥' || suitData.suit === '♦';
          const color = isRed ? '#DC2626' : '#00B366';
          const shadowColor = isRed ? '#DC262640' : '#00B36640';
          
          return (
            <motion.div
              key={`suit-bg-${suitData.id}`}
              className="absolute text-3xl font-bold select-none will-change-transform"
              style={{
                left: `${suitData.x}%`,
                top: `${suitData.y}%`,
                color: color,
                opacity: '0.4',
                textShadow: `0 0 16px ${shadowColor}`,
                fontSize: '32px'
              }}
              animate={{
                scale: [0.9, 1.3, 0.9],
                opacity: [0.25, 0.45, 0.25],
                rotate: [-8, 8, -8]
              }}
              transition={{
                duration: suitData.duration,
                repeat: Infinity,
                delay: suitData.delay,
                ease: "easeInOut"
              }}
            >
              {suitData.suit}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
});
