import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Produto } from '../../Produto';

@Component({
  selector: 'app-descricao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './descricao.component.html',
  styleUrl: './descricao.component.scss'
})
export class DescricaoComponent {

  @Input() produtos: Produto[] = []
  selectedTab: string = 'descricao';
  reviewsCount: number = 5;  // Para o botão "Reviews[5]"

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

}
