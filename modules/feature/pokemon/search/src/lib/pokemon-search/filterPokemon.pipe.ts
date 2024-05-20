import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from 'modules/data-access/pokemon/src/lib/models/pokemon';

@Pipe({
  name: 'filterPokemon',
  standalone: true,
})
export class FilterPokemonPipe implements PipeTransform {
  transform(items: Pokemon[], searchText: string): Pokemon[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter((it) => {
      return it.name.toLowerCase().includes(searchText);
    });
  }
}
