import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent implements OnInit {
  terminoCap: string = '';
  error: boolean = false;
  vaciot: boolean = true;
  paisescapital: Country[] = [];

  constructor(private paisS: PaisService) {}

  ngOnInit(): void {}

  buscarCapital(termino: string) {
    this.error = false;
    this.terminoCap = termino;
    // console.log('capital: ' + termino);

    this.paisS.buscarCapital(termino).subscribe(
      (capital) => {
        this.vaciot = false;
        // console.log(pais);
        this.paisescapital = capital;
      },
      (err) => {
        this.error = true;
        this.paisescapital = [];
      }
    );
  }

  seguerencias(termino: string) {
    this.error = false;
    console.log(termino);
  }
}
