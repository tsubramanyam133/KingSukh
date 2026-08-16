export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "rooms" | "property" | "surroundings";
  image: string;
  alt: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    title: "Guest House Exterior & Courtyard",
    category: "property",
    image: "/images/property/exterior.jpg",
    alt: "King Sukh Guest House exterior view with courtyard"
  },
  {
    id: "g2",
    title: "Reception & Hospitality Lounge",
    category: "property",
    image: "/images/property/reception.jpg",
    alt: "Warm reception desk at King Sukh Guest House"
  },
  {
    id: "g3",
    title: "Cozy Haven Room Interior",
    category: "rooms",
    image: "/images/rooms/cozy-haven.jpg",
    alt: "Cozy Haven Room bed and aesthetic layout"
  },
  {
    id: "g4",
    title: "Spacious Serenity Suite Living",
    category: "rooms",
    image: "/images/rooms/spacious-serenity-large.jpg",
    alt: "Spacious Serenity Suite bedroom and layout"
  },
  {
    id: "g5",
    title: "Serenity Suite View",
    category: "rooms",
    image: "/images/rooms/spacious-serenity-small.jpg",
    alt: "Spacious Serenity Suite cozy nook"
  },
  {
    id: "g6",
    title: "Garden & Flower Bloom",
    category: "surroundings",
    image: "/images/gallery/garden.jpg",
    alt: "Vibrant garden bloom at King Sukh Guest House"
  },
  {
    id: "g7",
    title: "Baranti Lake Sunset View",
    category: "surroundings",
    image: "/images/destinations/baranti.webp",
    alt: "Scenic Baranti lake sunset"
  },
  {
    id: "g8",
    title: "Ayodhya Pahar Mountain Vistas",
    category: "surroundings",
    image: "/images/destinations/ayodhya.webp",
    alt: "Panoramic Ayodhya Pahar hills"
  },
  {
    id: "g9",
    title: "Palash Flower Season in Baranti",
    category: "surroundings",
    image: "/images/destinations/palash.webp",
    alt: "Red Palash flowers in Purulia spring"
  },
  {
    id: "g10",
    title: "Maithon Dam Reservoir",
    category: "surroundings",
    image: "/images/destinations/maithon-dam.webp",
    alt: "Maithon Dam pristine reservoir"
  },
  {
    id: "g11",
    title: "Dedicated Guest Room Service",
    category: "property",
    image: "/images/amenities/service.jpg",
    alt: "Hospitality room service staff"
  },
  {
    id: "g12",
    title: "Main Entrance & Guest Porch",
    category: "property",
    image: "/images/hero/hero-main.jpg",
    alt: "Main entrance of King Sukh Guest House"
  }
];
