
//import dotenv - to load environment variable

//import dot from 'dotenv';
const dot = require('dotenv')

dot.config()

//import connection - mongodb 
require('./connection')

// import express from 'express'

const express = require('express')
// import cors from 'cors'
const cors = require('cors')

//import router

// import router from './routes'
const router = require('./routes')

//create express server
const app = express();

//use of cors - to communicate with the view / frontend
app.use(cors());

// server should use json() - returns a middlewarre that can parse json
app.use(express.json());


//use router
app.use(router);

//to export upload folder from the server side to use in client side
//first aegument sholud the name in which we are using the folder in the client
//second argument - static method to export the folder
//static method should have the path of the export folder
app.use('/uploads',express.static('./uploads'))

//set port for the server
const PORT = 4000 || process.env.PORT;


//listen to the port - to resolve the request
app.listen(PORT , ()=>{
    console.log(`server started at port : ${PORT}`);
})



