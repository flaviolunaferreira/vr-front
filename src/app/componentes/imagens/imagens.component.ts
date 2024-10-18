import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-imagens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imagens.component.html',
  styleUrl: './imagens.component.scss'
})
export class ImagensComponent {

  imagens: string[] = [
    'assets/moveis/img1.jpg',
    'assets/moveis/img2.jpg',
    'assets/moveis/img3.jpg',
    'assets/moveis/img4.jpg'
  ];

  imagemSelecionada: string = this.imagens[0];

  selecionarImagem(imagem: string) {
    this.imagemSelecionada = imagem;
  }
}
