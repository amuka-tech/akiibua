import HeroSection from "@/components/HeroSection";
import VirtualCard from "@/components/VirtualCard";
import InfoCard from "@/components/InfoCard";

export default function ArenaPage() {
  return (
    <>
      <HeroSection
        title="Arena"
        subtitle="Discover the architectural masterpiece and home of AkiiBua"
        image="/akiibua_impression_exterior.jpg"
      />
      
      {/* Explore the Arena Section - Dark */}
      <section className="bg-arena-navy py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold text-white uppercase tracking-wider">Explore the Arena</h2>
            <div className="h-1 bg-arena-red flex-1 max-w-[100px] rounded" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VirtualCard
              href="/arena/webcam"
              title="LIVE VIEW"
              subtitle="Webcams"
              image="/arena_interior.png"
            />
            <VirtualCard
              href="/arena/facts"
              title="INFORMATION"
              subtitle="Facts & Figures"
              image="/arena_night_hero_1782318185369.png"
            />
            <VirtualCard
              href="/arena/pictures/galleries"
              title="GALLERY"
              subtitle="Picture Galleries"
              image="/arena_interior.png"
            />
          </div>
        </div>
      </section>

      {/* Matchday & Hospitality Section - Light */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-black text-arena-navy uppercase tracking-tight leading-none mb-6">
                Matchday &<br />
                <span className="text-arena-primary">Hospitality</span>
              </h2>
              <p className="text-arena-navy/70 mb-8 text-sm leading-relaxed">
                Experience the unique atmosphere of the Akii-Bua Olympic Stadium with our exclusive hospitality packages. Discover all the information you need for a perfect matchday visit.
              </p>
            </div>
            
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
              <InfoCard
                href="/arena/hospitality-and-tickets"
                title="Hospitality & Tickets"
                subtitle="VIP EXPERIENCE"
                cta="View Packages"
                image="/vip_lounge.png"
              />
              <InfoCard
                href="/arena/payment-on-matchday"
                title="Payment on Matchday"
                subtitle="CASHLESS"
                cta="Learn More"
                image="/arena_interior.png"
              />
              <InfoCard
                href="/arena/barrier-free-arena"
                title="Barrier-free Arena"
                subtitle="ACCESSIBILITY"
                cta="Information"
                image="/arena_night_hero_1782318185369.png"
              />
              <InfoCard
                href="/arena/stadium-by-laws"
                title="Stadium By-laws"
                subtitle="REGULATIONS"
                cta="Read By-laws"
                image="/arena_interior.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Info Section - Dark */}
      <section className="bg-arena-gray py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold text-arena-navy uppercase tracking-wider">More Information</h2>
            <div className="h-1 bg-arena-red flex-1 max-w-[100px] rounded" />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/arena/froettmaning-experience" className="block p-8 bg-white shadow-card hover:shadow-card-hover rounded-xl group transition-all hover:-translate-y-1">
              <h3 className="font-bold text-lg text-arena-navy group-hover:text-arena-primary transition-colors mb-2">FrÃ¶ttmaning Experience</h3>
              <span className="text-xs text-arena-navy/60 group-hover:text-arena-primary/80 font-semibold uppercase tracking-wider">Discover â†’</span>
            </a>
            <a href="/arena/opening-hours" className="block p-8 bg-white shadow-card hover:shadow-card-hover rounded-xl group transition-all hover:-translate-y-1">
              <h3 className="font-bold text-lg text-arena-navy group-hover:text-arena-primary transition-colors mb-2">Opening Hours</h3>
              <span className="text-xs text-arena-navy/60 group-hover:text-arena-primary/80 font-semibold uppercase tracking-wider">View Times â†’</span>
            </a>
            <a href="/arena/pictures/wallpaper" className="block p-8 bg-white shadow-card hover:shadow-card-hover rounded-xl group transition-all hover:-translate-y-1">
              <h3 className="font-bold text-lg text-arena-navy group-hover:text-arena-primary transition-colors mb-2">Wallpapers</h3>
              <span className="text-xs text-arena-navy/60 group-hover:text-arena-primary/80 font-semibold uppercase tracking-wider">Download â†’</span>
            </a>
            <a href="/arena/pictures/picture-service" className="block p-8 bg-white shadow-card hover:shadow-card-hover rounded-xl group transition-all hover:-translate-y-1">
              <h3 className="font-bold text-lg text-arena-navy group-hover:text-arena-primary transition-colors mb-2">Press Pictures</h3>
              <span className="text-xs text-arena-navy/60 group-hover:text-arena-primary/80 font-semibold uppercase tracking-wider">Media Hub â†’</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
