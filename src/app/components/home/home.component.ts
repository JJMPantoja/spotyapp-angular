import { Component, OnInit } from '@angular/core';
import { faRupiahSign } from '@fortawesome/free-solid-svg-icons';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean | undefined;
  error: boolean | undefined;
  mensajeError: string = '';

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.error = false;

    this.spotifyService.getNewReleases().subscribe(
      (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      },
      (errorServicio) => {
        this.loading = false;
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
      }
    );
  }

  ngOnInit(): void {}
}
