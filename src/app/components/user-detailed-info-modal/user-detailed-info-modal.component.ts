import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { UsersService } from '../../services/users.service';
import { Router, RouterLink } from '@angular/router';
import { IFeature } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-detailed-info-modal',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, CommonModule, RouterLink],
  templateUrl: './user-detailed-info-modal.component.html',
  styleUrl: './user-detailed-info-modal.component.scss'
})
export class UserDetailedInfoModalComponent {
  
  readonly data = inject(MAT_DIALOG_DATA);
  private readonly usersService = inject(UsersService);
  private readonly router = inject(Router);

  deleteUser() {
    this.usersService.deleteUser(this.data.id);
  }

  navigateToEditUserPage() {
    this.router.navigate(['/edit-user', this.data.id], { state: { data: this.data } });
  }

  getFeaturesOrNews(array: IFeature[]) {
    return array.map(item => item.description).join(", ");
  }
  
  
}
