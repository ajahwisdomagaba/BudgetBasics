import { Link } from "wouter";
import { 
  Home, BookOpen, Compass, Calculator, Target, 
  ListChecks, RotateCcw, Library, Bot, Info, Heart, ArrowRight 
} from "lucide-react";

export function Sitemap() {
  return (
    <section className="space-y-8 max-w-6xl mx-auto pb-12">
      <header className="border-b pb-6">
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">Everything in one place</p>
        <h2 className="text-4xl font-serif text-budget-green mb-2">Find your next useful page.</h2>
        <p className="text-gray-600">A clear map of BudgetBasics, from the first lesson to the tools you practise with.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Start Here */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
          <p className="text-[10px] font-bold text-[#c84b31] uppercase tracking-widest">Start Here</p>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="flex items-center justify-between text-sm font-bold text-gray-800 hover:text-budget-green transition">
                <span className="flex items-center gap-2"><Home size={16} /> Home</span>
                <ArrowRight size={14} className="text-gray-400" />
              </Link>
            </li>
            <li>
              <Link href="/basics" className="flex items-center justify-between text-sm font-bold text-gray-800 hover:text-budget-green transition">
                <span className="flex items-center gap-2"><BookOpen size={16} /> Budgeting basics</span>
                <ArrowRight size={14} className="text-gray-400" />
              </Link>
            </li>
            <li>
              <Link href="/needs-wants" className="flex items-center justify-between text-sm font-bold text-gray-800 hover:text-budget-green transition">
                <span className="flex items-center gap-2"><Compass size={16} /> Needs vs wants</span>
                <ArrowRight size={14} className="text-gray-400" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Try a Tool */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
          <p className="text-[10px] font-bold text-[#c84b31] uppercase tracking-widest">Try a Tool</p>
          <ul className="space-y-3">
            <li>
              <Link href="/50-30-20" className="flex items-center justify-between text-sm font-bold text-gray-800 hover:text-budget-green transition">
                <span className="flex items-center gap-2"><Calculator size={16} /> 50 / 30 / 20</span>
                <ArrowRight size={14} className="text-gray-400" />
              </Link>
            </li>
            <li>
              <Link href="/savings-goals" className="flex items-center justify-between text-sm font-bold text-gray-800 hover:text-budget-green transition">
                <span className="flex items-center gap-2"><Target size={16} /> Savings goals</span>
                <ArrowRight size={14} className="text-gray-400" />
              </Link>
            </li>
            <li>
              <Link href="/expense-planner" className="flex items-center justify-between text-sm font-bold text-gray-800 hover:text-budget-green transition">
                <span className="flex items-center gap-2"><ListChecks size={16} /> Expense planner</span>
                <ArrowRight size={14} className="text-gray-400" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Keep Learning */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
          <p className="text-[10px] font-bold text-[#c84b31] uppercase tracking-widest">Keep Learning</p>
          <ul className="space-y-3">
            <li>
              <Link href="/money-mistakes" className="flex items-center justify-between text-sm font-bold text-gray-800 hover:text-budget-green transition">
                <span className="flex items-center gap-2"><RotateCcw size={16} /> Money mistakes</span>
                <ArrowRight size={14} className="text-gray-400" />
              </Link>
            </li>
            <li>
              <Link href="/cards" className="flex items-center justify-between text-sm font-bold text-gray-800 hover:text-budget-green transition">
                <span className="flex items-center gap-2"><Library size={16} /> Learning cards</span>
                <ArrowRight size={14} className="text-gray-400" />
              </Link>
            </li>
            <li>
              <Link href="/ask-BumbleeBee" className="flex items-center justify-between text-sm font-bold text-gray-800 hover:text-budget-green transition">
                <span className="flex items-center gap-2"><Bot size={16} /> Ask BumbleBee</span>
                <ArrowRight size={14} className="text-gray-400" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Good to Know */}
      <div className="bg-[#e9c46a] border border-[#dec062] p-8 rounded-3xl shadow-sm space-y-4 max-w-xl text-yellow-950">
        <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-900">Good to Know</p>
        <ul className="space-y-3">
          <li>
            <Link href="/about" className="flex items-center justify-between text-sm font-bold text-yellow-950 hover:underline">
              <span className="flex items-center gap-2"><Info size={16} /> About</span>
              <ArrowRight size={14} />
            </Link>
          </li>
          <li>
            <Link href="/share-feedback" className="flex items-center justify-between text-sm font-bold text-yellow-950 hover:underline">
              <span className="flex items-center gap-2"><Heart size={16} /> Feedback</span>
              <ArrowRight size={14} />
            </Link>
          </li>
          <li>
            <Link href="/about" className="flex items-center justify-between text-sm font-bold text-yellow-950 hover:underline">
              <span className="flex items-center gap-2"><Compass size={16} /> Contact</span>
              <ArrowRight size={14} />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}