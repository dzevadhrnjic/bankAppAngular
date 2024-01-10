import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'app/services/account.service';
import { AuthService } from 'app/services/auth.service';
import { Account } from 'app/services/model/account';
import { User } from 'app/services/model/user';
import { UserLogin } from 'app/services/model/userLogin';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent implements OnInit {

  userToken!: any | null;
  userIdFromToken!: any | null;

  accounts: Account[] = []

  name: string = '';
  pageNumber: number = 0;
  pageSize: number = 10;

  constructor(private accountService: AccountService, private router: Router, private route: ActivatedRoute, private authService: AuthService) { 
    this.userToken = localStorage.getItem('user')
    this.userIdFromToken = this.authService.getUserIdFromToken(this.userToken)
  }

  ngOnInit(): void {

    this.accountService.dataRefreshed.subscribe(data => {
      if (data) {
        this.accountService.getAccounts(this.pageNumber, this.pageSize, this.name).subscribe(data => {
          this.accounts = data
        })
      }
    })

    this.getAccounts()
  }

  getAccounts() {
    this.accountService.getAccounts(this.pageNumber, this.pageSize, this.name).subscribe(data => {
      this.accounts = data
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
