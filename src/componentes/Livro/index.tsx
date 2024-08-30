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
                <p>{titulo}</p>
                <p>A partir de: <strong>{descricaoPreco}</strong></p>
            </div>
            
            <AbBotao texto="Comprar"/>
        </div>
    )
}

export default Livro;