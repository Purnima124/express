const express=require('express')
const { route } = require('express/lib/application')
// app ke under bahut sare mathod or proptis aa chuke hai
const app=express()
// besicaly a ak function hota hai
// app.get(route,callback)
// req,res 2 paramiter pass karte hai
app.get("/",(req,res))
// www.thapatechncil.com

// 
// API
// get-read
// post-create
// put-update
// delete-delete