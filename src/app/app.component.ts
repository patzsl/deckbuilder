import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from 'modules/feature/layout';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'deckbuilder';
  username = 'King PikaRomulus';
}
