import express, { Request, Response } from "express";
import controller from '../api/controllers/user.controller';

const router  = express.Router(); 

router.post('/addUsers', controller.addUsers);
router.get('/getUsers', controller.getUsers);
router.get('/getSubOrdinates/:id', controller.getSubordinates);

// 4. 
module.exports = router; // ex