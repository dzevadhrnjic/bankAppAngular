import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../../services/model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: User[] = [];
  pageNumber: number = 0;
  pageSize: number = 10;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.dataRefreshed.subscribe(data => {
      if (data) {
        this.userService.getAllUsers(this.pageNumber, this.pageSize).subscribe({
          next: (data: User[]) => { this.users = data },
          error: () => { alert('something went wrond') }
        })
      }
    })

    this.userService.getAllUsers(this.pageNumber, this.pageSize).subscribe({
      next: (data: User[]) => { this.users = data },
      error: (errorMessage) => (alert(errorMessage.error))
    })
  }

  previousPage() {
    this.pageNumber--
    this.getUsers()
  }

  nextPage() {
    this.pageNumber++
    this.getUsers();
  }

  onClickDeleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        alert('User deleted'),
          this.userService.dataRefreshed.next(true)
      },
      error: () => { alert("Can't delete user") }
    })
  }

  onClickEditUser(user: User) {
    this.router.navigate(['edit/', user.id], { relativeTo: this.route })
    this.userService.dataRefreshed.next(true)
  }

  onClickCreateUser() {
    this.router.navigate(['addUser'], { relativeTo: this.route })
    this.userService.dataRefreshed.next(true)
  }

  onClickUserDetails(id: number) {
    this.router.navigate(['user', id], { relativeTo: this.route })
  }

  onClickSearchById() {
    this.router.navigate(['user'], { relativeTo: this.route })
  }
}

