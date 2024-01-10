import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateTransaction } from 'app/services/model/create.transaction';
import { TransactionService } from 'app/services/transaction.service';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {

  error: any = null;

  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit(): void {}

  onSaveButtonClick(form: NgForm) {

    const value = form.value
    var createTransaction = new CreateTransaction(value.sourceaccount, value.destinationaccount, value.amount)

    this.transactionService.createTransaction(createTransaction).subscribe({
      next: () => {
        alert('Transaction created'),
        this.router.navigate(['transactions'])
      },
      error: (errorMessage) => (alert(this.error = errorMessage))
    })
  }

  onClickGoBack() {
    this.router.navigate(['transactions'])
  }

}
