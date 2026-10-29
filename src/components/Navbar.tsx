import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, GraduationCap } from 'lucide-react';

interface NavbarProps {
  onEnquireClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onEnquireClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Programs', href: '#programs' },
    { label: 'Courses', href: '#courses' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold shadow-xs group-hover:bg-blue-600 transition-colors">
              <GraduationCap className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight text-slate-900">
                  NextStep
                </span>
                <span className="font-medium text-lg text-blue-600">Academy</span>
              </div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-600">
                Demo Platform
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={onEnquireClick}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-xs hover:shadow transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onEnquireClick}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold"
            >
              Enquire
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-xl">
          <div className="px-2 py-1 text-xs font-bold uppercase tracking-wider text-slate-600">
            Navigation Menu (Demo)
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onEnquireClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-xs"
            >
              <span>Enquire for a Course</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-slate-600 pt-1">
              Fictional demonstration · Instant local form testing
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
