// import React, { useState } from 'react';
// import { Bell, Mail, CheckCircle, AlertCircle } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const SetUpAlerts: React.FC = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [alertPreferences, setAlertPreferences] = useState({
//     newIssues: true,
//     articlesInPress: true,
//     specialIssues: false,
//     editorialNews: true,
//     emailFrequency: 'weekly'
//   });

//   const handleSavePreferences = () => {
//     alert('Alert preferences saved successfully!');
//   };

//   if (!isAuthenticated) {
//     return (
//       <div className="container mx-auto px-4 py-12">
//         <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
//           <Bell className="w-16 h-16 text-brand-blue mx-auto mb-4" />
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">Set Up Email Alerts</h1>
//           <p className="text-gray-600 mb-6">
//             Sign in to customize your email alerts and stay updated with the latest publications, special issues, and journal news.
//           </p>
//           <div className="flex gap-4 justify-center">
//             <Link
//               to="/login"
//               className="px-6 py-3 bg-brand-blue text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
//             >
//               Sign In
//             </Link>
//             <Link
//               to="/signup"
//               className="px-6 py-3 border border-brand-blue text-brand-blue rounded-lg hover:bg-blue-50 transition-colors font-medium"
//             >
//               Create Account
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white rounded-lg shadow-md p-8 mb-8">
//           <div className="flex items-center gap-3 mb-6">
//             <Bell className="w-8 h-8 text-brand-blue" />
//             <h1 className="text-3xl font-bold text-gray-900">Email Alert Preferences</h1>
//           </div>
//           <p className="text-gray-600 mb-8">
//             Customize your email alerts to receive notifications about new content, special issues, and important announcements.
//           </p>

//           <div className="space-y-6">
//             <div className="border-b pb-6">
//               <h2 className="text-xl font-semibold text-gray-900 mb-4">Content Alerts</h2>
//               <div className="space-y-4">
//                 <label className="flex items-center gap-3 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={alertPreferences.newIssues}
//                     onChange={(e) => setAlertPreferences({ ...alertPreferences, newIssues: e.target.checked })}
//                     className="w-5 h-5 text-brand-blue rounded"
//                   />
//                   <div>
//                     <span className="font-medium text-gray-900">New Issues</span>
//                     <p className="text-sm text-gray-600">Get notified when new journal issues are published</p>
//                   </div>
//                 </label>

//                 <label className="flex items-center gap-3 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={alertPreferences.articlesInPress}
//                     onChange={(e) => setAlertPreferences({ ...alertPreferences, articlesInPress: e.target.checked })}
//                     className="w-5 h-5 text-brand-blue rounded"
//                   />
//                   <div>
//                     <span className="font-medium text-gray-900">Articles in Press</span>
//                     <p className="text-sm text-gray-600">Receive alerts for newly accepted articles</p>
//                   </div>
//                 </label>

//                 <label className="flex items-center gap-3 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={alertPreferences.specialIssues}
//                     onChange={(e) => setAlertPreferences({ ...alertPreferences, specialIssues: e.target.checked })}
//                     className="w-5 h-5 text-brand-blue rounded"
//                   />
//                   <div>
//                     <span className="font-medium text-gray-900">Special Issues</span>
//                     <p className="text-sm text-gray-600">Notifications about upcoming special issues and calls for papers</p>
//                   </div>
//                 </label>

//                 <label className="flex items-center gap-3 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={alertPreferences.editorialNews}
//                     onChange={(e) => setAlertPreferences({ ...alertPreferences, editorialNews: e.target.checked })}
//                     className="w-5 h-5 text-brand-blue rounded"
//                   />
//                   <div>
//                     <span className="font-medium text-gray-900">Editorial News</span>
//                     <p className="text-sm text-gray-600">Stay informed about journal updates and editorial announcements</p>
//                   </div>
//                 </label>
//               </div>
//             </div>

//             <div className="border-b pb-6">
//               <h2 className="text-xl font-semibold text-gray-900 mb-4">Email Frequency</h2>
//               <div className="space-y-3">
//                 {['daily', 'weekly', 'monthly'].map((frequency) => (
//                   <label key={frequency} className="flex items-center gap-3 cursor-pointer">
//                     <input
//                       type="radio"
//                       name="emailFrequency"
//                       value={frequency}
//                       checked={alertPreferences.emailFrequency === frequency}
//                       onChange={(e) => setAlertPreferences({ ...alertPreferences, emailFrequency: e.target.value })}
//                       className="w-5 h-5 text-brand-blue"
//                     />
//                     <span className="font-medium text-gray-900 capitalize">{frequency}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
//               <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
//               <div>
//                 <p className="text-sm text-blue-900">
//                   <strong>Note:</strong> You can modify these preferences at any time. Alerts will be sent to the email address associated with your account.
//                 </p>
//               </div>
//             </div>

//             <button
//               onClick={handleSavePreferences}
//               className="w-full px-6 py-3 bg-brand-blue text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
//             >
//               <CheckCircle className="w-5 h-5" />
//               Save Preferences
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SetUpAlerts;




import React, { useState } from 'react';
import { Bell, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SetUpAlerts: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [saved, setSaved] = useState(false);

  const [alertPreferences, setAlertPreferences] = useState({
    newIssues: true,
    articlesInPress: true,
    specialIssues: false,
    editorialNews: true,
    emailFrequency: 'weekly'
  });

  const handleSavePreferences = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-3xl mx-auto mt-16 bg-white border border-gray-300 p-8 text-center">
        <Bell className="w-14 h-14 text-blue-800 mx-auto mb-4" />

        <h1 className="text-2xl font-semibold text-gray-900 mb-3">
          Email Alert Setup
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Please sign in to configure your alert preferences and receive updates regarding journal activities.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/login"
            className="px-5 py-2 bg-blue-800 text-white text-sm border border-blue-800 hover:bg-blue-900"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 border border-blue-800 text-blue-800 text-sm hover:bg-gray-100"
          >
            Register
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white border border-gray-300">

      {/* Header */}
      <div className="bg-gray-100 border-b border-gray-300 px-6 py-4 flex items-center gap-3">
        <Bell className="w-6 h-6 text-blue-800" />
        <h1 className="text-lg font-semibold text-gray-900">
          Email Alert Preferences
        </h1>
      </div>

      <div className="px-6 py-6 text-sm text-gray-700 space-y-6">

        {/* Success Message */}
        {saved && (
          <div className="border border-green-300 bg-green-50 px-4 py-2 text-green-800 text-sm">
            Preferences saved successfully.
          </div>
        )}

        {/* Content Alerts */}
        <div>
          <h2 className="font-semibold text-gray-900 mb-3">
            Content Alerts
          </h2>

          <div className="space-y-3">

            {[
              {
                key: 'newIssues',
                label: 'New Issues',
                desc: 'Notify when new journal issues are published'
              },
              {
                key: 'articlesInPress',
                label: 'Articles in Press',
                desc: 'Receive alerts for newly accepted articles'
              },
              {
                key: 'specialIssues',
                label: 'Special Issues',
                desc: 'Updates on special issues and calls for papers'
              },
              {
                key: 'editorialNews',
                label: 'Editorial News',
                desc: 'Announcements and journal updates'
              }
            ].map((item: any) => (
              <label key={item.key} className="flex gap-3 items-start cursor-pointer">
                <input
                  type="checkbox"
                  checked={alertPreferences[item.key]}
                  onChange={(e) =>
                    setAlertPreferences({
                      ...alertPreferences,
                      [item.key]: e.target.checked
                    })
                  }
                  className="mt-1"
                />

                <div>
                  <p className="font-medium text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              </label>
            ))}

          </div>
        </div>

        {/* Frequency */}
        <div className="border-t border-gray-200 pt-4">
          <h2 className="font-semibold text-gray-900 mb-3">
            Email Frequency
          </h2>

          <div className="space-y-2">
            {['daily', 'weekly', 'monthly'].map(freq => (
              <label key={freq} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="frequency"
                  value={freq}
                  checked={alertPreferences.emailFrequency === freq}
                  onChange={(e) =>
                    setAlertPreferences({
                      ...alertPreferences,
                      emailFrequency: e.target.value
                    })
                  }
                />
                <span className="capitalize">{freq}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className="border border-blue-300 bg-blue-50 p-3 flex gap-2">
          <AlertCircle className="w-4 h-4 text-blue-700 mt-0.5" />
          <p className="text-xs text-blue-900">
            Alerts will be sent to your registered email. You can update preferences anytime.
          </p>
        </div>

        {/* Button */}
        <button
          onClick={handleSavePreferences}
          className="w-full py-2 bg-blue-800 text-white text-sm hover:bg-blue-900 flex justify-center items-center gap-2"
        >
          <CheckCircle className="w-4 h-4" />
          Save Preferences
        </button>

      </div>
    </div>
  );
};

export default SetUpAlerts;