import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'COMANDA RESTÓ-BAR';


  platos: string[] = [
    'Costillas de cerdo al verdeo',
    'Ñoquis al tuco',
    'Pizza Mediterranea',
  ]
    
  public plato=['Esto es una linea prueba'];

/* blabla= function (){
this.platos.selectedIndex
 }*/
  
 

  public addLinea()
  {

    //this.plato.push( + '  Orden '+(this.plato.length+1))

    //this.plato.push(this.platos[""] + '  Orden '+(this.plato.length+1))
    
    
    //his.platos.indexOf(
  }
  
  public delLinea(i)
  {
	  this.plato.splice(i,1);
  }

 
  
}