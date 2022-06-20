import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from 'src/app/heroes/interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar-delete',
  templateUrl: './confirmar-delete.component.html',
  styleUrls: ['./confirmar-delete.component.css']
})
export class ConfirmarDeleteComponent implements OnInit {


  // @Input() InputHeroDelete!: string

  constructor(private dialogRef: MatDialogRef<ConfirmarDeleteComponent>, @Inject(MAT_DIALOG_DATA) public data: Heroe,
  ) { }

  ngOnInit(): void {
    // console.log(this.data);
    
  }


  Borrar() {
    this.dialogRef.close(true)
  }


  Cerrar() {
    this.dialogRef.close()
  }

}
