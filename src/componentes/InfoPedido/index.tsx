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
                    <p>Pedido: <strong>{pedido}</strong> </p>
                    <p>Data do pedido: <strong>{`${dataPedido}`}</strong> </p>
                    <p>Valor total: <strong> R$ {valorTotal}</strong> </p>
                    <p>Entrega realizada em: <strong>{`${dataEntrega}`}</strong></p>
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