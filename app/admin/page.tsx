'use client';

import { useState } from 'react';
import { 
  Users, FileText, Clock, CheckCircle2, 
  DollarSign, Search, Filter, Download,
  MoreVertical, Edit, Trash2, MessageSquare
} from 'lucide-react';

const mockRequests = [
  { id: 'REQ-001', name: 'Alice Smith', company: 'TechFlow', service: 'Full Management', date: '2023-10-25', status: 'Pending', budget: '$1k-5k' },
  { id: 'REQ-002', name: 'Bob Johnson', company: 'Local Bake', service: 'Speed Optimization', date: '2023-10-24', status: 'In Progress', budget: '<500' },
  { id: 'REQ-003', name: 'Charlie Davis', company: 'Global Logistics', service: 'SEO Optimization', date: '2023-10-23', status: 'Completed', budget: '500-1k' },
  { id: 'REQ-004', name: 'Diana Evans', company: 'Eva Design', service: 'Bug Fixing', date: '2023-10-22', status: 'Completed', budget: '<500' },
  { id: 'REQ-005', name: 'Frank Wright', company: 'Wright Motors', service: 'Website Maintenance', date: '2023-10-21', status: 'Pending', budget: '500-1k' },
];

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-slate-500">Manage clients, requests, and platform analytics.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-border rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {[
          { label: 'Total Clients', value: '142', icon: Users, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
          { label: 'Total Requests', value: '356', icon: FileText, color: 'text-indigo-500', bg: 'bg-indigo-100 dark:bg-indigo-900/30' },
          { label: 'Pending', value: '28', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-900/30' },
          { label: 'Completed', value: '315', icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30' },
          { label: 'Revenue', value: '$45.2k', icon: DollarSign, color: 'text-emerald-500', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
        ].map((stat, i) => (
          <div key={i} className="glass-card p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-slate-500">{stat.label}</span>
              <div className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </div>
            <span className="text-3xl font-bold">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="glass-card overflow-hidden">
        <div className="p-6 border-b border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-xl font-bold">Recent Requests</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search clients..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-900/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
              />
            </div>
            <button className="p-2 border border-border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <Filter className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-900/50 text-sm text-slate-500 border-b border-border/40">
                <th className="p-4 font-medium">Request ID</th>
                <th className="p-4 font-medium">Client Info</th>
                <th className="p-4 font-medium">Service</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-border/40">
              {mockRequests.filter(r => r.name.toLowerCase().includes(searchTerm.toLowerCase())).map((req, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-medium">{req.id}</td>
                  <td className="p-4">
                    <p className="font-medium text-slate-900 dark:text-white">{req.name}</p>
                    <p className="text-xs text-slate-500">{req.company}</p>
                  </td>
                  <td className="p-4">{req.service}</td>
                  <td className="p-4">{req.date}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      req.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                      req.status === 'In Progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                      'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                    }`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-blue-500 transition-colors" title="Chat">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-blue-500 transition-colors" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
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
