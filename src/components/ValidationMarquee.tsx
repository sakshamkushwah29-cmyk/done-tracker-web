import * as motion from "motion/react-client";

const POSTS = [
  {
    subreddit: "r/ADHD",
    quote: "if I don't complete everything on my “To Do” list I feel like a failure and it halts my productivity.",
    link: "https://www.reddit.com/r/ADHD/comments/1jqs2ki/using_a_done_list_instead_of_a_to_do_list_changes/",
  },
  {
    subreddit: "r/productivity",
    quote: "To-do lists always made me feel behind... Every day ended feeling like a failure. A “done” list flips that.",
    link: "https://www.reddit.com/r/productivity/comments/1q5vwkg/i_keep_a_done_list_instead_of_a_todo_list_and_its/",
  },
  {
    subreddit: "r/productivity",
    quote: "Your problem isn't productivity, it's anxiety. Your relationship with your to-do list is creating stress.",
    link: "https://www.reddit.com/r/productivity/comments/1nd81lu/stop_making_lists_of_things_to_do_create_a_done/",
  },
  {
    subreddit: "r/adhdwomen",
    quote: "Making a To-Do list that works: preventing it from becoming a 'record of failures'.",
    link: "https://www.reddit.com/r/adhdwomen/comments/1qob2ne/making_a_todo_list_that_works_preventing_it_from/",
  },
  {
    subreddit: "r/getdisciplined",
    quote: "Overwhelmed by your to-do list? replace your to-do list with a 'done list'",
    link: "https://www.reddit.com/r/getdisciplined/comments/1r8zssf/method_replace_your_todo_list_with_a_done_list/"
  },
  {
    subreddit: "r/NonZeroDay",
    quote: "Reverse to-do list! essentially is instead of ticking boxes, you're adding the things you have accomplished.",
    link: "https://www.reddit.com/r/NonZeroDay/comments/ekx87k/tip_reverse_todo_list/",
  },
  {
    subreddit: "Hacker News",
    quote: "Theoretically I just copy-paste between the 'pendings' to the 'done', but I also add notes as the day progress",
    link: "https://news.ycombinator.com/item?id=44256499"
  },
  {
    subreddit: "r/HowToMen",
    quote: "Most to-do lists are bloated... and overwhelming dashboards that just cause decision paralysis",
    link: "https://www.reddit.com/r/HowToMen/comments/1rp8avm/promo_i_built_a_hyperminimalist_antitodo_list_app/"
  },
  {
    subreddit: "r/apps",
    quote: "anti todo list - I stopped turning every idea into a task. Over time, every good idea started to feel like an obligation.",
    link: "https://www.reddit.com/r/apps/comments/1slb45f/free_ios_anti_todo_list_i_stopped_turning_every/"
  }
];

const ROW1 = POSTS.slice(0, 5);
const ROW2 = POSTS.slice(5);

const MARQUEE_ROW1 = [...ROW1, ...ROW1, ...ROW1, ...ROW1];
const MARQUEE_ROW2 = [...ROW2, ...ROW2, ...ROW2, ...ROW2];

export function ValidationMarquee() {
  return (
    <section className="py-24 overflow-hidden bg-surface relative">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-on-surface uppercase tracking-tight mb-4">
          The <span className="text-primary italic">Anti-To-Do List</span> Movement is Here.
        </h2>
        <p className="text-on-surface-variant font-bold max-w-2xl mx-auto text-lg">
          Don't just take our word for it. Here is what real people across Reddit, HackerNews and beyond are saying about the reverse to-do list method.
        </p>
      </div>

      <div className="relative w-full flex flex-col gap-8">
        {/* Left/Right Gradients for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        {/* Row 1 */}
        <div className="flex w-[200vw] sm:w-[150vw] md:w-[100vw]">
          <motion.div
            animate={{ x: [0, "-25%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            className="flex gap-6 whitespace-nowrap px-3"
          >
            {MARQUEE_ROW1.map((post, i) => (
              <a 
                key={i} 
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-4 border-outline shadow-[6px_6px_0px_var(--color-outline)] p-6 rounded-[2rem] w-[350px] md:w-[450px] shrink-0 hover:-translate-y-2 hover:shadow-[12px_12px_0px_var(--color-primary)] transition-all block group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-secondary border-2 border-outline flex items-center justify-center text-[10px] font-black shrink-0 text-on-surface">
                    {post.subreddit.replace('r/', '')[0].toUpperCase()}
                  </div>
                  <span className="font-black text-xs uppercase tracking-widest text-on-surface/60 group-hover:text-primary transition-colors">
                    {post.subreddit}
                  </span>
                </div>
                <p className="text-on-surface font-bold text-sm leading-relaxed whitespace-normal break-words italic">
                  "{post.quote}"
                </p>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Row 2 (Reverse direction) */}
        <div className="flex w-[200vw] sm:w-[150vw] md:w-[100vw]">
          <motion.div
            animate={{ x: ["-25%", 0] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
            className="flex gap-6 whitespace-nowrap px-3"
          >
             {MARQUEE_ROW2.map((post, i) => (
              <a 
                key={i} 
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent border-4 border-outline shadow-[6px_6px_0px_var(--color-outline)] p-6 rounded-[2rem] w-[350px] md:w-[450px] shrink-0 hover:-translate-y-2 hover:shadow-[12px_12px_0px_var(--color-outline)] transition-all block group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-outline flex items-center justify-center text-[10px] font-black shrink-0 text-on-surface">
                    {post.subreddit.replace('r/', '')[0].toUpperCase()}
                  </div>
                  <span className="font-black text-xs uppercase tracking-widest text-on-surface/60 group-hover:text-on-surface transition-colors">
                    {post.subreddit}
                  </span>
                </div>
                <p className="text-on-surface font-bold text-sm leading-relaxed whitespace-normal break-words italic">
                  "{post.quote}"
                </p>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
