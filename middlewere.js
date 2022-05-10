// how many type of middlewerw
// ans->5 type of middlewere

const express=require('express')
const app = express();
app.use(logger)

app.get('/',(req,res)=>{
    console.log('welcome to my Home Page')
    res.send("Home Page ");
})
app.get("/users",(req,res)=>{
    console.log("users Page2")
    res.send("users Page");
})
function logger(req,res,next){
    console.log('Log')
    next()
}
function auth(req,res,next){
    if (req.query.admin==='true'){
        next()
    }else{
        res.send("No auth")
    }
    console.log("Auth")
    next()
}
// app.listen(5000)
app.listen(3000,()=>{
    console.log("listing the port at 8000 with express")
})
// middlewere function bnakar ham hajaro rout ka use kr sakte hai