import React, { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: ReactNode;
};

type FaqSection = {
  title: string;
  items: FaqItem[];
};

const activityDetails = (
  <p>
    <span className="font-bold" style={{ color: '#184f55' }}>Interactive Business Forum (IBF) Seminar Series</span> - a knowledge sharing platform,{' '}
    <span className="font-bold" style={{ color: '#184f55' }}>Trendz Now</span> - the colour, fabric and fashion forecast showcase for the Year 2023 -24 and{' '}
    <span className="font-bold" style={{ color: '#184f55' }}>Fashion Fiesta</span> - The Business Networking Reception.
  </p>
);

const timingsTable = (
  <div className="space-y-5">
    <div>
      <p className="mb-2 font-bold text-archive-charcoal">Bangladesh</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-[14px]">
          <tbody>
            <tr className="text-center">
              <td className="border border-archive-charcoal/20 p-2"><strong>Exhibition Timings</strong></td>
              <td className="border border-archive-charcoal/20 p-2"><strong>18th June 2026</strong></td>
              <td className="border border-archive-charcoal/20 p-2"><strong>19th June 2026</strong></td>
              <td className="border border-archive-charcoal/20 p-2"><strong>20th June 2026</strong></td>
            </tr>
            <tr className="text-center">
              <td className="border border-archive-charcoal/20 p-2">Opening Time</td>
              <td className="border border-archive-charcoal/20 p-2">10:00 AM</td>
              <td className="border border-archive-charcoal/20 p-2">10:00 AM</td>
              <td className="border border-archive-charcoal/20 p-2">10:00 AM</td>
            </tr>
            <tr className="text-center">
              <td className="border border-archive-charcoal/20 p-2">Closing Time</td>
              <td className="border border-archive-charcoal/20 p-2">6:00 PM</td>
              <td className="border border-archive-charcoal/20 p-2">6:00 PM</td>
              <td className="border border-archive-charcoal/20 p-2">5:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <p className="mb-2 font-bold text-archive-charcoal">Sri Lanka</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-[14px]">
          <tbody>
            <tr className="text-center">
              <td className="border border-archive-charcoal/20 p-2"><strong>Exhibition Timings</strong></td>
              <td className="border border-archive-charcoal/20 p-2"><strong>5th August 2026</strong></td>
              <td className="border border-archive-charcoal/20 p-2"><strong>6th August 2026</strong></td>
              <td className="border border-archive-charcoal/20 p-2"><strong>7th August 2026</strong></td>
            </tr>
            <tr className="text-center">
              <td className="border border-archive-charcoal/20 p-2">Opening Time</td>
              <td className="border border-archive-charcoal/20 p-2">10:00 AM</td>
              <td className="border border-archive-charcoal/20 p-2">10:00 AM</td>
              <td className="border border-archive-charcoal/20 p-2">10:00 AM</td>
            </tr>
            <tr className="text-center">
              <td className="border border-archive-charcoal/20 p-2">Closing Time</td>
              <td className="border border-archive-charcoal/20 p-2">6:00 PM</td>
              <td className="border border-archive-charcoal/20 p-2">6:00 PM</td>
              <td className="border border-archive-charcoal/20 p-2">5:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const FAQ_SECTIONS: FaqSection[] = [
  {
    title: 'EXHIBITORS',
    items: [
      {
        question: 'What are the set-up date and timings and procedure for Exhibitor check-in?',
        answer: (
          <>
            <ul className="list-disc space-y-2 pl-5">
              <li>Bangladesh Raw Space Booths - June 16 from 2 PM onwards.</li>
              <li>Bangladesh Shell Scheme Booths - June 17 from 10 AM onwards.</li>
              <li>Sri Lanka Raw Space Booths - Monday, August 03 from 2 PM onwards.</li>
              <li>Sri Lanka Shell Scheme Booths - Tuesday, August 04 from 10 AM onwards.</li>
            </ul>
            <p>For any further onsite assistance, please contact - Mr. Karan Solanki - +91 9833849850.</p>
          </>
        )
      },
      { question: 'What are the timings of the Exhibition?', answer: timingsTable },
      { question: 'What are the on-site facilities provided at the Exhibition?', answer: <p>Wi-Fi, Access to Business Centre, Food Court, Medical Assistance, Parking, Prayer Room.</p> },
      { question: 'How can I get the Login Credentials of the Exhibitor Portal?', answer: <p>The login credentials will be shared on your registered Email ID, once your participation in the exhibition is confirmed.</p> },
      {
        question: 'What are the features of the Exhibitor Portal?',
        answer: (
          <ul className="list-disc space-y-2 pl-5">
            <li>Generate Exhibitor Badges</li>
            <li>B2B Meetings Schedule / Appointment Calendar</li>
            <li>Invitation Letter for VISA Application</li>
            <li>Discounted Hotel Rates</li>
            <li>Special Invitation to Buyers</li>
            <li>Social Media Sharing</li>
            <li>Customised Signature</li>
          </ul>
        )
      },
      { question: 'Can I request for Visa Invitation Letter?', answer: <p>Yes. You can request for the VISA Invitation letter on our website under Exhibitors' portal.</p> },
      { question: 'How do I order Exhibitor badges for our booth?', answer: <p>You can register &amp; order your Exhibitor badges on the Exhibitor portal.</p> },
      {
        question: 'What are the sponsorship and branding opportunities at the show?',
        answer: <p>To know more about sponsorship and branding opportunities - <a className="font-bold text-archive-clay hover:underline" href="/branding_opportunity">Click here</a></p>
      },
      {
        question: 'Is there any speaking opportunity available at the Exhibition?',
        answer: (
          <p>
            Yes there are speaking opportunities available. For further assistance on this, you may write to{' '}
            <a className="font-bold text-archive-clay hover:underline" href="mailto:anisha@worldexindia.com">anisha@worldexindia.com</a> or{' '}
            <a className="font-bold text-archive-clay hover:underline" href="mailto:zahir@worldexindia.com">zahir@worldexindia.com</a>
          </p>
        )
      },
      { question: 'How can my clients or customers visit the show?', answer: <p>You can invite your clients and customers through our portal where they can pre-register to visit the show.</p> },
      { question: 'What are the concurrent activities alongside the exhibition?', answer: activityDetails },
      { question: 'Where do I find the Exhibitor Manual?', answer: <p>You can download the Exhibitor Manual from the Exhibitor Portal through your login.</p> },
      { question: 'How do I order extra facilities for my booth?', answer: <p>To order extra facilities, kindly visit the Exhibitor Portal.</p> },
      {
        question: 'Which are the nearest hotels near the Exhibition Venue?',
        answer: <p>To check the nearest hotels near the Exhibition Venue - <a className="font-bold text-archive-clay hover:underline" href="/hotel">Click here</a></p>
      },
      { question: 'What are the standard rules and regulations which need to be followed?', answer: <p>Please refer to the Exhibitor Manual on our portal.</p> }
    ]
  },
  {
    title: 'BUYERS',
    items: [
      {
        question: 'How I can pre-register to attend the Exhibition?',
        answer: <p>To pre-register for the Exhibition - <a className="font-bold text-archive-clay hover:underline" href="https://portal.intexfair.com/buyer_reg_portal.php?form_name=pre-buyer-registration&country=sl&source_name=" target="_blank" rel="noopener noreferrer">Click here</a></p>
      },
      { question: 'What are the timings of the Exhibition?', answer: timingsTable },
      { question: 'Who can attend Intex Exhibition?', answer: <p>This is a B2B exhibition open only for the trade visitors in the textile and apparel industry looking for product innovations and latest developments.</p> },
      { question: 'What are the concurrent activities alongside the Exhibition?', answer: activityDetails },
      {
        question: "What are the features of the Buyers' Portal?",
        answer: (
          <ul className="list-disc space-y-2 pl-5">
            <li>Download E-Badge</li>
            <li>Pre-register for Seminar Series / Other Activities</li>
            <li>Invitation Letter for VISA Application</li>
            <li>Schedule Business Matching / B2B Meetings</li>
            <li>Discounted Hotel Rates</li>
          </ul>
        )
      },
      { question: 'Can I request for Visa Invitation Letter?', answer: <p>Yes, you can request for the Visa Invitation Letter from the Buyer's portal.</p> },
      {
        question: 'What are the benefits for Group Registration?',
        answer: (
          <ul className="list-disc space-y-2 pl-5">
            <li>Express Entry to the Show</li>
            <li>Group Photo</li>
            <li>Access to the VIP Lounge</li>
            <li>Special Invitation to concurrent activities at the Exhibition</li>
          </ul>
        )
      },
      {
        question: 'Which are the nearest hotels near the Exhibition Venue?',
        answer: <p>To check the nearest hotels near the Exhibition Venue - <a className="font-bold text-archive-clay hover:underline" href="/hotel">Click here</a></p>
      },
      { question: 'Is there is a food court at the Exhibition?', answer: <p>Yes, there will be a food court offering multiple cuisines and beverage options.</p> },
      { question: 'Is there parking at the venue?', answer: <p>Yes, there is ample parking space available at the venue.</p> },
      {
        question: 'Who do I contact for any additional queries related to my registration?',
        answer: <p>Please write to <a className="font-bold text-archive-clay hover:underline" href="mailto:prachi@worldexindia.com">prachi@worldexindia.com</a> or contact - +91-9324644254</p>
      },
      {
        question: "Where can I view the Exhibitor's List?",
        answer: <p>To view the Exhibitor's List - <a className="font-bold text-archive-clay hover:underline" href="/exhibitor_list">Click here</a></p>
      },
      { question: 'Is there any schedule or agenda of the Exhibition?', answer: <p>Please check our Program Schedule / Fair Itinerary on the link here -</p> },
      {
        question: 'How do I get most up-to date information on Intex?',
        answer: (
          <>
            <p>Please follow us on our Social Media Pages as below -</p>
            <ul className="list-disc space-y-2 pl-5">
              <li><a className="font-bold text-archive-clay hover:underline" href="https://www.linkedin.com/in/intexsouthasia/">LinkedIn</a></li>
              <li><a className="font-bold text-archive-clay hover:underline" href="https://www.facebook.com/Intexfair/">Facebook</a></li>
              <li><a className="font-bold text-archive-clay hover:underline" href="https://www.instagram.com/intex_south_asia/">Instagram</a></li>
              <li><a className="font-bold text-archive-clay hover:underline" href="https://twitter.com/intexfair">Twitter</a></li>
            </ul>
          </>
        )
      },
      {
        question: 'How to reach the Exhibition venue?',
        answer: <p>International Convention City Bashundhara (ICCB), Next to 300 ft. Purbachal Express Highway, Dhaka 1229. Click here for directions (https://goo.gl/maps/rQeKL8ePbKiXqc8h7)</p>
      }
    ]
  }
];

export default function FaqPage() {
  const [active, setActive] = useState<string | null>(null);

  const toggle = (id: string) => setActive(active === id ? null : id);

  return (
    <section className="mx-auto w-full max-w-screen-2xl py-12 lg:py-20">
      <h2 className="mb-12 text-center text-4xl font-semibold uppercase tracking-tight text-archive-charcoal">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-24">
        {FAQ_SECTIONS.map((section, sectionIdx) => (
          <div key={section.title} className="w-full max-w-2xl flex-1 basis-[520px]">
            <p className="bg-orange-400 py-2 text-center text-xl font-medium text-white">{section.title}</p>
            <div className="mt-4 space-y-4">
              {section.items.map((item, itemIdx) => {
                const id = `${sectionIdx}-${itemIdx}`;
                const isActive = active === id;

                return (
                  <motion.div
                    key={id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: itemIdx * 0.03 }}
                    className="overflow-hidden border border-archive-charcoal/10 bg-white shadow-sm"
                  >
                    <button
                      onClick={() => toggle(id)}
                      className="flex w-full items-center justify-between gap-4 p-4 text-left text-base font-medium text-archive-charcoal transition hover:bg-archive-cream/30"
                    >
                      <span className="leading-snug">{item.question}</span>
                      <span className="shrink-0 text-archive-clay" aria-hidden="true">
                        {isActive ? <Minus size={22} strokeWidth={3} /> : <Plus size={22} strokeWidth={3} />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="space-y-3 px-4 pb-4 text-[14px] leading-relaxed text-archive-charcoal/80">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
