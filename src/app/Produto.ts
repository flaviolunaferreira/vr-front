export interface Produto {
  nome: string;
  tipo: string;
  descricao: string;
  preco: number;
  desconto: number;
  produtoNovo: boolean;
  imagem: string[];
  imagemDescricao: string[];
  outrosRelacionados: Produto[];
  avaliacao: number;
  cores: string[],
  tamanhos: string[]
}
