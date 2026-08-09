"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { 
    href: "/arena", 
    label: "Arena",
    subItems: [
      { href: "/arena/facts", label: "Facts" },
      { href: "/arena/news", label: "Arena News" },
      { href: "/arena/barrier-free-arena", label: "Barrier-free Arena" },
      { href: "/arena/stadium-by-laws", label: "Stadium By-laws" },
      { href: "/arena/site-seatmaps", label: "Site & Seatmaps" },
      { href: "/arena/hospitality-and-tickets", label: "Hospitality & Tickets" },
      { href: "/arena/opening-hours", label: "Opening Hours" },
      { href: "/arena/payment-on-matchday", label: "Payment on Matchday" },
      { href: "/arena/pictures/galleries", label: "Pictures & Galleries" },
      { href: "/arena/webcam", label: "Webcam" }
    ]
  },
  { 
    href: "/tours-museum", 
    label: "Tours & Museum",
    subItems: [
      { href: "/tours-museum/akiibua-museum", label: "AkiiBua Museum" },
      { href: "/tours-museum/akiibua-museum-arena-view", label: "Museum + Arena View" },
      { href: "/tours-museum/vip-tour", label: "VIP Tour" },
      { href: "/tours-museum/group-tickets/disabled-tour", label: "Disabled Tour" },
      { href: "/tours-museum/audio-guide", label: "Audio Guide" },
      { href: "/tours-museum/vouchers", label: "Vouchers" }
    ]
  },
  { href: "/store-catering", label: "Store & catering" },
  { href: "/events", label: "Events" },
  { 
    href: "/event-venue", 
    label: "Event venue",
    subItems: [
      { href: "/event-venue/rooms", label: "Rooms" },
      { href: "/event-venue/event-options", label: "Event Options" },
      { href: "/event-venue/support-program", label: "Support Program" },
      { href: "/event-venue/do-co", label: "DO & CO" },
      { href: "/event-venue/eventbrochure", label: "Event Brochure" },
      { href: "/event-venue/services--downloads", label: "Services & Downloads" }
    ]
  },
  { 
    href: "/getting-here/matchday", 
    label: "Getting here",
    subItems: [
      { href: "/getting-here/matchday", label: "Matchday" },
      { href: "/getting-here/non-matchday", label: "Non-matchday" },
      { href: "/getting-here/visiting-fans", label: "Visiting Fans" },
      { href: "/getting-here/caravans", label: "Caravans" },
      { href: "/getting-here/luggage-storage", label: "Luggage Storage" },
      { href: "/getting-here/entry-control", label: "Entry Control" }
    ]
  }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-arena-primary shadow-nav border-b border-white/10" : "bg-arena-primary"
    }`}>

      <div className="flex items-center justify-between px-6 py-3 lg:py-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <svg viewBox="0 0 180 36" className="h-8 w-auto transition-transform hover:scale-105" fill="white">
            <text x="0" y="26" fontSize="22" fontWeight="bold" fontFamily="Arial" letterSpacing="2">akiibua</text>
            <text x="108" y="26" fontSize="11" fontWeight="300" fontFamily="Arial" letterSpacing="1">ARENA</text>
          </svg>
        </Link>

        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <div 
              key={link.href}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="inline-flex items-center h-10 px-4 text-[12px] font-semibold uppercase tracking-[1.5px] transition-all duration-200 rounded text-white/90 hover:text-white hover:bg-white/10"
              >
                {link.label}
              </Link>
              
              {/* Dropdown Menu */}
              {link.subItems && activeDropdown === link.label && (
                <div 
                  className={`absolute top-full pt-4 w-[420px] z-[100] ${
                    ['Getting here', 'Event venue'].includes(link.label) ? 'right-0' : 'left-0'
                  }`}
                >
                  <div className="bg-arena-dark border border-white/10 border-t-2 border-t-arena-red rounded-b-xl shadow-nav overflow-hidden">
                    <div className="p-6 grid grid-cols-2 gap-x-6 gap-y-4">
                      {link.subItems.map(subItem => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="group/item relative flex items-center text-sm font-medium text-white/70 hover:text-white transition-all duration-200 pl-3 py-2"
                        >
                          <span className="absolute left-0 w-0 h-[3px] bg-arena-red transition-all duration-300 rounded-r group-hover/item:w-2" />
                          <span className="group-hover/item:translate-x-1 transition-transform duration-300">
                            {subItem.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://momoticketing.com/"
            className="hidden lg:inline-flex items-center gap-2 bg-arena-red text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-red-700 shadow-[0_0_15px_rgba(220,5,45,0.4)] hover:shadow-[0_0_25px_rgba(220,5,45,0.7)] transition-all duration-300 rounded"
            target="_blank" rel="noopener noreferrer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
            Tickets
          </a>
          <button
            className="lg:hidden p-2 -mr-2 rounded hover:bg-white/10 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-arena-primary border-t border-white/10 px-6 pb-6 animate-in slide-in-from-top-2 h-screen overflow-y-auto">
          <nav className="flex flex-col gap-2 py-6">
            {navLinks.map((link) => (
              <div key={link.href} className="flex flex-col border-b border-white/10 pb-2">
                <Link
                  href={link.href}
                  className="py-3 text-sm font-semibold uppercase tracking-wider text-white hover:text-white/70 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.subItems && (
                  <div className="pl-4 flex flex-col gap-2 pb-2">
                    {link.subItems.map(subItem => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="py-1.5 text-xs uppercase tracking-wider text-white/60 hover:text-white transition"
                        onClick={() => setMobileOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
