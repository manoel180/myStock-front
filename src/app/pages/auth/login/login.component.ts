import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { UserAuthService } from '../../../services/userAuthService';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ToastModule,
    PasswordModule,
    ButtonModule
  ],

  standalone: true,
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading: boolean;
  constructor(
    private fb: FormBuilder,
    private userService: UserAuthService,
    private toastService: MessageService,
    private router: Router
  ) {
    this.loading = false;
  }
  ngOnInit(): void {
    this.createForm();

  }
  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onLogin() {
    this.loading = true;
    if (this.loginForm.valid) {
      let $user = this.userService.login(
        this.loginForm.controls['username'].value,
        this.loginForm.controls['password'].value
      );
      $user.subscribe({
        error: (err) => {
          this.toastService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Login ou senha inválida!!!',
          });
        },
      });
    } else {
      this.toastService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Login ou senha inválida!!!',
      });
    }
    this.loading=false;
  }
}
