import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'

    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'

    },
  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  }


  constructor(private heroS: HeroesService, private AR: ActivatedRoute
    , private router: Router) { }

  ngOnInit(): void {

    const editValidar = this.router.url.includes('editar')

    if (editValidar) {

      this.AR.params.pipe(
        switchMap(({ id }) => this.heroS.getHeroID(id))
      ).subscribe(hero => this.heroe = hero)

      // const id = this.AR.snapshot.paramMap.get('id');
      // console.log(id);

    }


    // this.AR.params.pipe(
    //   switchMap(({ id }) => this.heroS.getHeroID(id))
    // ).subscribe(hero => this.heroe = hero)

    // const id = this.AR.snapshot.paramMap.get('id');
    // console.log(id);




  }


  guardar() {
    // console.log(this.heroe);


    if (this.heroe.superhero.trim().length === 0) {
      return
    }

    if (this.heroe.id) {
      // Actualizar
      this.heroS.actualizarHero(this.heroe).subscribe(hero => {
        console.log('actualizando hero');
        console.log(hero);
      })

    } else {
      // Crear heroe
      this.heroS.agregarHero(this.heroe).subscribe(hero => {
        // console.log(heroe);
        this.router.navigate(['/heroes/editar', hero.id])
      })

    }
  }


  deleteHero(){
    // console.log(this.heroe.id);
    
    this.heroS.deleteHero( this.heroe.id! )
      .subscribe( resp => {
        this.router.navigate(['/heroes'])
        // console.log(resp);
        console.log('eliminado');
        
      });
  }



}
