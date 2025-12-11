import React from 'react';
import { ViewState, User } from '../types';
import { Users, Star, Folder, Calendar, Clock, CheckSquare, ArrowRight } from 'lucide-react';

interface DashboardProps {
  user: User;
  onViewChange: (view: ViewState) => void;
}

export default function DashboardView({ user, onViewChange }: DashboardProps) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Cześć, {user.name.split(' ')[0]}! 👋
          </h1>
          <p className="text-gray-500 mt-2">
            Masz <span className="font-semibold text-blue-600">2 nadchodzące spotkania</span> i <span className="font-semibold text-orange-500">1 zaległą płatność</span>.
          </p>
        </div>
      </div>

      {/* Main Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Meetings Card */}
        <div 
          onClick={() => onViewChange('profile')}
          className="group relative h-64 rounded-[2rem] p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 text-white"
        >
          <div className="absolute top-0 right-0 p-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="bg-white/20 w-fit p-3 rounded-2xl backdrop-blur-sm">
              <Users size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">Spotkania</h3>
              <p className="text-blue-100 text-sm font-medium">Zarządzaj lekcjami</p>
            </div>
            <div className="absolute bottom-8 right-8 opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              <ArrowRight size={24} />
            </div>
          </div>
        </div>

        {/* Payments Card */}
        <div 
          onClick={() => onViewChange('payments')}
          className="group relative h-64 rounded-[2rem] p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden bg-gradient-to-br from-emerald-400 to-emerald-600 text-white"
        >
          <div className="absolute top-0 right-0 p-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="bg-white/20 w-fit p-3 rounded-2xl backdrop-blur-sm">
              <Star size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">Płatności</h3>
              <p className="text-emerald-100 text-sm font-medium">Historia i zobowiązania</p>
            </div>
            <div className="absolute bottom-8 right-8 opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              <ArrowRight size={24} />
            </div>
          </div>
        </div>

        {/* Materials Card */}
        <div 
          onClick={() => onViewChange('materials')}
          className="group relative h-64 rounded-[2rem] p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden bg-gradient-to-br from-amber-400 to-orange-500 text-white"
        >
          <div className="absolute top-0 right-0 p-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="bg-white/20 w-fit p-3 rounded-2xl backdrop-blur-sm">
              <Folder size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">Materiały</h3>
              <p className="text-orange-100 text-sm font-medium">Pliki i notatki</p>
            </div>
            <div className="absolute bottom-8 right-8 opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              <ArrowRight size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Info Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Next Meeting */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gray-900 rounded-2xl text-white">
              <Calendar size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg text-gray-900">Kolejna lekcja</h4>
              <p className="text-gray-500 text-sm mt-1">Matematyka - Geometria</p>
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-600 bg-blue-50 w-fit px-3 py-1 rounded-full">
                <Clock size={14} />
                25 Kwietnia, 10:00
              </div>
            </div>
          </div>
        </div>

        {/* Due Payment */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gray-900 rounded-2xl text-white">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg text-gray-900">Płatność</h4>
              <p className="text-gray-500 text-sm mt-1">Termin do 30 Kwietnia</p>
              <div className="mt-4 text-2xl font-bold text-gray-900">
                50,00 <span className="text-sm font-normal text-gray-500">PLN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tasks */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gray-900 rounded-2xl text-white">
              <CheckSquare size={24} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg text-gray-900">Zadania</h4>
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-gray-300" />
                  <span className="text-sm text-gray-600 line-through">Powtórzyć całki</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-gray-300" checked={false} onChange={() => {}} />
                  <span className="text-sm text-gray-600">Zrobić zadania w JS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}