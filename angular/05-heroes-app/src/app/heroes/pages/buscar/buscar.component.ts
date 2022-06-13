import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string = ''
  heroes: Heroe[] = []

  heroeSeleccionado!: Heroe | undefined


  constructor(private heroS: HeroesService) { }

  ngOnInit(): void {
  }


  buscando() {


    this.heroS.getSugerencia(this.termino.trim()).subscribe(
      (heroes) => {
        this.heroes = heroes
      }
    )

  }

  OpSeleccionada(evento: MatAutocompleteSelectedEvent) {
    // console.log(evento);

    if (!evento.option.value) {
      this.heroeSeleccionado = undefined
      // console.log('no hay valor');
      return
    }

    const heroe: Heroe = evento.option.value;
    this.termino = heroe.superhero


    this.heroS.getHeroID(heroe.id!).subscribe(
      (data) => {
        this.heroeSeleccionado = data
      }
    )
  }

  
}
