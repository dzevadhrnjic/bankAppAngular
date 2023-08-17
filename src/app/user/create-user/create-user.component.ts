import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { CreateUser } from '../../services/model/create.user';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  showForm: boolean = false

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.userService.dataRefreshed.subscribe(form => {
      this.showForm = form;
    })
  }

  onSaveButtonClick(form: NgForm) {
    const value = form.value
    var createUser = new CreateUser(value.firstname, value.lastname, value.address, value.phonenumber, value.email, value.password)
    this.userService.createUser(createUser).subscribe({
      next: () => ('User created'),
      error: () => (alert('Something went wrong, try again'))
    })
    this.router.navigate(['/users'])
  }

  onClickGoBack() {
    this.router.navigate(['/users'])
  }
}
