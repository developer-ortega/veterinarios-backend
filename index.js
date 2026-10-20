import express from "express";
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
import pacienteRoutes from "./routes/pacienteRoutes.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000;

conectarDB();

app.use("/api/veterinarios", veterinarioRoutes);
app.use("/api/pacientes", pacienteRoutes);

app.listen(PORT, () => {
    console.log(`Funcionando en el puerto ${PORT}`);
});