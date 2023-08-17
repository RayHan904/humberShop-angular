import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Badge } from 'bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingCart, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  cartItems: any[] = []; // Replace 'any' with the actual type of your cart items.
  userInfo: any; // Replace 'any' with the actual type of your user info.

  faShoppingCart = faShoppingCart;
  faSignIn = faSignIn;
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.userInfo = this.localStorageService.getUserInfo();
  }

  updateUserInfo(): void {
    this.userInfo = this.localStorageService.getUserInfo();
    this.cdRef.detectChanges();
  }

  logoutHandler(): void {
    this.userInfo = '';
    this.localStorageService.logoutHandler();
    this.router.navigate(['/login']);
    this.updateUserInfo();
  }
}
