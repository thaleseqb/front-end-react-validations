import { useQuery } from "@tanstack/react-query";
import { ICategoria } from "../../interfaces/ICategoria";
import { obterProdutosDaCategoria } from "../../http";
import Livro from "../Livro";
import "./ListaLivros.css"

interface ListaLivrosProps {
    categoria: ICategoria;
}

const ListaLivros = ({categoria}: ListaLivrosProps) => {
    
    const {data: produtos} = useQuery({
        queryKey:["buscaDeLivrosPorCategoria", categoria],
        queryFn: () => obterProdutosDaCategoria(categoria)
    })

    return (
        <section className="listaLivrosContainer">
            {produtos?.map(produto => {
                return (
                    <Livro 
                        key={produto.titulo}
                        descricaoPreco={produto.opcoesCompra[0].preco}
                        titulo={produto.titulo}
                        imagem={produto.imagemCapa} 
                    />
                )
            })}
        </section>
    )
}

export default ListaLivros;