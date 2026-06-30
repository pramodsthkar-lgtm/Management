'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  ShieldCheck, Zap, LineChart, Lock, 
  Database, Globe, Server, CheckCircle2,
  ArrowRight
} from 'lucide-react';

const services = [
  { icon: ShieldCheck, title: 'Website Maintenance', desc: 'Regular updates, backups, and security patches.' },
  { icon: Zap, title: 'Speed Optimization', desc: 'Improve loading times for better user experience.' },
  { icon: LineChart, title: 'SEO Optimization', desc: 'Boost your search engine rankings and traffic.' },
  { icon: Lock, title: 'SSL Installation', desc: 'Secure your website with proper SSL certificates.' },
  { icon: Server, title: 'Domain & Hosting', desc: 'Reliable hosting management and domain renewals.' },
  { icon: CheckCircle2, title: 'Bug Fixing', desc: 'Quick resolution of any frontend or backend issues.' }
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-medium text-blue-600 dark:text-blue-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Premium Website Management
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Your Website, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Professionally Managed.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10"
          >
            We handle the maintenance, security, updates, and optimization so you can focus on growing your business.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="/submit" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
            >
              Submit Your Website <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="#services" 
              className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/40 dark:hover:bg-slate-800/40 rounded-full font-semibold transition-all flex items-center justify-center"
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white/20 dark:bg-slate-900/20 backdrop-blur-sm border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Services</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Everything you need to keep your digital presence running smoothly and efficiently.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to upgrade your website?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
            Join hundreds of businesses that trust us with their digital infrastructure.
          </p>
          <Link 
            href="/submit" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Start Your Request Today <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
