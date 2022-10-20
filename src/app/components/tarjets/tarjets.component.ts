import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjets',
  templateUrl: './tarjets.component.html'
})
export class TarjetsComponent {

  @Input() items: any[] = [];

  constructor( private router: Router ) {}

   verArtista(item: any) {

    let artistId;

    if (item.type === 'artist') {
        artistId = item.id;
    } else {
      artistId = item.artists[0].id
    }

    this.router.navigate(['/artist', artistId]); // Las rutas deben de ser un arreglo

   }

}
