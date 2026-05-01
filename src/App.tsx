import { MessageSquare, Smile, TrendingUp, CheckCircle, Quote } from 'lucide-react';
import * as motion from "motion/react-client";

import { ValidationMarquee } from './components/ValidationMarquee';
import { PricingSection } from './components/PricingSection';

const GOOGLE_FORM_LINK = "https://forms.gle/XGqcApUkG1f3aDew8";

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-accent opacity-30 blur-3xl rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-container-max mx-auto md:px-12">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center border-4 border-outline">
            <div className="w-5 h-5 bg-white rounded-sm rotate-45 border-4 border-outline"></div>
          </div>
          <span className="text-2xl font-black text-on-surface tracking-tighter uppercase">DoneTracker</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-on-surface font-bold text-sm">
          <a href="#philosophy" className="hover:text-primary transition-colors uppercase tracking-widest text-xs">Philosophy</a>
          <a href="#features" className="hover:text-primary transition-colors uppercase tracking-widest text-xs">Features</a>
          <a href="#community" className="hover:text-primary transition-colors uppercase tracking-widest text-xs">Community</a>
          <div className="h-10 w-[2px] bg-outline/10"></div>
          <a 
            href={GOOGLE_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-on-surface text-surface px-6 py-2 rounded-full font-black hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-wide border-2 border-transparent"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      <main className="max-w-[1100px] mx-auto px-6 md:px-12 relative z-10">
        {/* Hero Section */}
        <section className="pt-12 pb-24 md:pt-24 md:pb-32 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1 bg-secondary/20 text-on-secondary rounded-full text-sm font-black uppercase tracking-widest border-2 border-outline/10 shadow-[4px_4px_0px_var(--color-outline)]"
            >
              Meet the anti-burnout tracker.
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-7xl font-black text-on-surface leading-[1.05] tracking-tighter"
            >
              Stop punishing <br/>yourself with <span className="text-primary tracking-tighter block mt-2">To-Do lists.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-on-surface-variant max-w-lg leading-relaxed font-medium"
            >
              Most productivity apps focus on what you <em className="font-bold text-on-surface">should do</em>, creating endless guilt. 
              DoneTracker is a reverse to-do list that tracks what you actually did.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2"
            >
              <a 
                href={GOOGLE_FORM_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-block mt-4 w-full sm:w-auto px-10 py-5 bg-accent text-on-surface font-black rounded-[2.5rem] border-4 border-outline hover:bg-primary whitespace-nowrap uppercase tracking-wider active:bg-primary-hover transition-colors shadow-[12px_12px_0px_var(--color-outline)]"
              >
                Join Waitlist
              </a>
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 px-2 relative z-20">
                <p className="text-sm font-bold text-on-surface/60">Zero spam. WhatsApp Beta access.</p>
              </div>
            </motion.div>
          </div>
          
          {/* Abstract Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full h-[500px] hidden md:block perspective-[1000px]"
          >
            {/* Soft Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px]" />
            <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-accent/20 rounded-full blur-[60px]" />
            
            {/* The "Phone" container modified to brutalist panel */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[300px] bg-white rounded-[2rem] border-4 border-outline p-6 z-20 flex flex-col overflow-hidden rotate-[3deg] shadow-[20px_20px_0px_var(--color-secondary)]"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-accent rounded-full border-4 border-outline flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-outline" />
                </div>
                <div>
                  <div className="h-3 w-32 bg-outline rounded-full mb-2"></div>
                  <div className="h-2 w-20 bg-outline/20 rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-surface rounded-2xl border-2 border-outline">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-lg border-2 border-outline flex items-center justify-center"><MessageSquare className="w-4 h-4 text-white font-bold"/></div>
                    <span className="font-black text-sm uppercase">Track Win</span>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-secondary border-2 border-outline"></div>
                </div>
                <div className="flex justify-between items-center p-4 bg-surface rounded-2xl border-2 border-outline">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent rounded-lg border-2 border-outline flex items-center justify-center"><Smile className="w-4 h-4 text-outline font-bold"/></div>
                    <span className="font-black text-sm uppercase">Get Dopamine</span>
                  </div>
                  <div className="w-10 h-4 bg-outline/10 rounded-full relative">
                      <div className="absolute left-1 top-1 w-2 h-2 bg-outline rounded-full"></div>
                  </div>
                </div>
                <div className="h-24 bg-secondary/10 border-2 border-dashed border-outline rounded-2xl flex items-center justify-center">
                  <span className="text-xs font-bold text-outline/40 uppercase tracking-widest">Momentum Chart</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Element */}
            <motion.div 
               animate={{ y: [0, 15, 0], rotate: [-10, 0, -10] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
               className="absolute -bottom-4 right-0 z-30"
            >
              <div className="bg-outline text-white p-6 rounded-3xl border-4 border-white shadow-[12px_12px_0px_var(--color-primary)] rotate-6">
                 <div className="text-3xl font-black">2,420+</div>
                 <div className="text-xs font-bold uppercase opacity-60 tracking-tighter mt-1">Tasks done today</div>
              </div>
            </motion.div>
            
            <motion.div 
               animate={{ y: [0, 20, 0], rotate: [0, 20, 0] }}
               transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
               className="absolute top-10 left-10 w-20 h-20 bg-primary shadow-[8px_8px_0px_var(--color-outline)] rounded-[24px] border-4 border-outline z-10 -rotate-12 flex items-center justify-center"
            >
               <TrendingUp className="w-8 h-8 text-white font-bold" />
            </motion.div>
            
          </motion.div>
        </section>

        <ValidationMarquee />

        {/* Core Philosophy */}
        <section className="mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-[900px] mx-auto px-6 text-center"
          >
            <div className="inline-block px-4 py-1.5 bg-secondary text-on-surface font-black uppercase tracking-widest border-2 border-outline rounded-full text-xs shadow-[4px_4px_0px_var(--color-outline)] mb-8 transform -rotate-2">
              Our North Star
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-on-surface uppercase tracking-tight mb-10 leading-tight">
              Proof of Progress over the <br className="hidden md:block"/>
              <span className="text-primary underline decoration-8 underline-offset-4 decoration-accent">Pressure of Perfection.</span>
            </h2>
            
            <div className="bg-white border-4 border-outline shadow-[16px_16px_0px_var(--color-outline)] p-8 md:p-12 rounded-[2rem] transform rotate-1 relative">
              <div className="absolute top-0 left-0 w-full h-full bg-surface-dim opacity-50 z-0 rounded-[1.8rem] pointer-events-none"></div>
              <div className="relative z-10 space-y-6 text-left">
                <p className="text-on-surface text-lg md:text-xl font-bold leading-relaxed">
                  We are the enemy of toxic hustle culture. We believe that burnout is a design flaw in how we work, not a personal failure.
                </p>
                <p className="text-on-surface text-lg md:text-xl font-bold leading-relaxed">
                  Every feature we build and message we share reflects this single belief: 
                </p>
                <div className="bg-accent p-6 rounded-xl border-4 border-outline shadow-[8px_8px_0px_var(--color-outline)] transform -rotate-1 mt-6 text-center">
                  <span className="text-2xl md:text-3xl font-black text-on-surface uppercase">You are already doing enough; you just need to see it.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Split */}
        <section id="features" className="mb-24 md:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-4">
              The path to guilt-free productivity
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-[2rem] p-8 md:p-10 border-4 border-outline shadow-[8px_8px_0px_var(--color-outline)] hover:shadow-[16px_16px_0px_var(--color-primary)] hover:-translate-y-2 transition-all group"
            >
              <div className="w-14 h-14 bg-primary border-4 border-outline shadow-[4px_4px_0px_var(--color-outline)] rounded-2xl flex items-center justify-center mb-8 text-white group-hover:-rotate-12 transition-all">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-on-surface mb-3 uppercase tracking-tight">
                Text your wins.
              </h3>
              <p className="text-on-surface-variant text-base leading-relaxed font-bold">
                Forget opening heavy apps. Just text our WhatsApp bot "Finished the design review" and it's logged.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 border-4 border-outline shadow-[8px_8px_0px_var(--color-outline)] hover:shadow-[16px_16px_0px_var(--color-accent)] hover:-translate-y-2 transition-all group"
            >
              <div className="w-14 h-14 bg-accent border-4 border-outline shadow-[4px_4px_0px_var(--color-outline)] rounded-2xl flex items-center justify-center mb-8 text-outline group-hover:-rotate-12 transition-all">
                <Smile className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-on-surface mb-3 uppercase tracking-tight">
                Get your dopamine.
              </h3>
              <p className="text-on-surface-variant text-base leading-relaxed font-bold">
                Watch your daily accomplishments turn into beautiful, aesthetic charts that celebrate your work.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 border-4 border-outline shadow-[8px_8px_0px_var(--color-outline)] hover:shadow-[16px_16px_0px_var(--color-secondary)] hover:-translate-y-2 transition-all group"
            >
              <div className="w-14 h-14 bg-secondary border-4 border-outline shadow-[4px_4px_0px_var(--color-outline)] rounded-2xl flex items-center justify-center mb-8 text-outline group-hover:-rotate-12 transition-all">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-on-surface mb-3 uppercase tracking-tight">
                Build the habit.
              </h3>
              <p className="text-on-surface-variant text-base leading-relaxed font-bold">
                No red notification badges. Just positive reinforcement that builds your confidence day by day.
              </p>
            </motion.div>
          </div>
        </section>

        <PricingSection />

        {/* Bottom CTA Block */}
        <section className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-outline rounded-[3rem] border-4 border-white shadow-[20px_20px_0px_var(--color-primary)] p-10 md:p-16 text-center relative overflow-hidden rotate-1"
          >
            <div className="absolute top-[-20%] left-[-10%] w-64 h-64 bg-primary opacity-40 blur-3xl rounded-full"></div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter relative z-10 max-w-2xl mx-auto leading-tight uppercase">
              Ready to change your day?
            </h2>
            <p className="text-white/70 font-bold text-lg md:text-xl mb-10 max-w-xl mx-auto relative z-10">
              Stop feeling like you didn't do enough. Secure your spot on the waitlist and get free access to our upcoming WhatsApp tracking group.
            </p>
            
            <div className="flex justify-center relative z-10 w-full mb-8">
              <a 
                href={GOOGLE_FORM_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-block px-12 py-5 bg-primary text-white border-4 border-white font-black rounded-[3rem] shadow-[12px_12px_0px_var(--color-primary)] hover:bg-[#fa5c5c] hover:-translate-y-1 transition-all text-xl uppercase tracking-widest whitespace-nowrap"
              >
                Join Waitlist
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-outline/10 py-8 relative z-10 bg-surface">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-on-surface font-bold">
          <div className="space-y-1 flex gap-12 text-center sm:text-left">
            <div>
              <p className="text-[10px] font-black uppercase text-on-surface/40 mb-1">Platform</p>
              <p className="text-sm font-bold uppercase tracking-tight">WhatsApp + Web</p>
            </div>
            <div className="hidden sm:block">
              <p className="text-[10px] font-black uppercase text-on-surface/40 mb-1">Status</p>
              <p className="text-sm font-bold uppercase tracking-tight">Beta Invite Only</p>
            </div>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://x.com/Easy_saksham" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border-2 border-outline rounded-lg flex items-center justify-center font-black bg-white hover:bg-primary hover:text-white transition-colors cursor-pointer shadow-[4px_4px_0px_var(--color-outline)]"
            >
              𝕏
            </a>
            <a 
              href="https://www.linkedin.com/in/saksham-kushwah/?skipRedirect=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border-2 border-outline rounded-lg flex items-center justify-center font-black bg-white hover:bg-secondary hover:text-outline transition-colors cursor-pointer shadow-[4px_4px_0px_var(--color-outline)]"
            >
              IN
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
