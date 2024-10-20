import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Produto } from '../../Produto';

@Component({
  selector: 'app-imagens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imagens.component.html',
  styleUrl: './imagens.component.scss'
})
export class ImagensComponent {

  @Input() produtos: Produto[] = []
  imagemSelecionada: string = '';

  ngOnInit() {

    if (this.produtos.length > 0 && this.produtos[0].imagem.length > 0) {
      this.imagemSelecionada = this.produtos[0].imagem[0]; // Selecionando a primeira imagem do primeiro produto
    }
  }


  selecionarImagem(imagem: string) {
    this.imagemSelecionada = imagem;
  }
}
