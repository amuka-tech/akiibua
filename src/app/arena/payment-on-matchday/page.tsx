import PageLayout from "@/components/PageLayout";
import { CreditCard, Smartphone, Nfc, Wallet, Info, Ban, Coffee, Car } from "lucide-react";

export default function PaymentPage() {
  return (
    <PageLayout
      title="Card Payment on Matchday"
      subtitle="Cashless payment at the Akii-Bua Olympic Stadium"
      image="/arena_night_hero_1782318185369.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Arena", href: "/arena" }]}
    >
      <div className="max-w-4xl mx-auto space-y-12 pb-12">
        {/* Intro Section */}
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-3xl font-bold text-arena-navy">Experience a Faster Matchday</h2>
          <p className="text-arena-muted text-lg max-w-2xl mx-auto">
            To ensure quick service and reduced wait times, all kiosks and catering outlets at the Akii-Bua Olympic Stadium operate completely cashless.
          </p>
        </div>

        {/* Accepted Payment Methods Grid */}
        <div className="space-y-6 animate-slide-up">
          <div className="flex items-center gap-3 border-b border-arena-light pb-4">
            <div className="bg-arena-primary/10 p-3 rounded-xl text-arena-primary">
              <Wallet className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-arena-navy">Accepted Payment Methods</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PaymentCard 
              icon={<CreditCard className="w-6 h-6" />}
              title="Credit Cards"
              description="Visa, Mastercard, American Express"
            />
            <PaymentCard 
              icon={<CreditCard className="w-6 h-6" />}
              title="Debit Cards"
              description="EC/Girocard with PIN"
            />
            <PaymentCard 
              icon={<Nfc className="w-6 h-6" />}
              title="Contactless"
              description="NFC-enabled physical cards"
            />
            <PaymentCard 
              icon={<Smartphone className="w-6 h-6" />}
              title="Mobile Wallets"
              description="Apple Pay and Google Pay"
            />
            <PaymentCard 
              icon={<Wallet className="w-6 h-6" />}
              title="Store Vouchers"
              description="Akii-Bua official store vouchers"
            />
          </div>
        </div>

        {/* Important Notes */}
        <div className="space-y-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center gap-3 border-b border-arena-light pb-4">
            <div className="bg-arena-primary/10 p-3 rounded-xl text-arena-primary">
              <Info className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-arena-navy">Important Notes</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NoteCard 
              icon={<Ban className="w-6 h-6" />}
              text="Cash payments are strictly not accepted at kiosks and catering outlets."
            />
            <NoteCard 
              icon={<Coffee className="w-6 h-6" />}
              text="All food and beverage purchases across the stadium are 100% cashless."
            />
            <NoteCard 
              icon={<Wallet className="w-6 h-6" />}
              text="The Akii-Bua Store accepts both card and voucher payments."
            />
            <NoteCard 
              icon={<Car className="w-6 h-6" />}
              text="Parking fees are paid via license plate recognition (online or at machines)."
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

function PaymentCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
      <div className="bg-arena-gray text-arena-primary p-3 rounded-xl group-hover:scale-110 group-hover:bg-arena-primary group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-arena-navy text-lg">{title}</h4>
        <p className="text-arena-muted mt-1">{description}</p>
      </div>
    </div>
  );
}

function NoteCard({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="bg-arena-gray/50 p-6 rounded-2xl flex items-start gap-4 border border-transparent hover:border-arena-primary/20 transition-colors duration-300">
      <div className="text-arena-primary shrink-0 mt-1">
        {icon}
      </div>
      <p className="text-arena-navy leading-relaxed">{text}</p>
    </div>
  );
}
