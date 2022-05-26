import { Component, EventEmitter, Output, OnInit,Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css'],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  // este va a emitir cuando la persona deje de escribir
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();
  termino: string = '';

  ngOnInit(): void {
    // OBSERVABLE
    this.debouncer
      .pipe(
        // no imitas el susbcribe hasta que pase este tiempo
        debounceTime(300)
      )
      .subscribe((valor) => {
        this.onDebounce.emit(valor);
        // console.log('debouncer', valor);
      });
  }

  buscar() {
    // es para emitir el valor que se esta escribiendo
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}
