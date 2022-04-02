var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hola Mundo' });
});
router.get('/pagina', function(req, res, next) {
  res.render('pagina2', { title: 'Hola Mundo' });
});
module.exports = router;
