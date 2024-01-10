import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { Transaction } from './model/transaction';
import { CreateTransaction } from './model/create.transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  dataRefreshed = new Subject<boolean>();

  private url = 'http://localhost:9000/api/transactions/'

  constructor(private httpClient: HttpClient) { }

  getTransactions(pageNumber: number, pageSize: number, order: string, dateFrom: Date, dateTo: Date): Observable<Transaction[]> {

    let params = new HttpParams;

    params = params.append('pageNumber', String(pageNumber))
    params = params.append('pageSize', String(pageSize))
    params = params.append('order', order)

    if(dateFrom) {
    params = params.append('dateFrom', dateFrom.toISOString())
    }

    if(dateTo) {
    params = params.append('dateTo', dateTo.toISOString())
    }

    var transactions = this.httpClient.get<Transaction[]>(this.url + 'allTransactions', { params })
    return transactions;
  }

  getUsersTransactions() {

    let headers = new HttpHeaders();

    var userTransactions = this.httpClient.get<Transaction>(this.url + 'userTransaction', { headers: headers })

    return userTransactions;
  }

  getTransactionById(id: number): Observable<Transaction> {

    var transactionById = this.httpClient.get<Transaction>(this.url + 'user/' + id)

    return transactionById;
  }

  createTransaction(createTransaction: CreateTransaction) {
    
    return this.httpClient.post<Transaction>(this.url, createTransaction)
  }

  reverseTransction(id: number) {

    return this.httpClient.post(this.url + id + '/reverse', {}).pipe(map((response: any) => response.json))
  }
}
