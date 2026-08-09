import Image from "next/image";
import Link from "next/link";

interface SimpleCardProps {
  title: string;
  href: string;
  image?: string;
  description?: string;
}

export default function SimpleCard({ title, href, image, description }: SimpleCardProps) {
  const CardContent = () => (
    <div className="group block bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
      {image && (
        <div className="relative h-40 overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
      )}
      <div className="p-5">
        <h3 className="font-bold text-arena-navy group-hover:text-arena-primary transition-colors">{title}</h3>
        {description && <p className="text-sm text-arena-muted mt-1 leading-relaxed">{description}</p>}
      </div>
    </div>
  );

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        <CardContent />
      </a>
    );
  }

  return (
    <Link href={href} className="block h-full">
      <CardContent />
    </Link>
  );
}
