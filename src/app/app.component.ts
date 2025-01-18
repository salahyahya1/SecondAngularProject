import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarcombComponent } from './navbarcomb/navbarcomb.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarcombComponent, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ass2';
}
