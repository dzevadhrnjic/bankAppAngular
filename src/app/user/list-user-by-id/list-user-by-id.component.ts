import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'app/services/model/user';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-list-user-by-id',
  templateUrl: './list-user-by-id.component.html',
  styleUrls: ['./list-user-by-id.component.css']
})
export class ListUserByIdComponent implements OnInit {

  id!: number;
  user!: User;
  usersList: User[] = [];

  selectedUser: number | null = null
  findById: boolean = false;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params): void => {
      const id = +params['id']
      if (!isNaN(id)) {       
        this.findById = false
        this.onClickListUserById(id);
      }
    })
  }

  onClickListUserId() {
    this.findById = true
    this.onClickListUserById(this.id)
  }

  onClickListUserById(id: number) {
    this.userService.getUserById(id).subscribe({
      next: data => {
        this.user = data
        this.usersList = []
        this.usersList.push(data)
        this.selectedUser = id
      },
      error: errorMessage => { alert(errorMessage.error) }
    })
  }

  onClickVerifyEmail() {
    this.router.navigate(['verification']), { relativeTo: this.route }
  }

  clearData() {
    this.selectedUser = 0
    this.usersList = []
  }

  goBack(){
    this.router.navigate(['users'])
  }
}

