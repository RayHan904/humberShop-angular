import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
