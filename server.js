const express = require("express");
const sendMail = require("./mail.js");

const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

// Data parsing
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.post("/email", (req, res) => {
  console.log("Data: ", req.body);

  const { name, email, subject, text } = req.body;

  sendMail(name, email, subject, text, function (err, data) {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else {
      res.json({ message: "Email Sent!" });
    }
  });
});

app.post("/email", (req, res) => {
  console.log("Data: ", req.body);

  const { name, email, subject, text } = req.body;

  sendMail2(name, email, subject, text, function (err, data) {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else {
      res.json({ message: "Email Sent!" });
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use(
  express.static(__dirname + "/public", {
    extensions: ["html", "htm"],
  })
);

app.listen(PORT, () => console.log("Server is starting on PORT, ", PORT));
