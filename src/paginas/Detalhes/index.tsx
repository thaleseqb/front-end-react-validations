import { useQuery } from "@tanstack/react-query";
import Titulo from "../../componentes/Titulo";
import { TituloPrincipal } from "../../componentes/TituloPrincipal";
import "./Detalhes.css"
import { obterAutorPorId, obterLivroPorslug } from "../../http";
import { useParams } from "react-router-dom";
import Loader from "../../componentes/Loader";
import { AbBotao, AbGrupoOpcao, AbGrupoOpcoes, AbInputQuantidade } from "ds-alurabooks";

const Detalhes = () => {

    const params = useParams();

    const { data:livro, isLoading } = useQuery({
        queryKey: ["obterLivroPorSlug", params.slug],
        queryFn: () => obterLivroPorslug(params.slug || "")
    })

    const {data: autor} = useQuery({
        queryKey: ["obterAutorPorIdDoLivro"],
        queryFn: () => obterAutorPorId(livro?.autor!)
    })

    if (isLoading) {
        return (
            <Loader/>
        )
    }

    const arrayGrupoOpcao: AbGrupoOpcao[] =  livro?.opcoesCompra.map(opcao => {
        return {
            id: opcao.id,
            titulo: opcao.titulo,
            corpo: opcao.preco.toString(),
            rodape: opcao.formatos?.join(", ")!
        }
    })!

    return (
        <section className="detalheSection">
            <TituloPrincipal texto="Detalhes do livro"/>
            <div className="detalheContainer">

                <div className="infoLivroContainer">
                    <img className="detalheImagem" src={livro?.imagemCapa} alt={livro?.descricao} />

                    <div>
                        <h2>{livro?.titulo}</h2>
                        <h4>{livro?.descricao}</h4>
                        <h3>Selecione o seu formato de livro</h3>
                        <div className="tipos">
                            <AbGrupoOpcoes opcoes={arrayGrupoOpcao}/>
                        </div>
                        <h2>*Você terá acesso às futuras atualizações do livro</h2>

                        <div className="especificacoesContainer">
                            <AbInputQuantidade/>
                            <AbBotao texto="Comprar"/>
                        </div>
                    </div>

                </div>

                <div className="alignitems">
                    <Titulo texto="Sobre o autor" />
                    {autor?.sobre}
                    <Titulo texto="Sobre o livro" />
                    {livro?.sobre}
                    
                </div>
            </div>
        </section>
    )
}

export default Detalhes;
