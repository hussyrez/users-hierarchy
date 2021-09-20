class CustomException extends Error {
    status: number;
    message: string;
    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }

    getStatusCode() {
        return this.status;
    }

    getMessage() {
        return this.message;
    }
}

export default CustomException;
