export interface Movie {
  id: number;
  title: string;
  url: string;
  description: string;
  genre: string;
  imageUrl: string;
}

export let movies: Movie[] = [
  {
    id: 1,
    title: "Big Buck Bunny",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    description: "A large and lovable rabbit deals with three pesky rodents.",
    genre: "Animation",
    imageUrl: "https://picsum.photos/seed/1/400/600",
  },
  {
    id: 2,
    title: "Elephants Dream",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description: "Two strange characters explore a surreal, mechanical world.",
    genre: "Animation",
    imageUrl: "https://picsum.photos/seed/2/400/600",
  },
  {
    id: 3,
    title: "For Bigger Blazes",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: "A brave firefighter trains for the ultimate challenge.",
    genre: "Action",
    imageUrl: "https://picsum.photos/seed/3/400/600",
  },
  {
    id: 4,
    title: "For Bigger Escapes",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    description: "An adventurer plans a daring escape from a tricky situation.",
    genre: "Action",
    imageUrl: "https://picsum.photos/seed/4/400/600",
  },
  {
    id: 5,
    title: "For Bigger Fun",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    description: "Fun and games in a vibrant, animated world.",
    genre: "Comedy",
    imageUrl: "https://picsum.photos/seed/5/400/600",
  },
  {
    id: 6,
    title: "Sintel",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    description: "A young woman embarks on a quest to find her lost baby dragon.",
    genre: "Drama",
    imageUrl: "https://picsum.photos/seed/6/400/600",
  },
  {
    id: 7,
    title: "Tears of Steel",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    description: "A group of futuristic soldiers and scientists in a battle against giant robots.",
    genre: "Sci-Fi",
    imageUrl: "https://picsum.photos/seed/7/400/600",
  },
  {
    id: 8,
    title: "We Are Going On Bullrun",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    description: "An animated adventure showcasing a group of friends on a quest.",
    genre: "Comedy",
    imageUrl: "https://picsum.photos/seed/8/400/600",
  },
];

export function getMoviesByGenre(allMovies: Movie[], genre: string): Movie[] {
  return allMovies.filter((movie) => movie.genre === genre);
}
