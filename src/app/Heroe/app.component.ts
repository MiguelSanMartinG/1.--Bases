import { Component } from "@angular/core";

Component({
    selector: 'app-heroe',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
interface Artista{
    nombre: string,
    cancion: string

}
export class HeroeComponent{

    contenedorArtistas: Artista[]= [
        {
            nombre: 'Rick',
            cancion: 'Viva la vida'
        },
        {
        nombre: 'Abril',
        cancion: 'Checkit Out'
            
        }
    ]


    title = 'Heroes';
    artista = 'Ricky'
    cancion = 'Hero'

    get nombreCapitalizado(){
        return this.artista.toUpperCase;
    }

    getInfo():string{
        return `${this.artista} cancion: ${this.cancion}`
    }

    cambiarCancion():void{
        this.artista=" Sakamoto"
        this.cancion = "Doble Suplex"
    }

    cambiarCancion1():void{
        this.artista=" Roccky"
        this.cancion = "Hero"
    }
}

