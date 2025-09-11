import type { Movie } from "@/lib/movies";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Film } from "lucide-react";

interface MovieListProps {
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
}

export default function MovieList({ movies, onSelectMovie }: MovieListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in">
      {movies.map((movie) => (
        <Card
          key={movie.id}
          onClick={() => onSelectMovie(movie)}
          className="bg-card cursor-pointer group overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
        >
          <CardHeader className="p-0">
            <div className="p-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-md">
                  <Film className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {movie.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-1 text-sm line-clamp-2">
                    {movie.description}
                  </CardDescription>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
