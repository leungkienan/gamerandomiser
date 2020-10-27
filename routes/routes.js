// const express = require("express");
// const router = express.Router();
// const fs = require("fs");
// const { findPuppy, savePuppy, loadPuppies } = require("../functionBuilder");

// // const finder = require('./function-helpers')
// router.get("/", (req, res) => {
//   res.redirect("/puppies");
// });

// // loads home page of puppies
// router.get("/puppies", (req, res) => {
//   loadPuppies((puppies) => {
//     res.render("puppies/index", { puppies });
//   });
// });

// // click puppy to load that page
// router.get("/puppies/:id", (req, res) => {
//   findPuppy(req.params.id, (puppy) => {
//     res.render("puppies/view", puppy);
//   });
// });

// // click edit on puppy to change details
// router.get("/puppies/edit/:id", (req, res) => {
//   findPuppy(req.params.id, (puppy) => {
//     res.render("puppies/edit", puppy);
//   });
// });

// // submit the changes and overwrite data.json
// router.post("/puppies/edit/:id", (req, res) => {
//   savePuppy(req.params.id, req.body, () => {
//     res.redirect("/puppies");
//   });
// });

// module.exports = router;
