const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Add this line to use .env variables

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

// Configure the transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Using the environment variable for email
    pass: process.env.EMAIL_PASSWORD, // Using the environment variable for password
  },
});

app.post('/send-email', (req, res) => {
  console.log(req.body)
  const { name, email, message } = req.body;
console.log(email)
const mailOptions = {
  from: `${name} <${process.env.EMAIL}>`, // Display sender's name but use your email
  to: process.env.EMAIL, // Send email to yourself
  subject: `Contact form submission from ${name}`,
  text: `
    You have a new message from your contact form:
    Name: ${name}
    Email: ${email}
    Message: ${message}
  `,
  replyTo: email
};

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error); // Log the error details
      res.status(500).json({ error: 'Failed to send email', details: error.message });
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

module.exports = app;