import { Component , OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';
import { AppareilComponent } from '../appareil/appareil.component';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../service/auth-guard.service';
import { AuthService } from '../service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  standalone: true,
  imports: [AppareilComponent , CommonModule],
  templateUrl: './appareil-view.component.html',
  styleUrl: './appareil-view.component.css',
  providers:[AppareilService , AuthGuard , AuthService]
})
export class AppareilViewComponent implements OnInit{
  lastUpdate = new Promise(
    (resolve , reject) =>{
      const date = new Date()
      setTimeout(() => {
        resolve(date)
      }, 2000);
    }
  )

  appareils : any[] =[];
  appareilSubscription !: Subscription

  constructor ( private appareilService : AppareilService ){
    
  }

  ngOnInit(): void {
   this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
    (appareils : any[]) =>{
      this.appareils = appareils
    }
   )
   this.appareilService.emitAppareilSubject()
  }

  onAllumer(){
    this.appareilService.switchOnAll()
  }

  onEteindre(){
    this.appareilService.switchOffAll()
  }
}
