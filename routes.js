// import express
// import express from 'express'

const projectController = require('./controller/projectController');
const userController = require('./controller/userController')

const express = require('express')

// create an object for rounter
const router = new express.Router();

// set up pat for each request from view / frontEnd

router.post('/register' , userController.registerController);

router.post('/login',userController.loginController)

router.post('/addproject' ,projectController.addProjectController)


//export the router
module.exports = router;