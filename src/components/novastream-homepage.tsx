"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Play, 
  Plus, 
  Search, 
  User, 
  ChevronLeft, 
  ChevronRight,
  Star,
  ChevronDown,
  ChevronUp,
  ArrowUp
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NovaStreamHomepage() {
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  
  const heroRef = useRef<HTMLElement>(null);
  const featuredRef = useRef<HTMLElement>(null);
  const moviesRef = useRef<HTMLElement>(null);

  const sections = [
    { ref: heroRef, name: "Hero", id: "hero" },
    { ref: featuredRef, name: "Featured", id: "featured" },
    { ref: moviesRef, name: "Movies", id: "movies" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollTop(scrollPosition > 500);

      // Update active section based on scroll position
      sections.forEach((section, index) => {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    sections[index].ref.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToNext = () => {
    const nextIndex = (activeSection + 1) % sections.length;
    scrollToSection(nextIndex);
  };

  const featuredMovies = [
    {
      title: "Dune: Part Two",
      description: "Paul Atreides unites with Chani and the Fremen while on a path of revenge.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop&crop=center"
    },
    {
      title: "The Creator",
      description: "A ex-special forces agent hunts the Creator of advanced AI.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop&crop=center"
    },
    {
      title: "Oppenheimer", 
      description: "The story of American scientist J. Robert Oppenheimer.",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop&crop=center"
    },
    {
      title: "Barbie",
      description: "Barbie and Ken are having the time of their lives.",
      image: "https://images.unsplash.com/photo-1489599112873-1285b4be4238?w=400&h=600&fit=crop&crop=center"
    }
  ];

  const carouselMovies = [
    {
      title: "Dune",
      rating: "8.1",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=center"
    },
    {
      title: "Inception",
      rating: "8.8",
      image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&h=600&fit=crop&crop=center"
    },
    {
      title: "Interstellar",
      rating: "8.6",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop&crop=center"
    },
    {
      title: "The Dark Knight",
      rating: "9.0",
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop&crop=center"
    },
    {
      title: "Blade Runner 2049",
      rating: "8.0",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop&crop=center"
    },
    {
      title: "Mad Max: Fury Road",
      rating: "8.1",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop&crop=center"
    },
    {
      title: "Arrival",
      rating: "7.9",
      image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=600&fit=crop&crop=center"
    },
    {
      title: "Ex Machina",
      rating: "7.7",
      image: "https://images.unsplash.com/photo-1489599112873-1285b4be4238?w=400&h=600&fit=crop&crop=center"
    },
    {
      title: "The Matrix",
      rating: "8.7",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=600&fit=crop&crop=center"
    }
  ];

  const navItems = ["Home", "Movies", "TV Shows", "My List", "About"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white overflow-hidden">
      {/* Header Navigation */}
      <header className="relative z-50 flex items-center justify-between p-6 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            NOVASTREAM
          </h1>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/novastream" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveNavItem(item)}
                className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                  activeNavItem === item 
                    ? "text-purple-400 border-b-2 border-purple-400 pb-1" 
                    : "text-gray-300"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search For Movies..."
              className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-400"
            />
          </div>
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center"
              alt="Dune: Part Two Background"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 z-10" />
          
          {/* Character Image */}
          <div className="absolute right-0 top-0 h-full w-1/2 z-15">
            <div className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop&crop=center"
                alt="Dune Character"
                fill
                className="object-cover object-center opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-amber-600/20 to-black/50" />
            </div>
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-6xl font-bold leading-tight">
                  DUNE:
                  <br />
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    PART TWO
                  </span>
                </h2>
                <p className="text-purple-400 text-lg font-medium">Now Streaming</p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                  <Play className="w-5 h-5 mr-2" />
                  WATCH NOW
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  MY LIST
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content Section */}
        <section ref={featuredRef} id="featured" className="relative z-20 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold mb-8 text-center">Featured Content</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Movie Information Card */}
              <Card className="bg-black/40 backdrop-blur-sm border-white/10">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-purple-400 font-semibold mb-2">GENRE</h3>
                    <p className="text-gray-300">Sci-fi, Adventure</p>
                  </div>
                  
                  <div>
                    <h3 className="text-purple-400 font-semibold mb-2">DIRECTOR</h3>
                    <p className="text-gray-300">Denis Villeneuve</p>
                  </div>
                  
                  <div>
                    <h3 className="text-purple-400 font-semibold mb-2">STORYLINE</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Paul Atreides unites with Chani and the Fremen while seeking revenge 
                      against the conspirators who destroyed his family.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-purple-400 font-semibold mb-2">STARS</h3>
                    <p className="text-gray-300 text-sm">
                      Timothée Chalamet, Zendaya, Rebecca Ferguson, Josh Brolin
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Right Column - Featured Playlist */}
              <div>
                <Card className="bg-black/30 backdrop-blur-sm border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 text-center">Featured Playlist</h3>
                    
                    <div className="space-y-4">
                      {featuredMovies.map((movie, index) => (
                        <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                          <div className="w-16 h-24 flex-shrink-0 rounded-md overflow-hidden">
                            <img 
                              src={movie.image} 
                              alt={movie.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-purple-400 mb-1">{movie.title}</h4>
                            <p className="text-sm text-gray-400 line-clamp-2">{movie.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-center space-x-4 mt-6">
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      
                      <div className="flex space-x-2">
                        {[0, 1, 2].map((dot) => (
                          <div 
                            key={dot} 
                            className={`w-2 h-2 rounded-full ${dot === 0 ? 'bg-purple-400' : 'bg-gray-600'}`} 
                          />
                        ))}
                      </div>
                      
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Carousel */}
        <section ref={moviesRef} id="movies" className="relative z-20 pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-2xl font-semibold mb-6">Popular Movies</h3>
            
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {carouselMovies.map((movie, index) => (
                <div 
                  key={index} 
                  className={`flex-shrink-0 relative group cursor-pointer transition-all duration-300 ${
                    index === 2 ? 'scale-100' : 'scale-95 opacity-70'
                  } hover:scale-105 hover:opacity-100`}
                >
                  <div className="w-48 h-72 rounded-lg overflow-hidden relative">
                    <img 
                      src={movie.image} 
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="font-semibold text-white mb-1">{movie.title}</h4>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-400">{movie.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Scroll Navigation */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-3">
          {sections.map((section, index) => (
            <Button
              key={section.id}
              onClick={() => scrollToSection(index)}
              variant="ghost"
              size="sm"
              className={`w-3 h-3 p-0 rounded-full transition-all duration-300 ${
                activeSection === index 
                  ? 'bg-purple-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              title={section.name}
            />
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-700 rounded-full w-12 h-12 p-0"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}

      {/* Scroll Down Indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
        <Button
          onClick={scrollToNext}
          variant="ghost"
          className="text-white/70 hover:text-white flex flex-col items-center space-y-1"
        >
          <span className="text-xs">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}