import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListUsersComponent } from "app/user/list-users/list-users.component";
import { UserComponent } from "./user/user.component";
import { CreateUserComponent } from "./user/create-user/create-user.component";
import { EditUserComponent } from "./user/edit-user/edit-user.component";
import { ListUserByIdComponent } from "./user/list-user-by-id/list-user-by-id.component";
import { ListAccountsComponent } from "./account/list-accounts/list-accounts.component";
import { ListTransactionComponent } from "./transaction/list-transaction/list-transaction.component";
import { TransactionComponent } from "./transaction/transaction.component";
import { AccountComponent } from "./account/account.component";
import { CreateAccountComponent } from "./account/create-account/create-account.component";
import { CreateTransactionComponent } from "./transaction/create-transaction/create-transaction.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { EmailVerificatonComponent } from "./user/email-verificaton/email-verificaton.component";
import { ChangePasswordComponent } from "./user/change-password/change-password.component";
import { ListAccountByIdComponent } from "./account/list-account-by-id/list-account-by-id.component";
import { ListAccountsByUserIdComponent } from "./account/list-accounts-by-user-id/list-accounts-by-user-id.component";
import { EditAccountComponent } from "./account/edit-account/edit-account.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/auth', pathMatch: 'full'},
    {path: 'users', component: UserComponent, canActivate: [AuthGuard], children: [
        {path: '', component: ListUsersComponent},
        {path: 'addUser', component: CreateUserComponent },
        {path: 'edit/:id', component: EditUserComponent},
        {path: 'user/:id', component: ListUserByIdComponent},
        {path: 'user', component: ListUserByIdComponent},
    ]},    
    {path: 'accounts', component: AccountComponent, canActivate: [AuthGuard], children: [
        {path: '', component: ListAccountsComponent},
        {path: 'account', component: ListAccountByIdComponent},
        {path: 'addAccount', component: CreateAccountComponent},
        {path: 'userAccounts', component: ListAccountsByUserIdComponent},
        {path: 'edit/:id', component: EditAccountComponent}
    ]},
    {path: 'transactions', component: TransactionComponent, canActivate: [AuthGuard], children: [
        {path: '', component: ListTransactionComponent},
        {path: 'addTransaction', component: CreateTransactionComponent}
    ]},
    {path: 'auth', component: AuthComponent},
    {path: 'verification', component: EmailVerificatonComponent, canActivate: [AuthGuard]},
    {path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard]}
]
 
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}