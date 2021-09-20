import { userRepo } from "../respositories/user.repository";
import {User} from "../models/user.interface"
import { Role } from "../models/role.interface";
import HttpStatus from "http-status-codes";
import _ from 'lodash';

export class UserService {
    //user repository interface instance
    // private repository: UserRepository;

    // constructor(repo: UserRepository){
    //     this.repository = repo;
    // }

    addUsers(users: User[]) {
        let res = userRepo.addAllUsers(users);

        // if unable to fetch the roles from the cache, respond with error
        if(res.length < 1){ 
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: "Unable to store users in the cache"
            }
        }

        return {
            statusCode: HttpStatus.OK,
            message: res
        }
    }

    getUsers(){
        let res = userRepo.getAllUsers();

        // if unable to fetch the roles from the cache, respond with error
        if(!res){
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: "Unable to fetch all users from the cache"
            }
        }

        return {
            statusCode: HttpStatus.OK,
            message: res
        }
    }

    getSubordinates(id: number, roles: Role[]) {
        let subOrdinates: User[] = []
        let subOrdinatesRoles: Role[] = []
        let users = userRepo.findUser(id);
        let queue = [];
        let statusCode, message;

        if (users === undefined || users.length == 0) {
            return {
                statusCode: HttpStatus.NOT_FOUND,
                message: "Requested employee does not exist in the cache"
            }
        }

        if(users.length > 1) {
            return {
                statusCode: HttpStatus.NOT_FOUND,
                message: "Multiple users found with the requested id"
            }      
        }


        // Find all the subroles which have the current given id as their parent
        let userRoleId = users[0].Role
        for(let role of roles) {
            if(role.Parent == userRoleId){
                queue.push(role)
            }
        }

        // search for all roles which are subrole of the given id
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

        //for all subroles, fetch the corresponding employees
        let allUsers: User[] = userRepo.getAllUsers() as User[];
        for(let user of allUsers) {
            if(subOrdinatesRoles.find((x) => x.Id === user.Role)) { // you can also change `name` to `id`
                subOrdinates.push(user);
              }
        }

        return {statusCode: HttpStatus.OK, message: subOrdinates}
    }


    // getSubOrdinates(userId, roles) {

    // }

}

export const userService = new UserService();
