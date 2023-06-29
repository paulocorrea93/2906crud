import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "senhamysql",
  database: "test",
});

app.get("/", (req, res) => {
    res.json("funcionou")
})

app.listen(5000, () => {
  console.log("conectado ao banco de dados");
});
