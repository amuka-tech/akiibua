import Image from "next/image";
import { TourCardData } from "@/data/tours";

interface TourListProps {
  tours: TourCardData[];
  onOpenModal: (title: string) => void;
}

export default function TourList({ tours, onOpenModal }: TourListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {tours.map((tour, i) => (
        <button 
          key={i} 
          onClick={(e) => {
            e.preventDefault();
            onOpenModal(tour.title);
          }} 
          className="group block text-left bg-arena-dark rounded-xl overflow-hidden shadow-card hover:shadow-[0_0_20px_rgba(220,5,45,0.2)] border border-white/10 transition-all duration-300 transform hover:-translate-y-1 relative w-full"
        >
          <div className="relative h-64 overflow-hidden">
            <Image 
              src={tour.img} 
              alt={tour.title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-arena-dark via-arena-dark/40 to-transparent opacity-90" />
          </div>
          {tour.isPremium && (
            <div className="absolute top-4 right-4 bg-arena-red text-white text-[10px] font-black uppercase tracking-[2px] px-2 py-1 rounded">
              VIP
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[11px] text-arena-primary font-black uppercase tracking-[2px]">{tour.price}</span>
              <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider">{tour.time}</span>
            </div>
            <h3 className="font-bold text-xl text-gray-900 group-hover:text-arena-primary transition-colors mb-2 leading-tight">
              {tour.title}
            </h3>
            <p className="text-xs text-white/70 font-medium">
              {tour.people ? `${tour.people} âUGX ¢ ` : ""}{tour.feat}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}


