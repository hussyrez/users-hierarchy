import { userService } from "../../services/user.service";
import { roleService } from "../../services/role.service";

import { Request, Response } from "express";
import HttpStatus from "http-status-codes";
import {User} from "../../models/user.interface";
import { Role } from "../../models/role.interface";

export class UserController {
    
    /**
     * Add list of users to the cache
     * @param req 
     * @param res 
     */
    addUsers(req: Request, res: Response)  {

        if(req.body instanceof Array && req.body.length > 0){
            let users: User[] = req.body;

            // user validation
			for(let user of users){
				if(!("Role" in user) || !("Id" in user) || !("Name" in user))
					res.status(HttpStatus.BAD_REQUEST).send("invalid user exists in the request");
			}

            let {statusCode, message} = userService.addUsers(users);
			
			// if list of users is empty fetching from the cache, let the user know
			res.status(statusCode).send(message);
		}
		else{
			res.status(HttpStatus.BAD_REQUEST).send("invalid users list");
		}
    }

    /**
     * Fetch all the users from the cache
     * @param req 
     * @param res 
     */
    getUsers(req: Request, res: Response)  {
        let {statusCode, message} = userService.getUsers();

		res.status(statusCode).send(message);
    }

    /**
     * Fetch all subordinates of a given employee
     * @param req 
     * @param res 
     */
    getSubordinates(req: Request, res: Response) {
        let {statusCode, message} = roleService.getRoles();
        if(statusCode == HttpStatus.OK) {
            let roles = message as Role[];
            ({statusCode, message} = userService.getSubordinates(parseInt(req.params.id), roles));
            
        }

        res.status(statusCode).send(message);
    }

}

export default new UserController();
