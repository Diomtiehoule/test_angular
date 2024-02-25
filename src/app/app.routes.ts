import { Routes } from '@angular/router';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './service/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
    {path : '' , component : AppComponent , title: "'page d'acceuil'"},
    {path : 'appareils', component : AppareilComponent , title: "'page des appareils'"},
    {path: 'user' , component : UserListComponent , title : "'page des utilisateurs'"},
    {path : 'appareilView', canActivate:[AuthGuard], component : AppareilViewComponent , title: "'page appareil-view'"},
    {path : 'editAppareil' , canActivate:[AuthGuard] , component : EditAppareilComponent , title : "'page edite'"},
    {path : 'appareilView/:id' ,canActivate:[AuthGuard], component: SingleAppareilComponent , title: "'page de l'appareil'"},
    {path: 'auth' , component: AuthComponent , title: 'page auth'},
    {path: 'not-found' , component: FourOhFourComponent},
    {path: '**' , redirectTo: 'not-found'}
];

export default routes