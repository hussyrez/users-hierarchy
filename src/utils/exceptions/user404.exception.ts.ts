import CustomerException from "./custom.exception";
import { StatusCodes } from "http-status-codes";

class UserNotFoundException extends CustomerException {
    constructor() {
        super(StatusCodes.NOT_FOUND, "User not Found");
    }
}

export default UserNotFoundException;