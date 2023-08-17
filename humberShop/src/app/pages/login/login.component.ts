import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  alertError: string = '';
  userInfo$: Observable<any>;
  private userInfoKey = 'userInfo';
  private expirationTimeKey = 'expirationTime';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.isLoading = true;
      this.authService.loginUser({ email, password }).subscribe(
        (res) => {
          this.setCredentials(res);
          this.router.navigate(['/']);
        },
        (err) => {
          console.error(err);
          this.isLoading = false;
          this.alertError = err.error.message;
          console.log('HEREIS TEH ERROR ', this.alertError);
        }
      );
    }
  }

  setCredentials(userInfo: any): void {
    localStorage.setItem(this.userInfoKey, JSON.stringify(userInfo));

    const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000;
    localStorage.setItem(this.expirationTimeKey, expirationTime.toString());
  }
}
