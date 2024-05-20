import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonCollection } from '../../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonSearchService {
  constructor(private http: HttpClient) {}

  readonly apiUrl = 'https://api.pokemontcg.io/v1';

  searchByName(name: string): Observable<PokemonCollection> {
    return this.http.get<PokemonCollection>(`${this.apiUrl}/cards`, {
      params: {
        name,
      },
    });
  }
}
