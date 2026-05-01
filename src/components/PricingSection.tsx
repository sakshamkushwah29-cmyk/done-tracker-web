import { CheckCircle } from 'lucide-react';
import * as motion from "motion/react-client";

const GOOGLE_FORM_LINK = "https://forms.gle/XGqcApUkG1f3aDew8";

export function PricingSection() {
  return (
    <section id="pricing" className="mb-24 md:mb-32">
      <div className="text-center max-w-3xl mx-auto mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-black text-on-surface uppercase tracking-tight mb-6">
          Simple pricing. <span className="text-[#10B981]">No anxiety.</span>
        </h2>
        <p className="text-on-surface-variant font-bold text-lg md:text-xl">
          Stop paying for complex project managers that make you feel guilty. Invest in your momentum.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Option 1: The Hook */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-[#10B981]/10 border-4 border-[#10B981] shadow-[8px_8px_0px_#10B981] rounded-[2rem] p-8 flex flex-col relative transform transition-all hover:-translate-y-2 group"
        >
          <h3 className="text-2xl font-black text-on-surface uppercase tracking-tight mb-2">The 7-Day Dopamine Reset</h3>
          <p className="text-[10px] font-black uppercase text-on-surface/60 tracking-widest mb-6 border-b-2 border-outline/10 pb-4">The Hook</p>
          
          <div className="text-5xl font-black text-on-surface mb-4">
            $0
          </div>
          <p className="text-sm font-bold text-on-surface-variant mb-8 line-clamp-2">
            Experience the reverse to-do list risk-free.
          </p>

          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-sm text-on-surface">7 days of full Premium access</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-sm text-on-surface">The simple "Done" web logger</span>
            </li>
            <li className="flex items-start gap-3">
               <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                 <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-sm text-on-surface">See your first Weekly Accomplishment Chart</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-sm text-on-surface">Build the habit of celebrating wins</span>
            </li>
          </ul>

          <a href={GOOGLE_FORM_LINK} target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 bg-[#10B981] text-white font-black uppercase tracking-widest rounded-full hover:bg-[#0ea875] transition-colors border-2 border-transparent">
            Join the Free Waitlist
          </a>
        </motion.div>

        {/* Option 2: The Monthly Habit */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1 }}
          className="bg-white border-4 border-outline shadow-[8px_8px_0px_#1A1A1A] rounded-[2rem] p-8 flex flex-col relative transform transition-all hover:-translate-y-2 group"
        >
          <h3 className="text-2xl font-black text-on-surface uppercase tracking-tight mb-2">The Monthly Habit</h3>
          <p className="text-[10px] font-black uppercase text-on-surface/60 tracking-widest mb-6 border-b-2 border-outline/10 pb-4">The Anchor</p>
          
          <div className="text-5xl font-black text-on-surface mb-1">
            $4.99<span className="text-lg text-on-surface/60">/mo</span>
          </div>
          <p className="text-sm font-bold text-on-surface-variant mb-8 line-clamp-2 mt-3">
            Keep your momentum going, month to month.
          </p>

          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 shrink-0 mt-0.5 flex items-center justify-center text-lg">✅</div>
              <span className="font-bold text-sm text-on-surface">The WhatsApp Bot: Text your wins instantly, zero friction.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 shrink-0 mt-0.5 flex items-center justify-center text-lg">✅</div>
              <span className="font-bold text-sm text-on-surface">Dopamine Dashboards: Monthly and Weekly visual charts.</span>
            </li>
            <li className="flex items-start gap-3">
               <div className="w-6 h-6 shrink-0 mt-0.5 flex items-center justify-center text-lg">✅</div>
              <span className="font-bold text-sm text-on-surface">Brag Export: 1-click aesthetic graphics for Instagram/LinkedIn.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 shrink-0 mt-0.5 flex items-center justify-center text-lg">✅</div>
              <span className="font-bold text-sm text-on-surface">AI Categorization: We organize your wins automatically.</span>
            </li>
          </ul>

          <button disabled className="w-full py-4 bg-surface text-on-surface/50 border-2 border-outline/20 font-black uppercase tracking-widest rounded-full cursor-not-allowed">
            Available after 7-day reset
          </button>
        </motion.div>

        {/* Option 3: The Burnout Cure */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2 }}
          className="bg-white border-4 border-outline shadow-[12px_12px_0px_#10B981] rounded-[2rem] p-8 flex flex-col relative transform transition-all hover:-translate-y-2 group"
        >
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#10B981] text-white px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest border-2 border-outline shadow-[4px_4px_0px_#1A1A1A] whitespace-nowrap z-10">
            Most Popular
          </div>
          <h3 className="text-2xl font-black text-on-surface uppercase tracking-tight mb-2">The Burnout Cure</h3>
          <p className="text-[10px] font-black uppercase text-on-surface/60 tracking-widest mb-6 border-b-2 border-outline/10 pb-4">The Ultimate Investment</p>
          
          <div className="flex items-end gap-2 mb-1">
            <div className="text-5xl font-black text-on-surface">$39</div>
            <div className="text-lg font-bold text-on-surface/60 mb-1">/year</div>
          </div>
          <div className="text-sm font-black text-[#10B981] mt-1">
            Just $3.25/mo — Save 35%
          </div>
          <p className="text-sm font-bold text-on-surface-variant mb-8 line-clamp-2 mt-2">
            Commit to a year of positive reinforcement.
          </p>

          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 shrink-0 mt-0.5 flex items-center justify-center text-lg">🔥</div>
              <span className="font-bold text-sm text-on-surface">Everything in Monthly, plus:</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 shrink-0 mt-0.5 flex items-center justify-center text-lg">🔥</div>
              <span className="font-bold text-sm text-on-surface">Permanent History: Never lose your proof of work.</span>
            </li>
            <li className="flex items-start gap-3">
               <div className="w-6 h-6 shrink-0 mt-0.5 flex items-center justify-center text-lg">🔥</div>
              <span className="font-bold text-sm text-on-surface">Founder Updates: Get behind-the-scenes access to how this app is built.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 shrink-0 mt-0.5 flex items-center justify-center text-lg">🔥</div>
              <span className="font-bold text-sm text-on-surface">Lock in your rate: As an early adopter, your price will never increase.</span>
            </li>
          </ul>

          <button disabled className="w-full py-4 bg-surface text-on-surface/50 border-2 border-outline/20 font-black uppercase tracking-widest rounded-full cursor-not-allowed">
            Available after 7-day reset
          </button>
        </motion.div>
      </div>
    </section>
  );
}
