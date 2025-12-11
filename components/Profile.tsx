import React from 'react';
import { User, Meeting, CourseProgress } from '../types';
import { Trophy, Calendar, CheckCircle, TrendingUp, MoreHorizontal, BookOpen } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ProfileProps {
  user: User;
}

const recentMeetings: Meeting[] = [
  { id: '1', date: '12.08', time: '18:00', duration: 60, topic: 'Geometria – zadania z podobieństwa', subject: 'Matematyka', status: 'completed' },
  { id: '2', date: '09.08', time: '16:00', duration: 45, topic: 'Algebra – równania kwadratowe', subject: 'Matematyka', status: 'completed' },
  { id: '3', date: '05.08', time: '17:30', duration: 60, topic: 'Analiza – granice i ciągłość', subject: 'Matematyka', status: 'completed' },
];

const courseProgress: CourseProgress[] = [
  { subject: 'Algebra', progress: 100, totalLessons: 10, completedLessons: 10 },
  { subject: 'Geometria', progress: 45, totalLessons: 12, completedLessons: 5 },
  { subject: 'Wektory', progress: 20, totalLessons: 8, completedLessons: 2 },
];

const activityData = [
  { name: 'Pon', hours: 2 },
  { name: 'Wt', hours: 3 },
  { name: 'Śr', hours: 1.5 },
  { name: 'Czw', hours: 4 },
  { name: 'Pt', hours: 2.5 },
  { name: 'Sob', hours: 1 },
  { name: 'Ndz', hours: 0 },
];

export default function ProfileView({ user }: ProfileProps) {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Profile Card */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 w-full h-24 bg-gradient-to-r from-blue-50 to-indigo-50"></div>
          
          <div className="relative z-10 mb-4">
             <div className="w-24 h-24 rounded-full p-1 bg-white shadow-md">
               <img src={user.avatar} alt="Profile" className="w-full h-full rounded-full object-cover" />
             </div>
             <div className="absolute bottom-0 right-0 bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded-full border border-white shadow-sm flex items-center gap-1">
               <Trophy size={12} className="fill-amber-700" />
               {user.rank}
             </div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-gray-500 text-sm mt-1">{user.email}</p>
            <div className="mt-2 inline-block px-3 py-1 bg-gray-100 rounded-lg text-xs font-semibold text-gray-600">
              Uczeń • Matematyka
            </div>
          </div>

          <div className="w-full mt-8 relative z-10">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">Postęp do rangi Platinum</span>
              <span className="font-bold text-gray-900">{user.rankProgress}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${user.rankProgress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
              <Calendar size={28} />
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium">Dni do egzaminu</p>
              <h3 className="text-3xl font-bold text-gray-900">{user.daysToExam}</h3>
              <p className="text-xs text-gray-400">Egzamin: 05.10.2025</p>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl">
              <CheckCircle size={28} />
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium">Odbyte spotkania</p>
              <h3 className="text-3xl font-bold text-gray-900">{user.totalMeetings}</h3>
              <p className="text-xs text-gray-400">Ostatnie: 12.08, 18:00</p>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="p-4 bg-red-50 text-red-500 rounded-2xl">
              <TrendingUp size={28} />
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium">Średni postęp</p>
              <h3 className="text-3xl font-bold text-gray-900">78%</h3>
              <p className="text-xs text-gray-400">z 5 ostatnich lekcji</p>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl">
              <Trophy size={28} />
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium">Streak (dni)</p>
              <h3 className="text-3xl font-bold text-gray-900">{user.streak}</h3>
              <p className="text-xs text-gray-400">Codzienna nauka 🔥</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Recent Meetings List */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Ostatnie spotkania</h3>
            <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <MoreHorizontal size={20} className="text-gray-400" />
            </button>
          </div>
          
          <div className="space-y-4">
            {recentMeetings.map((meeting) => (
              <div key={meeting.id} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                <div className="flex items-center gap-3 min-w-[140px]">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                    {meeting.date}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{meeting.time}</p>
                    <p className="text-xs text-gray-500">{meeting.duration} min</p>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-medium">{meeting.topic}</p>
                  <p className="text-xs text-gray-500 mt-1">{meeting.subject}</p>
                </div>
                <div className="hidden sm:block">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress & Chart */}
        <div className="space-y-6">
           {/* Progress Bars */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Postęp materiałów</h3>
            <div className="space-y-6">
              {courseProgress.map((course, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700 flex items-center gap-2">
                      <BookOpen size={16} className="text-blue-500"/>
                      Lekcja {4 + idx}: {course.subject}
                    </span>
                    <span className="text-xs font-bold bg-gray-100 px-2 py-1 rounded-md text-gray-600">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className={`h-2.5 rounded-full ${course.progress === 100 ? 'bg-blue-500' : 'bg-blue-400'}`}
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mini Chart */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
             <h3 className="text-xl font-bold text-gray-900 mb-2">Aktywność w tym tygodniu</h3>
             <div className="h-48 w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={activityData}>
                    <defs>
                      <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} dy={10} />
                    <Tooltip 
                      contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                      itemStyle={{color: '#1f2937', fontWeight: 600}}
                    />
                    <Area type="monotone" dataKey="hours" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorHours)" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}