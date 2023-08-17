import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'app/services/account.service';
import { Account } from 'app/services/model/account';

@Component({
  selector: 'app-list-accounts-by-user-id',
  templateUrl: './list-accounts-by-user-id.component.html',
  styleUrls: ['./list-accounts-by-user-id.component.css']
})
export class ListAccountsByUserIdComponent implements OnInit {

  userAccounts: Account[] = []

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  onClickSearchAccountByUserId() {
    this.accountService.getAccountByUserId().subscribe({
      next: data => { this.userAccounts = data},
      error: () => { alert("Can't find acccounts for this user") }
    })
  }

  onClickGoBack() {
    this.router.navigate(['accounts'])
  }
}
