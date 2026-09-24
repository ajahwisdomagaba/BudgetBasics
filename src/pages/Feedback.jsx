import { useState } from "react";
import { Heart } from "lucide-react";

export function Feedback() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="space-y-8 max-w-xl mx-auto pb-12 flex flex-col items-center justify-center min-h-[75vh]">
      <header className="text-center">
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 flex items-center justify-center gap-1">
          <Heart size={14} className="text-budget-green" /> Help Us Make This Better
        </p>
        <h2 className="text-4xl font-serif text-budget-green mb-3">Tell us what clicked.</h2>
        <p className="text-gray-600 text-sm">
          This form is client-side only. Share a thought, a confusing bit, or the lesson you wish you had earlier.
        </p>
      </header>

      {submitted ? (
        <div className="w-full bg-[#e9f2eb] border border-[#d1e6d6] text-budget-green p-8 rounded-3xl text-center">
          <h3 className="font-serif font-bold text-2xl mb-2">Thank you!</h3>
          <p className="text-sm">Your feedback has been recorded locally for this demonstration.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">How was your visit?</label>
            <select className="w-full border border-gray-200 p-3.5 rounded-2xl bg-[#f8f6f0] focus:border-budget-green outline-none text-sm font-medium">
              <option>Choose one</option>
              <option>I learned something new</option>
              <option>The calculators were helpful</option>
              <option>I'm still a bit confused</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Your feedback</label>
            <textarea 
              rows="4" 
              placeholder="The most useful part was..."
              className="w-full border border-gray-200 p-3.5 rounded-2xl bg-[#f8f6f0] focus:border-budget-green outline-none resize-none text-sm font-medium"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-budget-green text-white py-4 rounded-2xl font-bold hover:bg-[#123023] transition-colors shadow-sm">
            Share feedback &rarr;
          </button>
        </form>
      )}
    </section>
  );
}