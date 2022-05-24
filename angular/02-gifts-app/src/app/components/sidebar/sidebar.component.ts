import { Component, OnInit } from '@angular/core';
import { GiftsService } from '../gifts/services/gifts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private giftsS: GiftsService) {}

  get giftsHistory() {
    return [...this.giftsS.historial];
  }

  buscarh(personaje: string) {
    this.giftsS.buscarGifts(personaje);
  }

  ngOnInit(): void {}
}
