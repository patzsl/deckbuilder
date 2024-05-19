import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IgxButtonModule, IgxRippleModule } from 'igniteui-angular';
import { LayoutModule } from 'modules/feature/layout';
import { PokemonSearchComponent } from 'modules/feature/pokemon/search';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    LayoutModule,
    IgxButtonModule,
    IgxRippleModule,
    PokemonSearchComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'deckbuilder';
  username = 'King PikaRomulus';
}
