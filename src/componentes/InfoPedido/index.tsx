import { AbBotao } from "ds-alurabooks";
import "./InfoPedido.css"

interface InfoPedidoProps {
    pedido: number;
    dataPedido:Date;
    valorTotal:number;
    dataEntrega: Date;
    excluiPedido: (id:number) => void;
}

export const InfoPedido = ({
    pedido, 
    dataPedido, 
    valorTotal, 
    dataEntrega,
    excluiPedido}:InfoPedidoProps) => {
    
    return (
        <>
            <div className="containerPedido">
                <div>
                    <h3>Pedido: <strong>{pedido}</strong> </h3>
                    <h3>Data do pedido: <strong>{`${dataPedido}`}</strong> </h3>
                    <h3>Valor total: <strong> R$ {valorTotal}</strong> </h3>
                    <h3>Entrega realizada em: <strong>{`${dataEntrega}`}</strong></h3>
                </div>

                <div className="containerBotoes">
                    <AbBotao 
                        texto="Excluir pedido" 
                        onClick={() => excluiPedido(pedido)}    
                    />
                    <AbBotao texto="Detalhes"/>
                </div>
            </div>
            <hr/>
        </>

    )
}