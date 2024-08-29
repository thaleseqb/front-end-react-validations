import { useEffect, useState } from "react";
import { TituloPrincipal } from "../../componentes/TituloPrincipal";
import "./Categoria.css"
import { ICategoria } from "../../interfaces/ICategoria";
import http from "../../http";
import { useParams } from "react-router-dom";
import Loader from "../../componentes/Loader";

const Categoria = () => {

    const [categoria, setCategoria] = useState<ICategoria>();
    const params = useParams();
    const [isLoading, setIsloading] = useState<boolean>();

    useEffect(() => {
        setIsloading(true);
        http.get("categorias", {
            params: {
                slug: params.slug
            }
        })
            .then(resposta => {
                setCategoria(resposta.data[0]);
                setIsloading(false);
            })
            .catch(erro => {
                console.log(erro);
                setIsloading(false);
            })
    },[params.slug])

    if (isLoading) {
        return (<Loader/>)
    }

    return (
        <section>
            <TituloPrincipal texto={`${categoria?.nome ?? ""}`} />
        </section>
    )
}

export default Categoria;