import Image from "next/image";
import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumbs?: Breadcrumb[];
  children: React.ReactNode;
}

export default function PageLayout({
  title,
  subtitle,
  image = "/arena_night_hero_1782318185369.png",
  breadcrumbs,
  children,
}: PageLayoutProps) {
  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative w-full h-[40vh] min-h-[300px] overflow-hidden group">
        <div className="absolute inset-0 bg-arena-navy">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-arena-navy/90 via-arena-navy/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-arena-navy/80 via-arena-navy/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 text-white px-8 md:px-16 max-w-7xl mx-auto">
          <div className="max-w-3xl animate-slide-up">
            <div className="w-16 h-1 bg-arena-red mb-5 rounded" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 tracking-tight uppercase">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base md:text-xl text-white/80 font-light tracking-wide max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Breadcrumb bar */}
      {breadcrumbs && (
        <div className="bg-white border-b border-gray-200 shadow-section">
          <div className="max-w-7xl mx-auto px-8 md:px-16 py-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-gray-300">/</span>}
                <Link href={crumb.href} className="hover:text-arena-primary transition-colors">
                  {crumb.label}
                </Link>
              </span>
            ))}
            <span className="text-gray-300">/</span>
            <span className="text-arena-primary">{title}</span>
          </div>
        </div>
      )}

      {/* Content */}
      <section className="bg-arena-gray py-14 md:py-20 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8 md:p-12 lg:p-16">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
