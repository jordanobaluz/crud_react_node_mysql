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
app.use(express());

app.listen(3001, () => {
  console.log("serv online");
});
