'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { UploadCloud, CheckCircle2, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';

export default function SubmitPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-card p-12"
        >
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Request Submitted!</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Thank you for submitting your website. Our team will review your requirements and get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-medium"
          >
            Submit Another Request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Submit Your Website</h1>
        <p className="text-slate-600 dark:text-slate-400">Fill out the form below to request management or optimization services.</p>
      </div>

      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit(onSubmit)}
        className="glass-card p-8 md:p-12 space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Full Name *</label>
            <input 
              {...register('fullName', { required: true })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email *</label>
            <input 
              type="email"
              {...register('email', { required: true })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="john@company.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Mobile Number</label>
            <input 
              {...register('mobile')}
              className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="+1 234 567 8900"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Company Name</label>
            <input 
              {...register('company')}
              className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Acme Inc."
            />
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Website URL *</label>
            <input 
              {...register('website', { required: true })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="https://example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Type of Website</label>
            <select 
              {...register('type')}
              className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="ecommerce">E-Commerce</option>
              <option value="corporate">Corporate / Business</option>
              <option value="portfolio">Portfolio</option>
              <option value="blog">Blog / News</option>
              <option value="webapp">Web Application</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Domain Provider</label>
            <input 
              {...register('domainProvider')}
              className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="GoDaddy, Namecheap..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Hosting Provider</label>
            <input 
              {...register('hostingProvider')}
              className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="AWS, Vercel, HostGator..."
            />
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Required Service *</label>
            <select 
              {...register('service', { required: true })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="full">Full Website Management</option>
              <option value="maintenance">Maintenance & Updates</option>
              <option value="speed">Speed Optimization</option>
              <option value="seo">SEO Optimization</option>
              <option value="bugs">Bug Fixing</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Budget Range</label>
            <select 
              {...register('budget')}
              className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="<500">Under $500</option>
              <option value="500-1k">$500 - $1,000</option>
              <option value="1k-5k">$1,000 - $5,000</option>
              <option value=">5k">$5,000+</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Message / Specific Requirements</label>
          <textarea 
            {...register('message')}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            placeholder="Please detail your issues, goals, or expectations..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center justify-between">
            Upload Files (Images, Screenshots, Docs)
          </label>
          <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
            <UploadCloud className="w-10 h-10 text-blue-500 mx-auto mb-4" />
            <p className="text-sm text-slate-600 dark:text-slate-400">Click to upload or drag and drop files here</p>
            <p className="text-xs text-slate-500 mt-2">Max 5 files, up to 10MB each</p>
          </div>
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-70"
        >
          {isSubmitting ? 'Submitting...' : (
            <>Submit Request <ArrowRight className="w-5 h-5" /></>
          )}
        </button>
      </motion.form>
    </div>
  );
}
