import express from "express";
import {getUsers} from "../controllers/UserController.js";
import { addTraining, updateTraining, deleteTraining } from "../controllers/TrainingController.js";

const router = express.Router();

router.get('/karyawan',getUsers);

router.post('/training', addTraining);

router.put('/training/:id', updateTraining); 

router.delete('/training/:id', deleteTraining);

export default router;