import { useState, useEffect } from "react";
import { Route, Switch, Link, useRoute } from "wouter";
import { NeedsVsWants } from "./pages/NeedsVsWants";
import { Chatbot } from "./pages/Chatbot";
import { BudgetCalculator } from "./pages/BudgetCalculator";
import { ExpensePlanner } from "./pages/ExpensePlanner";
import { BudgetBasics } from "./pages/BudgetBasics";
import { LearningCards } from "./pages/LearningCards";
import { About } from "./pages/About";
import { Sitemap } from "./pages/Sitemap";
import { 
  Home, BookOpen, Compass, Calculator, Target, 
  ListChecks, RotateCcw, Library, Bot, Info, Heart, ArrowRight, DollarSign, Clock, ArrowUp, X, Menu
} from "lucide-react";
import { SavingsGoals } from "./pages/SavingsGoals";
import { MoneyMistakes } from "./pages/MoneyMistakes";
import { Feedback } from "./pages/Feedback";

const NavLink = ({ href, icon: Icon, children, onClick }) => {
  const [isActive] = useRoute(href);
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors font-medium text-xs relative ${
        isActive 
          ? "bg-[#255743] text-white shadow-sm" 
          : "text-[#a8baba] hover:bg-[#255743] hover:text-white"
      }`}
    >
      {isActive && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-budget-mustard rounded-r-full"></div>
      )}
      <Icon size={16} className={isActive ? "text-white" : "text-[#a8baba]"} />
      {children}
    </Link>
  );
};

// Declared outside App() to satisfy ESLint static component rules
const SidebarContent = ({ onItemClick }) => (
  <div className="flex flex-col h-full">
    <div className="p-5 pb-3 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-budget-mustard flex items-center justify-center text-yellow-950 shadow-sm">
          <DollarSign size={20} strokeWidth={2.5} />
        </div>
        <div>
          <h1 className="text-base font-bold text-white tracking-tight leading-none">BudgetBasics</h1>
          <p className="text-[9px] text-[#a8baba] uppercase tracking-wider font-semibold mt-1">Money, Made Human</p>
        </div>
      </div>
      <button 
        onClick={onItemClick} 
        className="md:hidden text-gray-300 hover:text-white"
      >
        <X size={20} />
      </button>
    </div>

    <nav className="flex-1 px-3 py-3 space-y-5 overflow-y-auto">
      <div className="space-y-0.5">
        <p className="px-3 text-[10px] font-bold text-[#7a9d8c] uppercase tracking-widest mb-1.5">Start Here</p>
        <NavLink href="/" icon={Home} onClick={onItemClick}>Home</NavLink>
        <NavLink href="/basics" icon={BookOpen} onClick={onItemClick}>Budgeting basics</NavLink>
        <NavLink href="/needs-wants" icon={Compass} onClick={onItemClick}>Needs vs wants</NavLink>
      </div>

      <div className="space-y-0.5">
        <p className="px-3 text-[10px] font-bold text-[#7a9d8c] uppercase tracking-widest mb-1.5">Try a Tool</p>
        <NavLink href="/50-30-20" icon={Calculator} onClick={onItemClick}>50 / 30 / 20</NavLink>
        <NavLink href="/savings-goals" icon={Target} onClick={onItemClick}>Savings goals</NavLink>
        <NavLink href="/expense-planner" icon={ListChecks} onClick={onItemClick}>Expense planner</NavLink>
      </div>

      <div className="space-y-0.5">
        <p className="px-3 text-[10px] font-bold text-[#7a9d8c] uppercase tracking-widest mb-1.5">Keep Learning</p>
        <NavLink href="/money-mistakes" icon={RotateCcw} onClick={onItemClick}>Money mistakes</NavLink>
        <NavLink href="/cards" icon={Library} onClick={onItemClick}>Learning cards</NavLink>
        <NavLink href="/ask-bumblebee" icon={Bot} onClick={onItemClick}>Ask BumbleBee</NavLink>
      </div>

      <div className="space-y-0.5">
        <p className="px-3 text-[10px] font-bold text-[#7a9d8c] uppercase tracking-widest mb-1.5">Good to Know</p>
        <NavLink href="/about" icon={Info} onClick={onItemClick}>About BudgetBasics</NavLink>
        <NavLink href="/share-feedback" icon={Heart} onClick={onItemClick}>Share feedback</NavLink>
      </div>

      <div className="mx-1 mt-4 bg-[#255743] p-4 rounded-2xl border border-[#2d664f] shadow-inner">
        <h3 className="text-sm font-serif font-bold text-white mb-1 leading-snug">
          One good choice today.
        </h3>
        <p className="text-xs text-[#a8baba] mb-3">
          That is enough progress for now.
        </p>
        <Link href="/ask-bumblebee" onClick={onItemClick} className="text-budget-mustard text-xs font-bold flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
          Ask BumbleBee <ArrowRight size={14} />
        </Link>
      </div>
    </nav>
  </div>
);

export default function App() {
  const [time, setTime] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    const container = document.getElementById("main-content-scroll");
    if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex h-screen overflow-hidden bg-budget-beige text-gray-900 relative">
      {/* Startup Welcome Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1b4332] text-white p-8 lg:p-10 rounded-3xl shadow-2xl max-w-lg w-full relative space-y-6 animate-fadeIn border border-[#2d664f]">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 text-[#a8baba] hover:text-white transition"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-budget-mustard flex items-center justify-center text-yellow-950 shadow-sm">
                <DollarSign size={26} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight leading-none">BudgetBasics</h2>
                <p className="text-[10px] text-[#a8baba] uppercase tracking-wider font-semibold mt-1">Money, Made Human</p>
              </div>
            </div>

            <div className="space-y-2">
              <span className="uppercase tracking-widest text-[10px] font-bold text-budget-mustard block">Welcome to your money corner</span>
              <h3 className="text-3xl font-serif leading-tight">Make money feel a little less scary.</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Small, friendly lessons and tools for students and beginners. No jargon. No judgment. Just the next good decision.
              </p>
            </div>

            <button 
              onClick={() => setShowModal(false)}
              className="w-full bg-[#e9c46a] text-yellow-950 py-3.5 rounded-full font-bold hover:bg-yellow-400 transition shadow-sm text-sm"
            >
              Get Started &rarr;
            </button>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-[#1b4332] flex-col h-full overflow-y-auto text-white shrink-0 select-none border-r border-[#224d3a]">
        <SidebarContent />
      </aside>

      {/* Mobile Drawer Sidebar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex">
          <div className="w-72 bg-[#1b4332] h-full shadow-2xl flex flex-col relative z-50">
            <SidebarContent onItemClick={() => setMobileMenuOpen(false)} />
          </div>
          <div className="flex-1 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
        </div>
      )}

      {/* Main Scrollable Content Area */}
      <main id="main-content-scroll" className="flex-1 h-full overflow-y-auto flex flex-col justify-between">
        <div>
          {/* Universal Top Header Bar */}
          <div className="border-b border-gray-200/80 px-4 sm:px-8 py-3.5 flex flex-row justify-between items-center bg-white/40 backdrop-blur-sm gap-2">
            <div className="flex items-center gap-3 text-xs font-medium text-gray-600">
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-1.5 rounded-lg bg-[#1b4332] text-white mr-1"
              >
                <Menu size={18} />
              </button>
              <span className="flex items-center gap-1.5 bg-amber-100/60 text-amber-900 px-3 py-1 rounded-full font-semibold">
                <Clock size={13} /> <span className="hidden sm:inline">Thursday, 24 September 2026</span> {time}
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold text-gray-700">
              <Link href="/sitemap" className="hover:text-budget-green transition">Sitemap</Link>
            </div>
          </div>

          {/* Today's Nudge Banner */}
          <div className="bg-[#f4e8c1] border-b border-[#e8dcb8] px-4 sm:px-8 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs gap-2">
            <div className="flex items-center gap-3">
              <span className="bg-[#c84b31] text-white px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider text-[10px]">Today's Nudge</span>
              <span className="font-serif font-medium text-yellow-950">A budget is a conversation with your future self.</span>
            </div>
            <Link href="/basics" className="font-bold text-yellow-950 hover:underline flex items-center gap-1 shrink-0">
              Learn the basics &rarr;
            </Link>
          </div>

          {/* Page Switcher Container */}
          <div className="max-w-6xl mx-auto p-4 sm:p-8 lg:p-12">
            <Switch>
              <Route path="/" component={() => (
                <div className="space-y-8">
                  <div className="bg-[#1b4332] text-white p-8 lg:p-14 rounded-3xl shadow-xl relative overflow-hidden flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                    <div className="relative z-10 max-w-2xl">
                      <span className="uppercase tracking-widest text-xs font-bold text-budget-mustard mb-3 block">Welcome to your money corner</span>
                      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif mb-4 leading-tight">Make money feel a little less scary.</h1>
                      <p className="text-sm sm:text-base opacity-90 mb-6 leading-relaxed">Small, friendly lessons and tools for students and beginners. No jargon. No judgment. Just the next good decision.</p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/basics" className="bg-[#e9c46a] text-yellow-950 px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition inline-flex items-center gap-2 text-sm shadow-sm">
                          Start with the basics &rarr;
                        </Link>
                        <Link href="/50-30-20" className="bg-[#255743] text-white px-6 py-3 rounded-full font-bold hover:bg-[#2d664f] transition inline-flex items-center gap-2 text-sm border border-[#376e57]">
                          Try a tool &rarr;
                        </Link>
                      </div>
                    </div>
                    
                    <div className="bg-[#255743] border border-[#376e57] p-6 rounded-2xl w-full lg:w-72 shadow-inner shrink-0">
                      <span className="text-[10px] font-bold text-budget-mustard uppercase tracking-widest block mb-1">Your tiny win</span>
                      <h3 className="text-lg font-serif font-bold text-white mb-3">Know where your money goes.</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-300 font-medium">
                          <span>curiosity</span>
                          <span>60% clearer</span>
                        </div>
                        <div className="w-full bg-[#1b4332] rounded-full h-2">
                          <div className="bg-budget-mustard h-2 rounded-full w-3/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Worth Knowing</p>
                        <h2 className="text-2xl sm:text-3xl font-serif text-budget-green">Three ideas to carry with you</h2>
                      </div>
                      <Link href="/cards" className="text-xs font-bold text-budget-green hover:underline">
                        See all cards &rarr;
                      </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                        <span className="text-xs font-bold text-gray-400">01</span>
                        <h3 className="font-bold text-gray-900 text-lg">Give every naira a job</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">A budget is a plan for your money, not a punishment for spending it.</p>
                      </div>
                      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                        <span className="text-xs font-bold text-gray-400">02</span>
                        <h3 className="font-bold text-gray-900 text-lg">Start tiny, stay consistent</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">Saving ₦5,000 each week builds the habit before it builds the balance.</p>
                      </div>
                      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                        <span className="text-xs font-bold text-gray-400">03</span>
                        <h3 className="font-bold text-gray-900 text-lg">Pause before the tap</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">A ten-minute pause can turn an impulse into a choice you feel good about.</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <div className="bg-[#f4e8c1] border border-[#e2d5ab] p-8 rounded-3xl space-y-4 text-yellow-950">
                      <p className="text-xs font-bold uppercase tracking-widest text-amber-900">Quick Facts</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-3xl font-serif font-bold">3</p>
                          <p className="text-xs opacity-80 mt-1">Buckets to remember</p>
                        </div>
                        <div>
                          <p className="text-3xl font-serif font-bold">10 min</p>
                          <p className="text-xs opacity-80 mt-1">For a first money check-in</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm space-y-4 flex flex-col justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Learning Together</p>
                        <h3 className="text-xl font-serif text-budget-green font-bold">48,317 curious visitors</h3>
                        <p className="text-xs text-gray-600 mt-2">You are in good company. BudgetBasics is a quiet place to ask questions that school forgot to answer.</p>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/needs-wants" className="bg-budget-green text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#123023] transition">
                          Test your instincts &rarr;
                        </Link>
                        <Link href="/ask-bumblebee" className="border border-gray-300 px-4 py-2 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50 transition">
                          Ask BumbleBee
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )} />
              <Route path="/needs-wants" component={NeedsVsWants} />
              <Route path="/50-30-20" component={BudgetCalculator} />
              <Route path="/expense-planner" component={ExpensePlanner} />
              <Route path="/savings-goals" component={SavingsGoals} />
              <Route path="/money-mistakes" component={MoneyMistakes} />
              <Route path="/share-feedback" component={Feedback} />
              <Route path="/ask-bumblebee" component={Chatbot} />
              <Route path="/basics" component={BudgetBasics} />
              <Route path="/cards" component={LearningCards} />
              <Route path="/about" component={About} />
              <Route path="/sitemap" component={Sitemap} />
              <Route>
                <div className="text-center py-20">
                  <h2 className="text-2xl font-bold">404: Page Not Found</h2>
                  <p className="text-gray-600 mt-2">This educational module is under construction.</p>
                </div>
              </Route>
            </Switch>
          </div>
        </div>

        {/* Professional Footer */}
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-budget-mustard flex items-center justify-center text-yellow-950 font-bold text-xs">$</div>
                <h4 className="font-bold text-budget-green text-lg">BudgetBasics</h4>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Practical money lessons for the days when you are figuring it out as you go.
              </p>
            </div>

            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Explore</p>
              <ul className="space-y-2 text-xs font-medium text-gray-700">
                <li><Link href="/basics" className="hover:underline">Budgeting basics</Link></li>
                <li><Link href="/expense-planner" className="hover:underline">Expense planner</Link></li>
                <li><Link href="/cards" className="hover:underline">Learning cards</Link></li>
              </ul>
            </div>

            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Talk To Us</p>
              <ul className="space-y-2 text-xs font-medium text-gray-700">
                <li><Link href="/share-feedback" className="hover:underline">Send feedback</Link></li>
                <li><Link href="/about" className="hover:underline">Contact</Link></li>
                <li><Link href="/sitemap" className="hover:underline">Full sitemap</Link></li>
              </ul>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-400 gap-4">
            <p>Educational estimates only. No banking, transactions, or professional advice.</p>
            <div className="flex items-center gap-4">
              <span>Built for better next steps.</span>
              <button 
                onClick={scrollToTop}
                className="w-9 h-9 rounded-full bg-budget-green text-white flex items-center justify-center hover:bg-[#123023] transition shadow-sm"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}