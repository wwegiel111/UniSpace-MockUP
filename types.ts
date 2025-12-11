export type ViewState = 'dashboard' | 'profile' | 'payments' | 'materials';

export interface User {
  name: string;
  email: string;
  avatar: string;
  rank: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  rankProgress: number;
  streak: number;
  totalMeetings: number;
  daysToExam: number;
}

export interface Meeting {
  id: string;
  date: string;
  time: string;
  duration: number; // minutes
  topic: string;
  subject: string;
  status: 'completed' | 'upcoming';
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  method?: string;
}

export interface CourseProgress {
  subject: string;
  progress: number; // 0-100
  totalLessons: number;
  completedLessons: number;
}