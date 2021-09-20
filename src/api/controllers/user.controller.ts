import { userService } from "../../services/user.service";
import { roleService } from "../../services/role.service";

import { Request, Response } from "express";
import HttpStatus from "http-status-codes";
import {User} from "../../models/user.interface";
import { Role } from "../../models/role.interface";

export class UserController {
    
    addUsers(req: Request, res: Response)  {
        let users: User[] = req.body;
        console.log(users);

        let result = userService.addUsers(users);
        res.status(HttpStatus.OK).send(result);
    }

    getUsers(req: Request, res: Response)  {
        let users = userService.getUsers();

        res.status(HttpStatus.OK).send(users);
    }

    getSubordinates(req: Request, res: Response) {
        let roles = roleService.getRoles() as Role[];
        let newRoles = userService.getSubordinates(parseInt(req.params.id), roles);

        res.status(HttpStatus.OK).send(newRoles);
    }

}

export default new UserController();
