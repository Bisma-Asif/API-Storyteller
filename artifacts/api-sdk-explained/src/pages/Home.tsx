import React, { useState, useRef, useEffect } from 'react';
import { conversationScript, SceneType } from '../data/conversation';
import { ChatBubble } from '../components/chat/ChatBubble';
import { AnimatedScenes } from '../components/scenes/AnimatedScenes';
import { motion } from 'framer-motion';

export default function Home() {
  const [visibleMessages, setVisibleMessages] = useState<number>(1);
  const [activeScene, setActiveScene] = useState<SceneType>('tea');
  const chatEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when new message appears
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleMessages]);

  const handleMessageComplete = () => {
    // If not at end, show next message after a small natural reading delay
    if (visibleMessages < conversationScript.length) {
      setTimeout(() => {
        setVisibleMessages(prev => prev + 1);
        setActiveScene(conversationScript[visibleMessages].scene);
      }, 1500); // Wait 1.5s after typing finishes to show next
    }
  };

  // Allow manual tap/click to skip ahead for impatient scrollers
  const handleContainerClick = () => {
    if (visibleMessages < conversationScript.length) {
      setVisibleMessages(prev => prev + 1);
      setActiveScene(conversationScript[visibleMessages].scene);
    }
  };

  return (
    <div 
      className="min-h-[100dvh] w-full flex flex-col md:flex-row bg-grid-pattern relative"
      onClick={handleContainerClick}
    >
      
      {/* 
        Mobile: Top sticky scene, bottom scrollable chat
        Desktop: Left sticky scene, right scrollable chat 
      */}
      
      {/* Scene Area (Sticky) */}
      <div className="sticky top-0 w-full h-[40dvh] md:h-[100dvh] md:w-1/2 p-4 md:p-8 flex items-center justify-center z-10 border-b md:border-b-0 md:border-r border-white/20 shadow-sm md:shadow-none bg-background/80 backdrop-blur-md">
        <AnimatedScenes activeScene={activeScene} />
      </div>

      {/* Chat Area */}
      <div className="w-full md:w-1/2 flex flex-col pt-4 px-4 pb-32 md:p-8 md:pb-32 overflow-y-auto">
        
        <div className="w-full max-w-xl mx-auto flex flex-col">
          
          <div className="flex flex-col items-center mb-8 mt-4 text-muted-foreground/60">
            <span className="text-xs font-bold uppercase tracking-widest mb-1">Today</span>
            <span className="text-xs">Tea time chat</span>
          </div>

          {conversationScript.slice(0, visibleMessages).map((msg, index) => (
            <ChatBubble
              key={msg.id}
              sender={msg.sender}
              text={msg.text}
              emotion={msg.emotion}
              isLatest={index === visibleMessages - 1}
              onComplete={index === visibleMessages - 1 ? handleMessageComplete : undefined}
            />
          ))}
          
          <div ref={chatEndRef} className="h-20" />

        </div>
        
        {/* Call to action at the end */}
        {visibleMessages === conversationScript.length && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="fixed bottom-0 left-0 md:left-1/2 w-full md:w-1/2 p-4 bg-gradient-to-t from-background via-background to-transparent z-20 flex justify-center pb-8"
          >
            <button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2"
              onClick={(e) => {
                e.stopPropagation();
                alert("Copied link to clipboard! (Simulation)");
              }}
            >
              <span>Share this explanation</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
            </button>
          </motion.div>
        )}

      </div>

      {/* Tap indicator overlay */}
      {visibleMessages < conversationScript.length && (
        <motion.div 
          className="fixed bottom-4 right-4 bg-black/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-black/50 z-30 pointer-events-none"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Tap anywhere to skip typing ➡️
        </motion.div>
      )}
    </div>
  );
}
