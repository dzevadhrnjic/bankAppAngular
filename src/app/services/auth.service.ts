import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { UserLogin } from './model/userLogin';
import { Blacklist } from './model/blacklist';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:9000/api/users/login';
  private urlLogout = 'http://localhost:9000/api/blacklist/logout';

  user: BehaviorSubject<UserLogin> = new BehaviorSubject<UserLogin>(null!);
  userSubject!: Subject<UserLogin>;

  private tokenExpirationDate: any;

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    return this.httpClient.post<UserLogin>(this.url, {
      email, password
    }).pipe(
      tap(user => {
        this.handleAuthentication(user.email, user.password, user.accessToken, user.tokenExpiration)
      })
    )
  }

  autoLogin() {
    const userData: {
      tokenExpiration: Date;
      email: string,
      password: string,
      accessToken: string
    } = JSON.parse(localStorage.getItem('user')!)

    if (!userData) {
      return;
    }

    const loadedUser = new UserLogin(userData.email, userData.password, userData.accessToken, userData.tokenExpiration)
    if (loadedUser.accessToken) {
      this.user.next(loadedUser)
      const expirationTime = 3600000;
      this.autoLogout(expirationTime)
    }
  }

  logout() {

    let headers = new HttpHeaders()

    this.httpClient.post<Blacklist>(this.urlLogout, { headers: headers }).subscribe({
      next: () => {
        this.user.next(null!),
        this.router.navigate(['/auth']),
        localStorage.removeItem('user')
      },
      error: () => { alert("Something went wrong") }
    })

    if (this.tokenExpirationDate) {
      clearTimeout(this.tokenExpirationDate);
    }
    this.tokenExpirationDate = null;
  }

  autoLogout(expirationTime: number) {
    this.tokenExpirationDate = setTimeout(() => {
      this.logout();
    }, 3600000)
  }

  private handleAuthentication(email: string, password: string, accessToken: string, tokenExpiration: any) {
    const user = new UserLogin(email, password, accessToken, tokenExpiration);
    this.user.next(user);
    this.autoLogout(tokenExpiration)
    localStorage.setItem('user', JSON.stringify(user))
  }

  getUserIdFromToken(token: string | null): string | null {

    if(!token) {
      return null;
    }
    try {
      const decodedToken: any = jwtDecode(token);
      return decodedToken?.sub || null
    } catch(error) {
      console.log('Error decoding token', error)
      return null;
    }
  }
}

