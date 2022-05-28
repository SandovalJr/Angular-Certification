import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisS: PaisService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(
    //   // le pongo {} para hacer la destructuracion de objetos
    //   //  de esa manera me da el ID directo
    //   ({ id }) => {
    //     console.log(id);

    //     this.paisS.verPais(id).subscribe((pais) => {
    //       console.log(pais);
    //     });

    //   }
    // );

    this.activatedRoute.params
      .pipe(
        switchMap((param) => this.paisS.verPais(param['id'])),
        // el tap imprime en consola lo que le toca
        tap(console.log)
      )
      .subscribe(
        (pais) => {
          // console.log(pais);
          this.pais = pais[0];
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
