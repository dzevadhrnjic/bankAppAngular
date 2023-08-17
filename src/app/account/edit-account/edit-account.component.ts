import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { AccountService } from 'app/services/account.service';
import { Account } from 'app/services/model/account';
import { CreateAccount } from 'app/services/model/create.account';
import { EditAccount } from 'app/services/model/edit.account';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

  id: number = 0;
  name: string = '';
  initialbalance: number = 0;
  editAccount!: EditAccount;

  constructor(private router: Router, private route: ActivatedRoute, private accountService: AccountService) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params): void => {
      const id = +params['id']

      this.accountService.getAccountById(id).subscribe({
        next: (response: any) => {
          this.id = response.id,
          this.name = response.name,
          this.initialbalance = response.initialbalance
        },
        error : (error: any) => {
          this.router.navigate(['accounts']),
          alert('Cant update account wrong user')
        }
      })
    })
  }

  onClickEditAccount() {
    var editAccount = new CreateAccount(this.name, this.initialbalance)
    this.accountService.updateAccount(this.id, editAccount).subscribe({
      next: () => {
        alert("Account updated");
        this.accountService.dataRefreshed.next(true)
        this.router.navigate(['accounts'])
      },
      error: (errorMessage) => { alert(errorMessage.error) }
    })
  }

  onClickGoBack() {
    this.router.navigate(['accounts'])
  }
}