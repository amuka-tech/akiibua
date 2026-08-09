export type TourCategory = "Individual" | "Group" | "School";

export interface TourCardData {
  title: string;
  price: string;
  time: string;
  feat: string;
  img: string;
  people?: string;
  isPremium?: boolean;
}

export const individualTours: TourCardData[] = [
  { title: "AkiiBua Museum + Arena Tour", price: "UGX 30,000", time: "2.5 hrs", feat: "Daily - English & Local", img: "/museum_tour_1782318204191.png" },
  { title: "Museum Only", price: "UGX 10,000", time: "1.5 hrs", feat: "Daily - Audio Guide", img: "/museum_tour_1782318204191.png" },
  { title: "Museum + Arena View", price: "UGX 20,000", time: "1.5 hrs", feat: "Daily - Free audio guide", img: "/museum_tour_1782318204191.png" },
  { title: "Arena VIP Tour", price: "UGX 50,000", time: "3.0 hrs", feat: "By Availability - Exclusive", img: "/museum_tour_1782318204191.png", isPremium: true },
];

export const groupTours: TourCardData[] = [
  { title: "AkiiBua Museum + Arena Tour", price: "UGX 25,000", people: "Min 20 people", time: "2.5 hrs", feat: "English & Local", img: "/museum_tour_1782318204191.png" },
  { title: "Museum Only", price: "UGX 8,000", people: "Min 20 people", time: "1.5 hrs", feat: "Audio Guide", img: "/museum_tour_1782318204191.png" },
  { title: "Arena Tour", price: "UGX 25,000", people: "Min 20 people", time: "1.0 hr", feat: "English & Local", img: "/museum_tour_1782318204191.png" },
  { title: "Arena VIP Tour", price: "UGX 45,000", people: "15 people", time: "3.0 hrs", feat: "Exclusive Access", img: "/museum_tour_1782318204191.png", isPremium: true },
  { title: "Inclusive Tour", price: "UGX 10,000", people: "15 people", time: "3.0 hrs", feat: "Wheelchair accessible", img: "/museum_tour_1782318204191.png" },
  { title: "Active Tour", price: "UGX 12,000", people: "20 people", time: "1.5 hrs", feat: "Includes pitch activities", img: "/museum_tour_1782318204191.png" },
  { title: "Kids Tour", price: "UGX 5,000", people: "11 children", time: "1.5 hrs", feat: "Ideal for school groups", img: "/museum_tour_1782318204191.png" },
];

export const schoolTours: TourCardData[] = [
  { title: "AkiiBua Museum + Arena Tour", price: "UGX 5,000", people: "Min 28 tickets", time: "2.5 hrs", feat: "English & Local", img: "/museum_tour_1782318204191.png" },
  { title: "Museum Only", price: "UGX 5,000", people: "Min 20 tickets", time: "1.5 hrs", feat: "Audio Guide", img: "/museum_tour_1782318204191.png" },
  { title: "Arena Tour", price: "UGX 5,000", people: "Min 28 tickets", time: "1.0 hr", feat: "English & Local", img: "/museum_tour_1782318204191.png" },
  { title: "Active Tour", price: "UGX 5,000", people: "Per pupil", time: "1.5 hrs", feat: "Includes pitch activities", img: "/museum_tour_1782318204191.png" },
];
