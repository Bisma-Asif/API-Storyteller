import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Coffee, Code2, Server, Smartphone, Zap, ArrowRight, Layers, Box, Webhook, BoxSelect, Link as LinkIcon, ExternalLink } from "lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <div ref={containerRef} className="relative w-full min-h-[100dvh] bg-background text-foreground overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-background/80 to-background pointer-events-none" />

      <Navbar />
      
      <main className="relative z-10">
        <HeroSection scrollYProgress={scrollYProgress} />
        <ApiExplanationSection />
        <DataFlowVisualization />
        <SdkExplanationSection />
        <RealWorldExamples />
        <CtaSection />
      </main>
    </div>
  );
}

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center"
    >
      <div className="flex items-center gap-2 font-display font-bold text-xl tracking-tighter">
        <Coffee className="text-secondary w-6 h-6" />
        <span>DevCoffee</span>
      </div>
      <button className="glass-panel px-6 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
        <ExternalLink className="w-4 h-4" />
        Share
      </button>
    </motion.nav>
  );
}

function HeroSection({ scrollYProgress }: { scrollYProgress: any }) {
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-20 px-6">
      <motion.div 
        style={{ y, opacity }}
        className="max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-panel inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-primary mb-8"
        >
          <Zap className="w-4 h-4" />
          <span>Tech concepts, translated.</span>
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6"
        >
          Let's talk about <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">APIs</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">SDKs</span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-2xl text-foreground/70 max-w-2xl font-light"
        >
          Grab a coffee. We're going to break down how the modern internet talks to itself, without the confusing jargon.
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to learn</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-foreground/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}

function ApiExplanationSection() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What the heck is an API?
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-light">
              <p>
                Imagine you're sitting in a restaurant. You have a menu (what you want) and the kitchen has the food (the data). But you don't walk into the kitchen to cook it yourself.
              </p>
              <p>
                You need a messenger. Someone to take your order, hand it to the kitchen, and bring your food back to the table.
              </p>
              <div className="glass-panel p-6 rounded-2xl border-primary/30 mt-8">
                <p className="text-primary font-medium flex items-center gap-3">
                  <ArrowRight className="w-5 h-5" />
                  The API is the waiter.
                </p>
                <p className="mt-2 text-sm text-foreground/70">
                  (Application Programming Interface) — It's simply the set of rules that lets your app talk to another app's kitchen.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-3xl glass-panel-heavy overflow-hidden flex items-center justify-center p-8"
          >
            {/* Abstract Restaurant Analogy Visual */}
            <div className="flex w-full items-center justify-between relative z-10">
              <div className="flex flex-col items-center gap-4 z-20">
                <div className="w-16 h-16 rounded-full bg-secondary/20 border border-secondary/50 flex items-center justify-center text-secondary">
                  <Smartphone className="w-8 h-8" />
                </div>
                <span className="font-mono text-xs">You (App)</span>
              </div>
              
              <div className="flex-1 px-8 relative">
                <motion.div 
                  className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-[2px] bg-white/10" 
                />
                <motion.div 
                  animate={{ x: ["0%", "100%", "0%"] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute top-1/2 -translate-y-1/2 -ml-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary text-primary flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(0,255,255,0.4)]">
                    <Webhook className="w-6 h-6" />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-primary whitespace-nowrap">
                    API (Waiter)
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-col items-center gap-4 z-20">
                <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center text-accent">
                  <Server className="w-8 h-8" />
                </div>
                <span className="font-mono text-xs">Server (Kitchen)</span>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-[50px]" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-[50px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DataFlowVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 px-6 bg-black/40 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Under the hood</h2>
        <p className="text-foreground/60 max-w-2xl mx-auto">This is what happens when you hit "refresh" on your weather app. Watch the data travel.</p>
      </div>

      <div className="max-w-4xl mx-auto relative h-[300px] glass-panel rounded-3xl p-8 flex items-center justify-between">
        {/* Client */}
        <div className="relative z-10 glass-panel p-6 rounded-2xl flex flex-col items-center gap-3 w-40">
          <Smartphone className="w-10 h-10 text-white" />
          <span className="font-mono text-sm font-bold">Client</span>
        </div>

        {/* Path */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <svg className="w-[60%] h-24 overflow-visible">
            <motion.path
              d="M 0,50 Q 150,-50 300,50 T 600,50"
              fill="transparent"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
              strokeDasharray="5 5"
            />
            {/* Moving particle based on scroll */}
            <motion.circle
              r="6"
              fill="var(--color-primary)"
              style={{
                offsetPath: `path("M 0,50 Q 150,-50 300,50 T 600,50")`,
                offsetDistance: useTransform(pathProgress, p => `${p * 100}%`),
                boxShadow: "0 0 20px 5px var(--color-primary)"
              }}
            />
          </svg>
        </div>

        {/* Server */}
        <div className="relative z-10 glass-panel p-6 rounded-2xl flex flex-col items-center gap-3 w-40 border-primary/40">
          <Server className="w-10 h-10 text-primary" />
          <span className="font-mono text-sm font-bold text-primary">API Server</span>
        </div>

        {/* Floating Code Snippets */}
        <motion.div 
          className="absolute top-10 left-1/4 glass-panel px-3 py-1 rounded text-xs font-mono text-accent"
          style={{ opacity: useTransform(pathProgress, [0.1, 0.3, 0.5], [0, 1, 0]) }}
        >
          GET /weather?city=sf
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 right-1/4 glass-panel px-3 py-1 rounded text-xs font-mono text-secondary"
          style={{ opacity: useTransform(pathProgress, [0.5, 0.7, 0.9], [0, 1, 0]) }}
        >
          {`{ "temp": 72, "cond": "Sunny" }`}
        </motion.div>
      </div>
    </section>
  );
}

function SdkExplanationSection() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 relative h-[450px] rounded-3xl glass-panel-heavy overflow-hidden p-8"
          >
             <div className="grid grid-cols-2 gap-4 h-full">
                <div className="col-span-2 glass-panel rounded-xl p-4 flex items-center gap-4 border-secondary/30">
                  <Box className="w-8 h-8 text-secondary" />
                  <div>
                    <h4 className="font-bold">SDK Wrapper</h4>
                    <p className="text-xs text-foreground/50">Handles all the hard stuff</p>
                  </div>
                </div>
                
                <div className="glass-panel rounded-xl p-4 flex flex-col justify-center gap-2">
                   <Code2 className="w-6 h-6 text-foreground/40" />
                   <p className="text-xs">Pre-written Functions</p>
                </div>
                <div className="glass-panel rounded-xl p-4 flex flex-col justify-center gap-2">
                   <Layers className="w-6 h-6 text-foreground/40" />
                   <p className="text-xs">Error Handling</p>
                </div>
                <div className="col-span-2 glass-panel rounded-xl p-4 flex justify-between items-center bg-primary/5">
                   <span className="font-mono text-xs text-primary">stripe.processPayment()</span>
                   <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              So... what's an SDK?
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-light">
              <p>
                If an API is the waiter, an SDK (Software Development Kit) is a <strong>complete meal-prep kit</strong> delivered to your house.
              </p>
              <p>
                Instead of forcing you to build the plates, source the ingredients, and write the raw requests yourself, an SDK gives you a box of pre-built tools.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <span><strong>API:</strong> Requires you to write custom code to format the request perfectly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span><strong>SDK:</strong> Gives you a single line of code like <code>stripe.pay()</code> that does all the work behind the scenes.</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function RealWorldExamples() {
  const examples = [
    {
      id: "maps",
      title: "Google Maps",
      desc: "When Uber shows your driver moving on a map.",
      icon: <BoxSelect className="w-6 h-6 text-emerald-400" />,
      color: "border-emerald-400/30",
      bg: "bg-emerald-400/5",
      animText: "Updating Coordinates..."
    },
    {
      id: "payments",
      title: "Stripe Checkout",
      desc: "When you buy shoes and enter your credit card on a site.",
      icon: <LinkIcon className="w-6 h-6 text-indigo-400" />,
      color: "border-indigo-400/30",
      bg: "bg-indigo-400/5",
      animText: "Processing $49.99..."
    },
    {
      id: "auth",
      title: "Login with Google",
      desc: "Clicking one button instead of making a new password.",
      icon: <Layers className="w-6 h-6 text-rose-400" />,
      color: "border-rose-400/30",
      bg: "bg-rose-400/5",
      animText: "Authenticating User..."
    }
  ];

  return (
    <section className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">You use them every day.</h2>
          <p className="text-foreground/60">Hover to see the invisible handshakes happening behind your screen.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {examples.map((ex, i) => (
            <motion.div
              key={ex.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`glass-panel p-8 rounded-3xl ${ex.color} relative group overflow-hidden cursor-pointer`}
            >
              <div className={`absolute inset-0 ${ex.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center mb-6">
                  {ex.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{ex.title}</h3>
                <p className="text-sm text-foreground/60 mb-8 flex-1">{ex.desc}</p>
                
                {/* Micro-interaction area */}
                <div className="h-12 rounded-lg bg-black/40 border border-white/5 flex items-center px-4 overflow-hidden relative">
                  <div className="w-2 h-2 rounded-full bg-foreground/20 group-hover:bg-green-400 transition-colors duration-300" />
                  <span className="font-mono text-xs ml-3 text-foreground/40 group-hover:text-foreground/80 transition-colors">
                    {ex.animText}
                  </span>
                  
                  {/* Scanning line effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-40 px-6 relative overflow-hidden flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl relative z-10"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6">Makes sense now?</h2>
        <p className="text-xl text-foreground/70 mb-10 font-light">
          The internet isn't magic. It's just a bunch of applications politely passing notes to each other.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,255,255,0.3)]">
            Share with a friend
          </button>
          <button className="px-8 py-4 rounded-full glass-panel hover:bg-white/10 transition-all text-foreground font-medium">
            Read more analogies
          </button>
        </div>
      </motion.div>
    </section>
  );
}
