// Rauting
// www.thap.com - welcome to my home page
// /about - welcome to my page
// / contact - welcome to my contact page
// temp - welcome to my temp
// import express from "express";

const express=require('express')
const app = express();
port = 3000;
app.get("/",(req,res)=>{
    res.send("welcome to my home page");
})
app.get("/about",(req,res)=>{
    res.send("welcome to my about page");
})
app.get("/contact",(req,res)=>{
    res.send("welcome to my contact page");
})
app.get("/temp",(req,res)=>{
    res.send("welcome to my temp page");
})
// app.listen(9000,()=>{
//     console.log("listing the port at 7000 with express")
// })

app.listen(9000,()=>{
    console.log(`listing the port at 7000 with express ${port}`)
})
