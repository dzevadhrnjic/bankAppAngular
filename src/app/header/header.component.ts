import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'app/services/account.service';
import { AuthService } from 'app/services/auth.service';
import { Account } from 'app/services/model/account';
import { UserService } from 'app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  private userSubscription: Subscription = new Subscription;
  
  userAccounts!: Account[]

  constructor(private authService: AuthService, private router: Router, private userService: UserService, private accountService: AccountService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    })
  }

  onClickSearchAccountByUserId() {
    this.router.navigate(['userAccounts'], { relativeTo: this.route })
  }

  onClickLogout() {
    this.authService.logout();
  }

  onClickChangePassword() {
    this.userService.changePassword().subscribe({
      next: user => { alert('Check email for code to reset password') },
      error: errorMessage => { alert(errorMessage.errorMessage) }
    });
    this.router.navigate(['changePassword'])
  }

  onClickSearchUserTransactions() {
    this.router.navigate(['userTransactions'], { relativeTo: this.route })
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe;
  }
}
