// http://localhost:8000/

const express=require('express')
const app = express();
app.get("/",(req,res)=>{
    res.send("hello world purnima this with express ");
})
app.get("/",(req,res)=>{
    res.send("welcome to my home page");
})
app.listen(8000,()=>{
    console.log("listing the port at 8000 with express")
})

// install i express
// npm init-y
// //visit localhost:3000
// // assuming you have done 1) npm init 2) npm install express


