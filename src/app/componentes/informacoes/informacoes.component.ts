import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { Produto } from '../../Produto';

@Component({
  selector: 'app-informacoes',
  standalone: true,
  imports: [CommonModule, CarrinhoComponent],
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.scss'] // Corrigido de 'styleUrl' para 'styleUrls'
})
export class InformacoesComponent {

  @Input() produto!: Produto[]; // Atualizando para um único produto

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
    const cartItem = {
      imagem: this.produto[0].imagem[0], // Acessando a imagem diretamente
      nome: this.produto[0].nome,
      preco: this.produto[0].preco,
      quantidade: this.quantidade
    };

    // Adicionar o item ao array local
    this.itensCarrinho.push(cartItem);

    // Salvar o item no localStorage
    this.salvarNoLocalStorage();
  }

  salvarNoLocalStorage() {
    // Carregar os itens existentes no localStorage
    let storedItems = localStorage.getItem('cart');
    let cart = storedItems ? JSON.parse(storedItems) : [];

    // Adicionar os itens atuais
    cart.push(...this.itensCarrinho);

    // Salvar o carrinho atualizado no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Limpar o array local, pois já foi salvo no localStorage
    this.itensCarrinho = [];
  }

  atualizarTotalCarrinho(total: number) {
    console.log('Total do carrinho atualizado:', total);
  }

}
