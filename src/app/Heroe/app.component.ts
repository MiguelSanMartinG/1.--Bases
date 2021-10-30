import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class HeroeComponent{
    title = 'Heroes';
    artista = 'Ricky'
    cancion = 'Hero'

    get nombreCapitalizado(){
        return this.artista.toUpperCase;
    }

    getInfo():string{
        return `${this.artista} cancion: ${this.cancion}`
    }
}

