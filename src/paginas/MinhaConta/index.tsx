import "./MinhaConta.css"
import { InfoPedido } from "../../componentes/InfoPedido"
import TagsCategorias from "../../componentes/TagsCategorias";
import { useEffect, useState } from "react";
import axios from "axios";
import { IApiReposta } from "../../interfaces/IApiResposta";

export const MinhaConta = () => {
    
    const [respostaApi, setRespostaApi] = useState<Array<IApiReposta>>([]);

    const opcoes = [
        "Pedidos",
        "Trocas",
        "Cupons",
        "Seus dados"
    ];

    useEffect(() => {
        const token = sessionStorage.getItem("token");

        axios.get<Array<IApiReposta>>("http://localhost:8000/pedidos", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(resposta => {
                setRespostaApi(resposta.data);
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    return (
        <>
            <div className="headerMinhaConta">
                Minha conta
            </div>

            <div className="separadorContainer">
                <aside className="asideContainer">
                    {opcoes.map(opcao => {
                        return (
                            <div
                                key={opcao}
                                className="asideFragment"
                            >
                                <h4 >{opcao}</h4>
                                <hr className="barraHorizontal" />
                            </div>
                        )
                    })}
                </aside>

                <div className="divContainer">
                    <h2><strong>Pedidos</strong></h2>
                    {respostaApi?.map((info, index) => {
                        console.log(info)
                        return (
                            <InfoPedido
                                key={info.id}
                                dataEntrega={info.entrega}
                                dataPedido={info.data}
                                pedido={info.id}
                                valorTotal={info.total}
                                index={index}
                            />
                        )
                    })}
                </div>
            </div>

            <TagsCategorias/>
        </>
    )
}