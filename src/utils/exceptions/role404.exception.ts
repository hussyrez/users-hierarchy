import CustomerException from "./custom.exception";
import { StatusCodes } from "http-status-codes";

class RoleNotFoundException extends CustomerException {
    constructor() {
        super(StatusCodes.NOT_FOUND, "Role not Found");
    }
}

export default RoleNotFoundException;