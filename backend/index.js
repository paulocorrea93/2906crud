import express from "express";

const app = express();

app.listen(5000, () => {
    console.log("conectado ao banco de dados")
})