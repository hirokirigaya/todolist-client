import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { UserType } from 'src/interfaces/UserType';
import { HttpClient } from '@angular/common/http';
import { constants } from 'src/interfaces/contants';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { ResponseType } from 'src/interfaces/api/ResponseType';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject: BehaviorSubject<UserType | null>;
  private user: Observable<UserType | null>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<UserType | null>(
      localStorage.getItem(constants.USER_KEY)
        ? JSON.parse(localStorage.getItem(constants.USER_KEY) as string)
        : null
    );
    this.user = this.userSubject.asObservable();
  }

  login({ email, password }: { email: string; password: string }) {
    return this.http
      .post(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(
        map((data: any) => {
          const userToken: UserType = data?.data as UserType;
          const expiresAt = moment().add(userToken.expires_in, 'milliseconds');
          localStorage.setItem(
            constants.EXPIRES_AT,
            JSON.stringify(expiresAt.valueOf())
          );
          localStorage.setItem(constants.USER_KEY, JSON.stringify(userToken));
          this.userSubject.next(userToken);

          return userToken;
        })
      );
  }

  register({
    username,
    email,
    password,
    confirm_password,
  }: {
    username: string;
    email: string;
    password: string;
    confirm_password: string;
  }) {
    return this.http.post(`${environment.apiUrl}/auth/register`, {
      username,
      email,
      password,
      confirm_password,
    });
  }

  logout() {
    localStorage.removeItem(constants.USER_KEY);
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  public get userValue(): UserType | null {
    return this.userSubject.value;
  }

  public isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  public isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem(constants.EXPIRES_AT);
    const expiresAt = expiration ? JSON.parse(expiration) : null;
    return moment(expiresAt);
  }
}
