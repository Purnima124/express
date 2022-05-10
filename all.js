const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send("I Love You Maa")
})
app.post('/',(req,res)=>{
    res.send("My Name is purnima and I am from Bihar")
})

app.listen(7000,()=>{
    console.log('server is listen on port 7000')
})