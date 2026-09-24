import { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="space-y-8 max-w-6xl mx-auto pb-12">
      <header className="border-b pb-6">
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1 flex items-center gap-1.5">
          <Mail size={14} className="text-budget-green" /> Questions, Ideas, Hello
        </p>
        <h2 className="text-4xl font-serif text-budget-green mb-2">There is a person behind the page.</h2>
        <p className="text-gray-600 max-w-xl">
          For project questions or accessibility notes, use the form below. It is a local demo and does not send or store messages.
        </p>
      </header>

      {submitted ? (
        <div className="bg-[#e9f2eb] border border-[#d1e6d6] text-budget-green p-10 rounded-3xl text-center space-y-3 max-w-xl mx-auto">
          <CheckCircle2 size={40} className="mx-auto text-budget-green" />
          <h3 className="font-serif font-bold text-2xl">Message confirmed!</h3>
          <p className="text-sm">This prototype confirms your message on this device only.</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Yellow Card */}
          <div className="lg:col-span-5 bg-[#e9c46a] text-yellow-950 p-8 rounded-3xl shadow-sm space-y-6">
            <div className="w-10 h-10 rounded-2xl bg-yellow-200/60 flex items-center justify-center font-bold">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="text-3xl font-serif mb-2">Keep it simple.</h3>
              <p className="text-sm leading-relaxed opacity-90">
                You do not need a perfect question. Tell us what you were trying to do and where it got fuzzy.
              </p>
            </div>
            <div className="pt-6 border-t border-yellow-700/20">
              <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-900 mb-1">Response Note</p>
              <p className="text-xs opacity-85">This prototype confirms your message on this device only.</p>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Name</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-[#f8f6f0] border border-[#e8e4d9] p-3.5 rounded-xl focus:border-budget-green outline-none text-sm font-medium" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full bg-[#f8f6f0] border border-[#e8e4d9] p-3.5 rounded-xl focus:border-budget-green outline-none text-sm font-medium" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">What can we help with?</label>
                <select className="w-full bg-[#f8f6f0] border border-[#e8e4d9] p-3.5 rounded-xl focus:border-budget-green outline-none text-sm font-medium">
                  <option>Choose a topic</option>
                  <option>General Question</option>
                  <option>Accessibility</option>
                  <option>Lesson Suggestion</option>
                  <option>Something is not working</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                <textarea 
                  rows="4" 
                  required 
                  className="w-full bg-[#f8f6f0] border border-[#e8e4d9] p-3.5 rounded-xl focus:border-budget-green outline-none text-sm font-medium resize-none"
                ></textarea>
              </div>

              <button type="submit" className="bg-budget-green text-white px-6 py-4 rounded-xl font-bold hover:bg-[#123023] transition-colors flex items-center gap-2 shadow-sm text-sm">
                Send message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}