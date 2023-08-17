import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IndividualProductService } from 'src/app/services/productService/individual-product.service';
import { CommonModule } from '@angular/common';
import { RatingComponent } from 'src/app/components/rating/rating.component';
import { CartService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule, RatingComponent],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [IndividualProductService],
})
export class ProductDetailsComponent implements OnInit {
  productId: string;
  product: any;
  isLoading = true;
  error: any;
  qty = 1;
  rating = 0;
  comment = '';

  countInStockArray: number[] = [1, 2, 3];

  reviewForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private IndProductService: IndividualProductService,
    private cartService: CartService
  ) {
    this.reviewForm = this.fb.group({
      rating: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      this.loadProductDetails();
    });
  }

  loadProductDetails() {
    this.isLoading = true;
    this.IndProductService.getProducts(this.productId).subscribe(
      (data: any) => {
        this.product = data; // Assuming the response contains the product data
        this.countInStockArray = [
          ...Array(this.product.countInStock + 1).keys(),
        ];
        this.isLoading = false;
      },
      (error) => {
        this.error = error;
        this.isLoading = false;
      }
    );
  }
  setQty(qty: number): void {
    this.qty = qty;
  }
  addToCartHandler() {
    this.cartService.addToCart(this.product, this.qty);
  }

  submitReview() {
    if (this.reviewForm.invalid) {
      return;
    }
  }
}
