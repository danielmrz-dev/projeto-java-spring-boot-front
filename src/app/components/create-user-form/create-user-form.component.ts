import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CreateUserFormController } from './create-user-form-controller';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/user.interface';
import { IUserEdited } from '../../interfaces/user-edited.interface';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, NgTemplateOutlet],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss'
})
export class CreateUserFormComponent extends CreateUserFormController {

  typeForm!: string;
  userData: IUser = {} as IUser;
  userId!: number;

  constructor(
    private readonly usersService: UsersService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
    super();
    this.activatedRoute.data.subscribe((value) => {
      this.typeForm = value['typeForm'];
    })
    this.userData = this.router.getCurrentNavigation()?.extras.state?.['data'];
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params['id'];
    })
  }

  ngOnInit(): void {
    if (this.typeForm === 'edit') {
      this.createUserForm.patchValue({
        name: this.userData.name,
        account: {
          limit: this.userData.account.limit,
        },
        card: {
          limit: this.userData.card.limit
        }
      });
      
    }
  }
  

  createUser(user: IUser) {
    this.usersService.saveUser(user);
    this.router.navigate(['/users']);
  }

  editUser(user: IUser) {
    const userEdited: IUserEdited = {
      name: user.name,
      account: {
        limit: user.account.limit,
        balance: this.userData.account.balance
      },
      card: {
        limit: user.card.limit,
      },

    };
    this.usersService.editUser(this.userId, userEdited);
    
  }
  
}
