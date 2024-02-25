import { Component , OnInit} from '@angular/core';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthGuard } from '../service/auth-guard.service';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  providers: [AuthService , AuthGuard , AppareilService]
})
export class AuthComponent implements OnInit{

  authStatus : boolean = false;

  constructor(private authService : AuthService , private authGuard : AuthGuard, private router : Router){
    console.log(this.authStatus)
  }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth
  }

  onSignIn(){
    this.authService.signIn()
    .then(success =>{
      console.log('connection reussi, redirection !!!')
      this.authStatus = this.authService.isAuth
      this.router.navigate(['appareilView'])
      
    })
    .catch(err =>{
      console.log('une erreur  est survenue !!' , err)
    })
  }

  onSignOut(){
    this.authService.signOut()
    this.authStatus = this.authService.isAuth
  }
}
