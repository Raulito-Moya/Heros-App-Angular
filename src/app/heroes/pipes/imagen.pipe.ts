import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
 // pure: true  //pure en true es el comportamiento por defecto pure en false es par que cuando el detector de cambios se dispare el oipe se dispare siempre
})
export class ImagenPipe implements PipeTransform {

  transform(heroe:Heroe , ...args: unknown[]): unknown {
      console.log(heroe);
     if( !heroe.id && !heroe.alt_img ){
       return 'assets/no-image.png'
     }else if( heroe.alt_img ){
       
       return heroe.alt_img
     }else{
          
      return `assets/heroes/${heroe.id}.jpg`
     }

    
  

  

  }

}
