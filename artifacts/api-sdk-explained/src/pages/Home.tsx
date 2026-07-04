import React, { useState, useRef, useEffect } from 'react';
import { conversationScript, SceneType } from '../data/conversation';
import { ChatBubble } from '../components/chat/ChatBubble';
import { AnimatedScenes } from '../components/scenes/AnimatedScenes';
import { motion } from 'framer-motion';

const HOLD_DURATION_MS = 4500; // How long a finished message stays on screen before auto-advancing

export default function Home() {
  const [visibleMessages, setVisibleMessages] = useState<number>(1);
  const [activeScene, setActiveScene] = useState<SceneType>('tea');
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const [readyForNext, setReadyForNext] = useState<boolean>(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const autoAdvanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isFinished = visibleMessages >= conversationScript.length;

  // Auto-scroll to bottom when new message appears
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleMessages]);

  const advance = () => {
    if (visibleMessages < conversationScript.length) {
      setReadyForNext(false);
      setVisibleMessages(prev => prev + 1);
      setActiveScene(conversationScript[visibleMessages].scene);
    }
  };

  const handleMessageComplete = () => {
    setReadyForNext(true);
    if (autoPlay && visibleMessages < conversationScript.length) {
      autoAdvanceTimer.current = setTimeout(() => {
        advance();
      }, HOLD_DURATION_MS);
    }
  };

  const handleNextClick = () => {
    if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current);
    // Only allow skipping ahead once the current message has finished typing
    if (readyForNext) advance();
  };

  useEffect(() => {
    return () => {
      if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current);
    };
  }, []);

  return (
    <div className="min-h-[100dvh] w-full flex flex-col md:flex-row bg-grid-pattern relative">
      
      {/* 
        Mobile: Top sticky scene, bottom scrollable chat
        Desktop: Left sticky scene, right scrollable chat 
      */}
      
      {/* Scene Area (Sticky) */}
      <div className="sticky top-0 w-full h-[40dvh] md:h-[100dvh] md:w-1/2 p-4 md:p-8 flex items-center justify-center z-10 border-b md:border-b-0 md:border-r border-white/20 shadow-sm md:shadow-none bg-background/80 backdrop-blur-md">
        <AnimatedScenes activeScene={activeScene} isPaused={isTyping} />
      </div>

      {/* Chat Area */}
      <div className="w-full md:w-1/2 flex flex-col pt-4 px-4 pb-40 md:p-8 md:pb-40 overflow-y-auto">
        
        <div className="w-full max-w-xl mx-auto flex flex-col">
          
          <div className="flex flex-col items-center mb-8 mt-4 text-muted-foreground/60">
            <span className="text-xs font-bold uppercase tracking-widest mb-1">Aaj</span>
            <span className="text-xs">Chai ke waqt ki baat cheet</span>
          </div>

          {conversationScript.slice(0, visibleMessages).map((msg, index) => (
            <ChatBubble
              key={msg.id}
              sender={msg.sender}
              text={msg.text}
              emotion={msg.emotion}
              isLatest={index === visibleMessages - 1}
              onComplete={index === visibleMessages - 1 ? handleMessageComplete : undefined}
              onTypingChange={index === visibleMessages - 1 ? setIsTyping : undefined}
            />
          ))}
          
          <div ref={chatEndRef} className="h-20" />

        </div>
        
        {/* Call to action at the end */}
        {isFinished && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="fixed bottom-0 left-0 md:left-1/2 w-full md:w-1/2 p-4 bg-gradient-to-t from-background via-background to-transparent z-20 flex justify-center pb-8"
          >
            <button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2"
              onClick={() => {
                alert("Link copy ho gaya! (Simulation)");
              }}
            >
              <span>Yeh baat aage share karo</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
            </button>
          </motion.div>
        )}

      </div>

      {/* Controls bar: auto-play toggle + manual Next button */}
      {!isFinished && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 z-30 flex items-center gap-3 bg-white/70 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-white/60">
          <button
            onClick={() => setAutoPlay(prev => !prev)}
            className={`flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full transition-colors ${
              autoPlay ? 'bg-primary/15 text-primary' : 'bg-slate-200 text-slate-500'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${autoPlay ? 'bg-primary animate-pulse' : 'bg-slate-400'}`} />
            Auto-play {autoPlay ? 'ON' : 'OFF'}
          </button>

          <button
            onClick={handleNextClick}
            disabled={!readyForNext}
            className={`flex items-center gap-1.5 text-sm font-bold px-4 py-1.5 rounded-full transition-all ${
              readyForNext
                ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 shadow-md'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
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
