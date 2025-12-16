import React, { useState } from 'react';
import { Search, ScanBarcode, Plus, Utensils } from 'lucide-react';
import { FoodItem } from '../types';
import { MOCK_RECENT_FOODS } from '../constants';
import { analyzeFoodSentiment } from '../services/geminiService';

interface FoodJournalProps {
  addCalories: (amount: number) => void;
}

const FoodJournal: React.FC<FoodJournalProps> = ({ addCalories }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleAddFood = async (item: FoodItem) => {
    addCalories(item.calories);
    const msg = await analyzeFoodSentiment(item.name);
    setFeedback(`${item.name} added. ${msg}`);
    
    // Clear feedback after 3 seconds
    setTimeout(() => setFeedback(null), 3000);
  };

  return (
    <div className="h-full overflow-y-auto no-scrollbar pb-24 p-6 md:p-10 space-y-6 animate-fade-in max-w-4xl mx-auto">
      <header>
        <h1 className="text-2xl md:text-3xl font-bold text-stone-800">Food Journal</h1>
        <p className="text-stone-500">Nourish your body.</p>
      </header>

      {/* Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={20} className="text-stone-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-12 py-4 border-none rounded-2xl bg-white shadow-sm text-stone-800 placeholder-stone-400 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
          placeholder="Search food..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-stone-400 hover:text-stone-600">
          <ScanBarcode size={24} />
        </div>
      </div>

      {feedback && (
         <div className="bg-teal-50 text-teal-800 px-4 py-3 rounded-2xl text-sm animate-pulse flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
            {feedback}
         </div>
      )}

      {/* Quick Add Section */}
      <section>
        <h2 className="text-lg font-semibold text-stone-700 mb-3">Quick Add</h2>
        <div className="space-y-3">
          {MOCK_RECENT_FOODS.filter(f => f.name.toLowerCase().includes(searchTerm.toLowerCase())).map((food) => (
            <div
              key={food.id}
              className="group bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex justify-between items-center hover:border-teal-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="bg-stone-50 p-2 rounded-xl text-stone-400 group-hover:bg-teal-50 group-hover:text-teal-500 transition-colors">
                  <Utensils size={18} />
                </div>
                <div>
                  <h3 className="font-medium text-stone-800">{food.name}</h3>
                  <p className="text-xs text-stone-500">{food.portion}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-stone-500 font-medium text-sm">{food.calories}</span>
                <button
                  onClick={() => handleAddFood(food)}
                  className="bg-stone-100 hover:bg-teal-500 hover:text-white text-stone-600 p-2 rounded-full transition-all"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <div className="text-center pt-8">
        <p className="text-xs text-stone-400">
            Remember, food is fuel and joy. No need to be perfect.
        </p>
      </div>
    </div>
  );
};

export default FoodJournal;