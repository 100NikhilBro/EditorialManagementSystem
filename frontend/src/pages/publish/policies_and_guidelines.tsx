// import React from "react";

// const PoliciesAndGuidelines: React.FC = () => {
//   return (
//     <div className="w-full px-6 py-10 max-w-5xl mx-auto">
//       {/* Page Title */}
//       <h1 className="text-4xl font-bold mb-4">Policies and Guidelines</h1>
//       <div className="h-1 w-20 bg-blue-600 mb-10"></div>

//       {/* Date */}
//       <p className="text-gray-600 mb-6">13 December 2022</p>

//       {/* Heading */}
//       <h2 className="text-2xl font-semibold mb-6">
//         Guidelines for submitting proposals for journal Special Issues - Internet of Things
//       </h2>

//       {/* Content */}
//       <p className="text-gray-800 leading-relaxed mb-4">
//         Guest Editors, please note: to submit a Special Issue proposal to this journal, please review the following link:
//         <a
//           href="https://www.elsevier.com/subject/computer-science/special-issue-proposal"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-600 underline ml-1"
//         >
//           How to prepare a Special Issue proposal (elsevier.com)
//         </a>
        
//         for instructions on how to submit to the online system and an overview of the process. Following the initial publisher review, your proposal will be assessed by the relevant journal editor within this site.
//       </p>
//     </div>
//   );
// };

// export default PoliciesAndGuidelines;



import React, { useState } from "react";

const faqs = [
  {
    q: "How long does the review process take?",
    a: "The review process typically takes 2–6 weeks depending on reviewer availability and manuscript complexity."
  },
  {
    q: "Can I track my manuscript status?",
    a: "Yes, authors can track their manuscript status in real-time through the dashboard."
  },
  {
    q: "What happens if revisions are requested?",
    a: "Authors will receive reviewer comments and can resubmit the revised manuscript for further evaluation."
  },
  {
    q: "Is my submission secure?",
    a: "Yes, all submissions are securely stored with role-based access control and data protection mechanisms."
  },
  {
    q: "Can I submit multiple manuscripts?",
    a: "Yes, authors can submit multiple manuscripts independently through their account."
  },
  {
    q: "Will I receive notifications?",
    a: "Yes, the system sends automated notifications for submission updates, decisions, and reviewer feedback."
  }
];

const getLastUpdatedDate = () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 3);

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const PoliciesAndGuidelines: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">

      <div className="max-w-5xl mx-auto bg-white border border-gray-300">

        {/* HEADER */}
        <div className="px-8 py-6 border-b bg-gray-50">
          <h1 className="text-3xl font-semibold text-gray-900">
            Policies & Guidelines
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Understand platform rules, submission policies, and editorial workflow standards.
          </p>
        </div>

        <div className="px-8 py-8 space-y-10 text-sm text-gray-700 leading-relaxed">

          {/* DATE */}
          <section>
            <p className="text-gray-500 text-xs">
              Last updated: {getLastUpdatedDate()}
            </p>
          </section>

          {/* SECTION 1 */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3 border-l-4 border-blue-700 pl-3">
              Submission Policies
            </h2>

            <p className="mb-2">
              Authors must ensure that submitted manuscripts are original, unpublished, and not under review elsewhere.
            </p>

            <p className="mb-2">
              All submissions must include accurate author details, abstract, keywords, and relevant documentation.
            </p>

            <p>
              The system performs initial validation before forwarding manuscripts for editorial review.
            </p>
          </section>

          {/* SECTION 2 */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3 border-l-4 border-green-600 pl-3">
              Editorial & Review Guidelines
            </h2>

            <p className="mb-2">
              Editors are responsible for evaluating manuscript relevance, quality, and compliance with journal standards.
            </p>

            <p className="mb-2">
              Peer review is conducted by domain experts to ensure research integrity and academic quality.
            </p>

            <p>
              Final decisions are made based on reviewer feedback and editorial assessment.
            </p>
          </section>

          {/* SECTION 3 */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3 border-l-4 border-purple-600 pl-3">
              Author Responsibilities
            </h2>

            <ul className="list-disc pl-5 space-y-1">
              <li>Ensure originality and avoid plagiarism</li>
              <li>Provide accurate author and affiliation details</li>
              <li>Respond to reviewer comments within timelines</li>
              <li>Follow ethical publishing standards</li>
            </ul>
          </section>

          {/* SECTION 4 */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3 border-l-4 border-orange-500 pl-3">
              Platform Features & Security
            </h2>

            <ul className="list-disc pl-5 space-y-1">
              <li>Secure authentication and role-based access control</li>
              <li>Real-time manuscript tracking system</li>
              <li>Automated notifications for updates and decisions</li>
              <li>Centralized dashboard for authors, editors, and reviewers</li>
            </ul>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-gray-700 pl-3">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-300">

                  <button
                    onClick={() =>
                      setOpenFAQ(openFAQ === index ? null : index)
                    }
                    className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 font-medium text-gray-800"
                  >
                    {faq.q}
                  </button>

                  {openFAQ === index && (
                    <div className="px-4 py-3 text-gray-600 border-t">
                      {faq.a}
                    </div>
                  )}

                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PoliciesAndGuidelines;