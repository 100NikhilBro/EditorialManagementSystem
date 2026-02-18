const express = require("express");
const router = express.Router();

// const checkChiefEditor = require("../middleware/checkChiefEditor");
const authorize = require("../middleware/checkChiefEditor");

const {auth} = require("../middleware/auth");


const {
  getAllAssociateEditors,
  addAssociateEditor,
  updateAssociateEditor,
  deleteAssociateEditor,
} = require("../controllers/associateEditorController");

// Public GET (optional – remove middleware if public view allowed)
router.get("/", getAllAssociateEditors);

// ChiefEditor only for modifications
// router.post("/", roleMiddleware("ChiefEditor"), addAssociateEditor);


// router.post("/",authorize('editorInChief'), addAssociateEditor);
// router.post("/",addAssociateEditor);


// router.put("/:editorId",authorize('editorInChief'), updateAssociateEditor);
// router.put("/:editorId",auth,updateAssociateEditor);


// router.delete("/:editorId",deleteAssociateEditor);
// router.delete("/:editorId",authorize('editorInChief'),deleteAssociateEditor);


router.post("/", auth, authorize(['editorInChief']), addAssociateEditor);
router.put("/:editorId", auth, authorize(['editorInChief']), updateAssociateEditor);
router.delete("/:editorId", auth, authorize(['editorInChief']), deleteAssociateEditor);


module.exports = router;
