import Image from "next/image";
import { TourCategory } from "@/data/tours";

interface ModalProps {
  activeTab: TourCategory;
  closeModal: () => void;
}

export function FcAkiiBuaMuseumArenaTourModal({ activeTab, closeModal }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-arena-dark/60 backdrop-blur-sm animate-in fade-in duration-200" role="dialog" aria-modal="true" aria-labelledby="modal-title-1">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center z-10">
          <h3 id="modal-title-1" className="font-black text-2xl text-arena-navy uppercase tracking-tight">AkiiBua Museum + Arena Tour</h3>
          <button onClick={closeModal} className="text-gray-400 hover:text-arena-primary transition-colors p-2" aria-label="Close Modal">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <div className="p-8">
          <div className="mb-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="relative w-full md:w-64 h-40 rounded-xl overflow-hidden shrink-0">
              <Image src="/museum_tour_1782318204191.png" alt="AkiiBua Museum + Arena Tour" fill className="object-cover" />
            </div>
            <div>
              <p className="text-arena-navy/80 leading-relaxed">
                A double dose of football fascination: First, go behind the scenes of the Akii-Bua Olympic Stadium and experience Uganda&apos;s premier sports venue from the players&apos; perspective. Then discover the world of Uganda&apos;s champions in the AkiiBua Museum.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {activeTab === "Individual" && <span className="bg-arena-navy text-white px-3 py-1.5 rounded text-sm font-bold tracking-wider uppercase">UGX 30,000 per adult</span>}
                {activeTab === "Group" && <span className="bg-arena-navy text-white px-3 py-1.5 rounded text-sm font-bold tracking-wider uppercase">Min 20 tickets @ UGX 28,000</span>}
                {activeTab === "School" && <span className="bg-arena-navy text-white px-3 py-1.5 rounded text-sm font-bold tracking-wider uppercase">Min 28 tickets @ UGX 5,000</span>}
                <span className="bg-slate-100 text-arena-navy px-3 py-1.5 rounded text-sm font-bold tracking-wider uppercase">Daily, approx. 2.5 hours</span>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h4 className="font-bold text-arena-navy uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">Tour Itinerary*</h4>
              <ul className="space-y-2 text-sm text-arena-navy/80 mb-6 list-disc pl-4">
                <li>South Stand terrace (heart of the home fans)</li>
                <li>Lower tier of the main stand</li>
                <li>Press conference area</li>
                <li>Changing rooms</li>
                <li>Players&apos; tunnel</li>
                <li>Pitch perimeter & coaches&apos; dugouts</li>
                <li>Exterior facade walkthrough</li>
                <li>Visit to the AkiiBua Museum</li>
              </ul>
              <p className="text-xs text-arena-muted italic mb-8">*subject to closures at short notice</p>
            </div>
            <div>
              <h4 className="font-bold text-arena-navy uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">Ticket Categories & Prices</h4>
              {activeTab === "Individual" && (
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border border-gray-200 shadow-sm flex justify-between items-center">
                    <span className="font-bold text-arena-navy">Adults (14 years and above)</span>
                    <span className="font-black text-arena-primary">UGX 75,000</span>
                  </div>
                  <div className="bg-white p-4 rounded border border-gray-200 shadow-sm flex justify-between items-center">
                    <span className="font-bold text-arena-navy">Concessions</span>
                    <span className="font-black text-arena-primary">UGX 25,000</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded border border-gray-200 shadow-sm flex justify-between items-center">
                      <span className="font-bold text-arena-navy text-sm">Children (6-13)</span>
                      <span className="font-black text-arena-primary text-sm">UGX 15,000</span>
                    </div>
                    <div className="bg-white p-4 rounded border border-gray-200 shadow-sm flex justify-between items-center">
                      <span className="font-bold text-arena-navy text-sm">Children (0-5)</span>
                      <span className="font-black text-arena-primary text-sm">Free</span>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "Group" && (
                <div className="space-y-4">
                  <div className="bg-arena-red/10 p-4 rounded border border-arena-primary/20 flex justify-between items-center">
                    <span className="font-bold text-arena-navy">Min quantity of 20 tickets at</span>
                    <span className="font-black text-arena-primary text-lg">UGX 28,000</span>
                  </div>
                </div>
              )}
              {activeTab === "School" && (
                <div className="space-y-4">
                  <div className="bg-arena-red/10 p-4 rounded border border-arena-primary/20 flex justify-between items-center">
                    <span className="font-bold text-arena-navy">Min quantity of 28 tickets at</span>
                    <span className="font-black text-arena-primary text-lg">UGX 5,000</span>
                  </div>
                </div>
              )}
              <div className="mt-8 flex gap-4">
                <a href="#" className="flex-1 text-center bg-arena-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-6 py-4 rounded text-sm transition-colors shadow-lg">
                  {activeTab === "Individual" ? "Online Ticket Shop" : "Booking Form"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MuseumOnlyModal({ activeTab, closeModal }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-arena-dark/60 backdrop-blur-sm animate-in fade-in duration-200" role="dialog" aria-modal="true" aria-labelledby="modal-title-2">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center z-10">
          <h3 id="modal-title-2" className="font-black text-2xl text-arena-navy uppercase tracking-tight">AkiiBua Museum (Museum Only)</h3>
          <button onClick={closeModal} className="text-gray-400 hover:text-arena-primary transition-colors p-2" aria-label="Close Modal">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <div className="p-8">
          <div className="mb-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="relative w-full md:w-64 h-40 rounded-xl overflow-hidden shrink-0">
              <Image src="/museum_tour_1782318204191.png" alt="AkiiBua Museum" fill className="object-cover" />
            </div>
            <div>
              <p className="text-arena-navy/80 leading-relaxed">
                Uganda&apos;s premier sports museum invites you on a spectacular journey through time — from the founding of the club all the way to the current triumphs that have defined Ugandan sporting history.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {activeTab === "Individual" && <span className="bg-arena-navy text-white px-3 py-1.5 rounded text-sm font-bold tracking-wider uppercase">UGX 10,000 per adult</span>}
                {activeTab === "Group" && <span className="bg-arena-navy text-white px-3 py-1.5 rounded text-sm font-bold tracking-wider uppercase">Min 20 people @ UGX 8,000</span>}
                {activeTab === "School" && <span className="bg-arena-navy text-white px-3 py-1.5 rounded text-sm font-bold tracking-wider uppercase">Min 20 tickets @ UGX 5,000</span>}
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h4 className="font-bold text-arena-navy uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">Ticket Categories & Prices</h4>
              {activeTab === "Individual" && (
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border border-gray-200 shadow-sm flex justify-between items-center">
                    <span className="font-bold text-arena-navy">Adults (14 years and above)</span>
                    <span className="font-black text-arena-primary">UGX 10,000</span>
                  </div>
                </div>
              )}
              {activeTab === "Group" && (
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border border-gray-200 shadow-sm flex justify-between items-center">
                    <span className="font-bold text-arena-navy text-sm">Adult groups from 20 people</span>
                    <span className="font-black text-arena-primary text-sm">UGX 8,000 per person</span>
                  </div>
                </div>
              )}
              {activeTab === "School" && (
                <div className="space-y-4">
                  <div className="bg-arena-red/10 p-4 rounded border border-arena-primary/20 flex justify-between items-center">
                    <span className="font-bold text-arena-navy">Min quantity of 20 tickets at</span>
                    <span className="font-black text-arena-primary text-lg">UGX 5,000</span>
                  </div>
                </div>
              )}
            </div>
            <div>
              <div className="bg-white p-4 rounded border border-gray-200 shadow-sm mt-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-arena-navy pr-4">Museum audio guide</span>
                  <span className="font-black text-arena-primary shrink-0">UGX 5,000</span>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <a href="#" className="flex-1 text-center bg-arena-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-6 py-4 rounded text-sm transition-colors shadow-lg">
                  {activeTab === "Individual" ? "Online Ticket Shop" : "Booking Form"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FallbackTourModal({ tourId, closeModal }: { tourId: string; closeModal: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-arena-dark/60 backdrop-blur-sm animate-in fade-in duration-200" role="dialog" aria-modal="true" aria-labelledby="modal-title-fallback">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center relative animate-in zoom-in-95 duration-200">
        <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-arena-primary transition-colors p-2" aria-label="Close Modal">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <h3 id="modal-title-fallback" className="font-black text-xl text-arena-navy uppercase tracking-tight mb-4">{tourId}</h3>
        <p className="text-arena-navy/70 mb-6 text-sm">Detailed itinerary for this tour is currently unavailable. Please visit our ticket shop to learn more and book.</p>
        <a href="#" className="block text-center bg-arena-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-6 py-3 rounded text-sm transition-colors w-full">
          Online Ticket Shop
        </a>
      </div>
    </div>
  );
}

