import "./Livro.css"
import { AbBotao } from "ds-alurabooks";
import { Link } from "react-router-dom";

interface LivroProps {
    imagem: string;
    titulo:string;
    descricaoPreco: number;
    slug: string;
}

const Livro = ({imagem, titulo, descricaoPreco, slug}:LivroProps) => {

    return (
        <div className="livroContainer">
            <img
                className="imagem" 
                src={imagem} 
                alt={`Imagem referente ao livro: ${titulo}`} 
            />
            <div className="descricaoContainer">
                <p>{titulo}</p>
                <p>A partir de: <strong>{descricaoPreco}</strong></p>
            </div>
            
            <Link
                className="routerDomLink"
                to={`/livro/${slug}`}
            >
                <AbBotao texto="Comprar"/>
            </Link>
        </div>
    )
}

export default Livro;