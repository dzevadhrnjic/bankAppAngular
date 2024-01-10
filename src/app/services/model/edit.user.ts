export class EditUser { 
    
    firstname: string;
    lastname: string;
    address: string;
    phoneNumber: string;
    email: string;
    password: string;

    constructor(firstname: string, lastname: string, address: string, phoneNumber: string, email: string, password: string){
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
    }
}