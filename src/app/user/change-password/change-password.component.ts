import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePassword } from 'app/services/model/change.password';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void { }

  onClickNewPassword(form: NgForm) {

    const code = form.value.code;
    const oldPassword = form.value.oldPassword;
    const newPassword = form.value.newPassword;

    var changePassword = new ChangePassword(code, oldPassword, newPassword)
    this.userService.newPassword(changePassword).subscribe({
      next: () => {
        alert('Password changed successfully'),
          this.router.navigate(['/users'])
      },
      error: errorMessage => { alert(errorMessage.error) }

    })
  }

  onClickGoBack() {
    this.router.navigate(['/users'])
  }
}
