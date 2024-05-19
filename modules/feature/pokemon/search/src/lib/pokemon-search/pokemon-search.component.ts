import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  IgxAutocompleteModule,
  IgxDropDownModule,
  IgxInputGroupModule,
} from 'igniteui-angular';
import { mockPokemons } from 'modules/data-access/pokemon';
import { AutocompletePipeStartsWith } from './start-with.pipe';
import { Pokemon } from 'modules/data-access/pokemon/src/lib/models/pokemon';

@Component({
  selector: 'lib-pokemon-search',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IgxAutocompleteModule,
    IgxDropDownModule,
    IgxInputGroupModule,
    AutocompletePipeStartsWith,
  ],
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss'],
})
export class PokemonSearchComponent {
  pokemonSelected = new FormControl('');
  public pokemons = mockPokemons;
  selectedPokemon: Pokemon | null = null;

  trackByPokemonId(index: number, pokemon: Pokemon): string {
    return pokemon.id;
  }
}
