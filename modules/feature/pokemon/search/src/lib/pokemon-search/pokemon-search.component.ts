import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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
  pokemonSelected = new FormControl('');
  packSelected = new FormControl('');
  cardTypeSelected = new FormControl('');
  typeSelected = new FormControl('');
  public pokemons: PokemonCollection = {
    cards: [],
  };
  selectedPokemonName = '';
  filteredPokemons: Pokemon[] = [];

  constructor(
    private pokemonListService: PokemonListService,
    private pokemonSearchService: PokemonSearchService
  ) {}

  ngOnInit() {
    this.loadPokemons();
    this.pokemonSelected.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        if (value !== null) {
          this.updateSelectedPokemon(value);
        }
      });
  }

  loadPokemons() {
    this.pokemonListService.getPokemonList().subscribe((pokemons) => {
      this.filteredPokemons = pokemons.cards;
      this.pokemons.cards = this.filteredPokemons;
    });
  }

  updateSelectedPokemon(name: string) {
    if (name) {
      this.pokemonSearchService
        .searchByName(name)
        .subscribe((filteredCollection) => {
          this.filteredPokemons = filteredCollection.cards;
          this.pokemons.cards = this.filteredPokemons;
        });
    } else {
      this.filteredPokemons = [];
    }
  }

  trackByPokemonId(index: number, pokemon: Pokemon): string {
    return pokemon.id;
  }
}
