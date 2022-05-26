import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent implements OnInit {
  terminoPP: string = '';
  error: boolean = false;
  vaciot: boolean = true;
  paises: Country[] = [];

  constructor(private paisS: PaisService) {}

  ngOnInit(): void {}

  buscarpp(terminoBusqueda: string) {
    this.error = false;
    this.terminoPP = terminoBusqueda;
    // console.log(this.termino);
    this.paisS.buscarPais(terminoBusqueda).subscribe(
      // lo que recibo es la respuesta
      (pais) => {
        this.vaciot = false;
        // console.log(pais);
        this.paises = pais;
      },
      (err) => {
        this.error = true;
        this.paises = [];
        // console.log('error');
        // console.info(err);
      }
    );
  }

  seguerencias(termino: string) {
    this.error = false;
    console.log(termino);
  }
}
