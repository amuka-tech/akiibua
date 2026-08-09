import Image from "next/image";
import Link from "next/link";

interface VirtualCardProps {
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export default function VirtualCard({ title, subtitle, image, href }: VirtualCardProps) {
  return (
    <Link href={href} className="group block bg-arena-dark rounded-xl overflow-hidden shadow-card hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/5 transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-arena-dark via-transparent to-transparent opacity-90" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="text-[10px] text-arena-primary font-black uppercase tracking-[2px]">{title}</span>
        <h3 className="font-bold text-xl mt-1 text-gray-900 group-hover:text-arena-primary transition-colors">{subtitle}</h3>
      </div>
    </Link>
  );
}

