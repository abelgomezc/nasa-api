import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NasaService } from '../../../services/nasa.service';




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
import { EpicResponse } from '../../../models/EpicResponse ';
import { NASA_EPIC_IMAGE_URL } from '../../../services/nasa-apis';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-epic',
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
    ToastModule,
    MessagesModule,
    ImageModule
  ],
  templateUrl: './epic.component.html',
  styleUrl: './epic.component.css',
  providers: [MessageService]
})
export class EpicComponent implements OnInit {

  nasaResponse!: EpicResponse[] | any[];

  isLoading = true; 

  searchDate: Date | undefined;
  constructor(private _nasaService: NasaService,
    private messageService: MessageService) {
}
  ngOnInit(): void {
    this.getNasaData();
  }
  getFormattedDate(date: string) {
    const dateString = date.split(' ')[0];
    return dateString.replace(/-/g, '/');
  }

  getNasaData(date?: string): void {
    this.isLoading = true;
    this.nasaResponse = [];
    this._nasaService.getNasaEpic(date).subscribe({
      next: (data) => {
        this.nasaResponse = data.map((item: any) => {
          const date = this.getFormattedDate(item.date);
          return {
            ...item,
            date: item.date,
            image: NASA_EPIC_IMAGE_URL(date, item.image)
          }
        });
        this.isLoading = false;
       // console.log(data);
      },
      error: (err) => {
        this.nasaResponse = [];
        this.isLoading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error.msg || err.error.message || 'Error retrieving data from NASA'
        });
      }
    });
  }

  onDateChange() {
    if (this.searchDate) 
     { const today = new Date(); 
       
       if (this.searchDate > today)
          { 
           // alert('La fecha de fin no puede ser superior a la fecha actual.'); 
     
           this.messageService.add({
             severity: 'error',
             summary: 'Fecha inválida',
             detail: 'La fecha  no puede ser superior a la fecha actual.',
           });
           return; 
         }
    
          const start = this.searchDate.toISOString().split('T')[0];
            this.getNasaData(start); 
           } 
   }

  // searchNasaData(event: string) {
  //   event = event.split('=')[1];
  //   console.log(event);
  //   this.getNasaData(event);
  // }


}
