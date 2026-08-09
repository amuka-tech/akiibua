import { notFound } from "next/navigation";
import { rooms } from "@/data/rooms";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import Image from "@/components/ImageWrapper";

export function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.slug,
  }));
}

export default function RoomDetailsPage({ params }: { params: { slug: string } }) {
  const room = rooms.find((r) => r.slug === params.slug);

  if (!room) {
    notFound();
  }

  return (
    <>
      <HeroSection
        title={room.title}
        subtitle="Event Venue"
        image={room.image}
        size="small"
      />
      
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/event-venue/rooms" className="inline-block mb-10 text-arena-primary font-bold text-sm uppercase tracking-[2px] hover:text-red-700 transition-colors">
            ← Back to Rooms
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <div className="relative aspect-[4/3] w-full">
                <Image 
                  src={room.image} 
                  alt={room.title} 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-arena-navy uppercase tracking-tight mb-8">
                {room.title} Details
              </h2>
              
              <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 space-y-6">
                <div>
                  <h3 className="text-xs text-arena-muted font-bold uppercase tracking-wider mb-2">Capacity</h3>
                  <p className="text-xl font-black text-arena-navy">Max. {room.capacity} Persons</p>
                </div>
                
                <div className="w-full h-px bg-gray-200" />
                
                <div>
                  <h3 className="text-xs text-arena-muted font-bold uppercase tracking-wider mb-2">Size</h3>
                  <p className="text-xl font-black text-arena-navy">{room.size} m²</p>
                </div>
                
                <div className="w-full h-px bg-gray-200" />
                
                <div>
                  <h3 className="text-xs text-arena-primary font-bold uppercase tracking-wider mb-2">Ideal For</h3>
                  <p className="text-lg font-medium text-arena-navy/80 leading-relaxed">{room.idealFor}</p>
                </div>
              </div>

              <div className="mt-10">
                <button className="w-full bg-arena-red text-white font-bold px-8 py-4 hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(220,5,45,0.3)] text-sm uppercase tracking-[2px] rounded-lg">
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
