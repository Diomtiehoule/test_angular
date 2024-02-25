import { ActivatedRouteSnapshot, CanActivateFn, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Injectable , inject , forwardRef} from "@angular/core";
import { AuthService } from "./auth.service";
import { Observable, of } from 'rxjs';


@Injectable({
    providedIn : 'root'
})
// @Injectable()
// class PermissionService {

//     constructor(private authService: AuthService, private router: Router) { }

//     canActivate(): Observable<boolean> {
//         if (this.authService.isAuth) {
//             return of(true);
//         } else {
//             this.router.navigate(['/auth']);
//             return of(false);
//         }
//     }
// }


// export const  authGuard : CanActivateFn =(route : ActivatedRouteSnapshot , state : RouterStateSnapshot)=> {
    
//         return inject(PermissionService).canActivate();
// }
export class AuthGuard implements CanActivate {
    constructor( private authService : AuthService , private router :Router){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{

        if(this.authService.isAuth){
            console.log('vous êtes connecté !')
            return of (true)
        }else{
            this.router.navigate(['/auth'])
            console.log(' veuillez vous connecter !')
            return of (false)
        }
        
    }
}
