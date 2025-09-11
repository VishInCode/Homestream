"use client";

import { useState } from "react";
import { type Movie, movies } from "@/lib/movies";
import MovieList from "@/components/movie-list";
import MoviePlayer from "@/components/movie-player";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import UploadMovie from "@/components/upload-movie";

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [movieList, setMovieList] = useState<Movie[]>(movies);

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
    };
    setMovieList((prevMovies) => [newMovieWithId, ...prevMovies]);
    setIsUploading(false);
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

        {selectedMovie ? (
          <div className="mx-auto w-full max-w-6xl items-start">
            <MoviePlayer movie={selectedMovie} onBack={handleBackToList} />
          </div>
        ) : (
          <>
            <div className="mx-auto grid w-full max-w-6xl">
              <div className="flex justify-end mb-4">
                <Button onClick={() => setIsUploading(true)}>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Movie
                </Button>
              </div>
              <MovieList movies={movieList} onSelectMovie={handleSelectMovie} />
            </div>
            <UploadMovie
              isOpen={isUploading}
              onOpenChange={setIsUploading}
              onUpload={handleUploadMovie}
            />
          </>
        )}
      </main>
    </div>
  );
}