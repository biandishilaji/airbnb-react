const express = require('express');
const SessionController = require('../controllers/SessionController');
const SpotControler = require('../controllers/SpotController');
const DashboardController = require('../controllers/DashboardControler');
const BookingController = require('../controllers/BookingController');
const routes = express.Router(); 
const multer = require('multer');
const uploadConfig = require('../config/upload');

// req.body = acessar corpo da requisição (para criação e edição)
routes.get('/', (req, res) => {
    return res.json({
        message: "Hello Omnistack"
    });
})

const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
// single por ser única Imagem, se fosse mais de uma seria array
routes.post('/spots/store', upload.single('thumbnail'),SpotControler.store);
routes.post('/spots', SpotControler.index);
routes.get('/dashboard', DashboardController.show);
routes.post('/spots/:spot_id/bookings', BookingController.store)
// app.post('/users', (req, res) => {
//         return res.json({  message: "Hello Omnistack"
//         });
// })
// RECEBENDO
// app.get('/users', (req, res )=> {
//     return res.json({idade : req.query.idade
//     });
// })

// routes.post('/users', (req, res) => {
//     return res.json(req.body);
// });
// routes.put('/users/:id', (req, res )=> {
//     return res.json({id : req.params.id
//     });
// })

module.exports = routes; //para exportar as rotas