import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Newspaper, ArrowRight, ChevronDown, ChevronUp, FileText, Database, ShieldCheck, Clock } from 'lucide-react';

interface PressRelease {
  id: string;
  type: 'PRESS RELEASE' | 'PRE-EVENT' | 'POST-EVENT';
  title: string;
  subtitle: string;
  location: string;
  date?: string;
  content: string[];
  expandedContent: string[];
  quote?: {
    text: string;
    author: string;
  };
}

const PRESS_DATA: Record<string, PressRelease[]> = {
  'Sri Lanka': [
    {
      id: 'PR_SL_26_01',
      type: 'PRESS RELEASE',
      title: 'Press Release',
      subtitle: 'Intex & InMac Sri Lanka 2026: Dual Powerhouses to Drive US$8 Billion Apparel Goal',
      location: 'Colombo, Sri Lanka',
      content: [
        "As Sri Lanka's apparel industry targets an ambitious US$8 billion in exports by 2030, the region's premier trade platforms return to accelerate this growth. Intex - The Premier International Textile Sourcing Show and the co-located InMac - Smart Technology & Innovation in Gar-Tex Machinery will be held from 5 to 7 August 2026 at the BMICH, Colombo, uniting global textile sourcing and garment technology under one roof.",
        "Hosting over 300 international companies from 15+ countries and regions, this largest-ever edition offers a comprehensive end-to-end platform to modernize Sri Lanka's supply chain. Intex Sri Lanka will showcase upstream innovations in fibers, yarns, fabrics, accessories, and sustainable materials, connecting local manufacturers with major buyers from South Asia, ASEAN, Europe, and the Middle East. Running parallel, InMac Sri Lanka tackles the industry's push for automation. Global machinery leaders will debut next-generation sewing, cutting, digital printing, and eco-friendly finishing systems designed to help factories transition into high-margin, intelligent manufacturing hubs."
      ],
      expandedContent: [
        "These international B2B exhibitions will also feature the Interactive Business Forum (IBF) Seminars, exploring Circularity, Sustainability and Digital transformation and Smart Manufacturing across 3 days alongside B2B Interactions & Meetings for domestic and overseas trade buyers.",
        "Event Details: Dates: 5-6-7 August 2026 (Wed to Fri). Venue: Halls 1 to 6, BMICH, Colombo-7. Organiser: Worldex India Exhibition & Promotion Pvt. Ltd. Endorsed by: SLEDB, IDB, JAAF and related industry associations of Sri Lanka. Intex Website: sl.intexsouthasia.com. InMac Website: www.inmacworldexpo.com."
      ],
      quote: {
        text: '"Our largest China Pavilion and strong Indian participation reflect deep global confidence in Sri Lanka," says Mrs. Arti Bhagat, Executive Director of Worldex India. "By integrating global raw materials with advanced machinery, Intex and InMac provide the definitive blueprint to power Sri Lanka\'s 2030 export vision."',
        author: '- Mrs. Arti Bhagat'
      }
    },
    {
      id: 'PR_SL_25_01',
      type: 'PRE-EVENT',
      title: 'Pre Event Press Release',
      subtitle: 'Intex Sri Lanka 2025 Set to Ignite the Textile & Apparel World - A Decade of Impact, Innovation & Industry Leadership',
      location: 'Colombo, Sri Lanka',
      content: [
        "The energy is rising, the industry is watching, and the countdown has officially begun. From 6-8 August 2025, Colombo will once again become the epicentre of South Asia's textile and apparel universe as Intex Sri Lanka returns with its most powerful edition yet. Celebrating a decade of innovation, trust, and transformation, the 17th edition of Intex Sri Lanka is more than an exhibition - it's a movement that has shaped the sourcing future of the region.",
        "Since its debut in 2015, Intex Sri Lanka has been a game-changer - bridging Sri Lanka's world-renowned manufacturing strength with global textile producers and technology leaders.",
        "Buyers will get access to curated collections across fibres, yarns, woven and knitted fabrics, sustainable textiles, trims, and accessories, with a strong emphasis on certified and traceable sourcing."
      ],
      expandedContent: [
        "A key vertical within the show, the 3rd edition of INMAC - Smart Technology and Innovation in Gar-tex Machinery - INMAC 2025 brings together next-gen gar-tex machinery from Germany, China, India, and Taiwan, each showcasing their manufacturing edge. From AI-powered inspection systems (Germany) and digital print/dyeing tech (China) to smart stitching solutions (India) and energy-efficient fabric finishers (Taiwan), the pavilion spotlights how intelligent upgrades are reshaping textile production for a smarter, greener future. As the official Sustainability Partner, Eurofins will bring global expertise in testing, compliance, and environmental certification to the show, helping manufacturers and brands implement sustainability with scientific integrity.",
        "The Interactive Business Forum (IBF), in association with Moratuwa University Textile Association (MUTA), one of the region's most respected seminar platforms, returns with a powerful line-up of trendsetters, policymakers, and business architects. From conversations on Apparel 2030, bio-based fibres, circularity, and smart clothing, to critical sessions on talent development and sourcing strategies in a volatile global economy, IBF 2025 promises insight that will move minds and markets.",
        "As Sri Lanka accelerates its momentum as an ethical and innovation-led sourcing destination, Intex & Inmac continues to play a vital role in connecting global demand with regional excellence. By strengthening linkages, supporting digitization, promoting sustainability, and building bridges between governments, businesses, and innovators, Intex Sri Lanka 2025 is not just an event - it's a catalyst for economic opportunity.",
        "The future of sourcing & tech is being written in Colombo this August. Will you be there?"
      ],
      quote: {
        text: "Intex Sri Lanka 2025 offers a unique opportunity for our apparel industry to connect with global suppliers, explore new innovations, and strengthen Sri Lanka's position as a leading sourcing destination.",
        author: '- Yohan Lawrence, Secretary General, JAAF'
      }
    },
    {
      id: 'PR_SL_25_02',
      type: 'POST-EVENT',
      title: 'Post Event Press Release',
      subtitle: 'Intex Sri Lanka 2025 Marks a Decade of Textile Excellence - Connecting Global Industry at the Heart of South Asia',
      location: 'BMICH, Colombo',
      content: [
        "The 10th edition of Intex Sri Lanka 2025 concluded on a resounding high, celebrating a decade of connecting global textile and apparel stakeholders. Held from 6th to 8th August 2025 at BMICH, Colombo, the event reaffirmed Sri Lanka's position as South Asia's textile sourcing hub.",
        "The show featured over 400 booths and 210 exhibitors from 15+ countries, including India, Sri Lanka, South Korea, Pakistan, Indonesia, China, Japan, and the UK, and drew 6,944 trade visitors and buyers from more than 25 countries across South Asia, ASEAN, MENA, and Europe."
      ],
      expandedContent: [
        "The grand opening ceremony was graced by Hon. Sunil Handunnetti, Minister of Industry & Entrepreneurship Development, and Hon. Chathuranga Abeysinghe, Deputy Minister, along with ambassadors from Korea and Indonesia, and senior representatives from India's High Commission and JAAF. With Eurofins as Sustainability Partner, Kasturi Cotton as Traceability Partner, and Super Dry and Oritain UK as Branding Partners, the show's focus on sustainability, innovation, and transparency took centre stage.",
        "Strategic B2B meetings proved highly successful, including the Kasturi Cotton Bharat (KCB) Programme by TEXPROCIL, fostering co-branding and sustainable fiber sourcing between India and Sri Lanka, and a special Indonesia-Sri Lanka networking session organised by the Embassy of Indonesia, enhancing regional collaboration and trade.",
        "The Interactive Business Forum (IBF) continued its legacy as a knowledge powerhouse, bringing together global experts from India, Sri Lanka, USA, and UK. Discussions on Apparel 2030: Re-Stitching Fashion's Future and Trust Over Trends: Building Brands Consumers Trust explored sustainability, traceability, and brand transparency, with insights from industry leaders like SUPIMA, Eurofins, and Brandix.",
        "Co-located with Intex, InMac - Smart Technology & Innovation in Gar-Tex Machinery showcased nextgen digital, AI, and sustainable manufacturing technologies from across the world. With 98% exhibitor satisfaction, InMac 2025 established itself as a growing platform for smarter, greener garment production. The Fashion Fiesta 2025 Networking Reception at ITC Ratnadipa added a celebratory touch, honouring industry partners and associations that have supported Intex since its inception in 2015. The evening embodied Intex's spirit of creativity, collaboration, and community.",
        "With remarkable participation, influential buyers such as PVH India (Tommy Hilfiger & CK), Victoria's Secret, Matalan, and Cotton Egypt Association, and meaningful partnerships forged on the show floor, Intex Sri Lanka 2025 reaffirmed its stature as South Asia's most impactful textile and apparel sourcing platform. The journey continues with Intex Sri Lanka 2026, scheduled for 5th-7th August 2026 at BMICH, Colombo."
      ]
    }
  ],
  'Bangladesh': [
    {
      id: 'PR_BD_26_01',
      type: 'PRE-EVENT',
      title: 'Pre Event Press Release',
      subtitle: 'The World of Textile Sourcing Comes to Dhaka: Intex Bangladesh 2026 Opens New Global Opportunities',
      location: 'Dhaka, Bangladesh',
      date: 'June 11, 2026',
      content: [
        "Bangladesh's standing as the world's second-largest apparel exporter is set to be further reinforced as the industry gears up for Intex Bangladesh 2026, one of South Asia's most significant textile sourcing show. Scheduled for 18-19-20 June 2026 at ICCB, Purbachal Express Highway, Dhaka, the exhibition will bring together the global textile value chain under one roof, opening new doors for sourcing, investment, and cross-border partnerships.",
        "Recognised as South Asia's premier international B2B textile sourcing platform, Intex Bangladesh 2026 will draw manufacturers and suppliers from over 12 countries and regions including India, China, Taiwan, Japan, Bangladesh, Germany, the UK, the Netherlands, Thailand, Pakistan, Hong Kong, and Uzbekistan. Exhibitors will present a broad spectrum of products spanning natural and man-made fibres, yarns, fabrics, trims, accessories, dyes, chemicals, compliance services, and sustainable supply chain innovations."
      ],
      expandedContent: [
        "With global brands rapidly diversifying beyond cotton, demand for MMF fabrics, performance textiles, recycled fibres, and traceable supply chains is accelerating. This edition directly responds to that shift, with dedicated showcases from leading textile-producing nations offering Bangladeshi manufacturers access to next-generation materials and innovative solutions.",
        "Among the key highlights, the Incredible Textiles of India Pavilion backed by leading Export Promotion Councils such as TEXPPROCIL, MATEXIL and PDEXCIL will feature over 75 Indian companies, while the China Fashion Textiles Pavilion will showcase more than 70 companies from across leading Chinese provinces, presenting innovations in MMF, sustainable materials, garment accessories, and advanced fabrics for the RMG industry. Textile and Apparel Buyers from over 20 countries including the USA, Canada, UK, France, Japan, Argentina, India, Brazil, and the UAE are looking forward to be a part of Intex Bangladesh 2026.",
        "The exhibition will also feature the Interactive Business Forum (IBF) Seminar Series in association with Fashion Business Journal, hosting industry leaders to address sustainability, supply chain resilience, traceability, and emerging market trends. Complementing this, the B2B Connect One-to-One Matchmaking programme will facilitate targeted meetings between buyers and suppliers to forge long-term commercial relationships. TextileGenesis joins as Official Traceability Partner, elevating conversations around digital supply chain visibility and responsible sourcing.",
        "Intex Bangladesh continues to serve as an important platform connecting global textile suppliers with Bangladesh's dynamic apparel industry. Such initiatives help strengthen sourcing capabilities, encourage innovation, and create valuable opportunities for collaboration across the textile value chain. - Mohammad Hatem, President, BKMEA",
        "As Bangladesh continues to strengthen its position as a global apparel sourcing destination, platforms like Intex Bangladesh play a vital role in connecting international suppliers, buyers, and manufacturers. BGBA is proud to support this initiative and wishes Intex Bangladesh 2026 every success. - Md. Abdul Hamid, President, BGBA",
        "Having facilitated thousands of business meetings across Bangladesh, Sri Lanka, and India, Intex has consistently strengthened intra-regional trade across South Asia. With its international scope, forward-looking agenda, and robust networking platform, Intex Bangladesh 2026 is poised to be the definitive meeting point for Bangladesh's apparel industry and the global textile supply chain."
      ],
    },
    {
      id: 'PR_BD_26_02',
      type: 'PRE-EVENT',
      title: 'সংবাদ বিজ্ঞপ্তি',
      subtitle: 'টেক্সটাইল সোর্সিংয়ের বিশ্ব আসছে ঢাকায়: ইন্টেক্স বাংলাদেশ ২০২৬ উন্মুক্ত করছে নতুন বৈশ্বিক সুযোগ',
      location: 'ঢাকা, বাংলাদেশ',
      date: '১১ জুন, ২০২৬',
      content: [
        "বিশ্বের দ্বিতীয় বৃহত্তম পোশাক রপ্তানিকারক দেশ হিসেবে বাংলাদেশের অবস্থান আরও সুদৃঢ় করতে শিল্পখাত প্রস্তুতি নিচ্ছে দক্ষিণ এশিয়ার অন্যতম গুরুত্বপূর্ণ টেক্সটাইল সোর্সিং আয়োজনের জন্য। ইন্টেক্স বাংলাদেশ ২০২৬ আগামী ১৮-১৯-২০ জুন ২০২৬, আইসিসিবি, পূর্বাচল এক্সপ্রেস হাইওয়ে, ঢাকাতে অনুষ্ঠিত হবে। এই প্রদর্শনী বৈশ্বিক টেক্সটাইল ভ্যালু চেইনকে এক ছাদের নিচে একত্রিত করবে এবং সোর্সিং, বিনিয়োগ ও আন্তর্জাতিক অংশীদারিত্বের নতুন দ্বার উন্মোচন করবে।",
        "দক্ষিণ এশিয়ার শীর্ষস্থানীয় আন্তর্জাতিক বি-টু-বি টেক্সটাইল সোর্সিং প্ল্যাটফর্ম হিসেবে স্বীকৃত ইন্টেক্স বাংলাদেশ ২০২৬-এ ভারত, চীন, তাইওয়ান, জাপান, বাংলাদেশ, জার্মানি, যুক্তরাজ্য, নেদারল্যান্ডস, থাইল্যান্ড, পাকিস্তান, হংকং ও উজবেকিস্তানসহ ১২টিরও বেশি দেশ ও অঞ্চলের নির্মাতা এবং সরবরাহকারীরা অংশ নেবেন। প্রাকৃতিক ও কৃত্রিম তন্তু, সুতা, কাপড়, ট্রিমস, এক্সেসরিজ, রং, রাসায়নিক পদার্থ, কমপ্লায়েন্স সেবা এবং টেকসই সাপ্লাই চেইন উদ্ভাবনের বিস্তৃত পরিসর এখানে প্রদর্শিত হবে।"
      ],
      expandedContent: [
        "বৈশ্বিক ব্র্যান্ডগুলো দ্রুতগতিতে তুলার বাইরে বিকল্প উপকরণের দিকে ঝুঁকছে - ফলে ম্যান-মেড ফাইবার (এমএমএফ), পারফরম্যান্স টেক্সটাইল, পুনর্ব্যবহারযোগ্য তন্তু এবং ট্রেসযোগ্য সাপ্লাই চেইনের চাহিদা ক্রমশ বাড়ছে। এই সংস্করণ সরাসরি সেই পরিবর্তনের সাড়া দেবে - শীর্ষ টেক্সটাইল উৎপাদনকারী দেশগুলোর বিশেষ প্যাভিলিয়নের মাধ্যমে বাংলাদেশি নির্মাতাদের সামনে পরবর্তী প্রজন্মের উপকরণ ও উদ্ভাবনী সমাধান তুলে ধরা হবে।",
        "প্রধান আকর্ষণের মধ্যে রয়েছে ইনক্রেডিবল টেক্সটাইলস অব ইন্ডিয়া প্যাভিলিয়ন - টেক্সপ্রোসিল, ম্যাটেক্সিল ও পিডেক্সিলসহ শীর্ষস্থানীয় রপ্তানি উন্নয়ন পরিষদের সহায়তায় - ৭৫টিরও বেশি ভারতীয় প্রতিষ্ঠান নিয়ে অংশ নেবে। পাশাপাশি চায়না ফ্যাশন টেক্সটাইলস প্যাভিলিয়নে চীনের শীর্ষ প্রদেশগুলো থেকে ৭০টিরও বেশি প্রতিষ্ঠান আরএমজি শিল্পের জন্য এমএমএফ, টেকসই উপকরণ, পোশাক এক্সেসরিজ এবং উন্নত ফেব্রিক প্রযুক্তির উদ্ভাবন উপস্থাপন করবে। যুক্তরাষ্ট্র, কানাডা, যুক্তরাজ্য, ফ্রান্স, জাপান, আর্জেন্টিনা, ভারত, ব্রাজিল ও সংযুক্ত আরব আমিরাতসহ ২০টিরও বেশি দেশের টেক্সটাইল ও পোশাক ক্রেতারা ইন্টেক্স বাংলাদেশ ২০২৬-এ অংশ নিতে আগ্রহী।",
        "প্রদর্শনীতে আরও থাকবে ইন্টারেক্টিভ বিজনেস ফোরাম (আইবিএফ) সেমিনার সিরিজ - ফ্যাশন বিজনেস জার্নালের সহযোগিতায় - যেখানে শিল্প নেতারা টেকসইতা, সাপ্লাই চেইন স্থিতিশীলতা, ট্রেসেবিলিটি ও উদীয়মান বাজারের প্রবণতা নিয়ে আলোচনা করবেন। এর পাশাপাশি বি-টু-বি কানেক্ট ওয়ান-টু-ওয়ান ম্যাচমেকিং প্রোগ্রামের মাধ্যমে ক্রেতা ও সরবরাহকারীদের মধ্যে লক্ষ্যভিত্তিক বৈঠকের সুযোগ তৈরি হবে, যা দীর্ঘমেয়াদী বাণিজ্যিক সম্পর্ক গড়ে তুলতে সহায়তা করবে। অফিশিয়াল ট্রেসেবিলিটি পার্টনার হিসেবে টেক্সটাইলজেনেসিস ডিজিটাল সাপ্লাই চেইন স্বচ্ছতা ও দায়িত্বশীল সোর্সিংয়ের আলোচনাকে আরও এগিয়ে নিয়ে যাবে।",
        "ইন্টেক্স বাংলাদেশ বৈশ্বিক টেক্সটাইল সরবরাহকারীদের সাথে বাংলাদেশের গতিশীল পোশাক শিল্পকে সংযুক্ত করার একটি গুরুত্বপূর্ণ প্ল্যাটফর্ম হিসেবে কাজ করে চলেছে। এ ধরনের উদ্যোগ সোর্সিং সক্ষমতা বৃদ্ধি, উদ্ভাবনকে উৎসাহিত এবং টেক্সটাইল ভ্যালু চেইন জুড়ে মূল্যবান সহযোগিতার সুযোগ তৈরিতে সহায়তা করে। - মোহাম্মদ হাতেম, সভাপতি, বিকেএমইএ",
        "বাংলাদেশ যখন বৈশ্বিক পোশাক সোর্সিং গন্তব্য হিসেবে তার অবস্থান আরও শক্তিশালী করছে, তখন ইন্টেক্স বাংলাদেশের মতো প্ল্যাটফর্মগুলো আন্তর্জাতিক সরবরাহকারী, ক্রেতা ও নির্মাতাদের সংযুক্ত করতে গুরুত্বপূর্ণ ভূমিকা পালন করছে। বিজিবিএ এই উদ্যোগকে সমর্থন জানাতে পেরে গর্বিত এবং ইন্টেক্স বাংলাদেশ ২০২৬-এর সার্বিক সাফল্য কামনা করে। - মো. আব্দুল হামিদ, সভাপতি, বিজিবিএ",
        "বাংলাদেশ, শ্রীলঙ্কা ও ভারতে হাজার হাজার ব্যবসায়িক বৈঠক সহজতর করার ইতিহাস নিয়ে ইন্টেক্স ধারাবাহিকভাবে দক্ষিণ এশিয়াজুড়ে আঞ্চলিক বাণিজ্য ও সাপ্লাই চেইন একীকরণকে শক্তিশালী করে আসছে। আন্তর্জাতিক পরিসর, ভবিষ্যৎমুখী কর্মসূচি এবং শক্তিশালী নেটওয়ার্কিং সুযোগ নিয়ে ইন্টেক্স বাংলাদেশ ২০২৬ বাংলাদেশের পোশাক শিল্প ও বৈশ্বিক টেক্সটাইল সাপ্লাই চেইনের নির্ধারিত মিলনস্থল হয়ে উঠতে প্রস্তুত।"
      ]
    },
    {
      id: 'PR_BD_26_03',
      type: 'PRE-EVENT',
      title: 'Pre Event Press Release',
      subtitle: 'Intex Bangladesh 2026 to showcase global textile sourcing solutions in Dhaka',
      location: 'Dhaka, Bangladesh',
      date: 'May 07, 2026',
      content: [
        "Intex Bangladesh 2026, the Bangladesh edition of the Intex South Asia textile sourcing series, is set to return to Dhaka with wider international participation and a stronger focus on sustainable and innovative sourcing solutions. The exhibition will be held on 18-19-20 June 2026, at the International Convention City Bashundhara (ICCB). The Intex South Asia series has completed 17 editions across Bangladesh, Sri Lanka, and India over the past 11 years.",
        "The event aims to connect global textile suppliers with Bangladesh's apparel and textile manufacturers, supporting the country's growing role in global apparel production. This year's edition is expected to attract exhibitors and industry stakeholders from countries including India, China, Thailand, Hong Kong, Taiwan, Uzbekistan, the United Kingdom, Germany, South Korea, Indonesia, and Pakistan."
      ],
      expandedContent: [
        "A major highlight of the exhibition will be the participation of more than 100 Indian companies, supported by leading textile export promotion councils such as The Cotton Textiles Export Promotion Council (TEXPROCIL), Powerloom Development & Export Promotion Council (PDEXCIL), Manmade & Technical Textiles Export Promotion Council (MATEXIL), and Federation of Indian Export Organisations (FIEO). The exhibitors will showcase fibres, yarns, fabrics, and value-added textile products.",
        "The event will also introduce 'InDyChem,' a dedicated pavilion for dyes, chemicals, and finishing solutions, organised in collaboration with the Basic Chemicals, Cosmetics & Dyes Export Promotion Council (CHEMEXCIL). The pavilion will focus on sustainable and high-performance chemical innovations to improve efficiency and support responsible manufacturing practices.",
        "The Intex South Asia Show, Dhaka, organized by Worldex India, marks another important milestone in regional textile collaboration. TEXPROCIL has enjoyed a long-standing association with Worldex India for over a decade, consistently leading large delegations at Intex exhibitions across Bangladesh and Sri Lanka, with strong support from their team. - Dr Siddhartha Rajagopal, Executive Director of Texprocil",
        "Bangladesh continues to stand at the forefront of global apparel manufacturing, and Intex has been proud to contribute to this growth journey by enabling meaningful sourcing connections and industry collaboration. - Mrs Arti Bhagat, Executive Director of Worldex India",
        "Besides the exhibition, the three-day event will feature business-to-business matchmaking sessions, interactive business forums, and participation from overseas delegations to encourage networking and commercial partnerships. The venue will be divided into four halls featuring international textile pavilions, India's textile council pavilions, the China pavilion, and premium fibres and yarns.",
        "Intex Bangladesh 2026 is being supported by several industry associations and business chambers, including the Bangladesh Knitwear Manufacturers and Exporters Association (BKMEA), Bangladesh-German Chamber of Commerce & Industry (BGCCI), U.S.-Bangladesh Chamber of Commerce & Industry (USBCCI), Confederation of Indian Textile Industry (CITI), and Tirupur Exporters' Association (TEA), among others."
      ]
    },
    {
      id: 'PR_BD_26_04',
      type: 'PRE-EVENT',
      title: 'সংবাদ বিজ্ঞপ্তি',
      subtitle: 'ঢাকায় টেক্সটাইল সোর্সিং সমাধান নিয়ে অনুষ্ঠিত হবে ইনটেক্স বাংলাদেশ ২০২৬',
      location: 'ঢাকা, বাংলাদেশ',
      date: '৯ মে ২০২৬',
      content: [
        "ঢাকায় আবারও অনুষ্ঠিত হতে যাচ্ছে ‘ইনটেক্স সাউথ এশিয়ার’ টেক্সটাইল সোর্সিং সিরিজের বাংলাদেশ সংস্করণ ‘ইনটেক্স বাংলাদেশ ২০২৬। আয়োজনে অংশগ্রহণ করবেন বৈশ্বিক বিভিন্ন প্রতিষ্ঠানের প্রতিনিধিগণ এবং গুরুত্বারোপ করা হবে টেকসই ও উদ্ভাবনী সোর্সিং সমাধানের ওপর। আগামী ১৮ থেকে ২০ জুন ইন্টারন্যাশনাল কনভেনশন সিটি বসুন্ধরায় (আইসিসিবি) প্রদর্শনী অনুষ্ঠিত হবে। উল্লেখ্য, গত ১১ বছরে বাংলাদেশ, শ্রীলঙ্কা ও ভারতে ইনটেক্স সাউথ এশিয়া সিরিজের ১৭টি প্রদর্শনী অনুষ্ঠিত হয়েছে।",
        "এবারের প্রদর্শনী বৈশ্বিক টেক্সটাইল সরবরাহকারী প্রতিষ্ঠানগুলোর সাথে বাংলাদেশের পোশাক ও টেক্সটাইল প্রস্তুতকারকদের  মধ্যে যোগাযোগ তৈরিতে গুরুত্বপূর্ণ ভূমিকা রাখবে বলে প্রত্যাশা করা হচ্ছে। একইসাথে, এ আয়োজন বৈশ্বিক পোশাক উৎপাদনে বাংলাদেশের অবস্থানকে আরও শক্তিশালী করতে সহায়তা করবে। এবারের প্রদর্শনীতে ভারত, চীন, থাইল্যান্ড, হংকং, তাইওয়ান, উজবেকিস্তান, যুক্তরাজ্য, জার্মানি, দক্ষিণ কোরিয়া, ইন্দোনেশিয়া ও পাকিস্তানসহ বিভিন্ন দেশের সংশ্লিষ্ট খাতের অগ্রণী প্রতিষ্ঠান ও খাতসংশ্লিষ্ট প্রতিনিধিরা অংশগ্রহণ করবেন।"
      ],
      expandedContent: [
        "ভারতের শীর্ষ টেক্সটাইল রপ্তানি উন্নয়ন সংস্থা দ্য কটন টেক্সটাইলস এক্সপোর্ট প্রোমোশন কাউন্সিল (টেক্সপ্রসিল), পাওয়ারলুম ডেভেলপমেন্ট অ্যান্ড এক্সপোর্ট প্রোমোশন কাউন্সিল (পেডেক্সিল), ম্যানমেড অ্যান্ড টেকনিক্যাল টেক্সটাইলস এক্সপোর্ট প্রোমোশন কাউন্সিল (ম্যাটেক্সিল) এবং ফেডারেশন অব ইন্ডিয়ান এক্সপোর্ট অর্গানাইজেশনসের (এফআইইও) সহায়তায় প্রদর্শনীতে অংশ নিবে ভারতের শতাধিক প্রতিষ্ঠান। অংশগ্রহণকারী প্রতিষ্ঠানগুলো ফাইবার, সুতা, কাপড় ও মূল্য সংযোজিত টেক্সটাইল পণ্য প্রদর্শন করবে।",
        "বেসিক কেমিক্যালস ও কসমেটিকস অ্যান্ড ডাইজ এক্সপোর্ট প্রোমোশন কাউন্সিলের (কেমেক্সসিল) সহযোগিতায় এবারের আয়োজনে ‘ইনডাইকেম’ নামে ডাই, কেমিক্যাল ও ফিনিশিং সল্যুশনের জন্য বিশেষ প্যাভিলিয়নও থাকছে। এ প্যাভিলিয়নে দক্ষতা বৃদ্ধি ও দায়িত্বশীল উৎপাদন ব্যবস্থাকে সহায়তা করতে টেকসই ও উচ্চক্ষমতাসম্পন্ন রাসায়নিক উদ্ভাবন সবার সামনে তুলে ধরা হবে।",
        "ওয়ার্ল্ডেক্স ইন্ডিয়া আয়োজিত ঢাকায় অনুষ্ঠাতব্য ইনটেক্স সাউথ এশিয়া শো আঞ্চলিক টেক্সটাইলের ক্ষেত্রে অংশীদারিত্বের আরেকটি গুরুত্বপূর্ণ মাইলফলক। এক দশকেরও বেশি সময় ধরে টেক্সপ্রসিল ও ওয়ার্ল্ডেক্স ইন্ডিয়ার মধ্যে ঘনিষ্ঠ সম্পর্ক রয়েছে। বাংলাদেশ ও শ্রীলঙ্কায় আয়োজিত ইনটেক্স প্রদর্শনীতে আমরা নিয়মিত বড় প্রতিনিধিদল নিয়ে অংশগ্রহণ করেছি। - টেক্সপ্রসিলের নির্বাহী পরিচালক ড. সিদ্ধার্থ রাজাগোপাল বলেন",
        "বিশ্বের পোশাক উৎপাদন খাতে বাংলাদেশ এখন অন্যতম শীর্ষ অবস্থানে রয়েছে। সোর্সিং এর ক্ষেত্রে যোগাযোগ এবং শিল্পখাতে সহযোগিতা বাড়ানোর মাধ্যমে এই অগ্রযাত্রায় অবদান রাখতে পেরে ইনটেক্স গর্বিত। - ওয়ার্ল্ডেক্স ইন্ডিয়ার নির্বাহী পরিচালক আরতি ভগত বলেন",
        "তিন দিনের এ আয়োজনে প্রদর্শনীর পাশাপাশি বিজনেস-টু-বিজনেস ম্যাচমেকিং সেশন, ইন্টারঅ্যাকটিভ বিজনেস ফোরাম এবং বিদেশি প্রতিনিধিদলের অংশগ্রহণ থাকবে। বাণিজ্যিক অংশীদারিত্ব ও নেটওয়ার্কিং জোরদার করতেই এসব আয়োজন করা হচ্ছে। আয়োজনের পুরো ভেন্যু চারটি হলে ভাগ করা হবে। সেখানে আন্তর্জাতিক টেক্সটাইল প্যাভিলিয়ন, ভারতের টেক্সটাইল কাউন্সিল প্যাভিলিয়ন, চায়না প্যাভিলিয়ন এবং প্রিমিয়াম ফাইবার ও সুতা প্রদর্শিত হবে।",
        "বাংলাদেশ নিটওয়্যার ম্যানুফ্যাকচারার্স অ্যান্ড এক্সপোর্টার্স অ্যাসোসিয়েশন (বিকেএমইএ), বাংলাদেশ-জার্মান চেম্বার অব কমার্স অ্যান্ড ইন্ডাস্ট্রি (বিজিসিসিআই), ইউএস-বাংলাদেশ চেম্বার অব কমার্স অ্যান্ড ইন্ডাস্ট্রি (ইউএসবিসিসিআই), কনফেডারেশন অব ইন্ডিয়ান টেক্সটাইল ইন্ডাস্ট্রি (সিআইটিআই) এবং তিরুপুর এক্সপোর্টার্স অ্যাসোসিয়েশনসহ (টিইএ) বিভিন্ন শিল্পসংগঠন ও ব্যবসায়িক চেম্বারও এ আয়োজনে সহযোগিতা প্রদান করছে।"
      ]
    },
    {
      id: 'PR_BD_25_01',
      type: 'PRE-EVENT',
      title: 'Pre Event Press Release',
      subtitle: 'Intex Bangladesh 2025 to Strengthen Industry Partnerships and Expand Global Sourcing Access',
      location: 'Dhaka, Bangladesh',
      date: '16 June, 2025',
      content: [
        "As the garments sector of Bangladesh continues to move towards higher value products and more global integration, Intex Bangladesh returns to Dhaka this June with its renewed purpose and strong international backing. The three-day exhibition, scheduled for 25-27 June 2025 at the International Convention City Bashundhara (ICCB), is likely to feature Bangladesh's growing role and leadership in the global textile and apparel trade arena.",
        "Organized by Worldex India Exhibition & Promotion Pvt. Ltd., Intex is poised to stage a comeback in the form of the 16th edition as South Asia's most prestigious international textile sourcing fair with its foundation deeply rooted in Bangladesh. Over the last few years, the fair has played an instrumental role in driving the region's textile and apparel sector - serving as a meeting point of hundreds of exhibitors and thousands of genuine trade buyers. By facilitating high-value business deals, Intex continues to play a significant part in Bangladesh's export growth and industrialization."
      ],
      expandedContent: [
        "With Bangladesh now recognised as the world's second-largest apparel exporter, the focus has steadily shifted from volume to value - emphasising sustainability, functionality, and product excellence. Intex Bangladesh 2025 is aligned with this transition, bringing together high-quality suppliers, manufacturers, and innovators from Asia and beyond who are ready to meet the evolving needs of Bangladesh's RMG sector. The show will host a diverse product portfolio from global sourcing hubs. Exhibitors from India will present cotton and blended fabrics, yarns, functional textiles, embroidery, laces, jacquards, digital prints, and sustainable fibres. From China, trade visitors and buyers can expect synthetic and technical fabrics, warp knits and embroidery fabrics, outerwear textiles, trims, and fashion accessories. South Korea will contribute seam tape, adhesive film and deco film for the garment industry. From Thailand and Japan, companies will showcase premium shirting and suiting fabrics, circular knits, innovative collagen 100% biodegradable fabrics and woven innovations. And most importantly, Bangladeshi companies will showcase performance fabrics, high quality yarns, chemicals, certifications & compliance solutions and marketplace.",
        "Intex Bangladesh 2025 positions itself as a strategic platform where sourcing meets strategy. It is tailored for professionals across design, merchandising, product development, and supply chain management, offering access to curated business interactions and market intelligence via Interactive Business Forum to be held alongside the exhibition. This edition will further support the country's move up the value chain with a focus on fashion-forward, eco-conscious, and innovation-led materials and practices.",
        "Endorsed by some of the most influential industry and bilateral organisations, the 2025 edition enjoys the support of the Bangladesh Garment Manufacturers & Exporters Association (BGMEA), Bangladesh Knitwear Manufacturers & Exporters Association (BKMEA), Bangladesh-German Chamber of Commerce & Industry (BGCCI), US-Bangladesh Chamber of Commerce & Industry (USBCCI), Latin America Bangladesh Chamber of Commerce & Industry (LABCCI), Korea-Bangladesh Chamber of Commerce & Industry (KBCCI), India-Bangladesh Chamber of Commerce & Industry (IBCCI), and EuroCham Bangladesh, among others. These partnerships reinforce Intex's role as a bridge between Bangladesh and the global textile economy, cultivating long-term sourcing relationships and collaborative growth.",
        "At the core of Intex's growing impact is a vision that supports Bangladesh's rise not merely as a supplier but as a strategic manufacturing and innovation partner. Our focus with Intex Bangladesh is to empower the industry with access to high-quality suppliers, diverse product innovations, and long-term collaborations. This platform has grown into a trusted space where Bangladesh can confidently engage with the global market, not just as a supplier - but as a strategic partner, said Ms. Arti Bhagat, Executive Director of Worldex India.",
        "As Bangladesh continues to elevate its export capabilities and adopt forward-looking sourcing practices, Intex Bangladesh 2025 offers the right environment to unlock new opportunities, foster regional and global partnerships, and support the country's ambitions in the global apparel industry."
      ]
    },
    {
      id: 'PR_BD_25_02',
      type: 'POST-EVENT',
      title: 'Post Event Press Release',
      subtitle: '16th Intex: A Resounding Success for the Textile & Apparel Industry of Bangladesh',
      location: 'ICCB, Dhaka',
      content: [
        "The 16th edition of Intex was held from 25 to 27 June 2025 at the International Convention City Bashundhara (ICCB), Dhaka, Bangladesh concluded on a high note, marking yet another successful chapter in South Asia's premier international textile sourcing platform.",
        "The Grand Opening Ceremony on 25th June welcomed esteemed dignitaries, trade associations, bilateral chambers, and international exhibitors in a celebration of Bangladesh's dynamic and evolving textile and apparel sector. The event began with a welcome speech by Ms. Arti Bhagat, Executive Director, Worldex India. The ceremony was inaugurated by Mr. Mahbubur Rahman, Secretary, Ministry of Commerce, as Chief Guest, along with Mr. Md. Anwar Hossain, Vice-Chairman, EPB, as Guest of Honour. Also addressing the gathering were Mr. Amal Poddar, Sr. Vice President, BKMEA; Mr. Faisal Samad, Sr. Vice President, BGMEA; Mr. A.K.M. Saifur Rahman, Vice President, BGBA; and Mr. Murali Balkrishna, Joint Director, TEXPROCIL. The inauguration was also attended by the presidents of key bilateral bodies - LABCCI, KBCCI, BGCCI, and USBCCI, and concluded with felicitation, group photography, ribbon cutting, a VIP tour of the exhibition, and closing remarks by Mr. Rajesh Bhagat, Chairman & MD, Worldex India."
      ],
      expandedContent: [
        "This year's exhibition brought together exhibitors from 10+ countries, including India, China, South Korea, Thailand, Japan, Germany and Bangladesh, showcasing a rich array of textile innovations - from sustainable yarns, performance fabrics, trims and accessories, to denim, knits and digital prints. The strong participation from Bangladesh-based companies further underscored the country's growing confidence as a global sourcing hub. Intex Bangladesh 2025 attracted 6,890 trade buyers and visitors, with delegations and sourcing representatives from 22+ countries, such as Canada, France, Germany, India, Indonesia, Italy, Japan, Korea, China, Bahrain, Malaysia, Mexico, Netherlands, Poland, Saudi Arabia, Spain, Sri Lanka, Sweden, Turkey, the UK, the UAE, the USA, and Uzbekistan. The show facilitated hundreds of highlevel meetings and curated buyer-seller interactions, helping create long-term, strategic sourcing partnerships across borders.",
        "Intex Bangladesh plays a pivotal role in advancing the country's leading export sector - textiles and garments - by bringing together global buyers, suppliers, and raw material providers under one roof. With its consistent commitment across 16 successful editions, the show has become an invaluable platform supporting export diversification and enhancing Bangladesh's presence in the global marketplace. Initiatives like Intex are essential in deepening and expanding our nation's export potential. - Mr. Mahbubur Rahman, Secretary, Ministry of Commerce, Government of Bangladesh",
        "The knowledge-sharing platform of the show - the Interactive Business Forum (IBF) - hosted two impactful sessions. On Day 1 (26th June), the panel on AI & Adaptability of Technology: Reinventing the Fabric of Tomorrow explored how AI is transforming the textile value chain - from design and prototyping to demand forecasting, sustainability, and smart manufacturing. The panel featured Mr. Minhazul Hoque (BKMEA), Mr. Abrar Hossain Sayem (BAYLA), Mr. Ahsan Mahmood (Nordic Sourcing), Ms. Aurelie Rob (Otto International), and Mr. Md. Mahbubur Rahman (R&G 3rd Eye), moderated by Mr. Mohammad Monower Hossain (TEAM Group). The session emphasized industry-wide collaboration for AI adoption, resilience, and traceability.",
        "On Day 2 (27th June), the session Tariffs & Industry Outlook: Unlocking the Risks & Opportunities addressed rising tariff challenges, shifting trade dynamics, and strategic responses for Bangladesh's RMG sector. The panel included Mr. Mohammed Sohel (BGMEA), Mr. AKM Saifur Rahman Farhad (BGBA), Mr. Mohammad Sohel Sadat (Shin Shin Group), Mr. Md Jasim Uddin (Texture BD / BAYLA), and Mr. Masud Kabir (Motex Fashion), moderated by Mr. Azam Saiful (TJS Consultants). The discussion stressed the need for export diversification, policy alignment, and smarter strategies to maintain global competitiveness.",
        "Throughout the three-day event, Intex Bangladesh emerged not only as a sourcing platform but as a strategic enabler of industry transformation. From connecting global suppliers with local manufacturers to fostering dialogue on AI, sustainability, and trade dynamics, the show served as a vital bridge between vision and action.",
        "As the curtains fall on yet another powerful edition of Intex in Bangladesh, we extend our heartfelt thanks to all the dignitaries, partners, chambers, exhibitors, buyers, media, and participants who made this event a resounding success. Intex Bangladesh continues to fuel the region's textile growth story, and we look forward to welcoming the industry back in June 2026 with even more innovation, collaboration, and global ambition."
      ]
    }
  ]
};

const getBadgeClass = (type: PressRelease['type']) => (
  type === 'PRE-EVENT' ? 'bg-archive-clay text-white' : 'bg-archive-charcoal text-white'
);

const PressReleasePage: React.FC = () => {
  const [activeShow, setActiveShow] = useState('Sri Lanka');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    const next = new Set(expandedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setExpandedIds(next);
  };

  const shows = Object.keys(PRESS_DATA);

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.85] text-archive-charcoal uppercase">
              PRESS <br className="hidden lg:inline" />
              <span className="text-white">RELEASES.</span>
            </h1>
          </div>

          {/* Show Tabs Selector */}
          <div className="flex border border-archive-charcoal/10 bg-white p-2 shrink-0">
            {shows.map((show) => (
              <button
                key={show}
                onClick={() => { setActiveShow(show); setExpandedIds(new Set()); }}
                className={`px-8 py-4 text-[14px] font-black tracking-widest transition-all uppercase ${activeShow === show ? 'bg-archive-charcoal text-white' : 'text-archive-charcoal/40 hover:text-archive-charcoal'}`}
              >
                {show === 'Sri Lanka' ? 'SRI LANKA' : 'BANGLADESH'}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeShow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-px bg-archive-charcoal/10 border border-archive-charcoal/10"
          >
            {PRESS_DATA[activeShow].map((pr, idx) => (
              <div key={pr.id} className="bg-white p-12 md:p-24 relative group overflow-hidden">
                <div className="absolute top-1/2 right-12 -translate-y-1/2 text-[12rem] font-black text-archive-charcoal/[0.02] pointer-events-none select-none">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                <div className="max-w-4xl relative z-10 space-y-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className={`px-4 py-1 text-[14px] font-black tracking-widest ${getBadgeClass(pr.type)}`}>
                        {pr.type}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <p className="text-[14px] font-black tracking-[0.35em] text-archive-clay uppercase">{pr.title}</p>
                      {pr.date && (
                        <p className="text-[14px] font-black tracking-widest text-archive-charcoal/50">Date: {pr.date}</p>
                      )}
                      <h2 className="text-[14px] md:text-base font-black tracking-tighter leading-[0.95] text-archive-charcoal">
                        {pr.subtitle.toUpperCase()}
                      </h2>
                      <div className="flex items-center gap-2 text-[14px] font-bold text-archive-clay tracking-widest">
                        <MapPinIcon size={12} />
                        {pr.location.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none space-y-6">
                    {pr.content.map((p, i) => (
                      <p key={i} className="text-[14px] font-medium leading-relaxed text-archive-charcoal/80 tracking-widest">
                        {p}
                      </p>
                    ))}

                    <AnimatePresence>
                      {expandedIds.has(pr.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden space-y-6"
                        >
                          {pr.quote && (
                            <blockquote className="my-8 border-l-4 border-archive-clay pl-8 text-archive-charcoal bg-archive-cream/30 py-8 p-8 space-y-4">
                              <p className="text-xl md:text-2xl font-black tracking-tight leading-tight">
                                {pr.quote.text}
                              </p>
                              <footer className="text-[14px] font-black tracking-widest text-archive-clay text-right">
                                {pr.quote.author}
                              </footer>
                            </blockquote>
                          )}
                          {pr.expandedContent.map((p, i) => (
                            <p key={i} className="text-[14px] font-medium leading-relaxed text-archive-charcoal/80 tracking-widest">
                              {p}
                            </p>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="pt-8 border-t border-archive-charcoal/5">
                    <button
                      onClick={() => toggleExpand(pr.id)}
                      className="flex items-center gap-3 text-[14px] font-black tracking-[0.4em] text-archive-clay hover:text-archive-charcoal transition-all group/btn"
                    >
                      {expandedIds.has(pr.id) ? (
                        <>READ LESS <ChevronUp size={14} className="group-hover/btn:-translate-y-0.5 transition-transform" /></>
                      ) : (
                        <>READ MORE <ChevronDown size={14} className="group-hover/btn:translate-y-0.5 transition-transform" /></>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>


    </div>
  );
};

const MapPinIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);

export default PressReleasePage;
