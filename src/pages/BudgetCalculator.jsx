import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function BudgetCalculator() {
  const [income, setIncome] = useState(120000);

  const numIncome = parseFloat(income) || 0;
  const needs = numIncome * 0.5;
  const wants = numIncome * 0.3;
  const savings = numIncome * 0.2;

  return (
    <section className="space-y-8 max-w-6xl mx-auto pb-12">
      <header className="flex justify-between items-start border-b pb-6">
        <div>
          <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-1">A Flexible Starting Point</p>
          <h2 className="text-4xl font-serif text-budget-green mb-2">The 50 / 30 / 20 rule.</h2>
          <p className="text-gray-600 max-w-xl">
            A simple split for thinking about take-home income: half for needs, 30% for wants, and 20% for your future. It is a guide, not a grade.
          </p>
        </div>
        <Link href="/savings-goals" className="flex items-center gap-2 border border-gray-300 bg-white px-5 py-2.5 rounded-2xl text-xs font-bold hover:bg-gray-50 transition shadow-sm">
          Set a savings goal <ArrowRight size={14} />
        </Link>
      </header>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Calculator Box */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Monthly Take-Home Income</label>
            <input 
              type="number" 
              value={income} 
              onChange={(e) => setIncome(e.target.value)} 
              className="w-full bg-[#f8f6f0] border border-[#e8e4d9] p-4 rounded-xl focus:border-budget-green outline-none text-xl font-serif font-bold text-gray-800" 
            />
            <p className="text-[10px] text-gray-400 mt-1">Educational estimate. Use any monthly amount to explore the split.</p>
          </div>

          {/* Multi-color Split Bar */}
          <div className="w-full bg-gray-100 rounded-full h-3 flex overflow-hidden">
            <div className="bg-[#1b4332] h-full" style={{ width: '50%' }}></div>
            <div className="bg-[#e9c46a] h-full" style={{ width: '30%' }}></div>
            <div className="bg-[#c84b31] h-full" style={{ width: '20%' }}></div>
          </div>

          {/* Breakdown Items */}
          <div className="space-y-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#f8f6f0] border border-[#e8e4d9] flex justify-between items-center">
              <div>
                <h4 className="font-bold text-gray-800 text-sm">Needs <span className="text-xs font-normal text-gray-500">50%</span></h4>
                <p className="text-xs text-gray-500">Rent, food, transport, data</p>
              </div>
              <span className="font-serif font-bold text-xl text-gray-800">₦{needs.toLocaleString()}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#f8f6f0] border border-[#e8e4d9] flex justify-between items-center">
              <div>
                <h4 className="font-bold text-gray-800 text-sm">Wants <span className="text-xs font-normal text-gray-500">30%</span></h4>
                <p className="text-xs text-gray-500">Fun, treats, subscriptions</p>
              </div>
              <span className="font-serif font-bold text-xl text-gray-800">₦{wants.toLocaleString()}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#f8f6f0] border border-[#e8e4d9] flex justify-between items-center">
              <div>
                <h4 className="font-bold text-gray-800 text-sm">Future you <span className="text-xs font-normal text-gray-500">20%</span></h4>
                <p className="text-xs text-gray-500">Savings and debt goals</p>
              </div>
              <span className="font-serif font-bold text-xl text-gray-800">₦{savings.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Reminder Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#e9c46a] border border-[#dec062] p-8 rounded-3xl shadow-sm space-y-6 text-yellow-950">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-900 mb-1">Remember</p>
              <h3 className="text-3xl font-serif">Percentages are a map, not a verdict.</h3>
            </div>
            <p className="text-xs leading-relaxed opacity-90">
              If rent takes 60% right now, that is information, not failure. Start where you are and make one small adjustment when you can.
            </p>

            <div className="pt-4 border-t border-yellow-700/20">
              <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-900 mb-1">A Kinder Question</p>
              <p className="font-serif font-bold text-base">What would make next month 1% easier?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}