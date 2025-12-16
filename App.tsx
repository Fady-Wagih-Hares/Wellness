import React, { useState } from 'react';
import { Screen, Mood } from './types';
import Navigation from './components/Navigation';
import Home from './screens/Home';
import FoodJournal from './screens/FoodJournal';
import Hydration from './screens/Hydration';
import Journey from './screens/Journey';
import Profile from './screens/Profile';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.HOME);
  
  // Shared State
  const [mood, setMood] = useState<Mood>(Mood.UNSET);
  const [waterMl, setWaterMl] = useState<number>(1250); // Start half full for demo
  const [calories, setCalories] = useState<number>(840);

  // Handlers
  const addWater = (amount: number) => {
    setWaterMl(prev => prev + amount);
  };

  const addCalories = (amount: number) => {
    setCalories(prev => prev + amount);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.HOME:
        return (
          <Home 
            mood={mood} 
            setMood={setMood} 
            waterMl={waterMl} 
            calories={calories}
            setScreen={setCurrentScreen}
          />
        );
      case Screen.JOURNAL:
        return <FoodJournal addCalories={addCalories} />;
      case Screen.HYDRATION:
        return <Hydration waterMl={waterMl} addWater={addWater} />;
      case Screen.JOURNEY:
        return <Journey />;
      case Screen.PROFILE:
        return <Profile />;
      default:
        return <Home mood={mood} setMood={setMood} waterMl={waterMl} calories={calories} setScreen={setCurrentScreen} />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-stone-50 text-stone-800 font-sans overflow-hidden">
        {/* Navigation Sidebar (Desktop) / Bottom Bar (Mobile) */}
        <Navigation currentScreen={currentScreen} setScreen={setCurrentScreen} />

        {/* Main Content Area */}
        <main className="flex-1 h-full overflow-y-auto no-scrollbar relative w-full">
            <div className="w-full h-full pb-24 md:pb-0">
                 {renderScreen()}
            </div>
        </main>
    </div>
  );
};

export default App;