"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  Play, 
  Plus, 
  Search, 
  User, 
  Filter,
  X,
  Star,
  Clock,
  Calendar,
  ChevronDown,
  ArrowUp
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NovaStreamMoviesPage() {
  const [activeNavItem, setActiveNavItem] = useState("Movies");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState(["Action"]);
  const [selectedYear, setSelectedYear] = useState("2023-2024");
  const [imdbRating, setImdbRating] = useState([7]);
  const [selectedQuality, setSelectedQuality] = useState("4K");
  const [selectedLanguage, setSelectedLanguage] = useState("English Dubbed");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const featuredRef = useRef<HTMLElement>(null);
  const trendingRef = useRef<HTMLElement>(null);
  const viewedRef = useRef<HTMLElement>(null);
  const imdbRef = useRef<HTMLElement>(null);

  const sections = [
    { ref: featuredRef, name: "Featured", id: "featured" },
    { ref: trendingRef, name: "Trending", id: "trending" },
    { ref: viewedRef, name: "Most Viewed", id: "viewed" },
    { ref: imdbRef, name: "IMDb 8+", id: "imdb" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollTop(scrollPosition > 500);

      // Update active section based on scroll position
      sections.forEach((section, index) => {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
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

  const navItems = ["Home", "Movies", "TV Shows", "My List", "About"];
  
  const categories = ["Action", "Adventure", "Comedy", "Drama", "Sci-Fi", "Thriller", "Horror", "Romance"];
  const yearRanges = ["2023-2024", "2020-2022", "2015-2019", "2010-2014", "2005-2009"];
  const qualities = ["4K", "HD 1080P", "HD 720P"];
  const languages = ["English Dubbed", "Original Audio", "Multi-Language"];

  const featuredMovie = {
    title: "Dune: Part Two",
    year: "2024",
    genre: "Action, Adventure, Drama, Sci-Fi",
    synopsis: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
    rating: "8.5",
    duration: "166 min",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&crop=center"
  };

  const relatedMovies = [
    { 
      title: "Migration", 
      quality: "4K", 
      rating: "6.7",
      image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop&crop=center"
    },
    { 
      title: "Poor Things", 
      quality: "4K", 
      rating: "7.8",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=600&fit=crop&crop=center"
    },
    { 
      title: "The Zone of Interest", 
      quality: "HD", 
      rating: "7.4",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop&crop=center"
    }
  ];

  const trendingMovies = [
    { 
      title: "Dune: Part Two", 
      quality: "4K", 
      rating: "8.5",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop&crop=center"
    },
    { 
      title: "Barbie", 
      quality: "4K", 
      rating: "7.0",
      image: "https://images.unsplash.com/photo-1489599112873-1285b4be4238?w=400&h=600&fit=crop&crop=center"
    },
    { 
      title: "Oppenheimer", 
      quality: "4K", 
      rating: "8.3",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop&crop=center"
    },
    { 
      title: "Spider-Man: Across the Spider-Verse", 
      quality: "4K", 
      rating: "8.7",
      image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop&crop=center"
    },
    { 
      title: "Guardians of the Galaxy Vol. 3", 
      quality: "4K", 
      rating: "7.9",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop&crop=center"
    },
    { 
      title: "John Wick: Chapter 4", 
      quality: "4K", 
      rating: "7.7",
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop&crop=center"
    },
    { 
      title: "Mission: Impossible – Dead Reckoning Part One", 
      quality: "4K", 
      rating: "7.7",
      image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&h=600&fit=crop&crop=center"
    }
  ];

  const mostViewedMovies = [
    { 
      title: "Killers of the Flower Moon", 
      quality: "4K", 
      rating: "7.6",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop&crop=center"
    },
    { 
      title: "Past Lives", 
      quality: "HD", 
      rating: "7.8",
      image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=600&fit=crop&crop=center"
    },
    { 
      title: "Elemental", 
      quality: "4K", 
      rating: "7.0",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop&crop=center"
    },
    { 
      title: "The Little Mermaid", 
      quality: "4K", 
      rating: "7.2",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=600&fit=crop&crop=center"
    },
    { 
      title: "Fast X", 
      quality: "4K", 
      rating: "5.8",
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop&crop=center"
    },
    { 
      title: "Indiana Jones and the Dial of Destiny", 
      quality: "4K", 
      rating: "6.5",
      image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&h=600&fit=crop&crop=center"
    }
  ];

  const imdb8PlusMovies = [
    { 
      title: "The Godfather", 
      quality: "4K", 
      rating: "9.2",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop&crop=center"
    },
    { 
      title: "The Dark Knight", 
      quality: "4K", 
      rating: "9.0",
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop&crop=center"
    },
    { 
      title: "Dune: Part Two", 
      quality: "4K", 
      rating: "8.5",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop&crop=center"
    },
    { 
      title: "Schindler's List", 
      quality: "4K", 
      rating: "8.9",
      image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=600&fit=crop&crop=center"
    },
    { 
      title: "Pulp Fiction", 
      quality: "4K", 
      rating: "8.9",
      image: "https://images.unsplash.com/photo-1489599112873-1285b4be4238?w=400&h=600&fit=crop&crop=center"
    },
    { 
      title: "The Lord of the Rings: The Return of the King", 
      quality: "4K", 
      rating: "8.9",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop&crop=center"
    },
    { 
      title: "Forrest Gump", 
      quality: "4K", 
      rating: "8.8",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop&crop=center"
    }
  ];

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearSelections = () => {
    setSelectedCategories([]);
    setSelectedYear("");
    setImdbRating([6]);
    setSelectedQuality("");
    setSelectedLanguage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white">
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

      <div className="flex relative">
        {/* Left Sidebar - Filters */}
        <div className={`fixed left-0 top-20 h-full w-80 bg-black/40 backdrop-blur-sm border-r border-white/10 p-6 overflow-y-auto z-40 transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Filters</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setSidebarOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-medium mb-3 text-purple-400">Categories</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategories.includes(category) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleCategory(category)}
                    className={selectedCategories.includes(category) 
                      ? "bg-purple-600 hover:bg-purple-700" 
                      : "border-white/20 text-gray-300 hover:bg-white/10"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Year Filter */}
            <div>
              <h4 className="font-medium mb-3 text-purple-400">Year</h4>
              <div className="space-y-2">
                {yearRanges.map((year) => (
                  <Button
                    key={year}
                    variant={selectedYear === year ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedYear(year)}
                    className={`w-full justify-start ${selectedYear === year
                      ? "bg-purple-600 hover:bg-purple-700" 
                      : "border-white/20 text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    {year}
                  </Button>
                ))}
              </div>
            </div>

            {/* IMDb Rating */}
            <div>
              <h4 className="font-medium mb-3 text-purple-400">IMDb Rating</h4>
              <div className="space-y-3">
                <Slider
                  value={imdbRating}
                  onValueChange={setImdbRating}
                  max={10}
                  min={1}
                  step={0.1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-400">
                  <span>1</span>
                  <span className="text-purple-400 font-medium">{imdbRating[0]}+</span>
                  <span>10</span>
                </div>
              </div>
            </div>

            {/* Movie Quality */}
            <div>
              <h4 className="font-medium mb-3 text-purple-400">Movie Quality</h4>
              <div className="space-y-2">
                {qualities.map((quality) => (
                  <Button
                    key={quality}
                    variant={selectedQuality === quality ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedQuality(quality)}
                    className={`w-full justify-start ${selectedQuality === quality
                      ? "bg-purple-600 hover:bg-purple-700" 
                      : "border-white/20 text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    {quality}
                  </Button>
                ))}
              </div>
            </div>

            {/* Language */}
            <div>
              <h4 className="font-medium mb-3 text-purple-400">Language</h4>
              <div className="space-y-2">
                {languages.map((language) => (
                  <Button
                    key={language}
                    variant={selectedLanguage === language ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLanguage(language)}
                    className={`w-full justify-start ${selectedLanguage === language
                      ? "bg-purple-600 hover:bg-purple-700" 
                      : "border-white/20 text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    {language}
                  </Button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <Button 
                variant="outline" 
                onClick={clearSelections}
                className="w-full border-white/20 text-gray-300 hover:bg-white/10"
              >
                Clear Selections
              </Button>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className={`flex-1 transition-all ${sidebarOpen ? 'ml-80' : 'ml-0'} p-6`}>
          {/* Toggle Sidebar Button */}
          {!sidebarOpen && (
            <Button
              onClick={() => setSidebarOpen(true)}
              className="fixed left-4 top-24 z-30 bg-purple-600 hover:bg-purple-700"
              size="icon"
            >
              <Filter className="w-4 h-4" />
            </Button>
          )}

          {/* Featured Section */}
          <section ref={featuredRef} id="featured" className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Featured Movie */}
              <div className="lg:col-span-2">
                <Card className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-amber-500/30 overflow-hidden relative">
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src={featuredMovie.image} 
                      alt={featuredMovie.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-4xl font-bold mb-2">{featuredMovie.title}</h2>
                        <div className="flex items-center space-x-4 text-gray-300 mb-4">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {featuredMovie.year}
                          </span>
                          <span className="flex items-center">
                            <Star className="w-4 h-4 mr-1 text-yellow-400" />
                            {featuredMovie.rating}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {featuredMovie.duration}
                          </span>
                        </div>
                        <Badge variant="outline" className="border-amber-500 text-amber-400 mb-4">
                          {featuredMovie.genre}
                        </Badge>
                      </div>
                      <Badge className="bg-purple-600">4K</Badge>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredMovie.synopsis}
                    </p>
                    
                    <div className="flex space-x-4">
                      <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                        See More Details
                      </Button>
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        <Play className="w-4 h-4 mr-2" />
                        Watch Movie
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Related Movies */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">You might also like</h3>
                {relatedMovies.map((movie, index) => (
                  <Card key={index} className="bg-black/30 border-white/10 hover:bg-black/40 transition-colors cursor-pointer">
                    <CardContent className="p-0">
                      <div className="flex">
                        <div className="w-20 h-28 flex-shrink-0">
                          <img 
                            src={movie.image} 
                            alt={movie.title}
                            className="w-full h-full object-cover rounded-l"
                          />
                        </div>
                        <div className="p-4 flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{movie.title}</h4>
                            <Badge className={movie.quality === "4K" ? "bg-purple-600" : "bg-gray-600"}>
                              {movie.quality}
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <Star className="w-3 h-3 mr-1 text-yellow-400" />
                            {movie.rating}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Movie Sections */}
          <div className="space-y-12">
            {/* Trending This Week */}
            <section ref={trendingRef} id="trending">
              <h3 className="text-2xl font-semibold mb-6">Trending This Week</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {trendingMovies.map((movie, index) => (
                  <Card key={index} className="bg-black/30 border-white/10 hover:scale-105 transition-all cursor-pointer group">
                    <CardContent className="p-0">
                      <div className="aspect-[2/3] rounded-t-lg overflow-hidden relative">
                        <img 
                          src={movie.image} 
                          alt={movie.title}
                          className="w-full h-full object-cover"
                        />
                        <Badge className={`absolute top-2 right-2 ${movie.quality === "4K" ? "bg-purple-600" : "bg-gray-600"}`}>
                          {movie.quality}
                        </Badge>
                      </div>
                      <div className="p-3">
                        <h4 className="font-medium text-sm mb-1 group-hover:text-purple-400 transition-colors">
                          {movie.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-400">
                          <Star className="w-3 h-3 mr-1 text-yellow-400" />
                          {movie.rating}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Most Viewed */}
            <section ref={viewedRef} id="viewed">
              <h3 className="text-2xl font-semibold mb-6">Most Viewed</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {mostViewedMovies.map((movie, index) => (
                  <Card key={index} className="bg-black/30 border-white/10 hover:scale-105 transition-all cursor-pointer group">
                    <CardContent className="p-0">
                      <div className="aspect-[2/3] rounded-t-lg overflow-hidden relative">
                        <img 
                          src={movie.image} 
                          alt={movie.title}
                          className="w-full h-full object-cover"
                        />
                        <Badge className={`absolute top-2 right-2 ${movie.quality === "4K" ? "bg-purple-600" : "bg-gray-600"}`}>
                          {movie.quality}
                        </Badge>
                      </div>
                      <div className="p-3">
                        <h4 className="font-medium text-sm mb-1 group-hover:text-purple-400 transition-colors">
                          {movie.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-400">
                          <Star className="w-3 h-3 mr-1 text-yellow-400" />
                          {movie.rating}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* IMDb 8+ */}
            <section ref={imdbRef} id="imdb">
              <h3 className="text-2xl font-semibold mb-6">IMDb 8+</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {imdb8PlusMovies.map((movie, index) => (
                  <Card key={index} className="bg-black/30 border-white/10 hover:scale-105 transition-all cursor-pointer group">
                    <CardContent className="p-0">
                      <div className="aspect-[2/3] rounded-t-lg overflow-hidden relative">
                        <img 
                          src={movie.image} 
                          alt={movie.title}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-2 right-2 bg-yellow-600">
                          {movie.quality}
                        </Badge>
                      </div>
                      <div className="p-3">
                        <h4 className="font-medium text-sm mb-1 group-hover:text-purple-400 transition-colors">
                          {movie.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-400">
                          <Star className="w-3 h-3 mr-1 text-yellow-400" />
                          {movie.rating}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </main>

        {/* Scroll Navigation */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === index
                  ? 'bg-purple-500 border-purple-500 scale-125'
                  : 'bg-transparent border-white/30 hover:border-purple-400'
              }`}
              title={section.name}
            />
          ))}
        </div>

        {/* Scroll to Next Section */}
        <button
          onClick={scrollToNext}
          className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 p-3 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-purple-500/20 transition-all duration-300 animate-bounce"
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </button>

        {/* Scroll to Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-purple-500 hover:bg-purple-600 transition-all duration-300 shadow-lg"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </button>
        )}
      </div>
    </div>
  );
}