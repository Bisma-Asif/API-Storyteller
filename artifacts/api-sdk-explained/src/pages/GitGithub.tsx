import React, { useState, useRef, useEffect } from 'react';
import { gitGithubScript } from '../data/gitGithubConversation';
import { CinematicScene } from '../components/scenes/CinematicScene';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

const HOLD_DURATION_MS = 4500;

export default function GitGithub() {
  const [visibleMessageIndex, setVisibleMessageIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const [readyForNext, setReadyForNext] = useState<boolean>(false);
  const autoAdvanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isFinished = visibleMessageIndex >= gitGithubScript.length;
  const currentMessage = isFinished ? gitGithubScript[gitGithubScript.length - 1] : gitGithubScript[visibleMessageIndex];

  const advance = () => {
    if (visibleMessageIndex < gitGithubScript.length - 1) {
      setReadyForNext(false);
      setVisibleMessageIndex(prev => prev + 1);
    } else {
      setVisibleMessageIndex(gitGithubScript.length); // mark as finished
    }
  };

  const handleMessageComplete = () => {
    setReadyForNext(true);
    setIsTyping(false);
    if (autoPlay && visibleMessageIndex < gitGithubScript.length - 1) {
      autoAdvanceTimer.current = setTimeout(() => {
        advance();
      }, HOLD_DURATION_MS);
    }
  };

  const handleNextClick = () => {
    if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current);
    if (readyForNext) advance();
  };

  useEffect(() => {
    return () => {
      if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current);
    };
  }, []);

  return (
    <div className="min-h-[100dvh] w-full flex flex-col items-center justify-center bg-zinc-950 text-white relative overflow-hidden">
      
      {/* Top Navigation */}
      <div className="absolute top-4 sm:top-8 left-4 sm:left-8 z-50">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors bg-zinc-900/50 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-sm font-medium">API/SDK wali baat dekho</span>
        </Link>
      </div>

      <div className="w-full max-w-6xl p-4 sm:p-8 h-[100dvh] sm:h-[90dvh] flex flex-col pt-20 pb-24 sm:pb-8">
        
        {/* Cinematic Scene Area */}
        <div className="flex-1 w-full h-full relative">
          <CinematicScene 
            currentMessage={currentMessage}
            onTextComplete={handleMessageComplete}
            isPaused={isTyping}
          />

          {isFinished && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-30 rounded-2xl sm:rounded-3xl"
            >
              <div className="flex flex-col items-center text-center gap-6">
                <div className="text-6xl animate-bounce">🚀</div>
                <h2 className="text-3xl font-display font-bold">Kahaani Khatam!</h2>
                <p className="text-zinc-300">Ab toh GitHub pro ban gaye tum.</p>
                <button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2 mt-4"
                  onClick={() => alert("Link copy ho gaya! (Simulation)")}
                >
                  <span>Yeh baat aage share karo</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                </button>
                <button
                  onClick={() => setVisibleMessageIndex(0)}
                  className="text-sm text-zinc-400 hover:text-white mt-4 underline underline-offset-4"
                >
                  Dobara dekho
                </button>
              </div>
            </motion.div>
          )}
        </div>

      </div>

      {/* Controls bar: auto-play toggle + manual Next button */}
      {!isFinished && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 z-40 flex items-center gap-3 bg-zinc-900/80 backdrop-blur-md px-4 py-2.5 rounded-full shadow-2xl border border-zinc-700">
          <button
            onClick={() => setAutoPlay(prev => !prev)}
            className={`flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full transition-colors ${
              autoPlay ? 'bg-primary/20 text-primary' : 'bg-zinc-800 text-zinc-500'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${autoPlay ? 'bg-primary animate-pulse' : 'bg-zinc-500'}`} />
            Auto-play {autoPlay ? 'ON' : 'OFF'}
          </button>

          <button
            onClick={handleNextClick}
            disabled={!readyForNext}
            className={`flex items-center gap-1.5 text-sm font-bold px-4 py-1.5 rounded-full transition-all ${
              readyForNext
                ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 shadow-md'
                : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
            }`}
          >
            Aage badho
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      )}
    </div>
  );
}