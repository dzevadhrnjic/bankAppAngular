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
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter'

import { AppComponent } from './app.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { AccountComponent } from './account/account.component';
import { ListAccountsComponent } from './account/list-accounts/list-accounts.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ListTransactionComponent } from './transaction/list-transaction/list-transaction.component';
import { CreateTransactionComponent } from './transaction/create-transaction/create-transaction.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthComponent } from './auth/auth.component';
import { EmailVerificatonComponent } from './user/email-verificaton/email-verificaton.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { EditAccountComponent } from './account/edit-account/edit-account.component';
import { AccountDetailsComponent } from './account/account-details/account-details.component';
import { UserAccountsComponent } from './account/user-accounts/user-accounts.component';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD'
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMMM YYYY',
    dateA1yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    CreateUserComponent,
    EditUserComponent,
    HeaderComponent,
    UserComponent,
    UserDetailsComponent,
    AccountComponent,
    ListAccountsComponent,
    TransactionComponent,
    ListTransactionComponent,
    CreateTransactionComponent,
    CreateAccountComponent,
    AuthComponent,
    EmailVerificatonComponent,
    ChangePasswordComponent,
    EditAccountComponent,
    AccountDetailsComponent,
    UserAccountsComponent,
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
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true,
  },
  {
    provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]
  },
  { 
    provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS 
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

