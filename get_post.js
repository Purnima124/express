var express = require('express');
const { listen } = require('express/lib/application');
const { append } = require('express/lib/response');
var router = express.Router();
const app=express()
port=3004
router.get('/', function(req, res){
   res.send('GET route on things.');
});
router.post('/', function(req, res){
   res.send('POST route on things.');
});
listen(3004,()=>{
   console.log("listen the port at 3004 whit expres")
})
//export this router to use in our index.js
module.exports = router;