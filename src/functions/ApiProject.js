import { serveless } from 'serveless-http';
const express = require('express');
const cors = require('cors');
const User = require('./User'); // Ajusta la ruta según la ubicación del archivo

const router = express.Router();
const app = express();

app.use(express.json());
app.use(cors());


let users = [
    new User('123', 'Juan', 'juan@gmail.com','123')
];

// Endpoint para crear un nuevo usuario (POST /users)
router.post('/users', (req, res) => {
    const { dpi, username, email, password } = req.body;
    console.log('*********** metoto login');
    console.log(dpi, username, email, password );

    // Validar que el correo electrónico no exista ya en el sistema
    const userExists = users.find(user => user.email === email);
    console.log('existe',userExists);
    if (userExists) {
        return res.status(200).json({ message: 'El correo electrónico ya está registrado.' });
    }else{
    // Agregar nuevo usuario
        
        const newUser = { dpi, username, email, password };
              users.push(newUser);
              console.log('newUser');
              console.log(users);
        return res.status(201).json({ message: 'Usuario creado exitosamente' }); 
    }


});

// Ruta de login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    console.log('*********** metoto login');
    console.log(username, password);
    console.log(users);
    // Validar si el usuario existe y la contraseña es correcta
    const user = users.find(user => user.email === username && user.password === password);
    console.log(!user);
    console.log(user);
    if (!user) {
        return res.status(200).json({ message: 'Correo electrónico o contraseña incorrecta' });
    }

    // Login exitoso
    res.status(201).json({ message: 'Login exitoso'});
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.use(('/.netlify/functions/server', router));
export const handler = serveless(app);  // Exportar la función serverless