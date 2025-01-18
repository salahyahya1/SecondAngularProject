import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbarcomb',
  imports: [RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './navbarcomb.component.html',
  styleUrl: './navbarcomb.component.css',
})
export class NavbarcombComponent {

}
