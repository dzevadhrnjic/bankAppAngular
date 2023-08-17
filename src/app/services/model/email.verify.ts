export class VerifyEmail{

    code: string;
    email: string;

    constructor(code: string, email: string){
        this.code = code;
        this.email = email;
    }
}