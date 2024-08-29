import "./TituloPrincipal.css"

interface TituloProps {
    texto:string;
}

export const TituloPrincipal = ({texto}:TituloProps) => {
    return (
        <div className="containerTituloPrincipal">
            <h1 className="tituloPrincipal">{texto}</h1>
        </div>
    )
}