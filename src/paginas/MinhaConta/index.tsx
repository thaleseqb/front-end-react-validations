import "./MinhaConta.css"
import { InfoPedido } from "../../componentes/InfoPedido"
import TagsCategorias from "../../componentes/TagsCategorias";
import { useEffect, useState } from "react";
import { IApiReposta } from "../../interfaces/IApiResposta";
import http from "../../http";

export const MinhaConta = () => {
    
    const [respostaApi, setRespostaApi] = useState<Array<IApiReposta>>([]);

    const opcoes = [
        "Pedidos",
        "Trocas",
        "Cupons",
        "Seus dados"
    ];

    const excluiPedido = (id: number) => {
        const token = sessionStorage.getItem("token");
        const idPedido = respostaApi.find(pedido => {
            return pedido.id === id;
        })?.id

        http.delete(`pedidos/${idPedido}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(resposta => {
                alert("Pedido excluído com sucesso");
            })
            .catch(erro => {
                console.log(erro);
            })
    }

    useEffect(() => {
        http.get<Array<IApiReposta>>("pedidos")
            .then(resposta => {
                setRespostaApi(resposta.data);
            })
            .catch(erro => {
                console.log(erro);
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
                    {respostaApi?.map(info => {
                        return (
                            <InfoPedido
                                excluiPedido={excluiPedido}
                                key={info.id}
                                dataEntrega={info.entrega}
                                dataPedido={info.data}
                                pedido={info.id}
                                valorTotal={info.total}
                            />
                        )
                    })}
                </div>
            </div>

            <TagsCategorias/>
        </>
    )
}