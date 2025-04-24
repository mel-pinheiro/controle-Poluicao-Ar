import express from 'express';
import { getDados, createDados, getEstatisticas, deleteDado } from '../controllers/controleArController.js';

const router = express.Router();

// Rotas existentes
router.get('/dados', getDados);
router.post('/dados', createDados);

// Novas rotas adicionadas
router.get('/estatisticas', getEstatisticas);
router.delete('/dados/:id', deleteDado);

export default router;

