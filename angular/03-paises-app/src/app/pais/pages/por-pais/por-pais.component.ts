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
  mostrarSeguerencias: boolean = false;
  vaciot: boolean = true;
  paises: Country[] = [];
  paisesSegueridos: Country[] = [];

  constructor(private paisS: PaisService) {}

  ngOnInit(): void {}

  buscarpp(terminoBusqueda: string) {
    this.error = false;
    this.mostrarSeguerencias = false;

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
    this.mostrarSeguerencias = true;
    this.error = false;
    // console.log(termino);
    this.terminoPP = termino;

    this.paisS.buscarPais(termino).subscribe(
      (paises) => {
        this.paisesSegueridos = paises.splice(0, 5);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  buscarSeguerido(termino: string) {
    this.buscarpp(termino);
    // this.mostrarSeguerencias = false;
  }
}
