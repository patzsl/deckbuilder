import { TestBed } from '@angular/core/testing';

import { PokemonSearchService } from './pokemon-search.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Pokemon } from '../../models/pokemon';
import { mockPokemons } from '../../mocks/pokemon.mock';

describe('PokemonSearchService', () => {
  let service: PokemonSearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PokemonSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return pokemons correctly', () => {
    const mockFilters = {
      name: 'pikachu',
      pack: 'base',
      types: 'lightning', // Corrigido para ser uma string única, conforme a definição do serviço
      cardType: 'pokemon',
    };
    const url = `${service.apiUrl}/cards?name=${mockFilters.name}&series=${mockFilters.pack}&types=${mockFilters.types}&supertype=${mockFilters.cardType}&page=1&pageSize=100`;
    let result: Pokemon[] = [];

    service
      .search(mockFilters)
      .subscribe((products) => (result = products.cards));

    const request = httpMock.expectOne(url);
    request.flush(mockPokemons);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockPokemons.cards);
  });
});
