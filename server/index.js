const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
  host: 'us-cdbr-east-06.cleardb.net',
  user: 'b9275475305c31',
  password: '345afe9b',
  database: 'heroku_ac29c9b918bb53a',
});

app.use(cors());
app.use(express.json());

app.post('/api/user/register', (req, res) => {
  const {
    email,
    username,
    password,
    createdDate,
    modifiedDate
  } = req.body;

  const sqlInsert = "INSERT INTO users (email, username, password, created_date, modified_date) VALUES (?, ?, ?, ?, ?)";

  db.query(
    sqlInsert,
    [
      email,
      username,
      password,
      createdDate,
      modifiedDate
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Running on port 3001");
});
