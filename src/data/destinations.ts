export interface Destination {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  highlights: string[];
}

export const destinationsData: Destination[] = [
  {
    id: "baranti-hill-dam",
    name: "Baranti Hill & Dam",
    category: "Nature & Lake",
    description: "A tranquil lake surrounded by rolling hillocks, famous for mesmerizing sunsets and winter migratory birds.",
    image: "/images/destinations/baranti.webp",
    highlights: ["Sunset Point", "Bird Watching", "Boating & Lakeside Walks"]
  },
  {
    id: "ayodhya-hills",
    name: "Ayodhya Hills (Pahar)",
    category: "Mountain Trails",
    description: "Extensive hill ranges adorned with waterfalls, dense forests, tribal heritage, and scenic trekking spots.",
    image: "/images/destinations/ayodhya.webp",
    highlights: ["Bamni Falls", "Turga Dam", "Trekking Trails"]
  },
  {
    id: "maithon-dam",
    name: "Maithon Dam",
    category: "Reservoir & Island",
    description: "A massive reservoir on the Barakar River featuring Deer Park, island cruises, and panoramic hill vistas.",
    image: "/images/destinations/maithon-dam.webp",
    highlights: ["Island Cruise", "Deer Park", "Panoramic Vistas"]
  },
  {
    id: "palash-blooms",
    name: "Spring Palash Blooms",
    category: "Seasonal Wonder",
    description: "During spring (February to March), Purulia transforms into a vibrant flame of bright orange-red Palash blossoms.",
    image: "/images/destinations/palash.webp",
    highlights: ["Flame of the Forest", "Photography Heaven", "Cultural Spring"]
  },
  {
    id: "garhpanchkot",
    name: "Garhpanchkot Ruins",
    category: "Heritage & History",
    description: "Historical ruined fort located at the foot of Panchet Hill, rich in ancient architecture and forest lore.",
    image: "/images/property/exterior.jpg",
    highlights: ["Historical Ruins", "Panchet Hill Base", "Architectural Heritage"]
  },
  {
    id: "joychandi-hill",
    name: "Joychandi Hill",
    category: "Adventure Trekking",
    description: "Famous rock climbing destination with steep granite peaks, temple on top, and cinematic history.",
    image: "/images/hero/hero-main.jpg",
    highlights: ["Rock Climbing", "Hilltop Temple", "Scenic Viewpoint"]
  }
];
