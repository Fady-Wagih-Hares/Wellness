import React from 'react';
import { User, Settings, Heart, Shield } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="h-full p-6 md:p-10 pb-24 animate-fade-in max-w-2xl mx-auto">
        <header className="flex flex-col items-center mt-8 mb-12">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-stone-200 rounded-full mb-4 flex items-center justify-center text-stone-400">
                <User size={48} className="md:w-16 md:h-16" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-stone-800">Traveler</h1>
            <p className="text-stone-500">Joined September 2025</p>
        </header>

        <section className="space-y-3">
            <div className="bg-white p-5 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-stone-50 border border-stone-100 hover:shadow-sm transition-all">
                <div className="flex items-center gap-4">
                    <Settings size={20} className="text-stone-400" />
                    <span className="text-stone-700 font-medium">Settings</span>
                </div>
            </div>
            <div className="bg-white p-5 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-stone-50 border border-stone-100 hover:shadow-sm transition-all">
                <div className="flex items-center gap-4">
                    <Heart size={20} className="text-stone-400" />
                    <span className="text-stone-700 font-medium">My Goals</span>
                </div>
            </div>
             <div className="bg-white p-5 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-stone-50 border border-stone-100 hover:shadow-sm transition-all">
                <div className="flex items-center gap-4">
                    <Shield size={20} className="text-stone-400" />
                    <span className="text-stone-700 font-medium">Privacy Data</span>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Profile;