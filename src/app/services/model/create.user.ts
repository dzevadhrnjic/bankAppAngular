export class CreateUser {     
    
    firstname: string;
    lastname: string;
    address: string;
    phonenumber: string;
    email: string;
    password: string;

    constructor(firstname: string, lastname: string, address: string, phonenumber: string, email: string, password: string){
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.phonenumber = phonenumber;
        this.email = email;
        this.password = password;
    }
}