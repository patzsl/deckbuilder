import { Component, OnInit } from '@angular/core';
import { AuthService, DeckService } from 'modules/data-access/pokemon';
import { Pokemon } from 'modules/data-access/pokemon/src/lib/models/pokemon';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

interface Deck {
  id: number;
  name: string;
  cards: Pokemon[];
}

@Component({
  selector: 'lib-decks',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.scss'],
})
export class DecksComponent implements OnInit {
  username: string | null = null;
  decks: Deck[] = [];

  constructor(
    private authService: AuthService,
    private deckService: DeckService
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
    const newDeck: Deck = { id: 123, name: deckName, cards }; // TODO: instalar uuid e substituir o 123 por um id dinamico
    this.deckService.addDeck(newDeck);
  }
}
