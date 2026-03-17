// import React, { useState, useEffect } from 'react';
// import { Search, Download, Loader2, AlertCircle } from 'lucide-react';
// import { api } from '../services/api';

// interface Author {
//   _id: string;
//   name: string;
//   email: string;
// }

// interface ManuscriptAuthor {
//   user: Author;
//   isCorresponding: boolean;
//   order?: number;
// }

// interface Manuscript {
//   _id: string;
//   title: string;
//   abstract: string;
//   keywords: string[];
//   domain: string;
//   authors: ManuscriptAuthor[];
//   correspondingAuthor: Author;
//   manuscriptFile: {
//     public_id: string;
//     url: string;
//     pages?: number;
//     size?: number;
//   };
//   status: string;
//   submissionDate: string;
// }

// const JournalsAndBooks: React.FC = () => {
//   const [manuscripts, setManuscripts] = useState<Manuscript[]>([]);
//   const [filteredManuscripts, setFilteredManuscripts] = useState<Manuscript[]>([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [downloadingId, setDownloadingId] = useState<string | null>(null);

//   // Fetch accepted manuscripts on mount
//   useEffect(() => {
//     fetchManuscripts();
//   }, []);

//   // Handle search (client-side filtering)
//   useEffect(() => {
//     if (searchQuery.trim()) {
//       const filtered = manuscripts.filter(manuscript =>
//         manuscript.title.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredManuscripts(filtered);
//     } else {
//       setFilteredManuscripts(manuscripts);
//     }
//   }, [searchQuery, manuscripts]);

//   const fetchManuscripts = async () => {
//     try {
//       setLoading(true);
//       setError('');
//       const response = await api.get('/manuscripts/accepted');
//       setManuscripts(response.data.manuscripts || []);
//       setFilteredManuscripts(response.data.manuscripts || []);
//     } catch (err: any) {
//       console.error('Error fetching manuscripts:', err);
//       setError('Failed to load journals. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDownload = async (manuscript: Manuscript) => {
//     try {
//       setDownloadingId(manuscript._id);
      
//       // Get download URL from public endpoint (no auth required)
//       const response: any = await api.get(`/manuscripts/accepted/${manuscript._id}/download`);
      
//       // API interceptor returns response.data directly
//       if (response.success && response.downloadUrl) {
//         // Open download URL in new tab or trigger download
//         const link = document.createElement('a');
//         link.href = response.downloadUrl;
//         link.download = `${manuscript.title.replace(/\s+/g, '-')}.pdf`;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       } else {
//         alert('Failed to get download link. Please try again.');
//       }
//     } catch (err: any) {
//       console.error('Error downloading manuscript:', err);
//       alert('Failed to download manuscript. Please try again.');
//     } finally {
//       setDownloadingId(null);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="container mx-auto px-4 py-12">
//         <div className="flex flex-col items-center justify-center min-h-96">
//           <Loader2 className="w-12 h-12 animate-spin text-brand-blue mb-4" />
//           <p className="text-gray-600">Loading journals and manuscripts...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-4xl font-bold text-gray-800 mb-2">Journals & Books</h1>
//         <p className="text-gray-600">Browse our collection of accepted and published journals</p>
//       </div>

//       {/* Search Bar */}
//       <div className="mb-8">
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//           <input
//             type="text"
//             placeholder="Search by manuscript name..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
//           />
//         </div>
//         {searchQuery && (
//           <p className="text-sm text-gray-500 mt-2">
//             Found {filteredManuscripts.length} result{filteredManuscripts.length !== 1 ? 's' : ''}
//           </p>
//         )}
//       </div>

//       {/* Error Message */}
//       {error && (
//         <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
//           <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
//           <div>
//             <h3 className="font-semibold text-red-800">Error</h3>
//             <p className="text-red-700">{error}</p>
//           </div>
//         </div>
//       )}

//       {/* Manuscripts List */}
//       <div className="space-y-6">
//         {filteredManuscripts.length > 0 ? (
//           filteredManuscripts.map((manuscript) => (
//             <div
//               key={manuscript._id}
//               className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
//             >
//               <div className="flex justify-between items-start gap-4">
//                 <div className="flex-1">
//                   {/* Title */}
//                   <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
//                     {manuscript.title}
//                   </h2>

//                   {/* Abstract */}
//                   <p className="text-gray-600 text-sm mb-3 line-clamp-2">
//                     {manuscript.abstract}
//                   </p>

//                   {/* Metadata */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
//                     <div>
//                       <span className="font-semibold text-gray-700">Authors: </span>
//                       <span className="text-gray-600">
//                         {manuscript.authors
//                           .map((a) => a.user.name)
//                           .join(', ') || 'N/A'}
//                       </span>
//                     </div>
//                     <div>
//                       <span className="font-semibold text-gray-700">Domain: </span>
//                       <span className="text-gray-600">{manuscript.domain}</span>
//                     </div>
//                     <div>
//                       <span className="font-semibold text-gray-700">Published: </span>
//                       <span className="text-gray-600">
//                         {new Date(manuscript.submissionDate).toLocaleDateString('en-US', {
//                           year: 'numeric',
//                           month: 'long',
//                           day: 'numeric'
//                         })}
//                       </span>
//                     </div>
//                     <div>
//                       <span className="font-semibold text-gray-700">Keywords: </span>
//                       <span className="text-gray-600">
//                         {manuscript.keywords.slice(0, 3).join(', ') || 'N/A'}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Download Button */}
//                 <button
//                   onClick={() => handleDownload(manuscript)}
//                   disabled={downloadingId === manuscript._id}
//                   className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
//                 >
//                   {downloadingId === manuscript._id ? (
//                     <>
//                       <Loader2 className="w-4 h-4 animate-spin" />
//                       Downloading...
//                     </>
//                   ) : (
//                     <>
//                       <Download className="w-4 h-4" />
//                       Download
//                     </>
//                   )}
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
//             <p className="text-gray-600 mb-2">
//               {searchQuery
//                 ? 'No journals found matching your search.'
//                 : 'No accepted journals available at this time.'}
//             </p>
//             {searchQuery && (
//               <button
//                 onClick={() => setSearchQuery('')}
//                 className="text-brand-blue hover:underline text-sm font-medium"
//               >
//                 Clear search
//               </button>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default JournalsAndBooks;





import React, { useState, useEffect } from "react";
import { Search, Download, Loader2, AlertCircle } from "lucide-react";
import { api } from "../services/api";

interface Author {
  _id: string;
  name: string;
}

interface Manuscript {
  _id: string;
  title: string;
  abstract: string;
  keywords: string[];
  domain: string;
  authors: { user: Author }[];
  submissionDate: string;
}

const JournalsAndBooks: React.FC = () => {
  const [manuscripts, setManuscripts] = useState<Manuscript[]>([]);
  const [filtered, setFiltered] = useState<Manuscript[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  useEffect(() => {
    fetchManuscripts();
  }, []);

  useEffect(() => {
    if (search.trim()) {
      setFiltered(
        manuscripts.filter((m) =>
          m.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFiltered(manuscripts);
    }
  }, [search, manuscripts]);

  const fetchManuscripts = async () => {
    try {
      const res = await api.get("/manuscripts/accepted");
      const data = res.data.manuscripts || [];
      setManuscripts(data);
      setFiltered(data);
    } catch {
      setError("Unable to load journal records.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (m: Manuscript) => {
    try {
      setDownloadingId(m._id);
      const res: any = await api.get(
        `/manuscripts/accepted/${m._id}/download`
      );

      if (res.success && res.downloadUrl) {
        const link = document.createElement("a");
        link.href = res.downloadUrl;
        link.download = `${m.title}.pdf`;
        link.click();
      }
    } finally {
      setDownloadingId(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <Loader2 className="w-10 h-10 animate-spin text-blue-700 mb-3" />
        <p className="text-gray-600 text-sm">
          Loading journal archive...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">

      <div className="max-w-6xl mx-auto bg-white border border-gray-300">

        {/* HEADER */}
        <div className="border-b px-6 py-5 bg-gray-50">
          <h1 className="text-2xl font-semibold text-gray-900">
            Journals & Publications
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Browse peer-reviewed and accepted manuscripts published in the journal.
          </p>
        </div>

        {/* TOP INFO LINE */}
        <div className="px-6 py-3 border-b text-xs text-gray-600 bg-gray-50 flex justify-between">
          <span>
            Showing {filtered.length} of {manuscripts.length} publications
          </span>
          <span>
            Updated regularly with newly accepted articles
          </span>
        </div>

        {/* SEARCH */}
        <div className="px-6 py-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title..."
              className="w-full pl-9 pr-4 py-2 border text-sm focus:outline-none focus:border-blue-700"
            />
          </div>

          {search && (
            <p className="text-xs text-gray-500 mt-2">
              {filtered.length} result{filtered.length !== 1 && "s"} found
            </p>
          )}
        </div>

        {/* ERROR */}
        {error && (
          <div className="px-6 py-4 border-b bg-red-50 text-red-700 text-sm flex gap-2 items-center">
            <AlertCircle size={16} /> {error}
          </div>
        )}

        {/* LIST */}
        <div className="divide-y">

          {filtered.length === 0 ? (
            <div className="p-10 text-center text-gray-500 text-sm">
              {search
                ? "No matching records found."
                : "No publications available."}
            </div>
          ) : (
            filtered.map((m) => (
              <div key={m._id} className="p-6 hover:bg-gray-50">

                <div className="flex justify-between gap-6">

                  {/* LEFT */}
                  <div className="flex-1">

                    <h2 className="font-semibold text-gray-900 mb-2">
                      {m.title}
                    </h2>

                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                      {m.abstract}
                    </p>

                    <div className="text-xs text-gray-600 space-y-1">

                      <p>
                        <span className="font-medium text-gray-700">
                          Authors:
                        </span>{" "}
                        {m.authors.map((a) => a.user.name).join(", ")}
                      </p>

                      <p>
                        <span className="font-medium text-gray-700">
                          Domain:
                        </span>{" "}
                        {m.domain}
                      </p>

                      <p>
                        <span className="font-medium text-gray-700">
                          Published:
                        </span>{" "}
                        {new Date(m.submissionDate).toLocaleDateString()}
                      </p>

                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex items-start">
                    <button
                      onClick={() => handleDownload(m)}
                      disabled={downloadingId === m._id}
                      className="text-sm border px-4 py-1 hover:bg-gray-100 flex items-center gap-2"
                    >
                      {downloadingId === m._id ? (
                        <>
                          <Loader2 className="w-3 h-3 animate-spin" />
                          Downloading
                        </>
                      ) : (
                        <>
                          <Download size={14} />
                          PDF
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </div>
            ))
          )}

        </div>

        {/* BOTTOM NOTE */}
        <div className="px-6 py-4 border-t text-xs text-gray-500 bg-gray-50">
          All articles listed are accepted manuscripts. Final published versions may vary after formatting and review processes.
        </div>

      </div>
    </div>
  );
};

export default JournalsAndBooks;