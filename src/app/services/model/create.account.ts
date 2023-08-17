export class CreateAccount {

    name: string;
    initialbalance: number

    constructor(name: string, initialbalance: number) {
        this.name = name;
        this.initialbalance = initialbalance;
    }
}