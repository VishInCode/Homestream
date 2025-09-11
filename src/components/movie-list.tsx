import type { Movie } from "@/lib/movies";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface MovieListProps {
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
}

export default function MovieList({ movies, onSelectMovie }: MovieListProps) {
  if (movies.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        No movies in this category yet.
      </div>
    );
  }

  return (
    <Carousel
      opts={{
        align: "start",
        slidesToScroll: "auto",
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {movies.map((movie) => (
          <CarouselItem
            key={movie.id}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 pl-4"
          >
            <Card
              onClick={() => onSelectMovie(movie)}
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
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-14" />
      <CarouselNext className="mr-14" />
    </Carousel>
  );
}
