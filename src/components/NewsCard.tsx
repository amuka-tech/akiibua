import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  title: string;
  date: string;
  category: string;
  image: string;
  href: string;
}

export default function NewsCard({ title, date, category, image, href }: NewsCardProps) {
  return (
    <Link href={href} className="group block bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] bg-gray-100 px-2 py-1 rounded text-arena-primary font-bold uppercase tracking-widest">{category}</span>
          <span className="text-xs text-arena-muted font-medium">{date}</span>
        </div>
        <h3 className="font-bold text-lg group-hover:text-arena-primary transition-colors leading-snug">{title}</h3>
        <div className="mt-4 flex items-center text-arena-primary text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0 duration-300">
          Read more <span className="ml-1">→</span>
        </div>
      </div>
    </Link>
  );
}
