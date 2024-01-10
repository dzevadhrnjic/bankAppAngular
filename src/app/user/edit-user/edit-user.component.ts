import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EditUser } from 'app/services/model/edit.user';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: number = 0;
  firstname: string = '';
  lastname: string = '';
  address: string = '';
  phoneNumber: string = '';
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params): void => {
      const id = +params['id']

      this.userService.getUserById(id).subscribe((response: any) => {
        this.id = response.id
        this.firstname = response.firstname
        this.lastname = response.lastname
        this.address = response.address
        this.phoneNumber = response.phoneNumber
        this.email = response.email
        this.password = response.password
      })
    })
  }

  onEdit() {
    var editUser = new EditUser(this.firstname, this.lastname, this.address, this.phoneNumber, this.email, this.password)
    this.userService.updateUser(this.id, editUser).subscribe({
      next: () => {
        alert('User successfully updated'),
        this.router.navigate(['users'])
      },
      error: (error) => { alert(error.error) }
    })
  }

  onClickGoBack() {
    this.router.navigate(['users'])
  }
}
