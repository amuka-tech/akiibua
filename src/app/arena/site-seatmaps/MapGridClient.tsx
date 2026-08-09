"use client";

import { useState } from "react";
import Image from "@/components/ImageWrapper";
import CardGrid from "@/components/ui/CardGrid";
import { MapData } from "@/data/maps";

export default function MapGridClient({ maps }: { maps: MapData[] }) {
  const [selectedMap, setSelectedMap] = useState<string | null>(null);

  return (
    <>
      <CardGrid 
        items={maps}
        renderItem={(map, idx) => (
          <div key={map.title} className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image 
                src={map.image} 
                alt={map.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-arena-navy/80 group-hover:bg-arena-navy/60 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-12 h-12 text-white/50 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-arena-navy uppercase tracking-tight mb-3">
                {map.title}
              </h3>
              
              <div className="mb-6 flex-1">
                <p className="text-sm text-arena-navy/70 leading-relaxed">
                  {map.description}
                </p>
              </div>
              
              <button 
                onClick={() => map.file !== "#" && setSelectedMap(map.file)}
                disabled={map.file === "#"}
                className={`w-full py-3 bg-slate-50 text-arena-navy font-bold text-xs uppercase tracking-[2px] rounded transition-colors border border-gray-200 flex items-center justify-center gap-2 ${map.file !== "#" ? 'hover:bg-arena-red hover:text-white hover:border-transparent' : 'opacity-50 cursor-not-allowed'}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {map.file !== "#" ? 'View Map' : 'Not Available'}
              </button>
            </div>
          </div>
        )}
      />

      {/* Map Viewer Modal with ARIA tags */}
      {selectedMap && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-arena-dark/90 p-4 sm:p-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="map-viewer-title"
        >
          <div className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-slate-50">
              <h3 id="map-viewer-title" className="font-bold text-arena-navy flex items-center gap-2">
                <svg className="w-5 h-5 text-arena-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Map Viewer
              </h3>
              <button 
                onClick={() => setSelectedMap(null)} 
                className="text-gray-400 hover:text-arena-primary transition-colors p-2 hover:bg-gray-100 rounded-full"
                aria-label="Close Map Viewer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <iframe src={selectedMap} className="w-full flex-1 border-0" title="Interactive Map Viewer" />
          </div>
        </div>
      )}
    </>
  );
}
