import { AbBotao, AbCard } from "ds-alurabooks"
import { useState } from "react"
import { ILivro } from "../../interfaces/ILivro"

import './LivrosDestaque.css'
import { setSelectionRange } from "@testing-library/user-event/dist/utils"

interface LivrosDestaqueProps {
    livros: ILivro[]
}

const LivrosDestaque = ({ livros }: LivrosDestaqueProps) => {

    const [indiceSelecionado, setIndiceSelecionado] = useState<number>(0);
    const [selecionado, selecionarLivro] = useState<ILivro>(livros[0])

    return (<section className="LivrosDestaque">
        <div>
            <ul className="livros">
                {livros.map((livro, index) => {
                    return (
                    <li 
                        key={livro.titulo}
                        onClick={() => {
                            selecionarLivro(livro);
                            setIndiceSelecionado(index);
                        }} 
                        className={selecionado?.titulo === livro.titulo ? 'selecionado' : ''}
                    >
                        <img src={livro.imagemCapa} alt={`Capa do livro ${livro.titulo} escrito por ${livro.autor}`} />
                    </li>)
                })}
            </ul>
        </div>
        <AbCard>
            <div className="selecionado-detalhes">
                <header>
                    <h5>Sobre o livro:</h5>
                </header>
                <h6>{selecionado.titulo}</h6>
                <p>{selecionado.descricao}</p>
                <p>Por: {selecionado.autor}</p>
                <footer>
                    <div className="preco">
                        <em>A partir de:</em>
                        <strong>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(
                            selecionado.opcoesCompra[indiceSelecionado].preco
                        )}</strong>
                    </div>
                    <div>
                        <AbBotao texto="Comprar" />
                    </div>
                </footer>
            </div>
        </AbCard>
    </section>)

}

export default LivrosDestaque