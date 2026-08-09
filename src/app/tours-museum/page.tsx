import HeroSection from "@/components/HeroSection";
import TourCard from "@/components/TourCard";
import InfoCard from "@/components/InfoCard";
import { Star, Wallet, Crown } from "lucide-react";
import PricingTabs from "@/components/pricing/PricingTabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tours & Museum | Akii-Bua Olympic Stadium",
  description: "Experience the Akii-Bua Olympic Stadium and its history.",
};

export default function ToursMuseumPage() {
  return (
    <>
      <HeroSection
        title="Tours & Museum"
        subtitle="Experience the Akii-Bua Olympic Stadium and history up close"
        image="/museum_tour_1782318204191.png"
      />
      

      {/* Main Experiences - Dark Section */}
      <section className="bg-arena-navy py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold text-white uppercase tracking-wider">Top Experiences</h2>
            <div className="h-1 bg-arena-red flex-1 max-w-[100px] rounded" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TourCard
              title="Museum Only"
              description="Immerse yourself in history with access to the museum and an audio guide in 11 languages."
              price="UGX 10,000 for adults"
              duration="Approx. 1.5 hrs"
              badge="Budget Option"
              image="/museum_tour_1782318204191.png"
              href="/tours-museum/akiibua-museum"
            />
            <TourCard
              title="Museum + Arena View"
              description="View the arena from the stands (without pitch access) plus museum access."
              price="UGX 20,000 for adults"
              duration="Approx. 1.5 hrs"
              image="/museum_tour_1782318204191.png"
              href="/tours-museum/akiibua-museum-arena-view"
            />
            <TourCard
              title="Arena VIP Tour"
              description="Exclusive access to VIP areas and team perspective. Advance booking recommended."
              price="UGX 50,000 for adults"
              duration="Approx. 3.0 hrs"
              badge="Premium"
              image="/museum_tour_1782318204191.png"
              href="/tours-museum/vip-tour"
            />
          </div>
        </div>
      </section>

      {/* Comprehensive Pricing Tables - Light Section */}
      <section className="bg-slate-50 py-24 px-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-arena-navy uppercase tracking-tight leading-none mb-4">
              Ticket <span className="text-arena-primary">Pricing</span>
            </h2>
            <p className="text-arena-navy/70 text-lg max-w-2xl mx-auto">
              Choose the perfect ticket category for your visit. We offer specialized rates for individuals, large groups, and educational trips.
            </p>
          </div>

          <PricingTabs />

        </div>
      </section>

      {/* Services & Recommendations - Slate Section */}
      <section className="bg-arena-gray py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-arena-navy uppercase tracking-wider">Recommendations</h2>
                <div className="h-1 bg-arena-red flex-1 max-w-[100px] rounded" />
              </div>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Star className="w-7 h-7 text-arena-primary fill-arena-primary" />
                  <div>
                    <strong className="text-arena-navy block uppercase tracking-wide">Best Value</strong>
                    <p className="text-arena-muted text-sm mt-1">The Museum + Arena Tour (UGX 30,000) offers the most comprehensive experience.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Wallet className="w-7 h-7 text-arena-primary" />
                  <div>
                    <strong className="text-arena-navy block uppercase tracking-wide">Budget Option</strong>
                    <p className="text-arena-muted text-sm mt-1">Museum only (UGX 10,000) if you&apos;re primarily interested in AkiiBua&apos;s history.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Crown className="w-7 h-7 text-arena-primary" />
                  <div>
                    <strong className="text-arena-navy block uppercase tracking-wide">Exclusive Experience</strong>
                    <p className="text-arena-muted text-sm mt-1">VIP Tour (UGX 50,000) for behind-the-scenes access. Book in advance!</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-arena-navy uppercase tracking-wider">Services</h2>
                <div className="h-1 bg-arena-red flex-1 max-w-[100px] rounded" />
              </div>
              <div className="space-y-6">
                <InfoCard
                  title="Audio Guide"
                  subtitle="ENHANCE YOUR VISIT"
                  cta="Learn More"
                  image="/museum_exhibition.png"
                  href="/tours-museum/audio-guide"
                />
                <InfoCard
                  title="Gift Vouchers"
                  subtitle="THE PERFECT PRESENT"
                  cta="Buy Voucher"
                  image="/museum_tour_1782318204191.png"
                  href="/tours-museum/vouchers"
                />
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}
