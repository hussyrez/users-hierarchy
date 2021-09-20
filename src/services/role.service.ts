import { Role } from "../models/role.interface";
import { roleRepo } from "../respositories/role.repository";
import HttpStatus from "http-status-codes";

export class RoleService {
    //role repository interface instance

    addRoles(roles: Role[]) {
        let res = roleRepo.addAllRoles(roles);
        
        // if unable to fetch the roles from the cache, respond with error
        if(res.length < 1){
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: "Unable to store roles in the cache"
            }
        }

        return {
            statusCode: HttpStatus.OK,
            message: res
        }

    }

    getRoles(){
        let roles = roleRepo.getAllRoles();

        // if unable to fetch the roles from the cache, respond with error
        if(!roles){
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: "Unable to fetch all roles from the cache"
            }
        }

        return {
            statusCode: HttpStatus.OK,
            message: roles
        }
    }

}

export const roleService = new RoleService();
