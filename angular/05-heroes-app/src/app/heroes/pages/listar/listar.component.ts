import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  heroes: Heroe[] = []


  constructor(private heroS: HeroesService) { }

  ngOnInit(): void {

    this.heroS.getHeroes().subscribe(resp => {
      this.heroes = resp      
    })


  }

}
