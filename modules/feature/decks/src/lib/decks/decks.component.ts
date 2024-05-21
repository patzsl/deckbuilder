import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  IgxButtonModule,
  IgxDialogModule,
  IgxRippleModule,
  IgxInputGroupModule,
  IgxDialogComponent,
} from 'igniteui-angular';
import { AuthService, DeckService } from 'modules/data-access/pokemon';
import { Pokemon } from 'modules/data-access/pokemon/src/lib/models/pokemon';

interface Deck {
  id: number;
  name: string;
  cards: Pokemon[];
  showCards?: boolean;
}

@Component({
  selector: 'lib-decks',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IgxButtonModule,
    IgxDialogModule,
    IgxInputGroupModule,
    IgxRippleModule,
  ],
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.scss'],
})
export class DecksComponent implements OnInit {
  @ViewChild('alert', { static: true }) alert!: IgxDialogComponent;
  username: string | null = null;
  decks: Deck[] = [];

  deckForm = new FormGroup({
    deckname: new FormControl('', Validators.required),
  });

  constructor(
    private authService: AuthService,
    private deckService: DeckService,
    private router: Router // Injetar o Router aqui
  ) {}

  ngOnInit() {
    this.authService.username$.subscribe((username) => {
      this.username = username;
      if (username) {
        this.deckService.setDecksForUser(username, []); // Inicializa com baralhos vazios
      }
    });
    this.deckService.decks$.subscribe((decks) => {
      this.decks = decks.map((deck) => ({
        ...deck,
        cards: deck.cards.map((card) =>
          typeof card === 'string' ? JSON.parse(card) : card
        ),
      }));
    });
  }

  createDeck(deckName: string, cards: Pokemon[]) {
    if (!deckName) return; // Garante que o nome do deck não está vazio
    const newDeck: Deck = { id: 123, name: deckName, cards }; // TODO: instalar uuid e substituir o 123 por um id dinamico
    this.deckService.addDeck(newDeck);
    this.deckService.setCurrentDeck(newDeck); // Define o deck atual no serviço
    this.router.navigate(['/build']); // Redirecionar para a rota 'build' após a criação do deck
    this.alert.close(); // Fecha o diálogo após a criação
  }
}
