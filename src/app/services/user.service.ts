import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { User } from './model/user';
import { CreateUser } from './model/create.user'
import { EditUser } from './model/edit.user';
import { VerifyEmail } from './model/email.verify';
import { ChangePassword } from './model/change.password';
import { UserLogin } from './model/userLogin';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  dataRefreshed = new Subject<boolean>();
  
  private url = 'http://localhost:9000/api/users/';

  constructor(private httpClient: HttpClient) { }

  getAllUsers(pageNumber: number, pageSize: number, firstname: string, lastname: string, address: string, email: string) {

    let params = new HttpParams();
    params = params.append('pageNumber', String(pageNumber))
    params = params.append('pageSize', String(pageSize))
    params = params.append('firstname', String(firstname))
    params = params.append('lastname', String(lastname))
    params = params.append('address', String(address))
    params = params.append('email', String(email))
    return this.httpClient.get<User[]>(this.url + 'allUsers', { params })
  }

  createUser(createUser: CreateUser) {
    return this.httpClient.post<CreateUser>(this.url + 'addUser', createUser)
  }

  deleteUser(id: number) {
    return this.httpClient.delete<User>(this.url + 'delete/' + id)
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.url + id);
  }

  updateUser(id: number, editUser: EditUser) {
    return this.httpClient.put<EditUser>(this.url + id, editUser)
  }

  verifyEmail(emailVerify: VerifyEmail) {
    return this.httpClient.post<UserLogin>(this.url + 'verifyEmail/' , emailVerify)
  }

  changePassword() {
    let headers = new HttpHeaders();
    return this.httpClient.post<UserLogin>(this.url + 'change-password',  { headers: headers })
  }

  newPassword(newPassword: ChangePassword){
    let headers = new HttpHeaders();
    return this.httpClient.post<ChangePassword>(this.url + 'new-password', newPassword, {headers: headers})
  }
}


