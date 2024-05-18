import { TestBed } from '@angular/core/testing';

import { PokemonListService } from './pokemon-list.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Pokemon } from '../../models/pokemon';
import { mockPokemons } from '../../mocks/pokemon.mock';

describe('PokemonListService', () => {
  let service: PokemonListService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PokemonListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return pokemons correctly', () => {
    const url = `${service.apiUrl}/cards`;
    let result: Pokemon[] = [];

    service.getPokemonList().subscribe((products) => (result = products));

    const request = httpMock.expectOne(url);
    request.flush(mockPokemons);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockPokemons);
  });
});
