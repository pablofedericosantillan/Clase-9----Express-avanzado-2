const express = require('express');
const productos = require('./api/productos');

// creo una app de tipo express
const app = express();
// incorporo el router
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// indico donde estan los archivos estaticos
app.use(express.static(__dirname + '/public'));


//0
router.get('/', (req, res) => {
    res.send('Bienvenido al desafio Entregable de la Clase 9');
});

// A
router.get('/listar', (req, res) => {
         res.json(productos.listarTodos()) 
});

//B
router.get('/listar/:id', (req, res) => {
    res.json(productos.BuscarId(req.params.id)) 
});

//C
router.post('/guardar/', (req, res) => {
    //console.log(productos.item[productos.item.length-1].id)
productos.item=productos.guardar(req.body)//,productos.item[productos.item.length-1].id)
res.send(req.body);
});

//D
router.put('/actualizar/:id', (req, res) => {
    res.send(productos.actualizar(req.body,req.params.id))
    });
//E
router.delete('/borrar/:id', (req, res) => {
    res.send(productos.borrar(req.params.id));

});


app.use('/api/productos', router);

// pongo a escuchar el servidor en el puerto indicado
const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
