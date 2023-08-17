import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'app/services/account.service';
import { CreateAccount } from 'app/services/model/create.account';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  showForm: boolean = false

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  onSaveButtonClick(form: NgForm) {

    const value = form.value
    var createAccount = new CreateAccount(value.name, value.initialbalance)

    this.accountService.createAccount(createAccount).subscribe({
      next: () => {
        alert('Account Created'),
          this.router.navigate(['accounts'])
      },
      error: () => (alert('Something went wrong, try again'))
    })
  }

  onClickGoBack() {
    this.router.navigate(['accounts'])
  }
}
