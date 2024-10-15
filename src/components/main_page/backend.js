const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hello@hexlabs.org",
    pass: "your_password", // replace with hello@hexlabs.org password
  },
});

app.post("/send-email", (req, res) => {
  const { email, subject, text } = req.body;

  const mailOptions = {
    from: "hello@hexlabs.org",
    to: email,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
