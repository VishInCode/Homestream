"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  User, 
  Menu,
  Play,
  X,
  ChevronDown,
  Star,
  Calendar,
  Clock
} from "lucide-react";
import Link from "next/link";

export default function NovaStreamMyListPage() {
  const [activeNavItem, setActiveNavItem] = useState("My List");
  const [menuOpen, setMenuOpen] = useState(false);
  const [sortBy, setSortBy] = useState("date-added");
  const [hoveredMovie, setHoveredMovie] = useState<number | null>(null);

  const navItems = ["Home", "Movies", "TV Shows", "My List", "About"];

  const myListMovies = [
    {
      id: 1,
      title: "Dune: Part Two",
      year: "2024",
      rating: "8.5",
      duration: "166 min",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=600&fit=crop&crop=center",
      dateAdded: "2024-01-15"
    },
    {
      id: 2,
      title: "Oppenheimer",
      year: "2023",
      rating: "8.3",
      duration: "180 min",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop&crop=center",
      dateAdded: "2024-01-10"
    },
    {
      id: 3,
      title: "Spider-Man: Across the Spider-Verse",
      year: "2023",
      rating: "8.7",
      duration: "140 min",
      image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop&crop=center",
      dateAdded: "2024-01-08"
    },
    {
      id: 4,
      title: "Wonka",
      year: "2023",
      rating: "7.1",
      duration: "116 min",
      image: "https://images.unsplash.com/photo-1489599112873-1285b4be4238?w=400&h=600&fit=crop&crop=center",
      dateAdded: "2024-01-05"
    },
    {
      id: 5,
      title: "The Creator",
      year: "2023",
      rating: "6.8",
      duration: "133 min",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop&crop=center",
      dateAdded: "2024-01-03"
    },
    {
      id: 6,
      title: "Past Lives",
      year: "2023",
      rating: "7.8",
      duration: "105 min",
      image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=600&fit=crop&crop=center",
      dateAdded: "2024-01-01"
    },
    {
      id: 7,
      title: "Guardians of the Galaxy Vol. 3",
      year: "2023",
      rating: "7.9",
      duration: "150 min",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop&crop=center",
      dateAdded: "2023-12-28"
    },
    {
      id: 8,
      title: "John Wick: Chapter 4",
      year: "2023",
      rating: "7.7",
      duration: "169 min",
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop&crop=center",
      dateAdded: "2023-12-25"
    },
    {
      id: 9,
      title: "The Batman",
      year: "2022",
      rating: "7.8",
      duration: "176 min",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop&crop=center",
      dateAdded: "2023-12-20"
    },
    {
      id: 10,
      title: "Avatar: The Way of Water",
      year: "2022",
      rating: "7.6",
      duration: "192 min",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=center",
      dateAdded: "2023-12-15"
    },
    {
      id: 11,
      title: "Top Gun: Maverick",
      year: "2022",
      rating: "8.3",
      duration: "130 min",
      image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&h=600&fit=crop&crop=center",
      dateAdded: "2023-12-10"
    },
    {
      id: 12,
      title: "Everything Everywhere All at Once",
      year: "2022",
      rating: "7.8",
      duration: "139 min",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop&crop=center",
      dateAdded: "2023-12-05"
    }
  ];

  const removeFromList = (movieId: number) => {
    // This would typically update state/database
    console.log(`Removing movie ${movieId} from list`);
  };

  const getSortedMovies = () => {
    const sorted = [...myListMovies];
    switch (sortBy) {
      case "date-added":
        return sorted.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
      case "release-year":
        return sorted.sort((a, b) => parseInt(b.year) - parseInt(a.year));
      case "a-z":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case "rating":
        return sorted.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
      default:
        return sorted;
    }
  };

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
              placeholder="Search..."
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

      {/* Main Content */}
      <main className="px-6 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-2">My List</h2>
            <p className="text-gray-400">{myListMovies.length} movies in your collection</p>
          </div>
          
          {/* Sort Dropdown */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40 bg-white/5 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-white/20">
                <SelectItem value="date-added" className="text-white hover:bg-white/10">
                  Date Added
                </SelectItem>
                <SelectItem value="release-year" className="text-white hover:bg-white/10">
                  Release Year
                </SelectItem>
                <SelectItem value="a-z" className="text-white hover:bg-white/10">
                  A-Z
                </SelectItem>
                <SelectItem value="rating" className="text-white hover:bg-white/10">
                  Rating
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {getSortedMovies().map((movie) => (
            <div
              key={movie.id}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredMovie(movie.id)}
              onMouseLeave={() => setHoveredMovie(null)}
            >
              {/* Movie Poster */}
              <div className="relative overflow-hidden rounded-lg bg-slate-700 aspect-[2/3] transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredMovie === movie.id ? "opacity-100" : "opacity-0"
                }`}>
                  {/* Play Button */}
                  <Button 
                    size="icon" 
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm w-16 h-16 rounded-full"
                  >
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </Button>
                </div>

                {/* Remove Button */}
                <Button
                  onClick={() => removeFromList(movie.id)}
                  size="icon"
                  variant="ghost"
                  className={`absolute top-2 right-2 bg-black/60 hover:bg-red-600/80 backdrop-blur-sm w-8 h-8 transition-opacity duration-300 ${
                    hoveredMovie === movie.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <X className="w-4 h-4 text-white" />
                </Button>

                {/* Rating Badge */}
                <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs font-semibold">{movie.rating}</span>
                </div>
              </div>

              {/* Movie Info */}
              <div className="mt-3 space-y-1">
                <h3 className="font-semibold text-sm leading-tight line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {movie.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{movie.year}</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{movie.duration}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>Added {new Date(movie.dateAdded).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (hidden when list has items) */}
        {myListMovies.length === 0 && (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <User className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Your list is empty</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Add your favorite movies and shows to your list to watch them later.
            </p>
            <Link href="/movies">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                Browse Movies
              </Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}