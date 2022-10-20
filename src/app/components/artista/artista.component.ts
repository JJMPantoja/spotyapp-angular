import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [],
})
export class ArtistaComponent {
  artista: any = {};
  topTracks: any[] = [];
  loading: boolean | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.loading = true;
    this.activatedRoute.params.subscribe((params) => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });

    // @ts-ignore
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      let element = document.getElementById('embed-iframe');
      
      let options = {
        uri: 'spotify:episode:7makk4oTQel546B0PZlDM5',
      };
      // @ts-ignore
      let callback = (EmbedController) => {};
      IFrameAPI.createController(element, options, callback);
    };
  }

  getArtista(id: string) {
    this.loading = true;
    this.spotifyService.getArtista(id).subscribe((artista) => {
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.loading = true;
    this.spotifyService.getTopTracks(id).subscribe((tracks) => {
      this.topTracks = tracks;
      console.log(this.topTracks);
      this.loading = false;
    });
  }
}
