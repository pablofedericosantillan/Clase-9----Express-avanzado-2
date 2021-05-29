const express = require('express');
const productos = require('./api/productos');

// creo una app de tipo express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//0
app.get('/', (req, res) => {
    res.send('Bienvenido al desafio Entregable de la Clase 8');
});

// A
app.get('/api/productos/listar', (req, res) => {
    if(productos.item.length != 0){
        res.send(JSON.stringify(productos.item,null,'\t'));
    }else{
         res.send( {error: "no hay productos cargados" }) 
    }
});

//B
app.get('/api/productos/listar/:id', (req, res) => {
    if( req.params.id <= productos.item.length ){
    res.send(JSON.stringify(productos.item[req.params.id-1],null,'\t'));
    }else{
    res.send( {error: "parametro fuera de rango'" }) 
    }
});


//C
app.post('/api/productos/guardar/', (req, res) => {
productos.item=productos.guardar(req.body)
res.send(JSON.stringify(productos.item[productos.item.length-1],null,'\t'));
});

// pongo a escuchar el servidor en el puerto indicado
const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
