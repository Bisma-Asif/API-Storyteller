import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CinematicMessage, SceneTopic } from '../../data/gitGithubConversation';
import { CharacterAvatar } from '../chat/CharacterAvatar';

interface CinematicSceneProps {
  currentMessage: CinematicMessage;
  onTextComplete: () => void;
  isPaused: boolean;
}

export function CinematicScene({ currentMessage, onTextComplete, isPaused }: CinematicSceneProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const words = currentMessage.text.split(" ");
  
  useEffect(() => {
    setIsTyping(true);
    setDisplayedText("");
    
    let currentIndex = 0;
    let tempText = "";
    
    const initialDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < words.length) {
          tempText += (currentIndex > 0 ? " " : "") + words[currentIndex];
          setDisplayedText(tempText);
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          onTextComplete();
        }
      }, 280); // match previous chat pace
      
      return () => clearInterval(interval);
    }, 900); // initial think delay
    
    return () => clearTimeout(initialDelay);
  }, [currentMessage.id]);

  // Determine Camera constraints
  // e.g. zoom slightly into speaker
  const cameraProps = currentMessage.sender === 'aisha' 
    ? { x: 20, scale: 1.05, originX: 0, originY: 0.5 }
    : { x: -20, scale: 1.05, originX: 1, originY: 0.5 };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl">
      {/* Background container - animating to simulate camera pans */}
      <motion.div 
        className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950"
        initial={false}
        animate={{ scale: cameraProps.scale, x: cameraProps.x }}
        style={{ originX: cameraProps.originX, originY: cameraProps.originY }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {/* Simple environmental background elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>

        {/* Scene Illustrations */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <AnimatePresence mode="wait">
            {currentMessage.topic === 'git_diary' && (
              <motion.div key="git_diary" initial={{opacity:0, y:-20}} animate={{opacity:0.3, y:0}} exit={{opacity:0}} className="text-8xl">
                📔
              </motion.div>
            )}
            {currentMessage.topic === 'github_cloud' && (
              <motion.div key="github_cloud" initial={{opacity:0, scale:0.8}} animate={{opacity:0.3, scale:1}} exit={{opacity:0}} className="text-8xl">
                ☁️
              </motion.div>
            )}
            {currentMessage.topic === 'comparison' && (
              <motion.div key="comparison" initial={{opacity:0, rotate: -15}} animate={{opacity:0.3, rotate:0}} exit={{opacity:0}} className="flex gap-4 text-6xl">
                📔 <span>↔️</span> ☁️
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Characters Container */}
        <div className="relative z-10 w-full max-w-4xl mx-auto flex items-end justify-between px-4 sm:px-16 h-3/4 pb-12">
          
          {/* Aisha (Left) */}
          <motion.div 
            className="flex flex-col items-center gap-4 relative w-1/3 sm:w-1/4"
            animate={{ 
              y: currentMessage.sender === 'aisha' && isTyping ? [0, -5, 0] : 0 
            }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <div className={`transform scale-150 sm:scale-[2] origin-bottom ${currentMessage.sender !== 'aisha' ? 'opacity-60 saturate-50' : 'opacity-100'} transition-all duration-700`}>
              <CharacterAvatar 
                character="aisha" 
                emotion={currentMessage.sender === 'aisha' ? currentMessage.emotion : 'idle'}
                isTalking={currentMessage.sender === 'aisha' && isTyping && displayedText.length > 0} 
              />
            </div>
          </motion.div>

          {/* Dani (Right) */}
          <motion.div 
            className="flex flex-col items-center gap-4 relative w-1/3 sm:w-1/4"
            animate={{ 
              y: currentMessage.sender === 'dani' && isTyping ? [0, -5, 0] : 0 
            }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <div className={`transform scale-150 sm:scale-[2] origin-bottom ${currentMessage.sender !== 'dani' ? 'opacity-60 saturate-50' : 'opacity-100'} transition-all duration-700`}>
              <CharacterAvatar 
                character="dani" 
                emotion={currentMessage.sender === 'dani' ? currentMessage.emotion : 'idle'}
                isTalking={currentMessage.sender === 'dani' && isTyping && displayedText.length > 0} 
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Cinematic Dialogue Subtitle */}
      <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center px-4">
        <motion.div 
          className="max-w-2xl w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={currentMessage.id}
        >
          <div className={`
            px-6 py-4 sm:px-8 sm:py-6 rounded-2xl relative
            border border-white/20 bg-black/40 backdrop-blur-md shadow-2xl
            ${currentMessage.sender === 'aisha' ? 'ml-0 mr-auto border-l-4 border-l-pink-400' : 'mr-0 ml-auto border-r-4 border-r-teal-400'}
          `}>
            <div className={`absolute -top-3 px-3 py-0.5 bg-black/60 rounded-full text-xs font-bold tracking-widest uppercase text-white/80 border border-white/10 backdrop-blur-sm
              ${currentMessage.sender === 'aisha' ? 'left-4 text-pink-300' : 'right-4 text-teal-300'}
            `}>
              {currentMessage.sender === 'aisha' ? 'Ayesha' : 'Dani'}
            </div>
            
            <p className="text-lg sm:text-2xl md:text-3xl text-white font-medium leading-relaxed drop-shadow-sm min-h-[3rem] sm:min-h-[5rem]">
              {isTyping && displayedText.length === 0 ? (
                <span className="flex gap-1.5 items-center h-full">
                  <motion.span className="w-2.5 h-2.5 bg-slate-400 rounded-full" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                  <motion.span className="w-2.5 h-2.5 bg-slate-400 rounded-full" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                  <motion.span className="w-2.5 h-2.5 bg-slate-400 rounded-full" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                </span>
              ) : (
                displayedText
              )}
            </p>
          </div>
        </motion.div>
      </div>

    </div>
  );
}