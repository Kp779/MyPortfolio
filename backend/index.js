const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Add this line to use .env variables

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Configure the transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Using the environment variable for email
    pass: process.env.EMAIL_PASSWORD, // Using the environment variable for password
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL, // Your email from environment variable
    subject: `Contact form submission from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
