import NodeCache from 'node-cache';
import { Role } from '../models/role.interface';
import { User } from '../models/user.interface';


export class UserRepository {
    roles = [];
    private cache: NodeCache;

    constructor() {
        this.cache = new NodeCache({ stdTTL: 10000 , checkperiod: 10000  * 0.2, useClones: false });
    }

    /**
     * 
     * @returns 
     */
    getAllUsers(){
        let users = this.cache.get("users") || [];

        return users;
        // if(users){

        // }
        // else{
        //     return [];
        // }

    }

    /**
     * 
     * @param users 
     * @returns 
     */
    addAllUsers(users: User[]): User[]{
        let success = this.cache.set( "users", users, 10000 );

        return this.cache.get("users") as User[] || [];
    }

    findUser(id: number):User[] {
        let users = this.cache.get("users") as User[] || [];
        users = users.filter(user => user.Id === id);

        return users; 
    }

    flush() {
        this.cache.flushAll();
    }
}

export const userRepo = new UserRepository();
