import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from 'app/services/model/transaction';
import { TransactionService } from 'app/services/transaction.service';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css'],
  providers: [DatePipe]
})
export class ListTransactionComponent implements OnInit {

  transactions: Transaction[] = []

  pageNumber: number = 0;
  pageSize: number = 10;
  order!: string;
  dateFrom!: Date;
  dateTo!: Date;

  constructor(private transactionsService: TransactionService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.transactionsService.dataRefreshed.subscribe(data => {
      if (data) {
        this.transactionsService.getTransactions(this.pageNumber, this.pageSize, this.order, this.dateFrom, this.dateTo).subscribe(data => {
          this.transactions = data
        })
      }
    })

    this.getTransactions()
  }

  getTransactions() {
    this.transactionsService.getTransactions(this.pageNumber, this.pageSize, this.order, this.dateFrom, this.dateTo).subscribe(data => {
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
