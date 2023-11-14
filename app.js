const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Handle both GET and POST requests for /submit
app
  .route("/submit")
  .get((req, res) => {
    res.sendFile(__dirname + "/index.html");
  })
  .post((req, res) => {
    const { paragraph } = req.body;
    res.send(`<h2>Your Post:</h2><p>${paragraph}</p>`);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
