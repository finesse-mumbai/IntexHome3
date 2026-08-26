
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
  airportTransfers?: string;
  remarks?: string;
}

const HOTELS_DATA: Record<string, Hotel[]> = {
  'Sri Lanka': [
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
      image: "/assets/img/hotel/2025/Sheratone.jpeg",
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
      image: "/assets/img/hotel/2025/The Kingsbury.jpeg",
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
      image: "/assets/img/hotel/2025/Cinamon Grand Hotel.png",
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
      image: "/assets/img/hotel/2025/Cinnamon Grand Lakeside.jpg",
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
      image: "/assets/img/hotel/2025/Taj Samudra.jpeg",
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
      image: "/assets/img/hotel/2025/Hilton Colombo.jpeg",
    },
    {
      name: "Courtyard By Marriott Colombo",
      address: "Colombo City Centre, 137 Muttiah Road, Colombo, Western 00200",
      website: "https://www.marriott.com/en-us/hotels/cmbcy-courtyard-colombo/",
      star: 4,
      roomType: "Superior Room",
      rates: {
        single: "US $100 (All Incl.)",
        double: "US $110 (All Incl.)",
        twin: "US $110 (All Incl.)"
      },
      distance: "3.3 kms - 9 mins",
      image: "/assets/img/hotel/2025/Courtyard by Marriott Colombo.jpg",
    },
    {
      name: "Marino Beach",
      address: "590 Marine Drive, Colombo, Western 00300",
      website: "https://www.marinobeach.com/",
      star: 4,
      roomType: "Superior Room",
      rates: {
        single: "US $115 (All Incl.)",
        double: "US $120 (All Incl.)",
        twin: "US $120 (All Incl.)"
      },
      distance: "3 kms - 9 mins",
      image: "/assets/img/hotel/2025/marina.jpeg",
    },
    {
      name: "Granbell Hotel",
      address: "282/5 Kollupitiya Road, Marine Drive, Colombo, Western Province 00300",
      website: "https://granbellhotel.lk/",
      star: 4,
      roomType: "Standard Room",
      rates: {
        single: "US $85 (All Incl.)",
        double: "US $95 (All Incl.)",
        twin: "US $95 (All Incl.)"
      },
      distance: "3.5 kms - 9 mins",
      image: "/assets/img/hotel/2025/Granbell Colombo.jpg",
    },
    {
      name: "Ramada Colombo",
      address: "30 Sir Mohamed Macan Makar Mawatha, Colombo, 00300",
      website: "https://www.wyndhamhotels.com/ramada/colombo-sri-lanka/",
      star: 4,
      roomType: "Deluxe Room",
      rates: {
        single: "US $85 (All Incl.)",
        double: "US $95 (All Incl.)",
        twin: "US $95 (All Incl.)"
      },
      distance: "4.9 kms - 11 mins",
      image: "/assets/img/hotel/2025/Ramada Colombo.png",
      remarks: "Based on minimum of 15 rooms per night",
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
      image: "/assets/img/hotel/2025/mandarina.jpeg",
    },
    {
      name: "Radisson Colombo",
      address: "36-38 Clifford Pl, Colombo 00400, Sri Lanka",
      website: "http://www.radissonhotels.com/",
      star: 4,
      roomType: "Superior Room",
      rates: {
        single: "US $105 (All Incl.)",
        double: "US $110 (All Incl.)",
        twin: "US $110 (All Incl.)"
      },
      distance: "2.8 kms - 9 mins",
      image: "/assets/img/hotel/2025/exterior.jpg",
    }
  ],
  'Bangladesh': [
    {
      name: "Hotel Dhaka Regency",
      address: "Airport Road, Nikunja 2, Dhaka 1229, Bangladesh",
      website: "https://www.dhakaregency.com",
      star: 5,
      roomType: "Standard",
      rates: {
        single: "US $85 (All Inclusive)",
        double: "US $100 (All Inclusive)",
        twin: "US $100 (All Inclusive)"
      },
      distance: "4.2 km - 10 mins",
      image: "/assets/img/hotel/2025/Dhaka_Regency.jpg",
      airportTransfers: "Airport Transfers Complimentary",
    },
    {
      name: "Renaissance Dhaka Gulshan Hotel",
      address: "78 Gulshan Avenue Dhaka 1212, Bangladesh",
      website: "http://renaissancedhakagulshan.com/",
      star: 5,
      roomType: "Deluxe Room",
      rates: {
        single: "US $100 (All Inclusive)",
        double: "US $123 (All Inclusive)"
      },
      distance: "12 km - 30 min",
      image: "/assets/img/hotel/2025/renessiance.jpg",
      airportTransfers: "US $50 with taxes",
    },
    {
      name: "Crowne Plaza Dhaka Gulshan",
      address: "6/A North Avenue, C/A Gulshan-2, Dhaka, Dhaka Division 1212",
      website: "https://www.ihg.com/crowneplaza/hotels/us/en/dhaka/daccr/hoteldetail",
      star: 5,
      roomType: "Standard King Room",
      rates: {
        single: "US $99 (All Inclusive)",
        double: "US $130 (All Inclusive)"
      },
      distance: "7.3 km - 16 mins",
      image: "/assets/img/hotel/2025/Crowne Plaza.jpg",
      airportTransfers: "US $28 per way per person",
    },
    {
      name: "Le Meridien",
      address: "79/A Commercial Area, Airport Road, Nikunja 02, Khilkhet, Dhaka 1229, Bangladesh",
      website: "https://www.marriott.com/en-us/hotels/dacmd-le-meridien-dhaka/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0",
      star: 5,
      roomType: "Standard King Room",
      rates: {
        single: "US $165 (All Inclusive)",
        double: "US $200 (All Inclusive)"
      },
      distance: "3.2 km - 7 minutes",
      image: "/assets/img/hotel/2025/LeMeridien.webp",
      airportTransfers: "US $26 per way per person",
    },
    {
      name: "Best Western PLUS Runway",
      address: "Plot 1C -2C, 17-18, Road Kobi Farooq Shoroni, Dhaka, Dhaka Division 1229",
      website: "https://bwplusrunway.com",
      star: 4,
      roomType: "Standard King Room",
      rates: {
        single: "US $90 (All Inclusive)",
        double: "US $120 (All Inclusive)"
      },
      distance: "3.7 km - 9 mins",
      image: "/assets/img/hotel/2025/Best Western Plus Runway.jpg",
      airportTransfers: "Airport Transfers Complimentary",
    },
    {
      name: "Ascott Palace Dhaka",
      address: "Baridhara Diplomatic Area, House 14, Road 6, Dhaka 1212, Bangladesh",
      website: "https://www.ascottpalace.com/",
      star: 4,
      roomType: "Superior Room",
      rates: {
        single: "US $85 (All Inclusive)",
        double: "US $110 (All Inclusive)"
      },
      distance: "5.1 km - 16 mins",
      image: "/assets/img/hotel/2025/Ascott Palace.jpg",
      airportTransfers: "Airport Transfers Complimentary",
    },
    {
      name: "Hotel Bengal Blueberry",
      address: "House # 1/A, Road # 90, Gulshan-2, Gulshan, Dhaka 1212",
      website: "https://www.bengalblueberry.com",
      star: 4,
      roomType: "Deluxe Room",
      rates: {
        single: "US $70 (All Inclusive)",
        double: "US $80 (All Inclusive)"
      },
      distance: "5.1 km - 16 mins",
      image: "/assets/img/hotel/2025/Bengal Blueberry.jpg",
      airportTransfers: "Airport Transfers Complimentary",
    },
    {
      name: "Royal Park Residence Hotel",
      address: "No.85, Road No.25A, Block A, Banani, Gulshan, Dhaka 1213",
      website: "https://www.royalparkdhaka.com",
      star: 3,
      roomType: "Superior Queen Room",
      rates: {
        single: "US $82 (All Inclusive)",
        double: "US $101 (All Inclusive)"
      },
      distance: "6.2 km - 13 mins",
      image: "/assets/img/hotel/2025/Royal Park.jpg",
      airportTransfers: "Airport Transfers Complimentary",
      remarks: "Royal King Room: Single Occupancy - US $95 (All Inclusive), Double Occupancy - US $114 (All Inclusive)",
    },
    {
      name: "Hotel Lake Castle",
      address: "Plot # 1A, Road # 68/A, Gulshan-2, Rd No 63, Dhaka, Dhaka Division 1212",
      website: "https://hotellakecastle.com/",
      star: 3,
      roomType: "Deluxe Single Room",
      rates: {
        single: "US $70 (All Inclusive)",
        double: "US $90 (All Inclusive)"
      },
      distance: "6.7 km - 14 mins",
      image: "/assets/img/hotel/2025/Lake Castle.jpg",
      airportTransfers: "Airport Transfers Complimentary",
    }
  ]
};


const HotelsTravelPage: React.FC = () => {
  const [activeShow, setActiveShow] = useState('Sri Lanka');
  const shows = Object.keys(HOTELS_DATA);
  const activeHotels = HOTELS_DATA[activeShow] ?? [];
  const bookingDeadline = activeShow === 'Bangladesh' ? '1st May, 2026' : '15th July, 2026';

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
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.85] text-archive-charcoal uppercase">
              Hotels & <br className="hidden lg:inline" />
              <span className="text-white">Travel.</span>
            </h1>
          </div>

          {/* Show Tabs Selector */}
          <div className="flex border border-archive-charcoal/10 bg-white p-2 shrink-0">
            {shows.map((show) => (
              <button
                key={show}
                onClick={() => setActiveShow(show)}
                className={`px-8 py-4 text-[14px] font-black tracking-widest transition-all uppercase ${activeShow === show ? 'bg-archive-charcoal text-white' : 'text-archive-charcoal/40 hover:text-archive-charcoal'}`}
              >
                {show.toUpperCase()}
              </button>
            ))}
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
          >
            {activeHotels.map((hotel, idx) => (
              <motion.div
                key={hotel.name}
                className="bg-white border border-archive-charcoal/10 group relative overflow-hidden flex flex-col h-full hover:bg-archive-charcoal transition-all duration-700 shadow-sm"
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
                      <h3 className="text-lg font-black tracking-tighter leading-tight group-hover:text-archive-clay transition-colors duration-500">
                        {hotel.name.toUpperCase()}
                      </h3>
                      <div className="flex items-start gap-2 text-[14px] font-bold tracking-widest text-archive-charcoal/40 group-hover:text-white/40">
                        <MapPin size={10} className="text-archive-clay mt-0.5" />
                        <span className="line-clamp-2 uppercase">{hotel.address}</span>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-archive-charcoal/5 group-hover:border-white/10">
                      <div className="flex justify-between items-center">
                        <span className="text-[14px] font-black tracking-widest opacity-40 group-hover:opacity-100 uppercase">Room Type</span>
                        <span className="text-[14px] font-bold">{hotel.roomType}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <span className="text-[14px] font-black tracking-widest opacity-20 group-hover:opacity-60 uppercase">Single</span>
                          <p className="text-[14px] font-bold">{hotel.rates.single}</p>
                        </div>
                        <div className="space-y-1 text-right">
                          <span className="text-[14px] font-black tracking-widest opacity-20 group-hover:opacity-60 uppercase">Double</span>
                          <p className="text-[14px] font-bold">{hotel.rates.double}</p>
                        </div>
                      </div>
                      {hotel.rates.twin && (
                        <div className="flex justify-between gap-4">
                          <span className="text-[14px] font-black tracking-widest opacity-20 group-hover:opacity-60 uppercase">Twin</span>
                          <p className="text-right text-[14px] font-bold">{hotel.rates.twin}</p>
                        </div>
                      )}
                      {hotel.airportTransfers && (
                        <div className="flex justify-between gap-4">
                          <span className="text-[14px] font-black tracking-widest opacity-20 group-hover:opacity-60 uppercase">Airport Transfers</span>
                          <p className="text-right text-[14px] font-bold">{hotel.airportTransfers}</p>
                        </div>
                      )}
                      {hotel.remarks && (
                        <p className="text-[14px] font-bold leading-relaxed text-archive-charcoal/50 group-hover:text-white/50">
                          {hotel.remarks}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-8 space-y-4">
                    <div className="flex items-center gap-3 text-[14px] font-bold tracking-widest">
                      <Clock size={12} className="text-archive-clay" />
                      <span className="opacity-40 group-hover:opacity-100">{hotel.distance}</span>
                    </div>
                    <a
                      href={hotel.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[14px] font-black tracking-[0.3em] text-archive-clay border-b border-transparent hover:border-archive-clay transition-all"
                    >
                      VISIT WEBSITE <Globe size={12} className="uppercase" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Important Information & Contact Section */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-2">

        {/* Important Info Column */}
        <div className="lg:col-span-7 bg-white p-12 md:p-20 space-y-12 border border-archive-charcoal/10 shadow-sm">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Info size={16} className="text-archive-clay" />
              <h2 className="text-xl font-black tracking-tight text-archive-charcoal uppercase">Important Information</h2>
            </div>
            <div className="w-12 h-px bg-archive-clay"></div>
          </div>

          <ul className="space-y-6">
            {[
              `Kindly send us the duly filled hotel booking form on or before ${bookingDeadline}.`,
              "The room rates include Buffet Breakfast, Wi-Fi & Complimentary In-Room Amenities.",
              "Full payment should be made in advance for booking the rooms.",
              "Above room rates are applicable on a first come, first served basis.",
              "Rooms are subject to availability at the time of booking.",
              "Airport & Venue transfers can be arranged on request at an additional cost."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-[14px] font-bold tracking-widest leading-relaxed text-archive-charcoal/60">
                <div className="w-1.5 h-1.5 bg-archive-clay rotate-45 mt-1 shrink-0"></div>
                {item.toUpperCase()}
              </li>
            ))}
          </ul>

          <div className="p-8 border border-archive-charcoal/5 bg-archive-cream/30 text-[14px] font-medium text-archive-charcoal/80 leading-relaxed">
            "I hereby confirm booking with hotel selected above and would be responsible to pay all relevant charges occurring during the duration of my stay."
          </div>
        </div>

        {/* Contact Registry Column */}
        <div className="lg:col-span-5 bg-archive-charcoal p-12 md:p-20 text-white flex flex-col justify-between">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-archive-clay text-[14px] font-black tracking-[0.5em] uppercase">Booking Registry</span>
              <h3 className="text-xl font-black leading-[0.9] uppercase">For more info <br /> & hotel bookings.</h3>
            </div>

            <div className="space-y-8">
              {[
                { name: "Mr. Vijay Pathak", tel: "+91 9082331784", mail: "vijay@worldexindia.com" },
                { name: "Mr. Karan Solanki", tel: "+91 9833849850", mail: "karan@worldexindia.com" }
              ].map((contact, i) => (
                <div key={i} className="space-y-4 p-8 border border-white/10 group hover:border-archive-clay transition-all">
                  <div className="flex items-center gap-3">
                    <UserCheck size={14} className="text-archive-clay" />
                    <span className="text-[14px] font-black tracking-widest uppercase">{contact.name}</span>
                  </div>
                  <div className="space-y-2">
                    <a href={`tel:${contact.tel}`} className="flex items-center gap-3 text-[14px] font-bold text-white/40 hover:text-white transition-colors">
                      <Phone size={12} /> {contact.tel}
                    </a>
                    <a href={`mailto:${contact.mail}`} className="flex items-center gap-3 text-[14px] font-bold text-white/40 hover:text-white transition-colors">
                      <Mail size={12} /> {contact.mail}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-12">
            <button className="w-full p-6 border border-white/20 text-white font-black text-[14px] tracking-[0.4em] hover:bg-archive-clay hover:border-archive-clay transition-all flex items-center justify-center gap-4 group">
              DOWNLOAD BOOKING FORM <Download size={16} className="group-hover:translate-y-1 transition-transform uppercase" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelsTravelPage;
