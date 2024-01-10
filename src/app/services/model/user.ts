export class User {
    
    id: number;   
    firstname: string;
    lastname: string;
    address: string;
    phoneNumber: string;
    email: string;
    createdat: string;
    verifyemail: boolean

    constructor(id: number, firstname: string, lastname: string, address: string, phoneNumber: string, email: string, createdat: string, verifyemail: boolean){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.createdat = createdat;
        this.verifyemail = verifyemail;
    }
}