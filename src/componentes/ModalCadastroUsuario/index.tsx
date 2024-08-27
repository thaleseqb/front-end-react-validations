import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import image from "./assets/login.png"
import React, { useState } from "react"
import "./ModalCadastroUsuario.css"
import axios from "axios"

interface ModalProps {
    aberta: boolean;
    aoFechar: () => void;
}

export const ModalCadastroUSuario = ({aberta, aoFechar}:ModalProps) => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [endereco, setEndereco] = useState("");
    const [complemento, setComplemento] = useState("");
    const [senha, setSenha] = useState("");
    const [cep, setCep] = useState("");
    const [senhaConfirmada, setSenhaConfirmada] = useState("");

    const limparForm = () => {
        setNome("");
        setEmail("");
        setEndereco("");
        setComplemento("");
        setSenha("");
        setCep("");
        setSenhaConfirmada("");
        aoFechar();
    }

    const aoSubmeterForm = (evento:React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        const usuario = {
            nome,
            email,
            endereco,
            complemento,
            senha,
            cep,
            senhaConfirmada
        };

        axios.post("http://localhost:8000/public/registrar", usuario)
        .then( resposta => {
            alert("Usuario foi cadastrado com sucesso !");
            limparForm();
        }).catch(erro => {
            alert("Usuario não cadastrado");
            console.log(erro);
        })

    }

    return (
        <AbModal 
            titulo="Cadastrar"
            aberta={aberta}
            aoFechar={aoFechar}
        >
            <div className="modalCadastro">
                <figure>
                    <img src={image} alt="monitor e fechadura" />
                </figure>

                <form onSubmit={aoSubmeterForm}>
                    <AbCampoTexto 
                        value={nome}
                        label="Nome" 
                        onChange={setNome} 
                    />
                    <AbCampoTexto 
                        value={email}
                        label="Email" 
                        onChange={setEmail} 
                    />
                    <AbCampoTexto 
                        value={endereco}
                        label="Endereço" 
                        onChange={setEndereco} 
                    />
                    <div className="separador">
                        <AbCampoTexto 
                            value={complemento}
                            label="Complemento" 
                            onChange={setComplemento} 
                        />
                        <AbCampoTexto 
                            value={cep}
                            label="CEP" 
                            onChange={setCep} 
                        />
                    </div>
                    <AbCampoTexto 
                        value={senha}
                        label="Senha" 
                        onChange={setSenha} 
                    />
                    <AbCampoTexto 
                        value={senhaConfirmada}
                        label="Confirmar senha" 
                        onChange={setSenhaConfirmada} 
                    />

                    <footer>
                        <AbBotao texto="Cadastrar"/>
                    </footer>

                </form>
            </div>
        </AbModal>
    )
}