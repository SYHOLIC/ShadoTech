const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// ✅ Create the app first
const app = express();

// ✅ Then apply middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['POST'],
}));
app.use(bodyParser.json());

// ✅ Define your route
app.post('/contact', (req, res) => {
  const { name, email, contactNo } = req.body;
  console.log('Form data received:', { name, email, contactNo });

  res.json({ message: 'Form submission successful!' });
});

// ✅ Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
