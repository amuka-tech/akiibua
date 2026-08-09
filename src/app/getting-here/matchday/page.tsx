import HeroSection from "@/components/HeroSection";
import Image from "@/components/ImageWrapper";
import { MapPin, Ticket } from "lucide-react";

export default function AkiiBuaMatchdayPage() {
  return (
    <>
      <HeroSection
        title="Akii-Bua Matchday"
        subtitle="Akii-Bua Olympic Stadium, Uganda"
        image="/transport_public.png"
       size="small" />
      
      {/* Transport Methods - Mapped to "Explore the Arena" Dark Section */}
      <section className="bg-arena-navy py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-10">
            <span className="text-blue-300 font-bold tracking-[3px] uppercase text-xs mb-2 block">Important Notice</span>
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold text-white uppercase tracking-wider">Transport Methods</h2>
              <div className="h-1 bg-arena-red flex-1 max-w-[100px] rounded" />
            </div>
            <p className="text-white/60 mt-4 max-w-3xl">
              There are many ways to get to Akii-Bua Olympic Stadium. However, experience shows that the Lira-Kamdini Highway gets heavily congested. The Uganda Police Force advises all fans to use public transport.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Custom Card (Mimics VirtualCard but supports text) */}
            <div className="group flex flex-col bg-arena-dark rounded-xl overflow-hidden shadow-card hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/5 transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden shrink-0">
                <Image src="/transport_public.png" alt="Public Transport" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-arena-dark via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-4">
                  <span className="text-[10px] text-arena-primary font-black uppercase tracking-[2px]">Matatus & Buses</span>
                  <h3 className="font-bold text-xl mt-1 text-gray-900 group-hover:text-arena-primary transition-colors">Public Transport</h3>
                </div>
              </div>
              <div className="p-6 pt-2 flex-1">
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Catch matatus heading to Kamdini or Soroti from downtown Lira. Ask to drop off at the Akii-Bua turn-off.
                </p>
                <p className="text-arena-primary/80 text-xs italic">*Match ticket does not include fare.</p>
              </div>
            </div>

            <div className="group flex flex-col bg-arena-dark rounded-xl overflow-hidden shadow-card hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/5 transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden shrink-0">
                <Image src="/boda_stage.png" alt="Boda-Boda" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-arena-dark via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-4">
                  <span className="text-[10px] text-arena-primary font-black uppercase tracking-[2px]">Fastest Route</span>
                  <h3 className="font-bold text-xl mt-1 text-gray-900 group-hover:text-arena-primary transition-colors">Boda-Boda</h3>
                </div>
              </div>
              <div className="p-6 pt-2 flex-1">
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  The fastest way to beat traffic. They will drop you at the designated Boda Stage, a 10-minute walk from the gates.
                </p>
                <p className="text-arena-primary/80 text-xs italic">*Agree on fare before boarding.</p>
              </div>
            </div>

            <div className="group flex flex-col bg-arena-dark rounded-xl overflow-hidden shadow-card hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/5 transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden shrink-0">
                <Image src="/matchday_parking.png" alt="By Car" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-arena-dark via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-4">
                  <span className="text-[10px] text-arena-primary font-black uppercase tracking-[2px]">UGX 5,000</span>
                  <h3 className="font-bold text-xl mt-1 text-gray-900 group-hover:text-arena-primary transition-colors">By Car</h3>
                </div>
              </div>
              <div className="p-6 pt-2 flex-1">
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  VIP Parking (paved) is highly recommended. General parking grounds can become muddy during the rainy season.
                </p>
              </div>
            </div>

            <div className="group flex flex-col bg-arena-dark rounded-xl overflow-hidden shadow-card hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/5 transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden shrink-0">
                <Image src="/fan_buses.png" alt="Fan Buses" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-arena-dark via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-4">
                  <span className="text-[10px] text-arena-primary font-black uppercase tracking-[2px]">UGX 5,000</span>
                  <h3 className="font-bold text-xl mt-1 text-gray-900 group-hover:text-arena-primary transition-colors">Fan Buses</h3>
                </div>
              </div>
              <div className="p-6 pt-2 flex-1">
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  For organized supporter groups. Coach parking is available behind the stadium from 8:00 AM on matchdays.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Logistics & Security - Mapped to "Matchday & Hospitality" Light Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            
            <div className="md:w-1/3">
              <h2 className="text-4xl font-black text-arena-navy uppercase tracking-tight leading-none mb-6">
                Matchday <br />
                <span className="text-arena-primary">Logistics</span>
              </h2>
              <p className="text-arena-navy/70 mb-8 text-sm leading-relaxed">
                Experience the intense atmosphere of the Akii-Bua Olympic Stadium safely. Discover all the essential security and logistics information you need to navigate the crowds seamlessly.
              </p>
            </div>
            
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
              
              {/* Custom InfoCard (Mimics InfoCard layout without href dependency) */}
              <div className="group flex flex-col md:flex-row items-center gap-6 p-4 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative w-full md:w-32 h-40 md:h-32 shrink-0 rounded-lg overflow-hidden">
                  <Image src="/security_turnstiles.png" alt="Security" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex-1 min-w-0 px-2 md:px-0 text-center md:text-left">
                  <span className="text-[10px] text-arena-primary font-bold uppercase tracking-[2px]">Safety Check</span>
                  <h3 className="font-bold text-lg mt-1 group-hover:text-arena-primary transition-colors leading-snug">Away Fans & Security</h3>
                  <p className="text-xs text-arena-muted mt-2 leading-relaxed">For high-risk derbies, away fans are segregated. Do not wear away colors in general areas.</p>
                </div>
              </div>

              <div className="group flex flex-col md:flex-row items-center gap-6 p-4 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative w-full md:w-32 h-40 md:h-32 shrink-0 rounded-lg overflow-hidden bg-arena-navy/10 flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-arena-primary" />
                </div>
                <div className="flex-1 min-w-0 px-2 md:px-0 text-center md:text-left">
                  <span className="text-[10px] text-arena-primary font-bold uppercase tracking-[2px]">Rendezvous</span>
                  <h3 className="font-bold text-lg mt-1 group-hover:text-arena-primary transition-colors leading-snug">Meeting Points</h3>
                  <p className="text-xs text-arena-muted mt-2 leading-relaxed">If separated, meet at the large food stalls outside the main gates or the Police booth at Gate A.</p>
                </div>
              </div>

              <div className="group flex flex-col md:flex-row items-center gap-6 p-4 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative w-full md:w-32 h-40 md:h-32 shrink-0 rounded-lg overflow-hidden">
                  <Image src="/arena_interior.png" alt="Stadium" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex-1 min-w-0 px-2 md:px-0 text-center md:text-left">
                  <span className="text-[10px] text-arena-primary font-bold uppercase tracking-[2px]">Regulations</span>
                  <h3 className="font-bold text-lg mt-1 group-hover:text-arena-primary transition-colors leading-snug">Prohibited Items</h3>
                  <p className="text-xs text-arena-muted mt-2 leading-relaxed">Glass bottles, weapons, and sharp umbrellas will be confiscated. Buy drinks inside the gates.</p>
                </div>
              </div>

              <div className="group flex flex-col md:flex-row items-center gap-6 p-4 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative w-full md:w-32 h-40 md:h-32 shrink-0 rounded-lg overflow-hidden bg-arena-navy/10 flex items-center justify-center">
                  <Ticket className="w-10 h-10 text-arena-primary" />
                </div>
                <div className="flex-1 min-w-0 px-2 md:px-0 text-center md:text-left">
                  <span className="text-[10px] text-arena-primary font-bold uppercase tracking-[2px]">Access</span>
                  <h3 className="font-bold text-lg mt-1 group-hover:text-arena-primary transition-colors leading-snug">Stadium Entrances</h3>
                  <p className="text-xs text-arena-muted mt-2 leading-relaxed">Check your ticket for your designated entrance. Boda-Bodas are not allowed near pedestrian gates.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Leaving the Stadium - Mapped to "More Information" Gray Section */}
      <section className="bg-arena-gray py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold text-arena-navy uppercase tracking-wider">Leaving the Stadium</h2>
            <div className="h-1 bg-arena-red flex-1 max-w-[100px] rounded" />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="block p-8 bg-white shadow-card hover:shadow-card-hover rounded-xl group transition-all">
              <h3 className="font-bold text-lg text-arena-primary mb-2 uppercase tracking-wider">The Golden Rule</h3>
              <p className="text-sm text-arena-navy/80 font-medium leading-relaxed">
                Do not rush to your car. If you are parked in the general grounds, your car will be completely boxed in by buses and matatus for hours.
              </p>
            </div>
            <div className="block p-8 bg-white shadow-card hover:shadow-card-hover rounded-xl group transition-all">
              <h3 className="font-bold text-lg text-arena-navy mb-2 uppercase tracking-wider">Our Recommendation</h3>
              <p className="text-sm text-arena-navy/80 font-medium leading-relaxed">
                Stay inside the stadium or at the food stalls. Listen to post-match interviews, grab a Rolex, and wait 1 to 1.5 hours for the Lira Road gridlock to clear.
              </p>
            </div>
            <div className="block p-8 bg-white shadow-card hover:shadow-card-hover rounded-xl group transition-all">
              <h3 className="font-bold text-lg text-arena-navy mb-2 uppercase tracking-wider">Traffic Direction</h3>
              <p className="text-sm text-arena-navy/80 font-medium leading-relaxed">
                When driving out, strictly follow Traffic Police directions. Illegal U-turns on the highway cause massive bottlenecks and attract heavy fines.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

