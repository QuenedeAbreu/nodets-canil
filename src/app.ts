import express from 'express';
import path from 'path';
const app = express();
import dotenv from 'dotenv';
import mustache from 'mustache-express';

dotenv.config();

// habilitar o uso de dados via POST
app.use(express.urlencoded({ extended: true }));
// Acessa requisições via POST
app.use(express.json());

//configuração de template engine
app.set('view engine', 'mst');
app.set('views', path.join(__dirname, 'views'));
app.engine('mst', mustache(__dirname + '/views/partials', '.mst'));

//configurar pasta pública
app.use(express.static(path.join(__dirname, '../public')));

export default app;