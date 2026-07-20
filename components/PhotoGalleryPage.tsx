import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Camera, Calendar, ChevronDown, MapPin, Maximize2, Search, X } from 'lucide-react';

type GalleryEvent = 'Bangladesh' | 'Sri Lanka';

interface GalleryAsset {
  id: string;
  url: string;
  year: string;
  event: GalleryEvent;
  title: string;
}

const makeAssets = (
  event: GalleryEvent,
  year: string,
  basePath: string,
  files: string[],
): GalleryAsset[] =>
  files.map((file, index) => ({
    id: `${event.replace(/\s/g, '_')}_${year}_${file.replace(/\W/g, '_')}`,
    url: `${basePath}/${file}`,
    year,
    event,
    title: `${event} ${year} Gallery ${index + 1}`,
  }));

const range = (count: number, ext: string) => Array.from({ length: count }, (_, i) => `${i + 1}.${ext}`);

const GALLERY_DATA: GalleryAsset[] = [
  ...makeAssets('Bangladesh', '2025', '/assets/img/GalleryBD/2025', [
    '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '10A.png',
    '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '17A.png', '18.png', '19.png',
    '20.png', '21.png', '22.png', '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png',
    '30.png', '31.png', '32.png', '33.png',
  ]),
  ...makeAssets('Bangladesh', '2024', '/assets/img/GalleryBD/2024/large', range(16, 'jpg')),
  ...makeAssets('Bangladesh', '2023', '/assets/img/GalleryBD/2023/large', range(16, 'jpg')),
  ...makeAssets('Bangladesh', '2022', '/assets/img/GalleryBD/2022/large', [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.png', '7.png', '8.png', '9.jpg', '10.png', '11.png', '12.png',
  ]),
  ...makeAssets('Bangladesh', '2019', '/assets/img/GalleryBD/2019/large', range(12, 'jpg')),

  ...makeAssets('Sri Lanka', '2025', '/assets/img/GallerySL/2025', range(40, 'jpg')),
  ...makeAssets('Sri Lanka', '2024', '/assets/img/GallerySL/2024', range(36, 'jpg')),
  ...makeAssets('Sri Lanka', '2023', '/assets/img/GallerySL/2023', range(36, 'png')),
  ...makeAssets('Sri Lanka', '2019', '/assets/img/GallerySL/2019/large', range(13, 'jpg')),
  ...makeAssets('Sri Lanka', '2018', '/assets/img/GallerySL/2018/large', range(20, 'jpg')),
  ...makeAssets('Sri Lanka', '2017', '/assets/img/GallerySL/2017', range(5, 'jpg')),
  ...makeAssets('Sri Lanka', '2016', '/assets/img/GallerySL/2016', range(9, 'png')),
  ...makeAssets('Sri Lanka', '2015', '/assets/img/GallerySL/2015', range(7, 'png')),
];

const EVENTS: Array<'ALL' | GalleryEvent> = ['ALL', 'Bangladesh', 'Sri Lanka'];

const PhotoGalleryPage: React.FC = () => {
  const [filterEvent, setFilterEvent] = useState<'ALL' | GalleryEvent>('ALL');
  const [filterYear, setFilterYear] = useState('ALL');
  const [selectedAsset, setSelectedAsset] = useState<GalleryAsset | null>(null);

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(GALLERY_DATA.map((asset) => asset.year)));
    return ['ALL', ...uniqueYears.sort((a, b) => b.localeCompare(a))];
  }, []);

  const filteredAssets = useMemo(() => {
    return GALLERY_DATA.filter((asset) => {
      const eventMatch = filterEvent === 'ALL' || asset.event === filterEvent;
      const yearMatch = filterYear === 'ALL' || asset.year === filterYear;
      return eventMatch && yearMatch;
    });
  }, [filterEvent, filterYear]);

  const groupedAssets = useMemo(() => {
    return EVENTS.filter((event): event is GalleryEvent => event !== 'ALL')
      .map((event) => ({
        event,
        years: years
          .filter((year) => year !== 'ALL')
          .map((year) => ({
            year,
            assets: filteredAssets.filter((asset) => asset.event === event && asset.year === year),
          }))
          .filter((group) => group.assets.length > 0),
      }))
      .filter((group) => filterEvent === 'ALL' || group.event === filterEvent)
      .filter((group) => group.years.length > 0);
  }, [filterEvent, filteredAssets, years]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-archive-charcoal pt-32 pb-24">
      <GalleryBackground />

      <section className="relative z-10 mx-auto mb-12 max-w-[1440px] px-6 md:px-12">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-archive-clay"></div>
              <span className="text-[14px] font-black uppercase tracking-[0.5em] text-archive-clay">Visual Archive // Event Records</span>
            </div>
            <h1 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white">
              PHOTO{' '}
              <span className="text-archive-clay">GALLERY.</span>
            </h1>
          </div>

          <div className="space-y-6 bg-white/10 px-5 py-6 shadow-sm backdrop-blur-md md:px-8">
            <p className="max-w-xl text-[14px] font-bold leading-relaxed tracking-[0.15em] text-white/70">
              Event-wise photo archive from Intex Bangladesh and Intex Sri Lanka, arranged by year for quick browsing and full-screen viewing.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <FilterDropdown label="Event" values={EVENTS} active={filterEvent} onChange={(value) => setFilterEvent(value as 'ALL' | GalleryEvent)} />
              <FilterDropdown label="Year" values={years} active={filterYear} onChange={setFilterYear} highlight />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${filterEvent}-${filterYear}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="space-y-24"
          >
            {groupedAssets.map((eventGroup) => (
              <div key={eventGroup.event} className="space-y-12">
                <EventHeader event={eventGroup.event} count={eventGroup.years.reduce((sum, group) => sum + group.assets.length, 0)} />
                {eventGroup.years.map((yearGroup) => (
                  <YearGallery
                    key={`${eventGroup.event}-${yearGroup.year}`}
                    event={eventGroup.event}
                    year={yearGroup.year}
                    assets={yearGroup.assets}
                    onSelect={setSelectedAsset}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredAssets.length === 0 && (
          <div className="flex flex-col items-center justify-center bg-white/10 py-40 text-center backdrop-blur-md">
            <Search size={40} className="mb-6 text-archive-clay/60" />
            <span className="text-[14px] font-black uppercase tracking-[0.5em] text-white/50">No gallery images for selected filters.</span>
          </div>
        )}
      </section>

      <AnimatePresence>
        {selectedAsset && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-archive-charcoal/95 p-5 backdrop-blur-xl md:p-16"
            onClick={() => setSelectedAsset(null)}
          >
            <button className="absolute right-6 top-6 text-white/60 transition-colors hover:text-white md:right-12 md:top-12">
              <X size={36} strokeWidth={1.4} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="grid w-full max-w-6xl gap-6 lg:grid-cols-[1fr_280px]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex max-h-[75vh] items-center justify-center bg-black/40 backdrop-blur-md">
                <img src={selectedAsset.url} alt={selectedAsset.title} className="max-h-[75vh] w-full object-contain" />
              </div>
              <div className="flex flex-col justify-between bg-white/10 p-8 text-white backdrop-blur-md">
                <div className="space-y-5">
                  <span className="text-[14px] font-black uppercase tracking-[0.4em] text-archive-clay">Selected Image</span>
                  <h2 className="text-2xl font-black uppercase leading-none">{selectedAsset.event}</h2>
                  <div className="space-y-3 text-[14px] font-bold uppercase tracking-widest text-white/60">
                    <p className="flex items-center gap-2"><Calendar size={14} className="text-archive-clay" /> {selectedAsset.year}</p>
                    <p className="flex items-center gap-2"><Camera size={14} className="text-archive-clay" /> {selectedAsset.title}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedAsset(null)} className="mt-8 bg-archive-charcoal px-6 py-4 text-[14px] font-black uppercase tracking-[0.3em] text-white transition-colors hover:bg-archive-clay">
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const GalleryBackground: React.FC = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    <div
      className="absolute left-1/2 top-0 w-[170%]"
      style={{ transform: 'translateX(-50%) rotate(15deg) skewX(-5deg)' }}
    >
      <motion.div
        className="grid grid-cols-4 gap-0.5 p-2 md:grid-cols-7 lg:grid-cols-10"
        initial={{ y: '0%' }}
        animate={{ y: '-50%' }}
        transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
      >
        {[...GALLERY_DATA, ...GALLERY_DATA].slice(0, 160).map((asset, index) => (
          <div key={`${asset.id}-background-${index}`} className="relative aspect-[4/3] overflow-hidden">
            <img
              src={asset.url}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-full w-full object-cover brightness-50"
            />
          </div>
        ))}
      </motion.div>
    </div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0.18)_42%,#050505_100%)]"></div>
    <div className="absolute inset-0 bg-black/45"></div>
  </div>
);

const FilterDropdown: React.FC<{
  label: string;
  values: string[];
  active: string;
  onChange: (value: string) => void;
  highlight?: boolean;
}> = ({ label, values, active, onChange, highlight = false }) => (
  <div className="space-y-3">
    <span className="text-[14px] font-black uppercase tracking-widest text-white/50">{label}</span>
    <div className={`relative backdrop-blur-md ${highlight ? 'bg-archive-clay/80' : 'bg-white/15'}`}>
      <select
        value={active}
        onChange={(event) => onChange(event.target.value)}
        className="w-full appearance-none bg-transparent px-5 py-4 pr-12 text-[14px] font-black uppercase tracking-widest text-white outline-none"
      >
        {values.map((value) => (
          <option key={value} value={value} className="bg-archive-charcoal text-white">
            {value}
          </option>
        ))}
      </select>
      <ChevronDown size={16} className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/70" />
    </div>
  </div>
);

const EventHeader: React.FC<{ event: GalleryEvent; count: number }> = ({ event, count }) => (
  <div className="relative overflow-hidden bg-white/10 px-6 py-8 text-white backdrop-blur-md md:px-10">
    <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(238,117,57,0.18))]"></div>
    <div className="relative flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-archive-clay">
          <MapPin size={16} />
          <span className="text-[14px] font-black uppercase tracking-[0.4em]">Event Gallery</span>
        </div>
        <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">{event}</h2>
      </div>
      <span className="text-[14px] font-black uppercase tracking-[0.4em] text-white/45">{count} Images</span>
    </div>
  </div>
);

const YearGallery: React.FC<{
  event: GalleryEvent;
  year: string;
  assets: GalleryAsset[];
  onSelect: (asset: GalleryAsset) => void;
}> = ({ event, year, assets, onSelect }) => {
  const previewAssets = assets.slice(0, 24);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-6 pb-4">
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 items-center justify-center bg-archive-clay text-[14px] font-black text-white">
            {year.slice(2)}
          </span>
          <div>
            <h3 className="text-xl font-black uppercase tracking-tight text-white">{year}</h3>
            <p className="text-[14px] font-black uppercase tracking-widest text-white/45">{event} visual record</p>
          </div>
        </div>
        <span className="text-[14px] font-black uppercase tracking-widest text-white/45">{assets.length} Photos</span>
      </div>
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
        {previewAssets.map((asset, index) => {
          return (
            <motion.button
              key={asset.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.025 }}
              onClick={() => onSelect(asset)}
              className="group relative block w-full overflow-hidden bg-white/10 text-left shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/15 hover:shadow-2xl"
            >
              <img
                src={asset.url}
                alt={asset.title}
                loading="lazy"
                className="block aspect-[4/3] w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-[0.62] group-hover:saturate-110"
                onError={(event) => {
                  (event.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(asset.title)}&background=F3EBE8&color=2F2C2C&bold=true`;
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(47,44,44,0)_35%,rgba(47,44,44,0.82)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-end justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-[14px] font-black uppercase tracking-widest text-archive-clay">{event} // {year}</span>
                    <p className="text-[14px] font-black uppercase tracking-tight">Open image</p>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center bg-white/10 backdrop-blur">
                    <Maximize2 size={14} />
                  </span>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
      {assets.length > previewAssets.length && (
        <p className="text-right text-[14px] font-black uppercase tracking-[0.35em] text-white/45">
          Showing {previewAssets.length} of {assets.length}
        </p>
      )}
    </div>
  );
};

export default PhotoGalleryPage;
