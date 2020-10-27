// const fs = require("fs");

// function loadPuppies(callback, dataFile = "./data.json") {
//   fs.readFile(dataFile, "utf-8", (err, data) => {
//     callback(JSON.parse(data).puppies);
//   });
// }

// function findPuppy(id, callback) {
//   fs.readFile("./data.json", "utf-8", (err, data) => {
//     let puppies = JSON.parse(data).puppies;
//     let puppy = puppies.find((foundPup) => foundPup.id == id);
//     callback(puppy);
//   });
// }

// function savePuppy(id, puppy, callback) {
//   fs.readFile("./data.json", "utf-8", (err, rawData) => {
//     data = JSON.parse(rawData);
//     const updatedPuppies = data.puppies.map((pup) => {
//       if (pup.id != id) return pup;
//       return {
//         ...puppy,
//         id,
//       };
//     });
//     let newData = JSON.stringify({ puppies: updatedPuppies });
//     fs.writeFile("./data.json", newData, callback);
//   });
// }

// module.exports = {
//   findPuppy,
//   savePuppy,
//   loadPuppies,
// };
