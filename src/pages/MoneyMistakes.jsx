import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function MoneyMistakes() {
  const [openIndex, setOpenIndex] = useState(0);

  const mistakes = [
    {
      title: "Waiting for the perfect income",
      nextMove: "Start with what comes in now. A small plan is still a plan, and it can grow with you."
    },
    {
      title: "Treating every surprise as a failure",
      nextMove: "Unexpected costs are part of life. A small buffer is a way to make surprises less loud."
    },
    {
      title: "Making a budget once and never looking again",
      nextMove: "A weekly two-minute check-in keeps your plan connected to reality."
    },
    {
      title: "Copying somebody else's priorities",
      nextMove: "Your budget should reflect your commits, your people, your energy, and your season."
    }
  ];

  return (
    <section className="space-y-8 max-w-6xl mx-auto pb-12">
      <header className="flex justify-between items-start border-b pb-6">
        <div>
          <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-1">A Kinder Reset</p>
          <h2 className="text-4xl font-serif text-budget-green mb-2">Money mistakes are data, not identity.</h2>
          <p className="text-gray-600 max-w-xl">
            Everyone has a month they would rather not repeat. Here are a few common patterns, plus the next move hiding inside each one.
          </p>
        </div>
        
        <Link href="/ask-bumblebee" className="flex items-center gap-2 border border-gray-300 bg-white px-5 py-2.5 rounded-2xl text-xs font-bold hover:bg-gray-50 transition shadow-sm">
          Talk through <ArrowRight size={14} />
        </Link>
      </header>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Accordions */}
        <div className="lg:col-span-7 space-y-4">
          {mistakes.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-sm ${
                  isOpen ? "border-budget-mustard ring-1 ring-budget-mustard" : "border-gray-200"
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-gray-400 font-bold">0{idx + 1}</span>
                    <span className="font-bold text-gray-800 text-lg">{item.title}</span>
                  </div>
                  <ChevronDown size={18} className={`transition-transform text-gray-400 ${isOpen ? "rotate-180 text-budget-green" : ""}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 space-y-4">
                    <p className="text-sm text-gray-600">{item.nextMove}</p>
                    <div className="bg-[#fcf8ec] border border-[#f3e8cb] p-4 rounded-xl flex items-center gap-2">
                      <span className="text-xs font-bold text-amber-900 uppercase tracking-widest">Next move:</span>
                      <span className="text-xs font-medium text-amber-950">Write down one thing you can change before Friday.</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Reset Ritual Card */}
        <div className="lg:col-span-5 bg-[#c84b31] text-white p-8 rounded-3xl shadow-md space-y-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#f0a595] mb-1">The Reset Ritual</p>
            <h3 className="text-3xl font-serif leading-tight">Name it.<br />Learn from it.<br />Move on.</h3>
          </div>
          <ul className="space-y-3 text-sm text-[#fdf0ed]">
            <li className="flex items-center gap-2">✓ No dramatic promises.</li>
            <li className="flex items-center gap-2">✓ No punishing yourself.</li>
            <li className="flex items-center gap-2">✓ One useful adjustment.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}