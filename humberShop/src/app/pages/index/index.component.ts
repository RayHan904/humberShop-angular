import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../components/nav/nav.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from '../productDetails/product-details.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    FooterComponent,
    HomeComponent,
    RouterModule,
    ProductDetailsComponent,
    RegisterComponent,
    LoginComponent,
  ],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {}
