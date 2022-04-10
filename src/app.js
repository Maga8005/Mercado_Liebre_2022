const express = require ('express');
const app = express(); // Ejecuto express
const path = require('path'); //module nativo node
const PORT = process.env.PORT || 3000; //Coloco el puerto x en una constante se coloca así para subir a HEROKU


app.use(express.static(path.join(__dirname,'../public'))); // __dirname (es la ruta absoluta de la carpeta raiz) ../ (me devuelvo un nivel). App.use, permite acceder a todos los archivos públicos.

app.listen(PORT, () => console.log('Servidor corriendo')); // Inicializo el servidor.

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html'))); //Devuelvo el archivo home.html al cliente, con ruta absoluta. Se utiliza para todos los archivos que quiero devolver.
app.get('/register.html',(req,res) => res.sendFile(path.join(__dirname,'views','register.html')));
app.get('/login.html',(req,res) => res.sendFile(path.join(__dirname,'views','login.html')));

//GIT IGNORE: Se utiliza esta carpeta para que git ignore. Ej: Node_modules, es una carpeta muy grande e inoficiosa para subir a git.
