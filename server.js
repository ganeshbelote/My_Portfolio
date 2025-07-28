import express from 'express'
import path from 'path'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
dotenv.config()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/email', async (req, res) => {
  const { email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD 
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `Message from ${email}: ${subject}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send({ success: true });
  } catch (error) {
    res.send({ success: false, error });
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/')
})
