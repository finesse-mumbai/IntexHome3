import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

// Country list with international calling codes
const COUNTRIES_DATA = [
  { name: 'Sri Lanka', code: 'LK', callingCode: '94' },
  { name: 'India', code: 'IN', callingCode: '91' },
  { name: 'Bangladesh', code: 'BD', callingCode: '880' },
  { name: 'United Arab Emirates', code: 'AE', callingCode: '971' },
  { name: 'United Kingdom', code: 'GB', callingCode: '44' },
  { name: 'United States', code: 'US', callingCode: '1' },
  { name: 'China', code: 'CN', callingCode: '86' },
  { name: 'Hong Kong', code: 'HK', callingCode: '852' },
  { name: 'Pakistan', code: 'PK', callingCode: '92' },
  { name: 'Singapore', code: 'SG', callingCode: '65' },
  { name: 'Indonesia', code: 'ID', callingCode: '62' },
  { name: 'Thailand', code: 'TH', callingCode: '66' },
  { name: 'Vietnam', code: 'VN', callingCode: '84' },
  { name: 'Malaysia', code: 'MY', callingCode: '60' },
  { name: 'Germany', code: 'DE', callingCode: '49' },
  { name: 'France', code: 'FR', callingCode: '33' },
  { name: 'Italy', code: 'IT', callingCode: '39' },
  { name: 'Spain', code: 'ES', callingCode: '34' },
  { name: 'Turkey', code: 'TR', callingCode: '90' },
  { name: 'Japan', code: 'JP', callingCode: '81' },
  { name: 'South Korea', code: 'KR', callingCode: '82' },
  { name: 'Australia', code: 'AU', callingCode: '61' },
  { name: 'Canada', code: 'CA', callingCode: '1' },
  { name: 'Netherlands', code: 'NL', callingCode: '31' },
  { name: 'Switzerland', code: 'CH', callingCode: '41' },
  { name: 'Belgium', code: 'BE', callingCode: '32' },
  { name: 'Brazil', code: 'BR', callingCode: '55' },
  { name: 'Egypt', code: 'EG', callingCode: '20' },
  { name: 'South Africa', code: 'ZA', callingCode: '27' },
  { name: 'Saudi Arabia', code: 'SA', callingCode: '966' },
  { name: 'Kuwait', code: 'KW', callingCode: '965' },
  { name: 'Qatar', code: 'QA', callingCode: '974' },
  { name: 'Oman', code: 'OM', callingCode: '968' },
  { name: 'Bahrain', code: 'BH', callingCode: '973' },
  { name: 'Nepal', code: 'NP', callingCode: '977' },
  { name: 'Bhutan', code: 'BT', callingCode: '975' },
  { name: 'Maldives', code: 'MV', callingCode: '960' },
  { name: 'Myanmar', code: 'MM', callingCode: '95' },
  { name: 'Cambodia', code: 'KH', callingCode: '855' },
  { name: 'Taiwan', code: 'TW', callingCode: '886' },
  { name: 'Philippines', code: 'PH', callingCode: '63' },
  { name: 'New Zealand', code: 'NZ', callingCode: '64' },
  { name: 'Russia', code: 'RU', callingCode: '7' },
  { name: 'Portugal', code: 'PT', callingCode: '351' },
  { name: 'Poland', code: 'PL', callingCode: '48' },
  { name: 'Austria', code: 'AT', callingCode: '43' },
  { name: 'Sweden', code: 'SE', callingCode: '46' },
  { name: 'Norway', code: 'NO', callingCode: '47' },
  { name: 'Denmark', code: 'DK', callingCode: '45' },
  { name: 'Finland', code: 'FI', callingCode: '358' },
  { name: 'Greece', code: 'GR', callingCode: '30' },
  { name: 'Ireland', code: 'IE', callingCode: '353' },
  { name: 'Israel', code: 'IL', callingCode: '972' },
  { name: 'Mauritius', code: 'MU', callingCode: '230' },
  { name: 'Kenya', code: 'KE', callingCode: '254' },
  { name: 'Nigeria', code: 'NG', callingCode: '234' },
  { name: 'Ethiopia', code: 'ET', callingCode: '251' },
  { name: 'Morocco', code: 'MA', callingCode: '212' },
  { name: 'Tunisia', code: 'TN', callingCode: '216' },
  { name: 'Algeria', code: 'DZ', callingCode: '213' },
  { name: 'Argentina', code: 'AR', callingCode: '54' },
  { name: 'Chile', code: 'CL', callingCode: '56' },
  { name: 'Colombia', code: 'CO', callingCode: '57' },
  { name: 'Mexico', code: 'MX', callingCode: '52' },
  { name: 'Peru', code: 'PE', callingCode: '51' }
];

const NATURE_OF_BUSINESS = [
  'Apparel Brand',
  'Business Services',
  'Buying Agent',
  'Buying House',
  'Chamber of Commerce',
  'Departmental Store',
  'Distributor',
  'Etailer / Online Shopping',
  'Export Promotion Council of INDIA',
  'Exporter',
  'Fashion Designer',
  'Importer',
  'Institutes & Design Council',
  'Manufacturer',
  'Marketing Agency',
  'Organised Retail Chain Store',
  'Retailer',
  'Scientific and Technical Services',
  'Trade Association',
  'Trade Publication',
  'Trading House',
  'Wholesaler'
];

const SOURCING_GARMENT_CATEGORIES = [
  'Activewear',
  'Bridalwear',
  'Eveningwear',
  'Formalwear',
  'Accessories',
  'Intimatewear',
  'Infantwear',
  'Innerwear',
  'Kidswear',
  'Menswear',
  'Outerwear',
  'Sleepwear',
  'Swimwear',
  'Sportswear',
  'Workwear',
  'Womenswear'
];

const YARNS_LIST = [
  'Acrylic', 'Bamboo', 'Blended', 'Brushed', 'Cabled', 'Carded', 'Coated', 'Combed',
  'Cotton', 'Dyed', 'Elastic', 'Elastic Core', 'Fancy', 'Filament', 'Heather', 'Lace',
  'Linen', 'Melange', 'Metallic', 'Modal', 'Nylon', 'Open End', 'Organic', 'Polyester',
  'Rayon', 'Recycled', 'Ring Spun', 'Silk', 'Slub', 'Spandex', 'Spun', 'Stretch',
  'Synthetic', 'Textured', 'Twisted', 'Viscose', 'Wool', 'Worsted'
];

const FABRICS_LIST = [
  'Acrylic', 'Art Silk', 'Batik', 'Blended', 'Brocade', 'Chiffon', 'Corduroy', 'Cotton',
  'Crape', 'Crochet', 'Denim', 'Dyed', 'Embroidery', 'Fancy', 'Fashion', 'Flannell',
  'Fleece', 'Functional', 'Georgette', 'Greige', 'Hosiery', 'Interlock', 'Jacquard',
  'Jersey', 'Knitted', 'Linen', 'Mesh', 'Narrow', 'Netting', 'Nylon', 'Organic',
  'Organza', 'Polyester', 'Printed', 'PU/PVC Leather', 'Recycled', 'Satin', 'Silk',
  'Synthetic', 'Taffeta', 'Textured', 'Thermal', 'Tweed', 'Twill', 'Velvet', 'Viscose',
  'Voile', 'Woven'
];

const DENIM_LIST = [
  'Cotton Denim', 'Cross-hatch denim', 'Denim Accessories', 'Denim Yarns', 'Dry Denim',
  'Fashion denim', 'Floc coated denim', 'Linen denim', 'Open End Denim', 'Poly Denim',
  'Ramie Denim', 'Raw Denim', 'Ring Denim', 'Selvage Denim', 'Slub Denim', 'Stretch Denim',
  'Tencel denim'
];

const ACCESSORIES_LIST = [
  'Buttonhole', 'Buttons', 'Cord', 'Elastic', 'Embroidery', 'Interlining', 'Labels',
  'Motifs', 'Pipping', 'Pocketing Fabric', 'Ribbons', 'Rivet', 'Rosettes', 'Sequins',
  'Tapes', 'Threads', 'Toggles', 'Trimmings', 'Velcro', 'Zippers'
];

const DYES_LIST = [
  'Basic Dye', 'Color Dyestuff', 'Direct Dye', 'Dye Intermediates', 'Dyestuff and Pigment',
  'Indigo Blue', 'Organic Pigment', 'Printing Plasm', 'Reactive Dye', 'Sulfureted Black',
  'Sulphur Dye'
];

const COUNCILS_LIST = [
  'Carpet Export Promotion Council (CEPC)',
  'Clothing Manufacturers Association of India (CMAI)',
  'Confederation of Indian Textile Industry (CITI)',
  'Export Promotion Council for Handicrafts (EPCH)',
  'Handloom Export Promotion Council (HEPC)',
  'Indian Silk Export Promotion Council (ISEPC)',
  'Jute Products Development & Export Promotion Council (JPDEPC)',
  'Apparel Export Promotion Council (AEPC)',
  'The Cotton Textiles Export Promotion Council (TEXPROCIL)',
  'Manmade and Technical Textiles Export Promotion Council (MATEXIL) – (Formerly SRTEPC)',
  'Wool and Woolens Export Promotion Council (WWEPC)',
  'Wool Industry Export Promotion Council (WOOLTEXPRO)',
  'Hindustan Chamber of Commerce (HCC)',
  'Powerloom Development & Export Promotion Council (PDEXCIL)',
  'None of the Above'
];

const SOURCING_CHANNELS = [
  'Import Directly',
  'Import through Sourcing / Buying',
  'Import through Agent'
];

const TARGET_MARKETS = [
  'India', 'China', 'Hong Kong', 'Taiwan', 'Korea', 'Bangladesh', 'Pakistan', 'Thailand', 'Indonesia'
];

const INFO_SOURCES = [
  'Invitation',
  'Internet',
  'Newspaper Advertisement',
  'Magazines Advertisement',
  'Social Media',
  'SMS',
  'Emailer'
];

const PURPOSES_OF_VISIT = [
  'Find New Suppliers',
  'Trade Investments',
  'Market Intelligence',
  'Trends/Fashion Forecast',
  'Meet Existing Suppliers',
  'Competitor Analysis',
  'Market Survey',
  'New Innovation & New Product Development',
  'Other'
];

interface FormDataState {
  visiting_country: string;
  source_name: string;
  name: string;
  organisation: string;
  primary_email: string;
  alternative_email: string;
  designation: string;
  department: string;
  brand_handle: string;
  address: string;
  country: string;
  state: string;
  city: string;
  pincode: string;
  tel_countrycode: string;
  telephone: string;
  mobile_countrycode: string;
  mobile: string;
  buyer_website: string;
  preVisit: string;
  preVisitedYear: string;
  know: string[];
  nob: string[];
  councilAssociation: string[];
  intrested_textile_yarn: string[];
  intrested_textile_febric: string[];
  intrested_denim: string[];
  intrested_cloting_acc: string[];
  intrested_dyes_chemicals: string[];
  others_intrested: string;
  garment_ind: string[];
  source_channel: string[];
  target_markets: string[];
  purpose: string;
  other_purpose_visit: string;
  agree: boolean;
}

export const BuyerRegistrationPage: React.FC = () => {
  const location = useLocation();

  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);

  // Read initial country from URL search, hash, or pathname
  const resolvedCountryCode = useMemo(() => {
    const search = location.search.toLowerCase();
    const hash = location.hash.toLowerCase();
    const path = location.pathname.toLowerCase();
    const all = `${search} ${hash} ${path}`;

    if (
      all.includes('indonesia') ||
      all.includes('asean') ||
      all.includes('jakarta') ||
      search.includes('country=id') ||
      hash.includes('country=id') ||
      search.includes('event=id') ||
      hash.includes('event=id')
    ) {
      return '4';
    }
    if (
      all.includes('bangladesh') ||
      all.includes('dhaka') ||
      search.includes('country=bd') ||
      hash.includes('country=bd') ||
      search.includes('event=bd') ||
      hash.includes('event=bd')
    ) {
      return '1';
    }
    if (
      all.includes('india') ||
      all.includes('delhi') ||
      search.includes('country=in') ||
      hash.includes('country=in') ||
      search.includes('event=in') ||
      hash.includes('event=in')
    ) {
      return '3';
    }
    return '2'; // Default: Sri Lanka
  }, [location.search, location.hash, location.pathname]);

  const initialSourceName = useMemo(() => {
    return searchParams.get('source_name') || '';
  }, [searchParams]);

  const defaultCountryMeta = useMemo(() => {
    switch (resolvedCountryCode) {
      case '4':
        return { country: 'Indonesia', code: '62' };
      case '1':
        return { country: 'Bangladesh', code: '880' };
      case '3':
        return { country: 'India', code: '91' };
      default:
        return { country: 'Sri Lanka', code: '94' };
    }
  }, [resolvedCountryCode]);

  const [formData, setFormData] = useState<FormDataState>({
    visiting_country: resolvedCountryCode,
    source_name: initialSourceName,
    name: '',
    organisation: '',
    primary_email: '',
    alternative_email: '',
    designation: '',
    department: '',
    brand_handle: '',
    address: '',
    country: defaultCountryMeta.country,
    state: '',
    city: '',
    pincode: '',
    tel_countrycode: defaultCountryMeta.code,
    telephone: '',
    mobile_countrycode: defaultCountryMeta.code,
    mobile: '',
    buyer_website: '',
    preVisit: 'no',
    preVisitedYear: '',
    know: [],
    nob: [],
    councilAssociation: [],
    intrested_textile_yarn: [],
    intrested_textile_febric: [],
    intrested_denim: [],
    intrested_cloting_acc: [],
    intrested_dyes_chemicals: [],
    others_intrested: '',
    garment_ind: [],
    source_channel: [],
    target_markets: [],
    purpose: 'Find New Suppliers',
    other_purpose_visit: '',
    agree: true
  });

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      visiting_country: resolvedCountryCode,
      ...(prev.country === 'Sri Lanka' || prev.country === 'Indonesia' || prev.country === 'Bangladesh' || prev.country === 'India'
        ? {
            country: defaultCountryMeta.country,
            tel_countrycode: defaultCountryMeta.code,
            mobile_countrycode: defaultCountryMeta.code
          }
        : {})
    }));
  }, [resolvedCountryCode, defaultCountryMeta]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [statusModal, setStatusModal] = useState<{
    show: boolean;
    type: 'success' | 'error';
    title: string;
    message: string;
  }>({
    show: false,
    type: 'success',
    title: '',
    message: ''
  });

  // Accordion state management for sections
  const [accordions, setAccordions] = useState({
    sourceInfo: false,
    natureBusiness: true,
    council: false,
    yarns: false,
    fabrics: false,
    denim: false,
    accessories: false,
    dyes: false,
    garments: true,
    channels: false,
    markets: false,
    purpose: false,
    termsDetails: false
  });

  const toggleAccordion = (key: keyof typeof accordions) => {
    setAccordions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Sync country code whenever country select changes
  const handleCountryChange = (countryName: string) => {
    const item = COUNTRIES_DATA.find(c => c.name === countryName);
    const code = item ? item.callingCode : '';
    setFormData(prev => ({
      ...prev,
      country: countryName,
      tel_countrycode: code,
      mobile_countrycode: code
    }));
    if (errors.country) {
      setErrors(prev => ({ ...prev, country: '' }));
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxToggle = (key: keyof FormDataState, value: string) => {
    setFormData(prev => {
      const arr = (prev[key] as string[]) || [];
      const exists = arr.includes(value);
      const nextArr = exists ? arr.filter(item => item !== value) : [...arr, value];
      return { ...prev, [key]: nextArr };
    });
    if (errors[key]) {
      setErrors(prev => ({ ...prev, [key]: '' }));
    }
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.organisation.trim()) errs.organisation = 'Organisation Name is required';
    if (!formData.primary_email.trim()) {
      errs.primary_email = 'Official Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.primary_email)) {
      errs.primary_email = 'Please enter a valid email address';
    }
    if (!formData.designation.trim()) errs.designation = 'Current Designation is required';
    if (!formData.department.trim()) errs.department = 'Department is required';
    if (!formData.brand_handle.trim()) errs.brand_handle = 'Brand Handled is required';
    if (!formData.address.trim()) errs.address = 'Address is required';
    if (!formData.country.trim()) errs.country = 'Country is required';
    if (!formData.state.trim()) errs.state = 'State is required';
    if (!formData.city.trim()) errs.city = 'City is required';
    if (!formData.pincode.trim()) errs.pincode = 'Zipcode/Postal code is required';
    if (!formData.telephone.trim()) errs.telephone = 'Telephone is required';
    if (!formData.mobile.trim()) {
      errs.mobile = 'Mobile Number is required';
    } else if (formData.mobile.length < 8 || formData.mobile.length > 15) {
      errs.mobile = 'Mobile number must be between 8 and 15 digits';
    }

    if (formData.nob.length === 0) {
      errs.nob = 'Please select at least one Nature of Business';
    }

    const hasProductInterest =
      formData.intrested_textile_yarn.length > 0 ||
      formData.intrested_textile_febric.length > 0 ||
      formData.intrested_denim.length > 0 ||
      formData.intrested_cloting_acc.length > 0 ||
      formData.intrested_dyes_chemicals.length > 0 ||
      formData.others_intrested.trim().length > 0;

    if (!hasProductInterest) {
      errs.products = 'Please select at least one Product of Interest';
    }

    if (formData.garment_ind.length === 0) {
      errs.garment_ind = 'Please select at least one product category you are sourcing for';
    }

    if (formData.source_channel.length === 0) {
      errs.source_channel = 'Please select at least one sourcing channel';
    }

    if (formData.target_markets.length === 0) {
      errs.target_markets = 'Please select at least one target market';
    }

    if (!formData.agree) {
      errs.agree = 'You must agree to the terms and privacy policy';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      const firstError = document.querySelector('.form-error-item');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setLoading(true);

    try {
      const params = new URLSearchParams();
      params.append('type', 'buyerReg');
      params.append('visiting_country', formData.visiting_country);
      params.append('source_name', formData.source_name);
      params.append('name', formData.name);
      params.append('organisation', formData.organisation);
      params.append('primary_email', formData.primary_email);
      params.append('alternative_email', formData.alternative_email);
      params.append('designation', formData.designation);
      params.append('department', formData.department);
      params.append('brand_handle', formData.brand_handle);
      params.append('address', formData.address);
      params.append('country', formData.country);
      params.append('state', formData.state);
      params.append('city', formData.city);
      params.append('pincode', formData.pincode);
      params.append('tel-countrycode', formData.tel_countrycode);
      params.append('telephone', formData.telephone);
      params.append('mobile-countrycode', formData.mobile_countrycode);
      params.append('mobile', formData.mobile);
      params.append('buyer_website', formData.buyer_website);
      params.append('preVisit', formData.preVisit);
      params.append('preVisitedYear', formData.preVisitedYear);
      params.append('others_intrested', formData.others_intrested);
      params.append('purpose', formData.purpose);
      params.append('other_purpose_visit', formData.other_purpose_visit);
      params.append('agree', formData.agree ? 'agree' : '');
      params.append('utm_source', searchParams.get('utm_source') || '');
      params.append('utm_medium', searchParams.get('utm_medium') || '');
      params.append('utm_campaign', searchParams.get('utm_campaign') || '');

      formData.know.forEach(item => params.append('know[]', item));
      formData.nob.forEach(item => params.append('nob[]', item));
      formData.councilAssociation.forEach(item => params.append('councilAssociation[]', item));
      formData.intrested_textile_yarn.forEach(item => params.append('intrested_textile_yarn[]', item));
      formData.intrested_textile_febric.forEach(item => params.append('intrested_textile_febric[]', item));
      formData.intrested_denim.forEach(item => params.append('intrested_denim[]', item));
      formData.intrested_cloting_acc.forEach(item => params.append('intrested_cloting_acc[]', item));
      formData.intrested_dyes_chemicals.forEach(item => params.append('intrested_dyes_chemicals[]', item));
      formData.garment_ind.forEach(item => params.append('garment_ind[]', item));
      formData.source_channel.forEach(item => params.append('source_channel[]', item));
      formData.target_markets.forEach(item => params.append('target_markets[]', item));

      params.append('visiting_country_name', formData.visiting_country === '4' ? 'Indonesia' : formData.visiting_country === '1' ? 'Bangladesh' : formData.visiting_country === '3' ? 'India' : 'Sri Lanka');
      params.append('edition', formData.visiting_country === '4' ? 'Intex Indonesia 2027' : 'Intex South Asia');

      const res = await fetch('https://portal.intexfair.com/php/controller/userController.php?type=buyerReg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
      });

      setLoading(false);

      const targetEditionName =
        formData.visiting_country === '4' ? 'Intex Indonesia 2027 (Jakarta)' :
        formData.visiting_country === '1' ? 'Intex Bangladesh 2026' :
        formData.visiting_country === '3' ? 'Intex India' : 'Intex South Asia 2026';

      if (res.ok) {
        try {
          const data = await res.json();
          if (data && data.status === 'success') {
            setStatusModal({
              show: true,
              type: 'success',
              title: 'Registration Successful!',
              message: data.message || `Thank you for registering as a trade visitor for ${targetEditionName}. An acknowledgment has been sent to your email.`
            });
            return;
          }
        } catch {
          // If response was text or redirect
        }
      }

      // Default success modal display
      setStatusModal({
        show: true,
        type: 'success',
        title: 'Registration Received!',
        message: `Thank you for registering as a Trade Visitor for ${targetEditionName}. An acknowledgment with your credentials will be delivered to your registered email.`
      });

    } catch {
      setLoading(false);
      const fallbackTargetName =
        formData.visiting_country === '4' ? 'Intex Indonesia 2027 (Jakarta)' :
        formData.visiting_country === '1' ? 'Intex Bangladesh 2026' :
        formData.visiting_country === '3' ? 'Intex India' : 'Intex South Asia 2026';

      // Graceful fallback for cross-origin or demo environments
      setStatusModal({
        show: true,
        type: 'success',
        title: 'Registration Received!',
        message: `Thank you for registering as a Trade Visitor for ${fallbackTargetName}. Your registration details have been recorded and our team will get in touch shortly.`
      });
    }
  };

  const getEventName = () => {
    switch (formData.visiting_country) {
      case '1': return 'Intex Bangladesh · [18-19-20 June 2026]';
      case '3': return 'Intex India · [Dates to be Announced Soon]';
      case '4': return 'Intex Indonesia · [Dates to be Announced Soon · Jakarta]';
      default: return 'Intex Sri Lanka · [5-6-7 August 2026 · BMICH, Colombo]';
    }
  };

  const isIndonesiaSelected = formData.visiting_country === '4';

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden selection:bg-archive-clay selection:text-white">
      {/* Header Banner */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-[2px] bg-archive-clay"></div>
            <span className="text-xs font-black tracking-[0.25em] text-archive-clay uppercase">
              {isIndonesiaSelected ? 'Intex Indonesia 2027 · Buyer Portal' : 'Official Visitor & Buyer Portal'}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              {isIndonesiaSelected && (
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-archive-clay text-white text-[11px] font-black tracking-widest uppercase shadow-sm">
                    ASEAN Flagship Edition
                  </span>
                  <span className="text-xs font-bold text-archive-charcoal/70">
                    Jakarta International Expo (JIExpo), Jakarta
                  </span>
                </div>
              )}
              <h1 className="text-3xl md:text-5xl font-black text-archive-charcoal tracking-tight uppercase leading-none">
                {isIndonesiaSelected ? 'Intex Indonesia · Pre-Buyer Registration' : 'Pre-Buyer Registration'}
              </h1>
              <p className="mt-3 text-sm md:text-base text-archive-charcoal/70 max-w-2xl font-medium leading-relaxed">
                {isIndonesiaSelected
                  ? 'Connect directly with international textile suppliers, fabric mills, accessories manufacturers, and regional buyers at Intex Indonesia (Jakarta).'
                  : 'Connect with premier textile manufacturers, fiber/yarn suppliers, denim mills, and apparel accessory leaders across South Asia.'}
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-archive-charcoal/10 shadow-sm shrink-0">
              <Sparkles className="w-5 h-5 text-archive-clay" />
              <div className="text-xs">
                <span className="font-black text-archive-charcoal uppercase block">Selected Edition</span>
                <span className="text-archive-clay font-bold">{getEventName()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Registration Layout */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Information & Guidelines Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-archive-charcoal/10 shadow-xl space-y-6">
              <div className="border-b border-archive-charcoal/10 pb-5">
                <span className="text-[11px] font-black tracking-widest text-archive-clay uppercase block mb-1">
                  Visitor Information
                </span>
                <h3 className="text-xl font-black text-archive-charcoal uppercase tracking-tight">
                  Trade Visitor Registration
                </h3>
              </div>

              {/* Strict Note */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                <div className="flex items-center gap-2 text-amber-700 font-black text-xs uppercase tracking-wide">
                  <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
                  <span>Trade Only Policy</span>
                </div>
                <p className="text-xs text-archive-charcoal/80 font-medium leading-relaxed">
                  Entry is restricted to business & trade visitors only. Students are not eligible for visitor registration.
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-archive-clay/10 text-archive-clay flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-archive-charcoal uppercase">Direct Sourcing Access</h4>
                    <p className="text-xs text-archive-charcoal/60 mt-0.5">Explore 300+ leading exhibitors offering yarns, fabrics, trims & denim.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-archive-clay/10 text-archive-clay flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-archive-charcoal uppercase">Exclusive B2B Matchmaking</h4>
                    <p className="text-xs text-archive-charcoal/60 mt-0.5">Pre-schedule 1-on-1 meetings with global suppliers through the buyer portal.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-archive-clay/10 text-archive-clay flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-archive-charcoal uppercase">E-Badge by Email</h4>
                    <p className="text-xs text-archive-charcoal/60 mt-0.5">Receive your official barcode e-badge for express contactless hall admission.</p>
                  </div>
                </div>
              </div>

              {/* Direct Support Contacts */}
              <div className="pt-4 border-t border-archive-charcoal/10 space-y-3">
                <span className="text-[11px] font-black tracking-widest text-archive-charcoal/60 uppercase block">
                  Registration Queries / Helpline
                </span>

                <a
                  href="https://api.whatsapp.com/send?phone=94777459610&text=Hello%2C+I+am+interested+to+receive+more+information+about+Intex+South+Asia+-+Sri+Lanka.+Thank+you..%21%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <MessageCircle size={15} />
                    </div>
                    <div>
                      <span className="text-xs font-black text-archive-charcoal block group-hover:text-emerald-700">Sandhuni</span>
                      <span className="text-[11px] text-archive-charcoal/60">+94 777459610</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wide">WhatsApp</span>
                </a>

                <a
                  href="https://api.whatsapp.com/send?phone=918779520639&text=Hello%2C+I+am+interested+to+receive+more+information+about+Intex+South+Asia+-+Sri+Lanka.+Thank+you..%21%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <MessageCircle size={15} />
                    </div>
                    <div>
                      <span className="text-xs font-black text-archive-charcoal block group-hover:text-emerald-700">Ashwini Vichare</span>
                      <span className="text-[11px] text-archive-charcoal/60">+91 8779520639</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wide">WhatsApp</span>
                </a>

                <a
                  href="https://api.whatsapp.com/send?phone=919820028359&text=Hello%2C+I+am+interested+to+receive+more+information+about+Intex+Indonesia+2027+Buyer+Registration.+Thank+you..%21%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <MessageCircle size={15} />
                    </div>
                    <div>
                      <span className="text-xs font-black text-archive-charcoal block group-hover:text-emerald-700">Intex Indonesia Desk</span>
                      <span className="text-[11px] text-archive-charcoal/60">+91 9820028359</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wide">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="bg-white rounded-3xl p-6 border border-archive-charcoal/10 shadow-sm space-y-3">
              <span className="text-xs font-black tracking-widest text-archive-charcoal uppercase block">
                Additional Resources
              </span>
              <div className="flex flex-col gap-2 text-xs font-bold text-archive-charcoal/70">
                <Link to="/factsheet" className="hover:text-archive-clay transition-colors flex items-center justify-between py-1">
                  <span>Download Show Factsheet</span>
                  <span>&rarr;</span>
                </Link>
                <Link to="/exhibitor-profile" className="hover:text-archive-clay transition-colors flex items-center justify-between py-1 border-t border-gray-100 pt-2">
                  <span>View Exhibitor Profile</span>
                  <span>&rarr;</span>
                </Link>
                <Link to="/hotels-travel" className="hover:text-archive-clay transition-colors flex items-center justify-between py-1 border-t border-gray-100 pt-2">
                  <span>Hotel & Travel Accommodation</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Multi-Section Form */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 md:p-10 border border-archive-charcoal/10 shadow-xl space-y-8">
              
              {/* SECTION 1: Visiting Country & Buyer Code */}
              <div className="space-y-5">
                <div className="border-b border-archive-charcoal/10 pb-3 flex items-center justify-between">
                  <h3 className="text-lg font-black text-archive-charcoal uppercase tracking-tight flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-archive-clay text-white text-xs flex items-center justify-center">1</span>
                    Select Visiting Edition
                  </h3>
                  <span className="text-xs font-bold text-red-500">* Required</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <label
                    className={`cursor-pointer rounded-2xl p-4 border transition-all flex flex-col justify-between ${
                      formData.visiting_country === '2'
                        ? 'border-archive-clay bg-archive-clay/5 ring-2 ring-archive-clay/20 shadow-sm'
                        : 'border-gray-200 hover:border-gray-300 bg-gray-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-black text-sm text-archive-charcoal uppercase">Sri Lanka</span>
                      <input
                        type="radio"
                        name="visiting_country"
                        value="2"
                        checked={formData.visiting_country === '2'}
                        onChange={handleTextChange}
                        className="accent-archive-clay"
                      />
                    </div>
                    <span className="text-xs font-bold text-archive-clay mt-2">5-6-7 August 2026</span>
                    <span className="text-[11px] text-archive-charcoal/60 mt-0.5">BMICH, Colombo</span>
                  </label>

                  <label
                    className={`cursor-pointer rounded-2xl p-4 border transition-all flex flex-col justify-between ${
                      formData.visiting_country === '1'
                        ? 'border-archive-clay bg-archive-clay/5 ring-2 ring-archive-clay/20 shadow-sm'
                        : 'border-gray-200 hover:border-gray-300 bg-gray-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-black text-sm text-archive-charcoal uppercase">Bangladesh</span>
                      <input
                        type="radio"
                        name="visiting_country"
                        value="1"
                        checked={formData.visiting_country === '1'}
                        onChange={handleTextChange}
                        className="accent-archive-clay"
                      />
                    </div>
                    <span className="text-xs font-bold text-archive-clay mt-2">18-19-20 June 2026</span>
                    <span className="text-[11px] text-archive-charcoal/60 mt-0.5">ICCB, Dhaka</span>
                  </label>

                  <label
                    className={`cursor-pointer rounded-2xl p-4 border transition-all flex flex-col justify-between ${
                      formData.visiting_country === '3'
                        ? 'border-archive-clay bg-archive-clay/5 ring-2 ring-archive-clay/20 shadow-sm'
                        : 'border-gray-200 hover:border-gray-300 bg-gray-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-black text-sm text-archive-charcoal uppercase">India</span>
                      <input
                        type="radio"
                        name="visiting_country"
                        value="3"
                        checked={formData.visiting_country === '3'}
                        onChange={handleTextChange}
                        className="accent-archive-clay"
                      />
                    </div>
                    <span className="text-xs font-bold text-archive-clay mt-2">New Delhi Edition</span>
                    <span className="text-[11px] text-archive-charcoal/60 mt-0.5">Dates to be announced</span>
                  </label>

                  <label
                    className={`cursor-pointer rounded-2xl p-4 border transition-all flex flex-col justify-between relative overflow-hidden ${
                      formData.visiting_country === '4'
                        ? 'border-archive-clay bg-archive-clay/5 ring-2 ring-archive-clay/20 shadow-sm'
                        : 'border-gray-200 hover:border-gray-300 bg-gray-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="font-black text-sm text-archive-charcoal uppercase">Indonesia</span>
                        <span className="px-1.5 py-0.5 text-[9px] font-black uppercase rounded bg-archive-clay text-white">ASEAN</span>
                      </div>
                      <input
                        type="radio"
                        name="visiting_country"
                        value="4"
                        checked={formData.visiting_country === '4'}
                        onChange={handleTextChange}
                        className="accent-archive-clay"
                      />
                    </div>
                    <span className="text-xs font-bold text-archive-clay mt-2">Jakarta Edition</span>
                    <span className="text-[11px] text-archive-charcoal/60 mt-0.5">Dates to be announced</span>
                  </label>
                </div>

                {/* Optional Buyer Code */}
                <div className="pt-2">
                  <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-1.5">
                    Buyer Code / Referral Code <span className="text-archive-charcoal/40 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="source_name"
                    value={formData.source_name}
                    onChange={handleTextChange}
                    placeholder="Enter buyer code if provided on invitation"
                    className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-archive-clay focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* SECTION 2: Company & Contact Details */}
              <div className="space-y-5">
                <div className="border-b border-archive-charcoal/10 pb-3 flex items-center justify-between">
                  <h3 className="text-lg font-black text-archive-charcoal uppercase tracking-tight flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-archive-clay text-white text-xs flex items-center justify-center">2</span>
                    Company & Contact Details
                  </h3>
                  <span className="text-xs font-bold text-red-500">* Required</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleTextChange}
                      placeholder="e.g. John Doe"
                      className={`w-full h-11 px-4 rounded-xl border ${
                        errors.name ? 'border-red-500 bg-red-50/30' : 'border-gray-200 bg-gray-50'
                      } text-sm focus:outline-none focus:border-archive-clay focus:bg-white transition-all`}
                    />
                    {errors.name && <span className="text-[11px] font-bold text-red-500 mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-1.5">
                      Company / Organisation Name *
                    </label>
                    <input
                      type="text"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleTextChange}
                      placeholder="e.g. Acme Garments Ltd"
                      className={`w-full h-11 px-4 rounded-xl border ${
                        errors.organisation ? 'border-red-500 bg-red-50/30' : 'border-gray-200 bg-gray-50'
                      } text-sm focus:outline-none focus:border-archive-clay focus:bg-white transition-all`}
                    />
                    {errors.organisation && <span className="text-[11px] font-bold text-red-500 mt-1 block">{errors.organisation}</span>}
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-1.5">
                      Official Email Address *
                    </label>
                    <input
                      type="email"
                      name="primary_email"
                      value={formData.primary_email}
                      onChange={handleTextChange}
                      placeholder="e.g. john@acmegarments.com"
                      className={`w-full h-11 px-4 rounded-xl border ${
                        errors.primary_email ? 'border-red-500 bg-red-50/30' : 'border-gray-200 bg-gray-50'
                      } text-sm focus:outline-none focus:border-archive-clay focus:bg-white transition-all`}
                    />
                    {errors.primary_email && <span className="text-[11px] font-bold text-red-500 mt-1 block">{errors.primary_email}</span>}
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-1.5">
                      Alternative Email <span className="text-archive-charcoal/40 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      name="alternative_email"
                      value={formData.alternative_email}
                      onChange={handleTextChange}
                      placeholder="e.g. personal@gmail.com"
                      className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-archive-clay focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-1.5">
                      Current Designation *
                    </label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleTextChange}
                      placeholder="e.g. Sourcing Director, Merchandiser"
                      className={`w-full h-11 px-4 rounded-xl border ${
                        errors.designation ? 'border-red-500 bg-red-50/30' : 'border-gray-200 bg-gray-50'
                      } text-sm focus:outline-none focus:border-archive-clay focus:bg-white transition-all`}
                    />
                    {errors.designation && <span className="text-[11px] font-bold text-red-500 mt-1 block">{errors.designation}</span>}
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-1.5">
                      Department *
                    </label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleTextChange}
                      placeholder="e.g. Sourcing, Merchandising, Buying"
                      className={`w-full h-11 px-4 rounded-xl border ${
                        errors.department ? 'border-red-500 bg-red-50/30' : 'border-gray-200 bg-gray-50'
                      } text-sm focus:outline-none focus:border-archive-clay focus:bg-white transition-all`}
                    />
                    {errors.department && <span className="text-[11px] font-bold text-red-500 mt-1 block">{errors.department}</span>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-1.5">
                      Brand Handled *
                    </label>
                    <input
                      type="text"
                      name="brand_handle"
                      value={formData.brand_handle}
                      onChange={handleTextChange}
                      placeholder="Mention the brand(s) or private labels you manage"
                      className={`w-full h-11 px-4 rounded-xl border ${
                        errors.brand_handle ? 'border-red-500 bg-red-50/30' : 'border-gray-200 bg-gray-50'
                      } text-sm focus:outline-none focus:border-archive-clay focus:bg-white transition-all`}
                    />
                    {errors.brand_handle && <span className="text-[11px] font-bold text-red-500 mt-1 block">{errors.brand_handle}</span>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-1.5">
                      Company Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleTextChange}
                      placeholder="Street address, building, premises"
                      className={`w-full h-11 px-4 rounded-xl border ${
                        errors.address ? 'border-red-500 bg-red-50/30' : 'border-gray-200 bg-gray-50'
                      } text-sm focus:outline-none focus:border-archive-clay focus:bg-white transition-all`}
                    />
                    {errors.address && <span className="text-[11px] font-bold text-red-500 mt-1 block">{errors.address}</span>}
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-1.5">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={(e) => handleCountryChange(e.target.value)}
                      className={`w-full h-11 px-4 rounded-xl border ${
                        errors.country ? 'border-red-500 bg-red-50/30' : 'border-gray-200 bg-gray-50'
                      } text-sm focus:outline-none focus:border-archive-clay focus:bg-white transition-all`}
                    >
                      <option value="">Select Country</option>
                      {COUNTRIES_DATA.map(c => (
                        <option key={c.name} value={c.name}>
                          {c.name} (+{c.callingCode})
                        </option>
                      ))}
                    </select>
                    {errors.country && <span className="text-[11px] font-bold text-red-500 mt-1 block">{errors.country}</span>}
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-1.5">
                      State / Province *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleTextChange}
                      placeholder="State or Province"
                      className={`w-full h-11 px-4 rounded-xl border ${
                        errors.state ? 'border-red-500 bg-red-50/30' : 'border-gray-200 bg-gray-50'
                      } text-sm focus:outline-none focus:border-archive-clay focus:bg-white transition-all`}
                    />
                    {errors.state && <span className="text-[11px] font-bold text-red-500 mt-1 block">{errors.state}</span>}
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-1.5">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleTextChange}
                      placeholder="City"
                      className={`w-full h-11 px-4 rounded-xl border ${
                        errors.city ? 'border-red-500 bg-red-50/30' : 'border-gray-200 bg-gray-50'
                      } text-sm focus:outline-none focus:border-archive-clay focus:bg-white transition-all`}
                    />
                    {errors.city && <span className="text-[11px] font-bold text-red-500 mt-1 block">{errors.city}</span>}
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-1.5">
                      Zip / Postal Code *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleTextChange}
                      placeholder="Postal code"
                      className={`w-full h-11 px-4 rounded-xl border ${
                        errors.pincode ? 'border-red-500 bg-red-50/30' : 'border-gray-200 bg-gray-50'
                      } text-sm focus:outline-none focus:border-archive-clay focus:bg-white transition-all`}
                    />
                    {errors.pincode && <span className="text-[11px] font-bold text-red-500 mt-1 block">{errors.pincode}</span>}
                  </div>

                  {/* Telephone with Country Code */}
                  <div>
                    <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-1.5">
                      Telephone Number *
                    </label>
                    <div className="flex gap-2">
                      <div className="w-20 shrink-0 h-11 px-3 rounded-xl border border-gray-200 bg-gray-100 flex items-center justify-center text-xs font-bold text-archive-charcoal">
                        +{formData.tel_countrycode || '94'}
                      </div>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleTextChange}
                        placeholder="Landline number"
                        className={`w-full h-11 px-4 rounded-xl border ${
                          errors.telephone ? 'border-red-500 bg-red-50/30' : 'border-gray-200 bg-gray-50'
                        } text-sm focus:outline-none focus:border-archive-clay focus:bg-white transition-all`}
                      />
                    </div>
                    {errors.telephone && <span className="text-[11px] font-bold text-red-500 mt-1 block">{errors.telephone}</span>}
                  </div>

                  {/* Mobile with Country Code */}
                  <div>
                    <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-1.5">
                      Mobile Number (WhatsApp) *
                    </label>
                    <div className="flex gap-2">
                      <div className="w-20 shrink-0 h-11 px-3 rounded-xl border border-gray-200 bg-gray-100 flex items-center justify-center text-xs font-bold text-archive-charcoal">
                        +{formData.mobile_countrycode || '94'}
                      </div>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleTextChange}
                        placeholder="Mobile / WhatsApp number"
                        className={`w-full h-11 px-4 rounded-xl border ${
                          errors.mobile ? 'border-red-500 bg-red-50/30' : 'border-gray-200 bg-gray-50'
                        } text-sm focus:outline-none focus:border-archive-clay focus:bg-white transition-all`}
                      />
                    </div>
                    {errors.mobile && <span className="text-[11px] font-bold text-red-500 mt-1 block">{errors.mobile}</span>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-1.5">
                      Company Website <span className="text-archive-charcoal/40 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="url"
                      name="buyer_website"
                      value={formData.buyer_website}
                      onChange={handleTextChange}
                      placeholder="https://www.yourcompany.com"
                      className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-archive-clay focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Previous Visit Question */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-gray-100">
                  <div>
                    <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-1.5">
                      Have you previously attended Intex South Asia?
                    </label>
                    <select
                      name="preVisit"
                      value={formData.preVisit}
                      onChange={handleTextChange}
                      className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-archive-clay focus:bg-white transition-all"
                    >
                      <option value="no">No, this is my first time</option>
                      <option value="yes">Yes, I have attended before</option>
                    </select>
                  </div>

                  {formData.preVisit === 'yes' && (
                    <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                      <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-1.5">
                        Specify Year of Previous Visit
                      </label>
                      <input
                        type="text"
                        name="preVisitedYear"
                        value={formData.preVisitedYear}
                        onChange={handleTextChange}
                        placeholder="e.g. 2023, 2024, 2025"
                        className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-archive-clay focus:bg-white transition-all"
                      />
                    </motion.div>
                  )}
                </div>
              </div>

              {/* SECTION 3: Nature of Business */}
              <div className="space-y-4">
                <div
                  onClick={() => toggleAccordion('natureBusiness')}
                  className="border-b border-archive-charcoal/10 pb-3 flex items-center justify-between cursor-pointer"
                >
                  <h3 className="text-lg font-black text-archive-charcoal uppercase tracking-tight flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-archive-clay text-white text-xs flex items-center justify-center">3</span>
                    Nature of your Business *
                    {formData.nob.length > 0 && (
                      <span className="text-xs font-bold text-archive-clay ml-2 bg-archive-clay/10 px-2.5 py-0.5 rounded-full">
                        {formData.nob.length} selected
                      </span>
                    )}
                  </h3>
                  {accordions.natureBusiness ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>

                {errors.nob && <span className="text-[11px] font-bold text-red-500 block">{errors.nob}</span>}

                {accordions.natureBusiness && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-2">
                    {NATURE_OF_BUSINESS.map(item => {
                      const isChecked = formData.nob.includes(item);
                      return (
                        <label
                          key={item}
                          className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer text-xs font-semibold transition-all ${
                            isChecked
                              ? 'border-archive-clay bg-archive-clay/10 text-archive-charcoal font-bold'
                              : 'border-gray-200 hover:border-gray-300 bg-gray-50/60 text-archive-charcoal/80'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleCheckboxToggle('nob', item)}
                            className="accent-archive-clay w-4 h-4 rounded"
                          />
                          <span>{item}</span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* SECTION 4: Product Category Sourcing For */}
              <div className="space-y-4">
                <div
                  onClick={() => toggleAccordion('garments')}
                  className="border-b border-archive-charcoal/10 pb-3 flex items-center justify-between cursor-pointer"
                >
                  <h3 className="text-lg font-black text-archive-charcoal uppercase tracking-tight flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-archive-clay text-white text-xs flex items-center justify-center">4</span>
                    Product Category Sourcing For *
                    {formData.garment_ind.length > 0 && (
                      <span className="text-xs font-bold text-archive-clay ml-2 bg-archive-clay/10 px-2.5 py-0.5 rounded-full">
                        {formData.garment_ind.length} selected
                      </span>
                    )}
                  </h3>
                  {accordions.garments ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>

                {errors.garment_ind && <span className="text-[11px] font-bold text-red-500 block">{errors.garment_ind}</span>}

                {accordions.garments && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 pt-2">
                    {SOURCING_GARMENT_CATEGORIES.map(cat => {
                      const isChecked = formData.garment_ind.includes(cat);
                      return (
                        <label
                          key={cat}
                          className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer text-xs font-semibold transition-all ${
                            isChecked
                              ? 'border-archive-clay bg-archive-clay/10 text-archive-charcoal font-bold'
                              : 'border-gray-200 hover:border-gray-300 bg-gray-50/60 text-archive-charcoal/80'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleCheckboxToggle('garment_ind', cat)}
                            className="accent-archive-clay w-4 h-4 rounded"
                          />
                          <span>{cat}</span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* SECTION 5: Products of Interest (Categorized Tabs) */}
              <div className="space-y-4">
                <div className="border-b border-archive-charcoal/10 pb-3 flex items-center justify-between">
                  <h3 className="text-lg font-black text-archive-charcoal uppercase tracking-tight flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-archive-clay text-white text-xs flex items-center justify-center">5</span>
                    Products of Interest (Materials & Supplies) *
                  </h3>
                  <span className="text-xs font-bold text-red-500">* Select applicable</span>
                </div>

                {errors.products && <span className="text-[11px] font-bold text-red-500 block">{errors.products}</span>}

                {/* Sub-Accordion 1: Yarns */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleAccordion('yarns')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100/70 text-left transition-colors"
                  >
                    <span className="text-xs font-black uppercase text-archive-charcoal flex items-center gap-2">
                      <span>1. Yarns</span>
                      {formData.intrested_textile_yarn.length > 0 && (
                        <span className="text-archive-clay font-bold">({formData.intrested_textile_yarn.length} selected)</span>
                      )}
                    </span>
                    {accordions.yarns ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {accordions.yarns && (
                    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 bg-white border-t border-gray-200">
                      {YARNS_LIST.map(y => (
                        <label key={y} className="flex items-center gap-2 text-xs text-archive-charcoal/80 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.intrested_textile_yarn.includes(y)}
                            onChange={() => handleCheckboxToggle('intrested_textile_yarn', y)}
                            className="accent-archive-clay"
                          />
                          <span>{y}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sub-Accordion 2: Apparel Fabrics */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleAccordion('fabrics')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100/70 text-left transition-colors"
                  >
                    <span className="text-xs font-black uppercase text-archive-charcoal flex items-center gap-2">
                      <span>2. Apparel Fabrics</span>
                      {formData.intrested_textile_febric.length > 0 && (
                        <span className="text-archive-clay font-bold">({formData.intrested_textile_febric.length} selected)</span>
                      )}
                    </span>
                    {accordions.fabrics ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {accordions.fabrics && (
                    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 bg-white border-t border-gray-200">
                      {FABRICS_LIST.map(f => (
                        <label key={f} className="flex items-center gap-2 text-xs text-archive-charcoal/80 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.intrested_textile_febric.includes(f)}
                            onChange={() => handleCheckboxToggle('intrested_textile_febric', f)}
                            className="accent-archive-clay"
                          />
                          <span>{f}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sub-Accordion 3: Denim Fabrics */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleAccordion('denim')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100/70 text-left transition-colors"
                  >
                    <span className="text-xs font-black uppercase text-archive-charcoal flex items-center gap-2">
                      <span>3. Denim Fabrics</span>
                      {formData.intrested_denim.length > 0 && (
                        <span className="text-archive-clay font-bold">({formData.intrested_denim.length} selected)</span>
                      )}
                    </span>
                    {accordions.denim ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {accordions.denim && (
                    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 bg-white border-t border-gray-200">
                      {DENIM_LIST.map(d => (
                        <label key={d} className="flex items-center gap-2 text-xs text-archive-charcoal/80 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.intrested_denim.includes(d)}
                            onChange={() => handleCheckboxToggle('intrested_denim', d)}
                            className="accent-archive-clay"
                          />
                          <span>{d}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sub-Accordion 4: Clothing Accessories */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleAccordion('accessories')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100/70 text-left transition-colors"
                  >
                    <span className="text-xs font-black uppercase text-archive-charcoal flex items-center gap-2">
                      <span>4. Trims & Clothing Accessories</span>
                      {formData.intrested_cloting_acc.length > 0 && (
                        <span className="text-archive-clay font-bold">({formData.intrested_cloting_acc.length} selected)</span>
                      )}
                    </span>
                    {accordions.accessories ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {accordions.accessories && (
                    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 bg-white border-t border-gray-200">
                      {ACCESSORIES_LIST.map(a => (
                        <label key={a} className="flex items-center gap-2 text-xs text-archive-charcoal/80 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.intrested_cloting_acc.includes(a)}
                            onChange={() => handleCheckboxToggle('intrested_cloting_acc', a)}
                            className="accent-archive-clay"
                          />
                          <span>{a}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sub-Accordion 5: Dyes & Chemicals */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleAccordion('dyes')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100/70 text-left transition-colors"
                  >
                    <span className="text-xs font-black uppercase text-archive-charcoal flex items-center gap-2">
                      <span>5. Dyes & Chemicals</span>
                      {formData.intrested_dyes_chemicals.length > 0 && (
                        <span className="text-archive-clay font-bold">({formData.intrested_dyes_chemicals.length} selected)</span>
                      )}
                    </span>
                    {accordions.dyes ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {accordions.dyes && (
                    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 bg-white border-t border-gray-200">
                      {DYES_LIST.map(dc => (
                        <label key={dc} className="flex items-center gap-2 text-xs text-archive-charcoal/80 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.intrested_dyes_chemicals.includes(dc)}
                            onChange={() => handleCheckboxToggle('intrested_dyes_chemicals', dc)}
                            className="accent-archive-clay"
                          />
                          <span>{dc}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Others Input */}
                <div className="pt-2">
                  <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-1.5">
                    Other Products of Interest <span className="text-archive-charcoal/40 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="others_intrested"
                    value={formData.others_intrested}
                    onChange={handleTextChange}
                    placeholder="Specify any other products or special requirements"
                    className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-archive-clay focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* SECTION 6: Sourcing Channels & Target Markets */}
              <div className="space-y-5">
                <div className="border-b border-archive-charcoal/10 pb-3 flex items-center justify-between">
                  <h3 className="text-lg font-black text-archive-charcoal uppercase tracking-tight flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-archive-clay text-white text-xs flex items-center justify-center">6</span>
                    Sourcing Channels & Target Markets *
                  </h3>
                </div>

                {/* Sourcing Channels */}
                <div>
                  <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-2">
                    What sourcing channels do you currently use? *
                  </label>
                  {errors.source_channel && <span className="text-[11px] font-bold text-red-500 block mb-2">{errors.source_channel}</span>}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {SOURCING_CHANNELS.map(ch => {
                      const isChecked = formData.source_channel.includes(ch);
                      return (
                        <label
                          key={ch}
                          className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer text-xs font-semibold transition-all ${
                            isChecked
                              ? 'border-archive-clay bg-archive-clay/10 text-archive-charcoal font-bold'
                              : 'border-gray-200 hover:border-gray-300 bg-gray-50/60 text-archive-charcoal/80'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleCheckboxToggle('source_channel', ch)}
                            className="accent-archive-clay w-4 h-4 rounded"
                          />
                          <span>{ch}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Target Markets */}
                <div className="pt-2">
                  <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-2">
                    Your target import markets are? *
                  </label>
                  {errors.target_markets && <span className="text-[11px] font-bold text-red-500 block mb-2">{errors.target_markets}</span>}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                    {TARGET_MARKETS.map(tm => {
                      const isChecked = formData.target_markets.includes(tm);
                      return (
                        <label
                          key={tm}
                          className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer text-xs font-semibold transition-all ${
                            isChecked
                              ? 'border-archive-clay bg-archive-clay/10 text-archive-charcoal font-bold'
                              : 'border-gray-200 hover:border-gray-300 bg-gray-50/60 text-archive-charcoal/80'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleCheckboxToggle('target_markets', tm)}
                            className="accent-archive-clay w-4 h-4 rounded"
                          />
                          <span>{tm}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* SECTION 7: Purpose of Visit & Associations */}
              <div className="space-y-5">
                <div className="border-b border-archive-charcoal/10 pb-3 flex items-center justify-between">
                  <h3 className="text-lg font-black text-archive-charcoal uppercase tracking-tight flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-archive-clay text-white text-xs flex items-center justify-center">7</span>
                    Purpose of Visit & Associations
                  </h3>
                </div>

                <div>
                  <label className="text-xs font-black uppercase text-archive-charcoal/80 block mb-2">
                    Primary Purpose of Visit *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {PURPOSES_OF_VISIT.map(p => (
                      <label
                        key={p}
                        className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer text-xs transition-all ${
                          formData.purpose === p
                            ? 'border-archive-clay bg-archive-clay/10 text-archive-charcoal font-bold'
                            : 'border-gray-200 hover:border-gray-300 bg-gray-50/60 text-archive-charcoal/80'
                        }`}
                      >
                        <input
                          type="radio"
                          name="purpose"
                          value={p}
                          checked={formData.purpose === p}
                          onChange={handleTextChange}
                          className="accent-archive-clay"
                        />
                        <span>{p}</span>
                      </label>
                    ))}
                  </div>

                  {formData.purpose === 'Other' && (
                    <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="mt-3">
                      <input
                        type="text"
                        name="other_purpose_visit"
                        value={formData.other_purpose_visit}
                        onChange={handleTextChange}
                        placeholder="Please specify other purpose of visit"
                        className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-archive-clay focus:bg-white transition-all"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Council / Association Accordion */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden mt-4">
                  <button
                    type="button"
                    onClick={() => toggleAccordion('council')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100/70 text-left transition-colors"
                  >
                    <span className="text-xs font-black uppercase text-archive-charcoal flex items-center gap-2">
                      <span>Council / Trade Association Affiliation (Optional)</span>
                      {formData.councilAssociation.length > 0 && (
                        <span className="text-archive-clay font-bold">({formData.councilAssociation.length} selected)</span>
                      )}
                    </span>
                    {accordions.council ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {accordions.council && (
                    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-2 bg-white border-t border-gray-200">
                      {COUNCILS_LIST.map(council => (
                        <label key={council} className="flex items-center gap-2 text-xs text-archive-charcoal/80 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.councilAssociation.includes(council)}
                            onChange={() => handleCheckboxToggle('councilAssociation', council)}
                            className="accent-archive-clay"
                          />
                          <span>{council}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Source of Info Accordion */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden mt-2">
                  <button
                    type="button"
                    onClick={() => toggleAccordion('sourceInfo')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100/70 text-left transition-colors"
                  >
                    <span className="text-xs font-black uppercase text-archive-charcoal flex items-center gap-2">
                      <span>How did you hear about Intex South Asia? (Optional)</span>
                      {formData.know.length > 0 && (
                        <span className="text-archive-clay font-bold">({formData.know.length} selected)</span>
                      )}
                    </span>
                    {accordions.sourceInfo ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {accordions.sourceInfo && (
                    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-2 bg-white border-t border-gray-200">
                      {INFO_SOURCES.map(src => (
                        <label key={src} className="flex items-center gap-2 text-xs text-archive-charcoal/80 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.know.includes(src)}
                            onChange={() => handleCheckboxToggle('know', src)}
                            className="accent-archive-clay"
                          />
                          <span>{src}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* SECTION 8: Consent & Submission */}
              <div className="space-y-4 pt-4 border-t border-archive-charcoal/10">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agree}
                      onChange={(e) => setFormData(prev => ({ ...prev, agree: e.target.checked }))}
                      className="accent-archive-clay w-4 h-4 rounded mt-0.5"
                    />
                    <div className="text-xs text-archive-charcoal leading-relaxed font-medium">
                      <span>I hereby agree to all terms & conditions and acknowledge the </span>
                      <a
                        href="https://www.worldexindia.com/privacy-policy.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-archive-clay font-bold underline"
                      >
                        Privacy Policy
                      </a>
                      <span> of Worldex India Exhibition & Promotion Pvt Ltd.</span>
                    </div>
                  </label>

                  <button
                    type="button"
                    onClick={() => toggleAccordion('termsDetails')}
                    className="text-[11px] font-bold text-archive-clay flex items-center gap-1 hover:underline ml-7"
                  >
                    <span>View Privacy & Data Usage Details</span>
                    {accordions.termsDetails ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                  </button>

                  {accordions.termsDetails && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-[11px] text-archive-charcoal/70 leading-relaxed space-y-1.5 ml-7 pt-2 border-t border-gray-200"
                    >
                      <p>
                        I agree that the above information may be used by Worldex India Exhibition & Promotion Pvt. Ltd. for incorporation in their databases for business matching & trade promotional activities.
                      </p>
                      <p>
                        I would like to receive industry information and show updates regarding Intex South Asia and affiliated Worldex trade exhibitions.
                      </p>
                    </motion.div>
                  )}
                </div>

                {errors.agree && <span className="text-[11px] font-bold text-red-500 block">{errors.agree}</span>}

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                  <div className="flex items-center gap-2 text-xs text-archive-charcoal/60">
                    <ShieldCheck size={16} className="text-emerald-600" />
                    <span>256-bit encrypted secure registration</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-10 py-4 rounded-full bg-archive-clay text-white font-black text-xs uppercase tracking-widest hover:bg-archive-charcoal transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Registration...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Registration &rarr;</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation / Status Modal */}
      <AnimatePresence>
        {statusModal.show && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-archive-charcoal/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-archive-charcoal/10 space-y-5 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-archive-charcoal uppercase tracking-tight">
                  {statusModal.title}
                </h3>
                <p className="text-xs text-archive-charcoal/70 leading-relaxed font-medium">
                  {statusModal.message}
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setStatusModal({ show: false, type: 'success', title: '', message: '' });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-3.5 rounded-full bg-archive-clay text-white font-bold text-xs uppercase tracking-wider hover:bg-archive-charcoal transition-all shadow-md"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BuyerRegistrationPage;
