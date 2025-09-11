"use client";

import { useState } from "react";
import { type Movie, movies } from "@/lib/movies";
import MovieList from "@/components/movie-list";
import MoviePlayer from "@/components/movie-player";

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleBackToList = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold text-center font-headline">
            HomeStream
          </h1>
          <p className="text-muted-foreground text-center mb-6">
            Your Personal Movie Library
          </p>
        </div>

        <div className="mx-auto w-full max-w-6xl items-start">
          {selectedMovie ? (
            <MoviePlayer movie={selectedMovie} onBack={handleBackToList} />
          ) : (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
        </div>
      </main>
    </div>
  );
}
