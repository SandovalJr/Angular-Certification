import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {


  heroe!: Heroe;

  constructor(private AR: ActivatedRoute, private heroS: HeroesService,private router:Router) { }

  ngOnInit(): void {

    // obtener un parametro en especifico de la url
    // const id = this.AR.snapshot.paramMap.get('id')
    // console.log(id);

    // obtener un parametro en especifico de la url
    // this.AR.params.subscribe(({ id }) => { console.log(id) });

    this.AR.params.pipe(
      switchMap((id) => this.heroS.getHeroID(id['id'])),
      // tap(console.log)
    ).subscribe(
      (hero) => {
        this.heroe = hero
        // console.log(this.heroe);
      },
      (err) => {
        console.log(err);
      }
    );

  }


regresar(){
  this.router.navigate(['/heroes/listado'])
}

}
