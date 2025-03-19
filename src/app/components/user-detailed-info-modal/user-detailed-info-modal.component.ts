import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-user-detailed-info-modal',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, CommonModule],
  templateUrl: './user-detailed-info-modal.component.html',
  styleUrl: './user-detailed-info-modal.component.scss'
})
export class UserDetailedInfoModalComponent {
  
  readonly data = inject(MAT_DIALOG_DATA);
  
}
