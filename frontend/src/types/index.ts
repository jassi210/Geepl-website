export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  capacity: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  category: string;
  imageUrl?: string;
  isActive: boolean;
  createdAt?: string;
}

export interface Solution {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  benefits: string[];
  diagramText?: string;
  isActive: boolean;
  createdAt?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  category: string;
  readTime: string;
  publishedAt: string;
  coverImage?: string;
  isActive: boolean;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  location: string;
  date: string;
  description: string;
  booth?: string;
  type: string;
  isActive: boolean;
}

export interface MediaItem {
  id: string;
  slug: string;
  title: string;
  source: string;
  date: string;
  link?: string;
  summary: string;
  content: string;
  category: string;
  isActive: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
  image?: string;
  orderIndex: number;
}

export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  isActive: boolean;
}

export interface JobApplication {
  id: string;
  careerId: string;
  fullName: string;
  email: string;
  phone: string;
  portfolioUrl?: string;
  resumeUrl?: string;
  coverLetter?: string;
  status: 'pending' | 'reviewing' | 'shortlisted' | 'rejected';
  createdAt?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  orderIndex: number;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'pending' | 'reviewed' | 'resolved';
  createdAt?: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  isActive: boolean;
  createdAt?: string;
}

export interface AdminUser {
  id: string;
  username: string;
  email: string;
  fullName: string;
  role: 'superadmin' | 'admin' | 'editor';
  isActive: boolean;
  createdAt?: string;
}

export interface WebsitePage {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  sectionsCount: number;
  updatedAt?: string;
}

export interface ActivityLog {
  id: string;
  userId?: string;
  userName?: string;
  action: string;
  resource: string;
  details?: string;
  createdAt: string;
}

