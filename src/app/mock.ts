import { Produto } from "./Produto";

export const PRODUTOS_MOCK: Produto[] = [
  {
    nome: 'Sofá de Madeira',
    tipo: 'Móveis',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut mi sed nisl mollis consequat non nec eros. Aenean cursus, purus in blandit lacinia, erat mi rutrum nisi.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut mi sed nisl mollis consequat non nec eros. Aenean cursus, purus in blandit lacinia, erat mi rutrum nisi, at condimentum elit nisl a nunc. Aliquam erat volutpat. Sed id vehicula eros. Nulla facilisi. Donec efficitur, tortor a sollicitudin elementum, ipsum metus feugiat massa, non lobortis ipsum tellus at elit. Quisque nec efficitur dui. Morbi auctor, sem et cursus interdum, est eros tincidunt nisi, id iaculis ligula eros a enim. Nunc id.',
    preco: 3000,
    desconto: 10,
    produtoNovo: true,
    imagem: ['assets/moveis/img1.jpg', 'assets/moveis/img2.jpg', 'assets/moveis/img3.jpg',
             'assets/moveis/img4.jpg'],
    imagemDescricao: ['assets/moveis/img-descricao.jpg', 'assets/moveis/img-descricao2.jpg'
    ]
  ,
    outrosRelacionados: [
      {
        nome: 'Estante Jap. Socupym',
        tipo: 'Socupym',
        descricao: 'Descrição do produto 1',
        preco: 199.99,
        desconto: 0,
        produtoNovo: false,
        imagem: ['assets/moveis/img1.jpg'],
        imagemDescricao: [],
        outrosRelacionados: [],
        avaliacao: 2,
        cores: [],
        tamanhos: []
      },
      {
        nome: 'Estante Jap. Socupym',
        tipo: 'Socupym',
        descricao: 'Descrição do produto 1',
        preco: 199.99,
        desconto: 0,
        produtoNovo: true,
        imagem: ['assets/moveis/img2.jpg'],
        imagemDescricao: [],
        outrosRelacionados: [],
        avaliacao: 5,
        cores: [],
        tamanhos: []
      },
      {
        nome: 'Estante Jap. Socupym',
        tipo: 'Socupym',
        descricao: 'Descrição do produto 1',
        preco: 199.99,
        desconto: 30,
        produtoNovo: false,
        imagem: ['assets/moveis/img3.jpg'],
        imagemDescricao: [],
        outrosRelacionados: [],
        avaliacao: 3,
        cores: [],
        tamanhos: []
      },
      {
        nome: 'Estante Jap. Socupym',
        tipo: 'Socupym',
        descricao: 'Descrição do produto 1',
        preco: 199.99,
        desconto: 50,
        produtoNovo: false,
        imagem: ['assets/moveis/img4.jpg'],
        imagemDescricao: [],
        outrosRelacionados: [],
        avaliacao: 4,
        cores: [],
        tamanhos: []
      }
    ],
    avaliacao: 9,
    cores: ['#FF0000', '#0000FF', '#008000', '#000000'],
    tamanhos: ['P', 'M', 'G']
  }
];
