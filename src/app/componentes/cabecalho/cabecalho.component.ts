import { Component } from '@angular/core';


@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent {

  empresa = 'VR Shopping';
  pesquisar = 'assets/pesquisar.png';
  usuario = 'assets/user.png';
  coracao = 'assets/coracao.png';
  carrinho = 'assets/carrinho-de-compras.png';

}
