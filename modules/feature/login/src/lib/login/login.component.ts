import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, DeckService } from 'modules/data-access/pokemon';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private deckService: DeckService
  ) {
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }

  onCreateDeck() {
    const deck = {
      id: uuidv4(),
      name: 'New Deck',
      cards: [],
    };
    if (this.form.valid) {
      this.authService.setUsername(this.form.value.username);
      this.deckService.addDeck(deck);
      this.deckService.setCurrentDeck(deck);
      this.router.navigate(['/build']);
    }
  }
}
