import { Component } from '@angular/core';
import { DICT } from '@dict';
import { ItineraryCard } from 'src/app/components/itinerary-card/itinerary-card';

interface ItineraryCardInterface{
  schedule: string,
  label:string,
  content: string
}

@Component({
  selector: 'itinerary-page',
  imports: [ItineraryCard],
  templateUrl: './itinerary-page.html',
})
export default class ItineraryPage {

  dict = DICT

  morningItineraryCards: ItineraryCardInterface[] = [
    {
      schedule: '2:00 PM - 2:30 PM',
      label: 'Recepción',
      content: 'La familia comienza a llegar y se toma fotografía para un vídeo futuro.'
    },
    {
      schedule: '2:30 PM - 3:30 PM',
      label: 'Carrera de costales',
      content: 'Equipos de 3 personas, 3 vueltas. ¡Preparad vuestras piernas!'
    },
    {
      schedule: '3:30 PM - 4:30 PM',
      label: 'Rally Familiar',
      content: 'Juegos combinados: resorte, globo, búsqueda, topo y más retos sorpresa.'
    },

  ]

  midDayItineraryCards: ItineraryCardInterface[] = [
    {
      schedule: '4:30 PM - 5:30 PM',
      label: 'Comida Ambientada',
      content: 'Un banquete tradicional acompañado por las melodías de nuestro cantante invitado.'
    },
    {
      schedule: '5:30 PM - 8:00 PM',
      label: 'Baile',
      content: 'Momento para abrir la pista y compartir la alegría con música para todas las edades.'
    },
    {
      schedule: '8:00 PM - 9:00 PM',
      label: 'Brindis Familiar',
      content: 'Palabras del corazón y un brindis por el pasado, presente y futuro de los Rubio.'
    },

  ]

  eveningItineraryCards: ItineraryCardInterface[] = [
    {
      schedule: '9:00 PM - 9:30 PM',
      label: 'Retomamos Baile',
      content: 'Segunda ronda para los más animados de la familia.'
    },
    {
      schedule: '9:30 PM - 10:30 PM',
      label: 'Piñata',
      content: 'Tradición pura para niños y adultos. ¡Nadie se queda sin dulces!'
    },
    {
      schedule: '10:30 PM',
      label: 'Cierre del Evento',
      content: 'Fogata bajo las estrellas y casas de campaña para los que deseen pernoctar.'
    },

  ]


}
