// // import React, { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { Users, Mail, Building, Award, Globe, ExternalLink } from 'lucide-react';

// // const EditorialBoard: React.FC = () => {
// //   const navigate = useNavigate();
// //   // Default (fallback) data retained to ensure non-destructive behaviour
// //   const defaultEditorialBoard = {
// //     editorInChief: {
// //       name: "Professor F. Xhafa",
// //       affiliation: "Universitat Politècnica de Catalunya, Barcelona, Spain",
// //       email: "f.xhafa@upc.edu",
// //       expertise: ["Distributed Systems", "IoT", "Cloud Computing"],
// //       image: "https://via.placeholder.com/150?text=Prof+Xhafa"
// //     },
// //     associateEditors: [
// //       {
// //         name: "Prof. Sarah Chen",
// //         affiliation: "Massachusetts Institute of Technology, USA",
// //         email: "s.chen@mit.edu",
// //         expertise: ["Edge Computing", "IoT Security", "Machine Learning"],
// //         image: "https://via.placeholder.com/150?text=Prof+Chen",
// //         role: 'editor'
// //       },
// //       {
// //         name: "Prof. Michael Zhang",
// //         affiliation: "University of Cambridge, UK",
// //         email: "m.zhang@cam.ac.uk",
// //         expertise: ["Wireless Sensor Networks", "IoT Protocols", "Network Optimization"],
// //         image: "https://via.placeholder.com/150?text=Prof+Zhang",
// //         role: 'editor'
// //       },
// //       {
// //         name: "Prof. Maria Garcia",
// //         affiliation: "Technical University of Madrid, Spain",
// //         email: "m.garcia@upm.es",
// //         expertise: ["Smart Cities", "Sustainable IoT", "Urban Computing"],
// //         image: "https://via.placeholder.com/150?text=Prof+Garcia",
// //         role: 'editor'
// //       },
// //       {
// //         name: "Prof. Robert Brown",
// //         affiliation: "ETH Zurich, Switzerland",
// //         email: "r.brown@ethz.ch",
// //         expertise: ["Industrial IoT", "Cybersecurity", "Blockchain"],
// //         image: "https://via.placeholder.com/150?text=Prof+Brown",
// //         role: 'editor'
// //       },
// //       {
// //         name: "Prof. Emily Davis",
// //         affiliation: "National University of Singapore, Singapore",
// //         email: "e.davis@nus.edu.sg",
// //         expertise: ["IoT Applications", "Healthcare IoT", "Wearable Devices"],
// //         image: "https://via.placeholder.com/150?text=Prof+Davis",
// //         role: 'editor'
// //       },
// //       {
// //         name: "Prof. Christopher Lee",
// //         affiliation: "University of Tokyo, Japan",
// //         email: "c.lee@u-tokyo.ac.jp",
// //         expertise: ["5G Networks", "IoT Communication", "Network Protocols"],
// //         image: "https://via.placeholder.com/150?text=Prof+Lee",
// //         role: 'editor'
// //       }
// //     ],
// //     advisoryBoard: [
// //       {
// //         name: "Prof. John Smith",
// //         affiliation: "Stanford University, USA",
// //         expertise: ["IoT Architecture", "Distributed Systems"],
// //         role: 'advisory'
// //       },
// //       {
// //         name: "Prof. Lisa Wang",
// //         affiliation: "Tsinghua University, China",
// //         expertise: ["AIoT", "Edge Intelligence"],
// //         role: 'advisory'
// //       },
// //       {
// //         name: "Prof. David Martinez",
// //         affiliation: "University of California, Berkeley, USA",
// //         expertise: ["IoT Security", "Privacy"],
// //         role: 'advisory'
// //       }
// //     ]
// //   };

// //   const [editorialBoard, setEditorialBoard] = useState<any>({
// //     editorsInChief: [],
// //     associateEditors: defaultEditorialBoard.associateEditors,
// //     advisoryBoard: defaultEditorialBoard.advisoryBoard
// //   });

// //   useEffect(() => {
// //     // Attempt to load editorial board from backend; fall back to default data on any error.
// //     const load = async () => {
// //       try {
// //         const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
// //         const res = await fetch(`${apiUrl}/api/editorial-board`);
// //         if (!res.ok) return;
// //         const json = await res.json();
// //         if (json && json.success && json.data) {
// //           const { editorsInChief, editors } = json.data;
// //           // Use backend data if available, otherwise preserve defaults
// //           setEditorialBoard(prev => ({
// //             editorsInChief: editorsInChief && editorsInChief.length > 0 ? editorsInChief : [prev.editorInChief].filter(Boolean),
// //             associateEditors: editors && editors.length > 0 ? editors : prev.associateEditors,
// //             advisoryBoard: prev.advisoryBoard
// //           }));
// //         }
// //       } catch (e) {
// //         // Silent fallback to embedded defaults
// //         console.debug('Editorial board fetch failed, using defaults:', e);
// //       }
// //     };

// //     load();
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-8">
// //       <div className="container mx-auto px-4 max-w-6xl">
// //         {/* Header */}
// //         <div className="mb-8">
// //           <h1 className="text-4xl font-bold text-gray-900 mb-2">Editorial Board</h1>
// //           <p className="text-gray-600">
// //             Meet the distinguished editors and advisors who guide the journal's editorial direction
// //           </p>
// //         </div>

// //         {/* Editors-in-Chief */}
// //         {editorialBoard.editorsInChief && editorialBoard.editorsInChief.length > 0 && (
// //           <div className="mb-12">
// //             <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
// //               <Award className="text-brand-orange" size={28} />
// //               {editorialBoard.editorsInChief.length === 1 ? 'Editor-in-Chief' : 'Editors-in-Chief'}
// //             </h2>
// //             <div className="grid grid-cols-1 gap-6">
// //               {editorialBoard.editorsInChief.map((editor, idx) => (
// //                 <div key={idx} className="bg-white rounded-lg shadow-md p-8">
// //                   <div className="flex flex-col md:flex-row gap-6">
// //                     {editor.image && (
// //                       <div className="flex-shrink-0">
// //                         <img 
// //                           src={editor.image} 
// //                           alt={editor.name}
// //                           className="w-32 h-32 rounded-full object-cover border-4 border-brand-orange"
// //                         />
// //                       </div>
// //                     )}
// //                     <div className="flex-1">
// //                       <h3 className="text-2xl font-bold text-gray-900 mb-2">
// //                         {editor.name}
// //                       </h3>
// //                       <div className="space-y-2 mb-4">
// //                         {editor.affiliation && (
// //                           <div className="flex items-center gap-2 text-gray-600">
// //                             <Building size={18} />
// //                             <span>{editor.affiliation}</span>
// //                           </div>
// //                         )}
// //                         <div className="flex items-center gap-2 text-gray-600">
// //                           <Mail size={18} />
// //                           <span>{editor.email}</span>
// //                         </div>
// //                       </div>
// //                       {editor.expertise?.length > 0 && (
// //                         <div className="mb-4">
// //                           <h4 className="font-semibold text-gray-900 mb-2">Research Expertise:</h4>
// //                           <div className="flex flex-wrap gap-2">
// //                             {editor.expertise.map((area, idx) => (
// //                               <span key={idx} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
// //                                 {area}
// //                               </span>
// //                             ))}
// //                           </div>
// //                         </div>
// //                       )}
// //                        <button
// //                          onClick={() => navigate(`/editor/${editor._id}`, { state: { image: editor.image } })}
// //                          className="flex items-center gap-2 bg-brand-orange text-white px-4 py-2 rounded hover:bg-orange-600 mt-4"
// //                        >
// //                          <ExternalLink size={16} />
// //                          View Full Profile
// //                        </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {/* Associate Editors */}
// //         {editorialBoard.associateEditors?.length > 0 && (
// //           <div className="mb-12">
// //             <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
// //               <Users className="text-brand-blue" size={28} />
// //               Associate Editors
// //             </h2>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               {editorialBoard.associateEditors.map((editor, idx) => (
// //                 <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
// //                   <div className="flex gap-4">
// //                     {editor.image && (
// //                       <img 
// //                         src={editor.image} 
// //                         alt={editor.name}
// //                         className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
// //                       />
// //                     )}
// //                     <div className="flex-1">
// //                       <h3 className="text-lg font-bold text-gray-900 mb-2">{editor.name}</h3>
// //                       <div className="space-y-1 text-sm text-gray-600 mb-3">
// //                         {editor.affiliation && (
// //                           <div className="flex items-center gap-1">
// //                             <Building size={14} />
// //                             <span>{editor.affiliation}</span>
// //                           </div>
// //                         )}
// //                         <div className="flex items-center gap-1">
// //                           <Mail size={14} />
// //                           <span>{editor.email}</span>
// //                         </div>
// //                       </div>
// //                       {editor.expertise?.length > 0 && (
// //                         <div>
// //                           <h4 className="text-xs font-semibold text-gray-700 mb-1">Expertise:</h4>
// //                           <div className="flex flex-wrap gap-1">
// //                             {editor.expertise.map((area, i) => (
// //                               <span key={i} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">
// //                                 {area}
// //                               </span>
// //                             ))}
// //                           </div>
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {/* Advisory Board - kept for backward compatibility if needed */}
// //         {editorialBoard.advisoryBoard?.length > 0 && (
// //           <div className="mb-8">
// //             <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
// //               <Globe className="text-purple-600" size={28} />
// //               Advisory Board
// //             </h2>
// //             <div className="bg-white rounded-lg shadow-md p-6">
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //                 {editorialBoard.advisoryBoard.map((member, idx) => (
// //                   <div key={idx} className="border-l-4 border-purple-500 pl-4">
// //                     <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
// //                     {member.affiliation && (
// //                       <p className="text-sm text-gray-600 mb-2">{member.affiliation}</p>
// //                     )}
// //                     {member.expertise?.length > 0 && (
// //                       <div className="flex flex-wrap gap-1">
// //                         {member.expertise.map((area, i) => (
// //                           <span key={i} className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded text-xs">
// //                             {area}
// //                           </span>
// //                         ))}
// //                       </div>
// //                     )}
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* Contact Information */}
// //         <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
// //           <h3 className="text-lg font-semibold text-blue-900 mb-2">Editorial Office</h3>
// //           <p className="text-blue-800">
// //             For editorial inquiries, please contact the editorial office at{" "}
// //             <a href="mailto:editorial@iotjournal.com" className="underline hover:text-blue-600">
// //               editorial@iotjournal.com
// //             </a>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EditorialBoard;



// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   Users,
// //   Mail,
// //   Building,
// //   Award,
// //   Globe,
// //   ExternalLink,
// //   Plus,
// // } from "lucide-react";

// // interface Editor {
// //   _id?: string;
// //   name: string;
// //   designation?: string;
// //   affiliation?: string;
// //   email?: string;
// //   expertise?: string[];
// //   image?: string;
// //   profileLink?: string;
// // }

// // interface EditorialBoardState {
// //   editorsInChief: Editor[];
// //   associateEditors: Editor[];
// //   advisoryBoard: Editor[];
// // }

// // const EditorialBoard: React.FC = () => {
// //   const navigate = useNavigate();

// //   // ✅ NO DEFAULT ROLE AUTO SET
// //   const storedUser = localStorage.getItem("user");
// //   const user = storedUser ? JSON.parse(storedUser) : null;
// //   const isChiefEditor = user?.role === "ChiefEditor";

// //   const [editorialBoard, setEditorialBoard] =
// //     useState<EditorialBoardState>({
// //       editorsInChief: [],
// //       associateEditors: [],
// //       advisoryBoard: [],
// //     });

// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);

// //   const apiUrl =
// //     import.meta.env.VITE_API_URL || "http://localhost:3000";

// //   // ================= FETCH DATA =================
// //   useEffect(() => {
// //     const fetchBoard = async () => {
// //       try {
// //         setLoading(true);
// //         const res = await fetch(`${apiUrl}/api/editorial-board`);

// //         if (!res.ok) throw new Error("Fetch failed");

// //         const result = await res.json();

// //         setEditorialBoard({
// //           editorsInChief: result.data?.editorsInChief || [],
// //           associateEditors: result.data?.associateEditors || [],
// //           advisoryBoard: result.data?.advisoryBoard || [],
// //         });

// //       } catch (err) {
// //         console.error(err);
// //         setError("Unable to load editorial board.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchBoard();
// //   }, []);

// //   // ================= DELETE ASSOCIATE =================
// //   const handleDelete = async (id?: string) => {
// //     if (!id) return;

// //     if (!window.confirm("Delete this editor?")) return;

// //     try {
// //       const res = await fetch(`${apiUrl}/api/${id}`, {
// //         method: "DELETE",
// //       });

// //       if (!res.ok) throw new Error("Delete failed");

// //       setEditorialBoard((prev) => ({
// //         ...prev,
// //         associateEditors: prev.associateEditors.filter(
// //           (e) => e._id !== id
// //         ),
// //       }));
// //     } catch {
// //       alert("Delete failed");
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen flex justify-center items-center">
// //         Loading Editorial Board...
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-8">
// //       <div className="container mx-auto px-4 max-w-6xl">

// //         {error && (
// //           <div className="mb-6 bg-red-100 text-red-700 p-4 rounded">
// //             {error}
// //           </div>
// //         )}

// //         <div className="mb-8">
// //           <h1 className="text-4xl font-bold text-gray-900 mb-2">
// //             Editorial Board
// //           </h1>
// //         </div>

// //         {/* ================= EDITORS-IN-CHIEF ================= */}
// //         {editorialBoard.editorsInChief.length > 0 && (
// //           <div className="mb-12">
// //             <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
// //               <Award className="text-orange-500" size={28} />
// //               Editor-in-Chief
// //             </h2>

// //             {editorialBoard.editorsInChief.map((editor) => (
// //               <div
// //                 key={editor._id}
// //                 className="bg-white rounded-lg shadow-md p-8 mb-6"
// //               >
// //                 <div className="flex flex-col md:flex-row gap-6">
// //                   {editor.image && (
// //                     <img
// //                       src={editor.image}
// //                       alt={editor.name}
// //                       className="w-32 h-32 rounded-full object-cover border-4 border-orange-500"
// //                     />
// //                   )}

// //                   <div className="flex-1">
// //                     <h3 className="text-2xl font-bold mb-2">
// //                       {editor.name}
// //                     </h3>

// //                     {editor.designation && (
// //                       <p className="text-gray-700">
// //                         {editor.designation}
// //                       </p>
// //                     )}

// //                     {editor.affiliation && (
// //                       <div className="flex items-center gap-2 text-gray-600 mt-2">
// //                         <Building size={18} />
// //                         {editor.affiliation}
// //                       </div>
// //                     )}

// //                     {editor.email && (
// //                       <div className="flex items-center gap-2 text-gray-600 mt-1">
// //                         <Mail size={18} />
// //                         {editor.email}
// //                       </div>
// //                     )}

// //                     {editor.expertise?.length ? (
// //                       <div className="mt-4">
// //                         <h4 className="font-semibold mb-2">
// //                           Research Expertise:
// //                         </h4>
// //                         <div className="flex flex-wrap gap-2">
// //                           {editor.expertise.map((area, idx) => (
// //                             <span
// //                               key={idx}
// //                               className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
// //                             >
// //                               {area}
// //                             </span>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     ) : null}

// //                     {/* ✅ VIEW PROFILE BUTTON */}
// //                     {editor._id && (
// //                       <button
// //                         onClick={() =>
// //                           navigate(`/editor/${editor._id}`)
// //                         }
// //                         className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 mt-6"
// //                       >
// //                         <ExternalLink size={16} />
// //                         View Full Profile
// //                       </button>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}

// //         {/* ================= ASSOCIATE EDITORS ================= */}
// //         <div className="mb-12">

// //           <div className="flex justify-between items-center mb-6">
// //             <h2 className="text-2xl font-bold flex items-center gap-2">
// //               <Users size={28} className="text-blue-600" />
// //               Associate Editors
// //             </h2>

// //             {isChiefEditor && (
// //               <button
// //                 onClick={() => navigate("/admin/add-editor")}
// //                 className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //               >
// //                 <Plus size={16} />
// //                 Add Editor
// //               </button>
// //             )}
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             {editorialBoard.associateEditors.map((editor) => (
// //               <div
// //                 key={editor._id}
// //                 className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg"
// //               >
// //                 <h3 className="text-lg font-bold mb-2">
// //                   {editor.name}
// //                 </h3>

// //                 {editor.affiliation && (
// //                   <p className="text-sm text-gray-600">
// //                     {editor.affiliation}
// //                   </p>
// //                 )}

// //                 {editor.expertise?.length && (
// //                   <div className="flex flex-wrap gap-1 mt-2">
// //                     {editor.expertise.map((area, i) => (
// //                       <span
// //                         key={i}
// //                         className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
// //                       >
// //                         {area}
// //                       </span>
// //                     ))}
// //                   </div>
// //                 )}

// //                 {isChiefEditor && (
// //                   <div className="flex gap-3 mt-4">
// //                     <button
// //                       onClick={() =>
// //                         navigate(`/admin/add-editor?edit=${editor._id}`)
// //                       }
// //                       className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm"
// //                     >
// //                       Update
// //                     </button>

// //                     <button
// //                       onClick={() =>
// //                         handleDelete(editor._id)
// //                       }
// //                       className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
// //                     >
// //                       Delete
// //                     </button>
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* ================= ADVISORY BOARD ================= */}
// //         {editorialBoard.advisoryBoard.length > 0 && (
// //           <div>
// //             <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
// //               <Globe className="text-purple-600" size={28} />
// //               Advisory Board
// //             </h2>

// //             <div className="bg-white rounded-lg shadow-md p-6">
// //               {editorialBoard.advisoryBoard.map((member) => (
// //                 <div key={member._id} className="mb-4">
// //                   <h3 className="font-bold">
// //                     {member.name}
// //                   </h3>
// //                   {member.affiliation && (
// //                     <p className="text-sm text-gray-600">
// //                       {member.affiliation}
// //                     </p>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //       </div>
// //     </div>
// //   );
// // };

// // export default EditorialBoard;



// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Users,
//   Mail,
//   Building,
//   Award,
//   Globe,
//   ExternalLink,
//   Plus,
// } from "lucide-react";

// interface Editor {
//   _id?: string;
//   name: string;
//   designation?: string;
//   affiliation?: string;
//   email?: string;
//   expertise?: string[];
//   image?: string;
//   profileLink?: string;
// }

// interface EditorialBoardState {
//   editorsInChief: Editor[];
//   associateEditors: Editor[];
//   advisoryBoard: Editor[];
// }

// const EditorialBoard: React.FC = () => {
//   const navigate = useNavigate();

//   // ================= AUTO ROLE DEFAULT =================
//   const storedUser = localStorage.getItem("user");
//   let user = storedUser ? JSON.parse(storedUser) : null;

//   if (!user) {
//     user = { role: "ChiefEditor" }; // default role set
//     localStorage.setItem("user", JSON.stringify(user));
//   }

//   const isChiefEditor = user?.role === "ChiefEditor";

//   // ================= STATE =================
//   const [editorialBoard, setEditorialBoard] =
//     useState<EditorialBoardState>({
//       editorsInChief: [],
//       associateEditors: [],
//       advisoryBoard: [],
//     });

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const apiUrl =
//     import.meta.env.VITE_API_URL || "http://localhost:3000";

//   // ================= FETCH DATA =================
//   useEffect(() => {
//     const fetchBoard = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(`${apiUrl}/api/editorial-board`);

//         if (!res.ok) throw new Error("Fetch failed");

//         const result = await res.json();

//         setEditorialBoard({
//           editorsInChief: result.data?.editorsInChief || [],
//           associateEditors: result.data?.associateEditors || [],
//           advisoryBoard: result.data?.advisoryBoard || [],
//         });

//       } catch (err) {
//         console.error(err);
//         setError("Unable to load editorial board.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBoard();
//   }, []);

//   // ================= DELETE ASSOCIATE =================
//   const handleDelete = async (id?: string) => {
//     if (!id) return;
//     if (!window.confirm("Delete this editor?")) return;

//     try {
//       const res = await fetch(`${apiUrl}/api/${id}`, { method: "DELETE" });
//       if (!res.ok) throw new Error("Delete failed");

//       setEditorialBoard((prev) => ({
//         ...prev,
//         associateEditors: prev.associateEditors.filter(
//           (e) => e._id !== id
//         ),
//       }));
//     } catch {
//       alert("Delete failed");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         Loading Editorial Board...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="container mx-auto px-4 max-w-6xl">

//         {error && (
//           <div className="mb-6 bg-red-100 text-red-700 p-4 rounded">
//             {error}
//           </div>
//         )}

//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">
//             Editorial Board
//           </h1>
//         </div>

//         {/* ================= EDITORS-IN-CHIEF ================= */}
//         {editorialBoard.editorsInChief.length > 0 && (
//           <div className="mb-12">
//             <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
//               <Award className="text-orange-500" size={28} />
//               Editor-in-Chief
//             </h2>

//             {editorialBoard.editorsInChief.map((editor) => (
//               <div
//                 key={editor._id}
//                 className="bg-white rounded-lg shadow-md p-8 mb-6"
//               >
//                 <div className="flex flex-col md:flex-row gap-6">
//                   {editor.image && (
//                     <img
//                       src={editor.image}
//                       alt={editor.name}
//                       className="w-32 h-32 rounded-full object-cover border-4 border-orange-500"
//                     />
//                   )}

//                   <div className="flex-1">
//                     <h3 className="text-2xl font-bold mb-2">
//                       {editor.name}
//                     </h3>

//                     {editor.designation && (
//                       <p className="text-gray-700">{editor.designation}</p>
//                     )}

//                     {editor.affiliation && (
//                       <div className="flex items-center gap-2 text-gray-600 mt-2">
//                         <Building size={18} />
//                         {editor.affiliation}
//                       </div>
//                     )}

//                     {editor.email && (
//                       <div className="flex items-center gap-2 text-gray-600 mt-1">
//                         <Mail size={18} />
//                         {editor.email}
//                       </div>
//                     )}

//                     {editor.expertise?.length && (
//                       <div className="mt-4">
//                         <h4 className="font-semibold mb-2">Research Expertise:</h4>
//                         <div className="flex flex-wrap gap-2">
//                           {editor.expertise.map((area, idx) => (
//                             <span
//                               key={idx}
//                               className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
//                             >
//                               {area}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* ✅ VIEW PROFILE BUTTON */}
//                     {editor._id && (
//                       <button
//                         onClick={() => navigate(`/editor/${editor._id}`)}
//                         className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 mt-6"
//                       >
//                         <ExternalLink size={16} />
//                         View Full Profile
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* ================= ASSOCIATE EDITORS ================= */}
//         <div className="mb-12">

//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold flex items-center gap-2">
//               <Users size={28} className="text-blue-600" />
//               Associate Editors
//             </h2>

//             {/* 🔹 Add Editor button always visible */}
//             <button
//               onClick={() => navigate("/admin/add-editor")}
//               className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               <Plus size={16} />
//               Add Editor
//             </button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {editorialBoard.associateEditors.map((editor) => (
//               <div
//                 key={editor._id}
//                 className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg"
//               >
//                 <h3 className="text-lg font-bold mb-2">{editor.name}</h3>

//                 {editor.affiliation && (
//                   <p className="text-sm text-gray-600">{editor.affiliation}</p>
//                 )}

//                 {editor.expertise?.length && (
//                   <div className="flex flex-wrap gap-1 mt-2">
//                     {editor.expertise.map((area, i) => (
//                       <span
//                         key={i}
//                         className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
//                       >
//                         {area}
//                       </span>
//                     ))}
//                   </div>
//                 )}

//                 {/* Only ChiefEditor can update/delete */}
//                 {isChiefEditor && (
//                   <div className="flex gap-3 mt-4">
//                     <button
//                       onClick={() =>
//                         navigate(`/admin/add-editor?edit=${editor._id}`)
//                       }
//                       className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm"
//                     >
//                       Update
//                     </button>

//                     <button
//                       onClick={() => handleDelete(editor._id)}
//                       className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ================= ADVISORY BOARD ================= */}
//         {editorialBoard.advisoryBoard.length > 0 && (
//           <div>
//             <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
//               <Globe className="text-purple-600" size={28} />
//               Advisory Board
//             </h2>

//             <div className="bg-white rounded-lg shadow-md p-6">
//               {editorialBoard.advisoryBoard.map((member) => (
//                 <div key={member._id} className="mb-4">
//                   <h3 className="font-bold">{member.name}</h3>
//                   {member.affiliation && (
//                     <p className="text-sm text-gray-600">{member.affiliation}</p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default EditorialBoard;




// // Recent Wopking Code

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Users,
//   Mail,
//   Building,
//   Award,
//   Globe,
//   ExternalLink,
//   Plus,
// } from "lucide-react";

// interface Editor {
//   _id?: string;
//   name: string;
//   designation?: string;
//   department?: string;
//   affiliation?: string;
//   email?: string;
//   expertise?: string[];
//   image?: string;
//   profileLink?: string;
// }

// interface EditorialBoardState {
//   editorsInChief: Editor[];
//   associateEditors: Editor[];
//   advisoryBoard: Editor[];
// }

// const EditorialBoard: React.FC = () => {
//   const navigate = useNavigate();

//   // ================= AUTO ROLE DEFAULT =================
//   const storedUser = localStorage.getItem("user");
//   let user = storedUser ? JSON.parse(storedUser) : null;

//   if (!user) {
//     // user = { role: "ChiefEditor" }; // default role set
//     localStorage.setItem("user", JSON.stringify(user));
//   }

//   const [editorialBoard, setEditorialBoard] =
//     useState<EditorialBoardState>({
//       editorsInChief: [],
//       associateEditors: [],
//       advisoryBoard: [],
//     });

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const apiUrl =
//     import.meta.env.VITE_API_URL || "http://localhost:3000";

//   // ================= FETCH DATA =================
//   useEffect(() => {
//     const fetchBoard = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(`${apiUrl}/api/editorial-board`);

//         if (!res.ok) throw new Error("Fetch failed");

//         const result = await res.json();

//         setEditorialBoard((prev) => ({
//           ...prev,
//           editorsInChief: result.data?.editorsInChief || [],
//           advisoryBoard: result.data?.advisoryBoard || [],
//         }));
//       } catch (err) {
//         console.error(err);
//         setError("Unable to load editorial board.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBoard();
//   }, []);

//   // ================= FETCH ALL ASSOCIATE EDITORS =================
//   useEffect(() => {
//     const fetchAssociateEditors = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(`${apiUrl}/api`);
//         if (!res.ok) throw new Error("Failed to fetch associate editors");
//         const data = await res.json();
//         setEditorialBoard((prev) => ({
//           ...prev,
//           associateEditors: data.data || data,
//         }));
//       } catch (err) {
//         console.error(err);
//         setError("Unable to load associate editors.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAssociateEditors();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         Loading Editorial Board...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="container mx-auto px-4 max-w-6xl">

//         {error && (
//           <div className="mb-6 bg-red-100 text-red-700 p-4 rounded">
//             {error}
//           </div>
//         )}

//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">
//             Editorial Board
//           </h1>
//         </div>

//         {/* ================= EDITORS-IN-CHIEF ================= */}
//         {editorialBoard.editorsInChief.length > 0 && (
//           <div className="mb-12">
//             <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
//               <Award className="text-orange-500" size={28} />
//               Editor-in-Chief
//             </h2>

//             {editorialBoard.editorsInChief.map((editor) => (
//               <div
//                 key={editor._id}
//                 className="bg-white rounded-lg shadow-md p-8 mb-6"
//               >
//                 <div className="flex flex-col md:flex-row gap-6">
//                   {editor.image && (
//                     <img
//                       src={editor.image}
//                       alt={editor.name}
//                       className="w-32 h-32 rounded-full object-cover border-4 border-orange-500"
//                     />
//                   )}

//                   <div className="flex-1">
//                     <h3 className="text-2xl font-bold mb-2">{editor.name}</h3>

//                     {editor.designation && (
//                       <p className="text-gray-700">{editor.designation}</p>
//                     )}

//                     {editor.affiliation && (
//                       <div className="flex items-center gap-2 text-gray-600 mt-2">
//                         <Building size={18} />
//                         {editor.affiliation}
//                       </div>
//                     )}

//                     {editor.email && (
//                       <div className="flex items-center gap-2 text-gray-600 mt-1">
//                         <Mail size={18} />
//                         {editor.email}
//                       </div>
//                     )}

//                     {editor.expertise?.length && (
//                       <div className="mt-4">
//                         <h4 className="font-semibold mb-2">Research Expertise:</h4>
//                         <div className="flex flex-wrap gap-2">
//                           {editor.expertise.map((area, idx) => (
//                             <span
//                               key={idx}
//                               className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
//                             >
//                               {area}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {editor._id && (
//                       <button
//                         onClick={() => navigate(`/editor/${editor._id}`)}
//                         className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 mt-6"
//                       >
//                         <ExternalLink size={16} />
//                         View Full Profile
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* ================= ASSOCIATE EDITORS ================= */}
//         <div className="mb-12">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold flex items-center gap-2">
//               <Users size={28} className="text-blue-600" />
//               Associate Editors
//             </h2>

//             <button
//               onClick={() => navigate("/admin/add-editor")}
//               className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               <Plus size={16} />
//               Add Editor
//             </button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {editorialBoard.associateEditors.map((editor) => (
//               <div
//                 key={editor._id}
//                 className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg"
//               >
//                 <h3 className="text-lg font-bold mb-1">{editor.name}</h3>

//                 {editor.designation && (
//                   <p className="text-sm text-gray-600">
//                     {editor.designation} {editor.department ? `- ${editor.department}` : ""}
//                   </p>
//                 )}

//                 {editor.affiliation && (
//                   <p className="text-sm text-gray-600">{editor.affiliation}</p>
//                 )}

//                 {editor.expertise?.length && (
//                   <div className="flex flex-wrap gap-1 mt-2">
//                     {editor.expertise.map((area, i) => (
//                       <span
//                         key={i}
//                         className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
//                       >
//                         {area}
//                       </span>
//                     ))}
//                   </div>
//                 )}

//                 {/* Profile Link Button */}
//                 {editor.profileLink && (
//                   <a
//                     href={editor.profileLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
//                   >
//                     View Profile Link
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ================= ADVISORY BOARD ================= */}
//         {editorialBoard.advisoryBoard.length > 0 && (
//           <div>
//             <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
//               <Globe className="text-purple-600" size={28} />
//               Advisory Board
//             </h2>

//             <div className="bg-white rounded-lg shadow-md p-6">
//               {editorialBoard.advisoryBoard.map((member) => (
//                 <div key={member._id} className="mb-4">
//                   <h3 className="font-bold">{member.name}</h3>
//                   {member.affiliation && (
//                     <p className="text-sm text-gray-600">{member.affiliation}</p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default EditorialBoard;



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Mail,
  Building,
  Award,
  Globe,
  ExternalLink,
  Plus,
} from "lucide-react";
import { useCanEdit } from '../../utils/authUtils'; // 🔹 import hook

interface Editor {
  _id?: string;
  name: string;
  designation?: string;
  department?: string;
  affiliation?: string;
  email?: string;
  expertise?: string[];
  image?: string;
  profileLink?: string;
}

interface EditorialBoardState {
  editorsInChief: Editor[];
  associateEditors: Editor[];
  advisoryBoard: Editor[];
}

const EditorialBoard: React.FC = () => {
  const navigate = useNavigate();
  const canEdit = useCanEdit(); // 🔹 check if user can edit

  const [editorialBoard, setEditorialBoard] = useState<EditorialBoardState>({
    editorsInChief: [],
    associateEditors: [],
    advisoryBoard: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

  // ================= FETCH EDITORS-IN-CHIEF & ADVISORY =================
  useEffect(() => {
    const fetchBoard = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${apiUrl}/api/editorial-board`);
        if (!res.ok) throw new Error("Fetch failed");
        const result = await res.json();

        setEditorialBoard((prev) => ({
          ...prev,
          editorsInChief: result.data?.editorsInChief || [],
          advisoryBoard: result.data?.advisoryBoard || [],
        }));
      } catch (err) {
        console.error(err);
        setError("Unable to load editorial board.");
      } finally {
        setLoading(false);
      }
    };
    fetchBoard();
  }, []);

  // ================= FETCH ALL ASSOCIATE EDITORS =================
  useEffect(() => {
    const fetchAssociateEditors = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${apiUrl}/api`);
        if (!res.ok) throw new Error("Failed to fetch associate editors");
        const data = await res.json();
        setEditorialBoard((prev) => ({
          ...prev,
          associateEditors: data.data || data,
        }));
      } catch (err) {
        console.error(err);
        setError("Unable to load associate editors.");
      } finally {
        setLoading(false);
      }
    };
    fetchAssociateEditors();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading Editorial Board...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {error && (
          <div className="mb-6 bg-red-100 text-red-700 p-4 rounded">
            {error}
          </div>
        )}

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Editorial Board
          </h1>
        </div>

        {/* ================= EDITORS-IN-CHIEF ================= */}
        {editorialBoard.editorsInChief.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-orange-500" size={28} />
              Editor-in-Chief
            </h2>

            {editorialBoard.editorsInChief.map((editor) => (
              <div
                key={editor._id}
                className="bg-white rounded-lg shadow-md p-8 mb-6"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {editor.image && (
                    <img
                      src={editor.image}
                      alt={editor.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-orange-500"
                    />
                  )}

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{editor.name}</h3>
                    {editor.designation && (
                      <p className="text-gray-700">{editor.designation}</p>
                    )}
                    {editor.affiliation && (
                      <div className="flex items-center gap-2 text-gray-600 mt-2">
                        <Building size={18} />
                        {editor.affiliation}
                      </div>
                    )}
                    {editor.email && (
                      <div className="flex items-center gap-2 text-gray-600 mt-1">
                        <Mail size={18} />
                        {editor.email}
                      </div>
                    )}
                    {editor.expertise?.length && (
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2">Research Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {editor.expertise.map((area, idx) => (
                            <span
                              key={idx}
                              className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {editor._id && (
                      <button
                        onClick={() => navigate(`/editor/${editor._id}`)}
                        className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 mt-6"
                      >
                        <ExternalLink size={16} />
                        View Full Profile
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= ASSOCIATE EDITORS ================= */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Users size={28} className="text-blue-600" />
              Associate Editors
            </h2>

            {/* 🔹 SHOW ADD BUTTON ONLY IF EDITOR-IN-CHIEF */}
            {canEdit && (
              <button
                onClick={() => navigate("/admin/add-editor")}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                <Plus size={16} />
                Add Editor
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {editorialBoard.associateEditors.map((editor) => (
              <div
                key={editor._id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold mb-1">{editor.name}</h3>
                {editor.designation && (
                  <p className="text-sm text-gray-600">
                    {editor.designation} {editor.department ? `- ${editor.department}` : ""}
                  </p>
                )}
                {editor.affiliation && (
                  <p className="text-sm text-gray-600">{editor.affiliation}</p>
                )}
                {editor.expertise?.length && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {editor.expertise.map((area, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                )}
                {/* Profile Link Button */}
                {editor.profileLink && (
                  <a
                    href={editor.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                  >
                    View Profile Link
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ================= ADVISORY BOARD ================= */}
        {editorialBoard.advisoryBoard.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Globe className="text-purple-600" size={28} />
              Advisory Board
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              {editorialBoard.advisoryBoard.map((member) => (
                <div key={member._id} className="mb-4">
                  <h3 className="font-bold">{member.name}</h3>
                  {member.affiliation && (
                    <p className="text-sm text-gray-600">{member.affiliation}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditorialBoard;
