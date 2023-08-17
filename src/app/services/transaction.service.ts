import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Transaction } from './model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  dataRefreshed = new Subject<boolean>();

  private url = 'http://localhost:9000/api/transactions/allTransactions'

  constructor(private httpClient: HttpClient) { }

  getTransactions(pageNumber: number, pageSize: number): Observable<Transaction[]> {

    let params = new HttpParams;
    params = params.append('pageNumber', String(pageNumber))
    params = params.append('pageSize', String(pageSize))
    var transactions = this.httpClient.get<Transaction[]>(this.url, { params })
    return transactions;
  }
}
