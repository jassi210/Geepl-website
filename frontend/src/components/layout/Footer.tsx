'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Zap, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid business email address.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing to GoodEnough Energy updates.');
      setEmail('');
    }, 600);
  };

  return (
    <footer className="bg-[#061A13] text-[#B8C5BD] pt-20 pb-12 border-t border-[#164D38]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#164D38]/60">
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A8E51E] to-[#164D38] p-[1px]">
                <div className="w-full h-full bg-[#061A13] rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#A8E51E] fill-[#A8E51E]" />
                </div>
              </div>
              <div className="flex items-baseline">
                <span className="font-extrabold text-xl text-white tracking-tight">
                  GOODENOUGH
                </span>
                <span className="font-extrabold text-xl text-[#A8E51E] ml-1.5 tracking-tight">
                  ENERGY
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#B8C5BD] max-w-sm leading-relaxed">
              India&apos;s leading Battery Energy Storage Systems (BESS) manufacturer. Our Greater Noida Gigafactory powers commercial, industrial, and utility scale decarbonization with intelligent, liquid-cooled energy storage.
            </p>

            <div className="pt-1 space-y-2.5 text-xs text-[#B8C5BD]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#A8E51E] shrink-0 mt-0.5" />
                <span>
                  F4 B2, Plot No.1, Ecotech VII, Greater Noida, Gautam Budh Nagar, UP - 201310, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#A8E51E] shrink-0" />
                <a href="mailto:connect@goodenough.energy" className="hover:text-[#A8E51E] transition-colors">
                  connect@goodenough.energy
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#A8E51E] shrink-0" />
                <span>+91 92200 38938 / +91 97177 67796</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 text-xs text-white/70">
              <ShieldCheck className="w-4 h-4 text-[#A8E51E]" />
              <span>Certified to IEC 62619, UL 9540A &amp; BIS</span>
            </div>
          </div>

          <div className="space-y-3.5">
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase">Products &amp; Tech</h4>
            <ul className="space-y-2.5 text-xs text-[#B8C5BD]">
              <li>
                <Link href="/products/storedge-0-25" className="hover:text-[#A8E51E] transition-colors">
                  StorEDGE 0.25 (250 kWh)
                </Link>
              </li>
              <li>
                <Link href="/products/storedge-5-0" className="hover:text-[#A8E51E] transition-colors">
                  StorEDGE 5.0 (5 MWh)
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#A8E51E] transition-colors">
                  All Product Specs
                </Link>
              </li>
              <li>
                <Link href="/island-mode" className="hover:text-[#A8E51E] transition-colors">
                  Island Mode Architecture
                </Link>
              </li>
              <li>
                <Link href="/hybrid-mode" className="hover:text-[#A8E51E] transition-colors">
                  Hybrid Mode Operation
                </Link>
              </li>
              <li>
                <Link href="/microgrid" className="hover:text-[#A8E51E] transition-colors">
                  Microgrid Systems
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#A8E51E] transition-colors">
                  Turnkey EPC &amp; Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3.5">
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase">Company &amp; Trust</h4>
            <ul className="space-y-2.5 text-xs text-[#B8C5BD]">
              <li>
                <Link href="/about-goodenough" className="hover:text-[#A8E51E] transition-colors">
                  About GoodEnough
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="hover:text-[#A8E51E] transition-colors">
                  Leadership &amp; Team
                </Link>
              </li>
              <li>
                <Link href="/why-bess" className="hover:text-[#A8E51E] transition-colors">
                  Why Choose BESS
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-[#A8E51E] transition-colors">
                  Sustainability Roadmap
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-[#A8E51E] transition-colors">
                  Careers &amp; Openings
                </Link>
              </li>
              <li>
                <Link href="/white-paper" className="hover:text-[#A8E51E] transition-colors">
                  White Papers &amp; Reports
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#A8E51E] transition-colors">
                  Contact &amp; Plant Tour
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3.5">
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase">Stay Updated</h4>
            <p className="text-xs text-[#B8C5BD] leading-relaxed">
              Subscribe to technical whitepapers, energy storage bulletins, and gigafactory deployment reports.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2.5 pt-1">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 text-xs bg-[#0B241A] border border-[#164D38] rounded-xl text-white placeholder:text-[#B8C5BD]/50 focus:outline-hidden focus:border-[#A8E51E] transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#A8E51E] hover:bg-[#B9EE45] text-[#061A13] rounded-xl text-xs font-bold tracking-wide transition-all shadow-md shadow-[#A8E51E]/15 disabled:opacity-50 active:scale-95"
              >
                <span>{status === 'loading' ? 'Subscribing...' : 'Subscribe to Bulletins'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              {message && (
                <p className={`text-xs ${status === 'success' ? 'text-[#A8E51E]' : 'text-rose-400'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#B8C5BD]/70 gap-4">
          <p>© {new Date().getFullYear()} GoodEnough Energy Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#A8E51E] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#A8E51E] transition-colors">
              Terms &amp; Warranty
            </Link>
            <Link href="/contact" className="hover:text-[#A8E51E] transition-colors">
              Plant Visit Request
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
