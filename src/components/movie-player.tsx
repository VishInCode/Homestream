import type { Movie } from "@/lib/movies";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface MoviePlayerProps {
  movie: Movie;
  onBack: () => void;
}

export default function MoviePlayer({ movie, onBack }: MoviePlayerProps) {
  return (
    <div className="w-full mx-auto flex flex-col gap-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground font-headline">
            {movie.title}
          </h2>
          <p className="text-muted-foreground mt-1">{movie.description}</p>
        </div>
        <Button
          onClick={onBack}
          variant="outline"
          className="text-primary border-primary/50 hover:bg-primary/10 hover:text-primary shrink-0"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Library
        </Button>
      </div>
      <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl shadow-primary/10 ring-1 ring-border">
        <video
          key={movie.id}
          src={movie.url}
          controls
          autoPlay
          className="w-full h-full bg-black"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

    