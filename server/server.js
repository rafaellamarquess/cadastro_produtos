import express from "express";


const { static: serveStatic } = express;
const app = express();
const DIR = './public';
const PORT = 3001;



app.use(serveStatic(DIR));
app.listen(PORT, () => console.log('Servidor rodando em' + PORT));