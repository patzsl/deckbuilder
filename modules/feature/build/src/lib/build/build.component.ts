import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IgxButtonModule, IgxRippleModule } from 'igniteui-angular';
import { DeckService } from 'modules/data-access/pokemon';
import { Pokemon } from 'modules/data-access/pokemon/src/lib/models/pokemon';
import { LayoutModule } from 'modules/feature/layout';
import { PokemonSearchComponent } from 'modules/feature/pokemon/search';

interface Deck {
  id: string;
  name: string;
  cards: Pokemon[];
}
@Component({
  selector: 'lib-build',
  standalone: true,
  imports: [
    CommonModule,
    PokemonSearchComponent,
    LayoutModule,
    IgxButtonModule,
    IgxRippleModule,
  ],
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss'],
})
export class BuildComponent implements OnInit, OnDestroy {
  @ViewChild(PokemonSearchComponent)
  pokemonSearchComponent!: PokemonSearchComponent;
  currentDeck: Deck | null = null;
  canSave = false;

  constructor(private deckService: DeckService, private router: Router) {}

  ngOnInit(): void {
    this.deckService.currentDeck$.subscribe((deck) => {
      if (deck) {
        this.currentDeck = deck;
        // Inicialize a construção do deck com os dados recebidos
      } else {
        // Tratar o caso onde não há deck definido (redirecionar ou mostrar mensagem)
      }
    });
  }

  ngOnDestroy() {
    this.deckService.clearCurrentDeck();
  }

  triggerChildFunction() {
    if (this.pokemonSearchComponent) {
      this.pokemonSearchComponent.createDeck();
    }
  }

  closeDeck() {
    if (this.currentDeck && this.currentDeck.cards.length >= 24) {
      this.router.navigate(['/decks']);
    } else {
      if (this.currentDeck?.id) {
        this.deckService.removeDeck(this.currentDeck.id);
      }
      this.deckService.clearCurrentDeck();
      this.router.navigate(['/decks']);
    }
  }
}
