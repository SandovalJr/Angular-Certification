import { Component, OnInit } from '@angular/core';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [],
})
export class ResultadosComponent implements OnInit {
  constructor(private giftService: GiftsService) {}

  ngOnInit(): void {}

  get resultados() {

    return this.giftService.resultados;
    
  }



  
}
