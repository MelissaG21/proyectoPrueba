var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hola Mundo' });
});
router.get('/pagina2', function(req, res, next) {
  res.render('pagina2', { title: 'Api' });
});
router.get('/pagina1', function(req, res, next) {
  res.render('pagina1', { title: 'Usuarios' });
});
module.exports = router;
