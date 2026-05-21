import React, { useState } from 'react';

export default function FaqPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="mx-auto w-full max-w-screen-2xl mt-8 ">
      <h2 className="text-3xl font-black uppercase text-center mb-8">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="flex flex-wrap px-4 md:px-24 justify-center gap-8 mt-4">
        <div className="faqMain">
          <p className="bg-orange-400 text-white text-center text-xl font-medium py-2 rounded">EXHIBITORS</p>
          <div className="layout">
            {/* Repeat accordion items as needed */}
            <div className="accordion" onClick={() => toggleAccordion(0)}>
              <div className="accordion__question">
          <p><span className="mr-1">+</span> What are the set-up date and timings and procedure for Exhibitor check-in?</p>
              </div>
              <div className={`accordion__answer ${activeAccordion === 0 ? 'active' : ''}`}>
                <ul style={{ fontSize: 14 }}>
                  <li>Set-up date (for Raw Space Booths) - Monday, August 03 from 2 PM onwards.</li>
                  <li>Set-up date (for Shell Scheme Booths) - Tuesday, August 04 from 10 AM onwards.</li>
                </ul>
                <p>For any further onsite assistance, please contact - Mr. Karan Solanki - +91 9833849850.</p>
              </div>
            </div>
            {/* Add other accordion items similarly, updating the index numbers */}
          </div>
        </div>
        {/* Duplicate for BUYERS section if needed */}
      </div>
    </div>
  );
}
