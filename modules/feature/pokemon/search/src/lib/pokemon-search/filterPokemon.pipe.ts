import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from 'modules/data-access/pokemon/src/lib/models/pokemon';

@Pipe({
  name: 'filterPokemon',
  standalone: true,
})
export class FilterPokemonPipe implements PipeTransform {
  transform(
    pokemons: Pokemon[],
    searchText = '',
    cardType: string,
    type: string,
    pack: string
  ): Pokemon[] {
    if (!pokemons) return [];
    if (!searchText && !cardType && !type && !pack) return pokemons;

    searchText = searchText.toLowerCase();

    return pokemons.filter((pokemon) => {
      const matchesSearchText = pokemon.name.toLowerCase().includes(searchText);
      const matchesCardType = cardType ? pokemon.supertype === cardType : true;
      const matchesType = type ? (pokemon.types ?? []).includes(type) : true;
      const matchesPack = pack ? pokemon.series === pack : true;

      return matchesSearchText && matchesCardType && matchesType && matchesPack;
    });
  }
}
