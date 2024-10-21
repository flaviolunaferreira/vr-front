import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-estrelas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estrelas.component.html',
  styleUrl: './estrelas.component.scss'
})
export class EstrelasComponent {
  @Input() avaliacao!: number; // Recebe a pontuação do produto
  stars: number[] = Array.from({length: 10}, (_, i) => i + 1);
}
