import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CreateUserFormController } from './create-user-form-controller';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, NgTemplateOutlet],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss'
})
export class CreateUserFormComponent extends CreateUserFormController {

  constructor() {
    super();
  }
}
