import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function NeedsVsWants() {
  const [classifications, setClassifications] = useState({});
  const [showNuance, setShowNuance] = useState(false);

  const items = [
    { id: 1, name: "Rent or shared housing", type: "need" },
    { id: 2, name: "Course materials", type: "need" },
    { id: 3, name: "Basic groceries", type: "need" },
    { id: 4, name: "A new gaming headset", type: "want" },
    { id: 5, name: "Ride home in an emergency", type: "need" },
    { id: 6, name: "Concert tickets", type: "want" }
  ];

  const handleClassify = (id, choice) => {
    setClassifications({ ...classifications, [id]: choice });
  };

  // Only count items where the user's choice matches the correct item type
  const correctCount = items.filter(
    (item) => classifications[item.id] === item.type
  ).length;

  return (
    <section className="space-y-8 max-w-6xl mx-auto pb-12">
      {/* Header */}
      <header className="flex justify-between items-start border-b pb-6">
        <div>
          <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-1">Lesson 02 · Make a Call</p>
          <h2 className="text-4xl font-serif text-budget-green mb-2">Needs, wants, and the space between.</h2>
          <p className="text-gray-600 max-w-xl">
            The point is not to call your wants bad. It is to spot the choice clearly, then decide if it fits the money you have.
          </p>
        </div>
        
        {/* Progress Counter Badge (Only counts correct matches) */}
        <div className="bg-budget-mustard text-yellow-950 px-6 py-3 rounded-2xl text-center shadow-sm">
          <p className="text-2xl font-serif font-bold">{correctCount}/6</p>
          <p className="text-[10px] uppercase font-bold tracking-widest">Classified</p>
        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Quick Sort List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">Quick Sort · What kind of choice is this?</h3>
          </div>

          {items.map((item) => {
            const userChoice = classifications[item.id];
            return (
              <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="font-bold text-gray-800 text-lg block">{item.name}</span>
                  {userChoice && userChoice !== item.type && (
                    <span className="text-xs text-red-500 font-medium">Try thinking about this one again!</span>
                  )}
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button 
                    onClick={() => handleClassify(item.id, "need")}
                    className={`flex-1 sm:flex-none px-6 py-2 rounded-xl border text-sm font-semibold transition ${
                      userChoice === "need" 
                        ? "bg-budget-green text-white border-budget-green shadow-sm" 
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    Need
                  </button>
                  <button 
                    onClick={() => handleClassify(item.id, "want")}
                    className={`flex-1 sm:flex-none px-6 py-2 rounded-xl border text-sm font-semibold transition ${
                      userChoice === "want" 
                        ? "bg-budget-mustard text-yellow-950 border-budget-mustard shadow-sm" 
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    Want
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Decision Guide & Note */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#1b4332] text-white p-8 rounded-3xl shadow-md space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-budget-mustard mb-1">Decision Guide</p>
              <h3 className="text-2xl font-serif">Ask three calm questions.</h3>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="font-bold text-budget-mustard">01</span>
                <p className="text-gray-200">Does this keep me safe, fed, learning, or able to get around?</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-budget-mustard">02</span>
                <p className="text-gray-200">What happens if I wait a week?</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-budget-mustard">03</span>
                <p className="text-gray-200">Can I afford it without borrowing from essentials?</p>
              </div>
            </div>

            <button 
              onClick={() => setShowNuance(!showNuance)} 
              className="w-full pt-4 border-t border-[#2d664f] flex justify-between items-center text-xs font-bold uppercase tracking-wider text-budget-mustard hover:text-white transition"
            >
              <span>Show the nuance</span>
              <ChevronDown size={16} className={`transition-transform ${showNuance ? "rotate-180" : ""}`} />
            </button>

            {showNuance && (
              <p className="text-xs text-gray-300 leading-relaxed bg-[#255743] p-4 rounded-xl">
                Context is everything. A winter coat is a strict need in a cold region, but might be a luxury purchase in a tropical climate. Trust your honest evaluation.
              </p>
            )}
          </div>

          {/* Bottom Callout Box */}
          <div className="bg-[#f4e8c1] border border-[#e2d5ab] p-6 rounded-3xl text-yellow-950">
            <h4 className="font-serif font-bold mb-1">There is no shame in wanting things.</h4>
            <p className="text-xs leading-relaxed opacity-85">
              Clarity is what gives you the power to say yes on purpose.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}