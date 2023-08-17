import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'app/services/account.service';
import { Account } from 'app/services/model/account';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router, private route: ActivatedRoute) { }

  accounts: Account[] = []

  pageNumber: number = 0;
  pageSize: number = 10;

  ngOnInit(): void {

    this.accountService.dataRefreshed.subscribe(data => {
      if (data) {
        this.accountService.getAccounts(this.pageNumber, this.pageSize).subscribe(data => {
          console.log(data)
          this.accounts = data
        })
      }
    })

    this.getAccounts()
  }

  getAccounts() {
    this.accountService.getAccounts(this.pageNumber, this.pageSize).subscribe(data => {
      this.accounts = data
      console.log(data)
    })
  }

  previousPage() {
    this.pageNumber--
    this.getAccounts()
  }

  nextPage() {
    this.pageNumber++
    this.getAccounts()
  }

  onClickListAccountById() {
    this.router.navigate(['account'], { relativeTo: this.route })
  }

  onClickSearchAccount() {
    this.router.navigate(['userAccounts'], { relativeTo: this.route })
  }

  onClickCreateAccount() {
    this.router.navigate(['addAccount'], { relativeTo: this.route })
  }

  onClickDeleteAccount(id: number) {
    this.accountService.deleteAccount(id).subscribe({
      next: () => {
        alert('Account deleted'),
        this.accountService.dataRefreshed.next(true)
      },
      error: errorMessage => alert(errorMessage.error)
    })
  }

  onClickEditAccount(editAccount: Account) {
      this.router.navigate(['edit/', editAccount.id], { relativeTo: this.route})
  }
}
