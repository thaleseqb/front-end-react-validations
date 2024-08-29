import { useQuery } from "@tanstack/react-query";
import "./Livro.css"
import { PropsWithChildren } from "react";
import { AbBotao } from "ds-alurabooks";

interface LivroProps {
    imagem: string;
    titulo:string;
    descricaoPreco: number;
}

const Livro = ({imagem, titulo, descricaoPreco}:LivroProps) => {

    return (
        <div className="livroContainer">
            <img
                className="imagem" 
                src={imagem} 
                alt={`Imagem referente ao livro: ${titulo}`} 
            />
            <div className="descricaoContainer">
                <h2>{titulo}</h2>
                <h3>{`A partir de: ${descricaoPreco}`}</h3>
            </div>
            
            <AbBotao texto="Comprar"/>
        </div>
    )
}

export default Livro;