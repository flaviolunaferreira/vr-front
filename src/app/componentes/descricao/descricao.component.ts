import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-descricao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './descricao.component.html',
  styleUrl: './descricao.component.scss'
})
export class DescricaoComponent {

  produtos: string[] = [
    'assets/moveis/img-descricao.jpg',
    'assets/moveis/img-descricao2.jpg'
  ]

  selectedTab: string = 'descricao';
  reviewsCount: number = 5;  // Para o botão "Reviews[5]"

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

}
