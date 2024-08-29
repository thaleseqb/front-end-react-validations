export interface ILivro {
    nome: string
    descricao: string
    autor: string
    imagem: string
    preco: number
}

export interface IBook {
    id: number
    categoria: number
    titulo: string
    slug: string
    descricao: string
    isbn: string
    numeroPaginas: number
    publicacao: string
    imagemCapa: string
    autor: number
    opcoesCompra: IOpcaoCompra[]
    sobre: string
}

export interface IOpcaoCompra {
    id: number;
    titulo: string;
    preco: number;
    formatos?: string[];
}