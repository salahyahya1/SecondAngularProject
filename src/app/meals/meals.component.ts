import { Component } from '@angular/core';
import { SeafoodComponent } from '../seafood/seafood.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-meals',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
})
export class MealsComponent {

}
