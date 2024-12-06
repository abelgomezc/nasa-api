import { RouterModule, Routes } from '@angular/router';
import { ApodComponent } from './components/nasa/apod/apod.component';
import { EpicComponent } from './components/nasa/epic/epic.component';
import { MarsRoverComponent } from './components/nasa/mars-rover/mars-rover.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
   {path:'home', component:HomeComponent},
    { path: 'mars-rover', component: MarsRoverComponent },
    { path: 'epic', component: EpicComponent },
    { path: 'apod', component: ApodComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta predeterminada
    { path: '**', redirectTo: '/home' } // Ruta para páginas no encontradas

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })], // Habilitar modo hash
    exports: [RouterModule],
  })
  export class AppRoutingModule {}

