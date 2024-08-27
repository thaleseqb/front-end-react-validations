import { AbBotao } from "ds-alurabooks";
import "./InfoPedido.css"

interface InfoPedidoProps {
    pedido: string;
    dataPedido:string;
    valorTotal:string;
    dataEntrega:string;
}

export const InfoPedido = ({pedido, dataPedido, valorTotal, dataEntrega}:InfoPedidoProps) => {
    return (
        <div className="containerPedido">
            <div>
                <h3>Pedido: <strong>{pedido}</strong> </h3>
                <h3>Data do pedido: <strong>{dataPedido}</strong> </h3>
                <h3>Valor total: <strong>{valorTotal}</strong> </h3>
                <h3>Entrega realizada em: <strong>{dataEntrega}</strong></h3>
            </div>

            <AbBotao texto="Detalhes"/>
        </div>
    )
}