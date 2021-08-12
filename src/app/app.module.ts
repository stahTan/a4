import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { VideoComponent } from './components/video/video.component';
import { ListingComponent } from './components/listing/listing.component';
import { HomescreenComponent } from './components/homescreen/homescreen.component';
import { MyplaylistscreenComponent } from './components/myplaylistscreen/myplaylistscreen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PlaylistComponent,
    NavigationComponent,
    VideoComponent,
    ListingComponent,
    HomescreenComponent,
    MyplaylistscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
