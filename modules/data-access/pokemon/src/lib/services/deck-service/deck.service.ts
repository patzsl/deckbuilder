import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Deck {
  id: number;
  name: string;
  cards: string[];
}

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  private decksSource = new BehaviorSubject<Deck[]>([]);
  decks$ = this.decksSource.asObservable();

  addDeck(deck: Deck) {
    const currentDecks = this.decksSource.value;
    this.decksSource.next([...currentDecks, deck]);
  }

  setDecksForUser(username: string, decks: Deck[]) {
    this.decksSource.next(decks);
  }
}
