import { Component, OnInit } from '@angular/core';
import { AccountService } from 'app/services/account.service';
import { Account } from 'app/services/model/account';

@Component({
  selector: 'app-list-account-by-id',
  templateUrl: './list-account-by-id.component.html',
  styleUrls: ['./list-account-by-id.component.css']
})
export class ListAccountByIdComponent implements OnInit {

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
