import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private AR: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.AR.snapshot.paramMap.get("id")
    console.log(id);
    
  }

}
