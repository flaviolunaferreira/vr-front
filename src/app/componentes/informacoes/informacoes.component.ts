import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { Produto } from '../../Produto';
import { CarrinhoService } from '../../service/CarrinhoService';

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

  constructor(private carrinhoService: CarrinhoService) {}

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
      imagem: this.produto[0].imagem[0], // Acessando a primeira imagem diretamente
      nome: this.produto[0].nome,
      preco: this.produto[0].preco,
      quantidade: this.quantidade
    };

    this.carrinhoService.adicionarAoCarrinho(cartItem);
  }

}
