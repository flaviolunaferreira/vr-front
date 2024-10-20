import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'] // Corrigido de 'styleUrl' para 'styleUrls'
})
export class CabecalhoComponent implements OnInit {
  empresa = 'VR Shopping';
  pesquisar = 'assets/pesquisar.png';
  usuario = 'assets/user.png';
  coracao = 'assets/coracao.png';
  carrinho = 'assets/carrinho-de-compras.png';

  isCartOpen = false; // Para controlar o pop-down do carrinho
  cartItems: any[] = []; // Armazena os itens do carrinho
  subtotal: number = 0; // Subtotal dos produtos

  constructor() {}

  ngOnInit() {
    this.loadCartItems(); // Carregar itens do localStorage quando o componente inicializa
  }

  // Função para abrir/fechar o carrinho
  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  // Carregar itens do localStorage
  loadCartItems() {
    if (typeof window !== 'undefined' && window.localStorage) { // Verifica se está no navegador
      const storedItems = localStorage.getItem('cart'); // Ajuste para 'cart'
      if (storedItems) {
        this.cartItems = JSON.parse(storedItems);
        this.calculateSubtotal();
      }
    }
  }

  // Calcular o subtotal dos itens do carrinho
  calculateSubtotal() {
    this.subtotal = this.cartItems.reduce((total, item) => {
      return total + item.preco * item.quantidade; // Ajuste para 'preco'
    }, 0);
  }
}
