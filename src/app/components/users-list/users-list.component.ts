import { Component } from '@angular/core';
import { UserCardComponent } from "../user-card/user-card.component";
import { IUser } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserCardComponent, CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  users$: Observable<IUser[]> = of([]);
  numberOfUsers: number = 0;

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
  }
}
