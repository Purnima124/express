// const express=require('express')
// const app=express()
// port=3003
// app.use(function(err, req, res, next) {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
//  });
//  app.listen(9000,()=>{
//     console.log("listing the port at 9000 with express")
//  })

var express = require('express');
const { append } = require('express/lib/response');
var router = express.Router();
const app=express()
port=3002
router.get('/', function(req, res){
   res.send('GET route on things.');
});
router.post('/', function(req, res){
   res.send('POST route on things.');
});
//export this router to use in our index.js
app.listen(3002,()=>{
    console.log("listen the port at 3002 whit expres")
})
// module.exports = router;