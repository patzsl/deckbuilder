import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from '../../models/pokemon';

interface Deck {
  id: number;
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
    this.decksSource.next([...currentDecks, deck]);
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
}
