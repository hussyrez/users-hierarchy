import express, { Request, Response } from "express";
import controller from '../api/controllers/user.controller';

const router  = express.Router(); 

// 3.
// router.post('/tea', teaController.newTea); 
// router.get('/getsubordinates', (req: Request, res: Response) => {

//     res.send(data.users);
// });

// app.get('/book/:isbn', (req, res) => {
//     // Reading isbn from the URL
//     const isbn = req.params.isbn;
// });
  
// router.get('/setUsers', controller.)

router.get('/addUsers', controller.addUsers);

// 4. 
module.exports = router; // ex