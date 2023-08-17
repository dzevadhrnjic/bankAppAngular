export class Transaction{

    id: number;
    sourceaccount: number;
    destinationaccount: number;
    amount: number;
    createdat: string;
    userid: number;

    constructor(id: number, sourceaccount: number, destinationaccount: number, amount: number, createdat: string, userid: number){
            
        this.id = id;
        this.sourceaccount = sourceaccount;
        this.destinationaccount =destinationaccount;
        this.amount = amount;
        this.createdat = createdat;
        this.userid = userid;
    }
}