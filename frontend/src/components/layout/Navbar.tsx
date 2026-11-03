'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight, Zap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = isScrolled || !isHome
    ? 'bg-[#061A13]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
    : 'bg-transparent border-b border-white/10 py-5';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group focus:outline-hidden">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#A8E51E] to-[#164D38] p-[1px] transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-[#061A13] rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#A8E51E] fill-[#A8E51E]" />
                </div>
              </div>
              <div className="flex items-baseline tracking-wider">
                <span className="font-extrabold text-lg sm:text-xl text-white tracking-tight">
                  GOODENOUGH
                </span>
                <span className="font-extrabold text-lg sm:text-xl text-[#A8E51E] ml-1 tracking-tight">
                  ENERGY
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13.5px] font-medium text-white/90">
              <Link
                href="/about-goodenough"
                className={`px-3 py-1.5 rounded-full transition-all duration-200 hover:text-[#A8E51E] hover:bg-white/5 ${
                  pathname === '/about-goodenough' ? 'text-[#A8E51E] bg-white/5 font-semibold' : ''
                }`}
              >
                About Us
              </Link>

              <div className="relative group">
                <Link
                  href="/products"
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-200 hover:text-[#A8E51E] hover:bg-white/5 ${
                    pathname.startsWith('/products') ? 'text-[#A8E51E] bg-white/5 font-semibold' : ''
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className="w-3.5 h-3.5 text-white/60 group-hover:text-[#A8E51E] transition-transform duration-200 group-hover:rotate-180" />
                </Link>
                <div className="absolute top-full left-0 hidden group-hover:block w-64 pt-2 z-50">
                  <div className="bg-[#0B241A]/95 backdrop-blur-xl rounded-2xl border border-white/10 p-2 shadow-2xl space-y-1">
                    <Link
                      href="/products/storedge-0-25"
                      className="block px-3.5 py-2.5 rounded-xl hover:bg-[#164D38]/50 text-white/90 hover:text-[#A8E51E] transition-colors"
                    >
                      <div className="text-xs font-bold text-white">StorEDGE 0.25</div>
                      <div className="text-[11px] text-[#B8C5BD]">250 kWh Commercial & Industrial</div>
                    </Link>
                    <Link
                      href="/products/storedge-5-0"
                      className="block px-3.5 py-2.5 rounded-xl hover:bg-[#164D38]/50 text-white/90 hover:text-[#A8E51E] transition-colors"
                    >
                      <div className="text-xs font-bold text-white">StorEDGE 5.0</div>
                      <div className="text-[11px] text-[#B8C5BD]">5 MWh Grid & Utility Scale</div>
                    </Link>
                    <div className="border-t border-white/10 my-1 pt-1">
                      <Link
                        href="/products"
                        className="block px-3.5 py-1.5 text-xs text-[#A8E51E] font-medium hover:underline"
                      >
                        Compare All Specifications →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-200 hover:text-[#A8E51E] hover:bg-white/5 ${
                    ['/island-mode', '/hybrid-mode', '/microgrid'].includes(pathname)
                      ? 'text-[#A8E51E] bg-white/5 font-semibold'
                      : ''
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown className="w-3.5 h-3.5 text-white/60 group-hover:text-[#A8E51E] transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 hidden group-hover:block w-60 pt-2 z-50">
                  <div className="bg-[#0B241A]/95 backdrop-blur-xl rounded-2xl border border-white/10 p-2 shadow-2xl space-y-1">
                    <Link
                      href="/island-mode"
                      className="block px-3.5 py-2 rounded-xl text-xs hover:bg-[#164D38]/50 text-white/90 hover:text-[#A8E51E] transition-colors"
                    >
                      Island Mode (Grid-Forming)
                    </Link>
                    <Link
                      href="/hybrid-mode"
                      className="block px-3.5 py-2 rounded-xl text-xs hover:bg-[#164D38]/50 text-white/90 hover:text-[#A8E51E] transition-colors"
                    >
                      Hybrid Mode (Solar & Grid)
                    </Link>
                    <Link
                      href="/microgrid"
                      className="block px-3.5 py-2 rounded-xl text-xs hover:bg-[#164D38]/50 text-white/90 hover:text-[#A8E51E] transition-colors"
                    >
                      Microgrid Topologies
                    </Link>
                    <Link
                      href="/why-bess"
                      className="block px-3.5 py-2 rounded-xl text-xs hover:bg-[#164D38]/50 text-white/90 hover:text-[#A8E51E] transition-colors"
                    >
                      Why Choose BESS
                    </Link>
                  </div>
                </div>
              </div>

              <a
                href="/#industries"
                className="px-3 py-1.5 rounded-full transition-all duration-200 hover:text-[#A8E51E] hover:bg-white/5"
              >
                Industries
              </a>

              <a
                href="/#projects"
                className="px-3 py-1.5 rounded-full transition-all duration-200 hover:text-[#A8E51E] hover:bg-white/5"
              >
                Projects
              </a>

              <div className="relative group">
                <button
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-200 hover:text-[#A8E51E] hover:bg-white/5 ${
                    ['/white-paper', '/industry-report', '/blogs', '/events', '/media-room'].some((p) =>
                      pathname.startsWith(p)
                    )
                      ? 'text-[#A8E51E] bg-white/5 font-semibold'
                      : ''
                  }`}
                >
                  <span>Insights</span>
                  <ChevronDown className="w-3.5 h-3.5 text-white/60 group-hover:text-[#A8E51E] transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 hidden group-hover:block w-56 pt-2 z-50">
                  <div className="bg-[#0B241A]/95 backdrop-blur-xl rounded-2xl border border-white/10 p-2 shadow-2xl space-y-1">
                    <Link
                      href="/blogs"
                      className="block px-3.5 py-2 rounded-xl text-xs hover:bg-[#164D38]/50 text-white/90 hover:text-[#A8E51E] transition-colors"
                    >
                      Latest Blogs
                    </Link>
                    <Link
                      href="/industry-report"
                      className="block px-3.5 py-2 rounded-xl text-xs hover:bg-[#164D38]/50 text-white/90 hover:text-[#A8E51E] transition-colors"
                    >
                      Industry Reports
                    </Link>
                    <Link
                      href="/white-paper"
                      className="block px-3.5 py-2 rounded-xl text-xs hover:bg-[#164D38]/50 text-white/90 hover:text-[#A8E51E] transition-colors"
                    >
                      Whitepapers
                    </Link>
                    <Link
                      href="/events"
                      className="block px-3.5 py-2 rounded-xl text-xs hover:bg-[#164D38]/50 text-white/90 hover:text-[#A8E51E] transition-colors"
                    >
                      Events & Expos
                    </Link>
                    <Link
                      href="/media-room"
                      className="block px-3.5 py-2 rounded-xl text-xs hover:bg-[#164D38]/50 text-white/90 hover:text-[#A8E51E] transition-colors"
                    >
                      Media Room
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className={`px-3 py-1.5 rounded-full transition-all duration-200 hover:text-[#A8E51E] hover:bg-white/5 ${
                  pathname === '/contact' ? 'text-[#A8E51E] bg-white/5 font-semibold' : ''
                }`}
              >
                Contact
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#A8E51E] hover:bg-[#B9EE45] text-[#061A13] font-bold text-xs tracking-wide transition-all duration-200 shadow-lg shadow-[#A8E51E]/20 hover:shadow-[#A8E51E]/30 hover:scale-[1.02] active:scale-95"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-white hover:text-[#A8E51E] hover:bg-white/5 focus:outline-hidden"
                aria-label="Toggle navigation"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-[#061A13]/98 border-b border-white/10 px-4 pt-4 pb-8 space-y-3 mt-2 shadow-2xl backdrop-blur-2xl">
            <Link
              href="/about-goodenough"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-white hover:text-[#A8E51E] hover:bg-white/5"
            >
              About Us
            </Link>

            <div>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium text-white hover:text-[#A8E51E] hover:bg-white/5"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180 text-[#A8E51E]' : ''}`} />
              </button>
              {productsOpen && (
                <div className="pl-4 space-y-1.5 mt-1 border-l border-white/10 ml-2">
                  <Link
                    href="/products/storedge-0-25"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-1.5 text-xs text-[#B8C5BD] hover:text-[#A8E51E]"
                  >
                    StorEDGE 0.25 (250 kWh)
                  </Link>
                  <Link
                    href="/products/storedge-5-0"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-1.5 text-xs text-[#B8C5BD] hover:text-[#A8E51E]"
                  >
                    StorEDGE 5.0 (5 MWh)
                  </Link>
                  <Link
                    href="/products"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-1.5 text-xs text-[#A8E51E]"
                  >
                    All Products
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium text-white hover:text-[#A8E51E] hover:bg-white/5"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180 text-[#A8E51E]' : ''}`} />
              </button>
              {solutionsOpen && (
                <div className="pl-4 space-y-1.5 mt-1 border-l border-white/10 ml-2">
                  <Link
                    href="/island-mode"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-1.5 text-xs text-[#B8C5BD] hover:text-[#A8E51E]"
                  >
                    Island Mode
                  </Link>
                  <Link
                    href="/hybrid-mode"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-1.5 text-xs text-[#B8C5BD] hover:text-[#A8E51E]"
                  >
                    Hybrid Mode
                  </Link>
                  <Link
                    href="/microgrid"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-1.5 text-xs text-[#B8C5BD] hover:text-[#A8E51E]"
                  >
                    Microgrid
                  </Link>
                  <Link
                    href="/why-bess"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-1.5 text-xs text-[#B8C5BD] hover:text-[#A8E51E]"
                  >
                    Why BESS
                  </Link>
                </div>
              )}
            </div>

            <a
              href="/#industries"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-white hover:text-[#A8E51E] hover:bg-white/5"
            >
              Industries
            </a>

            <a
              href="/#projects"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-white hover:text-[#A8E51E] hover:bg-white/5"
            >
              Projects
            </a>

            <div>
              <button
                onClick={() => setInsightsOpen(!insightsOpen)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium text-white hover:text-[#A8E51E] hover:bg-white/5"
              >
                <span>Insights</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${insightsOpen ? 'rotate-180 text-[#A8E51E]' : ''}`} />
              </button>
              {insightsOpen && (
                <div className="pl-4 space-y-1.5 mt-1 border-l border-white/10 ml-2">
                  <Link
                    href="/blogs"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-1.5 text-xs text-[#B8C5BD] hover:text-[#A8E51E]"
                  >
                    Blogs
                  </Link>
                  <Link
                    href="/industry-report"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-1.5 text-xs text-[#B8C5BD] hover:text-[#A8E51E]"
                  >
                    Industry Reports
                  </Link>
                  <Link
                    href="/white-paper"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-1.5 text-xs text-[#B8C5BD] hover:text-[#A8E51E]"
                  >
                    White Papers
                  </Link>
                  <Link
                    href="/events"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-1.5 text-xs text-[#B8C5BD] hover:text-[#A8E51E]"
                  >
                    Events
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-white hover:text-[#A8E51E] hover:bg-white/5"
            >
              Contact
            </Link>

            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center w-full py-3 rounded-full bg-[#A8E51E] text-[#061A13] font-bold text-sm shadow-lg shadow-[#A8E51E]/20"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        )}
      </header>

      {!isHome && <div className="h-20" />}
    </>
  );
}
