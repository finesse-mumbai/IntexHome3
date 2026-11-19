// Photos for "B2B Meetings & Networking Session", hosted on the Intex Sri Lanka site.
// Used by the B2B page (/#b2b-meetings-networking) and the home page schedule card.

const SL_IMG = 'https://sl.intexsouthasia.com/assets/img';

// High Commission event (there is no photo 09)
const HIGH_COMMISSION_EVENT = ['01', '02', '03', '04', '05', '06', '07', '08', '10', '11', '12', '13'].map(
  (n) => `${SL_IMG}/high-commission-event/high-commission-event-${n}.jpg`
);

// Fashion Fiesta 2025
const FASHION_FIESTA_2025 = Array.from({ length: 20 }, (_, i) => `${SL_IMG}/fashion-fiesta/2025/${i + 1}.jpg`);

export const B2B_IMAGES: string[] = [...HIGH_COMMISSION_EVENT, ...FASHION_FIESTA_2025];
