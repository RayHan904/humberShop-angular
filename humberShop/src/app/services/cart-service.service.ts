// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../models/cartItem.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$: Observable<CartItem[]> = this.cartItemsSubject.asObservable();

  constructor() {}

  addToCart(product: CartItem, qty: number): void {
    const cartItems = this.cartItemsSubject.getValue();
    const existingItemIndex = cartItems.findIndex(
      (item) => item._id === product._id
    );

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].qty += qty;
    } else {
      cartItems.push({ ...product, qty });
    }

    this.cartItemsSubject.next(cartItems);
  }

  removeFromCart(id: string): void {
    const cartItems = this.cartItemsSubject.getValue();
    const updatedCartItems = cartItems.filter((item) => item._id !== id);
    this.cartItemsSubject.next(updatedCartItems);
  }

  getCartTotalItems(): number {
    return this.cartItemsSubject
      .getValue()
      .reduce((acc, item) => acc + item.qty, 0);
  }

  getCartTotalPrice(): number {
    return this.cartItemsSubject
      .getValue()
      .reduce((acc, item) => acc + item.qty * item.price, 0);
  }
}
