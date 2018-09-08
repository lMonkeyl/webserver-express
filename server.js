const express = require('express')
const app = express()


const hbs = require('hbs');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))


hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');


hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'MF la maquina',
        anio: new Date().getFullYear()
    });
})
app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });
})

app.listen(port, () => console.log(`Escuchando el puerto ${ port }`));