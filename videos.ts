export interface Video {
  id: string;
  title: string;
  category: string;
  duration: string;
  views: number;
  thumbnail: string;
  url: string;
}

export const videos: Video[] = [
  {
    id: "v1",
    title: "Introduction to Online Shopping",
    category: "Online Shopping",
    duration: "5:30",
    views: 12400,
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "v2",
    title: "Setting Up Mobile Money",
    category: "Mobile Payments",
    duration: "7:15",
    views: 8900,
    thumbnail: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=225&fit=crop",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "v3",
    title: "Using E-Government Portals",
    category: "E-Government",
    duration: "6:45",
    views: 6700,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "v4",
    title: "Protecting Your Passwords",
    category: "Digital Safety",
    duration: "4:20",
    views: 15300,
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=225&fit=crop",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "v5",
    title: "Spotting Online Scams",
    category: "Digital Safety",
    duration: "8:10",
    views: 21000,
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=225&fit=crop",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "v6",
    title: "Making Secure Online Payments",
    category: "Mobile Payments",
    duration: "5:55",
    views: 9800,
    thumbnail: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?w=400&h=225&fit=crop",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];
