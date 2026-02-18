// // // middleware/checkChiefEditor.js
// // module.exports = (req, res, next) => {
// // //   const user = req.user; // assume JWT auth middleware already added

// //   if (!user) {
// //     return res.status(401).json({ message: "Unauthorized" });
// //   }

// //   if (!user.roles?.editorInChief) {
// //     return res.status(403).json({ message: "Access denied. Chief Editor only." });
// //   }

// //   next();
// // };




// // middleware/checkChiefEditor.js

// module.exports = (req, res, next) => {
//   // JWT auth middleware should already set req.user
//   const user = req.user;

//   if (!user) {
//     return res.status(401).json({ message: "Unauthorized. User not logged in." });
//   }

//   if (!user.roles?.editorInChief) {
//     return res.status(403).json({ message: "Access denied. Chief Editor only." });
//   }

//   // User is Chief Editor, proceed
//   next();
// };



// module.exports = (req, res, next) => {
// //   const user = req.user;
// //   console.log(user);
//   if (!user) return res.status(401).json({ message: "Unauthorized" });
//   if (!user.roles?.editorInChief)
//     return res.status(403).json({ message: "Access denied. Chief Editor only." });

//   next();
// };



// middleware/authorize.js

// rolesArray example: ['editor', 'editorInChief']

const authorize = (rolesArray) => (req, res, next) => {
  if (!req.user) return res.status(401).json({ message: "Unauthorized: user missing" });

  // Check if user has at least one of the allowed roles
  const hasRole = rolesArray.some(role => req.user.roles[role]);

  if (!hasRole) {
    return res.status(401).json({ message: "Unauthorized: insufficient role" });
  }

  next();
};

module.exports = authorize;
