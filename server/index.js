// const express = require("express");
// const path = require("path");
// const fs = require("fs");

// const PORT = process.env.PORT || 5000;

// const app = express();

// app.get("*", (req, res) => {
//   console.log(req.url);
//   const filePath = path.resolve(__dirname, "../build", "index.html");
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       return console.log(err);
//     }

//     data = data
//       .replace(/__TITLE__/g, req.url)
//       .replace(/__DESCRIPTION__/g, "Home page description.");

//     res.send(data)
//   });
// });


// app.use(express.static(path.resolve(__dirname, "../build")))

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`)
// })
