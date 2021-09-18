import { UserRepository } from "../respository/user.repository";
import {User} from "../models/user.interface"
export class UserService {
    //user repository interface instance
    private repository: UserRepository;

    constructor(repo: UserRepository){
        this.repository = repo;
    }

    addUsers(users: User[]) {
        
        // this.validateRoles();

        // L.info("Setting users");

        // // validate if users have valid roles
        // users.forEach((item) => {
        //     if (!this.users) {
        //         this.users = [];
        //     }

        //     if (!this.roles!.find((role) => role.Id === item.Role)) {
        //         L.error(`Role ${item.Role} does not exist`);
        //         throw new RoleNotFoundException();
        //     }

        //     this.users.push(item);
        // });
    }

    addRoles() {

    }

    // getSubOrdinates(userId, roles) {

    // }

}
