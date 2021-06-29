class error extends Error{
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }

    static badRequest(message){
        return new error(404,message)
    }

    static internal(message){
        return new error(500,message)
    }

    static forbidden(message){
        return new error(403,message)
    }

}
