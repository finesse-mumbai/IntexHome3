import React from "react";
import { ArrowRight, CalendarDays, Clock, MapPin, Quote, Users } from "lucide-react";

const currentSpeakers = [
  {
    img: "2026/Rashed_BKMEA.jpeg",
    name: "Mohammad Rashed",
    title: "Vice President, BKMEA",
  },
  {
    img: "2026/Md-Roman-Mia.jpeg",
    name: "Md. Roman Mia",
    title: "Vice President (Admin), BGBA",
  },
  {
    img: "2026/Akter-K-A-Design.jpeg",
    name: "Md. Akter Hossain",
    title: "Managing Director, K.A. Design Wear Ltd.",
  },
  {
    img: "2026/Engr-Dewan-Mahbub-Kamran.jpeg",
    name: "Engr. Dewan Mahbub Kamran",
    title: "Executive Director (Operations), Pretty Group",
  },
  {
    img: "2026/Shahana-Akter-Kiron-Regional-Lead-Textile-Genesis.jpeg",
    name: "Shahana Akter Kiron",
    title: "Regional Lead, Textile Genesis",
  },
];

const sessions = [
  {
    label: "Day 1",
    date: "19 June 2026",
    time: "4.00 pm to 5.30 pm",
    title: "Driving Sustainable Growth through Circular Textiles in Bangladesh",
    partner: "In Association with Textile Focus",
    partnerLogo: "/assets/img/mediaPartner/TextileFocus.png",
    speakerStatus: "Speakers and moderator listed below.",
  },
  {
    label: "Day 2",
    date: "20 June 2026",
    time: "11.30 am to 1.00 pm",
    title: "From Factory Floor to Global Fashion Influence: Bridging the Branding Gap in Bangladesh",
    partner: "In Association with Fashion & Beauty Journal",
    partnerLogo: "/assets/img/mediaPartner/FBj-logo.png",
    speakerStatus: "Speakers and moderator to be updated soon.",
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
  { icon: <CalendarDays size={18} />, label: "Date", value: "19 & 20 June 2026" },
  { icon: <Clock size={18} />, label: "Time", value: "Day 1: 4.00 pm to 5.30 pm / Day 2: 11.30 am to 1.00 pm" },
  { icon: <MapPin size={18} />, label: "Venue", value: "Mezzanine Level, Hall 4 - ICCB, Dhaka" },
  { icon: <Users size={18} />, label: "Format", value: "Seminar, networking and High Tea Reception" },
];

const textileGenesisItems = [
  { label: "Date", value: "18 June 2026" },
  { label: "Time", value: "3.30 pm to 6.00 pm" },
  { label: "Venue", value: "Mezzanine Level, Hall 4 - ICCB, Dhaka" },
  { label: "Access", value: "By Invitation Only" },
];

const speakerTestimonials = [
  {
    img: "AKM-Saifur-Rahman-Forhad.png",
    name: "AKM Saifur Rahman Farhad",
    designation: "BGBA",
    quote:
      "Intex is doing very well, I should say, from the business concept of apparel. It's really good to see the showcasing of all the products and accessories under the same umbrella.",
  },
  {
    img: "Abrar-Sayem-BAYLA.png",
    name: "Abrar Hossain",
    designation: "BAYLA",
    quote:
      "Thank you, Intex, for organizing this event. Definitely, the industry needs events like this, where people come together and can actually see what each of them is developing, what the suppliers are doing, and what the buyers actually want.",
  },
  {
    img: "Masud-Kabir-Motex-Fashion.png",
    name: "Masud Kabir",
    designation: "Motex Fashion",
    quote:
      "Intex has organized such a fantastic fair with many materials, different ideas, innovations and new things. Good luck.",
  },
  {
    img: "Ahsan-Mahmud-Nordic-Sourcing.png",
    name: "Ahsan Mahmood",
    designation: "Nordic Sourcing",
    quote: "Intex is a good platform for all the brands and buyers altogether.",
  },
  {
    img: "Mahabub-3rd-Eye.jpg",
    name: "Md. Mahbur Rahman",
    designation: "R&G 3rd Eye",
    quote:
      "This type of event is very helpful for us and for the audience as well. We get to learn a lot about the industry and understand how we can solve industry problems using AI.",
  },
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
              <img src="/assets/img/ibf-logo2026.jpg" alt="IBF Logo" className="w-full h-auto" />
            </div>
            <span className="text-[10px] font-black tracking-[0.55em] text-archive-clay uppercase block mb-5">
              Interactive Business Forum 2026
            </span>
            <h1 className="text-4xl md:text-7xl font-semibold tracking-tighter leading-[0.9] text-white uppercase max-w-4xl">
              IBF Seminar Series
            </h1>
            <p className="mt-6 max-w-3xl text-white/85 text-lg md:text-xl font-semibold">
              19th & 20th June 2026
            </p>
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
              The forum will also address <strong>From Factory Floor to Global Fashion Influence: Bridging the Branding Gap in Bangladesh</strong>,
              focusing on how the industry can strengthen brand value, enhance global positioning, and move beyond manufacturing excellence.
            </p>
            <p>
              Additionally, the forum will explore key opportunities and challenges in building a more resilient and sustainable
              textile ecosystem, with discussions centered on industry collaboration, evolving market demands, and long-term growth strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-20 bg-archive-cream">
        <div className="max-w-[1200px] mx-auto bg-white shadow-xl mb-10">
          <div className="p-6 md:p-10 border-b border-slate-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-[10px] font-black tracking-[0.3em] uppercase text-archive-clay mb-3">Textile Genesis Industry Session</p>
                <h3 className="text-2xl md:text-4xl font-semibold tracking-tight uppercase text-slate-900">Invitation Only Session</h3>
              </div>
              <img src="/assets/img/mediaPartner/textilegenesis.jpeg" alt="Textile Genesis" className="w-52 max-w-full object-contain bg-white border border-slate-200 p-3" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">
              {textileGenesisItems.map((item) => (
                <div key={item.label} className="bg-archive-cream p-4">
                  <p className="text-[9px] font-black tracking-[0.3em] uppercase text-archive-clay">{item.label}</p>
                  <p className="text-sm font-bold text-slate-800 mt-1">{item.value}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm md:text-base font-semibold text-slate-700">
              Followed by Networking and High Tea Reception.
            </p>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto bg-white shadow-xl">
          <div className="bg-archive-clay px-6 md:px-10 py-8 text-white">
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tight uppercase">
              IBF 2026 Sessions
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
            <h4 className="text-[13px] font-black tracking-[0.15em] text-archive-clay uppercase mb-6">Panel Discussions</h4>
            <SessionCard session={sessions[0]} />

            <h4 className="text-[13px] font-black tracking-[0.15em] text-archive-clay uppercase mb-6">
              Day 1 Speakers and Moderator
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
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
                  src="/assets/img/IBF-sessions/2026/Monowar_Moderator.png"
                  alt="Mohammad Monower Hossain"
                  className="w-28 h-28 rounded-full object-cover bg-white border"
                />
                <div>
                  <p className="font-black text-slate-900 leading-tight">Mohammad Monower Hossain</p>
                  <p className="text-sm text-slate-600 leading-snug">Moderator, Head of Sustainability, TEAM Group</p>
                </div>
              </div>
            </div>

            <SessionCard session={sessions[1]} />

            <h4 className="text-[13px] font-black tracking-[0.15em] text-archive-clay uppercase mb-6">
              Day 2 Speakers and Moderator
            </h4>
            <div className="bg-archive-cream p-6 text-center">
              <p className="text-xl font-black text-slate-900 uppercase">Coming Soon</p>
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

      <section className="bg-archive-cream py-20 px-6 md:px-12 border-y border-slate-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <span className="text-[10px] font-black tracking-[0.45em] text-archive-clay uppercase block mb-4">Speakers</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Testimonial</h2>
            </div>
            <p className="text-slate-600 max-w-xl">
              Voices from IBF speakers sharing why the forum matters for industry learning, sourcing, and collaboration.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white p-3 shadow-xl">
              <iframe
                className="w-full aspect-video bg-archive-charcoal"
                src="https://www.youtube.com/embed/98nQFzG-yzQ?si=mFQglxNaCAIzPBl8"
                title="IBF Speaker Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              {speakerTestimonials.map((testimonial) => (
                <div key={testimonial.name} className="bg-white p-5 flex gap-4 items-start border border-slate-200">
                  <img
                    src={`/assets/img/testinomial/${testimonial.img}`}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover object-center bg-archive-cream border shrink-0"
                  />
                  <div>
                    <Quote size={18} className="text-archive-clay mb-2" />
                    <p className="text-sm text-slate-700 leading-relaxed">{testimonial.quote}</p>
                    <p className="mt-3 font-black text-sm text-slate-900">{testimonial.name}</p>
                    <p className="text-xs text-slate-500 font-bold">{testimonial.designation}</p>
                  </div>
                </div>
              ))}
            </div>
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

interface SessionCardProps {
  session: (typeof sessions)[number];
}

const SessionCard: React.FC<SessionCardProps> = ({ session }) => (
  <div className="bg-archive-cream p-5 md:p-8 mb-10">
    <p className="text-[10px] font-black tracking-[0.3em] uppercase text-archive-clay">{session.label}</p>
    <h5 className="text-xl md:text-3xl font-black text-slate-900 leading-tight mt-3">{session.title}</h5>
    <div className="mt-6 space-y-2 text-sm md:text-base font-bold text-slate-700">
      <p>{session.date}</p>
      <p>{session.time}</p>
      <p>Mezzanine Level, Hall 4 - ICCB, Dhaka</p>
      <p>Followed by Networking and High Tea Reception.</p>
      <p className="text-archive-clay">{session.speakerStatus}</p>
    </div>
    <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
      <span className="text-[10px] font-black tracking-[0.25em] uppercase text-slate-500">{session.partner}</span>
      <img
        src={session.partnerLogo}
        alt={`${session.partner.replace("In Association with ", "")} logo`}
        className="h-12 max-w-[140px] object-contain bg-white p-2 border border-slate-200"
      />
    </div>
  </div>
);

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
