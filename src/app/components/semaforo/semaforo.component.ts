import { Component, Input, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html' 
})
export class SemaforoComponent implements OnInit {

  @Input() formulario: any; 

  constructor(  
  ) { }

  ngOnInit(): void {
  }

  verDatos(){
    console.log(this.formulario.value)
  }

}
