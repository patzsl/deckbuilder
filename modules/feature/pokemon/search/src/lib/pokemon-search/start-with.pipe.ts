import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from 'modules/data-access/pokemon/src/lib/models/pokemon';

@Pipe({
  name: 'startsWith',
  standalone: true,
})
export class AutocompletePipeStartsWith implements PipeTransform {
  transform(pokemons: Pokemon[], searchText: string): Pokemon[] {
    if (!searchText) return pokemons;
    return pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(searchText.toLowerCase())
    );
  }
}
