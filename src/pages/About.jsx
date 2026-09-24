import { Link } from "wouter";
import { ShieldCheck, BookOpen, Heart } from "lucide-react";

export function About() {
  return (
    <section className="space-y-8 max-w-6xl mx-auto pb-12">
      <header className="flex justify-between items-start border-b pb-6">
        <div>
          <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-1">The Why Behind The Project</p>
          <h2 className="text-4xl font-serif text-budget-green mb-2">Money skills should feel learnable.</h2>
          <p className="text-gray-600 max-w-xl">
            BudgetBasics is a small educational companion for students and beginners who want useful answers without the shame spiral.
          </p>
        </div>
        <Link href="/share-feedback" className="bg-[#1b4332] text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-[#123023] transition flex items-center gap-2 shadow-sm">
          Help shape it &hearts;
        </Link>
      </header>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Promise */}
        <div className="lg:col-span-7 bg-[#1b4332] text-white p-10 rounded-3xl shadow-md space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#a8baba]">Our Promise</p>
          <h3 className="text-4xl font-serif leading-tight">Less financial fog.<br />More next steps.</h3>
          <p className="text-sm text-[#d4ded7] leading-relaxed">
            We believe financial education works better when it respects the person learning. That means plain language, realistic examples in naira, room for context, and tools that let you practise without handing over personal data.
          </p>
        </div>

        {/* Right Column: Skill Card */}
        <div className="lg:col-span-5 bg-[#e9c46a] text-yellow-950 p-8 rounded-3xl shadow-sm space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest bg-yellow-200/50 px-3 py-1 rounded-full inline-block">✨ Skill</span>
          <h3 className="text-3xl font-serif">Curious is a money skill.</h3>
          <p className="text-sm leading-relaxed opacity-90">
            There is no "should have known this already" here.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 pt-4">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-3">
          <ShieldCheck size={24} className="text-budget-green" />
          <h4 className="font-bold text-gray-900 text-lg">Private by default</h4>
          <p className="text-xs text-gray-600 leading-relaxed">Calculators and planner entries stay in this browser session. No banking connection.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-3">
          <BookOpen size={24} className="text-[#c84b31]" />
          <h4 className="font-bold text-gray-900 text-lg">Practical education</h4>
          <p className="text-xs text-gray-600 leading-relaxed">Examples are estimates meant to help you think, not promises about your finances.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-3">
          <Heart size={24} className="text-budget-green" />
          <h4 className="font-bold text-gray-900 text-lg">No judgment</h4>
          <p className="text-xs text-gray-600 leading-relaxed">A reset is always available. Good money habits are built in ordinary moments.</p>
        </div>
      </div>
    </section>
  );
}