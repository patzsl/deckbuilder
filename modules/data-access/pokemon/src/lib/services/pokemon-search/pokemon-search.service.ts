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

  search(filters: {
    name?: string;
    pack?: string;
    type?: string;
    cardType?: string;
    page?: number;
    pageSize?: number;
    incrementPageSize?: boolean;
  }): Observable<PokemonCollection> {
    const params: { [key: string]: string | number } = {};
    if (filters.name) {
      params['name'] = filters.name;
    }
    if (filters.pack) {
      params['series'] = filters.pack;
    }
    if (filters.type) {
      params['type'] = filters.type;
    }
    if (filters.cardType) {
      params['supertype'] = filters.cardType;
    }
    // Define o número da página, padrão é 1 se não especificado
    params['page'] = filters.page || 1;
    // Define o tamanho da página, padrão é 100 se não especificado, e incrementa se necessário
    let basePageSize = filters.pageSize || 100;
    if (filters.incrementPageSize) {
      basePageSize += 50; // Incrementa o pageSize em 50 a cada nova carga
    }
    params['pageSize'] = basePageSize;

    return this.http.get<PokemonCollection>(`${this.apiUrl}/cards`, { params });
  }
}
