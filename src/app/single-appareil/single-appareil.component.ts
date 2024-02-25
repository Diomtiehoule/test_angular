import { Component , OnInit , Input} from '@angular/core';
import { AppareilService } from '../service/appareil.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AuthGuard } from '../service/auth-guard.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-single-appareil',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './single-appareil.component.html',
  styleUrl: './single-appareil.component.css',
  providers: [AppareilService , AuthGuard , AuthService]
})
export class SingleAppareilComponent implements OnInit{

  name: string | undefined = 'appareil';
  status: string | undefined = 'status';

  constructor(private appareilService : AppareilService ,
              private authService : AuthService ,
              private authGuard : AuthGuard,
              private route : ActivatedRoute){

  }

  ngOnInit(): void {
    // permet d'avoir notre id du lien dans l'url 
    const id = this.route.snapshot.params['id']
    // le + permet de changer la valeur chaine de caractère en nombre 
    this.name = this.appareilService.getAppareilById(+id)?.name
    this.status = this.appareilService.getAppareilById(+id)?.status
  }
}
