import { Component } from '@angular/core';
import { ImagensComponent } from "../../componentes/imagens/imagens.component";
import { InformacoesComponent } from "../../componentes/informacoes/informacoes.component";
import { CompartilharComponent } from "../../componentes/compartilhar/compartilhar.component";
import { DescricaoComponent } from "../../componentes/descricao/descricao.component";

@Component({
  selector: 'app-detalhe-produto',
  standalone: true,
  imports: [ImagensComponent, InformacoesComponent, CompartilharComponent, DescricaoComponent],
  templateUrl: './detalhe-produto.component.html',
  styleUrl: './detalhe-produto.component.scss'
})
export class DetalheProdutoComponent {

}
