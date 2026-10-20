import express from 'express';
import { agregarPaciente, obtenerPacientes } from '../controllers/pacienteController';


const router = express.Router();

router.route('/').post(agregarPaciente).get(obtenerPacientes)


export default router;