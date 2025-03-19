import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailedInfoModalComponent } from '../user-detailed-info-modal/user-detailed-info-modal.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

  @Input({ required: true }) user!: IUser;

  constructor(private readonly dialog: MatDialog) {}
  
  showDetails() {
    this.dialog.open(UserDetailedInfoModalComponent, 
      {
        data: this.user
      }
    );
  }
}
