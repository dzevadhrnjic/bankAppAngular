import { Component, OnInit } from '@angular/core';
import { AccountService } from 'app/services/account.service';
import { Account } from 'app/services/model/account';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  id!: number
  account!: Account;
  accountList: Account[] = []

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {}

  getAccountById() {

    this.accountService.getAccountById(this.id).subscribe({
      next: data => { 
        this.account = data
        this.accountList = []
        this.accountList.push(data)
       },
      error: errorMessage => { alert(errorMessage.error) }
    })
  }
}
