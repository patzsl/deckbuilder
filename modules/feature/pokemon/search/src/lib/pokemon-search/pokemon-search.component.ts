/* eslint-disable no-debugger */
/* eslint-disable no-console */
import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IgxAutocompleteModule,
  IgxDropDownModule,
  IgxInputGroupModule,
} from 'igniteui-angular';
import {
  DeckService,
  PokemonListService,
  PokemonSearchService,
} from 'modules/data-access/pokemon';
import {
  Pokemon,
  PokemonCollection,
} from 'modules/data-access/pokemon/src/lib/models/pokemon';
import { debounceTime, distinctUntilChanged, take } from 'rxjs/operators';
import { FilterPokemonPipe } from './filterPokemon.pipe';
import { Subscription } from 'rxjs';

interface FilterValues {
  pokemonSelected?: string | null;
  cardTypeSelected?: string | null;
  typeSelected?: string | null;
  packSelected?: string | null;
}

@Component({
  selector: 'lib-pokemon-search',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IgxAutocompleteModule,
    IgxDropDownModule,
    IgxInputGroupModule,
    FilterPokemonPipe,
  ],
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss'],
})
export class PokemonSearchComponent implements OnInit, OnDestroy {
  @Output() enableSaveButton = new EventEmitter<boolean>();
  searchForm = new FormGroup({
    pokemonSelected: new FormControl(''),
    cardTypeSelected: new FormControl(''),
    typeSelected: new FormControl(''),
    packSelected: new FormControl(''),
  });
  public pokemons: PokemonCollection = { cards: [] };
  filteredPokemons: Pokemon[] = [];

  selectedCards: Pokemon[] = [];

  isLoading = false;
  hasError = false;

  private deckSubscription!: Subscription;

  constructor(
    private pokemonListService: PokemonListService,
    private pokemonSearchService: PokemonSearchService,
    private cdr: ChangeDetectorRef,
    private deckService: DeckService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadPokemons();
    this.searchForm.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((values) => {
        this.updateFilters(values);
      });
    this.deckSubscription = this.deckService.currentDeck$.subscribe((deck) => {
      if (deck) {
        this.selectedCards = [...deck.cards];
      }
    });
  }

  ngOnDestroy() {
    this.deckSubscription.unsubscribe();
  }

  loadPokemons() {
    this.isLoading = true;
    this.hasError = false;
    this.pokemonListService.getPokemonList().subscribe({
      next: (pokemons) => {
        this.pokemons.cards = pokemons.cards;
        this.filteredPokemons = [...this.pokemons.cards];
        this.cdr.detectChanges();
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.hasError = true;
        console.error('Erro ao carregar os Pokémon:', error);
      },
    });
  }

  updateFilters(values: FilterValues) {
    this.isLoading = true;
    const filters = {
      name: values.pokemonSelected ?? undefined,
      pack: values.packSelected ?? undefined,
      types: values.typeSelected ?? undefined,
      cardType: values.cardTypeSelected ?? undefined,
    };

    this.pokemonSearchService.search(filters).subscribe((result) => {
      this.filteredPokemons = result.cards;
      this.cdr.detectChanges();
      this.isLoading = false;
    });
  }

  getFilteredPokemons(): Pokemon[] {
    return this.filteredPokemons;
  }

  trackByPokemonId(index: number, pokemon: Pokemon): string {
    return pokemon.id;
  }

  selectCard(pokemon: Pokemon) {
    if (this.selectedCards.length >= 60) {
      console.error('O limite máximo de 60 cartas foi atingido.');
      return;
    }

    if (this.canAddCard(pokemon)) {
      this.selectedCards.push(pokemon);
      this.checkDeckSize();
      this.checkDeckCreationPossibility();
    } else {
      // Implementar feedback visual aqui
      console.log(pokemon);
      console.error('Não é possível adicionar mais cartas deste tipo.');
    }
  }

  canAddCard(pokemon: Pokemon): boolean {
    const count = this.selectedCards.filter(
      (card) => card.name === pokemon.name
    ).length;
    return count < 4;
  }

  checkDeckSize() {
    if (this.selectedCards.length < 24 || this.selectedCards.length > 60) {
      console.error('O baralho deve ter entre 24 e 60 cartas.');
    }
  }

  canCreateDeck(): boolean {
    const isValidDeckSize =
      this.selectedCards.length >= 24 && this.selectedCards.length <= 60;
    const hasValidCardCounts = !this.selectedCards.some(
      (card) =>
        this.selectedCards.filter((c) => c.name === card.name).length > 4
    );

    return isValidDeckSize && hasValidCardCounts;
  }

  createDeck() {
    if (this.canCreateDeck()) {
      this.deckService.currentDeck$.pipe(take(1)).subscribe((currentDeck) => {
        if (currentDeck && currentDeck.id && currentDeck.name) {
          const updatedDeck = {
            id: currentDeck.id,
            name: currentDeck.name,
            cards: this.selectedCards,
          };
          this.deckService.setCurrentDeck(updatedDeck);
          this.deckService.addDeck(updatedDeck);
          console.log('Baralho atualizado:', updatedDeck);
          this.router.navigate(['/decks']);
        } else {
          console.error(
            'Nenhum baralho atual para atualizar ou baralho atual incompleto.'
          );
        }
      });
    } else {
      console.error('Restrições do baralho não atendidas.');
    }
  }

  countCards(pokemon: Pokemon): number {
    return this.selectedCards.filter(
      (card) => card.name === pokemon.name && card.id === pokemon.id
    ).length;
  }

  countCardsByName(pokemonName: string): number {
    return this.selectedCards.filter((card) => card.name === pokemonName)
      .length;
  }

  checkDeckCreationPossibility() {
    const canCreate = this.canCreateDeck();
    this.enableSaveButton.emit(canCreate);
  }
}
