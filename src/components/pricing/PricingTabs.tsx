"use client";

import { useState } from "react";
import { individualTours, groupTours, schoolTours, TourCategory } from "@/data/tours";
import TourList from "./TourList";
import TourModal from "./TourModal";

export default function PricingTabs() {
  const [activeTab, setActiveTab] = useState<TourCategory>("Individual");
  const [selectedTour, setSelectedTour] = useState<string | null>(null);

  const getActiveTours = () => {
    switch (activeTab) {
      case "Group": return groupTours;
      case "School": return schoolTours;
      default: return individualTours;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden relative">
      {/* Tabs Header */}
      <div className="flex flex-col md:flex-row border-b border-gray-200 bg-slate-50">
        {(["Individual", "Group", "School"] as TourCategory[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-6 px-6 text-center text-sm md:text-base font-bold uppercase tracking-wider transition-colors border-b-4 ${
              activeTab === tab
                ? "border-arena-primary text-arena-navy bg-white"
                : "border-transparent text-arena-muted hover:text-arena-navy hover:bg-gray-100"
            }`}
          >
            {tab === "Individual" ? "Individual Tickets" : tab === "Group" ? "Group Tickets" : "School Classes"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-8 bg-slate-50/50">
        <div className="animate-in fade-in duration-300">
          <p className="text-arena-muted mb-8 text-center md:text-left font-medium">
            {activeTab === "Individual" && "Designed for solo visitors, couples, or small families."}
            {activeTab === "Group" && "Flat rates designed for organized groups, clubs, or corporate outings."}
            {activeTab === "School" && "Discounted per-pupil rates specifically for educational trips."}
          </p>
          
          <TourList 
            tours={getActiveTours()} 
            onOpenModal={(title) => setSelectedTour(title)} 
          />
          
          {activeTab !== "Individual" && (
            <p className="text-xs text-arena-muted italic mt-6 text-center md:text-left">
              *Note: Prices are base rates for the specified minimum group size. Larger groups require additional per-person fees or multiple slots.
            </p>
          )}
        </div>
      </div>

      {selectedTour && (
        <TourModal 
          tourId={selectedTour} 
          activeTab={activeTab} 
          onClose={() => setSelectedTour(null)} 
        />
      )}
    </div>
  );
}
