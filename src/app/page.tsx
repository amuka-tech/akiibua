import HeroSection from "@/components/HeroSection";
import TourCard from "@/components/TourCard";
import NewsCard from "@/components/NewsCard";
import VirtualCard from "@/components/VirtualCard";
import InfoCard from "@/components/InfoCard";
import Link from "next/link";
import Image from "@/components/ImageWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akii-Bua Olympic Stadium | Home",
  description: "Welcome to the Akii-Bua Olympic Stadium. Discover upcoming events, tours, and hospitality options.",
};

export default function HomePage() {
  return (
    <div className="bg-arena-gray min-h-screen">
      <HeroSection image="/akiibua_impression_night.jpg" />

      {/* Tours & Museum */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-arena-primary text-xs font-bold uppercase tracking-[3px] mb-2">Explore</p>
              <h2 className="text-3xl md:text-4xl font-black text-arena-navy tracking-tight uppercase">Tours &amp; Museum</h2>
            </div>
            <Link href="/tours-museum" className="text-arena-primary font-bold text-sm uppercase tracking-[2px] hover:text-red-700 transition-colors flex items-center gap-2 shrink-0">
              All tours <span>→</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TourCard
              title="AkiiBua Museum"
              description="Immerse yourself in the history of the club and experience Uganda's premier sports museum."
              price="UGX 10,000 for adults"
              duration="Daily, duration approx. 1.5 hrs."
              badge="Individual tickets"
              image="/museum_tour_1782318204191.png"
              href="/tours-museum/akiibua-museum"
            />
            <TourCard
              title="Museum + Arena Tour"
              description="The ultimate behind-the-scenes experience. Tour the stadium then explore the museum."
              price="UGX 30,000 for adults"
              duration="Daily, duration approx. 2.5 hrs."
              badge="Individual tickets"
              image="/museum_tour_1782318204191.png"
              href="/tours-museum/akiibua-museum-arena-tour"
            />
            <TourCard
              title="VIP Experience"
              description="The most exclusive tour available. Private access and premium hospitality included."
              price="UGX 50,000 per person"
              duration="Select days, approx. 3 hrs."
              badge="Premium"
              image="/museum_tour_1782318204191.png"
              href="/tours-museum/vip-tour"
            />
          </div>
        </div>
      </section>

      {/* Concerts – Full-bleed dark section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/concert_event_1782318250313.png"
            alt="Concert Event"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-arena-navy/96 via-arena-navy/75 to-arena-navy/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl text-white">
            <span className="text-arena-primary font-bold uppercase tracking-[3px] text-xs mb-4 block">Live Events</span>
            <h2 className="text-4xl md:text-6xl font-black mb-5 uppercase tracking-tight">Concerts in 2026</h2>
            <p className="text-white/75 text-lg mb-10 font-light leading-relaxed max-w-xl">
              Experience the biggest international acts live at the Akii-Bua Olympic Stadium. Unforgettable nights under the stars.
            </p>
            <a
              href="/events"
              className="inline-block bg-arena-red text-white font-bold px-10 py-4 hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,5,45,0.4)] hover:shadow-[0_0_30px_rgba(220,5,45,0.6)] text-sm uppercase tracking-[2px] rounded"
            >
              Discover Lineup
            </a>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="bg-white border-t border-gray-100 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-arena-primary text-xs font-bold uppercase tracking-[3px] mb-2">Latest</p>
              <h2 className="text-3xl md:text-4xl font-black text-arena-navy tracking-tight uppercase">News &amp; Updates</h2>
            </div>
            <Link href="/news" className="text-arena-primary font-bold text-sm uppercase tracking-[2px] hover:text-red-700 transition-colors flex items-center gap-2 shrink-0">
              All news <span>→</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <NewsCard
              title="Akii-Bua Olympic Stadium named 'Stadium of the Year 2025'"
              date="June 15, 2026"
              category="Arena"
              image="/arena_night_hero_1782318185369.png"
              href="/news/stadium-of-the-year"
            />
            <NewsCard
              title="New parking system for matchdays announced"
              date="June 10, 2026"
              category="Getting here"
              image="/matchday_exterior.png"
              href="/news/parking-update"
            />
            <NewsCard
              title="Summer concert series lineup revealed"
              date="June 5, 2026"
              category="Events"
              image="/concert_event_1782318250313.png"
              href="/news/summer-concerts"
            />
          </div>
        </div>
      </section>

      {/* Virtual & Webcams */}
      <section className="bg-arena-navy py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 text-center">
            <p className="text-arena-primary text-xs font-bold uppercase tracking-[3px] mb-2">Explore Virtually</p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase">Virtual &amp; Webcams</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <VirtualCard
              title="Virtual Tour"
              subtitle="360° Virtual Tour"
              image="/arena_interior.png"
              href="https://akiibua.com/360/akiibuaarena/"
            />
            <VirtualCard
              title="Live Webcam"
              subtitle="See the Stadium live"
              image="/arena_night_hero_1782318185369.png"
              href="/arena/webcam"
            />
            <VirtualCard
              title="3D Stadium"
              subtitle="Interactive 3D Model"
              image="/namboole_fans.png"
              href="https://akiibua.ug/arena3d/"
            />
          </div>
        </div>
      </section>

      {/* General Information */}
      <section className="bg-arena-slate">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-10">
            <p className="text-arena-primary text-xs font-bold uppercase tracking-[3px] mb-2">Visitor Guide</p>
            <h2 className="text-3xl md:text-4xl font-black text-arena-navy uppercase tracking-tight">General Information</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <InfoCard
              title="Parking for Caravans"
              subtitle="Getting here and entry"
              cta="Learn More"
              image="/namboole_parking.png"
              href="/getting-here/caravans"
            />
            <InfoCard
              title="Travelling on Matchdays"
              subtitle="Getting here"
              cta="Learn More"
              image="/matchday_exterior.png"
              href="/getting-here/matchday"
            />
            <InfoCard
              title="The Esplanade Experience"
              subtitle="Around the Stadium"
              cta="Learn More"
              image="/esplanade.png"
              href="/arena/froettmaning-experience"
            />
          </div>
        </div>
      </section>

      {/* Partners strip */}
      <section className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] text-gray-400 uppercase tracking-[3px] mb-8 font-bold">Official Partners</p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {["MTN Uganda", "Airtel Uganda", "Nile Special", "Stanbic Bank", "TotalEnergies"].map((name) => (
              <div key={name} className="text-gray-300 hover:text-arena-primary text-sm font-black uppercase tracking-[2px] transition-colors cursor-pointer">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
