import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.scss'
})
export class CarrinhoComponent {

  @Input() itensCarrinho: any[] = [];
  @Output() atualizarCarrinho = new EventEmitter<number>();

  getTotalCarrinho() {
    return this.itensCarrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
  }

  removerItem(index: number) {
    this.itensCarrinho.splice(index, 1);
    this.atualizarCarrinho.emit(this.getTotalCarrinho());
  }

}
