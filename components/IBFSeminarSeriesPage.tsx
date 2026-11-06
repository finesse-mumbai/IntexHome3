import React, { useState } from "react";
import { ArrowRight, CalendarDays, Clock, MapPin, Quote, Users, Mic, Lock, Phone } from "lucide-react";

const PHOTO_BASE = "/assets/img/IBF-sessions/";

interface Speaker {
  name: string;
  role: string;
  org?: string;
  photo?: string;
  moderator?: boolean;
  moderatorLabel?: string;
}

interface ScheduleItem {
  time: string;
  title: string;
  details?: string[];
}

interface IbfSession {
  label?: string;
  headerImage?: string;
  badge?: string;
  description?: string;
  schedule?: ScheduleItem[];
  contact?: { label: string; name: string; phone: string };
  title: string;
  date?: string;
  time?: string;
  venue?: string;
  access?: string;
  note?: string;
  partner?: string;
  partnerLogo?: string;
  speakers?: Speaker[];
  speakersStatus?: string;
}

interface IbfEdition {
  id: string;
  country: "Sri Lanka" | "Bangladesh";
  year: string;
  dates?: string;
  venue: string;
  upcoming?: boolean;
  sessions: IbfSession[];
  speakersTitle?: string;
  speakers?: Speaker[];
}

const DHAKA_HALL = "Mezzanine Level, Hall 4 - ICCB, Dhaka";
const SL_HALL = "Mihilaka Medura, BMICH, Colombo-7";
const HIGH_TEA = "Followed by Networking and High Tea Reception.";

const ibfEditions: IbfEdition[] = [
  {
    id: "bd-2027",
    country: "Bangladesh",
    year: "2027",
    dates: "22 – 24 June 2027",
    venue: DHAKA_HALL,
    upcoming: true,
    sessions: [
      {
        label: "Invitation Only Session",
        title: "Textile Genesis Industry Session",
        date: "22 June 2027",
        time: "3.30 pm to 6.00 pm",
        venue: DHAKA_HALL,
        access: "By Invitation Only",
        note: HIGH_TEA,
        partner: "Textile Genesis",
        partnerLogo: "/assets/img/mediaPartner/textilegenesis.jpeg",
      },
      {
        label: "Day 1",
        title: "Driving Sustainable Growth through Circular Textiles in Bangladesh",
        date: "23 June 2027",
        time: "4.00 pm to 5.30 pm",
        venue: DHAKA_HALL,
        note: HIGH_TEA,
        partner: "In Association with Textile Focus",
        partnerLogo: "/assets/img/mediaPartner/TextileFocus.png",
        speakers: [
          { name: "Mohammad Rashed", role: "Vice President, BKMEA", photo: "2026/Rashed_BKMEA.jpeg" },
          { name: "Md. Roman Mia", role: "Vice President (Admin), BGBA", photo: "2026/Md-Roman-Mia.jpeg" },
          { name: "Md. Akter Hossain", role: "Managing Director, K.A. Design Wear Ltd.", photo: "2026/Akter-K-A-Design.jpeg" },
          { name: "Engr. Dewan Mahbub Kamran", role: "Executive Director (Operations), Pretty Group", photo: "2026/Engr-Dewan-Mahbub-Kamran.jpeg" },
          { name: "Shahana Akter Kiron", role: "Regional Lead, Textile Genesis", photo: "2026/Shahana-Akter-Kiron-Regional-Lead-Textile-Genesis.jpeg" },
          { name: "Mohammad Monower Hossain", role: "Head of Sustainability, TEAM Group", photo: "2026/Monowar_Moderator.png", moderator: true },
        ],
      },
      {
        label: "Day 2",
        title: "From Factory Floor to Global Fashion Influence: Bridging the Branding Gap in Bangladesh",
        date: "24 June 2027",
        time: "11.30 am to 1.00 pm",
        venue: DHAKA_HALL,
        note: HIGH_TEA,
        partner: "In Association with Fashion & Beauty Journal",
        partnerLogo: "/assets/img/mediaPartner/FBj-logo.png",
        speakersStatus: "Speakers and moderator coming soon.",
      },
    ],
  },
  {
    id: "sl-2026",
    country: "Sri Lanka",
    year: "2026",
    dates: "5 – 7 August 2026",
    venue: SL_HALL,
    sessions: [
      {
        label: "Panel Discussion",
        title: "The Twin Transition: Navigating Green Regulations and Circularity for Global Export Competitiveness",
        date: "5th August 2026 (Wednesday)",
        time: "3.00 PM to 4.00 PM",
        venue: SL_HALL,
        note: "Followed by High-Tea and Networking Reception.",
        speakers: [
          { name: "Dr. Prabod Munasinghe", role: "Senior Lecturer", org: "University of Moratuwa, Sri Lanka", photo: "SL2026/Prabod-Munasinghe.jpg" },
          { name: "Dr. Leonie Vaas", role: "General Manager – Group Sustainability", org: "Hirdaramani Apparel", photo: "SL2026/Leonie-Vaas.jpg" },
          { name: "Mr. Mendaka Hettithanthri", role: "Deputy General Manager, Head of Sustainability and Engineering", org: "Teejay Lanka PLC", photo: "SL2026/Mendaka-Hettithanthri.jpg" },
          { name: "Mr. Dhammika Fernando", role: "Chairman", org: "Free Trade Zone Manufacturers Association (FTZMA)", photo: "SL2026/Dhammika-Fernando.jpg" },
          { name: "Ms. Eranthi Premaratne", role: "National Consultant", org: "International Trade Centre (UN/WTO)", photo: "SL2026/Eranthi-Premaratne.jpg", moderator: true },
        ],
      },
      {
        label: "Panel Discussion",
        title: "Digital Transformation in Apparel: How AI and Automation Are Reshaping Supply Chains, Design, Manufacturing, and Support Functions",
        date: "6th August 2026 (Thursday)",
        time: "3.00 PM to 4.00 PM",
        venue: SL_HALL,
        note: "Followed by High-Tea and Networking Reception.",
        partner: "In Association with MUTA",
        partnerLogo: "/assets/img/Muta-logo.png",
        speakers: [
          { name: "Mr. Hasib Omar", role: "CEO and Founder", org: "The Moose Clothing Company (Moose)", photo: "SL2026/Hasib-Omar.jpg" },
          { name: "Mr. Ahmed Irfan", role: "COO - Wearables and Growth Platforms", org: "MAS Holdings", photo: "SL2026/Ahmed-Irfan.jpg" },
          { name: "Mr. Darpan Shukla", role: "Chief Supply Chain & Sourcing Officer", org: "Brandix Apparel Limited", photo: "SL2026/Darpan-Shukla.jpg" },
          { name: "Mrs. Ruwanthi Fernando", role: "Global Director SAP Fashion Vertical Business", org: "Nagarro", photo: "SL2026/Ruwanthi-Fernando.jpg" },
          { name: "Mr. Dulshan Kariyawasam", role: "Director, Secretary", org: "Elite Feet Hosiery PVT LTD, Moratuwa University Textile Association (MUTA)", photo: "SL2026/Dulshan-Kariyawasam.jpg", moderator: true },
        ],
      },
      {
        label: "Panel Discussion",
        title: "The Intelligent Factory: Driving Sri Lanka’s Apparel Competitiveness Through Smart Manufacturing",
        date: "7th August 2026 (Friday)",
        time: "12:00 PM to 1.00 PM",
        venue: SL_HALL,
        note: "Followed by Working Lunch.",
        partner: "In Association with MUTA",
        partnerLogo: "/assets/img/Muta-logo.png",
        speakers: [
          { name: "Mr. Shafraz Mohammed", role: "Managing Director", org: "Orange Sewing Solutions (Pvt) Ltd.", photo: "SL2026/Shafraz-Mohammed.jpg" },
          { name: "Mr. Edward Phan", role: "International Sales Manager", org: "James Heal, PPT Group UK", photo: "SL2026/Edward-Phan.jpg" },
          { name: "Mr. Matthew Yates", role: "Global Tagless Sales Director", org: "InkCups Now LLC", photo: "SL2026/Matthew-Yates.jpg" },
          { name: "Mr. Deeptha Wijegunawardhana", role: "Director – Process Innovation", org: "MAS Silueta PVT LTD", photo: "SL2026/Deeptha-Wijegunawardhana.jpg" },
          { name: "Mr. Thisum Mendis", role: "Vice President, Manufacturing Excellence", org: "INQUBE Global", photo: "SL2026/Thisum-Mendis.jpg" },
          { name: "Mr. Yasas Samarakoon", role: "Manufacturing Technical Head", org: "MAS Activewear", photo: "SL2026/Yasas-Samarakoon.jpg" },
          { name: "Mr. Afham Ali", role: "Director, Planning", org: "Brandix Apparel Limited", photo: "SL2026/Afham-Ali.jpg" },
          { name: "Mr. Kavindu Mediwake", role: "Manager – Material Innovation", org: "MAS Silueta", photo: "SL2026/Kavindu-Mediwake.jpg", moderator: true },
        ],
      },
    ],
  },
  {
    id: "bd-2026",
    country: "Bangladesh",
    year: "2026",
    dates: "18 – 20 June 2026",
    venue: DHAKA_HALL,
    sessions: [
      {
        label: "Industry Session",
        headerImage: "/assets/img/TG-hEADER.png",
        badge: "By Invitation Only",
        title: "TextileGenesis Industry Session",
        date: "18th June 2026",
        time: "3.30 pm to 6.00 pm",
        venue: DHAKA_HALL,
        access: "By Invitation Only",
        note: HIGH_TEA,
        description:
          "Join industry leaders, global brands, certification bodies, manufacturers, and supply chain partners at the TextileGenesis Bangladesh Industry Forum 2026, an exclusive gathering focused on advancing traceability, transparency, and sustainable sourcing across the textile value chain.",
        schedule: [
          { time: "2:30 PM – 3:15 PM", title: "Arrival and Registration" },
          { time: "3:30 PM – 4:30 PM", title: "Welcome Address & Opening Remarks by Distinguished Guests" },
          { time: "4:30 PM – 5:00 PM", title: "TextileGenesis Presentation" },
          {
            time: "5:00 PM – 5:45 PM",
            title: "Panel Discussion I",
            details: [
              "Scaling Sustainable Materials Across Global Supply Chains",
              "Featuring Leading Brands, Standard Bodies, Supply Chain Members",
            ],
          },
          { time: "5:45 PM – 6:00 PM", title: "Networking Break" },
          { time: "6:00 PM – 6:30 PM", title: "Awards Presentation & Closing Ceremony" },
        ],
        contact: {
          label: "For more details on TextileGenesis Industry Session, Contact",
          name: "Shahana Kiron",
          phone: "+880 1714-425504",
        },
      },
      {
        label: "Panel Discussion",
        title: "From Factory Floor to Global Fashion Influence: Bridging the Branding Gap in Bangladesh",
        date: "20th June 2026",
        time: "11:30 am to 01:00 pm",
        venue: DHAKA_HALL,
        note: HIGH_TEA,
        partner: "In Association with Fashion & Beauty Journal",
        partnerLogo: "/assets/img/mediaPartner/FBj-logo.png",
        speakers: [
          { name: "Md Salauddin", role: "Director, Reaz Garments Ltd.", photo: "2026/Md-Salauddin.jpeg" },
          { name: "Hasin Arman", role: "Director, MB Knit", org: "First Vice President, Bangladesh Apparel Youth Leaders Association (BAYLA)", photo: "2026/Hasin-Arman.jpeg" },
          { name: "Kyaw Sein Thay Dolly", role: "Managing Director, Cloths \"R\" Us Ltd.", photo: "2026/Kyaw-Sein-Thay-Dolly.jpeg" },
          { name: "Abdullah Al Mamun", role: "Business Area Manager, Marks & Spencer", photo: "2026/Abdullah-Al-Mamun.jpeg" },
          { name: "Indrapal Singh Rawat", role: "Vice President, Norpknit Industries Ltd.", photo: "2026/Indrapal-Singh-Rawat.jpeg" },
          { name: "Shahana Akter Kiron", role: "Regional Lead, TextileGenesis", photo: "2026/Shahana-Akter-Kiron-Regional-Lead-Textile-Genesis.jpeg" },
          { name: "ABM Faqrul Alam", role: "Head of Sustainability, Urmi Group", photo: "2026/ABM-Faqrul-Alam.jpeg", moderator: true, moderatorLabel: "Moderator & Keynote Speaker" },
        ],
      },
    ],
  },
  {
    id: "sl-2025",
    country: "Sri Lanka",
    year: "2025",
    dates: "6 – 8 August 2025",
    venue: "BMICH, Colombo",
    sessions: [
      {
        title: "Apparel 2030: Re-stitching Fashion’s Next Chapter",
        date: "6th August 2025",
        time: "2.00 PM to 4.00 PM",
        speakers: [
          { name: "Dr. Sameera Maheepala", role: "Director – Sourcing & Supply Chain, MAS Capital (Kreeda) Pvt Ltd", org: "PhD, BSc Eng, MBA, MBS, ACMA, CIM", photo: "SL2025/Sameera-Maheepala.jpg" },
          { name: "Dr. Karthik ND", role: "Regional Managing Director, Eurofins, South Asia", photo: "SL2025/Karthik-ND.jpg" },
          { name: "Hemal Kannangara", role: "Deputy General Manager – Marketing, Brandix Apparel Pvt Ltd", photo: "SL2025/Hemal-Kannangara.jpg" },
          { name: "Nalaka Senavirathna", role: "CEO – Eco Spindles (Pvt) Ltd", photo: "SL2025/Nalaka-Senavirathna.jpg" },
          { name: "ManMohan Singh", role: "Chief Marketing Officer – Birla Cellulose / Grasim Industries - Aditya Birla Group", photo: "SL2025/ManMohan-Singh.jpg" },
          { name: "Zoe Keay", role: "Regional Vice President - Oritain", photo: "SL2025/Zoe-Keay.jpg" },
        ],
      },
      {
        title: "Trust Over TRENDS: Building Brands Consumer Trust",
        date: "7th August 2025",
        time: "2.00 PM to 4.00 PM",
        speakers: [
          { name: "Thilanka Ranatunga Mudalige", role: "Chief People Officer, INQUBE Global", photo: "SL2025/Thilanka-Ranatunga.jpg" },
          { name: "Iyantha Tennakoon", role: "Former Group Director, Walmart Sourcing", photo: "SL2025/Iyantha-Tennakoon.jpg" },
          { name: "Oshada Senanayake", role: "Director, Brandix Apparel Pvt Ltd", photo: "SL2025/Oshada-Senanayake.jpg" },
          { name: "Marc Lewkowitz", role: "President and CEO, SUPIMA", photo: "SL2025/Marc-Lewkowitz.jpg" },
          { name: "Stephanie Thiers Ratcliffe", role: "Senior Director of Global Operations, Cotton Council International", photo: "SL2025/Stephanie-Thiers-Ratcliffe.jpg" },
          { name: "Darpan Shukla", role: "Group Head of Supply Chain - Verticality, Brandix Apparel (Pvt) Ltd", photo: "SL2025/Darpan-Shukla.jpg" },
        ],
      },
    ],
  },
  {
    id: "bd-2025",
    country: "Bangladesh",
    year: "2025",
    dates: "26 – 27 June 2025",
    venue: "ICCB, Dhaka",
    sessions: [
      {
        title: "AI and Adaptability of Technology: Reinventing the Fabric of Tomorrow",
        date: "26th June 2025",
        time: "03:30 pm to 04:00 pm",
        speakers: [
          { name: "Minhazul Hoque", role: "Director, BKMEA and Fatullah Dyeing & Calendering Mills Ltd.", photo: "Minhaj-Hoque.jpg" },
          { name: "Abrar Hossain Sayem", role: "President, BAYLA and Director, Sayem Fashions Ltd", photo: "Abrar-Sayem-BAYLA.jpg" },
          { name: "Ahsan Mahmood", role: "CEO, Nordic Sourcing", photo: "Ahsan-Mahmud-Nordic-Sourcing.jpeg" },
          { name: "Lithe Mohiuddin", role: "Director, Lithe Group", photo: "Lithe-Mohiuddin.jpg" },
          { name: "Md. Mahbubur Rahman", role: "Chief Inspirational Officer, R&G 3rd Eye", photo: "Md-Mahbubur-Rahman.jpeg" },
          { name: "Aurélie Rob", role: "Digihub Manager, Otto International", photo: "Aurelie-Rob.jpeg" },
          { name: "Mohammad Monower Hossain", role: "Chief Sustainability Officer, TEAM Group", photo: "Mohammad-Monower-moderator.jpg", moderator: true },
        ],
      },
      {
        title: "Tariffs and Industry Outlook: Unlocking the Risk and Opportunities",
        date: "27th June 2025",
        time: "03:30 pm to 04:00 pm",
        speakers: [
          { name: "Masud Kabir", role: "Managing Director, Motex Fashion", photo: "Masud-Kabir-Motex-Fashion.jpg" },
          { name: "Mohammed Sohel", role: "Director, BGMEA & Managing Director, Bangla Poshak Ltd.", photo: "Mohammad-Sohel.jpg" },
          { name: "Mohammad Sohel Sadat", role: "Chairman, Shin Shin Group", photo: "Mohammad-Sohel-Sadat.jpg" },
          { name: "AKM Saifur Rahman Farhad", role: "Vice President, BGBA", photo: "AKM-Saifur-Rahman-Forhad.jpg" },
          { name: "Mayeesha Mahmud", role: "Director, Cotton Group", photo: "Mayeesha-Mahmud.jpg" },
          { name: "Md Jasim Uddin", role: "Managing Director, Texture BD", photo: "Md-Jasim-Uddin.jpg" },
          { name: "Azam Saiful", role: "Chief Consultant & CEO, TJS Consultants", photo: "Azim-Saiful.jpg", moderator: true },
        ],
      },
    ],
  },
  {
    id: "sl-2024",
    country: "Sri Lanka",
    year: "2024",
    venue: "BMICH, Colombo",
    sessions: [
      {
        title: "Race for Supremacy in the Global RMG Industry – Prospects & Challenges for Sri Lanka",
      },
    ],
  },
  {
    id: "bd-2024",
    country: "Bangladesh",
    year: "2024",
    dates: "30 – 31 May 2024",
    venue: "ICCB, Dhaka",
    sessions: [
      { title: "Bangladesh RMG Export $100B – Reality and Challenges", date: "30th May 2024" },
      { title: "Bangladesh: A Role Model for Green Industry", date: "31st May 2024" },
    ],
    speakersTitle: "Speakers",
    speakers: [
      { name: "Abdullah Hil Rakib", role: "Vice President, BGMEA; Managing Director, Team Group", photo: "Abdullah-Hil-Rakib.jpg" },
      { name: "Md. Akther Hossain Apurbo", role: "Vice President, BKMEA; Managing Director, Wisdom Attires Ltd.", photo: "Md-Akther-Hossain-Apurbo.jpeg" },
      { name: "Jan Rossel", role: "Sourcing & Country Manager, Sports Group Denmark", photo: "Jan-Rossel.jpg" },
      { name: "Nafis Ud Doula", role: "Director, Impress-Newtex Composite Textiles Ltd.", photo: "Nafis-Ud-Doula.jpeg" },
      { name: "Wasim Zakariah", role: "Director, Posh Garments", photo: "Wasi-Zakariah-Director-Posh-Garments.jpg" },
      { name: "Engr. Md. Nasir Ullah", role: "Country Director, Officina39", photo: "Engr-Md-Nasir-Ullah.jpg" },
      { name: "A K M Saifur Rahman", role: "Vice President, BGBA; Managing Partner, WIKITEX-BD", photo: "A-K-M-Saifur-Rahman.png" },
      { name: "Mohammad Abdur Rouf", role: "Executive Director, Dekko Accessories and Agami Accessories Ltd.", photo: "Mohammad-Abdur-Rouf.png" },
    ],
  },
];

const glimpseSl2026 = Array.from({ length: 13 }, (_, index) => `/assets/img/glimpsesofibf/sl2026/${index + 1}.jpg`);
const glimpseBd2026 = Array.from({ length: 12 }, (_, index) => `/assets/img/glimpsesofibf/bd2026/${index + 1}.jpg`);
const glimpse2025 = Array.from({ length: 12 }, (_, index) => `/assets/img/glimpsesofibf/2025/${index + 1}.png`);
const glimpse2024 = Array.from({ length: 8 }, (_, index) => `/assets/img/glimpsesofibf/${index + 1}.jpg`);

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

const getInitials = (name: string) =>
  name
    .replace(/^(Dr|Mr|Mrs|Ms|Engr)\.?\s+/i, "")
    .split(/\s+/)
    .filter((part) => /^[A-Za-zÀ-ÿ]/.test(part))
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

const SpeakerAvatar: React.FC<{ speaker: Speaker }> = ({ speaker }) => {
  const [failed, setFailed] = useState(false);
  if (speaker.photo && !failed) {
    return (
      <img
        src={`${PHOTO_BASE}${speaker.photo}`}
        alt={speaker.name}
        loading="lazy"
        onError={() => setFailed(true)}
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover bg-white border border-slate-200 shrink-0"
      />
    );
  }
  return (
    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-archive-charcoal text-white flex items-center justify-center text-xl sm:text-2xl font-black tracking-wide shrink-0">
      {getInitials(speaker.name)}
    </div>
  );
};

const SpeakerCard: React.FC<{ speaker: Speaker }> = ({ speaker }) => (
  <div
    className={`flex items-center gap-4 p-4 ${
      speaker.moderator ? "bg-white border-2 border-archive-clay/40" : "bg-archive-cream"
    }`}
  >
    <SpeakerAvatar speaker={speaker} />
    <div className="min-w-0">
      {speaker.moderator && (
        <span className="inline-flex items-center gap-1 text-[11px] font-black tracking-[0.2em] uppercase text-archive-clay mb-1">
          <Mic size={12} /> {speaker.moderatorLabel ?? "Moderator"}
        </span>
      )}
      <p className="font-black text-slate-900 leading-tight">{speaker.name}</p>
      <p className="text-[14px] text-slate-600 leading-snug mt-1">{speaker.role}</p>
      {speaker.org && <p className="text-[13px] text-slate-500 font-semibold leading-snug mt-0.5">{speaker.org}</p>}
    </div>
  </div>
);

const SpeakerGrid: React.FC<{ speakers: Speaker[] }> = ({ speakers }) => {
  const ordered = [...speakers.filter((s) => !s.moderator), ...speakers.filter((s) => s.moderator)];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {ordered.map((speaker) => (
        <SpeakerCard key={speaker.name} speaker={speaker} />
      ))}
    </div>
  );
};

const SessionBlock: React.FC<{ session: IbfSession; index: number }> = ({ session, index }) => {
  const meta = [
    session.date && { icon: <CalendarDays size={15} />, value: session.date },
    session.time && { icon: <Clock size={15} />, value: session.time },
    session.venue && { icon: <MapPin size={15} />, value: session.venue },
    session.access && { icon: <Lock size={15} />, value: session.access },
  ].filter(Boolean) as { icon: React.ReactNode; value: string }[];

  return (
    <div className="py-8 md:py-10 border-b border-slate-200 last:border-b-0">
      {session.headerImage && (
        <div
          className="relative mb-6 aspect-[340/115] md:aspect-[1200/160] bg-contain md:bg-cover bg-no-repeat bg-center bg-archive-charcoal/5"
          style={{ backgroundImage: `url('${session.headerImage}')` }}
        >
          {session.badge && (
            <div className="absolute inset-0 flex items-center px-6 md:px-8">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white bg-black/40 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
                {session.badge}
              </span>
            </div>
          )}
        </div>
      )}
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
        <span className="text-4xl md:text-5xl font-black text-archive-clay/30 leading-none shrink-0 tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          {session.label && (
            <p className="text-[13px] font-black tracking-[0.3em] uppercase text-archive-clay mb-2">{session.label}</p>
          )}
          <h4 className="text-xl md:text-3xl font-black text-slate-900 leading-tight tracking-tight">{session.title}</h4>

          {meta.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[14px] font-bold text-slate-700">
              {meta.map((item) => (
                <span key={item.value} className="inline-flex items-center gap-2">
                  <span className="text-archive-clay">{item.icon}</span>
                  {item.value}
                </span>
              ))}
            </div>
          )}
          {session.note && <p className="mt-3 text-[14px] font-semibold text-slate-600">{session.note}</p>}

          {session.description && (
            <p className="mt-5 text-base md:text-lg text-slate-700 leading-relaxed max-w-4xl">{session.description}</p>
          )}

          {session.schedule && session.schedule.length > 0 && (
            <div className="mt-7">
              <p className="text-[13px] font-black tracking-[0.2em] uppercase text-slate-500 mb-4">Programme Schedule</p>
              <div className="space-y-2 max-w-4xl">
                {session.schedule.map((item) => (
                  <div key={item.time} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-5 p-3 bg-archive-cream">
                    <span className="text-[13px] md:text-[14px] font-black text-white bg-archive-clay px-3 py-1.5 sm:min-w-[170px] text-center shrink-0 self-start">
                      {item.time}
                    </span>
                    <div className="pt-0.5">
                      <p className="text-base font-bold text-slate-900">{item.title}</p>
                      {item.details?.map((detail) => (
                        <p key={detail} className="text-[14px] text-slate-600 mt-1">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {session.contact && (
            <div className="mt-6 inline-flex flex-col bg-white border border-slate-200 px-5 py-3.5">
              <span className="text-[11px] font-black tracking-[0.15em] uppercase text-slate-500 mb-1.5">{session.contact.label}</span>
              <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-slate-800">
                <Phone size={15} className="text-archive-clay" />
                {session.contact.name} –{" "}
                <a href={`tel:${session.contact.phone.replace(/[^+\d]/g, "")}`} className="font-black hover:text-archive-clay transition-colors">
                  {session.contact.phone}
                </a>
              </span>
            </div>
          )}

          {session.partner && (
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-[12px] font-black tracking-[0.25em] uppercase text-slate-500">{session.partner}</span>
              {session.partnerLogo && (
                <img
                  src={session.partnerLogo}
                  alt={`${session.partner.replace("In Association with ", "")} logo`}
                  className="h-12 max-w-[160px] object-contain bg-white p-2 border border-slate-200"
                />
              )}
            </div>
          )}

          {session.speakers && session.speakers.length > 0 && (
            <div className="mt-7">
              <p className="text-[13px] font-black tracking-[0.2em] uppercase text-slate-500 mb-4">
                Speakers{session.speakers.some((s) => s.moderator) ? " & Moderator" : ""}
              </p>
              <SpeakerGrid speakers={session.speakers} />
            </div>
          )}
          {session.speakersStatus && (
            <div className="mt-7 bg-archive-cream p-6 text-center">
              <p className="text-lg font-black text-slate-900 uppercase">{session.speakersStatus}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const IbfYearWiseTopics: React.FC = () => {
  const [activeId, setActiveId] = useState(ibfEditions[0].id);
  const edition = ibfEditions.find((e) => e.id === activeId) ?? ibfEditions[0];
  const years = Array.from(new Set(ibfEditions.map((e) => e.year)));

  return (
    <section id="ibf-details" className="bg-[#FAF8F5] py-20 md:py-24 px-4 sm:px-6 md:px-10 border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-8 md:mb-10">
          <span className="text-[14px] font-black tracking-[0.45em] text-archive-clay uppercase block mb-4">Year Wise</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 uppercase">Topics & Speakers</h2>
        </div>

        {/* Year-wise edition tabs */}
        <div className="flex gap-3 overflow-x-auto pb-3 -mx-1 px-1">
          {years.map((year) => (
            <div key={year} className="flex items-center gap-2 shrink-0">
              <span className="text-2xl font-black text-slate-300 pr-1">{year}</span>
              {ibfEditions
                .filter((e) => e.year === year)
                .map((e) => {
                  const active = e.id === edition.id;
                  return (
                    <button
                      key={e.id}
                      onClick={() => setActiveId(e.id)}
                      className={`px-4 py-2.5 text-[13px] font-black tracking-[0.15em] uppercase border transition-colors whitespace-nowrap ${
                        active
                          ? "bg-archive-clay text-white border-archive-clay"
                          : "bg-white text-slate-700 border-slate-300 hover:border-archive-clay hover:text-archive-clay"
                      }`}
                    >
                      {e.country}
                      {e.upcoming && <span className={`ml-2 ${active ? "text-white/80" : "text-archive-clay"}`}>• Upcoming</span>}
                    </button>
                  );
                })}
              <span className="w-px h-8 bg-slate-200 mx-2" />
            </div>
          ))}
        </div>

        {/* Selected edition */}
        <div className="mt-6 bg-white shadow-xl">
          <div className="bg-archive-charcoal px-6 md:px-10 py-8 text-white flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-[13px] font-black tracking-[0.35em] uppercase text-archive-clay">
                IBF Seminar Series{edition.upcoming ? " · Upcoming" : ""}
              </p>
              <h3 className="text-3xl md:text-5xl font-black tracking-tight uppercase mt-2">
                {edition.country} {edition.year}
              </h3>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] font-bold text-white/85">
              {edition.dates && (
                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={15} className="text-archive-clay" /> {edition.dates}
                </span>
              )}
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-archive-clay" /> {edition.venue}
              </span>
              <span className="inline-flex items-center gap-2">
                <Users size={15} className="text-archive-clay" /> {edition.sessions.length}{" "}
                {edition.sessions.length === 1 ? "Topic" : "Topics"}
              </span>
            </div>
          </div>

          <div className="px-6 md:px-10">
            {edition.sessions.map((session, index) => (
              <SessionBlock key={session.title} session={session} index={index} />
            ))}
          </div>

          {edition.speakers && edition.speakers.length > 0 && (
            <div className="px-6 md:px-10 pb-10">
              <p className="text-[13px] font-black tracking-[0.2em] uppercase text-slate-500 mb-4">
                {edition.speakersTitle ?? "Speakers"}
              </p>
              <SpeakerGrid speakers={edition.speakers} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

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
            <span className="text-[14px] font-black tracking-[0.55em] text-archive-clay uppercase block mb-5">
              Interactive Business Forum 2027
            </span>
            <h1 className="text-4xl md:text-7xl font-semibold tracking-tighter leading-[0.9] text-white uppercase max-w-4xl">
              IBF Seminar Series
            </h1>
            <p className="mt-6 max-w-3xl text-white/85 text-lg md:text-xl font-semibold">
              23rd & 24th June 2027
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#home"
                className="inline-flex items-center gap-3 bg-archive-clay px-8 py-4 text-white text-[14px] font-black tracking-[0.25em] uppercase hover:bg-white hover:text-archive-charcoal transition-colors"
              >
                Register Now <ArrowRight size={16} />
              </a>
              <a
                href="#ibf-details"
                className="inline-flex items-center border border-white/30 px-8 py-4 text-white text-[14px] font-black tracking-[0.25em] uppercase hover:bg-white hover:text-archive-charcoal transition-colors"
              >
                Topics Covered
              </a>
              <a
                href="#contact"
                className="inline-flex items-center border border-white/30 px-8 py-4 text-white text-[14px] font-black tracking-[0.25em] uppercase hover:bg-white hover:text-archive-charcoal transition-colors"
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
            <span className="text-[14px] font-black tracking-[0.45em] text-archive-clay uppercase block mb-4">
              Interactive Business Forum
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none uppercase">
              Seminar Series
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-slate-700 text-base md:text-lg leading-relaxed">
            <h3 className="text-xl md:text-2xl font-black uppercase text-slate-900 tracking-tight">
              Knowledge Sessions at Intex South Asia & ASEAN
            </h3>
            <p>
              The textile and apparel industry is undergoing rapid transformation driven by shifting trade policies, sustainability mandates, technological disruption, and evolving consumer expectations. The Interactive Business Forum (IBF) has been established as the knowledge arm of Intex, delivering actionable insights, expert perspectives and strategic foresight to industry professionals attending the exhibition.
            </p>
            <p>
              Designed as a series of curated seminars and panel discussions, IBF brings together policymakers, global experts, industry leaders, technology innovators, and sustainability practitioners to address the most critical issues shaping the future of the textile and apparel sector. The sessions provide a platform for meaningful dialogue, knowledge exchange, and collaborative problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* YEAR-WISE TOPICS AND THEIR SPEAKERS */}
      <IbfYearWiseTopics />

      <section className="bg-archive-cream py-20 px-6 md:px-12 border-y border-slate-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <span className="text-[14px] font-black tracking-[0.45em] text-archive-clay uppercase block mb-4">Speakers</span>
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
                    <p className="text-[14px] text-slate-700 leading-relaxed">{testimonial.quote}</p>
                    <p className="mt-3 font-black text-[14px] text-slate-900">{testimonial.name}</p>
                    <p className="text-[14px] text-slate-500 font-bold">{testimonial.designation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-archive-cream">
        <div className="max-w-[1200px] mx-auto space-y-16">
          <GalleryBlock title="Glimpses of IBF Seminar Series Sri Lanka 2026" images={glimpseSl2026} />
          <GalleryBlock title="Glimpses of IBF Seminar Series Bangladesh 2026" images={glimpseBd2026} />
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
