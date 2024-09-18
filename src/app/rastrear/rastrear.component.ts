import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rastrear',
  templateUrl: './rastrear.component.html',
  styleUrls: ['./rastrear.component.css']
})
export class RastrearComponent {
  trackingDetails = {
    trackingNumber: ''
  };

  trackingInfo: any; // Puedes definir una interfaz o clase para los detalles del rastreo

  onSubmit() {
    // Simular una llamada a un servicio para obtener la información de rastreo
    console.log('Buscando información para el número de seguimiento:', this.trackingDetails.trackingNumber);

    // Ejemplo de datos de rastreo
    this.trackingInfo = {
      status: 'En tránsito',
      shippedDate: '2024-09-10',
      estimatedDelivery: '2024-09-15',
      currentLocation: 'Lima, Perú'
    };

    // En una aplicación real, aquí harías una llamada a un servicio para obtener los datos del rastreo
  }
}