import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send
} from 'lucide-react';

interface FormDataState {
  exhibit_country: string[];
  fname: string;
  designation: string;
  organisation: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  tel_countrycode: string;
  tel_citycode: string;
  telephone: string;
  mobile_countrycode: string;
  mobile: string;
  primary_email: string;
  alternative_email: string;
  website: string;
  product_cat: string[];
  product_cat_other: string;
  agree: boolean;
}

interface FormErrors {
  fname?: string;
  designation?: string;
  organisation?: string;
  city?: string;
  country?: string;
  mobile?: string;
  primary_email?: string;
  agree?: string;
}

const MediaRegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<FormDataState>({
    exhibit_country: ['Sri Lanka'],
    fname: '',
    designation: '',
    organisation: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    tel_countrycode: '',
    tel_citycode: '',
    telephone: '',
    mobile_countrycode: '',
    mobile: '',
    primary_email: '',
    alternative_email: '',
    website: '',
    product_cat: [],
    product_cat_other: '',
    agree: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
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
    message: '',
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.fname.trim()) {
      newErrors.fname = 'Name is required';
      isValid = false;
    }
    if (!formData.designation.trim()) {
      newErrors.designation = 'Designation is required';
      isValid = false;
    }
    if (!formData.organisation.trim()) {
      newErrors.organisation = 'Organisation is required';
      isValid = false;
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
      isValid = false;
    }
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
      isValid = false;
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
      isValid = false;
    }

    if (!formData.primary_email.trim()) {
      newErrors.primary_email = 'Primary email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.primary_email)) {
      newErrors.primary_email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.agree) {
      newErrors.agree = 'You must agree to the privacy policy terms';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;

      if (name === 'agree') {
        setFormData((prev) => ({ ...prev, agree: checked }));
        if (checked && errors.agree) {
          setErrors((prev) => ({ ...prev, agree: undefined }));
        }
      } else if (name === 'exhibit_country') {
        setFormData((prev) => {
          const list = checked
            ? [...prev.exhibit_country, value]
            : prev.exhibit_country.filter((item) => item !== value);
          return { ...prev, exhibit_country: list };
        });
      } else if (name === 'product_cat') {
        setFormData((prev) => {
          const list = checked
            ? [...prev.product_cat, value]
            : prev.product_cat.filter((item) => item !== value);
          return { ...prev, product_cat: list };
        });
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      const firstErrorElement = document.querySelector('.ring-red-500');
      if (firstErrorElement) {
        firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setLoading(true);

    try {
      const params = new URLSearchParams();
      params.append('fname', formData.fname);
      params.append('designation', formData.designation);
      params.append('organisation', formData.organisation);
      params.append('city', formData.city);
      params.append('state', formData.state);
      params.append('country', formData.country);
      params.append('pincode', formData.pincode);
      params.append('tel_countrycode', formData.tel_countrycode);
      params.append('tel_citycode', formData.tel_citycode);
      params.append('telephone', formData.telephone);
      params.append('mobile_countrycode', formData.mobile_countrycode);
      params.append('mobile', formData.mobile);
      params.append('primary_email', formData.primary_email);
      params.append('alternative_email', formData.alternative_email);
      params.append('website', formData.website);
      params.append('product_cat_other', formData.product_cat_other);
      params.append('agree', formData.agree ? 'agree' : '');

      formData.exhibit_country.forEach((country) => {
        params.append('exhibit_country[]', country);
      });

      formData.product_cat.forEach((cat) => {
        params.append('product_cat[]', cat);
      });

      const response = await fetch(
        'https://api.intexfair.com/response_media_sriLanka_next.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params.toString(),
        }
      );

      setLoading(false);

      if (response.ok) {
        setStatusModal({
          show: true,
          type: 'success',
          title: 'Registration successful!',
          message:
            'Thank you for showing interest in participating at the Intex 2024 Shows. We shall contact you soon with more details.',
        });
        setFormData({
          exhibit_country: ['Sri Lanka'],
          fname: '',
          designation: '',
          organisation: '',
          city: '',
          state: '',
          country: '',
          pincode: '',
          tel_countrycode: '',
          tel_citycode: '',
          telephone: '',
          mobile_countrycode: '',
          mobile: '',
          primary_email: '',
          alternative_email: '',
          website: '',
          product_cat: [],
          product_cat_other: '',
          agree: false,
        });
      } else {
        setStatusModal({
          show: true,
          type: 'error',
          title: 'Already registered',
          message: 'You have already registered for Intex media access.',
        });
      }
    } catch (err) {
      setLoading(false);
      setStatusModal({
        show: true,
        type: 'error',
        title: 'Registration submitted',
        message: 'Thank you for submitting your media registration. We will contact you soon.',
      });
    }
  };

  const EXHIBIT_LOCATIONS = [
    {
      id: 'bd',
      value: 'Bangladesh',
      label: 'Bangladesh',
      dates: '30 May - 31 May - 01 June, 2024',
      venue: 'ICCB, Dhaka'
    },
    {
      id: 'sl',
      value: 'Sri Lanka',
      label: 'Sri Lanka',
      dates: '7-8-9 August, 2024',
      venue: 'BMICH, Colombo'
    },
    {
      id: 'in',
      value: 'India',
      label: 'India',
      dates: 'Upcoming edition',
      venue: 'India edition'
    }
  ];

  const PRODUCT_CATEGORIES = [
    'Daily Newspaper',
    'Magazine',
    'News Agency',
    'Radio',
    'TV',
    'Trade media',
    'Online',
    'Others'
  ];

  const inputStyle = (hasError?: boolean) =>
    `w-full h-10 px-3 rounded-lg border-0 bg-gray-100 text-archive-charcoal text-sm placeholder-gray-400 focus:outline-none focus:ring-2 ${
      hasError ? 'ring-2 ring-red-500/80 bg-red-50/50' : 'focus:ring-archive-clay/40'
    } transition-all`;

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden selection:bg-archive-clay selection:text-white">
      {/* Header Banner */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-12">
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[2px] bg-archive-clay"></div>
              <span className="text-sm font-semibold text-archive-clay">
                Media registration form
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-archive-charcoal">
              Media registration
            </h1>
          </div>

          <p className="text-base text-archive-charcoal/80 max-w-3xl leading-relaxed">
            Since its launch in 2015, Intex has evolved into the region's most influential and largest international textile sourcing show in South Asia, with a strong presence across Sri Lanka, Bangladesh, and India.
          </p>
        </div>
      </section>

      {/* Main Form Container */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-archive-charcoal/10 shadow-xl p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-10">

            {/* Section 1: Select Exhibit Country */}
            <div className="space-y-4">
              <div className="border-b border-archive-charcoal/10 pb-3">
                {/* Size decreased by 30% (text-[17px] font-semibold) */}
                <h2 className="text-[17px] font-semibold text-archive-charcoal">
                  Select exhibit country:*
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {EXHIBIT_LOCATIONS.map((loc) => {
                  const isChecked = formData.exhibit_country.includes(loc.value);
                  return (
                    <label
                      key={loc.id}
                      className={`relative flex flex-col p-4 rounded-xl border-0 transition-all duration-300 cursor-pointer ${
                        isChecked
                          ? 'bg-archive-clay/10 text-archive-charcoal font-semibold shadow-sm'
                          : 'bg-gray-100 hover:bg-gray-200/70 text-archive-charcoal/80'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <span className="font-semibold text-base text-archive-charcoal">
                          {loc.label}
                        </span>
                        <input
                          type="checkbox"
                          name="exhibit_country"
                          value={loc.value}
                          checked={isChecked}
                          onChange={handleInputChange}
                          className="w-4 h-4 accent-archive-clay rounded cursor-pointer mt-1"
                        />
                      </div>
                      <span className="text-xs text-archive-clay">
                        [{loc.dates}]
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Section 2: Contact Information */}
            <div className="space-y-4">
              <div className="border-b border-archive-charcoal/10 pb-3">
                <h2 className="text-[17px] font-semibold text-archive-charcoal">
                  Personal & organisation details
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-archive-charcoal block">
                    Enter your name*
                  </label>
                  <input
                    type="text"
                    name="fname"
                    value={formData.fname}
                    onChange={handleInputChange}
                    placeholder="Enter your name*"
                    className={inputStyle(!!errors.fname)}
                  />
                  {errors.fname && (
                    <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.fname}
                    </p>
                  )}
                </div>

                {/* Designation */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-archive-charcoal block">
                    Enter your designation*
                  </label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    placeholder="Enter your designation*"
                    className={inputStyle(!!errors.designation)}
                  />
                  {errors.designation && (
                    <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.designation}
                    </p>
                  )}
                </div>

                {/* Organisation */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-archive-charcoal block">
                    Enter your organisation*
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleInputChange}
                    placeholder="Enter your organisation*"
                    className={inputStyle(!!errors.organisation)}
                  />
                  {errors.organisation && (
                    <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.organisation}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Section 3: Location Details */}
            <div className="space-y-4">
              <div className="border-b border-archive-charcoal/10 pb-3">
                <h2 className="text-[17px] font-semibold text-archive-charcoal">
                  Location information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* City */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-archive-charcoal block">
                    Enter your city*
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter your city*"
                    className={inputStyle(!!errors.city)}
                  />
                  {errors.city && (
                    <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.city}
                    </p>
                  )}
                </div>

                {/* Country */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-archive-charcoal block">
                    Enter your country name*
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="Enter your country name*"
                    className={inputStyle(!!errors.country)}
                  />
                  {errors.country && (
                    <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.country}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Section 4: Telephone & Mobile */}
            <div className="space-y-4">
              <div className="border-b border-archive-charcoal/10 pb-3">
                <h2 className="text-[17px] font-semibold text-archive-charcoal">
                  Telephone & mobile details
                </h2>
              </div>

              {/* Telephone */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-archive-charcoal block">
                  Telephone:*
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input
                    type="text"
                    name="tel_countrycode"
                    value={formData.tel_countrycode}
                    onChange={handleInputChange}
                    placeholder="Country Code"
                    className={inputStyle()}
                  />
                  <input
                    type="text"
                    name="tel_citycode"
                    value={formData.tel_citycode}
                    onChange={handleInputChange}
                    placeholder="City Code"
                    className={inputStyle()}
                  />
                  <input
                    type="text"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    placeholder="Enter your telephone number"
                    className={inputStyle()}
                  />
                </div>
              </div>

              {/* Mobile */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-archive-charcoal block">
                  Mobile:*
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input
                    type="text"
                    name="mobile_countrycode"
                    value={formData.mobile_countrycode}
                    onChange={handleInputChange}
                    placeholder="Country Code"
                    className={inputStyle()}
                  />
                  <div className="md:col-span-2 space-y-1">
                    <input
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="Enter your 10 digit mobile number*"
                      minLength={10}
                      maxLength={10}
                      className={inputStyle(!!errors.mobile)}
                    />
                    {errors.mobile && (
                      <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.mobile}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Emails & Website */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-1">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-archive-charcoal block">
                    Enter your primary e-mail*
                  </label>
                  <input
                    type="email"
                    name="primary_email"
                    value={formData.primary_email}
                    onChange={handleInputChange}
                    placeholder="Enter your primary e-mail*"
                    className={inputStyle(!!errors.primary_email)}
                  />
                  {errors.primary_email && (
                    <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.primary_email}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-archive-charcoal block">
                    Enter your alternative e-mail
                  </label>
                  <input
                    type="email"
                    name="alternative_email"
                    value={formData.alternative_email}
                    onChange={handleInputChange}
                    placeholder="Enter your alternative e-mail"
                    className={inputStyle()}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-archive-charcoal block">
                    Enter your website
                  </label>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="Enter your website"
                    className={inputStyle()}
                  />
                </div>
              </div>
            </div>

            {/* Section 5: Media Product Category */}
            <div className="space-y-4">
              <div className="border-b border-archive-charcoal/10 pb-3">
                <h2 className="text-[17px] font-semibold text-archive-charcoal">
                  Product Category:*
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PRODUCT_CATEGORIES.map((cat) => {
                  const isChecked = formData.product_cat.includes(cat);
                  return (
                    <label
                      key={cat}
                      className={`flex items-center gap-2.5 p-3 rounded-lg border-0 transition-all duration-200 cursor-pointer ${
                        isChecked
                          ? 'bg-archive-clay/10 text-archive-charcoal font-semibold'
                          : 'bg-gray-100 text-archive-charcoal/80 hover:bg-gray-200/70'
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="product_cat"
                        value={cat}
                        checked={isChecked}
                        onChange={handleInputChange}
                        className="w-4 h-4 accent-archive-clay rounded cursor-pointer"
                      />
                      <span className="text-sm">{cat}</span>
                    </label>
                  );
                })}
              </div>

              {formData.product_cat.includes('Others') && (
                <div className="pt-1">
                  <label className="text-sm font-semibold text-archive-charcoal mb-1 block">
                    Please specify other category
                  </label>
                  <input
                    type="text"
                    name="product_cat_other"
                    value={formData.product_cat_other}
                    onChange={handleInputChange}
                    placeholder="Specify category"
                    className={`${inputStyle()} max-w-md`}
                  />
                </div>
              )}
            </div>

            {/* Section 6: Agreement */}
            <div className="space-y-4 pt-2 border-t border-archive-charcoal/10">
              <div className="p-4 rounded-xl bg-gray-100 border-0 space-y-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleInputChange}
                    className="w-4 h-4 accent-archive-clay rounded cursor-pointer mt-0.5"
                  />
                  <span className="text-sm text-archive-charcoal/90 leading-relaxed">
                    I hereby agree to all the below terms & I have read and acknowledged the{' '}
                    <a
                      href="https://www.worldexindia.com/privacy-policy.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-archive-clay font-medium underline hover:text-black transition-colors"
                    >
                      privacy policy
                    </a>{' '}
                    of Worldex India Exhibition & Promotion Pvt Ltd.
                  </span>
                </label>
                {errors.agree && (
                  <p className="text-xs text-red-500 font-medium flex items-center gap-1 pl-7">
                    <AlertCircle size={14} /> {errors.agree}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center justify-center pt-2">
              <button
                type="submit"
                disabled={loading}
                className="group relative inline-flex items-center justify-center gap-2 px-10 py-3.5 bg-gray-800 text-white font-medium text-base rounded-xl overflow-hidden shadow-lg hover:bg-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-archive-clay" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>SUBMIT &raquo;</span>
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Status Modal */}
      <AnimatePresence>
        {statusModal.show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl p-6 max-w-lg w-full border border-archive-charcoal/10 shadow-2xl space-y-5 text-center"
            >
              <div className="flex justify-center">
                {statusModal.type === 'success' ? (
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <CheckCircle2 size={32} />
                  </div>
                ) : (
                  <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                    <AlertCircle size={32} />
                  </div>
                )}
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-archive-charcoal">
                  {statusModal.title}
                </h3>
                <p className="text-archive-charcoal/70 text-sm leading-relaxed">
                  {statusModal.message}
                </p>
              </div>

              <button
                onClick={() => setStatusModal((prev) => ({ ...prev, show: false }))}
                className="w-full py-3 bg-gray-800 text-white font-medium rounded-xl hover:bg-black transition-colors cursor-pointer"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MediaRegistrationPage;
