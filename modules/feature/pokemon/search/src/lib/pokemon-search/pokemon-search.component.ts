import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-pokemon-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss'],
})
export class PokemonSearchComponent {}
