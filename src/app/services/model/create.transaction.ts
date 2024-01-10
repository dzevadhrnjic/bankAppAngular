export class CreateTransaction {

    sourceaccount: number;
    destinationaccount: number;
    amount: number;

    constructor(sourceaccount: number, destinationaccount: number, amount: number){
            
        this.sourceaccount = sourceaccount;
        this.destinationaccount =destinationaccount;
        this.amount = amount;
       
    }
}