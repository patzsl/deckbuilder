import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonSearchService {
  constructor(private http: HttpClient) {}

  readonly apiUrl = 'https://api.pokemontcg.io/v1';

  searchByName(name: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.apiUrl}/cards`, {
      params: {
        name,
      },
    });
  }
}
