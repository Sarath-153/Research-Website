import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from './site-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
