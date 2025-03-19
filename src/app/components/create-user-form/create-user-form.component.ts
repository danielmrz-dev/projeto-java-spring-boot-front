import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CreateUserFormController } from './create-user-form-controller';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/user.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, NgTemplateOutlet],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss'
})
export class CreateUserFormComponent extends CreateUserFormController {

  constructor(
    private readonly usersService: UsersService,
    private readonly router: Router
  ) {
    super();
  }

  createUser(user: IUser) {
    this.usersService.saveUser(user);
    this.router.navigate(['/users']);
  }
}
