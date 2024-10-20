import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Produto } from '../../Produto';

@Component({
  selector: 'app-relacionandos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relacionandos.component.html',
  styleUrl: './relacionandos.component.scss'
})
export class RelacionandosComponent {

  @Input() produtos: Produto[] = [];

  getOriginalPrice(price: number, discount: number): number {
    return discount > 0 ? price / (1 - discount / 100) : price;
  }

}
