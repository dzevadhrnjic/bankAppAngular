import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

import { AppComponent } from './app.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { ListUserByIdComponent } from './user/list-user-by-id/list-user-by-id.component';
import { AccountComponent } from './account/account.component';
import { ListAccountsComponent } from './account/list-accounts/list-accounts.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ListTransactionComponent } from './transaction/list-transaction/list-transaction.component';
import { CreateTransactionComponent } from './transaction/create-transaction/create-transaction.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthComponent } from './auth/auth.component';
import { EmailVerificatonComponent } from './user/email-verificaton/email-verificaton.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { ListAccountByIdComponent } from './account/list-account-by-id/list-account-by-id.component';
import { ListAccountsByUserIdComponent } from './account/list-accounts-by-user-id/list-accounts-by-user-id.component';
import { EditAccountComponent } from './account/edit-account/edit-account.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    CreateUserComponent,
    EditUserComponent,
    HeaderComponent,
    UserComponent,
    ListUserByIdComponent,
    AccountComponent,
    ListAccountsComponent,
    TransactionComponent,
    ListTransactionComponent,
    CreateTransactionComponent,
    CreateAccountComponent,
    AuthComponent,
    EmailVerificatonComponent,
    ChangePasswordComponent,
    ListAccountByIdComponent,
    ListAccountsByUserIdComponent,
    EditAccountComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

