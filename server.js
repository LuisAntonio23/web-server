const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000;

// Express hbs 
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


// encargado de renderizar la paguina pricipal
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'luis',
        anio: new Date().getFullYear()
    });
})

//renderiza la segunda paguina
app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });
})


// el puerto hacia el que esta escuchando el express
app.listen(port, () => {
    console.log('escuchando peticiones en el puerto 3000');
})