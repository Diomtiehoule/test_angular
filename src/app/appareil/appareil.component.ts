import { Component , Input , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppareilService } from '../service/appareil.service';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../service/auth-guard.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-appareil',
  standalone: true,
  imports: [FormsModule , CommonModule , RouterModule],
  templateUrl: './appareil.component.html',
  styleUrl: './appareil.component.css',
  providers :[AppareilService , AuthGuard , AuthService]
})


export class AppareilComponent implements OnInit{

  @Input() appareilName: string = '';
  @Input() appareilStatus: string = '';
  @Input() indexOfAppareil: number = 0;
  @Input() id: number = 0;
  

  constructor(private appareilService: AppareilService){

   }

  ngOnInit(){

  }

  getStatus (){
    return this.appareilStatus
  }

  
  getColor(): string {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    } else {
      return 'gray';
    }
  }

  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil)
    console.log(this.indexOfAppareil)
  }

  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil)
    console.log(this.indexOfAppareil)
  }



}
