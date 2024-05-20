import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  IgxAutocompleteModule,
  IgxDropDownModule,
  IgxInputGroupModule,
} from 'igniteui-angular';
import { mockPokemons } from 'modules/data-access/pokemon';
import { Pokemon } from 'modules/data-access/pokemon/src/lib/models/pokemon';
import { FilterPokemonPipe } from './filterPokemon.pipe';

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
export class PokemonSearchComponent {
  pokemonSelected = new FormControl('');
  public pokemons = mockPokemons;
  selectedPokemonName = '';
  filteredPokemons: Pokemon[] = [];

  updateSelectedPokemon(name: string) {
    this.selectedPokemonName = name;
    this.filteredPokemons = this.pokemons.cards.filter((pokemon: Pokemon) =>
      pokemon.name
        .toLowerCase()
        .includes(this.selectedPokemonName.toLowerCase())
    );
  }
  trackByPokemonId(index: number, pokemon: Pokemon): string {
    return pokemon.id;
  }
}
