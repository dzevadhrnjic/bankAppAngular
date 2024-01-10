import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'app/services/model/user';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id!: number;
  user!: User;
  usersList: User[] = [];

  selectedUser: number | null = null

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params): void => {
      const id = +params['id']
      if (!isNaN(id)) {       
        this.onClickListUserById(id);
      }
    })
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

  goBack(){
    this.router.navigate(['users'])
  }
}

