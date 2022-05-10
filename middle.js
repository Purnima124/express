// middlewere function bnakar ham hajaro rout ka use kr sakte hai
const express=require('express')
const app=express();

const checkUrl=function(req,res,next){
    console.log("current route is",req.originalUrl)
next();
}
app.use(checkUrl)
app.get('/',function(req,res){
    res.send('This is Home page')
})
app.get('/login',function(req,res){
    res.send("This is login page")
})
app.get('/about',function(req,res){
    res.send("This is about page")
})
app.listen(4500,()=>{
    console.log('listen the port at 4500 whit express')

})