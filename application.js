var express = require('express');
var app = express();

app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});
app.listen(7000,()=>{
    console.log("port is runing express wiht 7000 ")
})
