export interface NewsArticle {
  slug: string[];
  title: string;
  date: string;
  category: string;
  content: string;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: ["stadium-of-the-year"],
    title: "Akii-Bua Olympic Stadium named 'Stadium of the Year 2025'",
    date: "June 15, 2026",
    category: "Arena",
    content: "The Akii-Bua Olympic Stadium has been awarded 'Stadium of the Year 2025' by the Stadium Business Awards. The award recognizes excellence in stadium management, fan experience, and sustainability. 'This honor reflects the hard work of everyone involved in making the Akii-Bua Olympic Stadium a world-class venue,' said the arena management."
  },
  {
    slug: ["parking-update"],
    title: "New parking system for matchdays announced",
    date: "June 10, 2026",
    category: "Getting here",
    content: "A new license plate recognition system has been introduced for matchday parking at the Akii-Bua Olympic Stadium. Fans can now register their license plate online in advance and pay the parking fee digitally. The system aims to reduce queues at the barriers and improve traffic flow on matchdays."
  },
  {
    slug: ["summer-concerts"],
    title: "Summer concert series lineup revealed",
    date: "June 5, 2026",
    category: "Events",
    content: "The Akii-Bua Olympic Stadium has announced its summer concert series lineup for 2026. Major international artists will perform at the arena throughout the summer months. Tickets are available through official ticketing partners. The arena transforms into an open-air concert venue with a capacity of up to 75,000."
  },
  {
    slug: ["2026", "05", "visitor-information-for-linkin-park-concerts-at-akiibua-arena"],
    title: "Visitor Information for Linkin Park Concerts at Akii-Bua Olympic Stadium",
    date: "June 11, 2026",
    category: "Events",
    content: "Linkin Park will perform at the Akii-Bua Olympic Stadium on June 11-12, 2026. Gates open 2 hours before the show. Parking permits can be purchased online. Public transport is strongly recommended. Bags larger than A4 are not permitted. Luggage storage is available at the south entrance for UGX 5,000."
  },
  {
    slug: ["2025", "11", "foo-fighters-with-take-cover-tour-2026-at-the-akiibua-arena"],
    title: "Foo Fighters with Take Cover Tour 2026 at the Akii-Bua Olympic Stadium",
    date: "November 10, 2025",
    category: "Events",
    content: "The Foo Fighters will bring their Take Cover Tour to the Akii-Bua Olympic Stadium on June 17, 2026. The concert is part of the arena's summer concert series. Tickets are available through official partners. The show promises an unforgettable night of rock music at Uganda's most iconic venue."
  },
  {
    slug: ["2026", "06", "visitor-information-for-the-weeknd-concerts-at-akiibua-arena"],
    title: "Visitor Information for The Weeknd Concerts at Akii-Bua Olympic Stadium",
    date: "June 25, 2026",
    category: "Events",
    content: "The Weeknd performs at the Akii-Bua Olympic Stadium on June 25, 26 and 27, 2026. All three shows start at 20:00. Arena access begins 2 hours before showtime. Parking must be booked in advance via the license plate registration system. Cashless payment only at all food and beverage outlets."
  },
];
