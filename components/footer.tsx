import Link from 'next/link';
import { Globe, Twitter, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="glass border-t border-border/40 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Globe className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">WebManage</span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Professional website management, maintenance, and optimization platform for modern businesses.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="#" className="hover:text-blue-600">Website Maintenance</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Bug Fixing</Link></li>
              <li><Link href="#" className="hover:text-blue-600">SEO Optimization</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Speed Optimization</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="#" className="hover:text-blue-600">About Us</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Contact</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Pricing</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="#" className="hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} WebManage. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>English (US)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
