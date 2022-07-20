const express = require("express");
const app = express();

const cors = require("cors");

const mysql = require("mysql2");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "crudgames",
});

// app.get("/", (req, res) => {
//   let SQL =
//     "INSERT INTO games (name, cost, category) VALUES ('Far Cry 5', '120', 'ação')";

//   db.query(SQL, (err, result) => {
//     console.log(err);
//   });
// });

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { cost } = req.body;
  const { category } = req.body;

  let SQL = "INSERT INTO games (name, cost, category) VALUES ( ?,?,?)";

  db.query(SQL, [name, cost, category], (err, result) => {
    console.log(err);
  });
});

app.get("/getCards", (req, res) => {
  let SQL = "SELECT * FROM games";

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.listen(3001, () => {
  console.log("serv online");
});
