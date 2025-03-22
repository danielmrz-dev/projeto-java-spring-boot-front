import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { IUserEdited } from '../interfaces/user-edited.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly api: string = "https://projeto-java-springboot-production.up.railway.app/users"

  usersListSubject = new BehaviorSubject<IUser[]>([]);
  usersList$ = this.usersListSubject.asObservable();

  constructor(private readonly _http: HttpClient) {
    this.getUsers();
  }

  getUsers(): void {
    this._http.get<IUser[]>(this.api).subscribe((users) => {
      this.usersListSubject.next(users);
    });
    
  }

  saveUser(userData: IUser): Observable<IUser> {
    return this._http.post<IUser>(this.api, userData);
  }

  // saveUser(userData: IUser): void {
  //   this._http.post<IUser>(this.api, userData).subscribe(() => {
  //     this.getUsers();
  //   });
  // }

  editUser(id: Number, userData: IUserEdited): void {
    this._http.put<IUser>(`${this.api}/${id}`, userData).subscribe(() => {
      this.getUsers();
    })
  }

  deleteUser(id: Number): void {
    this._http.delete<IUser>(`${this.api}/${id}`).subscribe(() => {
      this.getUsers();
    });
  }
}
