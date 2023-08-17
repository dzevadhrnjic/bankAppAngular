import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
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

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    })
  }

  onClickLogout() {
    this.authService.logout();
  }

  onClickChangePassword() {
    this.userService.changePassword().subscribe({
      next: user => { alert('Check email for instructions how to change password') },
      error: errorMessage => { alert(errorMessage.errorMessage) }
    });
    this.router.navigate(['changePassword'])
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe;
  }
}
