'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  Compass, 
  PhoneCall, 
  Search, 
  Box, 
  Layers, 
  BookOpen, 
  Tags, 
  FileSpreadsheet, 
  Calendar, 
  Newspaper, 
  Users, 
  HelpCircle, 
  Briefcase, 
  Inbox, 
  Mail, 
  ShieldAlert, 
  Settings, 
  UserCheck, 
  History,
  Zap,
  User,
  KeyRound
} from 'lucide-react';

interface SidebarItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SidebarGroup {
  group: string;
  items: SidebarItem[];
}

const MENU_GROUPS: SidebarGroup[] = [
  {
    group: 'Overview',
    items: [
      { title: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard }
    ]
  },
  {
    group: 'Website Management',
    items: [
      { title: 'Pages', href: '/admin/pages', icon: FileText },
      { title: 'Navigation', href: '/admin/navigation', icon: Compass },
      { title: 'Contact Info', href: '/admin/contact-info', icon: PhoneCall },
      { title: 'SEO Settings', href: '/admin/seo', icon: Search }
    ]
  },
  {
    group: 'Products & Solutions',
    items: [
      { title: 'Products', href: '/admin/products', icon: Box },
      { title: 'Solutions', href: '/admin/solutions', icon: Layers }
    ]
  },
  {
    group: 'Content Management',
    items: [
      { title: 'Blogs', href: '/admin/blogs', icon: BookOpen },
      { title: 'Categories', href: '/admin/categories', icon: Tags },
      { title: 'Resources', href: '/admin/resources', icon: FileSpreadsheet },
      { title: 'Events', href: '/admin/events', icon: Calendar },
      { title: 'Media Room', href: '/admin/media', icon: Newspaper },
      { title: 'Team Directorate', href: '/admin/team', icon: Users },
      { title: 'FAQs', href: '/admin/faqs', icon: HelpCircle }
    ]
  },
  {
    group: 'Careers & Hiring',
    items: [
      { title: 'Job Openings', href: '/admin/careers', icon: Briefcase },
      { title: 'Applications', href: '/admin/applications', icon: UserCheck }
    ]
  },
  {
    group: 'Enquiries',
    items: [
      { title: 'Contact Inquiries', href: '/admin/inquiries', icon: Inbox },
      { title: 'Newsletter', href: '/admin/newsletter', icon: Mail }
    ]
  },
  {
    group: 'Administration',
    items: [
      { title: 'Admin Users', href: '/admin/users', icon: ShieldAlert },
      { title: 'Roles & RBAC', href: '/admin/roles', icon: KeyRound },
      { title: 'System Settings', href: '/admin/settings', icon: Settings },
      { title: 'Admin Profile', href: '/admin/profile', icon: User },
      { title: 'Activity Logs', href: '/admin/activity-logs', icon: History }
    ]
  }
];

export default function AdminSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 z-40 lg:hidden backdrop-blur-xs"
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 w-64 bg-slate-950 text-slate-300 z-50 flex flex-col border-r border-slate-800 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-16 flex items-center px-6 border-b border-slate-800/80 gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm text-white tracking-wide">GOODENOUGH</span>
            <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-semibold">Admin Portal</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
          {MENU_GROUPS.map((grp) => (
            <div key={grp.group} className="space-y-1">
              <h5 className="px-3 text-[10px] uppercase font-bold tracking-wider text-slate-400">
                {grp.group}
              </h5>
              {grp.items.map((item) => {
                const Icon = item.icon;
                const isCurrent = pathname === item.href || (item.href !== '/admin/dashboard' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      if (window.innerWidth < 1024) onClose();
                    }}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                      isCurrent
                        ? 'bg-emerald-600 text-white shadow-xs shadow-emerald-500/20'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
          <span>GEEPL CMS v1.0</span>
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
        </div>
      </aside>
    </>
  );
}

