import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  login = true;

  error: any = null;

  constructor(private authService: AuthService, private router: Router, protected localStorage: LocalStorage) { }

  ngOnInit(): void { }

  onSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;

    this.authService.login(email, password).subscribe({
      next: () => { this.router.navigate(['users']) },
      error: errorMessage => { this.error = errorMessage }
    })
  }

  handleKeyboardEvent(event: any) {
    if (event.keyCode === 13) {
      this.onSubmit(event)
    }
  }
}
