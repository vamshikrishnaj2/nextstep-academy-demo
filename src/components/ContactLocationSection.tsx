import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Bus, Train, Car, Building2, CheckCircle2 } from 'lucide-react';

export const ContactLocationSection: React.FC = () => {
  const [activeTransit, setActiveTransit] = useState<'metro' | 'bus' | 'parking'>('metro');
  const [tourBooked, setTourBooked] = useState(false);

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50/70 border-t border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-2">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span>Campus & Learning Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Visit our learning hub.
          </h2>
          <p className="text-base text-slate-600 mt-2">
            In addition to live online cohorts, our hybrid students study, collaborate, and attend in-person code reviews at our learning facility.
            <span className="block text-xs text-slate-500 mt-1">
              Notice: All location, contact numbers, and campus details are fictional demo data.
            </span>
          </p>
        </div>

        {/* Grid: Contact Information & Interactive Studio Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Working Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Card */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 space-y-5 shadow-xs">
              
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Physical Campus
                  </h3>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    NextStep Innovation Hub
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    450 Innovation Parkway, Suite 300<br />
                    Tech District, Tech City 94105
                  </p>
                  <span className="inline-block mt-1 text-[11px] text-amber-700 font-medium">
                    (Fictional Demonstration Address)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Admissions Desk
                  </h3>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    admissions@nextstepacademy.local
                  </p>
                  <span className="text-[11px] text-slate-500">
                    Response time: 24–48 hours (fictional)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Academic Office
                  </h3>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    +1 (555) 019-3829
                  </p>
                  <span className="text-[11px] text-slate-500">
                    Simulated helpline
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Studio & Lab Hours
                  </h3>
                  <div className="text-xs text-slate-700 mt-1 space-y-0.5">
                    <p>Monday – Friday: 9:00 AM – 7:30 PM</p>
                    <p>Saturday: 10:00 AM – 4:00 PM</p>
                    <p className="text-slate-500">Sunday: Closed for maintenance</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Tour Booking trigger */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white">Interested in a walkthrough?</h4>
                <p className="text-xs text-slate-300">Test the fictional campus visit booking</p>
              </div>
              <button
                type="button"
                onClick={() => setTourBooked(true)}
                className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shrink-0"
              >
                Book Tour
              </button>
            </div>

            {tourBooked && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Demo Tour Confirmed!</strong> In a live system, you'd receive a calendar invitation. As a portfolio prototype, no actual booking occurred.
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Simulated Interactive Campus Map & Transit Details */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs">
            
            {/* Visual Map Representation */}
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
                alt="Modern, bright and clean collaborative workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
              
              <div className="absolute bottom-4 left-4 z-10">
                <div className="bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700 text-white font-semibold">
                  NextStep Innovation Hub (Demo Studio)
                  <span className="block text-[10px] text-slate-400 font-mono font-normal">450 Innovation Parkway, Suite 300</span>
                </div>
              </div>

              <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-1 rounded">
                STUDIO ENV DEMO
              </div>
            </div>


            {/* Transit & Commute Guide */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900">
                  Getting Here · Transit & Access Guide
                </h4>
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setActiveTransit('metro')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                      activeTransit === 'metro'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Metro / Rail
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTransit('bus')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                      activeTransit === 'bus'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    City Bus
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTransit('parking')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                      activeTransit === 'parking'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Parking
                  </button>
                </div>
              </div>

              {/* Transit content box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                {activeTransit === 'metro' && (
                  <div className="flex items-start gap-2.5">
                    <Train className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Blue Line (Metro Station: Tech Park Central)</strong>
                      <p className="mt-0.5 text-slate-600">
                        Take Exit 2 and walk east along Innovation Parkway for 3 minutes. Our learning studio is on the 3rd floor.
                      </p>
                    </div>
                  </div>
                )}

                {activeTransit === 'bus' && (
                  <div className="flex items-start gap-2.5">
                    <Bus className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Lines 14, 42, and Rapid 101</strong>
                      <p className="mt-0.5 text-slate-600">
                        Stop directly opposite 450 Innovation Parkway. Sheltered walkway leads directly into the main reception atrium.
                      </p>
                    </div>
                  </div>
                )}

                {activeTransit === 'parking' && (
                  <div className="flex items-start gap-2.5">
                    <Car className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Visitor Underground Garage (P2)</strong>
                      <p className="mt-0.5 text-slate-600">
                        Free 2-hour student visitor parking with validation at the front security desk. Electric vehicle charging stalls available.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Campus Amenities list */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Learning Studio Amenities
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>High-Speed Gigabit Fiber</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Acoustic 1:1 Review Pods</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Ergonomic Dual-Monitor Stations</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Student Lounge & Study Library</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
