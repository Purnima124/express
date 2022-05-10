const {Sequelize,DataTypes}=require('sequelize')
const db=new Sequelize("UUU3","root", "Ankit@12",{
    host:"localhost",
    dialect:"mysql",
    pool:
    {
        max:5,
        min:0,
        idle:10000
    }
})

module.exports = db

// https://docs.google.com/document/d/1Gf8i_7WRxQfGtI-MDZepCm2vrE8RwnEzVwe9UJc32mg/edit