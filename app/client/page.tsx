'use client';

import { 
  FileText, Clock, CreditCard, Download, 
  MessageSquare, UploadCloud, CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function ClientDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Client Dashboard</h1>
          <p className="text-slate-500">Welcome back, John Doe. Track your active requests and billing.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-md">
            + New Request
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column - Active Requests */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card overflow-hidden">
            <div className="p-6 border-b border-border/40 flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" /> Active Requests
              </h2>
            </div>
            <div className="p-6">
              <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 border border-border">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-medium text-slate-500 mb-1 block">REQ-001 • Oct 25, 2023</span>
                    <h3 className="text-lg font-bold">Full Website Management</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Ongoing maintenance, SEO optimization, and bug fixing for TechFlow.com.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    In Progress
                  </span>
                </div>
                
                {/* Progress Steps */}
                <div className="mt-8 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2/3 h-1 bg-blue-500 rounded-full"></div>
                  
                  <div className="relative flex justify-between items-center z-10">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white ring-4 ring-slate-50 dark:ring-slate-900/50">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-medium">Received</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white ring-4 ring-slate-50 dark:ring-slate-900/50">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-medium">Reviewed</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-2 border-blue-500 flex items-center justify-center text-blue-500 ring-4 ring-slate-50 dark:ring-slate-900/50">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                      </div>
                      <span className="text-xs font-medium">Working</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-300 ring-4 ring-slate-50 dark:ring-slate-900/50">
                      </div>
                      <span className="text-xs font-medium text-slate-500">Completed</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/40 flex items-center gap-4">
                  <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" /> Message Admin
                  </button>
                  <button className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center gap-2">
                    <UploadCloud className="w-4 h-4" /> Upload Files
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card overflow-hidden">
            <div className="p-6 border-b border-border/40">
              <h2 className="text-xl font-bold">Recent Communications</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600 font-bold">
                  A
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <h4 className="font-medium">Admin Team</h4>
                    <span className="text-xs text-slate-500">2 hours ago</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg rounded-tl-none border border-border">
                    Hello John! We've started the speed optimization process. Could you please provide the DNS access details when you have a moment?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Billing & Invoices */}
        <div className="space-y-8">
          <div className="glass-card overflow-hidden">
            <div className="p-6 border-b border-border/40">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-emerald-500" /> Billing
              </h2>
            </div>
            <div className="p-6">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/30 rounded-xl p-4 mb-6 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-emerald-800 dark:text-emerald-300">Payment Due</h4>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400/80 mt-1">Invoice INV-2023-089 for $1,250 is due in 3 days.</p>
                  <button className="mt-3 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium rounded-lg transition-colors">
                    Pay Now via Razorpay/UPI
                  </button>
                </div>
              </div>

              <h3 className="font-medium text-sm mb-4">Recent Invoices</h3>
              <div className="space-y-3">
                {[
                  { id: 'INV-089', date: 'Oct 25, 2023', amount: '$1,250', status: 'Pending' },
                  { id: 'INV-088', date: 'Sep 25, 2023', amount: '$1,250', status: 'Paid' },
                  { id: 'INV-087', date: 'Aug 25, 2023', amount: '$1,250', status: 'Paid' },
                ].map((inv) => (
                  <div key={inv.id} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-slate-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{inv.id}</p>
                        <p className="text-xs text-slate-500">{inv.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold">{inv.amount}</p>
                      <button className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1 mt-0.5">
                        <Download className="w-3 h-3" /> PDF
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
