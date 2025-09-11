"use client";

import { useState } from "react";
import { type Movie, movies, getMoviesByGenre } from "@/lib/movies";
import MovieList from "@/components/movie-list";
import MoviePlayer from "@/components/movie-player";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import UploadMovie from "@/components/upload-movie";

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [movieList, setMovieList] = useState<Movie[]>(movies);

  const genres = ["Action", "Sci-Fi", "Comedy", "Animation", "Drama"];

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleBackToList = () => {
    setSelectedMovie(null);
  };

  const handleUploadMovie = (newMovie: Omit<Movie, "id" | "url"> & { file: File }) => {
    const newMovieWithId: Movie = {
      ...newMovie,
      id: movieList.length + 1,
      url: URL.createObjectURL(newMovie.file),
      imageUrl: "https://picsum.photos/seed/9/400/600"
    };
    setMovieList((prevMovies) => [newMovieWithId, ...prevMovies]);
    setIsUploading(false);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-10">
        <h1 className="text-2xl font-bold text-primary font-headline tracking-tighter">
          HomeStream
        </h1>
        <div className="flex-grow"></div>
        <Button onClick={() => setIsUploading(true)} size="sm">
          <Upload className="mr-2" />
          Upload Movie
        </Button>
      </header>
      <main className="flex flex-1 flex-col">
        {selectedMovie ? (
          <div className="mx-auto w-full max-w-6xl p-4 md:p-10">
            <MoviePlayer movie={selectedMovie} onBack={handleBackToList} />
          </div>
        ) : (
          <div className="flex-1 space-y-8 p-4 md:p-10">
            {genres.map((genre) => (
              <section key={genre}>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4 font-headline">
                  {genre}
                </h2>
                <MovieList
                  movies={getMoviesByGenre(movieList, genre)}
                  onSelectMovie={handleSelectMovie}
                />
              </section>
            ))}
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
