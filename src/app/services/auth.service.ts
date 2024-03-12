import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { UserType } from 'src/interfaces/UserType';
import { HttpClient } from '@angular/common/http';
import { constants } from 'src/interfaces/contants';
import { environment } from 'src/environments/environment';

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
        map((data) => {
          console.log(data);
          const userToken: UserType = data as UserType;
          localStorage.setItem(constants.USER_KEY, JSON.stringify(userToken));
          this.userSubject.next(userToken);

          return userToken;
        })
      );
  }

  logout() {
    localStorage.removeItem(constants.USER_KEY);
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  public get userValue(): UserType | null {
    return this.userSubject.value;
  }
}
