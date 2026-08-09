import Image from "@/components/ImageWrapper";

interface HeroSectionProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  image?: string;
  size?: "large" | "small";
}

export default function HeroSection({
  title = "Akii-Bua Olympic Stadium",
  subtitle = "The heart of AkiiBua.",
  image = "/arena_night_hero_1782318185369.png",
  size = "large",
}: HeroSectionProps) {
  const heightClass = size === "large" ? "h-[75vh] min-h-[500px]" : "h-[35vh] min-h-[250px] md:h-[40vh]";
  const titleClass = size === "large" ? "text-5xl md:text-6xl lg:text-8xl" : "text-4xl md:text-5xl lg:text-6xl";
  const subtitleClass = size === "large" ? "text-xl md:text-3xl" : "text-lg md:text-xl";

  return (
    <section className={`relative w-full ${heightClass} overflow-hidden group`}>
      <div className="absolute inset-0 bg-arena-dark">
        <Image
          src={image}
          alt={title || "Arena"}
          fill
          className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-arena-dark via-arena-dark/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-arena-dark/80 via-arena-dark/40 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col justify-center text-white px-8 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-3xl animate-slide-up">
          <div className="w-16 h-1 bg-arena-red mb-6" />
          <h1 className={`${titleClass} font-black mb-4 tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(220,5,45,0.4)]`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`${subtitleClass} text-white/90 font-light tracking-wide max-w-2xl`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
