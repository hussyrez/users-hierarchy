import { Role } from "../models/role.interface";
import { roleRepo } from "../respositories/role.repository";

export class RoleService {
    //role repository interface instance

    addRoles(roles: Role[]) {
        let res = roleRepo.addAllRoles(roles);

        console.log(res)
        
        return res;
    }

    getRoles(){
        let res = roleRepo.getAllRoles();

        return res;
    }

}

export const roleService = new RoleService();
