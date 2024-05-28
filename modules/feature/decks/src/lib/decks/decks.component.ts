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
import { v4 as uuidv4 } from 'uuid';

interface Deck {
  id: string;
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
  showDecks = false;
  isEditing = false;
  deckForm = new FormGroup({
    deckname: new FormControl('', Validators.required),
  });

  currentEditingDeck: Deck | null = null;

  constructor(
    private authService: AuthService,
    private deckService: DeckService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.username$.subscribe((username) => {
      this.username = username;
    });
    this.deckService.decks$.subscribe((decks) => {
      this.decks = decks;
      this.showDecks = this.decks.length > 0;
    });
    this.alert.closing.subscribe(() => {
      this.isEditing = false;
      this.deckForm.reset();
      this.currentEditingDeck = null;
    });
  }

  openEditDialog(deck: Deck) {
    this.deckForm.setValue({ deckname: deck.name });
    this.currentEditingDeck = deck;
    this.isEditing = true;
    this.alert.open();
  }

  createDeck(deckName: string, cards: Pokemon[]) {
    if (!deckName) return;
    const deckToUpdate = this.currentEditingDeck || {
      id: uuidv4(),
      name: '',
      cards: [],
    };
    deckToUpdate.name = deckName;
    deckToUpdate.cards = cards;

    if (this.currentEditingDeck) {
      this.deckService.updateDeck(deckToUpdate);
    } else {
      this.deckService.addDeck(deckToUpdate);
    }

    this.deckService.setCurrentDeck(deckToUpdate);
    this.router.navigate(['/build']);
    this.alert.close();
  }

  getCardCounts(deck: Deck) {
    let pokemonCount = 0;
    let trainerCount = 0;
    const uniqueTypes = new Set<string>();

    deck.cards.forEach((card: Pokemon) => {
      if (card.supertype === 'Pokémon') {
        pokemonCount++;
        card.types.forEach((type) => uniqueTypes.add(type));
      } else if (card.supertype === 'Trainer') {
        trainerCount++;
      }
    });

    return { pokemonCount, trainerCount, uniqueTypeCount: uniqueTypes.size };
  }

  confirmRemoval(deckId: string) {
    if (confirm('Are you sure you want to remove this deck?')) {
      this.removeDeck(deckId);
    }
  }

  removeDeck(deckId: string) {
    this.decks = this.decks.filter((deck) => deck.id !== deckId);
    this.deckService.removeDeck(deckId);
    alert('The deck has been successfully removed.');
  }
}
