import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm , FormsModule , ReactiveFormsModule} from '@angular/forms'
import { Router, RouterModule } from '@angular/router';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-edit-appareil',
  standalone: true,
  imports: [CommonModule , FormsModule , RouterModule , ReactiveFormsModule],
  templateUrl: './edit-appareil.component.html',
  styleUrl: './edit-appareil.component.css'
})
export class EditAppareilComponent {

  defaultOnOff = 'éteint'

  constructor(private appareilService : AppareilService,
              private router : Router){

  }

  onSubmit(form : NgForm){
    const  name = form.value['name']
    const status = form.value['status']
    this.appareilService.addAppareil(name , status)
    this.router.navigate(['/appareilView'])
    
  }
}
