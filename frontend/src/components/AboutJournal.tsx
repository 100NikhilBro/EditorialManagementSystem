// import React from 'react';

// const AboutJournal: React.FC = () => {
//   return (
//     <div className="bg-white p-6 border border-gray-200 rounded-md">
//       <h2 className="text-xl font-bold text-gray-800 mb-4">About the journal</h2>
//       <p className="text-gray-700 leading-relaxed">
//         <span className="font-bold">Internet of Journals; Engineering Cyber Physical Human Systems</span> is a comprehensive journal encouraging cross collaboration between researchers, engineers and practitioners in the field of IoT & Cyber Physical Human Systems. The journal offers a unique platform to exchange scientific information on ...
//       </p>
//       <a href="#" className="text-brand-blue font-semibold text-sm mt-4 inline-block hover:underline">View full aims & scope</a>
//     </div>
//   );
// };

// export default AboutJournal;




import React, { useState } from 'react';

const AboutJournal: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setShowPopup(true);
    }
  };

  return (
    <>
      <div className="bg-white border border-gray-300">

        {/* Header */}
        <div className="bg-gray-100 border-b border-gray-300 px-5 py-3">
          <h2 className="text-lg font-semibold text-gray-800 tracking-wide">
            About the Journal
          </h2>
        </div>

        {/* Content */}
        <div className="px-5 py-4 text-sm text-gray-700 leading-relaxed">

          <p className="mb-3">
            <span className="font-semibold text-gray-900">
              Internet of Journals; Engineering Cyber Physical Human Systems
            </span>{' '}
            is a comprehensive academic journal that promotes collaboration between researchers, engineers, and practitioners.
          </p>

          {/* Expanded Content */}
          {expanded && (
            <>
              <p className="mb-3">
                The journal serves as a platform for the exchange of scientific knowledge, innovative research findings, and emerging technologies.
              </p>

              <p>
                It aims to bridge the gap between theoretical research and real-world applications by encouraging interdisciplinary contributions across domains.
              </p>
            </>
          )}

          {/* CTA */}
          <div className="mt-4 pt-3 border-t border-gray-200">
            <button
              onClick={handleToggle}
              className="text-blue-800 font-medium hover:underline flex items-center gap-1"
            >
              {expanded ? '− View Less' : '+ View Full Aims & Scope'}
            </button>
          </div>

        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">

          <div className="bg-white w-[90%] max-w-md border border-gray-300">

            {/* Header */}
            <div className="bg-blue-900 text-white px-4 py-2">
              <h3 className="text-sm font-semibold">Access Restricted</h3>
            </div>

            {/* Body */}
            <div className="px-4 py-4 text-sm text-gray-700">
              <p>
                For full access to journal content and features, please sign up or log in to your account.
              </p>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-2 px-4 py-3 border-t border-gray-200">
              <button
                onClick={() => setShowPopup(false)}
                className="px-3 py-1 text-sm border border-gray-400 bg-gray-100 hover:bg-gray-200"
              >
                Close
              </button>

              <button
                onClick={() => window.location.href = '/login'}
                className="px-4 py-1 text-sm text-white bg-blue-800 hover:bg-blue-900"
              >
                Login / Signup
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default AboutJournal;