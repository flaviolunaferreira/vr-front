import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarrinhoService } from '../../service/CarrinhoService';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {
  empresa = 'VR Shopping';
  pesquisar = 'assets/pesquisar.png';
  usuario = 'assets/user.png';
  coracao = 'assets/coracao.png';
  carrinho = 'assets/carrinho-de-compras.png';

  @Output() atualizarCarrinho = new EventEmitter<number>();
  isCartOpen = false; // Para controlar o pop-down do carrinho
  cartItems: any[] = []; // Armazena os itens do carrinho
  subtotal: number = 0; // Subtotal dos produtos

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    this.carrinhoService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.calculateSubtotal();
    });
  }

  // Função para abrir/fechar o carrinho
  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }


  // Calcular o subtotal dos itens do carrinho
  calculateSubtotal() {
    this.subtotal = this.cartItems.reduce((total, item) => {
      return total + item.preco * item.quantidade; // Ajuste para 'preco'
    }, 0);
  }

  // Apagar um item específico
  apagarItem(index: number) {
    this.carrinhoService.apagarDoCarrinho(index); // Remove o item do carrinho
  }

}
