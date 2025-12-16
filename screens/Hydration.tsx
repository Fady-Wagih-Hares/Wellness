import React from 'react';
import { Plus, Droplets, GlassWater } from 'lucide-react';
import { WATER_GOAL_ML } from '../constants';

interface HydrationProps {
  waterMl: number;
  addWater: (amount: number) => void;
}

const Hydration: React.FC<HydrationProps> = ({ waterMl, addWater }) => {
  // Cap visual percentage at 100
  const percentage = Math.min((waterMl / WATER_GOAL_ML) * 100, 100);

  return (
    <div className="h-full flex flex-col p-6 md:p-10 animate-fade-in max-w-6xl mx-auto pb-24 md:pb-0">
      <header className="mb-6 md:mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-stone-800">Hydration</h1>
        <p className="text-stone-500">Stay refreshed.</p>
      </header>

      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        {/* Main Visual: Bottle */}
        <div className="relative w-48 h-80 md:w-64 md:h-[400px] bg-white rounded-[3rem] border-4 border-white shadow-xl overflow-hidden ring-4 ring-stone-100 shrink-0">
          {/* Water Background */}
          <div className="absolute inset-0 bg-stone-50"></div>
          
          {/* Water Fill */}
          <div
            className="absolute bottom-0 w-full bg-blue-300 transition-all duration-1000 ease-in-out opacity-80"
            style={{ height: `${percentage}%` }}
          >
             {/* Simple wave effect via border radius on top */}
             <div className="w-full h-4 bg-blue-200 opacity-50 absolute top-0 rounded-b-full"></div>
          </div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <span className="text-4xl font-bold text-stone-700 drop-shadow-sm">
                {Math.round(percentage)}%
            </span>
            <span className="text-sm text-stone-500 mt-1 font-medium">{waterMl} / {WATER_GOAL_ML} ml</span>
          </div>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-auto md:min-w-[300px]">
          <button
            onClick={() => addWater(250)}
            className="bg-white hover:bg-blue-50 border border-stone-200 p-6 rounded-3xl flex flex-col items-center justify-center transition-all group shadow-sm"
          >
            <div className="bg-blue-100 p-3 rounded-full text-blue-500 mb-3 group-hover:scale-110 transition-transform">
              <GlassWater size={28} />
            </div>
            <span className="font-semibold text-stone-700 text-lg">+250ml</span>
            <span className="text-sm text-stone-400">1 Cup</span>
          </button>

          <button
            onClick={() => addWater(500)}
            className="bg-white hover:bg-blue-50 border border-stone-200 p-6 rounded-3xl flex flex-col items-center justify-center transition-all group shadow-sm"
          >
            <div className="bg-blue-100 p-3 rounded-full text-blue-500 mb-3 group-hover:scale-110 transition-transform">
              <Droplets size={28} />
            </div>
            <span className="font-semibold text-stone-700 text-lg">+500ml</span>
            <span className="text-sm text-stone-400">Bottle</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hydration;