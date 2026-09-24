import { useState } from "react";
import { Trash2 } from "lucide-react";

export function ExpensePlanner() {
  const [expenses, setExpenses] = useState([
    { id: 1, category: "Food", description: "Groceries for the week", amount: 8700, date: "2025-02-05" },
    { id: 2, category: "Transport", description: "Campus rides", amount: 4200, date: "2025-02-05" },
    { id: 3, category: "Learning", description: "Printing and materials", amount: 2500, date: "2025-03-07" }
  ]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("2025-02-12");

  const categories = ["Food", "Transport", "Learning", "Fun", "Other"];

  const addExpense = (e) => {
    e.preventDefault();
    if (!amount || !description) return;
    
    setExpenses([...expenses, {
      id: Date.now(),
      category,
      description,
      amount: parseFloat(amount),
      date
    }]);
    setDescription("");
    setAmount("");
  };

  const removeExpense = (id) => setExpenses(expenses.filter(exp => exp.id !== id));
  const clearList = () => setExpenses([]);

  const totalSpent = expenses.reduce((sum, item) => sum + item.amount, 0);
  const sampleBalance = 120000 - totalSpent;

  return (
    <section className="space-y-8 max-w-6xl mx-auto pb-12">
      <header className="flex justify-between items-start border-b pb-6">
        <div>
          <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-1">Tool 03 · Notice Your Patterns</p>
          <h2 className="text-4xl font-serif text-budget-green mb-2">A gentle place to track the week.</h2>
          <p className="text-gray-600 max-w-xl">
            This temporary planner lives only in your browser. Use the sample balance to practise, then clear it whenever you want.
          </p>
        </div>
        <button 
          onClick={clearList}
          className="flex items-center gap-2 border border-gray-300 bg-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-gray-50 transition"
        >
          Clear list
        </button>
      </header>
      
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form */}
        <div className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Add an expense</p>
          <h3 className="text-2xl font-serif text-budget-green mb-6">What did you spend?</h3>
          
          <form onSubmit={addExpense} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Date</label>
              <div className="relative">
                <input 
                  type="date" 
                  value={date} 
                  onChange={(e) => setDate(e.target.value)} 
                  className="w-full bg-[#f8f6f0] border border-[#e8e4d9] p-3 rounded-xl focus:border-budget-green outline-none font-medium text-sm" 
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Category</label>
              <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                className="w-full bg-[#f8f6f0] border border-[#e8e4d9] p-3 rounded-xl focus:border-budget-green outline-none font-medium text-sm"
              >
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Description</label>
              <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="e.g. Lunch after class" 
                className="w-full bg-[#f8f6f0] border border-[#e8e4d9] p-3 rounded-xl focus:border-budget-green outline-none font-medium text-sm" 
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Amount</label>
              <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                placeholder="0" 
                className="w-full bg-[#f8f6f0] border border-[#e8e4d9] p-3 rounded-xl focus:border-budget-green outline-none font-medium text-sm" 
              />
            </div>

            <button type="submit" className="w-full bg-budget-green text-white py-4 rounded-xl font-bold hover:bg-[#123023] transition-colors mt-2 shadow-sm">
              + Add to planner
            </button>
          </form>
          <p className="text-[10px] text-gray-400 mt-4 text-center">Add a description and amount above ₦0.</p>
        </div>

        {/* Right Column: Totals & List */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#1b4332] text-white p-6 rounded-3xl shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#a8baba] mb-1">Spent</p>
              <p className="text-3xl font-serif text-white">₦{totalSpent.toLocaleString()}</p>
            </div>
            <div className="bg-[#e9c46a] text-yellow-950 p-6 rounded-3xl shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-900 mb-1">Sample Balance</p>
              <p className="text-3xl font-serif text-yellow-950">₦{sampleBalance.toLocaleString()}</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {expenses.length === 0 ? (
              <div className="p-12 text-center text-gray-400">
                <p className="text-lg font-serif mb-2 text-gray-600">A clean slate.</p>
                <p className="text-xs">Add your first practice expense on the left.</p>
              </div>
            ) : (
              <ul className="divide-y divide-gray-100">
                {expenses.map((exp) => (
                  <li key={exp.id} className="p-5 flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <div>
                      <p className="font-bold text-gray-800 text-sm">{exp.description}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{exp.category} · {exp.date}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="font-bold font-mono text-gray-800">₦{exp.amount.toLocaleString()}</span>
                      <button onClick={() => removeExpense(exp.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <p className="text-[10px] text-gray-400 text-center">Temporary browser-only practice data. No account or transaction connection.</p>
        </div>
      </div>
    </section>
  );
}