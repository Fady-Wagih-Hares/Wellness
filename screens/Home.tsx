import React, { useState, useEffect } from 'react';
import { Sun, Battery, Coffee, Plus, ArrowRight } from 'lucide-react';
import { Mood, Screen } from '../types';
import { getSupportiveMessage } from '../services/geminiService';

interface HomeProps {
  mood: Mood;
  setMood: (m: Mood) => void;
  waterMl: number;
  calories: number;
  setScreen: (s: Screen) => void;
}

const Home: React.FC<HomeProps> = ({ mood, setMood, waterMl, calories, setScreen }) => {
  const [message, setMessage] = useState<string>("Let's have a gentle day.");

  useEffect(() => {
    if (mood !== Mood.UNSET) {
      // Fetch a supportive message when mood changes
      getSupportiveMessage(mood).then(setMessage);
    }
  }, [mood]);

  const MoodButton = ({ type, icon: Icon }: { type: Mood; icon: any }) => (
    <button
      onClick={() => setMood(type)}
      className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 ${
        mood === type
          ? 'bg-teal-100 text-teal-800 ring-2 ring-teal-200'
          : 'bg-white text-stone-400 hover:bg-stone-50'
      }`}
    >
      <Icon size={28} className="mb-2" />
      <span className="text-xs font-medium">{type}</span>
    </button>
  );

  return (
    <div className="h-full p-6 md:p-10 space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-stone-800 tracking-tight">Good morning</h1>
            <p className="text-stone-500 mt-1 text-lg">Ready for a balanced day?</p>
        </div>
        <div className="hidden md:block">
            <span className="text-sm font-medium text-stone-400">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
        </div>
      </header>

      {/* Mood Tracker */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-stone-700">How are you feeling?</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 md:max-w-md">
          <MoodButton type={Mood.ENERGIZED} icon={Sun} />
          <MoodButton type={Mood.NEUTRAL} icon={Coffee} />
          <MoodButton type={Mood.SLUGGISH} icon={Battery} />
        </div>
        {mood !== Mood.UNSET && (
            <div className="mt-4 p-4 bg-teal-50/50 rounded-2xl border border-teal-100 text-teal-800 italic text-center md:text-left text-sm md:max-w-md">
                "{message}"
            </div>
        )}
      </section>

      {/* Summary Cards */}
      <section className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
        {/* Food Card */}
        <div 
            onClick={() => setScreen(Screen.JOURNAL)}
            className="bg-white p-5 md:p-8 rounded-3xl shadow-sm border border-stone-100 cursor-pointer hover:shadow-md transition-shadow group"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="bg-orange-100 p-3 rounded-2xl text-orange-600 group-hover:scale-110 transition-transform">
                <Coffee size={24} />
            </div>
            <ArrowRight size={20} className="text-stone-300 group-hover:text-stone-400" />
          </div>
          <p className="text-stone-500 text-sm mb-1">Nourishment</p>
          <p className="text-3xl font-bold text-stone-800">{calories} <span className="text-base font-normal text-stone-400">kcal</span></p>
        </div>

        {/* Water Card */}
        <div 
            onClick={() => setScreen(Screen.HYDRATION)}
            className="bg-white p-5 md:p-8 rounded-3xl shadow-sm border border-stone-100 cursor-pointer hover:shadow-md transition-shadow group"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="bg-blue-100 p-3 rounded-2xl text-blue-600 group-hover:scale-110 transition-transform">
                <Sun size={24} />
            </div>
             <ArrowRight size={20} className="text-stone-300 group-hover:text-stone-400" />
          </div>
          <p className="text-stone-500 text-sm mb-1">Hydration</p>
          <p className="text-3xl font-bold text-stone-800">{waterMl} <span className="text-base font-normal text-stone-400">ml</span></p>
        </div>
      </section>

        {/* Floating Action Button */}
        <div className="fixed bottom-24 right-6 md:bottom-10 md:right-10 z-40">
            <button 
                onClick={() => setScreen(Screen.JOURNAL)}
                className="bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-lg shadow-teal-200 hover:scale-105 transition-all flex items-center justify-center"
                title="Log Food"
            >
                <Plus size={28} />
            </button>
        </div>
    </div>
  );
};

export default Home;