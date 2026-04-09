
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Phone, Mail, Download, MapPin, Globe, Info, Clock, UserCheck } from 'lucide-react';

interface Hotel {
  name: string;
  address: string;
  website: string;
  star: number;
  roomType: string;
  rates: {
    single: string;
    double: string;
    twin?: string;
  };
  distance: string;
  image: string;
  remarks: string;
}

const HOTELS_DATA: Record<string, Hotel[]> = {
  'SRI LANKA': [
    {
      name: "Sheraton Colombo",
      address: "265 Galle Road, Kollupitiya, Colombo, Western 3000",
      website: "https://www.marriott.com/en-us/hotels/cmbsi-sheraton-colombo-hotel/",
      star: 5,
      roomType: "Deluxe Room",
      rates: {
        single: "US $160 (All Incl.)",
        double: "US $165 (All Incl.)",
        twin: "US $165 (All Incl.)"
      },
      distance: "3.5 kms - 9 mins",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      remarks: "Based on minimum of 30 rooms per night",
    },
    {
      name: "The Kingsbury",
      address: "No 48 Janadhipathi Mawatha, Colombo, Western 00100",
      website: "https://www.thekingsburyhotel.com/",
      star: 5,
      roomType: "Deluxe Room",
      rates: {
        single: "US $115 (All Incl.)",
        double: "US $120 (All Incl.)",
        twin: "US $120 (All Incl.)"
      },
      distance: "6 kms - 15 mins",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
      remarks: "Based on minimum of 30 rooms per night",
    },
    {
      name: "Cinnamon Grand",
      address: "77 Galle Road, Colombo, Western 00300",
      website: "https://www.cinnamonhotels.com/",
      star: 5,
      roomType: "Premium Room",
      rates: {
        single: "US $140 (All Incl.)",
        double: "US $145 (All Incl.)",
        twin: "US $145 (All Incl.)"
      },
      distance: "5.3 kms - 13 mins",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
      remarks: "Based on minimum of 30 rooms per night",
    },
    {
      name: "Cinnamon Lakeside",
      address: "115, Sir Chittampalam A Gardiner Mawatha, Colombo, Western Province 00200",
      website: "https://www.cinnamonhotels.com/cinnamonlakesidecolombo",
      star: 5,
      roomType: "Superior Room",
      rates: {
        single: "US $110 (All Incl.)",
        double: "US $115 (All Incl.)",
        twin: "US $115 (All Incl.)"
      },
      distance: "5 kms - 11 mins",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800",
      remarks: "Based on minimum of 30 rooms per night",
    },
    {
      name: "Taj Samudra",
      address: "25, Galle Face Centre Road, Colombo, Colombo District 09411",
      website: "https://www.tajhotels.com/en-in/taj/taj-samudra-colombo/",
      star: 5,
      roomType: "Deluxe City Facing Room",
      rates: {
        single: "US $115 (All Incl.)",
        double: "US $120 (All Incl.)",
        twin: "US $120 (All Incl.)"
      },
      distance: "5.3 kms - 17 mins",
      image: "https://images.unsplash.com/photo-1551882547-ff43c63e8c24?auto=format&fit=crop&q=80&w=800",
      remarks: "Based on minimum of 30 rooms per night",
    },
    {
      name: "Hilton Colombo",
      address: "2 Sir Chittampalam A Gardiner Mawatha, Colombo 02, Colombo, Colombo District",
      website: "https://www.hilton.com/en/hotels/colhitw-hilton-colombo/",
      star: 5,
      roomType: "Superior Room",
      rates: {
        single: "US $125 (All Incl.)",
        double: "US $135 (All Incl.)",
        twin: "US $135 (All Incl.)"
      },
      distance: "6 kms - 15 mins",
      image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=800",
      remarks: "Based on minimum of 30 rooms per night",
    },
    {
      name: "Mandarina Colombo",
      address: "433 Galle Road Colombo 3, Colombo, Western 00300",
      website: "https://www.mandarinacolombo.com/",
      star: 4,
      roomType: "Deluxe Room",
      rates: {
        single: "US $80 (All Incl.)",
        double: "US $90 (All Incl.)",
        twin: "US $90 (All Incl.)"
      },
      distance: "2.8 kms - 9 mins",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800",
      remarks: "Based on minimum of 15 rooms per night",
    }
  ],
  'BANGLADESH': [
    {
      name: "Radisson Blu Water Garden",
      address: "Airport Road, Dhaka Cantonment, Dhaka 1206",
      website: "https://www.radissonhotels.com/en-us/hotels/radisson-blu-dhaka",
      star: 5,
      roomType: "Superior Room",
      rates: {
        single: "US $185 (All Incl.)",
        double: "US $205 (All Incl.)",
        twin: "US $205 (All Incl.)"
      },
      distance: "2 kms - 5 mins",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=800",
      remarks: "Priority booking for Intex exhibitors",
    },
    {
      name: "Dhaka Regency Hotel & Resort",
      address: "Airport Road, Nikunja 2, Dhaka 1229",
      website: "https://www.dhakaregency.com/",
      star: 5,
      roomType: "Executive Suite",
      rates: {
        single: "US $130 (All Incl.)",
        double: "US $145 (All Incl.)",
        twin: "US $145 (All Incl.)"
      },
      distance: "1.5 kms - 4 mins",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9759678?auto=format&fit=crop&q=80&w=800",
      remarks: "Shuttle service included to ICCB venue",
    },
    {
      name: "Hotel Sarina Dhaka",
      address: "Plot #27, Road #17, Banani C/A, Dhaka 1213",
      website: "https://www.sarinahotels.com/",
      star: 5,
      roomType: "Deluxe Room",
      rates: {
        single: "US $110 (All Incl.)",
        double: "US $125 (All Incl.)",
        twin: "US $125 (All Incl.)"
      },
      distance: "6 kms - 20 mins",
      image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&q=80&w=800",
      remarks: "Special corporate rate for international delegates",
    },
    {
      name: "Grace 21 Smart Hotel",
      address: "House 21, Road 17, Nikunja 2, Dhaka 1229",
      website: "https://grace21hotel.com/",
      star: 4,
      roomType: "Premium Room",
      rates: {
        single: "US $85 (All Incl.)",
        double: "US $95 (All Incl.)",
        twin: "US $95 (All Incl.)"
      },
      distance: "1.8 kms - 5 mins",
      image: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?auto=format&fit=crop&q=80&w=800",
      remarks: "Walking distance to major corporate nodes",
    }
  ],
  'INDIA': [
    {
      name: "Yashobhoomi Dwarka Hotel",
      address: "Sector 25, Dwarka, New Delhi 110061",
      website: "https://www.yashobhoomi.com/",
      star: 5,
      roomType: "Business Suite",
      rates: {
        single: "INR 12,000 (All Incl.)",
        double: "INR 14,000 (All Incl.)"
      },
      distance: "Adjacent to Venue",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800",
      remarks: "In-venue accommodation",
    },
    {
      name: "Pullman New Delhi Aerocity",
      address: "Asset No 02, GMR Hospitality District, Aerocity, New Delhi 110037",
      website: "https://www.pullmandelhiaerocity.com/",
      star: 5,
      roomType: "Superior Room",
      rates: {
        single: "INR 14,500 (All Incl.)",
        double: "INR 16,000 (All Incl.)"
      },
      distance: "5 kms - 12 mins",
      image: "https://images.unsplash.com/photo-1561501900-3701fa6a0f64?auto=format&fit=crop&q=80&w=800",
      remarks: "Premium airport proximity",
    }
  ]
};

const HotelsTravelPage: React.FC = () => {
  const [activeShow, setActiveShow] = useState('SRI LANKA');
  const shows = Object.keys(HOTELS_DATA);

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={10}
        fill={i < count ? "#EE7539" : "none"}
        className={i < count ? "text-archive-clay" : "text-archive-charcoal/10"}
      />
    ));
  };

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Header Section */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-20">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Logistics // Accomodation</span>
            </div>
            <h1 className="text-2xl md:text-[4vw] font-black tracking-tighter uppercase leading-[0.85] text-archive-charcoal">
              HOTELS & <br />
              <span className="text-white">TRAVEL.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="lg:col-span-7">
              <p className="text-xl md:text-2xl font-black uppercase text-archive-charcoal/80 leading-tight">
                Exclusive <span className="text-archive-clay">discounted rates</span> for Intex delegates at premier hospitality partners.
              </p>
            </div>

            <div className="flex border border-archive-charcoal/10 bg-white p-2">
              {shows.map((show) => (
                <button
                  key={show}
                  onClick={() => setActiveShow(show)}
                  className={`px-8 py-4 text-[10px] font-black tracking-widest uppercase transition-all ${activeShow === show ? 'bg-archive-charcoal text-white' : 'text-archive-charcoal/40 hover:text-archive-charcoal'}`}
                >
                  {show}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Hotels */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeShow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-archive-charcoal/10 border border-archive-charcoal/10"
          >
            {HOTELS_DATA[activeShow].map((hotel, idx) => (
              <motion.div
                key={hotel.name}
                className="bg-white group relative overflow-hidden flex flex-col h-full hover:bg-archive-charcoal transition-all duration-700"
              >
                {/* Image Frame */}
                <div className="aspect-video relative overflow-hidden bg-archive-cream/30">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-110 group-hover:brightness-50"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 flex items-center gap-1 group-hover:bg-archive-clay transition-colors">
                    {renderStars(hotel.star)}
                  </div>
                </div>

                {/* Content Frame */}
                <div className="p-10 flex flex-col justify-between flex-1 group-hover:text-white transition-colors duration-700">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-black uppercase tracking-tighter leading-tight group-hover:text-archive-clay transition-colors duration-500">
                        {hotel.name}
                      </h3>
                      <div className="flex items-start gap-2 text-[9px] font-bold uppercase tracking-widest text-archive-charcoal/40 group-hover:text-white/40">
                        <MapPin size={10} className="text-archive-clay mt-0.5" />
                        <span className="line-clamp-2">{hotel.address}</span>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-archive-charcoal/5 group-hover:border-white/10">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">Room Type</span>
                        <span className="text-[10px] font-bold uppercase">{hotel.roomType}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <span className="text-[8px] font-black uppercase tracking-widest opacity-20 group-hover:opacity-60">Single</span>
                          <p className="text-[11px] font-bold">{hotel.rates.single}</p>
                        </div>
                        <div className="space-y-1 text-right">
                          <span className="text-[8px] font-black uppercase tracking-widest opacity-20 group-hover:opacity-60">Double</span>
                          <p className="text-[11px] font-bold">{hotel.rates.double}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 space-y-4">
                    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest">
                      <Clock size={12} className="text-archive-clay" />
                      <span className="opacity-40 group-hover:opacity-100">{hotel.distance}</span>
                    </div>
                    <a
                      href={hotel.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-archive-clay border-b border-transparent hover:border-archive-clay transition-all"
                    >
                      Visit Website <Globe size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Info & Contact Protocol */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-1px bg-archive-charcoal/10 border border-archive-charcoal/10">

        {/* Important Info Column */}
        <div className="lg:col-span-7 bg-white p-12 md:p-20 space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Info size={16} className="text-archive-clay" />
              <h2 className="text-xl font-black uppercase tracking-tight text-archive-charcoal">Protocol // Information</h2>
            </div>
            <div className="w-12 h-px bg-archive-clay"></div>
          </div>

          <ul className="space-y-6">
            {[
              "Kindly send us the duly filled hotel booking form on or before 10th July, 2026.",
              "The room rates include Buffet Breakfast, Wi-Fi & Complimentary In-Room Amenities.",
              "Full payment should be made in advance for booking the rooms.",
              "Above room rates are applicable on a first come, first served basis.",
              "Rooms are subject to availability at the time of booking.",
              "Airport & Venue transfers can be arranged on request at an additional cost."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-[11px] font-bold uppercase tracking-widest leading-relaxed text-archive-charcoal/60">
                <div className="w-1.5 h-1.5 bg-archive-clay rotate-45 mt-1 shrink-0"></div>
                {item}
              </li>
            ))}
          </ul>

          <div className="p-8 border border-archive-charcoal/5 bg-archive-cream/30 text-[12px] font-medium text-archive-charcoal/80 leading-relaxed">
            "I hereby confirm booking with hotel selected above and would be responsible to pay all relevant charges occurring during the duration of my stay."
          </div>
        </div>

        {/* Contact Registry Column */}
        <div className="lg:col-span-5 bg-archive-charcoal p-12 md:p-20 text-white flex flex-col justify-between">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-archive-clay text-[10px] font-black tracking-[0.5em] uppercase">Booking Registry</span>
              <h3 className="text-xl font-black uppercase leading-[0.9]">For more info <br /> & hotel bookings.</h3>
            </div>

            <div className="space-y-8">
              {[
                { name: "Mr. Vijay Pathak", tel: "+91 9082331784", mail: "vijay@worldexindia.com" },
                { name: "Mr. Karan Solanki", tel: "+91 9833849850", mail: "karan@worldexindia.com" }
              ].map((contact, i) => (
                <div key={i} className="space-y-4 p-8 border border-white/10 group hover:border-archive-clay transition-all">
                  <div className="flex items-center gap-3">
                    <UserCheck size={14} className="text-archive-clay" />
                    <span className="text-[12px] font-black uppercase tracking-widest">{contact.name}</span>
                  </div>
                  <div className="space-y-2">
                    <a href={`tel:${contact.tel}`} className="flex items-center gap-3 text-[10px] font-bold text-white/40 hover:text-white transition-colors">
                      <Phone size={12} /> {contact.tel}
                    </a>
                    <a href={`mailto:${contact.mail}`} className="flex items-center gap-3 text-[10px] font-bold text-white/40 hover:text-white transition-colors">
                      <Mail size={12} /> {contact.mail}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-12">
            <button className="w-full p-6 border border-white/20 text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-archive-clay hover:border-archive-clay transition-all flex items-center justify-center gap-4 group">
              Download Booking Form <Download size={16} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Decorative Technical Detail */}
      <div className="h-4 bg-archive-charcoal relative overflow-hidden opacity-10 mt-32">
        <div className="absolute inset-0 measuring-tape"></div>
      </div>
    </div>
  );
};

export default HotelsTravelPage;
