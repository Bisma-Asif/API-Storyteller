import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CharacterAvatar } from './CharacterAvatar';
import { Emotion } from '../../data/conversation';

interface ChatBubbleProps {
  sender: 'aisha' | 'dani';
  text: string;
  emotion: Emotion;
  isLatest: boolean;
  onComplete?: () => void;
}

export function ChatBubble({ sender, text, emotion, isLatest, onComplete }: ChatBubbleProps) {
  const isAisha = sender === 'aisha';
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Split text into words for lip-sync reveal
  const words = text.split(" ");

  useEffect(() => {
    if (!isLatest) {
      setDisplayedText(text);
      setIsTyping(false);
      return;
    }

    let currentIndex = 0;
    let tempText = "";
    
    // Simulate initial "thinking/typing" delay before words appear
    const initialDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < words.length) {
          tempText += (currentIndex > 0 ? " " : "") + words[currentIndex];
          setDisplayedText(tempText);
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          if (onComplete) onComplete();
        }
      }, 150); // Speed of word reveal
      
      return () => clearInterval(interval);
    }, 800); // Initial typing indicator delay

    return () => clearTimeout(initialDelay);
  }, [text, isLatest, onComplete, words]);

  return (
    <motion.div 
      className={`flex w-full mb-6 ${isAisha ? 'justify-end' : 'justify-start'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className={`flex max-w-[85%] md:max-w-[70%] items-end gap-3 ${isAisha ? 'flex-row-reverse' : 'flex-row'}`}>
        
        <CharacterAvatar 
          character={sender} 
          emotion={isLatest && isTyping && displayedText.length === 0 ? 'idle' : emotion} 
          isTalking={isLatest && isTyping && displayedText.length > 0} 
        />

        <div className="flex flex-col gap-1">
          <span className={`text-xs text-muted-foreground px-2 ${isAisha ? 'text-right' : 'text-left'}`}>
            {isAisha ? 'Aisha' : 'Dani'}
          </span>
          
          <div 
            className={`
              relative p-4 text-base md:text-lg leading-relaxed shadow-sm
              ${isAisha 
                ? 'bg-[hsl(var(--aisha-bubble))] text-slate-800 rounded-2xl rounded-br-sm' 
                : 'bg-[hsl(var(--dani-bubble))] text-slate-800 rounded-2xl rounded-bl-sm'
              }
              glass-bubble
            `}
          >
            {isLatest && isTyping && displayedText.length === 0 ? (
              <div className="flex gap-1 items-center h-6 px-2">
                <motion.div className="w-2 h-2 bg-slate-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                <motion.div className="w-2 h-2 bg-slate-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                <motion.div className="w-2 h-2 bg-slate-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
              </div>
            ) : (
              <span>{isLatest ? displayedText : text}</span>
            )}

            {/* Bubble Tail SVG for extra detail */}
            <svg 
              className={`absolute bottom-0 w-4 h-4 ${isAisha ? '-right-3 text-[hsl(var(--aisha-bubble))]' : '-left-3 text-[hsl(var(--dani-bubble))]'}`}
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              {isAisha ? (
                <path d="M0 16C0 16 8 16 12 12C16 8 16 0 16 0C16 0 16 8 0 16Z" />
              ) : (
                <path d="M16 16C16 16 8 16 4 12C0 8 0 0 0 0C0 0 0 8 16 16Z" />
              )}
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
