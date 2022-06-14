import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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


  constructor(private heroS: HeroesService) { }

  ngOnInit(): void {

  }


  guardar() {
    // console.log(this.heroe);


    if (this.heroe.superhero.trim().length === 0) {
      return
    }

    this.heroS.agregarHero(this.heroe).subscribe(heroe => {
      console.log(heroe);
    })
    

  }




}
