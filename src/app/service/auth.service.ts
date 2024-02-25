import {Injectable} from '@angular/core'

@Injectable({providedIn : 'root'})

export class AuthService{
    isAuth :boolean = true;
    constructor(){
        console.log(this.isAuth)
    }

    

    signIn(){
        console.log("ca marche ici")
        return new Promise(
            (resolve , reject) =>{
                setTimeout(()=>{
                    this.isAuth = true;
                    console.log(this.isAuth = true)
                    resolve(true)
                },2000)
            }
        )
    }

    signOut(){
        this.isAuth = false
    }

}