import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private cartItemsSource = new BehaviorSubject<any[]>(this.getCartItems());
  cartItems$ = this.cartItemsSource.asObservable();

  getCartItems() {
    if (typeof window !== 'undefined' && window.localStorage) {
      let storedItems = localStorage.getItem('cart');
      return storedItems ? JSON.parse(storedItems) : [];
    }
    return [];
  }

  adicionarAoCarrinho(item: any) {
    let storedItems = this.getCartItems();

    // Verifica se o item já existe no carrinho
    const existingItem = storedItems.find(
      (cartItem: any) => cartItem.nome === item.nome
    );

    if (existingItem) {
      // Se o item já existe, aumenta a quantidade
      existingItem.quantidade += item.quantidade;
    } else {
      // Caso contrário, adiciona o item ao carrinho
      storedItems.push(item);
    }

    // Atualiza o localStorage e o BehaviorSubject
    localStorage.setItem('cart', JSON.stringify(storedItems));
    this.cartItemsSource.next(storedItems); // Atualiza a lista de itens
  }

  apagarDoCarrinho(index: number) {
    let storedItems = this.getCartItems();
    storedItems.splice(index, 1); // Remove o item
    localStorage.setItem('cart', JSON.stringify(storedItems));
    this.cartItemsSource.next(storedItems); // Atualiza a lista de itens
  }

  limparCarrinho() {
    localStorage.removeItem('cart');
    this.cartItemsSource.next([]);
  }
}
