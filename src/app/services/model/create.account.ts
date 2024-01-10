export class CreateAccount {

    name: string;
    initialBalance: number

    constructor(name: string, initialBalance: number) {
        this.name = name;
        this.initialBalance = initialBalance;
    }
}