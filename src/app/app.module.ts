import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SpotifyService } from './services/spotify.service';
import { HttpClientModule } from '@angular/common/http';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetsComponent } from './components/tarjets/tarjets.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetsComponent,
    LoadingComponent,
    DomseguroPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [SpotifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
