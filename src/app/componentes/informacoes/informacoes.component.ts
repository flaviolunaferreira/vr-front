import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarrinhoComponent } from '../carrinho/carrinho.component';

@Component({
  selector: 'app-informacoes',
  standalone: true,
  imports: [CommonModule, CarrinhoComponent],
  templateUrl: './informacoes.component.html',
  styleUrl: './informacoes.component.scss'
})
export class InformacoesComponent {

  produto = {
    nome: 'Sofá de Madeira',
    preco: '3000',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut mi sed nisl mollis consequat non nec eros. Aenean cursus, purus in blandit lacinia, erat mi rutrum nisi, at condimentum elit nisl a nunc',
    cores: ['#FF0000', '#0000FF', '#008000', '#000000'],
    tamanhos: ['P', 'M', 'G']
  };

  quantidade = 1;
  itensCarrinho: any[] = [];

  aumentarQuantidade() {
    this.quantidade++;
  }

  diminuirQuantidade() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarAoCarrinho() {
    const carItems = {
      Image: this.
      nome: this.produto.nome,
      preco: this.produto.preco,
      quantidade: this.quantidade
    };

    this.itensCarrinho.push(carItems);
  }

  atualizarTotalCarrinho(total: number) {
    console.log('Total do carrinho atualizado:', total);
  }

}
