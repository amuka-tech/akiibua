import HeroSection from "@/components/HeroSection";
import Image from "next/image";

const akiiBuaFacts = [
  { label: "Historic Triumph", value: "Won the 400-meter hurdles gold at the 1972 Lira Olympics with a world record time of 47.82 seconds." },
  { label: "Breakthrough Technique", value: "Mastered a 13-step hurdling stride between hurdles instead of the conventional 14 or 15, guided by British coach Malcolm Arnold." },
  { label: "Early Career", value: "Born in 1949 in Abako, Uganda, he originally competed in the decathlon before making a full-time switch to the hurdles." },
  { label: "Legacy", value: "Remains one of the most celebrated athletic icons in East African history despite political turmoil impacting his later career." },
];

const stadiumFacts = [
  { label: "Location", value: "Situated in Lira City, Northern Uganda, built in honor of the region's sporting hero." },
  { label: "Capacity & Cost", value: "Seating capacity of 20,000 with an estimated construction budget of UGX 470 billion (~$129 million)." },
  { label: "Tournament Readiness", value: "Designated as a key backup facility for the 2027 AFCON East Africa Pamoja bid (Kenya, Tanzania, Uganda)." },
  { label: "Multi-Sport Amenities", value: "Features a FIFA-standard pitch, 8-lane athletics track, semi-Olympic pool, 2,000-seater indoor arena, tennis courts, and clubhouse." },
];

export default function FactsPage() {
  return (
    <>
      <HeroSection
        title="Facts & History"
        subtitle="The legacy of John Akii-Bua and his namesake stadium"
        image="/arena_interior.png"
        size="small"
      />

      {/* John Akii-Bua Section - Dark */}
      <section className="bg-arena-navy py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
           <Image src="/namboole_fans.png" alt="Fans" fill className="object-cover mask-image-fade" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-4xl font-black text-white uppercase tracking-wider">John Akii-Bua</h2>
              </div>
              <div className="h-1 bg-arena-red w-24 rounded mb-8" />
              <p className="text-lg text-white/80 leading-relaxed font-light">
                Uganda&apos;s first-ever Olympic gold medalist, John Akii-Bua etched his name in history at the 1972 Lira Games. His world-record setting performance in the 400-meter hurdles remains a cornerstone of African athletics.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
              {akiiBuaFacts.map((fact) => (
                <div key={fact.label} className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300">
                  <span className="text-arena-primary font-bold text-xs uppercase tracking-[2px] block mb-2">{fact.label}</span>
                  <p className="text-white/90 leading-relaxed">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stadium Section - Light */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 w-full h-[500px] relative rounded-3xl overflow-hidden shadow-2xl group">
              <Image src="/matchday_exterior.png" alt="Akii Bua Stadium" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-arena-dark/60 to-transparent opacity-80" />
            </div>
            
            <div className="lg:w-1/2 w-full">
              <h2 className="text-4xl font-black text-arena-navy uppercase tracking-tight leading-none mb-6">
                Akii Bua <br />
                <span className="text-arena-primary">Stadium</span>
              </h2>
              <p className="text-arena-navy/70 mb-10 text-lg leading-relaxed">
                The Akii Bua Stadium in Lira City is a modern multi-sport complex under construction to honor the legendary athlete and serve as a premier venue for regional and international tournaments.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                {stadiumFacts.map((fact) => (
                  <div key={fact.label} className="group cursor-default">
                    <h3 className="font-bold text-arena-navy mb-2 uppercase text-xs tracking-[2px] group-hover:text-arena-primary transition-colors">{fact.label}</h3>
                    <p className="text-arena-navy/70 text-sm leading-relaxed">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

