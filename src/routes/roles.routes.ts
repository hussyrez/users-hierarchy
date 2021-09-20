import express, { Request, Response } from "express";
import controller from '../api/controllers/role.controller';

const router  = express.Router(); 
// 3.
// router.post('/tea', controller.newTea); 
router.post('/addRoles', controller.addRoles);
router.get('/getRoles', controller.getRoles);
// 4. 
module.exports = router; // ex