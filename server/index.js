const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

console.log(
  process.env.DB_HOST,
  process.env.DB_NAME,
  process.env.DB_PASSWORD,
  process.env.DB_USER
);
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log(err.message);
    throw err;
  }
  console.log("Connected to database");
});

const app = express();
app.use(cors());
const port = 3000;

app.use(bodyParser.json());

app.get("/blogs", async (req, res) => {
  console.log("hello");
  try {
    const result = await queryDatabase(`SELECT * FROM blogs`);
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data from database");
  }
});
app.use("/blogs/:id", async (req, res) => {
  let sql = "";
  try {
    if (req.method === "GET") {
      sql = `SELECT * FROM BlogDB.blogs where id=${req.params.id}`;
    } else if (req.method === "DELETE") {
      sql = `DELETE FROM BlogDB.blogs where id=${req.params.id}`;
    }

    console.log(sql);
    const result = await queryDatabase(sql);
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data from database");
  }
});
app.post("/create", async (req, res) => {
  console.log("hello");
  const { title, author, body } = req.body;
  console.log(req.body);
  if (!title) {
    res.status(400).send({ error: "Title is required" });
    return;
  }
  try {
    const result = await queryDatabase(
      `INSERT INTO BlogDB.blogs VALUES (null,"${title}", "${author}", "${body}")`
    );
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data from database");
  }
});

function queryDatabase(query) {
  return new Promise((resolve, reject) => {
    db.query(query, (error, results, fields) => {
      if (error) reject(error);
      resolve(results);
    });
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
