import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';

const routes: Routes = [
  {path:"home", component:HomePageComponent},
  {path:"playlist", component:PlaylistComponent},
  {path:"**", component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
