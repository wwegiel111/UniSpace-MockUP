import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  User as UserIcon, 
  CreditCard, 
  FolderOpen, 
  Settings, 
  LogOut, 
  Menu,
  X,
  Bell
} from 'lucide-react';
import DashboardView from './components/Dashboard';
import ProfileView from './components/Profile';
import PaymentsView from './components/Payments';
import { ViewState, User } from './types';

// Mock User Data
const mockUser: User = {
  name: "Jan Kowalski",
  email: "jan.kowalski@example.com",
  avatar: "https://picsum.photos/seed/jan/200/200",
  rank: "Gold",
  rankProgress: 62,
  streak: 6,
  totalMeetings: 24,
  daysToExam: 17
};

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation Items
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'profile', label: 'Profil studenta', icon: UserIcon },
    { id: 'payments', label: 'Płatności', icon: CreditCard },
    { id: 'materials', label: 'Materiały', icon: FolderOpen },
  ];

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView user={mockUser} onViewChange={setCurrentView} />;
      case 'profile':
        return <ProfileView user={mockUser} />;
      case 'payments':
        return <PaymentsView />;
      case 'materials':
        return (
          <div className="flex items-center justify-center h-full text-gray-400 flex-col gap-4">
            <FolderOpen size={64} />
            <p className="text-xl font-medium">Sekcja materiałów w budowie...</p>
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="text-blue-500 hover:underline"
            >
              Wróć do Dashboardu
            </button>
          </div>
        );
      default:
        return <DashboardView user={mockUser} onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#f3f4f6] overflow-hidden text-slate-800">
      
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-8 pb-4">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              UniSpace
            </h1>
            <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Student Portal</p>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id as ViewState);
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm font-medium transition-all duration-200
                  ${currentView === item.id 
                    ? 'bg-blue-50 text-blue-600 shadow-sm' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}
                `}
              >
                <item.icon size={20} strokeWidth={2} />
                {item.label}
              </button>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="p-4 border-t border-gray-100 space-y-2">
            <button className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
              <Settings size={20} />
              Ustawienia
            </button>
            <button className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors">
              <LogOut size={20} />
              Wyloguj
            </button>
          </div>

          {/* User Mini Profile */}
          <div className="p-4 m-4 mt-0 bg-slate-50 rounded-2xl flex items-center gap-3 border border-slate-100">
            <img 
              src={mockUser.avatar} 
              alt="Avatar" 
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" 
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate">{mockUser.name}</p>
              <p className="text-xs text-gray-500 truncate">{mockUser.email}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Header */}
        <header className="h-20 px-6 lg:px-10 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-gray-100/50">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-xl hover:bg-gray-100 lg:hidden text-gray-600"
            >
              <Menu size={24} />
            </button>
            <div className="hidden sm:block">
              <h2 className="text-xl font-bold text-gray-800 capitalize">
                {navItems.find(i => i.id === currentView)?.label}
              </h2>
              <div className="text-sm text-gray-400 flex items-center gap-2">
                <span>UniSpace</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="capitalize">{currentView}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2.5 rounded-full bg-white border border-gray-100 text-gray-500 hover:text-blue-600 hover:shadow-md transition-all">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-gray-900">{new Date().toLocaleDateString('pl-PL', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
            </div>
          </div>
        </header>

        {/* Scrollable View Area */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-10 scroll-smooth">
          <div className="max-w-7xl mx-auto">
            {renderView()}
          </div>
        </div>
      </main>
    </div>
  );
}