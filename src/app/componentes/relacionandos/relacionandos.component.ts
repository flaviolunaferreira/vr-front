import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../../Produto';

@Component({
  selector: 'app-relacionandos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relacionandos.component.html',
  styleUrl: './relacionandos.component.scss'
})
export class RelacionandosComponent {

  products: Produto[] = [
    {
      image: 'assets/moveis/img1.jpg',
      brand: 'Marca 1',
      description: 'Descrição do produto 1',
      price: 199.99,
      discount: 30,
      newProduct: false
    },
    {
      image: 'assets/moveis/img2.jpg',
      brand: 'Marca 2',
      description: 'Descrição do produto 2',
      price: 299.99,
      discount: 0,
      newProduct: true
    },
    {
      image: 'assets/moveis/img3.jpg',
      brand: 'Marca 3',
      description: 'Descrição do produto 3',
      price: 399.99,
      discount: 50,
      newProduct: false
    },
    {
      image: 'assets/moveis/img4.jpg',
      brand: 'Marca 3',
      description: 'Descrição do produto 3',
      price: 399.99,
      discount: 0,
      newProduct: false
    }
  ];

  getOriginalPrice(price: number, discount: number): number {
    return discount > 0 ? price / (1 - discount / 100) : price;
  }

}
