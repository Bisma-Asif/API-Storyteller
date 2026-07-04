import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SceneType } from '../../data/conversation';

interface AnimatedScenesProps {
  activeScene: SceneType;
}

export function AnimatedScenes({ activeScene }: AnimatedScenesProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-3xl glass-card border-4 border-white">
      <AnimatePresence mode="wait">
        
        {activeScene === 'tea' && (
          <motion.div
            key="tea"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="w-full h-full flex flex-col items-center justify-center bg-orange-50/50"
          >
            <div className="relative w-48 h-48">
              {/* Table */}
              <div className="absolute bottom-10 w-full h-4 bg-amber-200 rounded-full" />
              {/* Tea Cups */}
              <motion.div 
                className="absolute bottom-14 left-10 text-5xl"
                animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                🍵
              </motion.div>
              <motion.div 
                className="absolute bottom-14 right-10 text-5xl"
                animate={{ y: [0, -4, 0], rotate: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
              >
                ☕️
              </motion.div>
              {/* Steam */}
              <motion.div className="absolute bottom-28 left-12 text-2xl text-slate-300" animate={{ y: [-10, -30], opacity: [0, 0.5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>〰️</motion.div>
              <motion.div className="absolute bottom-28 right-14 text-2xl text-slate-300" animate={{ y: [-10, -30], opacity: [0, 0.5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }}>〰️</motion.div>
            </div>
            <p className="comic-text text-xl text-amber-700/60 mt-4">The Setup</p>
          </motion.div>
        )}

        {activeScene === 'restaurant' && (
          <motion.div
            key="restaurant"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, type: "spring", damping: 20 }}
            className="w-full h-full flex flex-col items-center justify-center bg-blue-50/50"
          >
            <div className="flex items-center justify-between w-full max-w-sm px-4">
              {/* Customer */}
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-2">🙋🏽‍♀️</div>
                <div className="px-3 py-1 bg-white rounded-full text-xs font-bold shadow-sm">You</div>
              </div>
              
              {/* Waiter (API) moving back and forth */}
              <motion.div 
                className="flex flex-col items-center z-10"
                animate={{ x: [-40, 40, -40] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="relative">
                  <div className="text-4xl">🤵‍♂️</div>
                  <motion.div 
                    className="absolute -top-6 -right-4 bg-yellow-100 text-[10px] px-2 py-1 rounded-full border border-yellow-300 font-bold"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    API
                  </motion.div>
                </div>
                <motion.div 
                  className="mt-2 text-2xl"
                  animate={{ rotate: [0, -10, 0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  📝🍔
                </motion.div>
              </motion.div>

              {/* Kitchen */}
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-2">👨‍🍳🔥</div>
                <div className="px-3 py-1 bg-slate-800 text-white rounded-full text-xs font-bold shadow-sm">System</div>
              </div>
            </div>
            
            <motion.div 
              className="absolute top-10 comic-text text-2xl text-blue-800 font-bold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              *whoosh*
            </motion.div>
          </motion.div>
        )}

        {activeScene === 'remote' && (
          <motion.div
            key="remote"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full flex flex-col items-center justify-center bg-purple-50/50"
          >
             <div className="flex items-center gap-12">
               {/* Remote (SDK) */}
               <motion.div 
                 className="relative w-16 h-32 bg-slate-800 rounded-2xl border-4 border-slate-700 flex flex-col items-center py-3 gap-2 shadow-2xl"
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
               >
                 <div className="w-10 h-6 bg-slate-900 rounded-sm mb-1" />
                 <motion.div 
                   className="w-8 h-8 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)] flex items-center justify-center cursor-pointer"
                   whileTap={{ scale: 0.9, backgroundColor: "#b91c1c" }}
                   animate={{ scale: [1, 1.1, 1] }}
                   transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                 >
                    <span className="text-[10px] text-white">ON</span>
                 </motion.div>
                 <div className="grid grid-cols-2 gap-2 mt-1">
                   <div className="w-3 h-3 bg-slate-600 rounded-full" />
                   <div className="w-3 h-3 bg-slate-600 rounded-full" />
                   <div className="w-3 h-3 bg-slate-600 rounded-full" />
                   <div className="w-3 h-3 bg-slate-600 rounded-full" />
                 </div>
                 
                 <div className="absolute -bottom-8 bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full border border-purple-300">
                   SDK Kit
                 </div>
               </motion.div>

               {/* Signal */}
               <div className="flex gap-2">
                 {[0, 1, 2].map((i) => (
                   <motion.div 
                     key={i}
                     className="w-2 h-2 rounded-full bg-red-400"
                     animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
                     transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                   />
                 ))}
               </div>

               {/* TV */}
               <div className="relative w-32 h-24 bg-slate-900 rounded-xl border-4 border-slate-800 flex items-center justify-center overflow-hidden">
                  <motion.div 
                    className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ repeat: Infinity, duration: 0.2 }}
                  />
                  <div className="absolute bottom-1 w-4 h-1 bg-slate-600 rounded-full" />
                  <div className="absolute -bottom-6 bg-slate-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                    System
                  </div>
               </div>
             </div>

             <motion.div 
              className="absolute top-12 comic-text text-2xl text-purple-800 font-bold"
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1, type: "spring" }}
            >
              *click!*
            </motion.div>
          </motion.div>
        )}

        {activeScene === 'comparison' && (
          <motion.div
            key="comparison"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex flex-col items-center justify-center bg-green-50/50 p-4"
          >
            <div className="flex w-full h-full items-center justify-center gap-4">
              
              <div className="flex-1 bg-white/80 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm border border-slate-100 h-48">
                <div className="text-4xl mb-2">🤵‍♂️</div>
                <div className="font-bold text-slate-800 mb-1">API</div>
                <p className="text-xs text-center text-slate-500">Just the messenger</p>
              </div>

              <div className="text-2xl text-slate-300 font-bold font-display">VS</div>

              <div className="flex-1 bg-gradient-to-br from-teal-50 to-emerald-100 rounded-2xl p-4 flex flex-col items-center justify-center shadow-md border border-teal-200 h-48 transform scale-110">
                <div className="flex gap-1 mb-2 text-3xl">
                  <span>🤵‍♂️</span><span>🍱</span><span>🗺️</span>
                </div>
                <div className="font-bold text-teal-800 mb-1">SDK</div>
                <p className="text-xs text-center text-teal-600">The whole VIP package</p>
                <motion.div 
                  className="absolute -top-3 -right-3 text-2xl"
                  animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  ✨
                </motion.div>
              </div>

            </div>
          </motion.div>
        )}

        {activeScene === 'cheers' && (
          <motion.div
            key="cheers"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full flex flex-col items-center justify-center bg-pink-50/50"
          >
             <motion.div 
               className="text-6xl mb-4"
               animate={{ scale: [1, 1.2, 1], rotate: [-10, 10, -10] }}
               transition={{ repeat: Infinity, duration: 2 }}
             >
               🎉
             </motion.div>
             <div className="flex gap-4 text-4xl">
               <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 1 }}>☕️</motion.div>
               <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}>🍪</motion.div>
             </div>
             
             <motion.div 
              className="absolute bottom-10 comic-text text-xl text-pink-500 font-bold bg-white px-4 py-2 rounded-full shadow-sm border border-pink-100"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Share with a friend!
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
