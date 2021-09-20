import { userRepo } from "../respositories/user.repository";
import {User} from "../models/user.interface"
import { Role } from "../models/role.interface";
import _ from 'lodash';

export class UserService {
    //user repository interface instance
    // private repository: UserRepository;

    // constructor(repo: UserRepository){
    //     this.repository = repo;
    // }

    addUsers(users: User[]) {
        let res = userRepo.addAllUsers(users);

        console.log(res)
        return res;
    }

    getUsers(){
        let res = userRepo.getAllUsers();

        return res;
    }

    getSubordinates(id: number, roles: Role[]) : User[]{
        let subOrdinates: User[] = []
        let subOrdinatesRoles: Role[] = []
        let users = userRepo.findUser(id);
        console.log("================")
        console.log(roles)
        let queue = [];

        // if (users === undefined || users.length == 0) {
        //     throw new Error("")
        // }

        // if(users.length >= 1) {
        //     throw new Error("")
        // }
        let userRoleId = users[0].Role
        for(let role of roles) {
            if(role.Parent == userRoleId){
                queue.push(role)
            }
        }
        while(queue.length > 0) {
            let tempRole = queue.shift();
            if(tempRole) {
                subOrdinatesRoles.push(tempRole);
                for(let role of roles) {
                    if(role.Parent == tempRole?.Id){
                        queue.push(role)
                    }
                }  
            }
        }

        let allUsers: User[] = this.getUsers() as User[];
        for(let user of allUsers) {
            if(subOrdinatesRoles.find((x) => x.Id === user.Role)) { // you can also change `name` to `id`
                subOrdinates.push(user);
              }
        }

        _.orderBy(roles, 'id', 'asc'); // Use Lodash to sort array by 'id'
        console.log(roles)

        return subOrdinates;
    }


    // getSubOrdinates(userId, roles) {

    // }

}

export const userService = new UserService();
