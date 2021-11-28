import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = ''
  heroes: Heroe[]= []
  heroeSeleccionado: Heroe | undefined
  

  constructor( private HeroesService: HeroesService) { }

  ngOnInit(): void {
  }


  buscando(){
     this.HeroesService.getSugerencias(this.termino.trim())
      .subscribe(heroes => this.heroes = heroes )

  }

  opcionSeleccionada(event:any){
    console.log(event);
    
    if(!event.option.value){
      this.heroeSeleccionado = undefined
      return;
    }

     const heroe:Heroe  = event.option.value
     this.termino = heroe.superhero
    // console.log(this.termino);
     
     this.HeroesService.getHeroePorId(heroe.id!)
      .subscribe( heroe => this.heroeSeleccionado = heroe)
  }


}
