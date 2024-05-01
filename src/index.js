const express = require('express');
const app = express();
const morgan = require('morgan');
const { join, dirname } = require('path'); 
const fileUrlToPath = require('url');
const PORT = 3000;

//middlewares
app.use(morgan('dev'));

// Rutas
app.get('/',(req,res)=>{
  res.sendFile(join(__dirname,'public/index.html'));
});

app.get('/edit', (req,res) => {
  res.sendFile(join(__dirname,'public/edit.html'));
});

app.use(express.static(join(__dirname, 'public')));

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error en el servidor');
});
//un cambio
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});