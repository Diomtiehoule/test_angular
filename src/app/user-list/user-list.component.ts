import { Component , OnInit , OnDestroy} from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/user.models';
import { Subscription } from 'rxjs'
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../service/auth-guard.service';
import { AppareilService } from '../service/appareil.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  providers:[UserService, AuthGuard , AppareilService , AuthService]
})
export class UserListComponent implements OnInit , OnDestroy{

    users : User[] = [ {
      firstName : 'James',
      lastName : 'Smith',
      email : 'James@gmail.com',
      drinkPreferences : 'Orangina',
      hobbies:[
          'coder',
          'gamer',
          'boir du café'
      ]
  },{
    firstName : 'James',
    lastName : 'Smith',
    email : 'James@gmail.com',
    drinkPreferences : 'Orangina',
    hobbies:[
        'coder',
        'gamer',
        'boir du café'
    ]
},{
  firstName : 'James',
  lastName : 'Smith',
  email : 'James@gmail.com',
  drinkPreferences : 'Orangina',
  hobbies:[
      'coder',
      'gamer',
      'boir du café'
  ]
},{
  firstName : 'James',
  lastName : 'Smith',
  email : 'James@gmail.com',
  drinkPreferences : 'Orangina',
  hobbies:[
      'coder',
      'gamer',
      'boir du café'
  ]
},{
  firstName : 'James',
  lastName : 'Smith',
  email : 'James@gmail.com',
  drinkPreferences : 'Orangina',
  hobbies:[
      'coder',
      'gamer',
      'boir du café'
  ]
}] 
    userSubscription !: Subscription

    constructor(private userService : UserService){}

    ngOnInit(): void {
      this.userSubscription = this.userService.userSubject.subscribe(
        (users : User[])=>{
          this.users = users
          
        }
      );
      this.userService.emitUserObject;
    }

    ngOnDestroy(): void {
      this.userSubscription.unsubscribe();
    }

}
