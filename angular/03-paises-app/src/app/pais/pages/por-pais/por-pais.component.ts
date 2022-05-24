import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  error: boolean = false;

  constructor(private paisS: PaisService) {}

  ngOnInit(): void {}

  buscar() {
    this.error = false;
    // console.log(this.termino);
    this.paisS.buscarPais(this.termino).subscribe(
      // lo que recibo es la respuesta
      (resp) => {
        console.log(resp);
      },
      (err) => {
        this.error = true;
        // console.log('error');
        // console.info(err);
      }
    );
  }
}
