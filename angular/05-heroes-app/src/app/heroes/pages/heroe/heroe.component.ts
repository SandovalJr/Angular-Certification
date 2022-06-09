import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor(private AR: ActivatedRoute) { }

  ngOnInit(): void {

    // obtener un parametro en especifico de la url
    const id = this.AR.snapshot.paramMap.get('id')
    // console.log(id);

    // obtener un parametro en especifico de la url
    this.AR.params.subscribe(({ id }) => { console.log(id) });


  }

}
