// import express
// import express from 'express'

const userController = require('./controller/userController')

const express = require('express')

// create an object for rounter
const router = new express.Router();

// set up pat for each request from view / frontEnd

router.post('/register' , userController.registerController)


//export the router
module.exports = router;