export interface Movie {
  id: number;
  title: string;
  url: string;
  description: string;
}

// Using placeholder videos from a public source for demonstration
export const movies: Movie[] = [
  {
    id: 1,
    title: "Big Buck Bunny",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    description: "A large and lovable rabbit deals with three pesky rodents.",
  },
  {
    id: 2,
    title: "Elephants Dream",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description: "Two strange characters explore a surreal, mechanical world.",
  },
  {
    id: 3,
    title: "For Bigger Blazes",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: "A brave firefighter trains for the ultimate challenge.",
  },
  {
    id: 4,
    title: "For Bigger Escapes",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    description: "An adventurer plans a daring escape from a tricky situation.",
  },
  {
    id: 5,
    title: "For Bigger Fun",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    description: "Fun and games in a vibrant, animated world.",
  },
  {
    id: 6,
    title: "Sintel",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    description: "A young woman embarks on a quest to find her lost baby dragon.",
  },
  {
    id: 7,
    title: "Tears of Steel",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    description: "A group of futuristic soldiers and scientists in a battle against giant robots.",
  },
  {
    id: 8,
    title: "We Are Going On Bullrun",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    description: "An animated adventure showcasing a group of friends on a quest.",
  },
];
