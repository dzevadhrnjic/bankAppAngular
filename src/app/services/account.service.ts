import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Account } from './model/account';
import { CreateAccount } from './model/create.account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  dataRefreshed = new Subject<boolean>();

  private url = 'http://localhost:9000/api/accounts/'

  constructor(private httpClient: HttpClient) { }

  getAccounts(pageNumber: number, pageSize: number): Observable<Account[]> {

    let params = new HttpParams;
    params = params.append('pageNumber', String(pageNumber))
    params = params.append('pageSize', String(pageSize))
    var accounts = this.httpClient.get<Account[]>(this.url + 'allAccounts', { params })
    return accounts;
  }

  getAccountById(id: number) {

    let headers = new HttpHeaders();
    let account = this.httpClient.get<Account>(this.url + id, { headers: headers })
    return account
  }

  getAccountByUserId() {

    let headers = new HttpHeaders();
    let account = this.httpClient.get<Account[]>(this.url, {headers: headers})
    return account
  }

  createAccount(createAccount: CreateAccount) {

    return this.httpClient.post<CreateAccount>(this.url, createAccount)
  }
  
  deleteAccount(id: number) {

    let headers = new HttpHeaders();
    return this.httpClient.delete<Account>(this.url + id, { headers: headers })
  }

  updateAccount(id: number, editAccount: CreateAccount) {
    let headers = new HttpHeaders()
    return this.httpClient.put<CreateAccount>(this.url + id, editAccount, { headers: headers })
  }

} 