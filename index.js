import express from "express";
import conectarDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 4000;

conectarDB();

app.use('/', (req, res) => {
    res.send('Hola mundo');
});

app.listen(PORT, () => {
    console.log(`Funcionando en el puerto ${PORT}`);
});