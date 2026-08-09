export interface RoomData {
  title: string;
  slug: string;
  capacity: string;
  size: string;
  idealFor: string;
  image: string;
}

export const rooms: RoomData[] = [
  {
    title: "Presenterbox 3",
    slug: "presenterbox-3",
    capacity: "8",
    size: "45",
    idealFor: "Evening events, Workshops, Get-Togethers",
    image: "/presenterbox.png",
  },
  {
    title: "Presenterbox 5",
    slug: "presenterbox-5",
    capacity: "10",
    size: "35.9",
    idealFor: "Evening events, Workshops, Get-Togethers",
    image: "/presenterbox.png",
  },
  {
    title: "Presenterbox 6",
    slug: "presenterbox-6",
    capacity: "20",
    size: "61",
    idealFor: "Evening events, Workshops, Get-Togethers",
    image: "/presenterbox.png",
  },
  {
    title: "Cooking Lounge",
    slug: "cooking-lounge",
    capacity: "36",
    size: "157",
    idealFor: "Evening events, Workshops, Conferences",
    image: "/arena_catering.png",
  },
  {
    title: "Weinbar",
    slug: "weinbar",
    capacity: "40",
    size: "126",
    idealFor: "Evening events, Get-Togethers, Lunch",
    image: "/vip_lounge_premium.png",
  },
  {
    title: "Davidoff Lounge",
    slug: "davidoff-lounge",
    capacity: "40",
    size: "137",
    idealFor: "Evening events, Get-Togethers",
    image: "/vip_lounge_premium.png",
  },
];
