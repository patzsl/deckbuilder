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
    const mockName = 'pikachu';
    const url = `${service.apiUrl}/cards?name=${mockName}`;
    let result: Pokemon[] = [];

    service
      .searchByName(mockName)
      .subscribe((products) => (result = products.cards));

    const request = httpMock.expectOne(url);
    request.flush(mockPokemons);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockPokemons.cards);
  });
});
