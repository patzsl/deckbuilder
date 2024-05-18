import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonListService {
  constructor(private http: HttpClient) {}

  readonly apiUrl = 'https://api.pokemontcg.io/v1';

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.apiUrl}/cards`);
  }
}
