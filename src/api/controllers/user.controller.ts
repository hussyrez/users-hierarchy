import { UserService } from "../../services/user.service";
import { Request, Response } from "express";
import HttpStatus from "http-status-codes";
import {User} from "../../models/user.interface";

export class UserController {
    // protected service : UserService;
    
    // constructor(service: UserService) {
    //     this.service = service;
    // }
    
    addUsers(req: Request, res: Response)  {
        let users: [User] = req.body;
        console.log(users);
        // this.service.addUsers(req.body);
        res.status(HttpStatus.OK).end();
    }

    addUser() {

    }

    
    // setRole(req: Request, res: Response) {
    //     this.service.addRoles(req.body);
    //     res.status(HttpStatus.OK).end();
    // }

    // getSubOrdinates(req: Request, res: Response) {
    //     const id = Number(req.params["id"]);
    //     res.status(HttpStatus.OK).json(this.service.getSubOrdinates(id)).end();
    // }

}

module.exports = {
    UserController
}

export default new UserController();
