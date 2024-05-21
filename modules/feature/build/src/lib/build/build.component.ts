import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-build',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss'],
})
export class BuildComponent {}
