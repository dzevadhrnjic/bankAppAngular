export class Account {
    
    id: number;
    name: string;
    initialbalance: number;
    userid: number;
    createdat: string;

    constructor(id: number, name: string, initialbalance: number, userid: number, createdat: string){
        this.id = id;
        this.name = name;
        this.initialbalance = initialbalance;
        this.userid = userid;
        this.createdat = createdat;
    }
}