// import express
// import express from 'express'

const projectController = require('./controller/projectController');
const userController = require('./controller/userController')
const express = require('express')
const jwt = require('./middleware/jwtMiddleware');
const multerConfig = require('./middleware/multerMiddleware');

// create an object for rounter
const router = new express.Router();

// set up pat for each request from view / frontEnd

router.post('/register' , userController.registerController);

router.post('/login',userController.loginController);

router.post('/addproject' ,jwt,multerConfig.single('projImage'),projectController.addProjectController);

//allProjects
router.get('/allprojects',jwt,projectController.getAllProjectsController);

//homeProjects
router.get('/homeprojects',projectController.homeProjectsController);

//userProject
router.get('/userprojects',jwt , projectController.userProjectController)

//deleteProject
router.delete('/delete/:id',projectController.deleteProjectController)

//editProject

router.put('/edit-project/:id',jwt,multerConfig.single('projImage'),projectController.editProjectController)

//export the router
module.exports = router;