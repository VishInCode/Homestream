"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  Search, 
  User, 
  Menu,
  ChevronDown,
  ChevronRight,
  Play,
  Info,
  Star,
  Clock,
  Calendar
} from "lucide-react";
import Link from "next/link";

export default function NovaStreamTVShowsPage() {
  const [activeNavItem, setActiveNavItem] = useState("TV Shows");
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["Drama"]);
  const [selectedYears, setSelectedYears] = useState<string[]>(["2023-2024"]);
  const [selectedQualities, setSelectedQualities] = useState<string[]>([]);
  const [imdbRating, setImdbRating] = useState([7]);
  const [hoveredShow, setHoveredShow] = useState<number | null>(null);

  const navItems = ["Home", "Movies", "TV Shows", "My List", "About"];

  const categories = [
    "Drama", "Comedy", "Sci-Fi & Fantasy", "Crime", "Animation", 
    "Documentary", "Thriller", "Romance", "Action", "Horror"
  ];

  const years = ["2023-2024", "2020-2022", "2015-2019", "2010-2014", "2000-2009"];
  const qualities = ["4K", "HD 1080P", "HD 720P"];

  const featuredShow = {
    title: "The Witcher",
    year: "2019",
    genre: "Fantasy, Drama, Action",
    rating: "8.0",
    seasons: "3 Seasons",
    synopsis: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop&crop=center"
  };

  const featuredSideShows = [
    {
      title: "The Last of Us",
      year: "2023",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop&crop=center"
    },
    {
      title: "Severance",
      year: "2022",
      image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=300&h=400&fit=crop&crop=center"
    }
  ];

  const trendingShows = [
    {
      id: 1,
      title: "House of the Dragon",
      year: "2022",
      rating: "8.4",
      quality: "4K",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "The Mandalorian",
      year: "2019",
      rating: "8.7",
      quality: "4K",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Ted Lasso",
      year: "2020",
      rating: "8.8",
      quality: "HD",
      image: "https://images.unsplash.com/photo-1489599112873-1285b4be4238?w=400&h=600&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "The Bear",
      year: "2022",
      rating: "8.6",
      quality: "HD",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=600&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Succession",
      year: "2018",
      rating: "8.8",
      quality: "4K",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "Arcane",
      year: "2021",
      rating: "9.0",
      quality: "4K",
      image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop&crop=center"
    }
  ];

  const newSeasons = [
    {
      id: 7,
      title: "Loki",
      year: "2021",
      rating: "8.2",
      quality: "4K",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop&crop=center"
    },
    {
      id: 8,
      title: "The Boys",
      year: "2019",
      rating: "8.7",
      quality: "4K",
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop&crop=center"
    },
    {
      id: 9,
      title: "Stranger Things",
      year: "2016",
      rating: "8.7",
      quality: "4K",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop&crop=center"
    },
    {
      id: 10,
      title: "The Crown",
      year: "2016",
      rating: "8.6",
      quality: "4K",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop&crop=center"
    },
    {
      id: 11,
      title: "Euphoria",
      year: "2019",
      rating: "8.4",
      quality: "HD",
      image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&h=600&fit=crop&crop=center"
    },
    {
      id: 12,
      title: "Wednesday",
      year: "2022",
      rating: "8.1",
      quality: "4K",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=600&fit=crop&crop=center"
    }
  ];

  const criticallyAcclaimed = [
    {
      id: 13,
      title: "Breaking Bad",
      year: "2008",
      rating: "9.5",
      quality: "4K",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop&crop=center"
    },
    {
      id: 14,
      title: "The Sopranos",
      year: "1999",
      rating: "9.2",
      quality: "HD",
      image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=600&fit=crop&crop=center"
    },
    {
      id: 15,
      title: "The Wire",
      year: "2002",
      rating: "9.3",
      quality: "HD",
      image: "https://images.unsplash.com/photo-1489599112873-1285b4be4238?w=400&h=600&fit=crop&crop=center"
    },
    {
      id: 16,
      title: "Better Call Saul",
      year: "2015",
      rating: "8.9",
      quality: "4K",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=600&fit=crop&crop=center"
    },
    {
      id: 17,
      title: "True Detective",
      year: "2014",
      rating: "8.9",
      quality: "4K",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop&crop=center"
    },
    {
      id: 18,
      title: "Game of Thrones",
      year: "2011",
      rating: "9.2",
      quality: "4K",
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop&crop=center"
    }
  ];

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleYear = (year: string) => {
    setSelectedYears(prev =>
      prev.includes(year)
        ? prev.filter(y => y !== year)
        : [...prev, year]
    );
  };

  const toggleQuality = (quality: string) => {
    setSelectedQualities(prev =>
      prev.includes(quality)
        ? prev.filter(q => q !== quality)
        : [...prev, quality]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedYears([]);
    setSelectedQualities([]);
    setImdbRating([0]);
  };

  const ShowCard = ({ show, section }: { show: any; section: string }) => (
    <div
      key={show.id}
      className="group relative cursor-pointer"
      onMouseEnter={() => setHoveredShow(show.id)}
      onMouseLeave={() => setHoveredShow(null)}
    >
      <div className="relative overflow-hidden rounded-lg bg-slate-700 aspect-[2/3] transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
        <img
          src={show.image}
          alt={show.title}
          className="w-full h-full object-cover"
        />
        
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
          hoveredShow === show.id ? "opacity-100" : "opacity-0"
        }`}>
          <Button size="icon" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm w-16 h-16 rounded-full">
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </Button>
        </div>

        <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded flex items-center space-x-1">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-semibold">{show.rating}</span>
        </div>

        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-blue-600/80 text-white text-xs">
            {show.quality}
          </Badge>
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <h3 className="font-semibold text-sm leading-tight line-clamp-2 group-hover:text-blue-400 transition-colors">
          {show.title}
        </h3>
        <p className="text-xs text-gray-400">{show.year}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Header */}
      <header className="relative z-50 flex items-center justify-between p-6 border-b border-white/10">
        <Link href="/novastream">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-wide">
            NOVASTREAM
          </h1>
        </Link>

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
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search TV shows..."
              className="pl-10 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
            />
          </div>
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
            <User className="w-5 h-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center space-x-2 text-gray-300 hover:text-white md:hidden"
          >
            <span className="text-sm font-medium">Menu</span>
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 right-6 z-50 bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg p-6 min-w-48 md:hidden">
          <nav className="space-y-3">
            {navItems.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/novastream" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => {
                  setActiveNavItem(item);
                  setMenuOpen(false);
                }}
                className={`block text-sm font-medium transition-colors hover:text-blue-400 ${
                  activeNavItem === item ? "text-blue-400" : "text-gray-300"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 overflow-hidden border-r border-white/10`}>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-gray-400 hover:text-white"
              >
                <ChevronRight className={`w-5 h-5 transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} />
              </Button>
            </div>

            {/* Categories */}
            <Collapsible defaultOpen>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                <span className="font-medium">Categories</span>
                <ChevronDown className="w-4 h-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategories.includes(category) ? "secondary" : "ghost"}
                    onClick={() => toggleCategory(category)}
                    className="w-full justify-start text-sm h-8"
                  >
                    {category}
                  </Button>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Year */}
            <Collapsible defaultOpen>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                <span className="font-medium">Year</span>
                <ChevronDown className="w-4 h-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 space-y-2">
                {years.map((year) => (
                  <Button
                    key={year}
                    variant={selectedYears.includes(year) ? "secondary" : "ghost"}
                    onClick={() => toggleYear(year)}
                    className="w-full justify-start text-sm h-8"
                  >
                    {year}
                  </Button>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* IMDb Rating */}
            <Collapsible defaultOpen>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                <span className="font-medium">IMDb Rating</span>
                <ChevronDown className="w-4 h-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 space-y-3">
                <div className="px-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Minimum Rating</span>
                    <span className="text-sm font-medium">{imdbRating[0]}+</span>
                  </div>
                  <Slider
                    value={imdbRating}
                    onValueChange={setImdbRating}
                    max={10}
                    min={0}
                    step={0.1}
                    className="w-full"
                  />
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Quality */}
            <Collapsible defaultOpen>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                <span className="font-medium">Quality</span>
                <ChevronDown className="w-4 h-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 space-y-2">
                {qualities.map((quality) => (
                  <Button
                    key={quality}
                    variant={selectedQualities.includes(quality) ? "secondary" : "ghost"}
                    onClick={() => toggleQuality(quality)}
                    className="w-full justify-start text-sm h-8"
                  >
                    {quality}
                  </Button>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <Button
                variant="outline"
                onClick={clearFilters}
                className="w-full border-white/30 text-white hover:bg-white/10"
              >
                Clear Selections
              </Button>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Filter
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Show Sidebar Toggle for Mobile */}
          {!sidebarOpen && (
            <Button
              variant="outline"
              onClick={() => setSidebarOpen(true)}
              className="mb-6 border-white/30 text-white hover:bg-white/10"
            >
              <Menu className="w-4 h-4 mr-2" />
              Show Filters
            </Button>
          )}

          {/* Featured Show Section */}
          <div className="mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Featured Show */}
              <div className="lg:col-span-2">
                <div className="relative bg-gradient-to-r from-slate-800/50 to-blue-900/30 rounded-xl p-8 overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <img
                      src={featuredShow.image}
                      alt={featuredShow.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-2 mb-4">
                      <Badge variant="secondary" className="bg-red-600/80 text-white">FEATURED</Badge>
                      <Badge variant="outline" className="border-white/30 text-white">4K</Badge>
                    </div>
                    <h2 className="text-4xl font-bold mb-2">{featuredShow.title}</h2>
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-300">
                      <span>{featuredShow.year}</span>
                      <span>•</span>
                      <span>{featuredShow.genre}</span>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span>{featuredShow.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{featuredShow.seasons}</span>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed max-w-2xl">
                      {featuredShow.synopsis}
                    </p>
                    <div className="flex space-x-4">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8">
                        <Play className="w-5 h-5 mr-2 fill-white" />
                        Watch Now
                      </Button>
                      <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                        <Info className="w-5 h-5 mr-2" />
                        See More Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side Featured Shows */}
              <div className="space-y-4">
                {featuredSideShows.map((show, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="flex space-x-4 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                      <div className="w-20 h-28 flex-shrink-0 overflow-hidden rounded-md">
                        <img
                          src={show.image}
                          alt={show.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                          {show.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-2">{show.year}</p>
                        <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-8">
                          <Play className="w-3 h-3 mr-1 fill-white" />
                          Watch
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trending This Week */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Trending This Week</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {trendingShows.map((show) => (
                <ShowCard key={show.id} show={show} section="trending" />
              ))}
            </div>
          </div>

          {/* New Seasons Added */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">New Seasons Added</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {newSeasons.map((show) => (
                <ShowCard key={show.id} show={show} section="new-seasons" />
              ))}
            </div>
          </div>

          {/* Critically Acclaimed Series */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Critically Acclaimed Series</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {criticallyAcclaimed.map((show) => (
                <ShowCard key={show.id} show={show} section="acclaimed" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}