import { Component, OnInit, inject,ViewEncapsulation } from '@angular/core';
import { NasaService } from '../../../services/nasa.service';
import { ApodResponse } from '../../../models/ApodResponse ';  // Asegúrate de importar la interfaz
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { CarouselModule } from 'primeng/carousel';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';


import { StyleClassModule } from 'primeng/styleclass';
import { ToastModule } from 'primeng/toast';
import { Message, MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
@Component({
  selector: 'app-apod',
  standalone: true,
  imports:[
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
    ToastModule,
    MessagesModule
   
  
  ],
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css'],
  providers: [MessageService]
 
})
export class ApodComponent implements OnInit {

 

  startDate: Date | undefined;
   endDate: Date | undefined; 
   isLoading = true; 
   nasaData: ApodResponse[] = [];
   errorMessage: string = '';  
   messages!: Message[];

   private nasaApiService = inject(NasaService);
   constructor(private messageService: MessageService) {}
   
   ngOnInit() 
   { // Fecha inicial de ejemplo 
    
    const startDate = '2024-07-10'; 
    const endDate = '2024-10-02'; 
    this.fetchApodData(startDate, endDate); 
   
  
  }

  fetchApodData(start: string, end: string) 
  {
    this.isLoading = true;
     this.nasaApiService.getApodData(start, end).subscribe( (data) =>
    { 
      
      this.nasaData = data; 
      this.isLoading = false; 
     // console.log('Datos obtenidos:', this.nasaData);
     }, (error) => 
      {
         console.error('Error al obtener los datos de la API de la NASA', error);
        // this.errorMessage = 'No se pudieron cargar Los Datos de la Nasa. ';
         this.messages = [{ severity: 'info', detail: 'No se pudieron cargar Los Datos de la Nasa.' }];
          this.isLoading = false;
        
     } ); 
  
  }

  onDateChange() {
     if (this.startDate && this.endDate) 
      { const today = new Date(); 
        
        if (this.endDate > today)
           { 
            // alert('La fecha de fin no puede ser superior a la fecha actual.'); 
      
            this.messageService.add({
              severity: 'error',
              summary: 'Fecha inválida',
              detail: 'La fecha de fin no puede ser superior a la fecha actual.',
            });
            return; 
          }
         if (this.startDate > this.endDate) 
          {
            // alert('La fecha de inicio no puede ser posterior a la fecha de fin.'); 
            this.messageService.add({
              severity: 'error',
              summary: 'Fecha inválida',
              detail: 'La fecha de inicio no puede ser posterior a la fecha de fin.',
            });
            return;


           } 
           const start = this.startDate.toISOString().split('T')[0];
            const end = this.endDate.toISOString().split('T')[0];
             this.fetchApodData(start, end); 
            } 
    }

  
}
