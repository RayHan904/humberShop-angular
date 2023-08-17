import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductComponent } from 'src/app/components/product/product.component';
import { CartItem } from 'src/app/models/cartItem.model';
import { CartService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css'],
})
export class CartComponent {
  cartItems: CartItem[] = [];

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((cartItems) => {
      this.cartItems = cartItems;
    });
  }

  addToCartHandler(product: CartItem, qty: number): void {
    // this.cartService.addToCart()
  }

  removeFromCartHandler(id: string): void {
    this.cartService.removeFromCart(id);
  }

  checkoutHandler(): void {
    this.router.navigate(['/login'], { queryParams: { redirect: '/' } });
  }

  calculateTotalPrice(): number {
    return this.cartItems.reduce(
      (acc, item) => acc + item.countInStock * item.price,
      0
    );
  }

  calculateTotalItems(): number {
    return this.cartItems.reduce((acc, item) => acc + item.qty, 0);
  }
}
