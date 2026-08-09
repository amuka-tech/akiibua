import Link from "next/link";
import ImageWrapper from "@/components/ImageWrapper";

const footerColumns = [
  {
    title: "Stadium",
    links: [
      { href: "/news", label: "News & Updates" },
      { href: "/events", label: "Calendar & Events" },
      { href: "/arena/webcam", label: "Live Webcams" },
      { href: "/arena/facts", label: "Facts & History" },
      { href: "/arena/stadium-by-laws", label: "Stadium By-Laws" },
    ],
  },
  {
    title: "Media",
    links: [
      { href: "/arena/pictures/galleries", label: "Picture Galleries" },
      { href: "/arena/pictures/wallpaper", label: "Wallpapers" },
      { href: "/arena/pictures/picture-service", label: "Press & Media" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/getting-here/matchday", label: "Getting Here" },
      { href: "/arena/barrier-free-arena", label: "Accessibility" },
      { href: "/store-catering", label: "Store & Catering" },
      { href: "/getting-here/caravans", label: "Caravan Parking" },
    ],
  },
  {
    title: "Tours & Museum",
    links: [
      { href: "/tours-museum", label: "Stadium Tours" },
      { href: "/tours-museum/vip-tour", label: "VIP Tour Experience" },
      { href: "/tours-museum/group-tickets/disabled-tour", label: "Inclusive Tours" },
    ],
  },
  {
    title: "Hospitality",
    links: [
      { href: "/arena/hospitality-and-tickets", label: "VIP Hospitality" },
      { href: "/arena/hospitality-and-tickets/tickets", label: "Match Tickets" },
      { href: "/arena/hospitality-and-tickets/skybox", label: "Executive Skybox" },
      { href: "/arena/hospitality-and-tickets/season-tickets", label: "Season Passes" },
    ],
  },
];

const partnerLogos = ["Uganda Airlines", "MTN", "Stanbic Bank", "Nile Special", "TotalEnergies"];

export default function Footer() {
  return (
    <footer className="bg-arena-navy text-white relative border-t-[6px] border-arena-primary overflow-hidden mt-auto">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 mb-16 backdrop-blur-sm">
          <div className="mb-6 lg:mb-0 text-center lg:text-left">
            <h3 className="text-2xl font-bold uppercase tracking-wide mb-2 text-white">Join our Newsletter</h3>
            <p className="text-white/60 text-sm max-w-md">Get the latest news on events, matches, and exclusive ticketing offers straight to your inbox.</p>
          </div>
          <div className="flex w-full lg:w-auto max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-5 py-3.5 rounded-l-lg w-full focus:outline-none focus:border-arena-primary transition-colors text-sm"
            />
            <button className="bg-arena-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-6 py-3.5 rounded-r-lg transition-colors text-sm shrink-0 shadow-[0_0_15px_rgba(220,5,45,0.3)]">
              Subscribe
            </button>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 mb-16">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-sm uppercase tracking-[2px] mb-6 text-white border-b border-white/10 pb-3">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-arena-primary transition-all flex items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-arena-red opacity-0 group-hover:opacity-100 -ml-3 mr-1.5 transition-all"></span>
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="border-t border-white/10 pt-10 mb-12">
          <p className="text-center text-white/30 text-[10px] uppercase tracking-[3px] mb-6">Official Partners</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {partnerLogos.map((name) => (
              <div key={name} className="text-white/50 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider cursor-pointer">
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ImageWrapper src="/logo.png" alt="Akii-Bua Stadium Logo" width={190} height={40} className="h-10 w-auto" />
            </Link>
            <span className="text-white/40 text-xs hidden md:block">|</span>
            <span className="text-white/40 text-xs text-center md:text-left">© 2026 Akii-Bua Olympic Stadium. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[11px] text-white/40">
            <Link href="/imprint" className="hover:text-white transition uppercase tracking-wider">Imprint</Link>
            <Link href="/terms" className="hover:text-white transition uppercase tracking-wider">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition uppercase tracking-wider">Privacy</Link>
            <Link href="/accessibility-information" className="hover:text-white transition uppercase tracking-wider">Accessibility</Link>
            <Link href="/faq" className="hover:text-white transition uppercase tracking-wider">FAQ</Link>
            <Link href="/contact" className="hover:text-white transition uppercase tracking-wider">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-white/40 hover:text-arena-primary transition-colors p-2.5 bg-white/5 rounded-full hover:bg-white/10" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="text-white/40 hover:text-arena-primary transition-colors p-2.5 bg-white/5 rounded-full hover:bg-white/10" aria-label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" className="text-white/40 hover:text-arena-primary transition-colors p-2.5 bg-white/5 rounded-full hover:bg-white/10" aria-label="Twitter">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

