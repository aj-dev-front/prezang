import {
  Component,
  inject,
} from '@angular/core';
import {
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';

import { List } from './list/list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, List],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly router = inject(Router);

  navigate() {
    this.router.navigate(["products", "consulter"]);
  }
}
