import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-informacoes',
  standalone: true,
  imports: [CommonModule],
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


}
