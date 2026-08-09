import HeroSection from "@/components/HeroSection";
import VirtualCard from "@/components/VirtualCard";

export default function EventOptionsPage() {
  return (
    <>
      <HeroSection
        title="Event Options"
        subtitle="Unforgettable moments at a truly unique location"
        image="/event_conference.png"
       size="small" />
      
      {/* Introduction & Capacity - Light Section */}
      <section className="bg-slate-50 py-20 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-arena-primary font-bold tracking-[3px] uppercase text-xs mb-4 block">Endless Flexibility</span>
          <h2 className="text-3xl md:text-5xl font-black text-arena-navy uppercase tracking-tight leading-none mb-8">
            From 10 to 2,000 Guests
          </h2>
          <p className="text-arena-navy/70 text-xl leading-relaxed">
            The Akii-Bua Olympic Stadium is much more than just a football stadium. It is a highly flexible, multi-faceted, and inspiring event location. Whether you are planning an intimate private party for 10 people or a massive, innovative product presentation for up to 2,000 guests, we have the perfect space and expertise to make it happen.
          </p>
        </div>
      </section>

      {/* Specific Event Categories - Dark Section */}
      <section className="bg-arena-navy py-24 px-6 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-arena-red/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-4">
              Your Event <span className="text-arena-primary">Possibilities</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl">
              Explore the diverse range of event types you can host at the Akii-Bua Olympic Stadium. Our dedicated team will tailor every detail to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VirtualCard
              title="Evening Events"
              subtitle="Galas & Dinners"
              image="/event_gala.png"
              href="#enquire"
            />
            <VirtualCard
              title="Conferences"
              subtitle="Business & Seminars"
              image="/event_conference.png"
              href="#enquire"
            />
            <VirtualCard
              title="Trade Fairs"
              subtitle="Exhibitions & Showcases"
              image="/event_trade_fair.png"
              href="#enquire"
            />
            <VirtualCard
              title="Christmas Parties"
              subtitle="Festive Celebrations"
              image="/vip_lounge_premium.png"
              href="#enquire"
            />
            <VirtualCard
              title="Cooking Events"
              subtitle="Interactive Culinary Experiences"
              image="/arena_catering.png"
              href="#enquire"
            />
          </div>
        </div>
      </section>

      {/* Booking & Inquiries - Slate Section */}
      <section id="enquire" className="bg-arena-gray py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-12 md:p-16 rounded-3xl shadow-2xl border border-gray-100 text-center relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-arena-red via-red-500 to-arena-red" />
            
            <h2 className="text-3xl md:text-4xl font-black text-arena-navy uppercase tracking-tight mb-6">
              Ready to start planning?
            </h2>
            <p className="text-arena-muted text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Our event experts are standing by to help you design the perfect experience. Reach out today for a customized proposal and let us turn your vision into reality.
            </p>
            
            <button className="bg-arena-red text-white font-black px-12 py-5 hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(220,5,45,0.3)] hover:shadow-[0_0_30px_rgba(220,5,45,0.5)] hover:-translate-y-1 text-sm uppercase tracking-[3px] rounded-lg w-full sm:w-auto">
              Enquire Now
            </button>
            
            <p className="mt-8 text-sm text-arena-muted">
              Or call us directly: <a href="tel:+4989323764301" className="font-bold text-arena-navy hover:text-arena-primary transition-colors">+49 89 32376 4301</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
