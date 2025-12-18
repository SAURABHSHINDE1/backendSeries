// const express  = require('express');

// const app = express()

// const port = 3000

// app.get("/" , (req, res)=>{

//     res.send("hello i am first api data")

// })

// app.listen(port , ()=>{
//     console.log(`Servre is Runing on port ${port}`)
// })

import express from 'express'
import mysql from 'mysql2'

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"system",
    database:"user_info"
})

db.connect((err)=>{

    if(err){
        console.log(`some error will occur in db ${err}`)
    }

    console.log("Database is connected sucessflly !!")
})


const app = express()

const port = 3000

app.get('/user', (req , res)=>{

    db.query("SELECT * FROM user_data" , (err , result)=>{

        if(err){
            console.log(`some error in db ${err}`)
        }

        res.send(result)

    })

})


app.get('/user/rich', (req , res)=>{

    db.query("SELECT * FROM user_data WHERE salary > 50000" , (err , result)=>{

        if(err){
            console.log(`some error in db ${err}`)
        }

        res.send(result)

    })

})





app.listen(port , ()=>{
    console.log(`Servre is Runing on ${port} `)
})
