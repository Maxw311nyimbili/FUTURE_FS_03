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
    { 
      year: '2023', 
      title: 'Letter to Shareholders', 
      date: 'February 2023', 
      size: '2.1MB',
      link: 'https://www.berkshirehathaway.com/letters/2023ltr.pdf',
      featured: true 
    },
    { 
      year: '2022', 
      title: 'Letter to Shareholders', 
      date: 'February 2022', 
      size: '1.9MB',
      link: 'https://www.berkshirehathaway.com/letters/2022ltr.pdf',
      featured: false  
    },
    { 
     year: '2021', 
     title: 'Letter to Shareholders', 
     date: 'February 2021', 
     size: '2.0MB',
     link: 'https://www.berkshirehathaway.com/letters/2021ltr.pdf',
     featured: false 
    },
   { 
    year: '2020', 
    title: 'Letter to Shareholders', 
    date: 'February 2020', 
    size: '1.8MB',
    link: 'https://www.berkshirehathaway.com/letters/2020ltr.pdf',
    featured: false 
  },
  ];

  const subsidiaries = [
    { name: 'GEICO', sector: 'Insurance', description: 'Leading auto insurance provider with innovative direct-to-consumer approach', icon: Shield, link:'https://www.geico.com/'},
    { name: 'BNSF Railway', sector: 'Transportation', description: 'North America\'s premier freight railroad network spanning 28 states', icon: Globe, link:'https://www.bnsf.com/'},
    { name: 'Berkshire Hathaway Energy', sector: 'Energy', description: 'Renewable energy pioneer committed to sustainable power solutions', icon: Star, link:'https://www.brkenergy.com/' },
    { name: 'Precision Castparts', sector: 'Manufacturing', description: 'World-class aerospace and industrial component manufacturer', icon: Award, link: 'https://www.precast.com/'},
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            {/* <div className="flex-shrink-0 flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-900 rounded flex items-center justify-center">
                <span className="text-white font-semibold text-xs sm:text-sm">BH</span>
              </div>
              <span className="text-slate-700 font-medium text-xs sm:text-sm tracking-wide hidden sm:inline">
                BERKSHIRE HATHAWAY INC.
              </span>
            </div> */}

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img 
                src="images/logo.png" 
                alt="Berkshire Hathaway Inc. Logo" 
                className="h-12 sm:h-16 md:h-20 w-auto"
              />
            </div>


            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
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
                className="p-2 sm:p-3 rounded-xl hover:bg-slate-100/80 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6 text-slate-600" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-slate-600" />}
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
      <section id="home" className="relative h-screen max-h-[900px] min-h-[500px] sm:min-h-[600px] overflow-hidden bg-white">
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
        <div className="container relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
            {/* Left side content with responsive margins */}
            <div className="max-w-2xl mx-auto lg:mx-0 lg:ml-8 xl:ml-16 text-center lg:text-left">
              {/* Minimal status line */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 sm:mb-8">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-900 rounded flex items-center justify-center">
                  <span className="text-white font-semibold text-xs">BH</span>
                </div>
                <span className="text-slate-700 font-medium text-xs sm:text-sm tracking-wide">BERKSHIRE HATHAWAY INC.</span>
              </div>

              {/* Clean, professional headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-slate-900 mb-4 sm:mb-6">
                <span className="block font-light">Building</span>
                <span className="block font-normal">Exceptional Value</span>
                <span className="block text-slate-600 font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Since 1965</span>
              </h1>

              {/* Refined description */}
              <p className="text-base sm:text-lg text-slate-700 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light px-4 sm:px-0">
                A diversified holding company committed to long-term value creation through 
                disciplined capital allocation, operational excellence, and unwavering integrity.
              </p>

              {/* Clean button group */}
              <div className="flex flex-col sm:flex-row gap-4 px-4 sm:px-0">
                <button 
                  onClick={() => scrollToSection('letters')}
                  className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded transition-all duration-200 flex items-center justify-center gap-2 group"
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

            {/* Right side content - Key metrics and highlights - Hidden on mobile */}
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

        {/* Subtle brand watermark - Hidden on mobile */}
        <div className="absolute right-8 bottom-8 z-10 opacity-5 hidden sm:block">
          <div className="w-20 h-20 border border-slate-300 rounded flex items-center justify-center">
            <span className="text-slate-600 font-light text-xl">BH</span>
          </div>
        </div>

        {/* Year marker - Hidden on mobile */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 opacity-20 hidden sm:block">
          <div className="transform -rotate-90 origin-left">
            <span className="text-slate-500 font-light text-xs tracking-widest">EST. 1965</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-4 sm:mb-6 tracking-tight">
              Our <span className="text-amber-600">Legacy</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed px-4 sm:px-0">
              Nearly six decades of consistent value creation through patient capital, 
              principled leadership, and an unwavering commitment to excellence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group text-center p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-slate-900 mb-3 sm:mb-4 tracking-wide">
                Consistent Growth
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                Compound annual growth rate of 20.1% since 1965, significantly outperforming 
                the S&P 500 through multiple market cycles.
              </p>
            </div>

            <div className="group text-center p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                <Building className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-slate-900 mb-3 sm:mb-4 tracking-wide">
                Diverse Portfolio
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                Operating companies spanning insurance, energy, transportation, and manufacturing 
                with market-leading positions in each sector.
              </p>
            </div>

            <div className="group text-center p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-slate-900 mb-3 sm:mb-4 tracking-wide">
                Trusted Leadership
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                Guided by Warren Buffett's investment philosophy and unwavering commitment 
                to creating long-term shareholder value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shareholder Letters Section */}
      <section id="letters" className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-4 sm:mb-6 tracking-tight">
              Shareholder <span className="text-amber-600">Letters</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed px-4 sm:px-0">
              Annual insights and perspectives from Warren Buffett on performance, strategy, 
              and market outlook – required reading for serious investors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {shareholderLetters.map((letter, index) => (
              <div key={letter.year} className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 overflow-hidden ${
                letter.featured ? 'ring-2 ring-amber-200' : ''
              }`}>
                {letter.featured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-bl-2xl">
                    <span className="text-xs sm:text-sm font-medium">Latest</span>
                  </div>
                )}
                
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1 pr-4">
                      <h3 className="text-xl sm:text-2xl font-light text-slate-900 mb-2 tracking-wide">
                        {letter.year} {letter.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm tracking-wide">
                        {letter.date} • {letter.size}
                      </p>
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600" />
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => window.open(letter.link, '_blank')}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3 sm:py-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl hover:from-slate-800 hover:to-slate-700 transition-all duration-300 font-light tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
                  >
                    <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                    Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidiaries Section */}
      <section id="subsidiaries" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-4 sm:mb-6 tracking-tight">
              Our <span className="text-amber-600">Companies</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed px-4 sm:px-0">
              Market-leading businesses across diverse industries, united by operational excellence, 
              strong management teams, and a long-term growth focus.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {subsidiaries.map((company, index) => {
              const IconComponent = company.icon;
              return (
                <a 
                  key={company.name} 
                  href={company.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 overflow-hidden hover:border-amber-200"
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1 pr-4">
                        <h3 className="text-xl sm:text-2xl font-light text-slate-900 mb-2 tracking-wide">
                          {company.name}
                        </h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs sm:text-sm font-medium tracking-wide">
                          {company.sector}
                        </span>
                      </div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                    </div>
                    
                    <p className="text-sm sm:text-base text-slate-600 mb-6 font-light leading-relaxed">
                      {company.description}
                    </p>
                    
                    <div className="text-amber-600 hover:text-amber-700 transition-colors duration-200 flex items-center gap-2 text-sm font-light tracking-wide group">
                      Learn More 
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-4 sm:mb-6 tracking-tight">
              Latest <span className="text-amber-600">News</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed px-4 sm:px-0">
              Stay informed about company developments, earnings releases, and strategic initiatives 
              that drive our continued growth.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {[
              {
                date: 'May 4, 2024',
                title: 'Q1 2024 Earnings Report Released',
                summary: 'Berkshire Hathaway reports first quarter financial results with operating earnings of $11.22 billion.',
                link: 'https://www.berkshirehathaway.com/news/may0424.pdf',
                featured: true
              },
              {
                date: 'April 30, 2024',
                title: '2024 Annual Shareholders Meeting Materials',
                summary: 'Official documents and information for the upcoming 2024 Annual Meeting of Shareholders.',
                link: 'https://www.berkshirehathaway.com/sharehold.html',
                featured: false
              },
              {
                date: 'February 24, 2024',
                title: '2023 Annual Report and Shareholder Letter',
                summary: 'Warren Buffett\'s annual letter to shareholders and complete 2023 financial report.',
                link: 'https://www.berkshirehathaway.com/2023ar/2023ar.pdf',
                featured: false
              },
              {
                date: 'November 3, 2023',
                title: 'Q3 2023 Earnings Report',
                summary: 'Third quarter financial results showing operating earnings of $10.76 billion.',
                link: 'https://www.berkshirehathaway.com/qtrly/3rdqtr23.pdf',
                featured: false
              }
            ].map((news, index) => (
              <div key={index} className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 overflow-hidden ${
                news.featured ? 'ring-2 ring-amber-200' : ''
              }`}>
                {news.featured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-bl-2xl z-10">
                    <span className="text-xs sm:text-sm font-medium">Latest</span>
                  </div>
                )}
                
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs sm:text-sm font-medium tracking-wide mb-3 sm:mb-4">
                        {news.date}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-light text-slate-900 mb-3 tracking-wide pr-4">
                        {news.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 font-light leading-relaxed">
                        {news.summary}
                      </p>
                      <a 
                        href={news.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-700 transition-colors duration-200 flex items-center gap-2 text-sm font-light tracking-wide group"
                      >
                        Read Full Article 
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All News Button */}
          <div className="text-center mt-12 sm:mt-16">
            <a
              href="https://www.berkshirehathaway.com/reports.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-slate-300 text-sm font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-colors duration-200"
            >
              View All News Releases
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-4 sm:mb-6 tracking-tight">
              Contact <span className="text-amber-600">Us</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed px-4 sm:px-0">
              Connect with our team for investor relations, media inquiries, or any questions 
              about our company and investment philosophy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="group bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-light text-slate-900 mb-4 sm:mb-6 tracking-wide">
                  Investor Relations
                </h3>
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  <p>Email: investor.relations@berkshirehathaway.com</p>
                  <p>Phone: (402) 346-1400</p>
                  <p>Address: 3555 Farnam Street, Omaha, NE 68131</p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-light text-slate-900 mb-4 sm:mb-6 tracking-wide">
                  Media Relations
                </h3>
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
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
      <footer className="bg-slate-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-light text-white mb-2 tracking-wide">
              Berkshire Hathaway <span className="text-amber-400">Inc.</span>
            </h3>
            <p className="text-slate-400 mb-6 sm:mb-8 font-light text-sm sm:text-base">
              © 2025 Berkshire Hathaway Inc. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200 font-light tracking-wide text-sm sm:text-base">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200 font-light tracking-wide text-sm sm:text-base">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200 font-light tracking-wide text-sm sm:text-base">
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