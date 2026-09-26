import { useState, useEffect, useRef } from "react";
import { Bot, Send, ShieldCheck, Sparkles } from "lucide-react";

export function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm BumbleBee. How can I help you navigate your finances today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  const predefinedAnswers = {
    "How do I start a budget?": "Start with one month of take-home income and your three regular costs. Then choose one small goal. You do not need perfect records to begin.",
    "How can I save for a goal?": "Pick a realistic monthly amount you can repeat easily. Automate the transfer if possible, and keep your goal visible so it stays top of mind.",
    "Is this a need or a want?": "Ask yourself: if you remove this for 30 days, does your daily routine or safety break? If no, it's likely a want—which is okay, as long as it fits your plan!"
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMessage = { sender: "user", text: query };
    setMessages(prev => [...prev, userMessage]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    const botReplyText = predefinedAnswers[query] || "That's a thoughtful question! Remember to keep your finances simple, track what matters most, and avoid strict rules that cause burnout.";

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: "bot", text: "" }]);
      
      let index = 0;
      const interval = setInterval(() => {
        if (index <= botReplyText.length) {
          const currentText = botReplyText.substring(0, index);
          setMessages(prev => {
            const newMsgs = [...prev];
            newMsgs[newMsgs.length - 1] = { sender: "bot", text: currentText };
            return newMsgs;
          });
          
          // Only auto-scroll if user hasn't scrolled away from bottom
          if (chatContainerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
            const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
            if (isNearBottom) {
              scrollToBottom();
            }
          }
          
          index++;
        } else {
          clearInterval(interval);
        }
      }, 20);
    }, 800);
  };

  return (
    <section className="space-y-8 max-w-4xl mx-auto pb-12">
      <header className="flex justify-between items-start border-b pb-6">
        <div>
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">A Friendly Second Opinion</p>
          <h2 className="text-4xl font-serif text-budget-green mb-2">Ask BumbleBee.</h2>
          <p className="text-gray-600 max-w-xl">
            A rule-based finance assistant for everyday learning. No accounts, no transactions, and no pretending to know your whole life.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 bg-white border border-gray-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-700 shadow-sm">
          <ShieldCheck size={14} className="text-budget-green" /> Safe by design
        </div>
      </header>

      {/* Chat Container */}
      <div className="bg-[#f4f7f5] border border-[#e2e8e4] rounded-3xl p-6 shadow-sm space-y-6 flex flex-col h-[550px]">
        {/* Chat Header Info */}
        <div className="bg-white p-4 rounded-2xl border border-gray-200/80 flex items-center justify-between shadow-sm shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-budget-green text-white flex items-center justify-center font-bold shadow-sm">
              <Bot size={22} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm">BumbleBee's corner</h3>
              <p className="text-xs text-gray-500">Practical, general, and on your side.</p>
            </div>
          </div>
          <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Simulated AI</span>
        </div>

        {/* Message History Ref added to scrollable container */}
        <div ref={chatContainerRef} className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-md p-4 rounded-2xl text-sm leading-relaxed ${
                msg.sender === 'user' 
                  ? 'bg-budget-green text-white rounded-br-none shadow-sm' 
                  : 'bg-white text-gray-800 rounded-bl-none border border-gray-200 shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-500 p-4 rounded-2xl rounded-bl-none border border-gray-200 shadow-sm flex items-center gap-2 text-xs font-medium">
                <Sparkles size={14} className="animate-spin text-budget-green" /> BumbleBee is thinking...
              </div>
            </div>
          )}
        </div>

        {/* Prompt Chips & Input Form */}
        <div className="space-y-3 shrink-0 pt-2 border-t border-gray-200/60">
          <div className="flex flex-wrap gap-2">
            {Object.keys(predefinedAnswers).map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="text-xs bg-white border border-gray-300 hover:border-budget-green text-gray-700 px-3 py-1.5 rounded-full font-medium transition shadow-sm"
              >
                {prompt}
              </button>
            ))}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleSend(input); }} className="flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a money question..." 
              className="flex-1 bg-white border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:border-budget-green text-sm shadow-sm font-medium"
            />
            <button 
              type="submit" 
              className="bg-budget-green text-white p-3 rounded-xl hover:bg-[#123023] transition flex items-center justify-center shadow-sm"
            >
              <Send size={18} />
            </button>
          </form>

          <p className="text-[10px] text-center text-gray-400">
            BumbleBee provides general education, not professional financial advice. Do not share passwords, card details, or private account information.
          </p>
        </div>
      </div>
    </section>
  );
}