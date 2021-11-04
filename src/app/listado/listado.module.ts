import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations:[
        ListadoComponent
    ],
     imports: [
       CommonModule
     ],
    exports: [
        ListadoComponent

    ]
})
export class ListadoModule{}