import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-compartilhar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compartilhar.component.html',
  styleUrl: './compartilhar.component.scss'
})
export class CompartilharComponent {

  produto = {
    "SKU": "SS001",
    "Categoria": "Sofa",
    "Tags": "Sofa, Chair, Home, Shop",
    "Compartilhar": ['assets/facebook.png', 'assets/linkedin.png', 'assets/twitter.png']
  }

}
