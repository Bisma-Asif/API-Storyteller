import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CharacterAvatarProps {
  character: 'aisha' | 'dani';
  emotion: 'idle' | 'happy' | 'confused' | 'excited' | 'thinking' | 'mindblown';
  isTalking?: boolean;
}

export function CharacterAvatar({ character, emotion, isTalking = false }: CharacterAvatarProps) {
  // Simple SVG avatars based on character and emotion
  
  const colors = {
    aisha: {
      skin: "#e0ac69",
      hair: "#2b1910",
      shirt: "#ff8da1",
      bg: "bg-pink-100"
    },
    dani: {
      skin: "#f1c27d",
      hair: "#4a332a",
      shirt: "#4db6ac",
      bg: "bg-teal-100"
    }
  };

  const c = colors[character];

  // Map emotions to facial features (simplified for SVG)
  const getEyes = () => {
    switch (emotion) {
      case 'happy': return <path d="M 30 45 Q 35 40 40 45 M 60 45 Q 65 40 70 45" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round"/>;
      case 'confused': return <><circle cx="35" cy="45" r="4" fill="#333"/><circle cx="65" cy="45" r="2" fill="#333"/><path d="M 30 35 L 40 38 M 60 38 L 70 35" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round"/></>;
      case 'excited': return <><path d="M 30 45 L 35 40 L 40 45 M 60 45 L 65 40 L 70 45" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/></>;
      case 'thinking': return <><circle cx="35" cy="42" r="3" fill="#333"/><circle cx="65" cy="42" r="3" fill="#333"/><path d="M 30 35 L 40 35 M 60 38 L 70 35" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round"/></>;
      case 'mindblown': return <><circle cx="35" cy="40" r="5" fill="#333"/><circle cx="65" cy="40" r="5" fill="#333"/><path d="M 30 30 Q 35 25 40 30 M 60 30 Q 65 25 70 30" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round"/></>;
      default: return <><circle cx="35" cy="45" r="3" fill="#333"/><circle cx="65" cy="45" r="3" fill="#333"/></>; // idle
    }
  };

  const getMouth = () => {
    if (isTalking) {
      return (
        <motion.ellipse 
          cx="50" cy="65" rx="6" ry="8" fill="#a03030"
          animate={{ ry: [4, 8, 4, 10, 5] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        />
      );
    }
    
    switch (emotion) {
      case 'happy': return <path d="M 40 65 Q 50 75 60 65" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round"/>;
      case 'confused': return <path d="M 45 65 Q 50 62 55 65" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round"/>;
      case 'excited': return <path d="M 40 60 Q 50 75 60 60 Z" fill="#a03030" stroke="#333" strokeWidth="2"/>;
      case 'thinking': return <path d="M 45 65 L 55 65" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round"/>;
      case 'mindblown': return <ellipse cx="50" cy="65" rx="8" ry="10" fill="#333"/>;
      default: return <path d="M 45 65 Q 50 68 55 65" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round"/>; // idle
    }
  };

  return (
    <div className={`relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md ${c.bg} shrink-0`}>
      <motion.svg 
        viewBox="0 0 100 100" 
        className="w-full h-full"
        animate={isTalking ? { y: [0, -2, 0] } : { y: 0 }}
        transition={{ repeat: Infinity, duration: 0.4 }}
      >
        {/* Shirt/Body */}
        <path d="M 20 100 Q 50 80 80 100 Z" fill={c.shirt} />
        
        {/* Head/Face */}
        <circle cx="50" cy="50" r="28" fill={c.skin} />
        
        {/* Hair - Very simplified blobs */}
        {character === 'aisha' ? (
          <path d="M 20 50 Q 20 20 50 15 Q 80 20 80 50 Q 85 70 75 80 Q 50 50 25 80 Z" fill={c.hair} />
        ) : (
          <path d="M 25 45 Q 30 15 50 15 Q 70 15 75 45 Q 50 30 25 45 Z" fill={c.hair} />
        )}

        {/* Features */}
        {getEyes()}
        {getMouth()}
        
        {/* Blush */}
        {(emotion === 'happy' || emotion === 'excited') && (
          <>
            <ellipse cx="28" cy="55" rx="4" ry="2" fill="#ff9999" opacity="0.6"/>
            <ellipse cx="72" cy="55" rx="4" ry="2" fill="#ff9999" opacity="0.6"/>
          </>
        )}
      </motion.svg>
      
      {/* Emotion particles/effects */}
      {emotion === 'mindblown' && (
        <motion.div 
          className="absolute -top-2 -right-2 text-xl"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: [0, 1.2, 1], rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          💥
        </motion.div>
      )}
      {emotion === 'excited' && (
        <motion.div 
          className="absolute -top-1 -right-1 text-lg"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          ✨
        </motion.div>
      )}
    </div>
  );
}
