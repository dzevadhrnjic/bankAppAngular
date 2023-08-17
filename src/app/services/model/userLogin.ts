export class UserLogin {

    email: string;
    password: string;
    accessToken?: any;
    tokenExpiration: Date;

    constructor(email: string, password: string, accessToken: string, tokenExpiration: Date) {
        this.email = email;
        this.password = password;
        this.accessToken = accessToken;
        this.tokenExpiration = tokenExpiration
    }
}