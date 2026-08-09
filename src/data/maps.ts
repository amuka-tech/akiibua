export interface MapData {
  title: string;
  description: string;
  image: string;
  file: string;
}

export const availableMaps: MapData[] = [
  {
    title: "Arena Overview and Seating Plan",
    description: "Complete stadium layout including all tiers and sections.",
    image: "/arena_interior.png",
    file: "#"
  },
  {
    title: "Directions & Route Map",
    description: "How to navigate to and around the stadium premises.",
    image: "/matchday_exterior.png",
    file: "/downloads/directions_route_map.pdf"
  },
  {
    title: "Akii-Bua Stadium Seating Plan & Price List",
    description: "Detailed seating breakdown with associated pricing categories.",
    image: "/namboole_fans.png",
    file: "#"
  },
  {
    title: "Overview Plan Level 3",
    description: "Detailed layout of the third level facilities and access points.",
    image: "/museum_exhibition.png",
    file: "/downloads/overview_level_3.pdf"
  },
  {
    title: "Overview Plan Kiosks Level 2",
    description: "Food, drink, and merchandise locations on level 2.",
    image: "/arena_catering.png",
    file: "/downloads/kiosks_level_2.pdf"
  },
  {
    title: "Overview Plan Kiosks Level 6",
    description: "Food, drink, and merchandise locations on level 6.",
    image: "/vip_lounge_premium.png",
    file: "/downloads/kiosks_level_6.pdf"
  }
];
