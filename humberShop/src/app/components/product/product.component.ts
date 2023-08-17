import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { RouterModule } from '@angular/router';
import { RatingComponent } from '../rating/rating.component';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule, RatingComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})

// Assuming you have the Product model defined
export class ProductComponent {
  imgPath = 'images/humberPic1.png';
  @Input() product: Product;
}
