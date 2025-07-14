import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Download, Calendar, Building, Users, TrendingUp, ExternalLink, FileText, ArrowRight, Star, Award, Globe, Shield } from 'lucide-react';

const BerkshireHathawayWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const shareholderLetters = [
    { year: '2024', title: 'Letter to Shareholders', date: 'February 2024', size: '2.3MB', featured: true },
    { year: '2023', title: 'Letter to Shareholders', date: 'February 2023', size: '2.1MB', featured: false },
    { year: '2022', title: 'Letter to Shareholders', date: 'February 2022', size: '1.9MB', featured: false },
    { year: '2021', title: 'Letter to Shareholders', date: 'February 2021', size: '2.0MB', featured: false },
  ];

  const subsidiaries = [
    { name: 'GEICO', sector: 'Insurance', description: 'Leading auto insurance provider with innovative direct-to-consumer approach', icon: Shield },
    { name: 'BNSF Railway', sector: 'Transportation', description: 'North America\'s premier freight railroad network spanning 28 states', icon: Globe },
    { name: 'Berkshire Hathaway Energy', sector: 'Energy', description: 'Renewable energy pioneer committed to sustainable power solutions', icon: Star },
    { name: 'Precision Castparts', sector: 'Manufacturing', description: 'World-class aerospace and industrial component manufacturer', icon: Award },
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'letters', label: 'Shareholder Letters' },
    { id: 'subsidiaries', label: 'Subsidiaries' },
    { id: 'news', label: 'News' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<div className="min-h-screen bg-slate-50 font-sans">
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 0 ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-200/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-light text-slate-800 tracking-wide">
                Berkshire Hathaway <span className="text-amber-600 font-normal">Inc.</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-all duration-300 relative ${
                    activeSection === item.id
                      ? 'text-slate-900'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-3 rounded-xl hover:bg-slate-100/80 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6 text-slate-600" /> : <Menu className="h-6 w-6 text-slate-600" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/50">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-light tracking-wide transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-slate-900 bg-amber-50 border-l-4 border-amber-600'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Berkshire Hathaway */}
      <section className="relative h-screen max-h-[900px] min-h-[600px] overflow-hidden bg-white">
        {/* Subtle overlay for text contrast */}
        <div className="absolute inset-0 bg-white/60 z-10"></div>
        
        {/* Professional background image */}
        <div className="absolute inset-0 bg-gray-50">
          <img 
            src="images/berkshire-hq.jpg"
            alt="Professional office building"
            className="w-full h-full object-cover object-center opacity-30"
            loading="eager"
          />
        </div>

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.02] z-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:40px_40px]"></div>
        </div>

        {/* Content container with precise vertical centering */}
        <div className="container relative z-20 h-full flex flex-col justify-center px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left side content with increased margin */}
            <div className="max-w-2xl ml-8 lg:ml-16">
              {/* Minimal status line */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
                  <span className="text-white font-semibold text-xs">BH</span>
                </div>
                <span className="text-slate-700 font-medium text-sm tracking-wide">BERKSHIRE HATHAWAY INC.</span>
              </div>

              {/* Clean, professional headline */}
              <h1 className="text-5xl md:text-6xl font-light leading-tight text-slate-900 mb-6">
                <span className="block font-light">Building</span>
                <span className="block font-normal">Exceptional Value</span>
                <span className="block text-slate-600 font-light">Since 1965</span>
              </h1>

              {/* Refined description */}
              <p className="text-lg text-slate-700 mb-10 max-w-xl leading-relaxed font-light">
                A diversified holding company committed to long-term value creation through 
                disciplined capital allocation, operational excellence, and unwavering integrity.
              </p>

              {/* Clean button group */}
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('letters')}
                  className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded transition-all duration-200 flex items-center gap-2 group"
                >
                  <span>Chairman's Letter</span>
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                
                <button 
                  onClick={() => scrollToSection('about')}
                  className="px-6 py-3 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-medium text-sm rounded transition-all duration-200"
                >
                  Our Story
                </button>
              </div>
            </div>

            {/* Right side content - Key metrics and highlights */}
          <div className="hidden lg:block">
            <div className="space-y-8">
              {/* Key Stats */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-slate-200/50">
                <h3 className="text-lg font-medium text-slate-900 mb-6">Key Highlights</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-slate-100 rounded-lg mb-3 mx-auto">
                      <TrendingUp className="h-6 w-6 text-slate-600" />
                    </div>
                    <div className="text-2xl font-semibold text-slate-900">$900B+</div>
                    <div className="text-sm text-slate-600">Market Cap</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-slate-100 rounded-lg mb-3 mx-auto">
                      <Users className="h-6 w-6 text-slate-600" />
                    </div>
                    <div className="text-2xl font-semibold text-slate-900">380K+</div>
                    <div className="text-sm text-slate-600">Employees</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-slate-100 rounded-lg mb-3 mx-auto">
                      <Award className="h-6 w-6 text-slate-600" />
                    </div>
                    <div className="text-2xl font-semibold text-slate-900">60+</div>
                    <div className="text-sm text-slate-600">Companies</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-slate-100 rounded-lg mb-3 mx-auto">
                      <Globe className="h-6 w-6 text-slate-600" />
                    </div>
                    <div className="text-2xl font-semibold text-slate-900">Global</div>
                    <div className="text-sm text-slate-600">Presence</div>
                  </div>
                </div>
              </div>

              {/* Latest Update */}
              <div className="bg-slate-800/95 backdrop-blur-sm rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-300">Latest Update</span>
                </div>
                <h4 className="text-lg font-medium mb-2">2024 Annual Report</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Our comprehensive annual report showcasing another year of steady growth and strategic investments.
                </p>
                <button className="text-white hover:text-slate-200 text-sm font-medium transition-colors duration-200 flex items-center gap-1 group">
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

              </div>
            </div>

            {/* Minimal scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
              <div className="w-px h-8 bg-slate-400 animate-pulse"></div>
            </div>

            {/* Subtle brand watermark */}
            <div className="absolute right-8 bottom-8 z-10 opacity-5">
              <div className="w-20 h-20 border border-slate-300 rounded flex items-center justify-center">
                <span className="text-slate-600 font-light text-xl">BH</span>
              </div>
            </div>

            {/* Year marker */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 opacity-20">
              <div className="transform -rotate-90 origin-left">
                <span className="text-slate-500 font-light text-xs tracking-widest">EST. 1965</span>
              </div>
            </div>
          </section>
  );
      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Our <span className="text-amber-600">Legacy</span>
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Nearly six decades of consistent value creation through patient capital, 
              principled leadership, and an unwavering commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-10 bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-4 tracking-wide">
                Consistent Growth
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Compound annual growth rate of 20.1% since 1965, significantly outperforming 
                the S&P 500 through multiple market cycles.
              </p>
            </div>

            <div className="group text-center p-10 bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-4 tracking-wide">
                Diverse Portfolio
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Operating companies spanning insurance, energy, transportation, and manufacturing 
                with market-leading positions in each sector.
              </p>
            </div>

            <div className="group text-center p-10 bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-4 tracking-wide">
                Trusted Leadership
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Guided by Warren Buffett's investment philosophy and unwavering commitment 
                to creating long-term shareholder value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shareholder Letters Section */}
      <section id="letters" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Shareholder <span className="text-amber-600">Letters</span>
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Annual insights and perspectives from Warren Buffett on performance, strategy, 
              and market outlook – required reading for serious investors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {shareholderLetters.map((letter, index) => (
              <div key={letter.year} className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 overflow-hidden ${
                letter.featured ? 'ring-2 ring-amber-200' : ''
              }`}>
                {letter.featured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-600 text-white px-4 py-2 rounded-bl-2xl">
                    <span className="text-sm font-medium">Latest</span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-light text-slate-900 mb-2 tracking-wide">
                        {letter.year} {letter.title}
                      </h3>
                      <p className="text-slate-500 text-sm tracking-wide">
                        {letter.date} • {letter.size}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Calendar className="h-6 w-6 text-amber-600" />
                    </div>
                  </div>
                  
                  <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl hover:from-slate-800 hover:to-slate-700 transition-all duration-300 font-light tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <Download className="h-5 w-5" />
                    Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidiaries Section */}
      <section id="subsidiaries" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Our <span className="text-amber-600">Companies</span>
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Market-leading businesses across diverse industries, united by operational excellence, 
              strong management teams, and a long-term growth focus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {subsidiaries.map((company, index) => {
              const IconComponent = company.icon;
              return (
                <div key={company.name} className="group bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-light text-slate-900 mb-2 tracking-wide">
                          {company.name}
                        </h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium tracking-wide">
                          {company.sector}
                        </span>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-6 font-light leading-relaxed">
                      {company.description}
                    </p>
                    
                    <button className="text-amber-600 hover:text-amber-700 transition-colors duration-200 flex items-center gap-2 text-sm font-light tracking-wide group">
                      Learn More 
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Latest <span className="text-amber-600">News</span>
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Stay informed about company developments, earnings releases, and strategic initiatives 
              that drive our continued growth.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                date: 'July 8, 2025',
                title: 'Q2 2025 Operating Results Exceed Expectations',
                summary: 'Berkshire Hathaway reports exceptional second quarter performance with record operating earnings across all major business segments.',
                featured: true
              },
              {
                date: 'June 15, 2025',
                title: 'Annual Meeting Highlights & Key Insights',
                summary: 'Comprehensive coverage and video recordings from the 2025 Annual Shareholders Meeting in Omaha, featuring Q&A with Warren Buffett.',
                featured: false
              },
              {
                date: 'May 20, 2025',
                title: 'Comprehensive Sustainability Report Released',
                summary: 'Detailed overview of environmental and social responsibility initiatives across our portfolio of operating companies.',
                featured: false
              }
            ].map((news, index) => (
              <div key={index} className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 overflow-hidden ${
                news.featured ? 'ring-2 ring-amber-200' : ''
              }`}>
                {news.featured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-600 text-white px-4 py-2 rounded-bl-2xl">
                    <span className="text-sm font-medium">Breaking</span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium tracking-wide mb-4">
                        {news.date}
                      </span>
                      <h3 className="text-2xl font-light text-slate-900 mb-3 tracking-wide">
                        {news.title}
                      </h3>
                      <p className="text-slate-600 mb-6 font-light leading-relaxed">
                        {news.summary}
                      </p>
                      <button className="text-amber-600 hover:text-amber-700 transition-colors duration-200 flex items-center gap-2 text-sm font-light tracking-wide group">
                        Read Full Article 
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Contact <span className="text-amber-600">Us</span>
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Connect with our team for investor relations, media inquiries, or any questions 
              about our company and investment philosophy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100">
              <div className="p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-light text-slate-900 mb-6 tracking-wide">
                  Investor Relations
                </h3>
                <div className="space-y-3 text-slate-600 font-light leading-relaxed">
                  <p>Email: investor.relations@berkshirehathaway.com</p>
                  <p>Phone: (402) 346-1400</p>
                  <p>Address: 3555 Farnam Street, Omaha, NE 68131</p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100">
              <div className="p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-light text-slate-900 mb-6 tracking-wide">
                  Media Relations
                </h3>
                <div className="space-y-3 text-slate-600 font-light leading-relaxed">
                  <p>Email: media@berkshirehathaway.com</p>
                  <p>Phone: (402) 346-1400</p>
                  <p>Press Kit: Download media resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-light text-white mb-2 tracking-wide">
              Berkshire Hathaway <span className="text-amber-400">Inc.</span>
            </h3>
            <p className="text-slate-400 mb-8 font-light">
              © 2025 Berkshire Hathaway Inc. All rights reserved.
            </p>
            <div className="flex justify-center space-x-8">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200 font-light tracking-wide">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200 font-light tracking-wide">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200 font-light tracking-wide">
                SEC Filings
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BerkshireHathawayWebsite;