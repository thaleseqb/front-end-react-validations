import { AbGrupoOpcoes } from "ds-alurabooks"
import "./MinhaConta.css"
import { InfoPedido } from "../../componentes/InfoPedido"
import TagsCategorias from "../../componentes/TagsCategorias";
import { hrtime } from "process";

export const MinhaConta = () => {
    
    const opcoes = [
        "Pedidos",
        "Trocas",
        "Cupons",
        "Seus dados"
    ];

    const infoPedidos =[
        {
            pedido: "89019041",
            dataPedido: "26/05/2022",
            valorTotal: "R$ 48",
            dataEntrega: "30/05/2022"
        },
        {
            pedido: "89019041",
            dataPedido: "23/03/2022",
            valorTotal: "R$ 65,66",
            dataEntrega: "30/03/2022"
        },
    ]

    return (
        <>
            <div className="headerMinhaConta">
                Minha conta
            </div>

            <div className="separadorContainer">
                <aside className="asideContainer">
                    {opcoes.map(opcao => {
                        return (
                            <div className="asideFragment">
                                <h4 >{opcao}</h4>
                                <hr className="barraHorizontal" />
                            </div>
                        )
                    })}
                </aside>
                


                <div className="divContainer">
                    <h2><strong>Pedidos</strong></h2>
                    {infoPedidos.map((infoPedido, index) => {
                        return (
                            <InfoPedido
                                key={infoPedido.pedido}
                                dataEntrega={infoPedido.dataEntrega}
                                dataPedido={infoPedido.dataPedido}
                                pedido={infoPedido.pedido}
                                valorTotal={infoPedido.valorTotal}
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