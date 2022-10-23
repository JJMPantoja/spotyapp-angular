import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQD7TL5Mydjoye91aB_RuNuSWXRhA0Wv47DVV8lK7tC7fczZZ-BqVgVvYpyQmO7LBoVwZ5UgiVglNbtuZ1BDJ7xvN5fOnqOx44SeYOMnFNti2H49C6Y',
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data: any) => data.albums.items)
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=es`).pipe(
      map((data: any) => data['tracks'])
    );
  }
}
