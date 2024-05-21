import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(private router: Router) {
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }

  onCreateDeck() {
    if (this.form.valid) {
      this.router.navigate(['/decks'], {
        queryParams: { username: this.form.value.username },
      });
    }
  }
}
