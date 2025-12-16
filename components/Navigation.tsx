import React from 'react';
import { Home, BookOpen, Droplets, TrendingUp, User, Leaf } from 'lucide-react';
import { Screen } from '../types';

interface NavigationProps {
  currentScreen: Screen;
  setScreen: (screen: Screen) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentScreen, setScreen }) => {
  
  // Using a consistent list for both mobile and desktop
  const navItems = [
    { id: Screen.HOME, icon: Home, label: 'Home' },
    { id: Screen.JOURNAL, icon: BookOpen, label: 'Journal' },
    { id: Screen.JOURNEY, icon: TrendingUp, label: 'Journey' },
    { id: Screen.PROFILE, icon: User, label: 'Profile' },
  ];

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 w-full h-20 bg-white/90 backdrop-blur-md border-t border-stone-200 px-6 flex justify-between items-center z-50 pb-safe">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setScreen(item.id)}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors duration-200 ${
                isActive ? 'text-teal-600' : 'text-stone-400 hover:text-stone-600'
              }`}
            >
              <item.icon
                size={24}
                strokeWidth={isActive ? 2.5 : 2}
                className={`transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}
              />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Desktop Sidebar Navigation */}
      <div className="hidden md:flex flex-col w-64 h-full bg-white border-r border-stone-200 px-4 py-8 shrink-0">
        <div className="flex items-center gap-3 px-4 mb-10 text-teal-700">
            <div className="bg-teal-100 p-2 rounded-xl">
                <Leaf size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight">Wellness</span>
        </div>

        <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
                <button
                key={item.id}
                onClick={() => setScreen(item.id)}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive 
                    ? 'bg-teal-50 text-teal-700 font-semibold' 
                    : 'text-stone-500 hover:bg-stone-50 hover:text-stone-700'
                }`}
                >
                <item.icon
                    size={22}
                    strokeWidth={isActive ? 2.5 : 2}
                />
                <span className="text-sm">{item.label}</span>
                </button>
            );
            })}
        </nav>
        
        <div className="mt-auto px-4">
             <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                <p className="text-xs text-stone-500 mb-2">Daily Goal</p>
                <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-teal-500 h-full w-[70%]"></div>
                </div>
             </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;