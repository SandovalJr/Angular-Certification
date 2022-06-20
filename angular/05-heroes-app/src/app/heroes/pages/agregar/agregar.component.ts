import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs';
import { ConfirmarDeleteComponent } from '../components/confirmar-delete/confirmar-delete.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'

    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'

    },
  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  }


  constructor(private heroS: HeroesService, private AR: ActivatedRoute
    , private router: Router, private snakBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {

    const editValidar = this.router.url.includes('editar')

    if (editValidar) {

      this.AR.params.pipe(
        switchMap(({ id }) => this.heroS.getHeroID(id))
      ).subscribe(hero => this.heroe = hero)

      // const id = this.AR.snapshot.paramMap.get('id');
      // console.log(id);

    }


    // this.AR.params.pipe(
    //   switchMap(({ id }) => this.heroS.getHeroID(id))
    // ).subscribe(hero => this.heroe = hero)

    // const id = this.AR.snapshot.paramMap.get('id');
    // console.log(id);




  }


  guardar() {
    // console.log(this.heroe);


    if (this.heroe.superhero.trim().length === 0) {
      return
    }

    if (this.heroe.id) {
      // Actualizar
      this.heroS.actualizarHero(this.heroe).subscribe(hero => {
        // console.log('actualizando hero');
        // console.log(hero);
        this.mostrarSnakbar('Registro actualizado')
      })

    } else {
      // Crear heroe
      this.heroS.agregarHero(this.heroe).subscribe(hero => {
        // console.log(heroe);
        this.router.navigate(['/heroes/editar', hero.id])
        this.mostrarSnakbar('Registro creado')

      })

    }
  }


  deleteHero() {
    // console.log(this.heroe.id);


    const dialog = this.dialog.open(ConfirmarDeleteComponent, {
      width: '300px',
      data: { ...this.heroe }
    })


    // afterClosed = es decir cuando se cierra la ventana
    dialog.afterClosed().subscribe(result => {

      if (result) {
        this.heroS.deleteHero(this.heroe.id!)
          .subscribe(resp => {
            this.router.navigate(['/heroes'])
            // console.log(resp);
            console.log('eliminado');
          });
      }

    })




  }


  mostrarSnakbar(mensaje: string) {
    this.snakBar.open(mensaje, 'Cerrar!', {
      duration: 2500
    })
  }


}
