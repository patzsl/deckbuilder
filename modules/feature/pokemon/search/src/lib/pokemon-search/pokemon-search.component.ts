/* eslint-disable no-console */
import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  IgxAutocompleteModule,
  IgxDropDownModule,
  IgxInputGroupModule,
} from 'igniteui-angular';
import {
  PokemonListService,
  PokemonSearchService,
} from 'modules/data-access/pokemon';
import {
  Pokemon,
  PokemonCollection,
} from 'modules/data-access/pokemon/src/lib/models/pokemon';
import { FilterPokemonPipe } from './filterPokemon.pipe';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
export class PokemonSearchComponent implements OnInit {
  searchForm = new FormGroup({
    pokemonSelected: new FormControl(''),
    cardTypeSelected: new FormControl(''),
    typeSelected: new FormControl(''),
    packSelected: new FormControl(''),
  });
  public pokemons: PokemonCollection = { cards: [] };
  filteredPokemons: Pokemon[] = [];

  selectedCards: Pokemon[] = [];

  constructor(
    private pokemonListService: PokemonListService,
    private pokemonSearchService: PokemonSearchService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadPokemons();
    this.searchForm.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((values) => {
        this.updateFilters(values);
      });
  }

  loadPokemons() {
    this.pokemonListService.getPokemonList().subscribe((pokemons) => {
      this.pokemons.cards = pokemons.cards;
      this.filteredPokemons = [...this.pokemons.cards];
      this.cdr.detectChanges();
    });
  }

  updateFilters(values: FilterValues) {
    const filters = {
      name: values.pokemonSelected ?? undefined,
      pack: values.packSelected ?? undefined,
      type: values.typeSelected ?? undefined,
      cardType: values.cardTypeSelected ?? undefined,
    };

    this.pokemonSearchService.search(filters).subscribe((result) => {
      this.filteredPokemons = result.cards;
      this.cdr.detectChanges();
    });
  }

  getFilteredPokemons(): Pokemon[] {
    return this.filteredPokemons;
  }

  trackByPokemonId(index: number, pokemon: Pokemon): string {
    return pokemon.id;
  }

  selectCard(pokemon: Pokemon) {
    if (this.canAddCard(pokemon)) {
      this.selectedCards.push(pokemon);
      this.checkDeckSize();
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
      console.log(this.selectedCards);
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
    // Implementação que retorna a contagem de cartas para o nome do Pokémon fornecido
    return this.selectedCards.filter((card) => card.name === pokemonName)
      .length;
  }
}
