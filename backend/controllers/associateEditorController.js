// const AssociateEditor = require("../models/AssociateEditor");

// // ✅ GET ALL
// exports.getAllAssociateEditors = async (req, res) => {
//   try {
//     const editors = await AssociateEditor.find().sort({ addedAt: -1 });
//     res.status(200).json(editors);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // ✅ ADD
// exports.addAssociateEditor = async (req, res) => {
//   try {
//     const {
//       name,
//       designation,
//       department,
//       affiliation,
//       expertise,
//       profileLink,
//     } = req.body;

//     // Convert comma-separated string to array if needed
//     const expertiseArray = Array.isArray(expertise)
//       ? expertise
//       : (expertise || "").split(",").map((e) => e.trim());

//     const editor = await AssociateEditor.create({
//       name,
//       designation,
//       department,
//       affiliation,
//       expertise: expertiseArray,
//       profileLink,
//     });

//     res.status(201).json({
//       message: "Associate Editor added successfully",
//       editor,
//     });
//   } catch (error) {
//     console.error("Add Editor Error:", error); // ✅ log for debugging
//     res.status(500).json({ message: error.message });
//   }
// };


// // ✅ UPDATE
// exports.updateAssociateEditor = async (req, res) => {
//   try {
//     const { editorId } = req.params;

//     const updatedEditor = await AssociateEditor.findByIdAndUpdate(
//       editorId,
//       req.body,
//       { new: true }
//     );

//     if (!updatedEditor) {
//       return res.status(404).json({ message: "Associate Editor not found" });
//     }

//     res.status(200).json({
//       message: "Associate Editor updated successfully",
//       updatedEditor,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // ✅ DELETE
// exports.deleteAssociateEditor = async (req, res) => {
//   try {
//     const { editorId } = req.params;

//     const deleted = await AssociateEditor.findByIdAndDelete(editorId);

//     if (!deleted) {
//       return res.status(404).json({ message: "Associate Editor not found" });
//     }

//     res.status(200).json({
//       message: "Associate Editor deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



const AssociateEditor = require("../models/AssociateEditor");

// ================= GET ALL =================
exports.getAllAssociateEditors = async (req, res) => {
  try {
    const editors = await AssociateEditor.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: "Fetched all associate editors",
      data: editors,
    });
  } catch (error) {
    console.error("Get All Editors Error:", error);
    res.status(500).json({ message: "Server error: " + error.message });
  }
};

// ================= ADD =================
exports.addAssociateEditor = async (req, res) => {
  try {
    const { name, designation, department, affiliation, expertise, profileLink } = req.body;

   

    if (!name || !designation || !department || !affiliation) {
      return res.status(400).json({ message: "Name, designation, department, and affiliation are required." });
    }

    // Ensure expertise is array
    const expertiseArray = Array.isArray(expertise)
      ? expertise
      : (expertise || "").split(",").map((e) => e.trim()).filter((e) => e);

    const editor = await AssociateEditor.create({
      name,
      designation,
      department,
      affiliation,
      expertise: expertiseArray,
      profileLink,
    });

    res.status(201).json({
      message: "Associate Editor added successfully",
      data: editor,
    });
  } catch (error) {
    console.error("Add Editor Error:", error);
    res.status(500).json({ message: "Server error: " + error.message });
  }
};

// ================= UPDATE =================
exports.updateAssociateEditor = async (req, res) => {
  try {
    const { editorId } = req.params;

    console.log(editorId);

    console.log(req.user);

    if (!editorId) {
      return res.status(400).json({ message: "Editor ID is required" });
    }

    const { expertise } = req.body;

    // Convert expertise to array if it's a comma-separated string
    if (expertise && typeof expertise === "string") {
      req.body.expertise = expertise.split(",").map((e) => e.trim()).filter((e) => e);
    }

    const updatedEditor = await AssociateEditor.findByIdAndUpdate(editorId, req.body, { new: true });

    if (!updatedEditor) {
      return res.status(404).json({ message: "Associate Editor not found" });
    }

    res.status(200).json({
      message: "Associate Editor updated successfully",
      data: updatedEditor,
    });
  } catch (error) {
    console.error("Update Editor Error:", error);
    res.status(500).json({ message: "Server error: " + error.message });
  }
};

// ================= DELETE =================
exports.deleteAssociateEditor = async (req, res) => {
  try {
    const { editorId } = req.params;
    if (!editorId) return res.status(400).json({ message: "Editor ID is required" });

    const deleted = await AssociateEditor.findByIdAndDelete(editorId);

    if (!deleted) {
      return res.status(404).json({ message: "Associate Editor not found" });
    }

    res.status(200).json({ message: "Associate Editor deleted successfully" });
  } catch (error) {
    console.error("Delete Editor Error:", error);
    res.status(500).json({ message: "Server error: " + error.message });
  }
};
