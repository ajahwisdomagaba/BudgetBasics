import { useState } from "react";
import { Search, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export function LearningCards() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const cards = [
    { id: 1, title: "The 2-minute money check-in", category: "Basics", desc: "Look at your balance, upcoming needs, and one choice you want to make on purpose." },
    { id: 2, title: "The pause before purchase", category: "Habits", desc: "Ask: do I want this, can I afford it, and will tomorrow-me thank me?" },
    { id: 3, title: "Your buffer is a quiet win", category: "Planning", desc: "Even a small cushion can make an ordinary surprise feel manageable." },
    { id: 4, title: "Make the number visible", category: "Goals", desc: "A named savings goal turns an abstract wish into a series of small deposits." },
    { id: 5, title: "Needs can have nuance", category: "Choices", desc: "Context matters. The same purchase can be essential in one season and optional in another." },
    { id: 6, title: "A rough month is not a verdict", category: "Reset", desc: "Review, adjust, and continue. Progress is allowed to look ordinary." }
  ];

  const categories = ["All", "Basics", "Habits", "Planning", "Goals", "Choices", "Reset"];

  const filteredCards = cards.filter(card => {
    const matchesCategory = filter === "All" || card.category.toLowerCase() === filter.toLowerCase();
    const matchesSearch = card.title.toLowerCase().includes(search.toLowerCase()) || card.desc.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="space-y-8 max-w-6xl mx-auto pb-12">
      <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b pb-6">
        <div>
          <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-1">Browse at your own pace</p>
          <h2 className="text-4xl font-serif text-budget-green mb-2">Small cards. Useful ideas.</h2>
          <p className="text-gray-600 max-w-xl">
            Search a word or filter by theme. These are quick visual reminders for the days when your brain has enough going on.
          </p>
        </div>
        
        <Link href="/basics" className="flex items-center gap-2 border border-gray-300 bg-white px-5 py-2.5 rounded-2xl text-xs font-bold hover:bg-gray-50 transition shadow-sm shrink-0">
          Start a lesson &rarr;
        </Link>
      </header>

      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search cards, habits, goals..." 
            className="w-full bg-white border border-gray-200 pl-11 pr-4 py-2.5 rounded-xl text-sm focus:border-budget-green outline-none shadow-sm font-medium"
          />
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition shadow-sm ${
                filter === cat 
                  ? "bg-budget-green text-white" 
                  : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredCards.length === 0 ? (
          <div className="col-span-3 py-16 text-center text-gray-400 bg-white rounded-3xl border border-gray-100">
            <p className="text-lg font-serif">No matching cards found.</p>
          </div>
        ) : (
          filteredCards.map((card, i) => {
            const cardStyles = [
              "bg-white border-gray-100 text-gray-900",
              "bg-[#f4e8c1] border-[#e2d5ab] text-yellow-950",
              "bg-[#c84b31] border-[#b03d25] text-white"
            ];
            const currentStyle = cardStyles[i % cardStyles.length];
            const isDark = i % cardStyles.length === 2;

            return (
              <div key={card.id} className={`p-8 rounded-3xl shadow-sm border flex flex-col justify-between min-h-[280px] ${currentStyle}`}>
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-6 ${isDark ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'}`}>
                    {card.category}
                  </span>
                  <h3 className="text-2xl font-serif mb-3 leading-snug">{card.title}</h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-white/90' : 'text-gray-600'}`}>{card.desc}</p>
                </div>
                
                <div className="pt-6 flex justify-between items-center text-xs font-bold opacity-80">
                  <Link href="/ask-bumblebee" className="hover:underline flex items-center gap-1">
                    Want an example? Ask BumbleBee
                  </Link>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}