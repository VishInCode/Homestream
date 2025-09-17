"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  User, 
  Menu,
  ChevronDown,
  Play,
  Star,
  Users,
  Globe,
  Award
} from "lucide-react";
import Link from "next/link";

export default function NovaStreamAboutPage() {
  const [activeNavItem, setActiveNavItem] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "Movies", "TV Shows", "My List", "About"];

  const stats = [
    { icon: Users, label: "Active Users", value: "2.5M+" },
    { icon: Play, label: "Movies & Shows", value: "15K+" },
    { icon: Globe, label: "Countries", value: "45+" },
    { icon: Award, label: "Premium Quality", value: "4K" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Subtle border frame */}
      <div className="absolute inset-4 border border-slate-700/30 rounded-2xl pointer-events-none z-10" />
      
      {/* Abstract spheres background */}
      <div className="absolute right-0 top-1/4 w-2/3 h-2/3 pointer-events-none opacity-30">
        <div className="relative w-full h-full">
          {/* Large spheres cluster */}
          <div className="absolute top-10 right-20 w-40 h-40 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-xl" />
          <div className="absolute top-32 right-10 w-32 h-32 bg-gradient-to-br from-slate-600/20 to-blue-600/20 rounded-full blur-lg" />
          <div className="absolute top-20 right-40 w-24 h-24 bg-gradient-to-br from-purple-600/20 to-slate-600/20 rounded-full blur-lg" />
          <div className="absolute top-60 right-32 w-48 h-48 bg-gradient-to-br from-blue-700/15 to-slate-700/15 rounded-full blur-2xl" />
          <div className="absolute top-44 right-60 w-20 h-20 bg-gradient-to-br from-slate-500/20 to-purple-500/20 rounded-full blur-md" />
          <div className="absolute top-80 right-16 w-36 h-36 bg-gradient-to-br from-blue-600/20 to-slate-600/20 rounded-full blur-xl" />
          <div className="absolute top-72 right-48 w-28 h-28 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-lg" />
          <div className="absolute top-96 right-36 w-16 h-16 bg-gradient-to-br from-slate-600/25 to-blue-600/25 rounded-full blur-sm" />
        </div>
      </div>

      {/* Header */}
      <header className="relative z-50 flex items-center justify-between p-8">
        <Link href="/novastream">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-wide">
            NOVASTREAM
          </h1>
        </Link>
        
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-4">
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
          </div>
          
          <Button 
            variant="ghost" 
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center space-x-2 text-gray-300 hover:text-white"
          >
            <span className="text-sm font-medium">Menu</span>
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 right-8 z-50 bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg p-6 min-w-48">
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
      <main className="relative z-20 flex flex-col justify-center min-h-screen px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          {/* Main Title */}
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight leading-none">
            About
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
              Us
            </span>
          </h2>

          {/* Body Text */}
          <div className="max-w-2xl space-y-6 mb-12">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Novastream is dedicated to bringing you the best in cinematic entertainment. 
              We curate a vast collection of films, from timeless classics to the latest blockbusters, 
              offering an unparalleled streaming experience for movie lovers everywhere.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              Our mission is to connect audiences with extraordinary stories, 
              providing seamless access to premium content across all devices. 
              Join millions of viewers who trust Novastream for their entertainment needs.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                  <stat.icon className="w-8 h-8 text-blue-400 mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
              <Play className="w-5 h-5 mr-2" />
              Start Watching
            </Button>
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </main>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 z-30">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-xs text-gray-400 rotate-90 origin-center">Scroll</div>
          <ChevronDown className="w-5 h-5 text-gray-400 animate-bounce" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-8 w-px h-24 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent" />
      <div className="absolute bottom-1/3 right-8 w-px h-32 bg-gradient-to-t from-transparent via-purple-400/50 to-transparent" />
    </div>
  );
}