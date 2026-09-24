import { useState } from "react";
import { Send, ShieldCheck } from "lucide-react";

export function Chatbot() {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState([
    { role: "assistant", text: "Hi, I'm BumbleBee. Ask me a practical money question and I'll help you find a small next step." }
  ]);

  const handleAsk = (textToAsk = query) => {
    if (!textToAsk.trim()) return;
    
    const newHistory = [...history, { role: "user", text: textToAsk }];
    const lowerQuery = textToAsk.toLowerCase();
    
    let responseText = "I can help with budgeting, saving, needs versus wants, or recovering from a money mistake. Try asking about one of those.";
    
    if (lowerQuery.includes("start a budget")) {
      responseText = "Start with one month of take-home income and your three regular costs. Then choose one small goal. You do not need perfect records to begin.";
    } else if (lowerQuery.includes("save for a goal")) {
      responseText = "Name the goal, set a realistic amount you can repeat, and divide what remains by that monthly amount. Our Savings Goals tool can show the estimate.";
    } else if (lowerQuery.includes("need or a want")) {
      responseText = "Try three questions: does it keep you safe or able to learn, what happens if you wait, and can you afford it without borrowing from essentials?";
    }
    
    setHistory([...newHistory, { role: "assistant", text: responseText }]);
    setQuery("");
  };

  return (
    <section className="space-y-8 max-w-4xl mx-auto pb-12">
      <header className="flex justify-between items-start border-b pb-6">
        <div>
          <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-1">A Friendly Second Opinion</p>
          <h2 className="text-4xl font-serif text-budget-green mb-2">Ask BumbleBee.</h2>
          <p className="text-gray-600">
            A rule-based finance assistant for everyday learning. No accounts, no transactions, and no pretending to know your whole life.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-xs font-bold text-gray-600 shadow-sm">
          <ShieldCheck size={16} className="text-budget-green" /> Safe by design
        </div>
      </header>
      
      <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm flex flex-col h-130">
        {/* Chat Header */}
        <div className="bg-[#e9f2eb] p-4 flex items-center gap-3 border-b border-[#d1e6d6]">
          <div className="w-10 h-10 rounded-full bg-budget-green flex items-center justify-center text-white font-serif font-bold text-lg">P</div>
          <div>
            <h3 className="font-bold text-budget-green">BumbleBee's corner</h3>
            <p className="text-xs text-gray-600">Practical, general, and on your side.</p>
          </div>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {history.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${msg.role === "user" ? "bg-budget-green text-white rounded-br-none" : "bg-gray-100 text-gray-800 rounded-bl-none"}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-100 bg-[#f8f6f0]">
          <div className="mb-3">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Try a prompt</p>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => handleAsk("How do I start a budget?")} className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-50 transition shadow-sm font-medium">How do I start a budget?</button>
              <button onClick={() => handleAsk("How can I save for a goal?")} className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-50 transition shadow-sm font-medium">How can I save for a goal?</button>
              <button onClick={() => handleAsk("Is this a need or a want?")} className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-50 transition shadow-sm font-medium">Is this a need or a want?</button>
            </div>
          </div>
          
          <div className="relative">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask a money question..."
              className="w-full bg-white border border-gray-200 p-4 pr-12 rounded-xl focus:border-budget-green focus:ring-1 focus:ring-budget-green outline-none text-sm font-medium"
              onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
            />
            <button 
              onClick={() => handleAsk()}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-budget-green p-2.5 rounded-lg hover:bg-[#123023] transition shadow-sm"
            >
              <Send size={16} />
            </button>
          </div>
          <p className="text-[10px] text-gray-400 mt-2 text-center">BumbleBee provides general education, not professional financial advice. Do not share passwords, card details, or private account information.</p>
        </div>
      </div>
    </section>
  );
}