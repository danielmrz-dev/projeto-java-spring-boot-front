import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly api: string = "https://projeto-java-springboot-production.up.railway.app/users"

  constructor(private readonly _http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this._http.get<IUser[]>(this.api);
  }
}
