import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  error: boolean = false;
  vaciot: boolean = true;
  paises: Country[] = [];

  constructor(private paisS: PaisService) {}

  ngOnInit(): void {}

  buscar() {
    this.error = false;
    // console.log(this.termino);
    this.paisS.buscarPais(this.termino).subscribe(
      // lo que recibo es la respuesta
      (pais) => {
        this.vaciot = false;
        console.log(pais);
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
}
