import express from 'express';
import cors from 'cors';


const app = express();

// Configurar middleware para manejar JSON
app.use(express.json());

// Habilitar CORS
app.use(cors());

// Ruta para manejar la solicitud POST del formulario
app.post('/api/contact', async (req, res) => {
  try {
    const formData = req.body;
    console.log('Datos del formulario recibidos:', formData);
    res.status(200).send('Datos recibidos correctamente');
  } catch (error) {
    console.error('Error al procesar los datos:', error);
    res.status(500).send('Error al procesar los datos');
  }
});

// Iniciar el servidor en el puerto 3001
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
