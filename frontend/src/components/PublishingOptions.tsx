// import React from 'react';

// const PublishingOptions: React.FC = () => {
//   return (
//     <div className="bg-white p-6 border border-gray-200 rounded-md">
//       <h3 className="text-lg font-bold text-gray-800 mb-4">Article publishing options</h3>
      
//       <div className="mb-6">
//         <h4 className="font-bold text-md text-gray-800">Open Access</h4>
//         <p className="text-sm text-gray-700 mt-2">
//           Article Publishing Charge (APC): USD 3,020 (excluding taxes). The amount you pay may be reduced during submission if applicable.
//         </p>
//         <a href="#" className="text-brand-blue font-semibold text-sm mt-2 inline-block hover:underline">Review this journal's open access policy.</a>
//       </div>

//       <div>
//         <h4 className="font-bold text-md text-gray-800">Subscription</h4>
//         <p className="text-sm text-gray-700 mt-2">
//           No publication fee charged to authors, and published articles are immediately available to subscribers.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PublishingOptions;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PublishingOptions: React.FC = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-white border border-gray-300">

      {/* HEADER */}
      <div className="bg-gray-100 border-b border-gray-300 px-5 py-3">
        <h3 className="text-lg font-semibold text-gray-900">
          Article publishing options
        </h3>
      </div>

      {/* CONTENT */}
      <div className="px-5 py-5 text-sm text-gray-700 leading-relaxed space-y-6">

        {/* OPEN ACCESS */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">
            Open Access
          </h4>

          <p>
            Article Publishing Charge (APC) applies. The amount may be reduced during submission if applicable.
          </p>

          {/* CLICK TO EXPAND */}
          <p className="mt-2">
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-blue-700 hover:underline"
            >
              Review this journal’s open access policy
            </button>
          </p>

          {/* EXPANDED SECTION */}
          {showMore && (
            <div className="mt-3 border-l-2 border-blue-700 pl-3 text-xs text-gray-600">
              <p>
                For more detailed information regarding open access policies,
                submission benefits, and publishing guidelines,
                please create an account.
              </p>

              <button
                onClick={() => navigate("/signup")}
                className="mt-2 text-blue-700 hover:underline font-medium"
              >
                Join Us →
              </button>
            </div>
          )}
        </div>

        {/* SUBSCRIPTION */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">
            Subscription
          </h4>

          <p>
            No publication fee charged to authors, and published articles are immediately available to subscribers.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PublishingOptions;