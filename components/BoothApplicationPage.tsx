import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  AlertCircle,
  FileText,
  DollarSign,
  Printer,
  RotateCcw,
  Send,
  Loader2,
  ShieldCheck,
  Check,
  Info,
  ChevronRight,
  ChevronLeft,
  Layers,
  Sparkles,
  Award,
  Download,
  Clock,
  Phone,
  Mail,
  Globe,
  User,
  Briefcase,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// ─────────────────────────────────────────────────────────────
// SHOW EDITIONS & DATES ("all show date will come")
// ─────────────────────────────────────────────────────────────
export interface ShowEdition {
  id: string;
  name: string;
  edition: string;
  dates: string;
  year: string;
  venue: string;
  city: string;
  country: string;
}

export const SHOW_EDITIONS: ShowEdition[] = [
  {
    id: 'bangladesh-2027',
    name: 'Intex Bangladesh',
    edition: '17th Edition',
    dates: '22 - 23 - 24 June, 2027',
    year: '2027',
    venue: 'International Convention City Bashundhara (ICCB)',
    city: 'Dhaka',
    country: 'Bangladesh'
  },
  {
    id: 'srilanka-2027',
    name: 'Intex Sri Lanka',
    edition: '17th Edition',
    dates: '4 - 5 - 6 August, 2027',
    year: '2027',
    venue: 'BMICH Exhibition Centre',
    city: 'Colombo',
    country: 'Sri Lanka'
  },
  {
    id: 'indonesia-2027',
    name: 'Intex Indonesia',
    edition: '1st Edition (Intex ASEAN)',
    dates: 'Dates Announcing Soon',
    year: '2027-28',
    venue: 'Jakarta International Expo (JIExpo)',
    city: 'Jakarta',
    country: 'Indonesia'
  },
  {
    id: 'india-2027',
    name: 'Intex India',
    edition: 'Upcoming Edition',
    dates: 'Dates Announcing Soon',
    year: '2027-28',
    venue: 'Pragati Maidan Exhibition Centre',
    city: 'New Delhi',
    country: 'India'
  }
];

const PRODUCT_CATEGORIES = [
  'Fibres',
  'Yarns',
  'Apparel Fabrics',
  'Denim Fabrics',
  'Clothing Accessories',
  'Dyes & Chemicals',
  'CAD CAM',
  'ERP Solutions',
  'Supply Chain Solutions',
  'Testing Equipment',
  'Compliance & Certification',
  'Textile Parks',
  'Trends & Fashion Forecasters'
];

const CATEGORY_WEAR = [
  'Menswear',
  'Womens Wear',
  'Kids Wear',
  'Infant Wear'
];

const NATURE_OF_BUSINESS = [
  'Manufacturer',
  'Manufacturer & Exporter',
  'Merchant Exporter',
  'Trading House',
  'Importer',
  'Trade Body',
  'Agent',
  'Allied Services',
  'Trader',
  'Distributor'
];

const TARGET_BUYERS = [
  'Domestic Market',
  'Domestic & Export Markets',
  'Export Market',
  'Volume Buyers',
  'Boutique Buyers'
];

const CERTIFICATIONS = [
  'OEKO-TEX',
  'GOTS',
  'WRAP',
  'ECOCERT',
  'GRS',
  'SFA',
  'OCS Blended',
  'OCS 100',
  'RDS',
  'RCS 100',
  'RCS Blended',
  'RWS',
  'Fairtrade',
  'Woolmark',
  'Supima',
  'Cotton USA'
];

const COMPANY_TYPES = [
  'Proprietorship',
  'Partnership',
  'Private Limited',
  'LLP',
  'HUF',
  'Co-operative',
  'Others'
];

const STANDARD_SIZES = [9, 12, 15, 18, 24, 36, 42, 48, 54, 72];

const COUNTRIES_LIST = [
  'India',
  'Bangladesh',
  'Sri Lanka',
  'Indonesia',
  'China',
  'Hong Kong',
  'Pakistan',
  'Vietnam',
  'Thailand',
  'Malaysia',
  'Singapore',
  'Taiwan',
  'South Korea',
  'Japan',
  'Turkey',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Germany',
  'Italy',
  'France',
  'Spain',
  'Portugal',
  'Netherlands',
  'Switzerland',
  'Belgium',
  'Egypt',
  'Mauritius',
  'Australia',
  'Canada',
  'Other'
];

interface FormDataState {
  selectedShows: string[];
  companyName: string;
  representative1Name: string;
  representative1Designation: string;
  representative2Name: string;
  representative2Designation: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  telephone: string;
  mobile: string;
  email1: string;
  email2: string;
  website: string;

  isIndianExhibitor: boolean;
  gstNo: string;
  iecCode: string;
  uamMsmeNo: string;
  dinCinNo: string;

  companyType: string;
  companyTypeOther: string;

  companyProfile: string;
  brandName: string;

  productCategories: string[];
  productCategoryOther: string;

  categoryWear: string[];
  categoryWearOther: string;

  natureOfBusiness: string[];
  natureOfBusinessOther: string;

  targetBuyers: string[];
  targetExportMarkets: string;

  certifications: string[];
  certificationsOther: string;

  boothType: 'RAW_SPACE' | 'SHELL_SCHEME';
  boothSize: number;
  customSize: string;
  openSides: '1-side' | '2-side-corner' | '3-side-peninsula' | '4-side-island';

  appointContractor: boolean;
  contractorCompany: string;
  contractorPerson: string;
  contractorPhone: string;
  contractorEmail: string;

  signatoryName: string;
  signatoryDesignation: string;
  signatoryDate: string;
  agreeTerms: boolean;
}

const INITIAL_FORM_STATE: FormDataState = {
  selectedShows: ['bangladesh-2027'],
  companyName: '',
  representative1Name: '',
  representative1Designation: '',
  representative2Name: '',
  representative2Designation: '',
  address: '',
  city: '',
  state: '',
  postalCode: '',
  country: 'Bangladesh',
  telephone: '',
  mobile: '',
  email1: '',
  email2: '',
  website: '',

  isIndianExhibitor: false,
  gstNo: '',
  iecCode: '',
  uamMsmeNo: '',
  dinCinNo: '',

  companyType: 'Private Limited',
  companyTypeOther: '',

  companyProfile: '',
  brandName: '',

  productCategories: ['Apparel Fabrics'],
  productCategoryOther: '',

  categoryWear: ['Menswear', 'Womens Wear'],
  categoryWearOther: '',

  natureOfBusiness: ['Manufacturer & Exporter'],
  natureOfBusinessOther: '',

  targetBuyers: ['Domestic & Export Markets'],
  targetExportMarkets: '',

  certifications: ['OEKO-TEX'],
  certificationsOther: '',

  boothType: 'SHELL_SCHEME',
  boothSize: 9,
  customSize: '',
  openSides: '1-side',

  appointContractor: false,
  contractorCompany: '',
  contractorPerson: '',
  contractorPhone: '',
  contractorEmail: '',

  signatoryName: '',
  signatoryDesignation: '',
  signatoryDate: new Date().toISOString().split('T')[0],
  agreeTerms: false
};

const STEPS = [
  { id: 1, label: 'Show & Booth Space', desc: 'Editions & Dimensions' },
  { id: 2, label: 'Company Details', desc: 'Contact & Addresses' },
  { id: 3, label: 'Products & Profile', desc: 'Categories & Wear' },
  { id: 4, label: 'Review & Submit', desc: 'Declaration & Summary' },
];

const BoothApplicationPage: React.FC = () => {
  const location = useLocation();

  const [formData, setFormData] = useState<FormDataState>(() => {
    try {
      const saved = localStorage.getItem('intex_booth_application_draft');
      if (saved) return { ...INITIAL_FORM_STATE, ...JSON.parse(saved) };
    } catch (e) {
      // fallback
    }
    return INITIAL_FORM_STATE;
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isCustomSizeActive, setIsCustomSizeActive] = useState<boolean>(false);
  const [showNotesAccordion, setShowNotesAccordion] = useState(false);

  // Sync draft
  useEffect(() => {
    try {
      localStorage.setItem('intex_booth_application_draft', JSON.stringify(formData));
    } catch (e) {}
  }, [formData]);

  // Pre-select show edition from URL params
  useEffect(() => {
    const search = location.search.toLowerCase();
    const hash = location.hash.toLowerCase();
    const combined = `${search} ${hash}`;
    if (combined.includes('srilanka') || combined.includes('sri-lanka') || combined.includes('show=sl') || combined.includes('event=sl')) {
      setFormData((prev) => ({ ...prev, selectedShows: ['srilanka-2027'], country: 'Sri Lanka' }));
    } else if (combined.includes('bangladesh') || combined.includes('show=bd') || combined.includes('event=bd') || combined.includes('dhaka')) {
      setFormData((prev) => ({ ...prev, selectedShows: ['bangladesh-2027'], country: 'Bangladesh' }));
    } else if (combined.includes('indonesia') || combined.includes('jakarta') || combined.includes('asean') || combined.includes('show=id')) {
      setFormData((prev) => ({ ...prev, selectedShows: ['indonesia-2027'], country: 'Indonesia' }));
    } else if (combined.includes('india') || combined.includes('show=in') || combined.includes('event=in')) {
      setFormData((prev) => ({ ...prev, selectedShows: ['india-2027'], country: 'India', isIndianExhibitor: true }));
    }
  }, [location.search, location.hash]);

  // Auto-detect Indian entity
  useEffect(() => {
    if (formData.country.toLowerCase() === 'india') {
      setFormData((prev) => ({ ...prev, isIndianExhibitor: true }));
    }
  }, [formData.country]);

  // Official Pricing
  const RATE_RAW_SPACE = 350;
  const RATE_SHELL_SCHEME = 375;
  const currentRate = formData.boothType === 'RAW_SPACE' ? RATE_RAW_SPACE : RATE_SHELL_SCHEME;
  const effectiveSize = isCustomSizeActive ? (parseFloat(formData.customSize) || 0) : formData.boothSize;
  const costPerShow = effectiveSize * currentRate;
  const totalCostUSD = costPerShow * (formData.selectedShows.length || 1);

  const handleToggleShow = (showId: string) => {
    setFormData((prev) => {
      const exists = prev.selectedShows.includes(showId);
      if (exists && prev.selectedShows.length === 1) return prev;
      const updated = exists ? prev.selectedShows.filter((id) => id !== showId) : [...prev.selectedShows, showId];
      return { ...prev, selectedShows: updated };
    });
  };

  const handleToggleItem = (field: keyof FormDataState, item: string) => {
    setFormData((prev) => {
      const arr = (prev[field] as string[]) || [];
      const updated = arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item];
      return { ...prev, [field]: updated };
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (formData.selectedShows.length === 0) {
        newErrors.selectedShows = 'Select at least one Show Edition';
      }
      if (effectiveSize < (formData.boothType === 'SHELL_SCHEME' ? 9 : 12)) {
        newErrors.boothSize = `Minimum size is ${formData.boothType === 'SHELL_SCHEME' ? '9' : '12'} sq.m.`;
      }
    }

    if (step === 2) {
      if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
      if (!formData.representative1Name.trim()) newErrors.representative1Name = 'Delegate name is required';
      if (!formData.representative1Designation.trim()) newErrors.representative1Designation = 'Designation is required';
      if (!formData.address.trim()) newErrors.address = 'Company address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
      if (!formData.email1.trim() || !formData.email1.includes('@')) newErrors.email1 = 'Valid email is required';

      if (formData.isIndianExhibitor) {
        if (!formData.gstNo.trim()) newErrors.gstNo = 'GST number is required for Indian exhibitors';
        if (!formData.iecCode.trim()) newErrors.iecCode = 'IEC code is required';
      }
    }

    if (step === 4) {
      if (!formData.signatoryName.trim()) newErrors.signatoryName = 'Authorized signatory name is required';
      if (!formData.agreeTerms) newErrors.agreeTerms = 'Please confirm acceptance of contract terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prev) => Math.min(4, prev + 1));
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    setActiveStep((prev) => Math.max(1, prev - 1));
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(1) || !validateStep(2) || !validateStep(4)) {
      return;
    }

    setIsSubmitting(true);
    try {
      const randomCode = Math.floor(10000 + Math.random() * 90000);
      const generatedRef = `INTEX-${new Date().getFullYear()}-${randomCode}`;

      setTimeout(() => {
        setIsSubmitting(false);
        setSubmittedRef(generatedRef);
        localStorage.removeItem('intex_booth_application_draft');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 700);
    } catch (err) {
      setIsSubmitting(false);
      alert('Submission encountered an issue. Please retry.');
    }
  };

  // SUCCESS SCREEN
  if (submittedRef) {
    return (
      <div className="bg-[#FAF8F5] min-h-screen pt-32 pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 sm:p-12 shadow-md text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 size={36} />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-archive-clay">
              Official Application Registered
            </span>
            <h1 className="text-3xl font-black text-archive-charcoal uppercase tracking-tight">
              Booth Application Received
            </h1>
            <p className="text-sm text-gray-600 max-w-lg mx-auto">
              Your booth reservation application has been securely logged with the Intex Exhibition Secretariat.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 max-w-md mx-auto text-left space-y-1">
            <span className="text-[11px] font-bold uppercase text-gray-500">Application Reference ID:</span>
            <div className="text-2xl font-black tracking-wider text-archive-charcoal">{submittedRef}</div>
            <div className="text-xs text-gray-500">Exhibiting Company: <strong className="text-archive-charcoal uppercase">{formData.companyName}</strong></div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5 text-left text-xs space-y-3 bg-white">
            <div className="font-bold uppercase tracking-wider text-archive-charcoal">Next Steps:</div>
            <ul className="space-y-1.5 text-gray-600">
              <li>• The Intex Space Management Team will review your layout preference and send the official Proforma Invoice.</li>
              <li>• Space confirmation is secured upon payment of the booth invoice.</li>
              <li>• Exhibitor Manual and Contractor Nomination access will be emailed to <strong>{formData.email1}</strong>.</li>
            </ul>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => window.print()}
              className="px-6 py-3 rounded-lg bg-archive-charcoal hover:bg-archive-clay text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <Printer size={15} /> Print Summary
            </button>
            <Link
              to="/"
              className="px-6 py-3 rounded-lg border border-gray-300 hover:border-archive-charcoal text-gray-700 text-xs font-bold uppercase tracking-wider transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-28 pb-20 selection:bg-archive-clay selection:text-white">
      {/* ─────────────────────────────────────────────────────────────
          CLEAN EDITORIAL HEADER
      ───────────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 md:px-12 max-w-8xl max-w-screen-8xl max-w-[1440px] mx-auto mb-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link to="/" className="hover:text-archive-clay transition-colors">Home</Link>
            <span>/</span>
            <span className="text-archive-charcoal font-semibold">Exhibitor Space Application</span>
          </div>

          <div className="pb-6 border-b border-gray-200">
            <div>
              <h1 className="text-2xl sm:text-4xl font-black text-archive-charcoal uppercase tracking-tight">
                Booth Application
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
                Official online application for booth space reservation at Intex South Asia & ASEAN shows.
              </p>
            </div>
          </div>

          {/* CLEAN STEP PROGRESS BAR */}
          <div className="grid grid-cols-4 gap-2 pt-2">
            {STEPS.map((s) => {
              const isCurrent = activeStep === s.id;
              const isDone = activeStep > s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    if (s.id < activeStep || validateStep(activeStep)) {
                      setActiveStep(s.id);
                    }
                  }}
                  className={`text-left p-3 rounded-lg transition-all ${
                    isCurrent
                      ? 'bg-archive-clay text-white shadow-sm'
                      : isDone
                      ? 'bg-white text-gray-800 shadow-xs hover:shadow-sm'
                      : 'bg-white text-gray-600 shadow-xs hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center shrink-0 ${
                      isDone
                        ? 'bg-emerald-600 text-white'
                        : isCurrent
                        ? 'bg-white text-archive-clay'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {isDone ? '✓' : s.id}
                    </span>
                    <span className="text-xs font-bold uppercase truncate">{s.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MAIN FORM CONTENT CONTAINER
      ───────────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 md:px-12 max-w-8xl max-w-screen-8xl max-w-[1440px] mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>

          {/* ═════════════════════════════════════════════════════════
              STEP 1: SHOW EDITIONS & PARTICIPATION FEE CALCULATOR
          ═════════════════════════════════════════════════════════ */}
          {activeStep === 1 && (
            <div className="space-y-6 animate-fadeIn">
              {/* SHOW EDITIONS CARDS ("all show date will come") */}
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div>
                    <h2 className="text-base font-bold text-archive-charcoal uppercase tracking-wide">
                      1. Select Target Show Editions & Dates
                    </h2>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Choose which editions you are applying to exhibit in. Multiple editions can be selected.
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                    {formData.selectedShows.length} Selected
                  </span>
                </div>

                {errors.selectedShows && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle size={15} /> {errors.selectedShows}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-1">
                  {SHOW_EDITIONS.map((show) => {
                    const isSelected = formData.selectedShows.includes(show.id);
                    return (
                      <div
                        key={show.id}
                        onClick={() => handleToggleShow(show.id)}
                        className={`cursor-pointer rounded-lg p-4 border transition-all flex flex-col justify-between space-y-3 ${
                          isSelected
                            ? 'border-archive-clay bg-archive-clay text-white shadow-md ring-2 ring-archive-clay/30'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className={`text-sm font-bold leading-tight ${isSelected ? 'text-white' : 'text-archive-charcoal'}`}>
                              {show.name}
                            </div>
                            <span className={`text-[10px] font-semibold uppercase ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                              {show.edition}
                            </span>
                          </div>
                          <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 transition-all ${
                            isSelected ? 'bg-white text-archive-clay' : 'border border-gray-300 bg-white'
                          }`}>
                            {isSelected && <Check size={12} strokeWidth={3} />}
                          </div>
                        </div>

                        <div className={`rounded p-2.5 space-y-1 text-xs transition-colors ${
                          isSelected ? 'bg-black/15 text-white' : 'bg-gray-50'
                        }`}>
                          <div className={`flex items-center gap-1.5 font-semibold ${isSelected ? 'text-white' : 'text-archive-charcoal'}`}>
                            <Calendar size={13} className={isSelected ? 'text-white' : 'text-archive-clay'} />
                            <span>{show.dates}</span>
                          </div>
                          <div className={`flex items-center gap-1.5 text-[11px] truncate ${isSelected ? 'text-white/90' : 'text-gray-600'}`}>
                            <MapPin size={12} className={isSelected ? 'text-white/75 shrink-0' : 'text-gray-400 shrink-0'} />
                            <span className="truncate">{show.venue}, {show.city}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* BOOTH TYPE & CALCULATOR */}
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
                <div className="pb-3 border-b border-gray-100">
                  <h2 className="text-base font-bold text-archive-charcoal uppercase tracking-wide">
                    2. Booth Space & Participation Fee
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Select your booth type and stall dimension. Real-time cost updates instantly.
                  </p>
                </div>

                {/* Booth Type Radio Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Shell Scheme */}
                  <div
                    onClick={() => setFormData((p) => ({ ...p, boothType: 'SHELL_SCHEME' }))}
                    className={`cursor-pointer rounded-lg p-5 border transition-all space-y-2 ${
                      formData.boothType === 'SHELL_SCHEME'
                        ? 'border-archive-clay bg-archive-clay text-white shadow-md ring-2 ring-archive-clay/30'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${
                          formData.boothType === 'SHELL_SCHEME' ? 'text-white/80' : 'text-archive-clay'
                        }`}>Turnkey Fitted Stand</span>
                        <h3 className={`text-base font-bold ${formData.boothType === 'SHELL_SCHEME' ? 'text-white' : 'text-archive-charcoal'}`}>
                          Shell Scheme
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className={`text-lg font-black ${formData.boothType === 'SHELL_SCHEME' ? 'text-white' : 'text-archive-charcoal'}`}>
                          US$ 375
                        </span>
                        <span className={`text-[10px] block ${formData.boothType === 'SHELL_SCHEME' ? 'text-white/80' : 'text-gray-500'}`}>
                          per sq.m.
                        </span>
                      </div>
                    </div>
                    <p className={`text-xs leading-relaxed ${formData.boothType === 'SHELL_SCHEME' ? 'text-white/95' : 'text-gray-600'}`}>
                      Complete turnkey package including white partition walls, carpet, fascia company name, spotlights, 1 table, 2 chairs, power socket & trash bin.
                    </p>
                    <div className={`text-[11px] font-semibold rounded px-2.5 py-1 inline-block ${
                      formData.boothType === 'SHELL_SCHEME'
                        ? 'bg-white/20 text-white font-bold'
                        : 'text-emerald-700 bg-emerald-50'
                    }`}>
                      9 Sqm. Standard Booth = US$ 3,375
                    </div>
                  </div>

                  {/* Raw Space */}
                  <div
                    onClick={() => {
                      setFormData((p) => ({ ...p, boothType: 'RAW_SPACE', boothSize: p.boothSize < 12 ? 18 : p.boothSize }));
                    }}
                    className={`cursor-pointer rounded-lg p-5 border transition-all space-y-2 ${
                      formData.boothType === 'RAW_SPACE'
                        ? 'border-archive-clay bg-archive-clay text-white shadow-md ring-2 ring-archive-clay/30'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${
                          formData.boothType === 'RAW_SPACE' ? 'text-white/80' : 'text-gray-500'
                        }`}>Custom Built Stand</span>
                        <h3 className={`text-base font-bold ${formData.boothType === 'RAW_SPACE' ? 'text-white' : 'text-archive-charcoal'}`}>
                          Raw Space
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className={`text-lg font-black ${formData.boothType === 'RAW_SPACE' ? 'text-white' : 'text-archive-charcoal'}`}>
                          US$ 350
                        </span>
                        <span className={`text-[10px] block ${formData.boothType === 'RAW_SPACE' ? 'text-white/80' : 'text-gray-500'}`}>
                          per sq.m.
                        </span>
                      </div>
                    </div>
                    <p className={`text-xs leading-relaxed ${formData.boothType === 'RAW_SPACE' ? 'text-white/95' : 'text-gray-600'}`}>
                      Bare space for customized designer booth construction. Recommended for 18 sq.m. and larger. Wall construction is exhibitor responsibility.
                    </p>
                    <div className={`text-[11px] font-medium ${
                      formData.boothType === 'RAW_SPACE' ? 'text-white/85' : 'text-gray-500'
                    }`}>
                      Height allowance: 3.5m / 12ft (No double-decker)
                    </div>
                  </div>
                </div>

                {/* Booth Dimensions */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between text-xs">
                    <label className="font-bold text-archive-charcoal uppercase">
                      Select Booth Size (Sq.m.)
                    </label>
                    <span className="text-gray-500">Selected: {effectiveSize} sq.m.</span>
                  </div>

                  <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                    {STANDARD_SIZES.map((size) => {
                      const isDisabled = formData.boothType === 'RAW_SPACE' && size < 12;
                      const isSelected = !isCustomSizeActive && formData.boothSize === size;
                      return (
                        <button
                          key={size}
                          type="button"
                          disabled={isDisabled}
                          onClick={() => {
                            setIsCustomSizeActive(false);
                            setFormData((p) => ({ ...p, boothSize: size }));
                          }}
                          className={`py-2 text-xs font-bold rounded border transition-all ${
                            isDisabled
                              ? 'opacity-30 cursor-not-allowed bg-gray-50 border-gray-200 text-gray-400'
                              : isSelected
                              ? 'bg-archive-clay text-white border-archive-clay shadow-sm'
                              : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                          }`}
                        >
                          {size}m²
                        </button>
                      );
                    })}
                  </div>

                  {/* Custom Size Toggle */}
                  <div className="flex items-center gap-3 pt-1 text-xs">
                    <button
                      type="button"
                      onClick={() => setIsCustomSizeActive(!isCustomSizeActive)}
                      className="text-archive-clay font-bold hover:underline"
                    >
                      {isCustomSizeActive ? 'Use standard sizes' : '+ Specify other custom size'}
                    </button>
                    {isCustomSizeActive && (
                      <div className="flex items-center gap-1.5">
                        <input
                          type="number"
                          name="customSize"
                          min={formData.boothType === 'RAW_SPACE' ? 12 : 9}
                          value={formData.customSize}
                          onChange={handleChange}
                          placeholder="e.g. 60"
                          className="w-20 px-2 py-1 text-xs border border-gray-300 rounded font-bold text-center"
                        />
                        <span className="text-gray-500">sq. m.</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Open Sides Preference */}
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <label className="text-xs font-bold text-archive-charcoal uppercase block">
                    Stall Open Sides Preference
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    {[
                      { id: '1-side', label: '1 Side Open' },
                      { id: '2-side-corner', label: '2 Sides (Corner)' },
                      { id: '3-side-peninsula', label: '3 Sides (Peninsula)' },
                      { id: '4-side-island', label: '4 Sides (Island)' }
                    ].map((s) => (
                      <label
                        key={s.id}
                        className={`cursor-pointer p-2.5 rounded border text-center transition-all ${
                          formData.openSides === s.id
                            ? 'border-archive-clay bg-archive-clay text-white font-bold shadow-sm'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="openSides"
                          value={s.id}
                          checked={formData.openSides === s.id}
                          onChange={(e) => setFormData((p) => ({ ...p, openSides: e.target.value as any }))}
                          className="sr-only"
                        />
                        <span>{s.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* CLEAN INVOICE SUMMARY BOX */}
                <div className="bg-[#2F2C2C] text-white rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-archive-clay">
                      Live Participation Fee Breakdown
                    </span>
                    <div className="text-xs text-gray-300">
                      {formData.boothType === 'RAW_SPACE' ? 'Raw Space' : 'Shell Scheme'} ({effectiveSize}m²) × US$ {currentRate}/m² × {formData.selectedShows.length} Show(s)
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-gray-400 block uppercase">Total Rental Cost</span>
                    <span className="text-2xl font-black text-white">
                      US$ {totalCostUSD.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 1 Continue button */}
              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-6 py-3 rounded-lg bg-archive-charcoal hover:bg-archive-clay text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Continue to Company Details</span>
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════
              STEP 2: COMPANY INFORMATION & STATUTORY DETAILS
          ═════════════════════════════════════════════════════════ */}
          {activeStep === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
                <div className="pb-3 border-b border-gray-100 flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-bold text-archive-charcoal uppercase tracking-wide">
                      Company Contact & Registration Information
                    </h2>
                    <p className="text-xs text-gray-500 mt-0.5">
                      To be filled in block letters. As required on directory listings and official badge passes.
                    </p>
                  </div>
                  <span className="text-[11px] text-gray-400 font-mono">BLOCK LETTERS</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {/* Company Name */}
                  <div className="md:col-span-2 space-y-1">
                    <label className="font-bold text-archive-charcoal uppercase">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="E.G. APEX TEXTILE MILLS LIMITED"
                      className={`w-full px-3.5 py-2.5 rounded-lg border bg-[#FAF8F5] uppercase font-semibold text-archive-charcoal focus:bg-white focus:outline-none focus:ring-1 focus:ring-archive-clay ${
                        errors.companyName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.companyName && <p className="text-red-500 text-[11px]">{errors.companyName}</p>}
                  </div>

                  {/* Representative 1 */}
                  <div className="space-y-1">
                    <label className="font-bold text-archive-charcoal uppercase">
                      Company Representative 1 *
                    </label>
                    <input
                      type="text"
                      name="representative1Name"
                      value={formData.representative1Name}
                      onChange={handleChange}
                      placeholder="PRIMARY CONTACT FULL NAME"
                      className={`w-full px-3.5 py-2.5 rounded-lg border bg-[#FAF8F5] uppercase font-semibold text-archive-charcoal focus:bg-white focus:outline-none focus:ring-1 focus:ring-archive-clay ${
                        errors.representative1Name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.representative1Name && <p className="text-red-500 text-[11px]">{errors.representative1Name}</p>}
                  </div>

                  {/* Designation 1 */}
                  <div className="space-y-1">
                    <label className="font-bold text-archive-charcoal uppercase">
                      Designation 1 *
                    </label>
                    <input
                      type="text"
                      name="representative1Designation"
                      value={formData.representative1Designation}
                      onChange={handleChange}
                      placeholder="MANAGING DIRECTOR / VP EXPORTS"
                      className={`w-full px-3.5 py-2.5 rounded-lg border bg-[#FAF8F5] uppercase font-semibold text-archive-charcoal focus:bg-white focus:outline-none focus:ring-1 focus:ring-archive-clay ${
                        errors.representative1Designation ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.representative1Designation && <p className="text-red-500 text-[11px]">{errors.representative1Designation}</p>}
                  </div>

                  {/* Representative 2 */}
                  <div className="space-y-1">
                    <label className="font-bold text-gray-600 uppercase">
                      Company Representative 2 (Optional)
                    </label>
                    <input
                      type="text"
                      name="representative2Name"
                      value={formData.representative2Name}
                      onChange={handleChange}
                      placeholder="SECOND DELEGATE FULL NAME"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-[#FAF8F5] uppercase font-semibold text-archive-charcoal focus:bg-white focus:outline-none focus:ring-1 focus:ring-archive-clay"
                    />
                  </div>

                  {/* Designation 2 */}
                  <div className="space-y-1">
                    <label className="font-bold text-gray-600 uppercase">
                      Designation 2
                    </label>
                    <input
                      type="text"
                      name="representative2Designation"
                      value={formData.representative2Designation}
                      onChange={handleChange}
                      placeholder="GENERAL MANAGER"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-[#FAF8F5] uppercase font-semibold text-archive-charcoal focus:bg-white focus:outline-none focus:ring-1 focus:ring-archive-clay"
                    />
                  </div>

                  {/* Address */}
                  <div className="md:col-span-2 space-y-1">
                    <label className="font-bold text-archive-charcoal uppercase">
                      Registered Address *
                    </label>
                    <textarea
                      rows={2}
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="STREET ADDRESS, INDUSTRIAL AREA, POST BOX"
                      className={`w-full px-3.5 py-2 rounded-lg border bg-[#FAF8F5] uppercase font-semibold text-archive-charcoal focus:bg-white focus:outline-none focus:ring-1 focus:ring-archive-clay ${
                        errors.address ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.address && <p className="text-red-500 text-[11px]">{errors.address}</p>}
                  </div>

                  {/* City */}
                  <div className="space-y-1">
                    <label className="font-bold text-archive-charcoal uppercase">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="CITY"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-[#FAF8F5] uppercase font-semibold text-archive-charcoal focus:bg-white focus:outline-none focus:ring-1 focus:ring-archive-clay"
                    />
                  </div>

                  {/* State */}
                  <div className="space-y-1">
                    <label className="font-bold text-archive-charcoal uppercase">State / Province</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="STATE"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-[#FAF8F5] uppercase font-semibold text-archive-charcoal focus:bg-white focus:outline-none focus:ring-1 focus:ring-archive-clay"
                    />
                  </div>

                  {/* Postal Code */}
                  <div className="space-y-1">
                    <label className="font-bold text-archive-charcoal uppercase">Postal Code / Zip</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      placeholder="POSTAL CODE"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-[#FAF8F5] uppercase font-semibold text-archive-charcoal focus:bg-white focus:outline-none focus:ring-1 focus:ring-archive-clay"
                    />
                  </div>

                  {/* Country */}
                  <div className="space-y-1">
                    <label className="font-bold text-archive-charcoal uppercase">Country *</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white font-semibold text-archive-charcoal focus:outline-none focus:ring-1 focus:ring-archive-clay"
                    >
                      {COUNTRIES_LIST.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Phone & Mobile */}
                  <div className="space-y-1">
                    <label className="font-bold text-archive-charcoal uppercase">Telephone</label>
                    <input
                      type="text"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="+XX XXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-[#FAF8F5] font-semibold text-archive-charcoal focus:bg-white focus:outline-none focus:ring-1 focus:ring-archive-clay"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-archive-charcoal uppercase">Mobile *</label>
                    <input
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="+XX XXXXXXXXXX"
                      className={`w-full px-3.5 py-2.5 rounded-lg border bg-[#FAF8F5] font-semibold text-archive-charcoal focus:bg-white focus:outline-none focus:ring-1 focus:ring-archive-clay ${
                        errors.mobile ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.mobile && <p className="text-red-500 text-[11px]">{errors.mobile}</p>}
                  </div>

                  {/* E-mails */}
                  <div className="space-y-1">
                    <label className="font-bold text-archive-charcoal uppercase">Primary E-mail *</label>
                    <input
                      type="email"
                      name="email1"
                      value={formData.email1}
                      onChange={handleChange}
                      placeholder="info@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg border bg-[#FAF8F5] font-semibold text-archive-charcoal focus:bg-white focus:outline-none focus:ring-1 focus:ring-archive-clay ${
                        errors.email1 ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email1 && <p className="text-red-500 text-[11px]">{errors.email1}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-archive-charcoal uppercase">Secondary E-mail</label>
                    <input
                      type="email"
                      name="email2"
                      value={formData.email2}
                      onChange={handleChange}
                      placeholder="accounts@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-[#FAF8F5] font-semibold text-archive-charcoal focus:bg-white focus:outline-none focus:ring-1 focus:ring-archive-clay"
                    />
                  </div>

                  {/* Website */}
                  <div className="md:col-span-2 space-y-1">
                    <label className="font-bold text-archive-charcoal uppercase">Website</label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://www.company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-[#FAF8F5] font-semibold text-archive-charcoal focus:bg-white focus:outline-none focus:ring-1 focus:ring-archive-clay"
                    />
                  </div>
                </div>

                {/* TYPE OF COMPANY */}
                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <label className="text-xs font-bold text-archive-charcoal uppercase block">
                    Type of Company
                  </label>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {COMPANY_TYPES.map((type) => {
                      const isChecked = formData.companyType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData((p) => ({ ...p, companyType: type }))}
                          className={`px-3 py-1.5 rounded-full border transition-all ${
                            isChecked
                              ? 'border-archive-clay bg-archive-clay text-white font-bold shadow-xs'
                              : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>

                  {formData.companyType === 'Others' && (
                    <input
                      type="text"
                      name="companyTypeOther"
                      value={formData.companyTypeOther}
                      onChange={handleChange}
                      placeholder="Please specify company legal entity"
                      className="w-full mt-2 px-3 py-2 text-xs border border-gray-300 rounded"
                    />
                  )}
                </div>

                {/* INDIAN STATUTORY SECTION */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-archive-charcoal">
                      <input
                        type="checkbox"
                        checked={formData.isIndianExhibitor}
                        onChange={(e) => setFormData((p) => ({ ...p, isIndianExhibitor: e.target.checked }))}
                        className="rounded accent-[#EE7539] text-archive-clay w-4 h-4"
                      />
                      <span>Indian Exhibitor Statutory Fields (Mandatory for Indian companies)</span>
                    </label>
                  </div>

                  {formData.isIndianExhibitor && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 text-xs">
                      <div>
                        <label className="font-semibold text-gray-700 block mb-1">GST No. *</label>
                        <input
                          type="text"
                          name="gstNo"
                          value={formData.gstNo}
                          onChange={handleChange}
                          placeholder="27AAAAA0000A1Z5"
                          className="w-full px-3 py-2 border border-gray-300 rounded uppercase font-mono text-xs"
                        />
                        {errors.gstNo && <span className="text-red-500 text-[10px]">{errors.gstNo}</span>}
                      </div>

                      <div>
                        <label className="font-semibold text-gray-700 block mb-1">IEC Code *</label>
                        <input
                          type="text"
                          name="iecCode"
                          value={formData.iecCode}
                          onChange={handleChange}
                          placeholder="10-DIGIT IEC"
                          className="w-full px-3 py-2 border border-gray-300 rounded uppercase font-mono text-xs"
                        />
                        {errors.iecCode && <span className="text-red-500 text-[10px]">{errors.iecCode}</span>}
                      </div>

                      <div>
                        <label className="font-semibold text-gray-700 block mb-1">UAM / MSME No.</label>
                        <input
                          type="text"
                          name="uamMsmeNo"
                          value={formData.uamMsmeNo}
                          onChange={handleChange}
                          placeholder="UDYAM-XX-00-0000000"
                          className="w-full px-3 py-2 border border-gray-300 rounded uppercase font-mono text-xs"
                        />
                      </div>

                      <div>
                        <label className="font-semibold text-gray-700 block mb-1">DIN / CIN No.</label>
                        <input
                          type="text"
                          name="dinCinNo"
                          value={formData.dinCinNo}
                          onChange={handleChange}
                          placeholder="U17110MH..."
                          className="w-full px-3 py-2 border border-gray-300 rounded uppercase font-mono text-xs"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-5 py-2.5 rounded-lg border border-gray-300 hover:border-gray-500 text-gray-700 text-xs font-bold uppercase transition-all flex items-center gap-1.5"
                >
                  <ChevronLeft size={15} /> Back
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-6 py-3 rounded-lg bg-archive-charcoal hover:bg-archive-clay text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <span>Continue to Product Profile</span>
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════
              STEP 3: PRODUCT PROFILE & MARKET SPECIFICATIONS
          ═════════════════════════════════════════════════════════ */}
          {activeStep === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
                <div className="pb-3 border-b border-gray-100">
                  <h2 className="text-base font-bold text-archive-charcoal uppercase tracking-wide">
                    Exhibit Products & Profile
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Categorize your collections for the official exhibition directory and buyer match-making.
                  </p>
                </div>

                {/* Company Profile Textarea */}
                <div className="space-y-1 text-xs">
                  <label className="font-bold text-archive-charcoal uppercase block">
                    Company Profile (Block Letters)
                  </label>
                  <textarea
                    rows={3}
                    name="companyProfile"
                    value={formData.companyProfile}
                    onChange={handleChange}
                    placeholder="BRIEF COMPANY SUMMARY, EXPORT VOLUMES, SPECIALISATIONS..."
                    className="w-full px-3.5 py-2 rounded-lg border border-gray-300 bg-[#FAF8F5] uppercase text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-archive-clay font-medium"
                  />
                </div>

                {/* Brand Name */}
                <div className="space-y-1 text-xs">
                  <label className="font-bold text-archive-charcoal uppercase block">
                    Company Brand Name (If any)
                  </label>
                  <input
                    type="text"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleChange}
                    placeholder="REGISTERED BRAND OR TRADEMARK NAME"
                    className="w-full px-3.5 py-2 rounded-lg border border-gray-300 bg-[#FAF8F5] uppercase text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-archive-clay font-medium"
                  />
                </div>

                {/* Product Categories */}
                <div className="space-y-2 pt-2 border-t border-gray-100 text-xs">
                  <label className="font-bold text-archive-charcoal uppercase block">
                    Product Category (Select all applicable)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                    {PRODUCT_CATEGORIES.map((cat) => {
                      const isChecked = formData.productCategories.includes(cat);
                      return (
                        <div
                          key={cat}
                          onClick={() => handleToggleItem('productCategories', cat)}
                          className={`cursor-pointer px-3 py-2 rounded border transition-all flex items-center justify-between ${
                            isChecked
                              ? 'border-archive-clay bg-archive-clay text-white font-bold shadow-sm'
                              : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                          }`}
                        >
                          <span className="truncate">{cat}</span>
                          {isChecked && <Check size={13} className="text-white shrink-0" strokeWidth={2.5} />}
                        </div>
                      );
                    })}
                  </div>
                  <input
                    type="text"
                    name="productCategoryOther"
                    value={formData.productCategoryOther}
                    onChange={handleChange}
                    placeholder="Other product categories (please specify)"
                    className="w-full mt-1 px-3 py-1.5 border border-gray-300 rounded text-xs"
                  />
                </div>

                {/* Category Wear */}
                <div className="space-y-2 pt-2 border-t border-gray-100 text-xs">
                  <label className="font-bold text-archive-charcoal uppercase block">Category Wear</label>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORY_WEAR.map((wear) => {
                      const isChecked = formData.categoryWear.includes(wear);
                      return (
                        <button
                          key={wear}
                          type="button"
                          onClick={() => handleToggleItem('categoryWear', wear)}
                          className={`px-3 py-1.5 rounded border transition-all ${
                            isChecked
                              ? 'border-archive-clay bg-archive-clay text-white font-bold shadow-sm'
                              : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                          }`}
                        >
                          {wear}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Nature of Business */}
                <div className="space-y-2 pt-2 border-t border-gray-100 text-xs">
                  <label className="font-bold text-archive-charcoal uppercase block">Nature of Business</label>
                  <div className="flex flex-wrap gap-2">
                    {NATURE_OF_BUSINESS.map((nob) => {
                      const isChecked = formData.natureOfBusiness.includes(nob);
                      return (
                        <button
                          key={nob}
                          type="button"
                          onClick={() => handleToggleItem('natureOfBusiness', nob)}
                          className={`px-3 py-1.5 rounded border transition-all ${
                            isChecked
                              ? 'border-archive-clay bg-archive-clay text-white font-bold shadow-sm'
                              : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                          }`}
                        >
                          {nob}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Target Buyers & Export Markets */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-gray-100 text-xs">
                  <div className="space-y-2">
                    <label className="font-bold text-archive-charcoal uppercase block">Target Buyers</label>
                    <div className="space-y-1.5">
                      {TARGET_BUYERS.map((tb) => {
                        const isChecked = formData.targetBuyers.includes(tb);
                        return (
                          <div
                            key={tb}
                            onClick={() => handleToggleItem('targetBuyers', tb)}
                            className={`cursor-pointer px-3 py-1.5 rounded border flex items-center justify-between transition-all ${
                              isChecked
                                ? 'border-archive-clay bg-archive-clay text-white font-bold shadow-sm'
                                : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                            }`}
                          >
                            <span>{tb}</span>
                            {isChecked && <Check size={12} className="text-white shrink-0" strokeWidth={2.5} />}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold text-archive-charcoal uppercase block">
                      Target Export Markets (List below)
                    </label>
                    <textarea
                      rows={4}
                      name="targetExportMarkets"
                      value={formData.targetExportMarkets}
                      onChange={handleChange}
                      placeholder="E.G. USA, UK, EUROPE (GERMANY, FRANCE, ITALY), UAE, AUSTRALIA, JAPAN..."
                      className="w-full px-3 py-2 border border-gray-300 rounded text-xs uppercase"
                    />
                  </div>
                </div>

                {/* Certifications */}
                <div className="space-y-2 pt-2 border-t border-gray-100 text-xs">
                  <label className="font-bold text-archive-charcoal uppercase block">
                    Certifications & Accreditations
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {CERTIFICATIONS.map((cert) => {
                      const isChecked = formData.certifications.includes(cert);
                      return (
                        <button
                          key={cert}
                          type="button"
                          onClick={() => handleToggleItem('certifications', cert)}
                          className={`px-2.5 py-1 text-xs rounded border transition-all ${
                            isChecked
                              ? 'border-archive-clay bg-archive-clay text-white font-bold shadow-sm'
                              : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                          }`}
                        >
                          {cert}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-5 py-2.5 rounded-lg border border-gray-300 hover:border-gray-500 text-gray-700 text-xs font-bold uppercase transition-all flex items-center gap-1.5"
                >
                  <ChevronLeft size={15} /> Back
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-6 py-3 rounded-lg bg-archive-charcoal hover:bg-archive-clay text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <span>Review & Complete Application</span>
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════
              STEP 4: CONTRACT TERMS, DECLARATION & SUBMISSION
          ═════════════════════════════════════════════════════════ */}
          {activeStep === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
                <div className="pb-3 border-b border-gray-100">
                  <h2 className="text-base font-bold text-archive-charcoal uppercase tracking-wide">
                    Application Review & Formal Declaration
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Review your application summary and confirm authorized signatory approval.
                  </p>
                </div>

                {/* EXECUTIVE SUMMARY TABLE */}
                <div className="bg-gray-50 rounded-lg p-5 text-xs space-y-3">
                  <div className="font-bold uppercase tracking-wider text-archive-charcoal border-b border-gray-200 pb-2">
                    Application Summary
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                    <div>
                      <span className="text-gray-500 block">Exhibiting Company:</span>
                      <span className="font-bold text-archive-charcoal uppercase">{formData.companyName || 'Not specified'}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Primary Contact:</span>
                      <span className="font-semibold">{formData.representative1Name} ({formData.representative1Designation})</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Selected Shows:</span>
                      <div className="font-semibold text-archive-charcoal mt-0.5">
                        {formData.selectedShows.map((id) => SHOW_EDITIONS.find((s) => s.id === id)?.name).join(', ')}
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Booth Reservation:</span>
                      <span className="font-bold text-archive-clay">
                        {formData.boothType === 'RAW_SPACE' ? 'Raw Space' : 'Shell Scheme'} ({effectiveSize} sq.m.)
                      </span>
                      <span className="block text-gray-900 font-black mt-0.5">
                        Total Investment: US$ {totalCostUSD.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* COLLAPSIBLE CONTRACT TECHNICAL RULES */}
                <div className="bg-gray-50 rounded-lg overflow-hidden text-xs">
                  <button
                    type="button"
                    onClick={() => setShowNotesAccordion(!showNotesAccordion)}
                    className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 flex items-center justify-between text-left font-bold uppercase text-archive-charcoal transition-colors"
                  >
                    <span>Important Notes & Technical Rules (Click to {showNotesAccordion ? 'hide' : 'view'})</span>
                    {showNotesAccordion ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>

                  {showNotesAccordion && (
                    <div className="p-4 space-y-2 text-gray-600 leading-relaxed bg-white border-t border-gray-200">
                      <p>• <strong>Max Height:</strong> 3.5m / 12ft only for customised booths. Double Decker booths strictly prohibited.</p>
                      <p>• <strong>Electrical Supply:</strong> Billed separately on additional chargeable basis.</p>
                      <p>• <strong>Wall Construction:</strong> Customised booths must construct their own walls; cannot use adjoining stands.</p>
                      <p>• <strong>Open Sides:</strong> Must not obstruct neighboring booths on any open sides.</p>
                      <p>• <strong>Contractor Deadline:</strong> Design submission mandatory 30 days prior to move-in from empaneled list.</p>
                      <p>• <strong>No Change in Booth Type:</strong> Space type cannot be altered once finalized with payment.</p>
                    </div>
                  )}
                </div>

                {/* CONTRACTOR NOMINATION (OPTIONAL) */}
                <div className="text-xs space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer font-bold text-gray-700">
                    <input
                      type="checkbox"
                      checked={formData.appointContractor}
                      onChange={(e) => setFormData((p) => ({ ...p, appointContractor: e.target.checked }))}
                      className="rounded accent-[#EE7539] text-archive-clay w-4 h-4"
                    />
                    <span>We are appointing an independent booth contractor</span>
                  </label>

                  {formData.appointContractor && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                      <input
                        type="text"
                        name="contractorCompany"
                        value={formData.contractorCompany}
                        onChange={handleChange}
                        placeholder="Agency Name"
                        className="px-3 py-2 border border-gray-300 rounded uppercase"
                      />
                      <input
                        type="text"
                        name="contractorPerson"
                        value={formData.contractorPerson}
                        onChange={handleChange}
                        placeholder="Supervisor Name"
                        className="px-3 py-2 border border-gray-300 rounded uppercase"
                      />
                      <input
                        type="text"
                        name="contractorPhone"
                        value={formData.contractorPhone}
                        onChange={handleChange}
                        placeholder="Phone / Mobile"
                        className="px-3 py-2 border border-gray-300 rounded"
                      />
                      <input
                        type="email"
                        name="contractorEmail"
                        value={formData.contractorEmail}
                        onChange={handleChange}
                        placeholder="Email"
                        className="px-3 py-2 border border-gray-300 rounded"
                      />
                    </div>
                  )}
                </div>

                {/* AUTHORIZED SIGNATORY */}
                <div className="pt-4 border-t border-gray-100 space-y-4 text-xs">
                  <div className="font-bold uppercase tracking-wider text-archive-charcoal">
                    Authorized Signatory
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <label className="font-semibold text-gray-700">Signatory Full Name *</label>
                      <input
                        type="text"
                        name="signatoryName"
                        value={formData.signatoryName}
                        onChange={handleChange}
                        placeholder="FULL NAME"
                        className={`w-full px-3 py-2 border rounded uppercase ${
                          errors.signatoryName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.signatoryName && <span className="text-red-500 text-[11px]">{errors.signatoryName}</span>}
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-gray-700">Designation</label>
                      <input
                        type="text"
                        name="signatoryDesignation"
                        value={formData.signatoryDesignation}
                        onChange={handleChange}
                        placeholder="DIRECTOR / CEO"
                        className="w-full px-3 py-2 border border-gray-300 rounded uppercase"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-gray-700">Date</label>
                      <input
                        type="date"
                        name="signatoryDate"
                        value={formData.signatoryDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700"
                      />
                    </div>
                  </div>

                  {/* Terms acceptance checkbox */}
                  <label className={`flex items-start gap-2.5 p-3 rounded-lg cursor-pointer transition-all ${
                    formData.agreeTerms
                      ? 'bg-archive-clay/[0.08] ring-1 ring-archive-clay/30'
                      : 'bg-gray-50'
                  }`}>
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData((p) => ({ ...p, agreeTerms: e.target.checked }))}
                      className="rounded accent-[#EE7539] text-archive-clay mt-0.5 w-4 h-4"
                    />
                    <span className="text-gray-700 text-xs font-medium">
                      I/We hereby apply for exhibition space as specified above and agree to abide by all the Rules, Regulations, Technical Specifications, and Payment Terms of Intex South Asia & ASEAN shows.
                    </span>
                  </label>
                  {errors.agreeTerms && <p className="text-red-500 text-[11px]">{errors.agreeTerms}</p>}
                </div>
              </div>

              {/* Submit / Back Action Bar */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-5 py-2.5 rounded-lg border border-gray-300 hover:border-gray-500 text-gray-700 text-xs font-bold uppercase transition-all flex items-center gap-1.5"
                >
                  <ChevronLeft size={15} /> Back
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 rounded-lg bg-archive-clay hover:bg-archive-charcoal text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Submit Space Application</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

export default BoothApplicationPage;
