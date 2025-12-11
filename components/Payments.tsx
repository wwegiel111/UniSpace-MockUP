import React from 'react';
import { Transaction } from '../types';
import { CreditCard, Smartphone, Download, ArrowUpRight, History } from 'lucide-react';

const upcomingPayments = [
  { id: '1', date: '30.04.2025', desc: 'Lekcja 5 – Geometria', amount: 50.00, status: 'pending' },
  { id: '2', date: '30.03.2025', desc: 'Lekcja 4 – Algebra', amount: 50.00, status: 'paid' },
  { id: '3', date: '28.02.2025', desc: 'Pakiet 4 spotkań', amount: 100.00, status: 'paid' },
];

const transactionHistory: Transaction[] = [
  { id: 't1', date: '30.03.2025', description: 'Lekcja 4 – Algebra', amount: 50.00, status: 'paid', method: 'BLIK' },
  { id: 't2', date: '28.02.2025', description: 'Pakiet 4 spotkań', amount: 100.00, status: 'paid', method: 'PRZELEW' },
  { id: 't3', date: '30.01.2025', description: 'Lekcja 3 – Analiza', amount: 50.00, status: 'paid', method: 'PRZELEW' },
];

export default function PaymentsView() {
  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      
      {/* Banner */}
      <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
            <CreditCard size={32} />
          </div>
          <div>
            <p className="text-gray-500 font-medium">Kwota do zapłaty</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-1">
              $50,00 <span className="text-xl text-gray-400 font-normal">PLN</span>
            </h2>
            <p className="text-sm text-red-500 font-medium mt-2 flex items-center gap-1">
              Termin: 30.04.2025
            </p>
          </div>
        </div>
        <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
          Opłać teraz
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Upcoming List */}
        <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Opłaty</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 text-xs uppercase tracking-wider border-b border-gray-100">
                  <th className="pb-3 font-medium">Data</th>
                  <th className="pb-3 font-medium">Opis</th>
                  <th className="pb-3 font-medium">Kwota</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {upcomingPayments.map((payment) => (
                  <tr key={payment.id} className="group">
                    <td className="py-4 text-sm font-medium text-gray-900">{payment.date}</td>
                    <td className="py-4 text-sm text-gray-600">{payment.desc}</td>
                    <td className="py-4 text-sm font-bold text-gray-900">${payment.amount.toFixed(2)}</td>
                    <td className="py-4">
                      {payment.status === 'pending' ? (
                         <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
                           Do zapłaty
                         </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
                          Opłacona
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Methods */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col gap-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Metody płatności</h3>
          
          <button className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-200 transition-transform active:scale-95">
             <div className="bg-white/20 p-2 rounded-lg">
               <Smartphone size={24} />
             </div>
             <div className="text-left">
               <p className="font-bold">Przelew na telefon</p>
               <p className="text-xs text-blue-100">BLIK Instant</p>
             </div>
          </button>

          <button className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors border border-gray-200">
             <div className="bg-white p-2 rounded-lg shadow-sm">
               <CreditCard size={24} />
             </div>
             <div className="text-left">
               <p className="font-bold">Przelew na konto</p>
               <p className="text-xs text-gray-500">Tradycyjny</p>
             </div>
          </button>
        </div>
      </div>

      {/* History */}
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
              <History size={20} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Historia transakcji</h3>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-50 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors">
              Ostatnie 6 m-cy
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors">
              <Download size={16} />
              CSV
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 text-xs uppercase tracking-wider border-b border-gray-100">
                <th className="pb-4 pl-4 font-medium">Data</th>
                <th className="pb-4 font-medium">Typ</th>
                <th className="pb-4 font-medium">Opis</th>
                <th className="pb-4 font-medium">Kwota</th>
                <th className="pb-4 font-medium text-right pr-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {transactionHistory.map((t) => (
                <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 pl-4 text-sm font-medium text-gray-900">{t.date}</td>
                  <td className="py-4 text-xs font-bold text-gray-500 uppercase">
                    <span className="bg-gray-100 px-2 py-1 rounded-md">{t.method}</span>
                  </td>
                  <td className="py-4 text-sm text-gray-600">{t.description}</td>
                  <td className="py-4 text-sm font-bold text-gray-900">${t.amount.toFixed(2)}</td>
                  <td className="py-4 text-right pr-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-100">
                      <ArrowUpRight size={12} />
                      Opłacona
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}