import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import controleArRoutes from './routes/controleArRoutes.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// Configura as rotas
app.use('/controle-ar', controleArRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});