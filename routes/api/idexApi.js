var express = require('express');
var router = express.Router();
let apiService = require('../../services/apiService')

router.get('/getInfo/', function (req, res, next) {
  apiService.getInfo().then((response)=>{
    res.status(200)
    res.json( { data: response } );
  })
  
});
router.post('/create/', function (req, res, next) {
  console.log(req.body)
  apiService.create(req.body).then((response)=>{
    res.status(200)
    
  })
  
});

/*router.patch('/modificar/', function (req, res, next) {
  var id = req.query.id;
  //console.log(req.body)
  apiService.modificar(req.query.id).then((response)=>{
    res.status(200)
  })
  
});*/

router.delete('/eliminar/:id', function (req, res, next) {
  //console.log(req.body)
  var id = req.params.id;
  apiService.eliminar(req.query.id).then((response)=>{
    res.status(200)
  })
  
});

module.exports = router;
