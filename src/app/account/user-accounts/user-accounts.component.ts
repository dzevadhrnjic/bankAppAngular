import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'app/services/account.service';
import { Account } from 'app/services/model/account';

@Component({
  selector: 'app-user-accounts',
  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.css']
})
export class UserAccountsComponent implements OnInit {

  userAccounts: Account[] = []

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void { 
    this.getUsersAccount()
  }

  getUsersAccount() {
    this.accountService.getAccountByUserId().subscribe({
      next: data => { this.userAccounts = data},
      error: () => { alert("Can't find acccounts for this user") }
    })
  }

  onClickGoBack() {
    this.router.navigate(['accounts'])
  }
}
