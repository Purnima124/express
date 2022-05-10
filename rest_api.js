var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Purnima@123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE nodemydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
})

// const express=require("express")
// const mysql=express('mysql');
// const db=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Purnima@123"

// })
// db.connect(err=>{
//     if (err){
//         throw err
//     }
//     console.log("mysql connected")
// })
// const app=express();

// app.get('/createbd',(req,res)=>{
//     let sql='CREATE DATABASE nodemysql'
//     db.query(sql,err=>{
//         if(err){
//             throw arr
//         }
//         res.send('Database Creaed')
//     })
// })
// app.listen('3000',()=>{
//     console.log('server start on port 3000')
// })











 