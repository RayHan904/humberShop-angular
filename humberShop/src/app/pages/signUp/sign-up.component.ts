import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth-service.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  isLoading = false;
  alertError: string = '';
  userInfo$: Observable<any>;
  private userInfoKey = 'userInfo';
  private expirationTimeKey = 'expirationTime';

  redirect: string;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    const { name, email, password, confirmPassword } = this.registerForm.value;

    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }

    this.isLoading = true;
    this.authService.registerUser({ name, email, password }).subscribe(
      (response) => {
        this.setCredentials(response);
        this.router.navigate([this.redirect]);
      },
      (error) => {
        console.log(error?.error?.message || 'An error occurred');
        this.isLoading = false;
      }
    );
  }

  setCredentials(userInfo: any): void {
    localStorage.setItem(this.userInfoKey, JSON.stringify(userInfo));

    const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000;
    localStorage.setItem(this.expirationTimeKey, expirationTime.toString());
  }
  get f() {
    return this.registerForm.controls;
  }
}
