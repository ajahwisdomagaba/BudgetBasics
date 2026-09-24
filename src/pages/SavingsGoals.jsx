import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, AlertCircle } from "lucide-react";

export function SavingsGoals() {
  const [target, setTarget] = useState(80000);
  const [saved, setSaved] = useState(18000);
  const [monthly, setMonthly] = useState(12500);
  const [error, setError] = useState("");

  const handleNumberChange = (value, setter) => {
    const num = parseFloat(value);
    if (num < 0) {
      setError("Negative values are not allowed. Amount must be greater than zero.");
      setter(0);
    } else {
      setError("");
      setter(value);
    }
  };

  const numTarget = parseFloat(target) || 0;
  const numSaved = parseFloat(saved) || 0;
  const numMonthly = parseFloat(monthly) || 0;

  const stillToGo = Math.max(0, numTarget - numSaved);
  const estimatedMonths = numMonthly > 0 ? Math.ceil(stillToGo / numMonthly) : 0;
  const progressPercent = numTarget > 0 ? Math.min(100, Math.round((numSaved / numTarget) * 100)) : 0;

  return (
    <section className="space-y-8 max-w-6xl mx-auto pb-12">
      <header className="border-b pb-6">
        <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-1">Tool 02 · Build a Buffer</p>
        <h2 className="text-4xl font-serif text-budget-green mb-2">Make a savings goal feel real.</h2>
        <p className="text-gray-600 max-w-xl">
          A goal gets easier when it has a number, a pace, and a little visual proof that you are moving.
        </p>
      </header>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-2xl flex items-center gap-3 text-sm font-medium">
          <AlertCircle size={18} className="shrink-0 text-red-600" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form & Progress */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Target amount</label>
              <input 
                type="number" 
                min="0"
                value={target} 
                onChange={(e) => handleNumberChange(e.target.value, setTarget)} 
                className="w-full bg-[#f8f6f0] border border-[#e8e4d9] p-3 rounded-xl focus:border-budget-green outline-none font-medium" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Already saved</label>
              <input 
                type="number" 
                min="0"
                value={saved} 
                onChange={(e) => handleNumberChange(e.target.value, setSaved)} 
                className="w-full bg-[#f8f6f0] border border-[#e8e4d9] p-3 rounded-xl focus:border-budget-green outline-none font-medium" 
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Planned monthly saving</label>
            <input 
              type="number" 
              min="0"
              value={monthly} 
              onChange={(e) => handleNumberChange(e.target.value, setMonthly)} 
              className="w-full bg-[#f8f6f0] border border-[#e8e4d9] p-3 rounded-xl focus:border-budget-green outline-none font-medium" 
            />
          </div>

          {/* Progress Section with integrated Percentage Badge */}
          <div className="pt-2 bg-[#f8f6f0] p-6 rounded-2xl border border-[#e8e4d9] space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Progress</p>
                <p className="text-xs font-bold text-gray-800 mt-0.5">₦{numSaved.toLocaleString()} / ₦{numTarget.toLocaleString()}</p>
              </div>
              <div className="bg-budget-mustard text-yellow-950 px-3 py-1 rounded-xl text-center shadow-sm">
                <span className="text-sm font-serif font-bold">{progressPercent}%</span>
                <span className="text-[9px] uppercase font-bold tracking-widest ml-1">There so far</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div className="bg-budget-green h-3 rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="bg-[#f8f6f0] border border-[#e8e4d9] p-6 rounded-2xl">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Still to go</p>
              <p className="text-3xl font-serif text-gray-800">₦{stillToGo.toLocaleString()}</p>
            </div>
            <div className="bg-[#1b4332] text-white p-6 rounded-2xl shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#a8baba] mb-1">Estimated Pace</p>
              <p className="text-3xl font-serif text-white">{estimatedMonths} months</p>
            </div>
          </div>
        </div>

        {/* Right Column: Tip Card */}
        <div className="lg:col-span-5 bg-[#fcf8ec] border border-[#f3e8cb] p-8 rounded-3xl space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full">A tip for the middle</span>
          <h3 className="text-3xl font-serif text-amber-950 leading-tight">Make the goal visible, then make the transfer boring.</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            This calculator is an educational estimate. Real life will wiggle. A smaller amount you can repeat is more useful than a heroic amount you cannot.
          </p>
          <div className="pt-4 border-t border-amber-200">
            <Link href="/expense-planner" className="text-sm font-bold text-amber-900 inline-flex items-center gap-2 hover:underline">
              Plan your monthly expenses <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}