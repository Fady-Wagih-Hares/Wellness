import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Trophy, Flame, Droplets, Star } from 'lucide-react';

const data = [
  { day: 'M', score: 60 },
  { day: 'T', score: 70 },
  { day: 'W', score: 65 },
  { day: 'T', score: 85 },
  { day: 'F', score: 80 },
  { day: 'S', score: 90 },
  { day: 'S', score: 85 },
];

const Journey: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto no-scrollbar pb-24 p-6 md:p-10 space-y-8 animate-fade-in max-w-5xl mx-auto">
      <header>
        <h1 className="text-2xl md:text-3xl font-bold text-stone-800">Your Journey</h1>
        <p className="text-stone-500">Consistency over perfection.</p>
      </header>

      {/* Chart Section */}
      <section className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
        <div className="mb-4">
            <h2 className="font-semibold text-stone-700">Weekly Consistency</h2>
        </div>
        <div className="h-48 md:h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0d9488" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#0d9488" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                cursor={{ stroke: '#cbd5e1', strokeWidth: 1 }}
              />
              <Area 
                type="monotone" 
                dataKey="score" 
                stroke="#0d9488" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorScore)" 
              />
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#a8a29e', fontSize: 12 }} 
                dy={10}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Wins Section */}
      <section>
        <h2 className="font-semibold text-stone-700 mb-4">Recent Wins</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Badge 1 */}
            <div className="bg-white p-4 rounded-2xl border border-stone-100 flex flex-col items-center text-center space-y-2 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                    <Flame size={24} />
                </div>
                <h3 className="font-bold text-stone-700 text-sm">3 Day Streak</h3>
                <p className="text-xs text-stone-400">Logged food for 3 days</p>
            </div>

            {/* Badge 2 */}
            <div className="bg-white p-4 rounded-2xl border border-stone-100 flex flex-col items-center text-center space-y-2 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                    <Droplets size={24} />
                </div>
                <h3 className="font-bold text-stone-700 text-sm">Hydrated</h3>
                <p className="text-xs text-stone-400">Hit water goal today</p>
            </div>

             {/* Badge 3 */}
             <div className="bg-white p-4 rounded-2xl border border-stone-100 flex flex-col items-center text-center space-y-2 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                    <Star size={24} />
                </div>
                <h3 className="font-bold text-stone-700 text-sm">Morning Person</h3>
                <p className="text-xs text-stone-400">Logged before 9AM</p>
            </div>
             {/* Badge 4 */}
             <div className="bg-white p-4 rounded-2xl border border-stone-100 flex flex-col items-center text-center space-y-2 opacity-50 grayscale hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                    <Trophy size={24} />
                </div>
                <h3 className="font-bold text-stone-700 text-sm">Week Warrior</h3>
                <p className="text-xs text-stone-400">Locked</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Journey;