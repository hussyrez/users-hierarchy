import NodeCache from 'node-cache';
import { Role } from '../models/role.interface';
import { User } from '../models/user.interface';

class RoleRepository {
    roles = [];
    private cache: NodeCache;

    constructor() {
        this.cache = new NodeCache({ stdTTL: 10000 , checkperiod: 10000  * 0.2, useClones: false });
    }

    getAllRoles(){
        let users = this.cache.get("roles");
        if(users){

        }
        else{
            return "FUCK ME"
        }

        return users;

    }

    addAllRoles(roles: Role[]): Role[]{

        let success = this.cache.set( "roles", roles, 10000 );

        if(!success){
            console.log("Failed to cache all roles.")
        }

        return this.cache.get("roles") as Role[] || [];
    }

    findRole(id: number):Role[] {
        let roles = this.cache.get("roles") as Role[] || [];
        roles = roles.filter(role => role.Id === id);

        return roles; 
    }
    
}

export const roleRepo = new RoleRepository();
