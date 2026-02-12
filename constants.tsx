
import { CategoryItem, ResourceItem, TestimonialItem, BuyerImageProfile, GalleryItem } from './types';

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'fibres',
    title: 'FIBRES',
    description: 'Natural Fibres, Man-Made Fibres, Silk, Wool, Synthetic Fibres, Organic, Polyester, Acrylic and many more...',
    imageUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'yarns',
    title: 'YARNS',
    description: 'Acrylic, Blended, Brushed, Cabled, Carded, Coated, Combed, Cotton, Dyed, Elastic, Core, Fancy, Lace, Linen, Nylon, Organic, Polyester, Ring, Spun, Silk, Synthetic, Textured, Twisted, Wool and Many More...',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'fabrics',
    title: 'APPAREL FABRICS',
    description: 'Acrylic, Art Silk, Batik, Blended, Chiffon, Corduroy, Cotton, Denim, Dyed, Embroidery, Fancy, Interlock, Jacquard, Jersey, Knitted, Linen, Netting, Nylon, Organza, Polyester, Printed, Silk and Many More...',
    imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'denims',
    title: 'DENIMS',
    description: 'Cotton Denim, Cross-hatch Denim, Denim Yarns, Dry Denim, Denim Accessories, Fashion Denim, Floc Coated Denim, Linen Denim, Raw Denim, Open End Denim, Poly Denim and Many More...',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'trims',
    title: 'TRIMS & ACCESSORIES',
    description: 'Buttonhole, Buttons, Cord, Elastic, Embroidery, Interlining, Labels, Motifs, Piping, Pocketing Fabric, Ribbons, Rivet, Rosettes, Sequins, Tapes, Threads, Toggles, Trimmings, Velcro, Zippers and Many More...',
    imageUrl: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'dyes',
    title: 'DYES & CHEMICALS',
    description: 'Dyestuff and Pigment, Basic Dye, Direct Dye, Reactive Dye, Sulphur Dye, Indigo Blue, Sulfurated Black, Organic Pigment, Printing Plasm, Color Dyestuff, Dye Intermediates, and Many More...',
    imageUrl: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'software',
    title: 'SOFTWARE & ERP',
    description: 'Software, AI Technology, Supply Chain, 3D Design, CAD-CAM, Pattern Design, Cloud Solutions, and many more...',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'allied',
    title: 'OTHER ALLIED SERVICES',
    description: 'Testing Equipments, Laboratory Tools, Design Studios, Trends Forecasters, Textile & Fashion Institutes, Trade Associations, and Many More...',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
  },
];

export const BUYER_PROFILES: BuyerImageProfile[] = [
  { title: 'Apparel Brands', imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=600' },
  { title: 'Fashion Design Studios', imageUrl: 'https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?auto=format&fit=crop&q=80&w=600' },
  { title: 'Fashion Designers & Private Labels', imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600' },
  { title: 'Apparel Exporters', imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600' },
  { title: 'Apparel Manufacturers', imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600' },
  { title: 'International Brands & Retailers', imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600' },
  { title: 'International Sourcing Offices', imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600' },
  { title: 'Buying Agents', imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600' },
  { title: 'Buying Houses', imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600' },
  { title: 'Merchant Exporters', imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600' },
  { title: 'Retail Chain Stores', imageUrl: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=600' },
  { title: 'Chambers of Commerce', imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600' },
  { title: 'Denim Brands', imageUrl: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&q=80&w=600' },
  { title: 'Textile Exporters', imageUrl: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&q=80&w=600' },
  { title: 'Textile Importers', imageUrl: 'https://images.unsplash.com/photo-1493946740644-2d8a1f1a6651?auto=format&fit=crop&q=80&w=600' },
  { title: 'Denim Exporters', imageUrl: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?auto=format&fit=crop&q=80&w=600' },
  { title: 'Denim Manufacturers', imageUrl: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=600' },
  { title: 'Textile Manufacturers', imageUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=600' },
  { title: 'Trade Associations', imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600' },
  { title: 'Distributors', imageUrl: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&q=80&w=600' },
  { title: 'E-tailers', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600' },
  { title: 'Trading Houses', imageUrl: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=600' }
];

export const BUYER_IMAGE_PROFILES: BuyerImageProfile[] = [
  { title: 'MANUFACTURERS', imageUrl: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800' },
  { title: 'INTERNATIONAL BRANDS', imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800' },
  { title: 'SOURCING OFFICES', imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800' },
  { title: 'BUYING AGENTS', imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800' },
  { title: 'BUYING HOUSES', imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
  { title: 'TRADE ASSOCIATIONS', imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800' }
];

export const RESOURCES: ResourceItem[] = [
  { id: 'brochure', title: 'Show Brochure', icon: 'FileText', description: 'Comprehensive exhibition details' },
  { id: 'factsheet', title: 'Factsheet', icon: 'BarChart3', description: 'Key statistics and insights' },
  { id: 'report', title: 'Post Show Report', icon: 'History', description: 'Past event highlights' },
  { id: 'faq', title: 'FAQ', icon: 'HelpCircle', description: 'Quick answers' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  // EXHIBITOR RECORDS
  {
    id: 'exh-1',
    quote: "It has been a great experience being part of Intex Sri Lanka. We had the chance to meet a lot of potential buyers, and the response has been really positive. We are glad to be here and are excited about the business opportunities this platform offers.",
    author: "Binisha",
    role: "Export Manager",
    company: "Ummi Textile, Pakistan",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
    type: 'EXHIBITOR'
  },
  {
    id: 'exh-2',
    quote: "We specialize in functional activewear fabrics. This was our first time participating in Intex Sri Lanka, and it has been a good show. We look forward to participating again next year.",
    author: "Exhibitor Representative",
    role: "Management",
    company: "Own Way Textile, Taiwan",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    type: 'EXHIBITOR'
  },
  {
    id: 'exh-3',
    quote: "Our specialty is in print design. At Intex, we had many visitors requesting our authentic designs. We have received a great response from buyers and connected with many of them during the event. Therefore, we are definitely looking forward to participating in next year’s Intex Sri Lanka.",
    author: "Jeanette Lee",
    role: "Management",
    company: "Modecrea, Korea",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
    type: 'EXHIBITOR'
  },
  {
    id: 'exh-4',
    quote: "We are primarily into knitting fabrics of lilac and polyester base, and this being our first time exhibiting at Intex Sri Lanka, I am honored to say it has been a very good opportunity to recommend our products to the people of Sri Lanka.",
    author: "Ramond",
    role: "Representative",
    company: "Li Jun (HK) Industrial Co. Ltd",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    type: 'EXHIBITOR'
  },
  {
    id: 'exh-5',
    quote: "We have been in the business since 1997 and are one of the biggest zipper manufacturers in Sri Lanka. Intex has been very useful to us, as we are meeting a lot of potential buyers. I would like to wish Worldex and Intex all the best.",
    author: "Sohan Gamagre",
    role: "General Manager",
    company: "Hero Zipper, Sri Lanka",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200",
    type: 'EXHIBITOR'
  },
  {
    id: 'exh-6',
    quote: "Recognized as a major export house, we are now exploring Sri Lanka to understand the market potential for our products. This is the second time we have exhibited with Intex, and we have connected with a few potential customers.",
    author: "Representative",
    role: "Management",
    company: "Le Merite Exports, India",
    imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200&h=200",
    type: 'EXHIBITOR'
  },
  {
    id: 'exh-7',
    quote: "Our goal was to connect with more buyers and the market in Sri Lanka, and we have been meeting many good buyers and suppliers at the show. We will definitely attend Intex again next year, as it has been a great platform.",
    author: "Dhruv",
    role: "Managing Director",
    company: "Sharmanji Industries Pvt. Ltd, India",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    type: 'EXHIBITOR'
  },
  {
    id: 'exh-8',
    quote: "This exhibition is truly excellent, and I wish it great success. I believe it will help Chinese companies, as well as fabric and accessories suppliers, to find the right customers here.",
    author: "Linda Chuai",
    role: "Representative",
    company: "Phoenix Flame Holdings LTD, China",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    type: 'EXHIBITOR'
  },
  {
    id: 'exh-9',
    quote: "At Intex, we have found a useful forum for our company to be known internationally. This exhibition has been fruitful for us as from day one we have seen a lot of interest from visitors.",
    author: "Rohan Goonetilleke",
    role: "MD/CEO",
    company: "Hayleys Fabric PLC, Sri Lanka",
    imageUrl: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=200&h=200",
    type: 'EXHIBITOR'
  },
  {
    id: 'exh-10',
    quote: "We are here to connect with the domestic and export market buyers in Sri Lanka. The exhibition is really good for us and the high level of customer interest and footfall has been very promising.",
    author: "Zohaib Mehboob",
    role: "Marketing Manager",
    company: "Artistic Fabric Mills, Pakistan",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
    type: 'EXHIBITOR'
  },

  // BUYER RECORDS
  {
    id: 'buy-1',
    quote: "This is the third time we have visited Intex Sri Lanka, and we have found a lot of newness in terms of fabrics. We discovered many potential exhibitors who can cater to our requirements.",
    author: "Lalindu",
    role: "Sourcing & Technical Dept",
    company: "Norlanka, Sri Lanka",
    imageUrl: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=200&h=200",
    type: 'BUYER'
  },
  {
    id: 'buy-2',
    quote: "Intex is very professional, with multiple product categories and a wide variety of products on display. I am particularly keen to explore kidswear, especially for winter wear.",
    author: "Imran Khan",
    role: "Country Manager",
    company: "Mayoral, Bangladesh",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
    type: 'BUYER'
  },
  {
    id: 'buy-3',
    quote: "I am very impressed by the number of exhibitors, the services, and the offerings for the industry. I have been visiting Intex for a long time.",
    author: "Ruhan Rodrigues",
    role: "General Manager",
    company: "Bernatali Sourcing Studios Pvt Ltd",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
    type: 'BUYER'
  },
  {
    id: 'buy-4',
    quote: "We find Intex Sri Lanka to be a valuable platform. We are here visiting with a group of Russian buyers to explore the opportunities in this market.",
    author: "Natalia",
    role: "Development Director",
    company: "Russian Association of Fashion",
    imageUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=200&h=200",
    type: 'BUYER'
  },
  {
    id: 'buy-5',
    quote: "Having an exhibition of this scale, with all the amazing suppliers here, is fantastic. I am really enjoying it, and we are finding amazing things. Thank you.",
    author: "Ishara Wijemanne",
    role: "Head of Marketing",
    company: "Garment Services Ltd, Sri Lanka",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
    type: 'BUYER'
  },
  {
    id: 'buy-6',
    quote: "We found lots of interesting fabrics and mills for our future development. Overall it's a positive experience to be here at Intex.",
    author: "Representative",
    role: "Purchasing",
    company: "Star Garments, Sri Lanka",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    type: 'BUYER'
  },
  {
    id: 'buy-7',
    quote: "Our whole team came here across 3 days. It was really a great experience. We found many suppliers who we are looking forward to work in the future.",
    author: "Sourcing Team",
    role: "Department Head",
    company: "Brandix Group, Sri Lanka",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200&h=200",
    type: 'BUYER'
  },
  {
    id: 'buy-8',
    quote: "It's a very insightful exhibition. We managed to get contacts of quite a few suppliers which will be useful for our future work.",
    author: "Design Lead",
    role: "Designer",
    company: "Amante / Timex Garments",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200&h=200",
    type: 'BUYER'
  },
  {
    id: 'buy-9',
    quote: "We are looking for athleisure and sportswear. So this show was very helpful where we can find all in one location.",
    author: "Sourcing Manager",
    role: "Buyer",
    company: "MAS Intimates, Sri Lanka",
    imageUrl: "https://images.unsplash.com/photo-1542156822-6924d1a71932?auto=format&fit=crop&q=80&w=200&h=200",
    type: 'BUYER'
  },
  {
    id: 'buy-10',
    quote: "Congratulation to the whole team of Intex. I am deeply impressed by the exhibitors, their collections, and the variety from different countries.",
    author: "Mr. Abbas Addhara",
    role: "SIGMA Delegation Organizer",
    company: "English Colors / SIGMA India",
    imageUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200&h=200",
    type: 'BUYER'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', title: 'INTEX SRI LANKA 2024', imageUrl: 'https://sl.intexsouthasia.com/assets/img/Gallery/2025/21.jpg', category: 'FIBRES', rating: 4.9, year: '2024' },
  { id: 'g2', title: 'INTEX BANGLADESH  2024', imageUrl: 'https://sl.intexsouthasia.com/assets/img/Gallery/2025/8.jpg', category: 'FABRICS', rating: 4.8, year: '2024' },
  { id: 'g3', title: 'INTEX INDIA  2024', imageUrl: 'https://sl.intexsouthasia.com/assets/img/Gallery/2025/14.jpg', category: 'DENIM', rating: 5.0, year: '2024' },
  { id: 'g4', title: 'INMAC WORLDEXPO', imageUrl: 'https://sl.intexsouthasia.com/assets/img/Gallery/2025/32.jpg', category: 'YARNS', rating: 4.7, year: '2023' }
];
