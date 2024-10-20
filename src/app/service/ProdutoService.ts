import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produto } from './../Produto';
import { PRODUTOS_MOCK } from './../mock';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor() {}

  // Método para buscar todos os produtos
  getProdutos(): Observable<Produto[]> {
    return of(PRODUTOS_MOCK); // Simula o retorno de uma API
  }

  // Método para buscar um produto por nome
  getProduto(nome: string): Observable<Produto | undefined> {
    const produto = PRODUTOS_MOCK.find((p) => p.nome === nome);
    return of(produto);
  }
}
