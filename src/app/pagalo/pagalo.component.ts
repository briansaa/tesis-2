import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pagalo',
  templateUrl: './pagalo.component.html',
  styleUrls: ['./pagalo.component.css']
})
export class PagaloComponent {
  paymentDetails = {
    amount: '',
    method: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: ''
  };

  onSubmit() {
    if (this.paymentDetails.method === 'credit-card') {
      // Lógica para procesar el pago con tarjeta de crédito
      console.log('Procesando pago con tarjeta de crédito:', this.paymentDetails);
    } else if (this.paymentDetails.method === 'paypal') {
      // Lógica para procesar el pago con PayPal
      console.log('Procesando pago con PayPal:', this.paymentDetails);
    } else if (this.paymentDetails.method === 'bank-transfer') {
      // Lógica para procesar el pago por transferencia bancaria
      console.log('Procesando pago por transferencia bancaria:', this.paymentDetails);
    }

    // Simulación de éxito del pago
    alert('Pago realizado con éxito!');
    // Aquí podrías redirigir al usuario a una página de confirmación o resumen
  }
}
