export class ChangePassword {

    code: string;
    oldPassword: string;
    newPassword: string;

    constructor(code: string, oldPassword: string, newPassword: string) {

        this.code = code;
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
    }
}