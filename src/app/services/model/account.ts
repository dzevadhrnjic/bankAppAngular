export class Account {
    
    id: number;
    name: string;
    initialBalance: number;
    userid: number;
    createdat: string;

    constructor(id: number, name: string, initialBalance: number, userid: number, createdat: string){
        this.id = id;
        this.name = name;
        this.initialBalance = initialBalance;
        this.userid = userid;
        this.createdat = createdat;
    }
}