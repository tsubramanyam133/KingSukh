export interface Room {
  id: string;
  name: string;
  price: number;
  currency: string;
  perNightLabel: string;
  image: string;
  gallery: string[];
  shortDescription: string;
  fullDescription: string;
  features: string[];
  badge?: string;
}

export const roomsData: Room[] = [
  {
    id: "cozy-haven-room",
    name: "Cozy Haven Room",
    price: 1000,
    currency: "₹",
    perNightLabel: "/ NIGHT",
    image: "/images/rooms/cozy-haven.jpg",
    gallery: [
      "/images/rooms/cozy-haven.jpg",
      "/images/property/reception.jpg",
      "/images/gallery/garden.jpg",
      "/images/property/exterior.jpg"
    ],
    shortDescription: "A serene, comfortable space designed for rest and relaxation after exploring the pristine hills of Baranti.",
    fullDescription: "The Cozy Haven Room provides an authentic boutique stay with thoughtful touches of warmth and simplicity. Surrounded by tranquil nature views of Manpur, Baranti, this room offers essential modern comforts, personalized hospitality, and direct access to our garden courtyard.",
    features: [
      "24 Hours Room Service",
      "High Class Security",
      "Comfortable Bedding",
      "Attached Bathroom",
      "Nature & Garden Views",
      "Local Tourist Guidance"
    ],
    badge: "Popular Choice"
  },
  {
    id: "spacious-serenity-suite",
    name: "Spacious Serenity Suite",
    price: 1500,
    currency: "₹",
    perNightLabel: "/ NIGHT",
    image: "/images/rooms/spacious-serenity-large.jpg",
    gallery: [
      "/images/rooms/spacious-serenity-large.jpg",
      "/images/rooms/spacious-serenity-small.jpg",
      "/images/property/reception.jpg",
      "/images/property/exterior.jpg"
    ],
    shortDescription: "Expansive suite featuring extra space, premium seating, and elevated comfort for families and group getaways.",
    fullDescription: "Experience superior comfort in our Spacious Serenity Suite. Designed for guests seeking extra space and quiet luxury, this suite combines generous floor area with warm decor, peaceful ambience, and personalized room service.",
    features: [
      "Expanded Living Space",
      "24 Hours Room Service",
      "High Class Security",
      "Restaurant Dining Access",
      "Scenic Window Views",
      "Tourist Guide Assistance"
    ],
    badge: "Best Experience"
  }
];
