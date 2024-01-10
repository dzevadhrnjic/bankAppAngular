import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../../services/model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  @ViewChild('userId') userId!: ElementRef;
  
  id!: number;
  user!: User;
  users: User[] = [];
  pageNumber: number = 0;
  pageSize: number = 10;
  firstname: string = '';
  lastname: string = '';
  address: string = '';
  email: string = '';
  userById: boolean = false;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.dataRefreshed.subscribe(data => {
      if (data) {
        this.userService.getAllUsers(this.pageNumber, this.pageSize, this.firstname, this.lastname, this.address, this.email).subscribe({
          next: (data: User[]) => { this.users = data },
          error: () => { alert('something went wrong') }

        })
      }
    })

    this.userService.getAllUsers(this.pageNumber, this.pageSize, this.firstname, this.lastname, this.address, this.email).subscribe({
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

  onClickListUserById(id: number) {
    this.userService.getUserById(id).subscribe({
      next: data => {
        this.user = data
        this.users = []
        this.users.push(data)
        this.userById = true
      },
      error: errorMessage => { 
        alert(errorMessage.error),
        this.userId.nativeElement.value = ''
       }
    })
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

  onClickGoBack() {
    this.userById = false
    this.getUsers()
    this.userId.nativeElement.value = ''
  }
}

