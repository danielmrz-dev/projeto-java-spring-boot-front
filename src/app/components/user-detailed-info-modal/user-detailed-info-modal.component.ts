import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { UsersService } from '../../services/users.service';
import { Router, RouterLink } from '@angular/router';
import { IFeature } from '../../interfaces/user.interface';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { CreditCardMaskPipe } from '../../pipes/credit-card-mask.pipe';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-user-detailed-info-modal',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, CommonModule, NgxMaskPipe, NgxMaskDirective, CreditCardMaskPipe, RouterLink],
  templateUrl: './user-detailed-info-modal.component.html',
  styleUrl: './user-detailed-info-modal.component.scss'
})
export class UserDetailedInfoModalComponent {
  
  readonly data = inject(MAT_DIALOG_DATA);
  private readonly usersService = inject(UsersService);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog)

  deleteUser() {
    this.usersService.deleteUser(this.data.id);
    this.dialog.open(ConfirmationModalComponent, {
      data: {
        text: 'User deleted successfully!'
      }
    })
  }

  navigateToEditUserPage() {
    this.router.navigate(['/edit-user', this.data.id], { state: { data: this.data } });
  }

  getFeaturesOrNews(array: IFeature[]) {
    return array.map(item => item.description).join(", ") || 'None';
  }
  
  
}
