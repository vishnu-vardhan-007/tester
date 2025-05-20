const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '180904',       // use your MySQL password
  database: 'auth_db' // create this DB first in MySQL
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL DB');
});

// Signup endpoint
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(sql, [username, password], (err, result) => {
    if (err) return res.status(500).send('Signup failed');
    res.send('User registered');
  });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, results) => {
    if (err) return res.status(500).send('Login failed');
    if (results.length > 0) res.send('Login successful');
    else res.status(401).send('Invalid credentials');
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));
