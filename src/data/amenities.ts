export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const amenitiesData: Amenity[] = [
  {
    id: "security",
    title: "High Class Security",
    description: "Your safety and privacy are fully ensured with round-the-clock property security measures.",
    iconName: "ShieldCheck"
  },
  {
    id: "room-service",
    title: "24 Hours Room Service",
    description: "Dedicated 24/7 room service catering to your needs, beverages, and guest requests.",
    iconName: "Clock"
  },
  {
    id: "restaurant",
    title: "In-House Restaurant",
    description: "Delicious, freshly prepared local Bengali and home-style dishes served straight to your table.",
    iconName: "UtensilsCrossed"
  },
  {
    id: "guide-support",
    title: "Tourist Guide Support",
    description: "Expert local guidance, sight-seeing itineraries, and trip assistance across Baranti & Purulia.",
    iconName: "Compass"
  }
];
