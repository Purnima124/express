var express = require('express');  
var app = express();  
app.get('/',function(req, res){  
   console.log("Got a GET request for the homepage");  
   res.send('Welcome to JavaTpoint!');  
})  

app.post('/post',function(req, res){  
   console.log("Got a POST request for the homepage");  
   res.send('I am Impossible! ');  
})  

app.put('/put',function(req,res){
   console.log("put is done")
   res.send('put is succfully')
})
app.delete('/', function (req, res) {  
      console.log("Got a DELETE request ");  
      res.send('I am Deleted!');  
   })  
app.listen(9000,()=>{
   console.log("listing the port at 9000 with express")
})

