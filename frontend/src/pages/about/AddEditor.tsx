// import React, { useEffect, useState } from "react";

// interface Editor {
//   _id?: string;
//   name: string;
//   designation: string;
//   department: string;
//   affiliation: string;
//   expertise: string; // comma separated in frontend
//   profileLink?: string;
// }

// const AddEditor: React.FC = () => {
//   // ================= DEFAULT ROLE AUTO SET =================
//   const storedUser = localStorage.getItem("user");
//   let user;

//   if (storedUser) {
//     user = JSON.parse(storedUser);
//   } else {
//     user = { role: "ChiefEditor" };
//     localStorage.setItem("user", JSON.stringify(user));
//   }

//   const isChiefEditor = user?.role === "ChiefEditor";

//   // ================= STATES =================
//   const [editors, setEditors] = useState<Editor[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [editingId, setEditingId] = useState<string | null>(null);

//   const [form, setForm] = useState<Editor>({
//     name: "",
//     designation: "",
//     department: "",
//     affiliation: "",
//     expertise: "",
//     profileLink: "",
//   });

//   const apiUrl =
//     import.meta.env.VITE_API_URL || "http://localhost:3000";

//   // ================= FETCH ALL =================
//   const fetchEditors = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${apiUrl}/api`);

//       if (!res.ok) throw new Error("Failed to fetch");

//       const data = await res.json();
//       setEditors(data.data || data);
//     } catch (error) {
//       alert("Error fetching associate editors");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchEditors();
//   }, []);

//   // ================= HANDLE CHANGE =================
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // ================= SUBMIT (ADD / UPDATE) =================
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!isChiefEditor) {
//       alert("Only Chief Editor can modify");
//       return;
//     }

//     try {
//       const method = editingId ? "PUT" : "POST";
//       const url = editingId
//         ? `${apiUrl}/api/${editingId}`
//         : `${apiUrl}/api`;

//       const res = await fetch(url, {
//         method,
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...form,
//           expertise: form.expertise
//             .split(",")
//             .map((e) => e.trim()),
//         }),
//       });

//       if (!res.ok) throw new Error("Save failed");

//       alert(editingId ? "Updated successfully" : "Added successfully");

//       setForm({
//         name: "",
//         designation: "",
//         department: "",
//         affiliation: "",
//         expertise: "",
//         profileLink: "",
//       });

//       setEditingId(null);
//       fetchEditors();
//     } catch (error) {
//       alert("Error saving editor");
//       console.error(error);
//     }
//   };

//   // ================= DELETE =================
//   const handleDelete = async (id?: string) => {
//     if (!id) return;

//     if (!window.confirm("Delete this editor?")) return;

//     try {
//       const res = await fetch(`${apiUrl}/api/${id}`, {
//         method: "DELETE",
//       });

//       if (!res.ok) throw new Error("Delete failed");

//       alert("Deleted successfully");
//       fetchEditors();
//     } catch (error) {
//       alert("Delete error");
//       console.error(error);
//     }
//   };

//   // ================= EDIT =================
//   const handleEdit = (editor: any) => {
//     setForm({
//       ...editor,
//       expertise: editor.expertise?.join(", ") || "",
//     });
//     setEditingId(editor._id || null);
//   };

//   // ================= UI =================
//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-5xl mx-auto px-4">

//         <h1 className="text-3xl font-bold mb-6">
//           Associate Editor Management
//         </h1>

//         {/* ================= FORM ================= */}
//         {isChiefEditor && (
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white p-6 rounded shadow mb-8"
//           >
//             <h2 className="text-xl font-semibold mb-4">
//               {editingId ? "Update Associate Editor" : "Add Associate Editor"}
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//               <input
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="Name"
//                 required
//                 className="border p-2 rounded"
//               />

//               <input
//                 name="designation"
//                 value={form.designation}
//                 onChange={handleChange}
//                 placeholder="Designation"
//                 required
//                 className="border p-2 rounded"
//               />

//               <input
//                 name="department"
//                 value={form.department}
//                 onChange={handleChange}
//                 placeholder="Department"
//                 required
//                 className="border p-2 rounded"
//               />

//               <input
//                 name="affiliation"
//                 value={form.affiliation}
//                 onChange={handleChange}
//                 placeholder="Affiliation"
//                 required
//                 className="border p-2 rounded"
//               />

//               <input
//                 name="expertise"
//                 value={form.expertise}
//                 onChange={handleChange}
//                 placeholder="Expertise (comma separated)"
//                 className="border p-2 rounded"
//               />

//               <input
//                 name="profileLink"
//                 value={form.profileLink}
//                 onChange={handleChange}
//                 placeholder="Profile Link"
//                 className="border p-2 rounded"
//               />

//             </div>

//             <button
//               type="submit"
//               className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               {editingId ? "Update" : "Add"}
//             </button>
//           </form>
//         )}

//         {/* ================= LIST ================= */}
//         <div className="bg-white p-6 rounded shadow">
//           <h2 className="text-xl font-semibold mb-4">
//             All Associate Editors
//           </h2>

//           {loading ? (
//             <p>Loading...</p>
//           ) : editors.length === 0 ? (
//             <p>No associate editors found.</p>
//           ) : (
//             editors.map((editor: any) => (
//               <div
//                 key={editor._id}
//                 className="border-b py-3 flex justify-between items-center"
//               >
//                 <div>
//                   <p className="font-bold">{editor.name}</p>
//                   <p className="text-sm text-gray-600">
//                     {editor.designation} - {editor.affiliation}
//                   </p>
//                 </div>

//                 {isChiefEditor && (
//                   <div className="flex gap-3">
//                     <button
//                       onClick={() => handleEdit(editor)}
//                       className="bg-yellow-500 text-white px-3 py-1 rounded text-sm"
//                     >
//                       Edit
//                     </button>

//                     <button
//                       onClick={() => handleDelete(editor._id)}
//                       className="bg-red-600 text-white px-3 py-1 rounded text-sm"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ))
//           )}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AddEditor;




// import React, { useEffect, useState } from "react";

// interface Editor {
//   _id?: string;
//   name: string;
//   designation: string;
//   department: string;
//   affiliation: string;
//   expertise: string; // comma separated in frontend
//   profileLink?: string;
// }

// const AddEditor: React.FC = () => {
//   // ================= AUTO ROLE DEFAULT =================
// //   const storedUser = localStorage.getItem("user");
// //   let user = storedUser ? JSON.parse(storedUser) : { role: "ChiefEditor" };

// //   if (!storedUser) localStorage.setItem("user", JSON.stringify(user));

//   // Backend role check required, frontend only shows buttons
//   const [editors, setEditors] = useState<Editor[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [editingId, setEditingId] = useState<string | null>(null);

//   const [form, setForm] = useState<Editor>({
//     name: "",
//     designation: "",
//     department: "",
//     affiliation: "",
//     expertise: "",
//     profileLink: "",
//   });

//   const apiUrl =
//     import.meta.env.VITE_API_URL || "http://localhost:3000";

//   // ================= FETCH ALL =================
//   const fetchEditors = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${apiUrl}/api`);
//       if (!res.ok) throw new Error("Failed to fetch");
//       const data = await res.json();
//       setEditors(data.data || data);
//     } catch (error) {
//       alert("Error fetching associate editors");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchEditors();
//   }, []);

//   // ================= HANDLE CHANGE =================
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // ================= SUBMIT (ADD / UPDATE) =================
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const method = editingId ? "PUT" : "POST";
//       const url = editingId ? `${apiUrl}/api/${editingId}` : `${apiUrl}/api`;

//       const res = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...form,
//           expertise: form.expertise.split(",").map((e) => e.trim()),
//         }),
//       });

//       if (!res.ok) throw new Error("Save failed");

//       alert(editingId ? "Updated successfully" : "Added successfully");

//       setForm({
//         name: "",
//         designation: "",
//         department: "",
//         affiliation: "",
//         expertise: "",
//         profileLink: "",
//       });

//       setEditingId(null);
//       fetchEditors();
//     } catch (error) {
//       alert("Error saving editor");
//       console.error(error);
//     }
//   };

//   // ================= DELETE =================
//   const handleDelete = async (id?: string) => {
//     if (!id) return;
//     if (!window.confirm("Delete this editor?")) return;

//     try {
//       const res = await fetch(`${apiUrl}/api/${id}`, { method: "DELETE" });
//       if (!res.ok) throw new Error("Delete failed");
//       alert("Deleted successfully");
//       fetchEditors();
//     } catch (error) {
//       alert("Delete error");
//       console.error(error);
//     }
//   };

//   // ================= EDIT =================
//   const handleEdit = (editor: any) => {
//     setForm({
//       ...editor,
//       expertise: editor.expertise?.join(", ") || "",
//     });
//     setEditingId(editor._id || null);
//   };

//   // ================= UI =================
//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-5xl mx-auto px-4">

//         <h1 className="text-3xl font-bold mb-6">
//           Associate Editor Management
//         </h1>

//         {/* ================= FORM ================= */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white p-6 rounded shadow mb-8"
//         >
//           <h2 className="text-xl font-semibold mb-4">
//             {editingId ? "Update Associate Editor" : "Add Associate Editor"}
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Name"
//               required
//               className="border p-2 rounded"
//             />
//             <input
//               name="designation"
//               value={form.designation}
//               onChange={handleChange}
//               placeholder="Designation"
//               required
//               className="border p-2 rounded"
//             />
//             <input
//               name="department"
//               value={form.department}
//               onChange={handleChange}
//               placeholder="Department"
//               required
//               className="border p-2 rounded"
//             />
//             <input
//               name="affiliation"
//               value={form.affiliation}
//               onChange={handleChange}
//               placeholder="Affiliation"
//               required
//               className="border p-2 rounded"
//             />
//             <input
//               name="expertise"
//               value={form.expertise}
//               onChange={handleChange}
//               placeholder="Expertise (comma separated)"
//               className="border p-2 rounded"
//             />
//             <input
//               name="profileLink"
//               value={form.profileLink}
//               onChange={handleChange}
//               placeholder="Profile Link"
//               className="border p-2 rounded"
//             />
//           </div>

//           <button
//             type="submit"
//             className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             {editingId ? "Update" : "Add"}
//           </button>
//         </form>

//         {/* ================= LIST ================= */}
//         <div className="bg-white p-6 rounded shadow">
//           <h2 className="text-xl font-semibold mb-4">All Associate Editors</h2>

//           {loading ? (
//             <p>Loading...</p>
//           ) : editors.length === 0 ? (
//             <p>No associate editors found.</p>
//           ) : (
//             editors.map((editor: any) => (
//               <div
//                 key={editor._id}
//                 className="border-b py-3 flex justify-between items-center"
//               >
//                 <div>
//                   <p className="font-bold">{editor.name}</p>
//                   <p className="text-sm text-gray-600">
//                     {editor.designation} - {editor.affiliation}
//                   </p>
//                 </div>

//                 {/* 🔹 Edit/Delete buttons shown only if backend allows */}
//                 <div className="flex gap-3">
//                   <button
//                     onClick={() => handleEdit(editor)}
//                     className="bg-yellow-500 text-white px-3 py-1 rounded text-sm"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(editor._id)}
//                     className="bg-red-600 text-white px-3 py-1 rounded text-sm"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddEditor;


import React, { useEffect, useState } from "react";

interface Editor {
  _id?: string;
  name: string;
  designation: string;
  department: string;
  affiliation: string;
  expertise: string; // comma separated in frontend
  profileLink?: string;
}

const AddEditor: React.FC = () => {
  const [editors, setEditors] = useState<Editor[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [form, setForm] = useState<Editor>({
    name: "",
    designation: "",
    department: "",
    affiliation: "",
    expertise: "",
    profileLink: "",
  });

  const apiUrl =
    import.meta.env.VITE_API_URL || "http://localhost:3000";

  // Get token from localStorage (if backend requires JWT)
  const token = localStorage.getItem("token");

  // ================= FETCH ALL =================
  const fetchEditors = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${apiUrl}/api`, {
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      });
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setEditors(data.data || data);
    } catch (error) {
      alert("Error fetching associate editors");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEditors();
  }, []);

  // ================= HANDLE CHANGE =================
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ================= SUBMIT (ADD / UPDATE) =================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingId ? "PUT" : "POST";
      const url = editingId ? `${apiUrl}/api/${editingId}` : `${apiUrl}/api`;

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify({
          ...form,
          expertise: form.expertise.split(",").map((e) => e.trim()),
        }),
      });

      if (!res.ok) throw new Error("Save failed");

      alert(editingId ? "Updated successfully" : "Added successfully");

      setForm({
        name: "",
        designation: "",
        department: "",
        affiliation: "",
        expertise: "",
        profileLink: "",
      });
      setEditingId(null);
      fetchEditors();
    } catch (error) {
      alert("Error saving editor");
      console.error(error);
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id?: string) => {
    if (!id) return;
    if (!window.confirm("Delete this editor?")) return;

    try {
      const res = await fetch(`${apiUrl}/api/${id}`, {
        method: "DELETE",
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      });
      if (!res.ok) throw new Error("Delete failed");
      alert("Deleted successfully");
      fetchEditors();
    } catch (error) {
      alert("Delete error");
      console.error(error);
    }
  };

  // ================= EDIT =================
  const handleEdit = (editor: any) => {
    setForm({
      ...editor,
      expertise: editor.expertise?.join(", ") || "",
    });
    setEditingId(editor._id || null);
  };

  // ================= UI =================
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">
          Associate Editor Management
        </h1>

        {/* ================= FORM ================= */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">
            {editingId ? "Update Associate Editor" : "Add Associate Editor"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="border p-2 rounded"
            />
            <input
              name="designation"
              value={form.designation}
              onChange={handleChange}
              placeholder="Designation"
              required
              className="border p-2 rounded"
            />
            <input
              name="department"
              value={form.department}
              onChange={handleChange}
              placeholder="Department"
              required
              className="border p-2 rounded"
            />
            <input
              name="affiliation"
              value={form.affiliation}
              onChange={handleChange}
              placeholder="Affiliation"
              required
              className="border p-2 rounded"
            />
            <input
              name="expertise"
              value={form.expertise}
              onChange={handleChange}
              placeholder="Expertise (comma separated)"
              className="border p-2 rounded"
            />
            <input
              name="profileLink"
              value={form.profileLink}
              onChange={handleChange}
              placeholder="Profile Link"
              className="border p-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {editingId ? "Update" : "Add"}
          </button>
        </form>

        {/* ================= LIST ================= */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">All Associate Editors</h2>

          {loading ? (
            <p>Loading...</p>
          ) : editors.length === 0 ? (
            <p>No associate editors found.</p>
          ) : (
            editors.map((editor: any) => (
              <div
                key={editor._id}
                className="border-b py-3 flex justify-between items-center"
              >
                <div>
                  <p className="font-bold">{editor.name}</p>
                  <p className="text-sm text-gray-600">
                    {editor.designation} - {editor.affiliation}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleEdit(editor)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(editor._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AddEditor;
