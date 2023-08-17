import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VerifyEmail } from 'app/services/model/email.verify';
import { UserService } from 'app/services/user.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-email-verificaton',
  templateUrl: './email-verificaton.component.html',
  styleUrls: ['./email-verificaton.component.css']
})
export class EmailVerificatonComponent implements OnInit {

  dataRefreshed = new Subject<boolean>();

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  onClickVerifyEmail(form: NgForm) {
    const value = form.value
    const emailVerify = new VerifyEmail(value.code, value.email)
    this.userService.verifyEmail(emailVerify).subscribe({
      next: () => {
        alert("Verify mail was successsful"),
        this.dataRefreshed.next(true),
        this.router.navigate(['users'])
      },
      error: (errorMessage) => { alert(errorMessage) }
    })
  }
}
