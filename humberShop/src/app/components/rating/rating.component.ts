import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import {} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent {
  @Input() value: number;
  @Input() text: string;

  stars: Array<string>;

  fullStarIcon = faStar;
  halfStarIcon = faStarHalfAlt;
  emptyStarIcon = farStar;
}
