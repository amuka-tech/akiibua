import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { Bus, Route } from "lucide-react";

export default function AkiiBuaNonMatchdayPage() {
  return (
    <>
      <HeroSection
        title="Visiting on Non-Matchdays"
        subtitle="Akii-Bua Olympic Stadium, Uganda"
        image="/transport_public.png"
       size="small" />
      
      {/* Transport Methods - Mapped to "Explore the Arena" Dark Section */}
      <section className="bg-arena-navy py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-10">
            <span className="text-arena-primary font-bold tracking-[3px] uppercase text-xs mb-2">A Peaceful Experience</span>
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold text-white uppercase tracking-wider">Getting Here</h2>
              <div className="h-1 bg-arena-red flex-1 max-w-[100px] rounded" />
            </div>
            <p className="text-white/60 mt-4 max-w-3xl">
              Without the matchday chaos, arriving at the stadium is straightforward and stress-free. Here are the best ways to reach the Akii-Bua Olympic Stadium grounds on a regular day.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Custom Card (Mimics VirtualCard but supports text) */}
            <div className="group flex flex-col bg-arena-dark rounded-xl overflow-hidden shadow-card hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/5 transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden shrink-0">
                <Image src="/transport_public.png" alt="Public Transport" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-arena-dark via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-4">
                  <span className="text-[10px] text-arena-primary font-black uppercase tracking-[2px]">Matatus & Taxis</span>
                  <h3 className="font-bold text-xl mt-1 text-gray-900 group-hover:text-arena-primary transition-colors">Public Transport</h3>
                </div>
              </div>
              <div className="p-6 pt-2 flex-1">
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Head to downtown Lira and take any matatu heading to Kamdini or Soroti. Drop off at the Akii-Bua turn-off.
                </p>
                <p className="text-arena-primary/80 text-xs italic">*Tip: Hire a &quot;Special Hire&quot; to drop you exactly at the VIP gates.</p>
              </div>
            </div>

            <div className="group flex flex-col bg-arena-dark rounded-xl overflow-hidden shadow-card hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/5 transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden shrink-0">
                <Image src="/boda_stage.png" alt="Boda-Boda" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-arena-dark via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-4">
                  <span className="text-[10px] text-arena-primary font-black uppercase tracking-[2px]">Direct Drop-off</span>
                  <h3 className="font-bold text-xl mt-1 text-gray-900 group-hover:text-arena-primary transition-colors">Boda-Boda</h3>
                </div>
              </div>
              <div className="p-6 pt-2 flex-1">
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Unlike matchdays, boda-bodas are allowed to drop you off directly at the North Entrance, making it incredibly convenient.
                </p>
              </div>
            </div>

            <div className="group flex flex-col bg-arena-dark rounded-xl overflow-hidden shadow-card hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/5 transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden shrink-0">
                <Image src="/matchday_parking.png" alt="By Car" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-arena-dark via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-4">
                  <span className="text-[10px] text-arena-primary font-black uppercase tracking-[2px]">North Coach Park</span>
                  <h3 className="font-bold text-xl mt-1 text-gray-900 group-hover:text-arena-primary transition-colors">By Car</h3>
                </div>
              </div>
              <div className="p-6 pt-2 flex-1">
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Take the Akii-Bua exit. Cars are UGX 5,000/day. The first 45 minutes are free for drop-offs.
                </p>
                <p className="text-arena-primary/80 text-xs italic">*Pay via Mobile Money.</p>
              </div>
            </div>

            <div className="group flex flex-col bg-arena-dark rounded-xl overflow-hidden shadow-card hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/5 transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden shrink-0">
                <Image src="/namboole_entrance.png" alt="By Bicycle" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-arena-dark via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-4">
                  <span className="text-[10px] text-arena-primary font-black uppercase tracking-[2px]">Free Parking</span>
                  <h3 className="font-bold text-xl mt-1 text-gray-900 group-hover:text-arena-primary transition-colors">By Bicycle</h3>
                </div>
              </div>
              <div className="p-6 pt-2 flex-1">
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Avoid highway traffic entirely. Bypass the boom gates and park at the designated racks right next to the North Entrance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Logistics & Departure - Mapped to "Matchday & Hospitality" Light Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            
            <div className="md:w-1/3">
              <h2 className="text-4xl font-black text-arena-navy uppercase tracking-tight leading-none mb-6">
                Logistics & <br />
                <span className="text-arena-primary">Departure</span>
              </h2>
              <p className="text-arena-navy/70 mb-8 text-sm leading-relaxed">
                Whether you are bringing a large school trip or just trying to navigate back to Lira, leaving the stadium on a regular day is quick and straightforward.
              </p>
            </div>
            
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
              
              {/* Custom InfoCard (Mimics InfoCard layout without href dependency) */}
              <div className="group flex flex-col md:flex-row items-center gap-6 p-4 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative w-full md:w-32 h-40 md:h-32 shrink-0 rounded-lg overflow-hidden bg-arena-navy/10 flex items-center justify-center">
                  <Bus className="w-10 h-10 text-arena-primary" />
                </div>
                <div className="flex-1 min-w-0 px-2 md:px-0 text-center md:text-left">
                  <span className="text-[10px] text-arena-primary font-bold uppercase tracking-[2px]">Group Tours</span>
                  <h3 className="font-bold text-lg mt-1 group-hover:text-arena-primary transition-colors leading-snug">Tour Coaches</h3>
                  <p className="text-xs text-arena-muted mt-2 leading-relaxed">Large vehicles should use the North Coach Park. Ensure drivers avoid the locked South gates.</p>
                </div>
              </div>

              <div className="group flex flex-col md:flex-row items-center gap-6 p-4 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative w-full md:w-32 h-40 md:h-32 shrink-0 rounded-lg overflow-hidden">
                  <Image src="/arena_interior.png" alt="Access Road" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex-1 min-w-0 px-2 md:px-0 text-center md:text-left">
                  <span className="text-[10px] text-arena-primary font-bold uppercase tracking-[2px]">Quick Exit</span>
                  <h3 className="font-bold text-lg mt-1 group-hover:text-arena-primary transition-colors leading-snug">The Access Road</h3>
                  <p className="text-xs text-arena-muted mt-2 leading-relaxed">Unlike matchdays, leaving is completely stress-free. The access road to the highway is clear.</p>
                </div>
              </div>

              <div className="group flex flex-col md:flex-row items-center gap-6 p-4 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative w-full md:w-32 h-40 md:h-32 shrink-0 rounded-lg overflow-hidden bg-arena-navy/10 flex items-center justify-center">
                  <Route className="w-10 h-10 text-arena-primary" />
                </div>
                <div className="flex-1 min-w-0 px-2 md:px-0 text-center md:text-left">
                  <span className="text-[10px] text-arena-primary font-bold uppercase tracking-[2px]">Merging</span>
                  <h3 className="font-bold text-lg mt-1 group-hover:text-arena-primary transition-colors leading-snug">The Highway Merge</h3>
                  <p className="text-xs text-arena-muted mt-2 leading-relaxed">You can drive straight onto the Lira-Kamdini Highway. Just watch out for speeding trucks as you merge!</p>
                </div>
              </div>

              <div className="group flex flex-col md:flex-row items-center gap-6 p-4 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative w-full md:w-32 h-40 md:h-32 shrink-0 rounded-lg overflow-hidden">
                  <Image src="/namboole_entrance.png" alt="Gates" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex-1 min-w-0 px-2 md:px-0 text-center md:text-left">
                  <span className="text-[10px] text-arena-primary font-bold uppercase tracking-[2px]">Open Entrances</span>
                  <h3 className="font-bold text-lg mt-1 group-hover:text-arena-primary transition-colors leading-snug">Pedestrian Gates</h3>
                  <p className="text-xs text-arena-muted mt-2 leading-relaxed">The North Entrance is usually the only open gate during standard working hours.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Navigating the Highway - Mapped to "More Information" Gray Section */}
      <section className="bg-arena-gray py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold text-arena-navy uppercase tracking-wider">Navigating the Highway</h2>
            <div className="h-1 bg-arena-red flex-1 max-w-[100px] rounded" />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="block p-8 bg-white shadow-card hover:shadow-card-hover rounded-xl group transition-all">
              <h3 className="font-bold text-lg text-arena-navy mb-2 uppercase tracking-wider">Traffic Context</h3>
              <p className="text-sm text-arena-navy/80 font-medium leading-relaxed">
                Visiting Akii-Bua on a non-matchday is much more peaceful. The massive crowds and heavy security barricades are gone, but you still need to navigate the vast grounds.
              </p>
            </div>
            <div className="block p-8 bg-white shadow-card hover:shadow-card-hover rounded-xl group transition-all">
              <h3 className="font-bold text-lg text-arena-primary mb-2 uppercase tracking-wider">Plan Your Route</h3>
              <p className="text-sm text-arena-navy/80 font-medium leading-relaxed">
                We strongly recommend checking your route in advance using a maps application. Do not underestimate the normal daily traffic.
              </p>
            </div>
            <div className="block p-8 bg-white shadow-card hover:shadow-card-hover rounded-xl group transition-all">
              <h3 className="font-bold text-lg text-arena-navy mb-2 uppercase tracking-wider">Peak Hours</h3>
              <p className="text-sm text-arena-navy/80 font-medium leading-relaxed">
                Highway traffic around Kamdini and Soroti Road can still be extremely heavy during the standard morning and evening commute hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

