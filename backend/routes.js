var express = require('express');
var movies = require('./controllers/moviesController')
var actors = require('./controllers/actorsController')
var router = express.Router();


module.exports = router;
router.get('/deltax/movieList/', movies.getAll);
router.get('/deltax/getSingleMovie/:id', movies.getOne);
router.put('/deltax/editMovie/:id', movies.updateOne);
router.post('/deltax/addMovie/', movies.create);
router.post('/deltax/uploadPhoto/', movies.uploadPiture);
router.post('/deltax/addActor/', actors.create);
router.get('/deltax/getActors/', actors.getAll);


