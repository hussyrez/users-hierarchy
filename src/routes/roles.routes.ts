import express, { Request, Response } from "express";
import controller = require('../api/controllers/role.controller'); 

const router  = express.Router(); 
// 3.
// router.post('/tea', controller.newTea); 

// 4. 
module.exports = router; // ex