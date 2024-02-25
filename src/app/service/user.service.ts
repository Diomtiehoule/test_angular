import { User } from "../models/user.models";
import { Subject } from 'rxjs';


export class UserService {

    private users : User[] = [
         {
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
}
];

constructor(){
    console.table(this.users)
}

    userSubject = new Subject<User[]>();

    emitUserObject(){
        this.userSubject.next(this.users.slice())
    }

    addUser(user : User){
        this.users.push(user)
        this.emitUserObject();
    }
}