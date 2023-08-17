import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from 'src/app/components/product/product.component';
import { ProductService } from '../../services/productService/product.service'; // Assuming you have a service to fetch products
import { Product } from '../../models/product.model'; // Assuming you have a model for Product
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductService],
})
export class HomeComponent implements OnInit {
  products$: Observable<Product[]>;
  isLoading = true;
  error = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products$ = this.productService.getProducts();
    this.products$.subscribe(
      (products) => {
        console.log(products);
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.error = error;
      }
    );
  }
}
