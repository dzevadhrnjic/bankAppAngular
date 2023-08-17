import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from 'app/services/model/transaction';
import { TransactionService } from 'app/services/transaction.service';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css']
})
export class ListTransactionComponent implements OnInit {

  transactions: Transaction[] = []

  pageNumber: number = 0;
  pageSize: number = 10;

  constructor(private transactionsService: TransactionService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.transactionsService.dataRefreshed.subscribe(data => {
      if (data) {
        this.transactionsService.getTransactions(this.pageNumber, this.pageSize).subscribe(data => {
          console.log(data)
          this.transactions = data
        })
      }
    })

    this.transactionsService.getTransactions(this.pageNumber, this.pageSize).subscribe(data => {
      console.log(data)
      this.transactions = data
    })
  }

  getTransactions() {
    this.transactionsService.getTransactions(this.pageNumber, this.pageSize).subscribe(data => {
      this.transactions = data
      console.log(data)
    })
  }

  previousPage() {
    this.pageNumber--
    this.getTransactions()
  }

  nextPage() {
    this.pageNumber++
    this.getTransactions()
  }

  onClickCreateTransaction() {
    this.router.navigate(['addTransaction'], { relativeTo: this.route })
  }

}
