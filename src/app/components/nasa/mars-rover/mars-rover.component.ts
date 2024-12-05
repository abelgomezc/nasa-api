import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NasaService } from '../../../services/nasa.service';
import { MarsRoverPhoto } from '../../../models/MarsRoverPhoto ';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { CarouselModule } from 'primeng/carousel';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';


import { StyleClassModule } from 'primeng/styleclass';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-mars-rover',
  standalone: true,
  imports: [ 
    RouterOutlet,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    CalendarModule,
    StyleClassModule,
    ToastModule
  ],
  templateUrl: './mars-rover.component.html',
  styleUrl: './mars-rover.component.css',
  providers: [MessageService]
})
export class MarsRoverComponent {

  earth_date: Date | undefined;

   isLoading = true; 

 
  photos: MarsRoverPhoto[] = []; 
  errorMessage: string = '';    
 
  constructor(private nasaApiService: NasaService,private messageService: MessageService) {}
 

  ngOnInit() {
    const earth_date = '2020-06-03'; 
    this.fetchMarsPhotosData(earth_date);



  }

  fetchMarsPhotosData(earth_date: string){
    this.isLoading = true;
    this.nasaApiService.getMarsPhotosData(earth_date).subscribe(
      (data) => {
        if (Array.isArray(data)) {
          this.photos = data.map((item: any) => new MarsRoverPhoto(
            item.id,
            item.sol,
            item.camera,
            item.img_src,
            item.earth_date,
            item.rover
          ));
          this.isLoading = false;
        } else {
          this.errorMessage = 'La respuesta no contiene un array válido.';
          this.isLoading = false;
        }
      },
      (error) => {
        console.error('Error al obtener los datos de la API de la NASA', error);
        this.errorMessage = 'No se pudieron cargar las fotos de Marte.';
        this.isLoading = false;
      }
    );


  }

 
  onDateChange() {
    if (this.earth_date) 
     { const today = new Date(); 
       
       if (this.earth_date > today)
          { 
           // alert('La fecha de fin no puede ser superior a la fecha actual.'); 
     
           this.messageService.add({
             severity: 'error',
             summary: 'Fecha inválida',
             detail: 'La fecha  no puede ser superior a la fecha actual.',
           });
           return; 
         }
      
          const earthdate = this.earth_date.toISOString().split('T')[0];
         
            this.fetchMarsPhotosData(earthdate); 
      } 
   }



}
