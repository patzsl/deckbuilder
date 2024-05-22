import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from '../../models/pokemon';

interface Deck {
  id: string;
  name: string;
  cards: Pokemon[];
}

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  private decksSource = new BehaviorSubject<Deck[]>([]);
  decks$ = this.decksSource.asObservable();

  private currentDeckSource = new BehaviorSubject<Deck | null>(null);
  currentDeck$ = this.currentDeckSource.asObservable();

  addDeck(deck: Deck) {
    const currentDecks = this.decksSource.value;
    const deckIndex = currentDecks.findIndex((d) => d.id === deck.id);

    if (deckIndex !== -1) {
      // Atualiza o deck existente
      currentDecks[deckIndex] = deck;
    } else {
      // Adiciona o novo deck
      currentDecks.push(deck);
    }

    this.decksSource.next(currentDecks);
  }

  setDecksForUser(username: string, decks: Deck[]) {
    this.decksSource.next(decks);
  }

  setCurrentDeck(deck: Deck) {
    this.currentDeckSource.next(deck);
  }

  clearCurrentDeck() {
    this.currentDeckSource.next(null);
  }

  removeDeck(deckId: string) {
    const currentDecks = this.decksSource.value;
    const updatedDecks = currentDecks.filter((deck) => deck.id !== deckId);
    this.decksSource.next(updatedDecks);
  }
}
