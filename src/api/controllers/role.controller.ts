import { Role } from "../../models/role.interface";
import { roleService } from "../../services/role.service"
import { Request, Response } from "express";
import HttpStatus from "http-status-codes";

export class RoleController {

	addRoles(req: Request, res: Response)  {
		let users: [Role] = req.body;

		let result = roleService.addRoles(users);
		res.status(HttpStatus.OK).send(result);
	}

    getRoles(req: Request, res: Response)  {
        let users = roleService.getRoles();

        res.status(HttpStatus.OK).send(users);
    }

}

export default new RoleController();
