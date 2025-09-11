import { getAllMovies } from './movie-data';
import type { Movie } from './movie-data';

export type { Movie };

export const movies: Movie[] = getAllMovies();

export function getMoviesByGenre(allMovies: Movie[], genre: string): Movie[] {
  return allMovies.filter((movie) => movie.genre === genre);
}
