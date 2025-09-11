"use client";

import { useState, useEffect } from "react";
import { type Movie, getMoviesByGenre } from "@/lib/movies";
import { getAllMovies, addMovie } from "@/lib/movie-data";
import MovieList from "@/components/movie-list";
import MoviePlayer from "@/components/movie-player";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Search, Film } from "lucide-react";
import UploadMovie from "@/components/upload-movie";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const movies = getAllMovies();
    setAllMovies(movies);
    setFilteredMovies(movies);

    const storedRecentlyPlayed = localStorage.getItem("recentlyPlayed");
    if (storedRecentlyPlayed) {
      try {
        const recentIds = JSON.parse(storedRecentlyPlayed);
        if (Array.isArray(recentIds)) {
          const recentMovies = movies.filter((m) => recentIds.includes(m.id));
          setRecentlyPlayed(recentMovies);
        }
      } catch (error) {
        console.error("Failed to parse recently played movies:", error);
        localStorage.removeItem("recentlyPlayed");
      }
    }
    setIsLoading(false);
  }, []);

  const genres = ["Action", "Sci-Fi", "Comedy", "Animation", "Drama"];

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
    const updatedRecentlyPlayed = [
      movie,
      ...recentlyPlayed.filter((m) => m.id !== movie.id),
    ].slice(0, 10);
    setRecentlyPlayed(updatedRecentlyPlayed);
    try {
      localStorage.setItem(
        "recentlyPlayed",
        JSON.stringify(updatedRecentlyPlayed.map((m) => m.id))
      );
    } catch (error) {
      console.error("Failed to save recently played movies:", error);
    }
  };

  const handleBackToList = () => {
    setSelectedMovie(null);
  };

  const handleUploadMovie = (
    newMovie: Omit<Movie, "id" | "url" | "imageUrl"> & { file: File }
  ) => {
    const newMovieWithId: Movie = {
      ...newMovie,
      id: Date.now(),
      url: URL.createObjectURL(newMovie.file),
      imageUrl: `https://picsum.photos/seed/${Date.now()}/400/600`,
    };
    addMovie(newMovieWithId);
    const updatedMovies = getAllMovies();
    setAllMovies(updatedMovies);
    if (
      !searchQuery ||
      newMovie.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      setFilteredMovies(updatedMovies);
    }
    setIsUploading(false);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query) {
      const results = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMovies(results);
    } else {
      setFilteredMovies(allMovies);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-10">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-primary font-headline tracking-tighter">
          <Film />
          HomeStream
        </h1>
        <div className="flex-grow"></div>
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search movies..."
            className="pl-10"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <Button onClick={() => setIsUploading(true)} size="sm" className="shrink-0">
          <Upload className="mr-2" />
          Upload
        </Button>
      </header>
      <main className="flex flex-1 flex-col">
        {selectedMovie ? (
          <div className="mx-auto w-full max-w-6xl p-4 md:p-10">
            <MoviePlayer movie={selectedMovie} onBack={handleBackToList} />
          </div>
        ) : (
          <div className="flex-1 space-y-8 p-4 md:p-10 animate-in fade-in-50 duration-500">
            {isLoading ? (
              <div className="space-y-8">
                <section>
                  <Skeleton className="h-8 w-48 mb-4" />
                  <div className="flex space-x-4 pb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
                         <Skeleton className="aspect-[2/3] w-full" />
                      </div>
                    ))}
                  </div>
                </section>
                <section>
                   <Skeleton className="h-8 w-32 mb-4" />
                   <div className="flex space-x-4 pb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
                         <Skeleton className="aspect-[2/3] w-full" />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            ) : searchQuery ? (
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4 font-headline">
                  Search Results
                </h2>
                {filteredMovies.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {filteredMovies.map(movie => (
                       <div key={movie.id} className="p-0">
                         <Card
                           onClick={() => handleSelectMovie(movie)}
                           className="bg-card group cursor-pointer overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-primary/20"
                         >
                           <CardContent className="p-0">
                             <div className="aspect-[2/3] w-full relative">
                               <Image
                                 src={movie.imageUrl}
                                 alt={movie.title}
                                 fill
                                 sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16.6vw"
                                 className="object-cover transition-all duration-300 group-hover:scale-110"
                                 data-ai-hint="movie poster"
                               />
                               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                               <div className="absolute bottom-0 left-0 p-3">
                                 <h3 className="text-sm font-semibold text-white truncate group-hover:text-primary">
                                   {movie.title}
                                 </h3>
                               </div>
                             </div>
                           </CardContent>
                         </Card>
                       </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No movies found for &quot;{searchQuery}&quot;.</p>
                )}
              </section>
            ) : (
              <>
                {recentlyPlayed.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4 font-headline">
                      Recently Played
                    </h2>
                    <MovieList
                      movies={recentlyPlayed}
                      onSelectMovie={handleSelectMovie}
                    />
                  </section>
                )}
                {genres.map((genre) => {
                  const moviesInGenre = getMoviesByGenre(filteredMovies, genre);
                  if (moviesInGenre.length === 0) return null;
                  return (
                    <section key={genre}>
                      <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4 font-headline">
                        {genre}
                      </h2>
                      <MovieList
                        movies={moviesInGenre}
                        onSelectMovie={handleSelectMovie}
                      />
                    </section>
                  );
                })}
              </>
            )}
             <UploadMovie
              isOpen={isUploading}
              onOpenChange={setIsUploading}
              onUpload={handleUploadMovie}
            />
          </div>
        )}
      </main>
    </div>
  );
}
