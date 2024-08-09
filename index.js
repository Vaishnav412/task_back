// import dotenv package
require ('dotenv').config()

// import connection file node mongo

require('./Connection/db-connection')

// import express 
const express=require('express')

// import cors
const cors=require('cors')
const router = require('./Router/router')

// create server using express
const taskServer=express()

// use cors in server
taskServer.use(cors())

// parse json data in server
taskServer.use(express.json())

taskServer.use(router)

// customize port
const PORT=4000||process.env.PORT

// run server application 

taskServer.listen(PORT,()=>{
    console.log(`task server started at port:${PORT}`);
})
