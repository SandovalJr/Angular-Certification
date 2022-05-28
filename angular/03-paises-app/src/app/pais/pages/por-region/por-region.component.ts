import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';
  paises: Country[] = [];
  // tableValidation: boolean = false;

  constructor(private paisS: PaisService) {}

  ngOnInit(): void {}

  // para comparar si la region esta activa y lo mandamos por una clase
  getClass(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    this.regionActiva = region;
    console.log(this.regionActiva);
  }

  PaisesRegion(region: string) {
    this.paisS.buscarRegion(region).subscribe(
      (pais) => {
        this.paises = pais;
        // console.log(this.paises);
        // this.tableValidation = true;
      },
      (err) => {
        console.log('error');
      }
    );
  }
}
