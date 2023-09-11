import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  
  title :string = 'Presupuesto Disponible';
  estimateTotal : number = 2345.64;

  titleIncone : string = 'Ingresos';
  titleExpenses : string = 'Egresos';

  incone  : number = 4300.00;
  expenses : number = 1954.36;

  percentageExpenses : number = 45;

}
