import React from "react";
import { ArrowRight, CalendarDays, Clock, MapPin, Users } from "lucide-react";

const currentSpeakers = [
  {
    img: "Minhaj-Hoque.jpg",
    name: "Minhazul Hoque",
    title: "Director, BKMEA and Fatullah Dyeing & Calendering Mills Ltd.",
  },
  {
    img: "Abrar-Sayem-BAYLA.jpg",
    name: "Abrar Hossain Sayem",
    title: "President, BAYLA and Director, Sayem Fashions Ltd.",
  },
  {
    img: "Ahsan-Mahmud-Nordic-Sourcing.jpeg",
    name: "Ahsan Mahmood",
    title: "CEO, Nordic Sourcing",
  },
  {
    img: "Md-Mahbubur-Rahman.jpeg",
    name: "Md. Mahbubur Rahman",
    title: "Chief Inspirational Officer, R&G 3rd Eye",
  },
  {
    img: "Aurelie-Rob.jpeg",
    name: "Aurelie Rob",
    title: "Digihub Manager, Astra (Bangladesh) Supply Chain Service Limited",
  },
];

const pastSpeakers = [
  { img: "Abdullah-Hil-Rakib.jpg", name: "Abdullah Hil Rakib", title: "Vice President, BGMEA; Managing Director, Team Group" },
  { img: "Md-Akther-Hossain-Apurbo.jpeg", name: "Md. Akther Hossain Apurbo", title: "Vice President, BKMEA; Managing Director, Wisdom Attires Ltd." },
  { img: "Jan-Rossel.jpg", name: "Jan Rossel", title: "Sourcing & Country Manager, Sports Group Denmark" },
  { img: "Nafis-Ud-Doula.jpeg", name: "Nafis Ud Doula", title: "Director, Impress-Newtex Composite Textiles Ltd." },
  { img: "Wasi-Zakariah-Director-Posh-Garments.jpg", name: "Wasim Zakariah", title: "Director, Posh Garments" },
  { img: "Engr-Md-Nasir-Ullah.jpg", name: "Engr. Md. Nasir Ullah", title: "Country Director, Officina39" },
  { img: "A-K-M-Saifur-Rahman.png", name: "A K M Saifur Rahman", title: "Vice President, BGBA; Managing Partner, WIKITEX-BD" },
  { img: "Mohammad-Abdur-Rouf.png", name: "Mohammad Abdur Rouf", title: "Executive Director, Dekko Accessories and Agami Accessories Ltd." },
];

const glimpse2025 = Array.from({ length: 12 }, (_, index) => `/assets/img/glimpsesofibf/2025/${index + 1}.png`);
const glimpse2024 = Array.from({ length: 8 }, (_, index) => `/assets/img/glimpsesofibf/${index + 1}.jpg`);

const detailItems = [
  { icon: <CalendarDays size={18} />, label: "Date", value: "19 June 2026" },
  { icon: <Clock size={18} />, label: "Time", value: "4.00 pm to 6.00 pm" },
  { icon: <MapPin size={18} />, label: "Venue", value: "Hall 4, ICCB Dhaka" },
  { icon: <Users size={18} />, label: "Format", value: "Seminar, networking and High Tea Reception" },
];

const IBFSeminarSeriesPage: React.FC = () => {
  return (
    <div className="bg-slate-50 text-archive-charcoal min-h-screen">
      <section className="relative min-h-[620px] overflow-hidden bg-archive-charcoal">
        <img
          src="/assets/img/Bnagladesh-ibf-page.png"
          alt="Interactive Business Forum Seminar Series"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-archive-charcoal via-archive-charcoal/75 to-archive-charcoal/30" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 py-24 min-h-[620px] flex items-center">
          <div className="max-w-4xl">
            <div className="w-60 bg-white p-4 mb-10 shadow-2xl">
              <img src="/assets/img/output-onlinepngtools.png" alt="IBF Logo" className="w-full h-auto" />
            </div>
            <span className="text-[10px] font-black tracking-[0.55em] text-archive-clay uppercase block mb-5">
              IBF Seminar Series
            </span>
            <h1 className="text-4xl md:text-7xl font-semibold tracking-tighter leading-[0.9] text-white uppercase max-w-4xl">
              Driving Sustainable Growth through Circular Textiles in Bangladesh
            </h1>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#home"
                className="inline-flex items-center gap-3 bg-archive-clay px-8 py-4 text-white text-[11px] font-black tracking-[0.25em] uppercase hover:bg-white hover:text-archive-charcoal transition-colors"
              >
                Register Now <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center border border-white/30 px-8 py-4 text-white text-[11px] font-black tracking-[0.25em] uppercase hover:bg-white hover:text-archive-charcoal transition-colors"
              >
                Partner Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-archive-cream">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <span className="text-[10px] font-black tracking-[0.45em] text-archive-clay uppercase block mb-4">
              Interactive Business Forum
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none uppercase">
              Seminar Series
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-slate-700 text-base md:text-lg leading-relaxed">
            <p>
              This year's spotlight is on <strong>Driving Sustainable Growth through Circular Textiles in Bangladesh</strong>,
              highlighting how circular practices are transforming the textile value chain through resource efficiency,
              waste reduction, recycling, and sustainable innovation.
            </p>
            <p>
              The forum will also explore key opportunities and challenges in building a more resilient and sustainable
              textile ecosystem, focusing on industry collaboration, evolving market demands, and long-term growth strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-20 bg-archive-cream">
        <div className="max-w-[1200px] mx-auto bg-white  shadow-xl">
          <div className="bg-archive-clay px-6 md:px-10 py-8 text-white">
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tight uppercase">
              Driving Sustainable Growth through Circular Textiles in Bangladesh
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">
              {detailItems.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <p className="text-[9px] font-black tracking-[0.3em] uppercase text-white/60">{item.label}</p>
                    <p className="text-sm font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 md:p-10">
            <h4 className="text-[13px] font-black tracking-[0.15em] text-archive-clay uppercase mb-6">Featured Speakers</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {currentSpeakers.map((speaker) => (
                <div key={speaker.name} className="flex items-center gap-4  p-4 bg-archive-cream">
                  <img
                    src={`/assets/img/IBF-sessions/${speaker.img}`}
                    alt={speaker.name}
                    className="w-28 h-28 rounded-full object-cover bg-white border"
                  />
                  <div>
                    <p className="font-black text-slate-900 leading-tight">{speaker.name}</p>
                    <p className="text-sm text-slate-600 leading-snug">{speaker.title}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-4 bg-archive-cream">
                <img
                  src="/assets/img/IBF-sessions/Mohammad-Monower-moderator.jpg"
                  alt="Mohammad Monower Hossain"
                  className="w-28 h-28 rounded-full object-cover bg-white border"
                />
                <div>
                  <p className="font-black text-slate-900 leading-tight">Mohammad Monower Hossain</p>
                  <p className="text-sm text-slate-600 leading-snug">Moderator, Chief Sustainability Officer, TEAM Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6 md:px-12 border-y border-slate-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <span className="text-[10px] font-black tracking-[0.45em] text-archive-clay uppercase block mb-4">Archive</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Past Speakers</h2>
            </div>
            <p className="text-slate-600 max-w-xl">
              A look back at IBF voices from earlier Bangladesh sessions on exports, green industry, trade finance, and sustainable fashion.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {pastSpeakers.map((speaker) => (
              <div key={speaker.name} className="bg-archive-cream p-5 text-center">
                <img
                  src={`/assets/img/IBF-sessions/${speaker.img}`}
                  alt={speaker.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 bg-white border"
                />
                <p className="font-black text-sm text-slate-900 leading-tight">{speaker.name}</p>
                <p className="text-xs text-slate-600 mt-2 leading-snug">{speaker.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-archive-cream">
        <div className="max-w-[1200px] mx-auto space-y-16">
          <GalleryBlock title="Glimpses of IBF Seminar Series 2025" images={glimpse2025} />
          <GalleryBlock title="Glimpses of IBF Seminar Series 2024" images={glimpse2024} />
        </div>
      </section>
    </div>
  );
};

interface GalleryBlockProps {
  title: string;
  images: string[];
}

const GalleryBlock: React.FC<GalleryBlockProps> = ({ title, images }) => (
  <div>
    <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase text-center mb-8">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <a
          key={image}
          href={image}
          target="_blank"
          rel="noreferrer"
          className="group block aspect-[4/3] overflow-hidden bg-white border border-slate-200"
        >
          <img
            src={image}
            alt={`${title} ${index + 1}`}
            className="w-full h-full min-h-36 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </a>
      ))}
    </div>
  </div>
);

export default IBFSeminarSeriesPage;
