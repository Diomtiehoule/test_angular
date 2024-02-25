import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppareilComponent } from './appareil/appareil.component';
import { CommonModule } from '@angular/common';
import { AppareilService } from './service/appareil.service';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth-guard.service';
import { AppModule } from './app.module';
import { Subscription, interval} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ AppareilComponent, CommonModule, AppareilViewComponent , RouterModule , AppModule, EditAppareilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ AppareilService , AuthService , AuthGuard]
})
export class AppComponent implements OnInit , OnDestroy{


  secondes : number = 0;  
  counterSubscription !: Subscription;
  constructor(){
  }

  

  ngOnInit(): void {
    const counter = interval(1000)

    this.counterSubscription = counter.subscribe(
      (value :number)=>{
        this.secondes = value;
      }
    )

  }

  // une fonction pour detruuire le subscribe 
  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe()
    
  }

}
