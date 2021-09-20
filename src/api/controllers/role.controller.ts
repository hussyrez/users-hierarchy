import { Role } from "../../models/role.interface";
import { roleService } from "../../services/role.service"
import { Request, Response } from "express";
import HttpStatus from "http-status-codes";

export class RoleController {

	/**
	 * Add a list of roles to the cache
	 * @param req request
	 * @param res response
	 */
	addRoles(req: Request, res: Response)  {
		if(req.body instanceof Array && req.body.length > 0){
			let users: Role [] = req.body;

			// role validation
			for(let user of users){
				if(!("Parent" in user) || !("Id" in user) || !("Name" in user))
					res.status(HttpStatus.BAD_REQUEST).send("invalid user exists in the request");
			}

			let {statusCode, message} = roleService.addRoles(users);

			// if list of users is empty fetching from the cache, let the user know
			res.status(statusCode).send(message);
		}
		else{
			res.status(HttpStatus.BAD_REQUEST).send("invalid users list");
		}

	}

	/**
	 * Get all the roles from the cache
	 * @param req request
	 * @param res response
	 */
    getRoles(req: Request, res: Response)  {
        let {statusCode, message} = roleService.getRoles();

		res.status(statusCode).send(message);
    }

}

export default new RoleController();
