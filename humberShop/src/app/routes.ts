import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductDetailsComponent } from './pages/productDetails/product-details.component';
import { SignUpComponent } from './pages/signUp/sign-up.component';
import { CartComponent } from './pages/cartComponent/cart-component.component';

const routeConfig: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },
  { path: 'login', component: LoginComponent, title: 'Login Page' },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Registeration Page',
  },
  {
    path: 'signup',
    component: SignUpComponent,
    title: 'Sign Up Page',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart Page',
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
    title: 'Product Page',
  },
];

export default routeConfig;
