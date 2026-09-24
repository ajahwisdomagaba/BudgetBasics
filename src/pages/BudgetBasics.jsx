import { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import { Link } from "wouter";

export function BudgetBasics() {
  const [selectedId, setSelectedId] = useState(null);

  const options = [
    { 
      id: 1, 
      text: "Planning what matters", 
      correct: true, 
      feedback: "Exactly. A budget is a plan that helps your priorities get a turn." 
    },
    { 
      id: 2, 
      text: "Making every choice perfect", 
      correct: false, 
      feedback: "Not quite. Striving for perfection leads to burnout." 
    },
    { 
      id: 3, 
      text: "Avoiding all spending", 
      correct: false, 
      feedback: "Not quite. Thinking of a budget as a rigid rulebook will burn you out." 
    }
  ];

  const selectedOption = options.find(o => o.id === selectedId);

  return (
    <section className="space-y-8 max-w-6xl mx-auto pb-12">
      <header className="flex justify-between items-start border-b pb-6">
        <div>
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">Lesson 01 · Start Here</p>
          <h2 className="text-4xl font-serif text-budget-green mb-2">Budgeting, without the big scary word.</h2>
          <p className="text-gray-600 max-w-xl">
            A budget is simply a plan for money that has not happened yet. It helps you choose what matters before your balance chooses for you.
          </p>
        </div>
        <Link href="/50-30-20" className="flex items-center gap-2 bg-[#1b4332] text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-[#123023] transition shadow-sm shrink-0">
          Next: 50 / 30 / 20 <ArrowRight size={16} />
        </Link>
      </header>

      {/* Intro Box */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 bg-[#1b4332] text-white p-8 rounded-3xl shadow-md flex flex-col justify-between space-y-8">
          <div>
            <p className="text-xs font-bold tracking-widest text-budget-mustard uppercase mb-2">The Simple Version</p>
            <h3 className="text-4xl font-serif">Money in. Choices out.</h3>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#2d664f]">
            <div>
              <span className="text-xs font-bold text-budget-mustard">01</span>
              <h4 className="font-bold text-sm mt-1">Notice</h4>
              <p className="text-[11px] text-[#a8baba] mt-1">What comes in and what usually goes out.</p>
            </div>
            <div>
              <span className="text-xs font-bold text-budget-mustard">02</span>
              <h4 className="font-bold text-sm mt-1">Choose</h4>
              <p className="text-[11px] text-[#a8baba] mt-1">What deserves your money this month.</p>
            </div>
            <div>
              <span className="text-xs font-bold text-budget-mustard">03</span>
              <h4 className="font-bold text-sm mt-1">Adjust</h4>
              <p className="text-[11px] text-[#a8baba] mt-1">Plans change. Your budget can too.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between space-y-4">
          <div>
            <p className="text-[10px] font-bold text-[#c84b31] uppercase tracking-widest mb-1">A Good First Budget</p>
            <h3 className="text-2xl font-serif text-gray-900 mb-2">Should feel useful, not restrictive.</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Leave room for joy, surprises, and the occasional bad decision. A plan that is too strict will not survive a normal week.
            </p>
          </div>
          <div className="bg-[#f8f6f0] border border-[#e8e4d9] p-4 rounded-2xl space-y-1">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
              <span>💡</span> Try this tonight
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              Open your last 7 days of spending. Do not judge it. Just circle the three things you want to remember next week.
            </p>
          </div>
        </div>
      </div>

      {/* Knowledge Check Quiz */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
        <div>
          <p className="text-[10px] font-bold text-[#c84b31] uppercase tracking-widest mb-1">Knowledge Check</p>
          <h3 className="text-2xl font-serif text-gray-900">What is a budget really for?</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {options.map((opt) => {
            const isSelected = selectedId === opt.id;
            let borderStyle = "border-gray-200 hover:bg-gray-50 text-gray-800";
            if (isSelected) {
              borderStyle = opt.correct 
                ? "border-budget-green bg-green-50/50 text-gray-900 ring-1 ring-budget-green shadow-sm" 
                : "border-red-300 bg-red-50/50 text-gray-900 ring-1 ring-red-300";
            }

            return (
              <button 
                key={opt.id}
                onClick={() => setSelectedId(opt.id)}
                className={`p-5 rounded-2xl border text-left font-medium text-sm transition flex justify-between items-center ${borderStyle}`}
              >
                <span>{opt.text}</span>
                {isSelected && (
                  opt.correct ? <Check size={16} className="text-budget-green shrink-0" /> : <X size={16} className="text-red-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {selectedOption && (
          <div className="p-4 rounded-2xl bg-[#f8f6f0] border border-[#e8e4d9] text-xs font-medium text-gray-800 animate-fadeIn">
            {selectedOption.feedback}
          </div>
        )}
      </div>
    </section>
  );
}