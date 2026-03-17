// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { api } from '../../services/api';

// const HelpPage: React.FC = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
//   const [status, setStatus] = useState<string | null>(null);

//   useEffect(() => {
//     try {
//       const user = localStorage.getItem('user');
//       if (user) {
//         const u = JSON.parse(user);
//         setName(`${u.firstName || ''} ${u.lastName || ''}`.trim());
//         setEmail(u.email || '');
//       }
//     } catch (e) {
//       // ignore
//     }
//   }, []);

//   const validate = () => {
//     const e: any = {};
//     if (!name.trim()) e.name = 'Name is required';
//     if (!email.trim()) e.email = 'Email is required';
//     else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) e.email = 'Invalid email';
//     if (!message.trim()) e.message = 'Message is required';
//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus(null);
//     if (!validate()) return;

//     try {
//       await api.post('/queries', { name, email, message });
//       setStatus('Your query has been submitted. The Editor-in-Chief will be notified.');
//       setMessage('');
//     } catch (err: any) {
//       setStatus(err?.response?.data?.message || 'Submission failed');
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="mb-6 flex items-center justify-between">
//         <div>
//           <h1 className="mb-2 text-2xl font-semibold">Help / Queries</h1>
//           <p className="text-gray-600">Use this form to contact the Editor-in-Chief. We will notify them and follow up by email.</p>
//         </div>
//         <button onClick={() => navigate('/my-queries')} className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300">
//           View My Queries
//         </button>
//       </div>

//       {status && (
//         <div className="mb-4 rounded-md bg-green-50 px-4 py-2 text-sm text-green-800">{status}</div>
//       )}

//       <form onSubmit={handleSubmit} className="max-w-2xl">
//         <div className="mb-4">
//           <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
//           <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2" />
//           {errors.name && <div className="mt-1 text-sm text-red-600">{errors.name}</div>}
//         </div>

//         <div className="mb-4">
//           <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
//           <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2" />
//           {errors.email && <div className="mt-1 text-sm text-red-600">{errors.email}</div>}
//         </div>

//         <div className="mb-4">
//           <label className="mb-1 block text-sm font-medium text-gray-700">Query / Message</label>
//           <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} className="w-full rounded-md border border-gray-300 px-3 py-2" />
//           {errors.message && <div className="mt-1 text-sm text-red-600">{errors.message}</div>}
//         </div>

//         <div>
//           <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 text-white">Submit Query</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default HelpPage;







import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

const HelpPage: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const user = localStorage.getItem('user');
      if (user) {
        const u = JSON.parse(user);
        setName(`${u.firstName || ''} ${u.lastName || ''}`.trim());
        setEmail(u.email || '');
      }
    } catch {}
  }, []);

  const validate = () => {
    const e: any = {};
    if (!name.trim()) e.name = 'Name is required';
    if (!email.trim()) e.email = 'Email is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) e.email = 'Invalid email';
    if (!message.trim()) e.message = 'Message is required';

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!validate()) return;

    try {
      setLoading(true);
      await api.post('/queries', { name, email, message });

      setStatus('SUCCESS: Your query has been submitted.');
      setMessage('');
    } catch (err: any) {
      setStatus(err?.response?.data?.message || 'ERROR: Submission failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* Header */}
      <div className="bg-blue-900 text-white py-4 px-6 shadow">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-wide">
            Help & Support Portal
          </h1>

          <button
            onClick={() => navigate('/login')}
            className="bg-white text-blue-900 px-4 py-1.5 text-sm font-medium rounded border border-white hover:bg-gray-100"
          >
            Login
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        <div className="max-w-5xl mx-auto mt-8 bg-white border border-gray-300">

          {/* Section Header */}
          <div className="border-b border-gray-300 px-6 py-4 bg-gray-50">
            <h2 className="text-lg font-semibold text-gray-800">
              Submit Your Query
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Please fill out the form below. Your request will be reviewed by the concerned authority.
            </p>
          </div>

          {/* Status */}
          {status && (
            <div className="px-6 pt-4">
              <div className={`px-4 py-2 text-sm border ${
                status.startsWith('SUCCESS')
                  ? 'bg-green-50 border-green-300 text-green-800'
                  : 'bg-red-50 border-red-300 text-red-800'
              }`}>
                {status}
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">

            <div className="grid grid-cols-3 items-center gap-4">
              <label className="text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="col-span-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-700"
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>
            </div>

            <div className="grid grid-cols-3 items-center gap-4">
              <label className="text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="col-span-2">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-700"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-3 items-start gap-4">
              <label className="text-sm font-medium text-gray-700">
                Query Details <span className="text-red-500">*</span>
              </label>
              <div className="col-span-2">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-700"
                />
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => setMessage('')}
                className="px-4 py-2 border border-gray-400 text-sm bg-gray-100 hover:bg-gray-200"
              >
                Reset
              </button>

              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-2 text-sm font-medium text-white ${
                  loading
                    ? 'bg-blue-400'
                    : 'bg-blue-800 hover:bg-blue-900'
                }`}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 text-sm mt-10">
        <div className="max-w-5xl mx-auto px-6 py-6 grid md:grid-cols-3 gap-4">

          <div>
            <h3 className="font-semibold text-white mb-2">Help Portal</h3>
            <p>
              This is an official support system to raise queries and get assistance from the concerned authority.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">Login</li>
              <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Contact</h3>
            <p>Email: support@portal.gov</p>
            <p>Helpline: +91-0000000000</p>
          </div>

        </div>

        <div className="text-center border-t border-gray-700 py-3 text-xs">
          © {new Date().getFullYear()} Government Help Portal. All rights reserved.
        </div>
      </footer>

    </div>
  );
};

export default HelpPage;