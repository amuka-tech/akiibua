import Image from "@/components/ImageWrapper";
import Link from "next/link";

interface InfoCardProps {
  title: string;
  subtitle: string;
  cta: string;
  image: string;
  href: string;
}

export default function InfoCard({ title, subtitle, cta, image, href }: InfoCardProps) {
  return (
    <Link href={href} className="group flex flex-col md:flex-row items-center gap-6 p-4 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative w-full md:w-32 h-40 md:h-32 shrink-0 rounded-lg overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="flex-1 min-w-0 px-2 md:px-0 text-center md:text-left">
        <span className="text-[10px] text-arena-primary font-bold uppercase tracking-[2px]">{subtitle}</span>
        <h3 className="font-bold text-lg mt-1 group-hover:text-arena-primary transition-colors leading-snug">{title}</h3>
        <div className="mt-3 inline-flex items-center text-xs text-arena-primary font-bold uppercase tracking-wider border-b-2 border-transparent group-hover:border-arena-primary transition-colors">
          {cta} <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}
