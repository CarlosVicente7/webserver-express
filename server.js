const express = require('express');
var path = require('path');
const hbs = require('hbs');
const app = express();

require('./hbs/helpers');

const puerto = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales', function(err) {});

app.set('view engine', 'hbs');


//app.set('views', path.join(__dirname, "views"));

app.get('/', (req, res) => {
    res.render('index', {
        nombre: 'Carlos Vicente Yriarte'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'Carlos Vicente Yriarte'
    });
});
// app.get('/data', (req, res) => {
//     res.send('Hola Data');
// });

app.listen(puerto, () => {
    console.log(`Escuchando peticiones en el puerto ${ puerto }`);
});