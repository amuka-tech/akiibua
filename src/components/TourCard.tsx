import Image from "next/image";
import Link from "next/link";

interface TourCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  badge?: string;
  image: string;
  href: string;
}

export default function TourCard({ title, description, price, duration, badge, image, href }: TourCardProps) {
  return (
    <Link href={href} className="group block bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-arena-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="min-h-[120px]">
          <h3 className="font-bold text-xl mb-2 group-hover:text-arena-primary transition-colors line-clamp-2">{title}</h3>
          {badge && <span className="inline-block px-2 py-1 bg-arena-red/10 text-arena-primary text-xs font-bold uppercase tracking-wider rounded mb-2">{badge}</span>}
          <p className="text-sm text-arena-muted leading-relaxed line-clamp-3">{description}</p>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-end justify-between">
          <div>
            <p className="text-xs text-arena-muted uppercase tracking-wider mb-1">{duration}</p>
            <p className="text-arena-primary font-black text-2xl tracking-tight">{price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
