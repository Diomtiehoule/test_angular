import { NgModule } from '@angular/core';
import { AuthGuard } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { AppareilService } from './service/appareil.service';
import { AppComponent } from './app.component';

@NgModule({
  providers: [
    AuthService,
    AuthGuard,
    AppareilService
    // other providers
  ],
  declarations:[

  ],
  bootstrap:[AppComponent]
  // other module configurations
})
export class AppModule { }